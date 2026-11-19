require('./len');
const {
  default: makeWASocket,
  makeCacheableSignalKeyStore,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  downloadContentFromMessage,
  jidDecode,
} = require('baileys');
const fs = require('fs');
const pino = require('pino');
const chalk = require('chalk');
const path = require('path');
const https = require('https');
const FileType = require('file-type');
const { Boom } = require('@hapi/boom');
const moment = require('moment-timezone');
const PhoneNumber = require('awesome-phonenumber');
const cron = require('node-cron');
const os = require('os');
const { execSync } = require('child_process');
const qrcode = require('qrcode-terminal');

const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./library/exif');
const { smsg, getBuffer, getSizeMedia, sleep } = require('./library/myfunc');
const roles = require('./library/roles');
const { startHotReload } = require('./library/watcher');

function getTimeInfo() {
  const now = moment.tz('Asia/Jakarta');
  return {
    harinya: now.format('dddd'),
    tanggalnya: now.format('DD'),
    namabulannya: now.format('MMMM'),
    clock: now.format('HH:mm:ss'),
    wib: now.format('HH : mm : ss'),
    hariini2: now.format('DD MMMM YYYY'),
  };
}

const store = {
  contacts: {},
};

const DB_PATH = './storage/database.json';
const DEFAULT_DB = {
  users: {},
  chats: {},
  game: {},
  database: {},
  settings: {},
  setting: {},
  others: {},
  sticker: {},
};

let lastSavedDb = '';
global.db = {
  data: null,
  async read() {
    try {
      if (fs.existsSync(DB_PATH)) {
        const raw = fs.readFileSync(DB_PATH, 'utf8');
        lastSavedDb = raw;
        this.data = { ...DEFAULT_DB, ...(JSON.parse(raw) || {}) };
      } else {
        this.data = { ...DEFAULT_DB };
      }
    } catch {
      this.data = { ...DEFAULT_DB };
    }
  },
  async write() {
    if (!this.data) return;
    const serialized = JSON.stringify(this.data, null, 2);
    if (serialized === lastSavedDb) return;
    lastSavedDb = serialized;
    fs.writeFileSync(DB_PATH, serialized, 'utf8');
  },
};
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.data !== null) return global.db.data;
  await global.db.read();
  return global.db.data;
};
loadDatabase();

// Simpan database tiap 2 menit hanya jika ada perubahan data
setInterval(() => {
  global.db.write().catch(() => {});
}, 2 * 60 * 1000);

const border = chalk.cyan('======================================================');
let hasPrintedBanner = false;

function printStartupBanner(version, isLatest) {
  const totalRAM = Math.round(os.totalmem() / 1024 / 1024);
  const freeRAM = Math.round(os.freemem() / 1024 / 1024);
  const usedRAM = totalRAM - freeRAM;
  const waStatus = isLatest ? chalk.greenBright('(Latest)') : chalk.yellowBright('(Fallback)');
  console.log(border);
  console.log(`  ${chalk.magenta('❯')} ${chalk.white.bold('Developer')}  : ${chalk.greenBright(global.ownername)}`);
  console.log(`  ${chalk.magenta('❯')} ${chalk.white.bold('Status')}     : ${chalk.greenBright.bold('Online & Ready')}`);
  console.log(`  ${chalk.magenta('❯')} ${chalk.white.bold('WA Web')}     : ${chalk.cyanBright(`v${version.join('.')}`)} ${waStatus}`);
  console.log(`  ${chalk.magenta('❯')} ${chalk.white.bold('System')}     : ${chalk.yellowBright(`${os.platform()} ${os.arch()}`)}`);
  console.log(`  ${chalk.magenta('❯')} ${chalk.white.bold('Memory')}     : ${chalk.yellowBright(`${usedRAM} MB / ${totalRAM} MB`)}`);
  console.log(border);
  console.log(chalk.gray.italic('  "Good luck, have fun coding!"\n'));
}

const originalConsoleLog = console.log;
const originalConsoleInfo = console.info;
const IGNORED_SIGNAL_LOGS = [
  'Removing old closed session',
  'Closing session',
  'Opening session',
  'Closing stale open session',
  'Closing open session',
  'Session already closed',
  'Decrypted message with closed session',
];

function isIgnoredSignalLog(args) {
  return typeof args[0] === 'string' && IGNORED_SIGNAL_LOGS.some(p => args[0].includes(p));
}

console.log = function (...args) {
  if (isIgnoredSignalLog(args)) return;
  originalConsoleLog.apply(console, args);
};
console.info = function (...args) {
  if (isIgnoredSignalLog(args)) return;
  originalConsoleInfo.apply(console, args);
};

const httpsAgent = new https.Agent({
  keepAlive: true,
  maxSockets: 50,
});

if (!global.__fetchWrapped) {
  global.__fetchWrapped = true;
  const originalFetch = global.fetch;
  global.fetch = async function (url, options = {}, retry = 5) {
    try {
      options.agent = httpsAgent;
      return await originalFetch(url, options);
    } catch (err) {
      const code = err?.cause?.code || err?.code;
      if (retry > 0 && ['EAI_AGAIN', 'ENOTFOUND', 'ECONNRESET', 'ETIMEDOUT'].includes(code)) {
        await sleep(2000);
        return global.fetch(url, options, retry - 1);
      }
      throw err;
    }
  };
}

let activeSocket = null;

function cleanupSocket(sock) {
  if (!sock) return;
  try {
    sock.ev.removeAllListeners();
  } catch {}
  try {
    sock.ws?.close();
  } catch {}
}

async function connectToWhatsApp() {
  if (activeSocket) {
    cleanupSocket(activeSocket);
    activeSocket = null;
  }

  const { state, saveCreds } = await useMultiFileAuthState(global.sessionName);
  const { version, isLatest } = await fetchLatestBaileysVersion({ timeout: 5000 }).catch(() => ({
    version: [2, 3000, 1043857760],
    isLatest: false,
  }));

  if (!hasPrintedBanner) {
    hasPrintedBanner = true;
    printStartupBanner(version, isLatest);
  }

  let phoneNumber = global.botNumber;
  if (global.usePairingCode && !state.creds.registered) {
    console.log(`  ${chalk.magenta('❯')} ${chalk.white.bold('Nomor Bot Anda')} : ${chalk.greenBright.bold(phoneNumber)}`);
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
  }

  const lenwy = makeWASocket({
    version,
    logger: pino({ level: 'silent' }),
    syncFullHistory: false,
    connectTimeoutMs: 60000,
    keepAliveIntervalMs: 10000,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'silent' })),
    },
  });
  activeSocket = lenwy;

  if (global.usePairingCode && !lenwy.authState.creds.registered && phoneNumber) {
    setTimeout(async () => {
      try {
        let code = await lenwy.requestPairingCode(phoneNumber);
        code = code?.match(/.{1,4}/g)?.join('-') || code;
        console.log(` ${chalk.white.bold('Pairing Code')}   : ${chalk.greenBright.bold(code)}`);
      } catch (err) {
        console.error('Gagal mendapatkan pairing code:', err);
      }
    }, 500);
  }

  lenwy.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      const decode = jidDecode(jid) || {};
      return (decode.user && decode.server && decode.user + '@' + decode.server) || jid;
    }
    return jid;
  };

  async function handleMlbbAutoDetect(m, client) {
    const msgText = (m.text || m.body || '').trim();
    const match = msgText.match(/^(\d{6,12})\s*\((\d{3,5})\)$/);
    if (!match) return;
    const [, userId, zoneId] = match;
    const url = `https://deoberon-api.vercel.app/stalk/mlbb?apikey=merl&userId=${userId}&zoneId=${zoneId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) return;
      const data = await response.json();
      if (!data?.status || !data.country_flag) return;
      if (m.key?.id) {
        await client.sendMessage(m.chat, {
          react: { text: data.country_flag, key: m.key },
        });
      }
    } catch (err) {
      console.error('Error MLBB AutoDetect:', err?.message || err);
    }
  }

  lenwy.ev.on('messages.upsert', async (chatUpdate) => {
    try {
      const mek = chatUpdate.messages?.[0];
      if (!mek || !mek.message) return;

      mek.message =
        Object.keys(mek.message)[0] === 'ephemeralMessage'
          ? mek.message.ephemeralMessage.message
          : mek.message;

      const remoteJid = mek.key?.remoteJid || '';
      if (remoteJid === 'status@broadcast') return;
      if (mek.key?.id?.startsWith('BAE5') && mek.key.id.length === 16) return;

      if (!remoteJid.endsWith('@g.us') && !mek.key?.fromMe) {
        const rawText = mek.message.extendedTextMessage?.text || mek.message.conversation || '';
        if (rawText.toLowerCase().includes('sayangg.. ada yang error nih! di bagian')) {
          await lenwy.updateBlockStatus(remoteJid, 'block').catch(() => {});
          return;
        }
      }

      const m = smsg(lenwy, mek, store);
      handleMlbbAutoDetect(m, lenwy).catch(() => {});
      require('./lenwy')(lenwy, m, chatUpdate, store);
    } catch (err) {
      console.log(err);
    }
  });

  lenwy.ev.on('call', async (celled) => {
    if (!global.anticall) return;
    for (const kopel of celled) {
      if (!kopel.isGroup && kopel.status === 'offer') {
        await lenwy.updateBlockStatus(kopel.from, 'block').catch(() => {});
      }
    }
  });

  lenwy.ev.on('groups.update', (updates) => {
    for (const u of updates) {
      if (u?.id) global.groupMetaCache?.delete(u.id);
    }
  });

  lenwy.ev.on('group-participants.update', async ({ id, participants, action }) => {
    try {
      global.groupMetaCache?.delete(id);
      const getJson = (file) => {
        try {
          return JSON.parse(fs.readFileSync(file, 'utf8'));
        } catch {
          return null;
        }
      };

      const databasegc = getJson('./storage/databaseGroup.json') || {};
      let ripperList = getJson('./storage/dataRipper.json');
      if (!Array.isArray(ripperList)) ripperList = [];

      const metadata = await lenwy.groupMetadata(id).catch(() => ({}));
      const groupName = metadata?.subject || '-';
      const botNumber = lenwy.decodeJid(lenwy.user?.id);
      const isBotAdmins = metadata?.participants?.some(p => p.id === botNumber && p.admin);

      const chatDb = global.db.data?.chats?.[id] || {};
      const { wlcm: isWelcomeEnabled, left: isLeftEnabled } = chatDb;
      const { wib, harinya, hariini2 } = getTimeInfo();

      for (const user of participants) {
        const usertag = `@${user.split('@')[0]}`;
        const tag = [user];

        const replaceTpl = (text) =>
          (text || '').replace(
            /{GROUPNAME}|{TAG}|{JAM}|{NAMAHARI}|{TANGGAL}/g,
            match =>
              ({
                '{GROUPNAME}': groupName,
                '{TAG}': usertag,
                '{JAM}': wib,
                '{NAMAHARI}': harinya,
                '{TANGGAL}': hariini2,
              })[match]
          );

        const settextwel =
          replaceTpl(databasegc[id]?.text_welcome) ||
          `Halo ${usertag}, selamat datang di grup *${groupName}*`;
        const settextleft =
          replaceTpl(databasegc[id]?.text_left) ||
          `Sampai jumpa, ${usertag} telah meninggalkan grup.`;

        if (action === 'add') {
          if (isWelcomeEnabled) {
            await lenwy.sendMessage(id, { text: settextwel, contextInfo: { mentionedJid: tag } });
          }

          if (ripperList.includes(user.replace(/\D/g, ''))) {
            if (!isBotAdmins) continue;
            await sleep(500);
            console.log(`Ripper ${user} otomatis dikeluarkan dari ${groupName}`);
            await lenwy.sendTextWithMentions(
              id,
              `Halo ${usertag}, ${global.botname} mengeluarkan kamu karena nomor ini tercatat di daftar ripper.`
            );
            await lenwy.groupParticipantsUpdate(id, tag, 'remove');
          }
        }

        if (action === 'remove' && isLeftEnabled) {
          await lenwy.sendMessage(id, { text: settextleft, contextInfo: { mentionedJid: tag } });
        }
      }
    } catch (err) {
      console.error(err);
    }
  });

  lenwy.ev.on('contacts.update', (update) => {
    for (const contact of update) {
      const id = lenwy.decodeJid(contact.id);
      if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
    }
  });

  lenwy.getName = (jid, withoutContact = false) => {
    const id = lenwy.decodeJid(jid);
    withoutContact = lenwy.withoutContact || withoutContact;
    let v;
    if (id.endsWith('@g.us')) {
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = (await lenwy.groupMetadata(id).catch(() => ({}))) || {};
        resolve(
          v.name ||
            v.subject ||
            PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international')
        );
      });
    }
    v =
      id === '0@s.whatsapp.net'
        ? { id, name: 'WhatsApp' }
        : id === lenwy.decodeJid(lenwy.user?.id)
          ? lenwy.user
          : store.contacts[id] || {};
    return (
      (withoutContact ? '' : v.name) ||
      v.subject ||
      v.verifiedName ||
      PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    );
  };

  lenwy.sendContact = async (jid, kon, quoted = '', opts = {}) => {
    if (!Array.isArray(kon) || kon.length === 0) return;
    const contacts = [];
    for (const item of kon) {
      const num = String(item).split('@')[0].replace(/[^0-9]/g, '');
      if (!num) continue;
      const contactName = await lenwy.getName(num + '@s.whatsapp.net');
      contacts.push({
        displayName: contactName,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${contactName}\nFN:${contactName}\nitem1.TEL;waid=${num}:${num}\nitem1.X-ABLabel:Owner - ${global.ownername}\nitem2.URL:Owner Bot ${global.botname}\nitem2.X-ABLabel:Bot\nEND:VCARD`,
      });
    }
    if (contacts.length === 0) return;
    await lenwy.sendMessage(
      jid,
      { contacts: { displayName: `${contacts.length} Kontak`, contacts }, ...opts },
      { quoted }
    );
  };

  lenwy.downloadMediaMessage = async (message) => {
    const mime = (message.msg || message).mimetype || '';
    const messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
  };

  lenwy.sendImage = async (jid, imgPath, caption = '', quoted = '', options) => {
    const buffer = Buffer.isBuffer(imgPath)
      ? imgPath
      : /^data:.*?\/.*?;base64,/i.test(imgPath)
        ? Buffer.from(imgPath.split`,`[1], 'base64')
        : /^https?:\/\//.test(imgPath)
          ? await getBuffer(imgPath)
          : fs.existsSync(imgPath)
            ? fs.readFileSync(imgPath)
            : Buffer.alloc(0);
    return await lenwy.sendMessage(jid, { image: buffer, caption, ...options }, { quoted });
  };

  lenwy.sendText = (jid, text, quoted = '', options) =>
    lenwy.sendMessage(jid, { text, ...options }, { quoted });

  lenwy.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
    lenwy.sendMessage(
      jid,
      {
        text,
        contextInfo: {
          mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        },
        ...options,
      },
      { quoted }
    );

  lenwy.sendImageAsSticker = async (jid, imgPath, quoted, options = {}) => {
    const buff = Buffer.isBuffer(imgPath)
      ? imgPath
      : /^data:.*?\/.*?;base64,/i.test(imgPath)
        ? Buffer.from(imgPath.split`,`[1], 'base64')
        : /^https?:\/\//.test(imgPath)
          ? await getBuffer(imgPath)
          : fs.existsSync(imgPath)
            ? fs.readFileSync(imgPath)
            : Buffer.alloc(0);
    const buffer =
      options && (options.packname || options.author)
        ? await writeExifImg(buff, options)
        : await imageToWebp(buff);
    await lenwy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
    return buffer;
  };

  lenwy.sendVideoAsSticker = async (jid, vidPath, quoted, options = {}) => {
    const buff = Buffer.isBuffer(vidPath)
      ? vidPath
      : /^data:.*?\/.*?;base64,/i.test(vidPath)
        ? Buffer.from(vidPath.split`,`[1], 'base64')
        : /^https?:\/\//.test(vidPath)
          ? await getBuffer(vidPath)
          : fs.existsSync(vidPath)
            ? fs.readFileSync(vidPath)
            : Buffer.alloc(0);
    const buffer =
      options && (options.packname || options.author)
        ? await writeExifVid(buff, options)
        : await videoToWebp(buff);
    await lenwy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
    return buffer;
  };

  lenwy.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    const quoted = message.msg ? message.msg : message;
    const mime = (message.msg || message).mimetype || '';
    const messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    const type = (await FileType.fromBuffer(buffer)) || { ext: 'bin' };
    const trueFileName = attachExtension ? `${filename}.${type.ext}` : filename;
    fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };

  lenwy.sendFile = async (jid, PATH, fileName, quoted = {}, options = {}) => {
    const types = await lenwy.getFile(PATH, true);
    const { filename, mime, data } = types;
    let type = '';
    let mimetype = mime;
    let pathFile = filename;
    if (options.asDocument) type = 'document';
    if (options.asSticker || /webp/.test(mime)) {
      const { writeExif } = require('./library/exif.js');
      const media = { mimetype: mime, data };
      pathFile = await writeExif(media, {
        packname: global.packname,
        author: global.packname2,
        categories: options.categories ? options.categories : [],
      });
      await fs.promises.unlink(filename).catch(() => {});
      type = 'sticker';
      mimetype = 'image/webp';
    } else if (/image/.test(mime)) type = 'image';
    else if (/video/.test(mime)) type = 'video';
    else if (/audio/.test(mime)) type = 'audio';
    else type = 'document';
    await lenwy.sendMessage(
      jid,
      { [type]: { url: pathFile }, mimetype, fileName, ...options },
      { quoted, ...options }
    );
    return fs.promises.unlink(pathFile).catch(() => {});
  };

  lenwy.parseMention = async (text) => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net');
  };

  lenwy.copyNForward = async (jid, message, forceForward = false, options = {}) => {
    if (options.readViewOnce) {
      message.message =
        message.message &&
        message.message.ephemeralMessage &&
        message.message.ephemeralMessage.message
          ? message.message.ephemeralMessage.message
          : message.message || undefined;
      const vtype = Object.keys(message.message.viewOnceMessage.message)[0];
      delete (message.message && message.message.ignore
        ? message.message.ignore
        : message.message || undefined);
      delete message.message.viewOnceMessage.message[vtype].viewOnce;
      message.message = {
        ...message.message.viewOnceMessage.message,
      };
    }
    const mtype = Object.keys(message.message)[0];
    const content = await generateForwardMessageContent(message, forceForward);
    const ctype = Object.keys(content)[0];
    let context = {};
    if (mtype !== 'conversation') context = message.message[mtype].contextInfo;
    content[ctype].contextInfo = {
      ...context,
      ...content[ctype].contextInfo,
    };
    const waMessage = await generateWAMessageFromContent(
      jid,
      content,
      options
        ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo
              ? {
                  contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo,
                  },
                }
              : {}),
          }
        : {}
    );
    await lenwy.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id });
    return waMessage;
  };

  lenwy.getFile = async (PATH, save) => {
    let res;
    let filename;
    const data = Buffer.isBuffer(PATH)
      ? PATH
      : /^data:.*?\/.*?;base64,/i.test(PATH)
        ? Buffer.from(PATH.split`,`[1], 'base64')
        : /^https?:\/\//.test(PATH)
          ? await (res = await getBuffer(PATH))
          : fs.existsSync(PATH)
            ? ((filename = PATH), fs.readFileSync(PATH))
            : typeof PATH === 'string'
              ? PATH
              : Buffer.alloc(0);
    const type = (await FileType.fromBuffer(data)) || {
      mime: 'application/octet-stream',
      ext: 'bin',
    };
    filename = path.join(os.tmpdir(), `${Date.now()}.${type.ext}`);
    if (data && save) await fs.promises.writeFile(filename, data);
    return {
      res,
      filename,
      size: await getSizeMedia(data),
      ...type,
      data,
    };
  };

  lenwy.serializeM = (m) => smsg(lenwy, m, store);

  lenwy.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect, qr } = update;
    if (qr && !global.usePairingCode) {
      console.log(` ${chalk.white.bold('Silahkan scan QR ini')}`);
      qrcode.generate(qr, { small: true });
    }

    if (connection === 'close') {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;

      if (reason === DisconnectReason.badSession) {
        console.log('Sesi bermasalah (Bad Session), mencoba menghubungkan ulang...');
        await sleep(3000);
        connectToWhatsApp();
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log('Koneksi ditutup, menghubungkan kembali...');
        await sleep(3000);
        connectToWhatsApp();
      } else if (reason === DisconnectReason.connectionLost) {
        console.log('Koneksi ke server hilang, menghubungkan kembali...');
        await sleep(3000);
        connectToWhatsApp();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log('Koneksi tertimpa sesi lain, hentikan proses agar tidak tabrakan.');
        process.exit();
      } else if (reason === DisconnectReason.loggedOut) {
        console.log('Perangkat dikeluarkan (Logged Out). Menghapus folder session...');
        fs.rmSync(`./${global.sessionName}`, { recursive: true, force: true });
        process.exit();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log('Sistem meminta restart koneksi...');
        await sleep(2000);
        connectToWhatsApp();
      } else if (reason === DisconnectReason.timedOut) {
        console.log('Koneksi timeout, menghubungkan kembali...');
        await sleep(3000);
        connectToWhatsApp();
      } else if (reason === 405) {
        console.log('Koneksi ditolak (405). Menunggu 5 detik sebelum menghubungkan kembali...');
        await sleep(5000);
        connectToWhatsApp();
      } else {
        console.log(`Koneksi terputus (${reason} | ${connection}), menghubungkan kembali...`);
        await sleep(3000);
        connectToWhatsApp();
      }
    } else if (connection === 'open') {
      console.log(chalk.greenBright('╭──────────────────────────────────────────────────╮'));
      console.log(
        chalk.greenBright('│') +
          chalk.white.bold('       BOT BERHASIL TERHUBUNG KE WHATSAPP!        ') +
          chalk.greenBright('│')
      );
      console.log(chalk.greenBright('╰──────────────────────────────────────────────────╯'));
    }
  });

  lenwy.ev.on('creds.update', saveCreds);
  return lenwy;
}

async function compressSc(sourceDir, outputZip, selectedFiles = global.backupFiles) {
  return new Promise((resolve, reject) => {
    const { clock } = getTimeInfo();
    console.log(`${chalk.greenBright(`[ ${clock} ]`)} ${chalk.greenBright('Membuat file backup...')}`);

    const allItems = fs.readdirSync(sourceDir);
    const trashRegex = /\.(gif|png|mp3|mp4|jpg|jpeg|webp|webm|zip|tar\.gz|rar)$/i;

    allItems.forEach((item) => {
      if (!selectedFiles.includes(item) && trashRegex.test(item)) {
        const itemPath = path.join(sourceDir, item);
        try {
          if (fs.lstatSync(itemPath).isFile()) {
            fs.unlinkSync(itemPath);
          }
        } catch (err) {
          console.error(`Gagal hapus file sampah ${item}:`, err);
        }
      }
    });

    try {
      const whitelistForZip = selectedFiles
        .filter(f => fs.existsSync(path.join(sourceDir, f)))
        .join(' ');
      execSync(`zip -r ${outputZip} ${whitelistForZip}`, { stdio: ['inherit', 'silent'] });

      console.log(
        `${chalk.greenBright(`[ ${getTimeInfo().clock} ]`)} ${chalk.greenBright(
          `File backup dibuat: ${outputZip}`
        )}`
      );
      resolve();
    } catch (err) {
      console.error('Gagal membuat ZIP:', err);
      reject(err);
    }
  });
}

async function startBackupProcess() {
  if (!global.autobackup || !activeSocket || !activeSocket.user) return;
  const { tanggalnya, namabulannya } = getTimeInfo();
  const zipFile = `Sc${global.ownername}_${tanggalnya}-${namabulannya}`;
  await compressSc('.', zipFile);
  try {
    await activeSocket
      .sendMessage(`${global.owner}@s.whatsapp.net`, {
        document: { url: `./${zipFile}.zip` },
        fileName: `${zipFile}.zip`,
        mimetype: 'application/zip',
      })
      .catch(err => console.log('Gagal kirim backupan:', err));

    fs.unlink(`./${zipFile}.zip`, (err) => {
      if (err) {
        console.error('Gagal menghapus backup.zip:', err);
      } else {
        console.log(`File "${zipFile}.zip" telah dihapus`);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

let isCheckingSewa = false;
const isNotInGroupError = (err) => {
  const msg = String(err || '').toLowerCase();
  return (
    msg.includes('item-not-found') ||
    msg.includes('not-authorized') ||
    msg.includes('not-a-participant') ||
    msg.includes('404') ||
    msg.includes('403') ||
    msg.includes('gone')
  );
};

const expiredCheck = async (lenwy) => {
  if (isCheckingSewa || !lenwy || !lenwy.user) return;
  isCheckingSewa = true;
  try {
    const pathsewa = './storage/sewa.json';
    const getJson = (file) => {
      try {
        return JSON.parse(fs.readFileSync(file, 'utf8'));
      } catch {
        return null;
      }
    };
    let sewa = getJson(pathsewa) || [];
    if (!Array.isArray(sewa)) sewa = [];
    const authorrr = roles.getAllOwners();
    let dataChanged = false;

    for (let i = sewa.length - 1; i >= 0; i--) {
      const item = sewa[i];
      if (!item || item.isAlifetime || !item.expired) continue;
      const msLeft = item.expired - Date.now();

      try {
        if (msLeft <= 0) {
          console.log(`Sewa expired: ${item.groupId}`);
          let metadata = null;
          try {
            metadata = await lenwy.groupMetadata(item.groupId);
          } catch (err) {
            if (isNotInGroupError(err)) {
              sewa.splice(i, 1);
              dataChanged = true;
            }
            continue;
          }

          const subject = metadata?.subject || item.groupId;
          const invite = await lenwy.groupInviteCode(item.groupId).catch(() => '-');
          const linkgc = invite !== '-' ? `https://chat.whatsapp.com/${invite}` : '-';

          await lenwy
            .sendMessage(item.groupId, {
              text: `Masa sewa di grup ini sudah habis, bot akan keluar otomatis.\nJika ingin memperpanjang sewa, hubungi https://wa.me/${global.owner}`,
            })
            .catch(() => {});
          if (authorrr.length > 0) {
            await lenwy.sendContact(item.groupId, authorrr).catch(() => {});
          }
          await lenwy
            .sendMessage(`${global.owner}@s.whatsapp.net`, {
              text: `Masa sewa di grup *${subject}* sudah habis.\n\n> ID grup : ${item.groupId}\n> Nama grup : ${subject}\n> Link grup : ${linkgc}`,
            })
            .catch(() => {});

          await sleep(2000);

          let leftGroup = false;
          try {
            await lenwy.groupLeave(item.groupId);
            leftGroup = true;
          } catch (leaveErr) {
            if (isNotInGroupError(leaveErr)) {
              leftGroup = true;
            } else {
              console.error(
                `Gagal keluar dari ${item.groupId}, akan dicoba lagi menit berikutnya:`,
                leaveErr?.message || leaveErr
              );
            }
          }

          if (leftGroup) {
            sewa.splice(i, 1);
            dataChanged = true;
          }
          continue;
        }

        if (msLeft > 0 && msLeft <= 86400000 && !item.reminded1d) {
          const h = Math.floor(msLeft / 3600000);
          const m = Math.floor((msLeft % 3600000) / 60000);
          const s = Math.floor((msLeft % 60000) / 1000);
          await lenwy
            .sendMessage(item.groupId, {
              text: `Sisa masa sewa di grup ini tinggal *${h} jam ${m} menit ${s} detik*. Hubungi admin atau owner jika ingin memperpanjang sewa.`,
            })
            .catch(() => {});
          if (authorrr.length > 0) {
            await lenwy.sendContact(item.groupId, authorrr).catch(() => {});
          }
          item.reminded1d = true;
          dataChanged = true;
        }
      } catch (err) {
        if (isNotInGroupError(err)) {
          sewa.splice(i, 1);
          dataChanged = true;
        } else {
          console.error(`Error expiredCheck (${item.groupId}):`, err?.message || err);
        }
      }
    }

    if (dataChanged) {
      fs.writeFileSync(pathsewa, JSON.stringify(sewa, null, 2), 'utf8');
    }
  } catch (error) {
    console.error('Terjadi kesalahan utama di expiredCheck:', error.message);
  } finally {
    isCheckingSewa = false;
  }
};
global.expiredCheck = expiredCheck;

cron.schedule('59 23 * * *', () => {
  startBackupProcess();
});

cron.schedule('*/10 * * * *', async () => {
  if (!activeSocket || !activeSocket.user) return;
  let ripperList = [];
  const pathRipper = path.join(__dirname, './storage/dataRipper.json');

  if (fs.existsSync(pathRipper)) {
    try {
      ripperList = JSON.parse(fs.readFileSync(pathRipper, 'utf8'));
      if (!Array.isArray(ripperList)) ripperList = [];
    } catch {
      ripperList = [];
    }
  }
  if (ripperList.length === 0) return;

  try {
    const botNumber = activeSocket.decodeJid(activeSocket.user.id);
    const groupList = await activeSocket.groupFetchAllParticipating();

    for (const groupId in groupList) {
      try {
        const metadata = groupList[groupId];
        if (!metadata) continue;
        const participants = metadata.participants || [];
        const isBotAdmin = participants.some(p => p.id === botNumber && p.admin !== null);
        if (!isBotAdmin) continue;

        const ripperMembers = participants
          .filter(member => ripperList.includes(member.id.replace(/[^0-9]/g, '')))
          .map(member => member.id);

        if (ripperMembers.length > 0) {
          const mentionsText = ripperMembers.map(id => `@${id.split('@')[0]}`).join(', ');
          await activeSocket.sendTextWithMentions(
            groupId,
            `${mentionsText} terdeteksi di daftar ripper dan dikeluarkan dari grup.`
          );
          await activeSocket.groupParticipantsUpdate(groupId, ripperMembers, 'remove');
          console.log(`Ripper ${ripperMembers.join(', ')} dikeluarkan dari ${metadata.subject}`);
        }
      } catch (err) {
        console.error(`Gagal memproses grup ${groupId}:`, err);
      }
    }
  } catch (error) {
    console.error('Terjadi kesalahan saat mengecek daftar grup ripper:', error);
  }
});

cron.schedule('* * * * *', () => {
  expiredCheck(activeSocket);
});

startHotReload();
connectToWhatsApp();
