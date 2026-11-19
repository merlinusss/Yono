require('./len')
const { default: Browsers, makeWASocket, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, fetchLatestWaWebVersion, generateForwardMessageContent, generateWAMessageFromContent, downloadContentFromMessage, jidDecode, proto } = require("baileys")
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const path = require('path')
const readline = require("readline");
const axios = require('axios')
const FileType = require('file-type')
const { Boom } = require('@hapi/boom')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const cron = require('node-cron');
const os = require('os');
const { exec, spawn, execSync } = require("child_process")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./library/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./library/myfunc')
const qrcode = require('qrcode-terminal');
const util = require('util');

const harinya = moment.tz('Asia/Jakarta').format('dddd')
const tanggalnya = moment.tz('Asia/Jakarta').format('DD')
const bulannya = moment.tz('Asia/Jakarta').format('MM')
const tahunnya = moment.tz('Asia/Jakarta').format('YYYY')
const namabulannya = moment.tz('Asia/Jakarta').format('MMMM')
const jamnya = moment.tz('Asia/Jakarta').format('HH')
const menitnya = moment.tz('Asia/Jakarta').format('mm')
const detiknya = moment.tz('Asia/Jakarta').format('ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const hariini2 = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')

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
  sticker: {}
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
  }
};
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.data !== null) return global.db.data;
  await global.db.read();
  return global.db.data;
};
loadDatabase();

// Simpan database tiap 2 menit HANYA jika ada perubahan data
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

  console.log(chalk.cyanBright.bold(`\n  === ${global.botname.toUpperCase()} BOT ===`));
  console.log(border);
  console.log(`  ${chalk.magenta('❯')} ${chalk.white.bold('Developer')}  : ${chalk.greenBright(global.ownername)}`);
  console.log(`  ${chalk.magenta('❯')} ${chalk.white.bold('Status')}     : ${chalk.greenBright.bold('Online & Ready 🚀')}`);
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
  if (typeof args[0] === 'string' && IGNORED_SIGNAL_LOGS.some(p => args[0].includes(p))) {
    return true;
  }
  return false;
}

console.log = function (...args) {
  if (isIgnoredSignalLog(args)) return;
  originalConsoleLog.apply(console, args);
};
console.info = function (...args) {
  if (isIgnoredSignalLog(args)) return;
  originalConsoleInfo.apply(console, args);
};
const https = require("https")
const httpsAgent = new https.Agent({
  keepAlive: true,
  maxSockets: 50
})

if (!global.__fetchWrapped) {
  global.__fetchWrapped = true
  const originalFetch = global.fetch
  global.fetch = async function (url, options = {}, retry = 5) {
    try {
      options.agent = httpsAgent
      return await originalFetch(url, options)
    } catch (err) {
      const code = err?.cause?.code || err?.code
      if (retry > 0 && ["EAI_AGAIN", "ENOTFOUND", "ECONNRESET", "ETIMEDOUT"].includes(code)) {
        await sleep(2000)
        return global.fetch(url, options, retry - 1)
      }
      throw err
    }
  }
}

let activeSocket = null;

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)
  const { version, isLatest } = await fetchLatestBaileysVersion({ timeout: 5000 }).catch(() => ({ version: [2, 3000, 1047675214], isLatest: false }));

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
    logger: pino({ level: "silent" }),
    syncFullHistory: false,
    connectTimeoutMs: 60000,
    keepAliveIntervalMs: 10000,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" })),
    }
  });
  activeSocket = lenwy;

  lenwy.ev.on("connection.update", async (update) => {
    const { connection, qr } = update;
    if (qr && !global.usePairingCode) {
      console.log(` ${chalk.white.bold('🔗 Silahkan scan QR ini')}`);
      qrcode.generate(qr, { small: true });
    }
  });

  if (global.usePairingCode && !lenwy.authState.creds.registered && phoneNumber) {
    setTimeout(async () => {
      try {
        let code = await lenwy.requestPairingCode(phoneNumber);
        code = code?.match(/.{1,4}/g)?.join("-") || code;
        console.log(` ${chalk.white.bold('📌 Pairing Code')}   : ${chalk.greenBright.bold(code)}`);
      } catch (err) {
        console.error('Gagal mendapatkan pairing code:', err);
      }
    }, 500);
  }

  // Setting ntah ---
  lenwy.decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {}
      return decode.user && decode.server && decode.user + '@' + decode.server || jid
    } else return jid
  }

  lenwy.ev.on('messages.upsert', async chatUpdate => {
    try {
      mek = chatUpdate.messages[0]
      if (!mek.message) return
      mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
      if (mek.key && mek.key.remoteJid === 'status@broadcast') return
      if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
      m = smsg(lenwy, mek, store)
      require("./lenwy")(lenwy, m, chatUpdate, store)
    } catch (err) {
      console.log(err)
    }
  })

  lenwy.ev.on('call', async (celled) => {
    let botNumber = await lenwy.decodeJid(lenwy.user.id)
    let koloi = global.anticall
    if (!koloi) return
    console.log(celled)
    for (let kopel of celled) {
      if (kopel.isGroup == false) {
        if (kopel.status == "offer") {
          let nomer = await lenwy.sendTextWithMentions(kopel.from, `*${lenwy.user.name}* Tidak Menerima Panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} Kamu Diblokir. Silahkan Hubungi Owner !`)
          lenwy.sendContact(kopel.from, owner.map(i => i.split("@")[0]), nomer)
          await sleep(8000)
          await lenwy.updateBlockStatus(kopel.from, "block")
        }
      }
    }
  })

  lenwy.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return

    for (const msg of messages) {
      if (!msg.message) continue

      let from = msg.key.remoteJid
      let isGroup = from.endsWith('@g.us')
      let isMe = msg.key.fromMe

      if (isGroup || isMe) continue

      let rawText = msg.message.extendedTextMessage?.text || ''

      if (rawText.toLowerCase().includes('sayangg.. ada yang error nih! di bagian')) {
        try {
          await lenwy.updateBlockStatus(from, 'block')
          console.log(`🔒 Auto-blokir spam dari ${from}`)
        } catch (err) {
          console.error(`❌ Gagal blokir ${from}:`, err)
        }
      }
    }
  })


  async function handleMlbbAutoDetect(m, client) {
    const msgText = m.body || m.message?.conversation || '';
    const match = msgText.match(/^(\d{6,12})\s*(?:\(?(\d{3,5})\)?)$/);
    if (!match) return;
    const userId = match[1];
    const zoneId = match[2];
    const url = `https://deoberon-api.vercel.app/stalk/mlbb?apikey=merl&userId=${userId}&zoneId=${zoneId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (!data.status) return m.reply('❌ User tidak ditemukan atau gagal mengambil data.');
      const flag = data.country_flag || 'Tidak diketahui';
      if (m.key && m.key.id) {
        await client.sendMessage(m.chat, {
          react: {
            text: flag,
            key: m.key
          }
        });
      }
    } catch (err) {
      console.error('Error MLBB AutoDetect:', err);
      m.reply(`❌ Terjadi kesalahan saat mengambil data.`);
    }
  }

  lenwy.ev.on('messages.upsert', async ({ messages }) => {
    const m = messages[0];
    if (!m.message) return;
    await handleMlbbAutoDetect(m, lenwy);
  })

lenwy.ev.on('group-participants.update', async ({ id, participants, action }) => {
  try {
    const getJson = (file) => { try { return JSON.parse(fs.readFileSync(file, 'utf8')) } catch { return null } };
    
    const databasegc = getJson('./storage/databaseGroup.json') || {};
    let ripperList = getJson('./storage/dataRipper.json');
    if (!Array.isArray(ripperList)) ripperList = [];

    const metadata = await lenwy.groupMetadata(id).catch(() => ({}));
    const groupName = metadata?.subject || '-';
    const botNumber = await lenwy.decodeJid(lenwy.user.id);
    const isBotAdmins = metadata?.participants?.some(p => p.id === botNumber && p.admin);

    const chatDb = global.db.data.chats[id] || {};
    const { wlcm: isWelcomeEnabled, left: isLeftEnabled } = chatDb;

    for (const user of participants) {
      const usertag = `@${user.split('@')[0]}`;
      const tag = [user];

      const replaceTpl = (text) => (text || '').replace(/{GROUPNAME}|{TAG}|{JAM}|{NAMAHARI}|{TANGGAL}/g, 
        match => ({ '{GROUPNAME}': groupName, '{TAG}': usertag, '{JAM}': wib, '{NAMAHARI}': harinya, '{TANGGAL}': hariini2 })[match]
      );

      const settextwel = replaceTpl(databasegc[id]?.text_welcome) || `*Halo ${usertag}*\n📣 *Selamat Datang Di Group :* ${groupName}`;
      const settextleft = replaceTpl(databasegc[id]?.text_left) || `✉️ *Sampai Jumpa, ${usertag} Telah Meninggalkan Group*`;

      if (action === 'add') {
        if (isWelcomeEnabled) {
          await lenwy.sendMessage(id, { text: settextwel, contextInfo: { mentionedJid: tag } });
        }

        if (ripperList.includes(user.replace(/\D/g, ''))) {
          if (!isBotAdmins) {
            await lenwy.sendTextWithMentions(id, `Gagal mengeluarkan ${usertag} karena bot bukan admin!`);
            continue;
          }
          await sleep(500);
          console.log(`✅ Ripper ${user} otomatis di-kick dari ${groupName}`);
          await lenwy.sendTextWithMentions(id, `Halo ${usertag}, ${global.botname} mengeluarkan anda karena tercatat sebagai Ripper!`);
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

  lenwy.ev.on('contacts.update', update => {
    for (let contact of update) {
      let id = lenwy.decodeJid(contact.id)
      if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
    }
  })

  lenwy.getName = (jid, withoutContact = false) => {
    id = lenwy.decodeJid(jid)
    withoutContact = lenwy.withoutContact || withoutContact
    let v
    if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
      v = store.contacts[id] || {}
      if (!(v.name || v.subject)) v = lenwy.groupMetadata(id) || {}
      resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
    })
    else v = id === '0@s.whatsapp.net' ? {
      id,
      name: 'WhatsApp'
    } : id === lenwy.decodeJid(lenwy.user.id) ?
      lenwy.user :
      (store.contacts[id] || {})
    return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
  }

  lenwy.sendContact = async (jid, kon, quoted = '', opts = {}) => {
    if (Array.isArray(kon) && kon.length > 0) {
      let contacts = [];
      let displayName = ''; // Nama tampilan untuk kontak
      const firstNumber = kon[0];
      const firstContact = {
        displayName: await lenwy.getName(firstNumber + '@s.whatsapp.net'),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await lenwy.getName(firstNumber + '@s.whatsapp.net')}\nFN:${await lenwy.getName(firstNumber + '@s.whatsapp.net')}\nitem1.TEL;waid=${firstNumber}:${firstNumber}\nitem1.X-ABLabel:Owner - ${global.ownername}\nitem2.EMAIL;type=INTERNET:owner@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:Owner Bot ${botname}\nitem3.X-ABLabel:Grade\nitem4.ADR:;;Bumi\nEND:VCARD`
      };
      contacts.push(firstContact);
      displayName = 'Kontak Utama';
      await lenwy.sendMessage(jid, { contacts: { displayName: `${contacts.length} Kontak`, contacts: contacts }, ...opts }, { quoted });
    } else {
      console.log('Array kon kosong atau bukan array.');
    }
  };

  lenwy.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(message, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
    }
    return buffer
  }

  lenwy.sendImage = async (jid, path, caption = '', quoted = '', options) => {
    let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await lenwy.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
  }
  lenwy.sendText = (jid, text, quoted = '', options) => lenwy.sendMessage(jid, { text: text, ...options }, { quoted })
  lenwy.sendTextWithMentions = async (jid, text, quoted, options = {}) => lenwy.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
  lenwy.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options)
    } else {
      buffer = await imageToWebp(buff)
    }
    await lenwy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
  }
  lenwy.sendVideoAsSticker = async (e, t, a, s = {}) => {
    let i,
      r = Buffer.isBuffer(t)
        ? t
        : /^data:.*?\/.*?;base64,/i.test(t)
          ? Buffer.from(t.split`,`[1], "base64")
          : /^https?:\/\//.test(t)
            ? await await getBuffer(t)
            : fs.existsSync(t)
              ? fs.readFileSync(t)
              : Buffer.alloc(0);
    return (
      (i =
        s && (s.packname || s.author)
          ? await writeExifVid(r, s)
          : await videoToWebp(r)),
      await lenwy.sendMessage(
        e,
        { sticker: { url: i }, ...s },
        { quoted: a }
      ),
      i
    );
  };

  lenwy.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    // save to file
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
  }
  //=================================================
  lenwy.cMod = (jid, copy, text = '', sender = lenwy.user.id, options = {}) => {
    //let copy = message.toJSON()
    let mtype = Object.keys(copy.message)[0]
    let isEphemeral = mtype === 'ephemeralMessage'
    if (isEphemeral) {
      mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
    }
    let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
    let content = msg[mtype]
    if (typeof content === 'string') msg[mtype] = text || content
    else if (content.caption) content.caption = text || content.caption
    else if (content.text) content.text = text || content.text
    if (typeof content !== 'string') msg[mtype] = {
      ...content,
      ...options
    }
    if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
    else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
    if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
    else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
    copy.key.remoteJid = jid
    copy.key.fromMe = sender === lenwy.user.id
    return proto.WebMessageInfo.fromObject(copy)
  }
  lenwy.sendFile = async (jid, PATH, fileName, quoted = {}, options = {}) => {
    let types = await lenwy.getFile(PATH, true)
    let { filename, size, ext, mime, data } = types
    let type = '', mimetype = mime, pathFile = filename
    if (options.asDocument) type = 'document'
    if (options.asSticker || /webp/.test(mime)) {
      let { writeExif } = require('./library/sticker.js')
      let media = { mimetype: mime, data }
      pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
      await fs.promises.unlink(filename)
      type = 'sticker'
      mimetype = 'image/webp'
    }
    else if (/image/.test(mime)) type = 'image'
    else if (/video/.test(mime)) type = 'video'
    else if (/audio/.test(mime)) type = 'audio'
    else type = 'document'
    await lenwy.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
    return fs.promises.unlink(pathFile)
  }
  lenwy.parseMention = async (text) => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
  }

  lenwy.copyNForward = async (jid, message, forceForward = false, options = {}) => {
    let vtype
    if (options.readViewOnce) {
      message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
      vtype = Object.keys(message.message.viewOnceMessage.message)[0]
      delete (message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
      delete message.message.viewOnceMessage.message[vtype].viewOnce
      message.message = {
        ...message.message.viewOnceMessage.message
      }
    }
    let mtype = Object.keys(message.message)[0]
    let content = await generateForwardMessageContent(message, forceForward)
    let ctype = Object.keys(content)[0]
    let context = {}
    if (mtype != "conversation") context = message.message[mtype].contextInfo
    content[ctype].contextInfo = {
      ...context,
      ...content[ctype].contextInfo
    }
    const waMessage = await generateWAMessageFromContent(jid, content, options ? {
      ...content[ctype],
      ...options,
      ...(options.contextInfo ? {
        contextInfo: {
          ...content[ctype].contextInfo,
          ...options.contextInfo
        }
      } : {})
    } : {})
    await lenwy.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
    return waMessage
  }

  lenwy.getFile = async (PATH, save) => {
    let res
    let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
    let type = await FileType.fromBuffer(data) || {
      mime: 'application/octet-stream',
      ext: '.bin'
    }
    filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
    if (data && save) fs.promises.writeFile(filename, data)
    return {
      res,
      filename,
      size: await getSizeMedia(data),
      ...type,
      data
    }
  }

  // Ending


  lenwy.ev.on('creds.update', saveCreds)
  lenwy.serializeM = (m) => smsg(lenwy, m, store)
  lenwy.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      
      if (reason === DisconnectReason.badSession) {
        console.log(`Sesi tidak valid (Bad Session). Menghapus folder session secara otomatis...`);
        execSync(`rm -rf ./${global.sessionName}`);
        process.exit();
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log("Koneksi ditutup, mencoba menghubungkan kembali...");
        await sleep(3000);
        connectToWhatsApp();
      } else if (reason === DisconnectReason.connectionLost) {
        console.log("Koneksi ke server hilang, mencoba menghubungkan kembali...");
        await sleep(3000);
        connectToWhatsApp();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log("Koneksi tertimpa sesi lain, tolong restart bot.");
        process.exit();
      } else if (reason === DisconnectReason.loggedOut) {
        console.log(`Perangkat dikeluarkan (Logged Out). Menghapus folder session secara otomatis...`);
        execSync(`rm -rf ./${global.sessionName}`);
        process.exit();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("Sistem meminta restart, merestart koneksi...");
        await sleep(2000);
        connectToWhatsApp();
      } else if (reason === DisconnectReason.timedOut) {
        console.log("Koneksi kehabisan waktu (Timeout), mencoba menghubungkan kembali...");
        await sleep(3000);
        connectToWhatsApp();
      } else if (reason === 405) {
        console.log("Koneksi ditolak (405). Menunggu 5 detik sebelum menghubungkan kembali...");
        await sleep(5000);
        connectToWhatsApp();
      } else {
        console.log(`Alasan putus koneksi tidak diketahui: ${reason} | ${connection}`);
        await sleep(3000);
        connectToWhatsApp();
      }
    } else if (connection === "open") {      
      console.log(chalk.greenBright('╭──────────────────────────────────────────────────╮'));
      console.log(chalk.greenBright('│') + chalk.white.bold('       BOT BERHASIL TERHUBUNG KE WHATSAPP!        ') + chalk.greenBright('│'));
      console.log(chalk.greenBright('╰──────────────────────────────────────────────────╯'));
    }
  });

  lenwy.ev.on('creds.update', saveCreds);
  return lenwy

}

async function compressSc(sourceDir, outputZip, selectedFiles = global.backupFiles) {
  return new Promise((resolve, reject) => {
    console.log(
      `${chalk.greenBright(`[ ${jamnya}:${menitnya}:${detiknya} ]`)} ${chalk.greenBright(
        `Membuat Backup Files ...`
      )}`
    );

    const whitelist = [...selectedFiles, 'node_modules'];
    const allItems = fs.readdirSync(sourceDir);

    allItems.forEach(item => {
      if (!whitelist.includes(item)) {
        const itemPath = path.join(sourceDir, item);
        try {
          console.log(`🗑️ Menghapus sampah: ${item}`);
          if (fs.lstatSync(itemPath).isDirectory()) {
            fs.rmSync(itemPath, { recursive: true, force: true });
          } else {
            fs.unlinkSync(itemPath);
          }
        } catch (err) {
          console.error(`❌ Gagal hapus ${item}:`, err);
        }
      }
    });

    try {
      const whitelistForZip = selectedFiles.filter(f => fs.existsSync(path.join(sourceDir, f))).join(' ');
      const zipCommand = `zip -r ${outputZip} ${whitelistForZip}`;
      execSync(zipCommand, { stdio: ['inherit', 'silent'] });

      console.log(
        `${chalk.greenBright(`[ ${jamnya}:${menitnya}:${detiknya} ]`)} ${chalk.greenBright(
          `File Backup Telah dibuat: ${outputZip}`
        )}`
      );
      resolve();
    } catch (err) {
      console.error('❌ Gagal membuat ZIP:', err);
      reject(err);
    }
  });
}

async function startBackupProcess() {
  if (!global.autobackup || !activeSocket || !activeSocket.user) return;
  let zipFile = `Sc${global.ownername}_${tanggalnya}-${namabulannya}`;
  await compressSc('.', zipFile);
  try {
    await sleep(15000);
    await activeSocket.sendMessage(`${global.owner}@s.whatsapp.net`, {
      document: fs.readFileSync(`./${zipFile}.zip`),
      fileName: `${zipFile}.zip`,
      mimetype: 'application/zip'
    }).catch((err) => console.log(`Gagal kirim backupan: `, err));

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
  return msg.includes('item-not-found') || msg.includes('not-authorized') || msg.includes('not-a-participant') || msg.includes('404') || msg.includes('403') || msg.includes('gone');
};

const expiredCheck = async (lenwy) => {
  if (isCheckingSewa || !lenwy || !lenwy.user) return;
  isCheckingSewa = true;
  try {
    const pathsewa = './storage/sewa.json';
    const getJson = (file) => { try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; } };
    let sewa = getJson(pathsewa) || [];
    if (!Array.isArray(sewa)) sewa = [];
    const authorrr = getJson('./author.json') || [];
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

          // Notifikasi grup tidak boleh menggagalkan groupLeave (misal saat grup di-lock admin)
          await lenwy.sendMessage(item.groupId, {
            text: `Masa sewa di grup ini sudah habis, bot akan keluar otomatis.\nJika ingin sewa lagi silahkan chat ke https://wa.me/${global.owner}`
          }).catch(() => {});
          if (authorrr.length > 0) {
            await lenwy.sendContact(item.groupId, authorrr.map(x => x.split('@')[0])).catch(() => {});
          }
          await lenwy.sendMessage(`${global.owner}@s.whatsapp.net`, {
            text: `Masa sewa di grup *${subject}* sudah habis.\n\n> ID GROUP : ${item.groupId}\n> NAMA GROUP : ${subject}\n> LINK GROUP : ${linkgc}`
          }).catch(() => {});

          await new Promise(resolve => setTimeout(resolve, 2000));

          let leftGroup = false;
          try {
            await lenwy.groupLeave(item.groupId);
            leftGroup = true;
          } catch (leaveErr) {
            if (isNotInGroupError(leaveErr)) {
              leftGroup = true;
            } else {
              console.error(`⚠️ Gagal keluar dari ${item.groupId}, akan dicoba lagi menit berikutnya:`, leaveErr?.message || leaveErr);
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
          await lenwy.sendMessage(item.groupId, {
            text: `Sisa masa sewa di group ini adalah *${h} jam ${m} menit ${s} detik* lagi, jika ingin perpanjang masa sewa silahkan chat admin.`
          }).catch(() => {});
          if (authorrr.length > 0) {
            await lenwy.sendContact(item.groupId, authorrr.map(x => x.split('@')[0])).catch(() => {});
          }
          item.reminded1d = true;
          dataChanged = true;
        }
      } catch (err) {
        if (isNotInGroupError(err)) {
          sewa.splice(i, 1);
          dataChanged = true;
        } else {
          console.error(`⚠️ Error expiredCheck (${item.groupId}):`, err?.message || err);
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

cron.schedule('59 23 * * *', () => { startBackupProcess(); });

cron.schedule('*/10 * * * *', async () => {
  if (!activeSocket || !activeSocket.user) return;
  let ripperList = [];
  let pathRipper = path.join(__dirname, './storage/dataRipper.json');

  if (fs.existsSync(pathRipper)) {
    try {
      ripperList = JSON.parse(fs.readFileSync(pathRipper));
      if (!Array.isArray(ripperList)) ripperList = [];
    } catch (e) {
      ripperList = [];
    }
  }
  if (ripperList.length === 0) return;
  try {
    let botNumber = await activeSocket.decodeJid(activeSocket.user.id);
    let groupList = await activeSocket.groupFetchAllParticipating();

    for (let groupId in groupList) {
      try {
        let metadata = await activeSocket.groupMetadata(groupId);
        let participants = metadata.participants || [];
        let isBotAdmin = participants.some(p => p.id === botNumber && p.admin !== null);
        let ripperMembers = participants
          .filter(member => ripperList.includes(member.id.replace(/[^0-9]/g, '')))
          .map(member => member.id);
        if (ripperMembers.length > 0) {
          let mentionsText = ripperMembers.map(id => `@${id.split('@')[0]}`).join(', ');
          if (!isBotAdmin) {
            await activeSocket.sendTextWithMentions(groupId, `Gagal mengeluarkan ${mentionsText} karena bot bukan admin!`);
            continue;
          }
          await activeSocket.sendTextWithMentions(groupId, `${mentionsText}, anda terdeteksi sebagai *Ripper*. Bot akan mengeluarkan anda!`);
          await activeSocket.groupParticipantsUpdate(groupId, ripperMembers, 'remove');
          console.log(`✅ Ripper ${ripperMembers.join(', ')} dikeluarkan dari ${metadata.subject}`);
        }
      } catch (err) {
        console.error(`❌ Gagal memproses grup ${groupId}:`, err);
      }
    }
  } catch (error) {
    console.error(`❌ Terjadi kesalahan saat mengambil data bot/grup:`, error);
  }
});

cron.schedule('* * * * *', () => {
  expiredCheck(activeSocket);
});

connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.green(`📑  Update : ${__filename}`))
  delete require.cache[file]
  require(file)
})
