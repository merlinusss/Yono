require('./len')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, jidDecode, getAggregateVotesInPollMessage, proto } = require("baileys")
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const CFonts = require('cfonts')
const path = require('path')
const readline = require("readline");
const axios = require('axios')
const FileType = require('file-type')
const yargs = require('yargs/yargs')
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const figlet = require("figlet")
const { exec, spawn, execSync } = require("child_process")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./library/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./library/myfunc')
const qrcode = require('qrcode-terminal');
const toMs = require('ms');
const question = (text) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    rl.question(text, resolve)
  })
};

const harinya = moment.tz('Asia/Jakarta').format('dddd')
const tanggalnya = moment.tz('Asia/Jakarta').format('DD')
const bulannya = moment.tz('Asia/Jakarta').format('MM')
const tahunnya = moment.tz('Asia/Jakarta').format('YYYY')
const namabulannya = moment.tz('Asia/Jakarta').format('MMMM')
const jamnya = moment.tz('Asia/Jakarta').format('HH')
const menitnya = moment.tz('Asia/Jakarta').format('mm')
const detiknya = moment.tz('Asia/Jakarta').format('ss')


var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./library/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./library/mongoDB')

const store = {
  contacts: {},
};
const color = (text, color) => {
  return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`./storage/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    game: {},
    database: {},
    settings: {},
    setting: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// save database every 30seconds
if (global.db) setInterval(async () => {
  if (global.db.data) await global.db.write()
}, 30 * 1000)


console.log(color(figlet.textSync(`${global.botname}`, {
  font: 'DOS Rebel',
  horizontalLayout: 'default',
  vertivalLayout: 'default',
  width: 100,
  whitespaceBreak: false
}), 'blue'))

console.log(chalk.white.bold(`${chalk.green.bold(`Halo own ${global.ownername}`)}         
- - - - - - - - - - - - - - - - - - - -
${chalk.green.bold("Good Luck")}\n`));




// FOKUS DIBAWAH INI AJA BANG

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)
  const { version, isLatest } = await fetchLatestBaileysVersion()
  const lenwy = makeWASocket({
    version: [2, 3000, 1035682492],
    logger: pino({ level: 'silent' }),
    printQRInTerminal: !global.usePairingCode,
    browser: ['Linux', 'Chromium', '122.0.6261.111'],
    auth: state,
    markOnlineOnConnect: false
  });

  if (global.usePairingCode && !lenwy.authState.creds.registered) {
    const phoneNumber = await question('Masukan Nomor Yang Diawali Dengan 62 :\n');
    const code = await lenwy.requestPairingCode(phoneNumber.trim(), 'MERLINUS')
    console.log(`🎁  Pairing Code : ${code}`)
  } else {
    lenwy.ev.on("connection.update", async (update) => {
      const { qr } = update;
      if (qr) {
        console.log('🔗 Scan this QR with your WhatsApp');
        qrcode.generate(qr, { small: true });
      }
    })
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
      if (!lenwy.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
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
      if (!msg.message) continue // Ganti return ➜ continue

      let from = msg.key.remoteJid
      let isGroup = from.endsWith('@g.us')
      let isMe = msg.key.fromMe

      if (isGroup || isMe) continue // Ganti return ➜ continue

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


  const https = require("https")
  const agent = new https.Agent({
    keepAlive: true,
    maxSockets: 50
  })

  const originalFetch = global.fetch
  global.fetch = async function (url, options = {}, retry = 5) {
    try {
      options.agent = agent
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

  async function handleMlbbAutoDetect(m, client) {
    const msgText = m.body || m.message?.conversation || '';

    const match = msgText.match(/^(\d{6,12})\s*(?:\(?(\d{3,5})\)?)$/); // cocokkan format ID MLBB
    if (!match) return; // bukan ID MLBB, abaikan

    const userId = match[1];
    const zoneId = match[2];
    const url = `https://deoberon-api.vercel.app/stalk/mlbb?apikey=merl&userId=${userId}&zoneId=${zoneId}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      if (!data.status) return m.reply('❌ User tidak ditemukan atau gagal mengambil data.');

      const flag = data.country_flag || 'Tidak diketahui';

      // Kirim reaksi jika memungkinkan
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

  lenwy.ev.on('group-participants.update', async (anu) => {
    try {
      let databasegc = JSON.parse(fs.readFileSync('./storage/databaseGroup.json', 'utf8'))
      let settextwel = databasegc[anu.id]?.text_welcome
      let settextleft = databasegc[anu.id]?.text_left
      let metadata = await lenwy.groupMetadata(anu.id);
      let groupName = metadata?.subject || '-'
      let participants = anu?.participants || {}
      for (let num of participants) {
        const num = anu.participants?.[0]
        const tag = num ? [num] : []
        const getProfilePicture = async (jid) => {
          try {
            return await lenwy.profilePictureUrl(jid, 'image');
          } catch (error) {
            return "https://i.pinimg.com/736x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg"; // URL default
          }
        };
        let ppuser = await getProfilePicture(num, 'image');
        let ppgroup = await getProfilePicture(anu.id, 'image');
        let thumbnailUrl = ppuser ? (ppuser !== 'https://i.pinimg.com/736x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg' ? ppuser : ppgroup) : 'https://i.pinimg.com/736x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg';

        let ppgede = false

        let isWelcomeEnabled = global.db.data.chats[anu.id]?.wlcm;
        let isLeftEnabled = global.db.data.chats[anu.id]?.left;

        let usertag = `@${num.split("@")[0]}`

        if (settextwel.includes('@groupname')) {
          settextwel = settextwel.replace('@groupname', groupName)
        }
        if (settextwel.includes('@usertag')) {
          settextwel = settextwel.replace('@usertag', usertag)
        }
        if (settextwel.includes('@jam')) {
          settextwel = settextwel.replace('@jam', jamnya)
        }
        if (settextwel.includes('@menit')) {
          settextwel = settextwel.replace('@menit', menitnya)
        }
        if (settextwel.includes('@detik')) {
          settextwel = settextwel.replace('@detik', detiknya)
        }
        if (settextwel.includes('@hari')) {
          settextwel = settextwel.replace('@hari', harinya)
        }
        if (settextwel.includes('@tanggal')) {
          settextwel = settextwel.replace('@tanggal', tanggalnya)
        }
        if (settextwel.includes('@bulan')) {
          settextwel = settextwel.replace('@bulan', bulannya)
        }
        if (settextwel.includes('@tahun')) {
          settextwel = settextwel.replace('@tahun', tahunnya)
        }
        if (settextwel.includes('@namabulan')) {
          settextwel = settextwel.replace('@namabulan', namabulannya)
        }

        if (!settextwel) {
          settextwel = `*Halo @${num.split("@")[0]}*\n📣 *Selamat Datang Di Group :* ${metadata.subject}`
        }

        if (isWelcomeEnabled && anu.action === 'add') {
          await lenwy.sendMessage(anu.id, { text: settextwel, contextInfo: { mentionedJid: [...tag] } })
        }

        if (anu.action === 'add') {
          // Cek apakah nomor yang masuk termasuk ripper
          const fileRipper = path.join(__dirname, './storage/dataRipper.json');
          let ripperList = [];
          const botNumber = await lenwy.decodeJid(lenwy.user.id);
          const groupMetadata = await lenwy.groupMetadata(anu.id);
          const groupParticipants = groupMetadata?.participants;
          const isBotAdmins = groupParticipants?.some(p => p.id === botNumber && p.admin !== null);

          if (fs.existsSync(fileRipper)) {
            try {
              ripperList = JSON.parse(fs.readFileSync(fileRipper));
              if (!Array.isArray(ripperList)) ripperList = [];
            } catch (e) {
              ripperList = [];
            }
          }

          if (ripperList.includes(num.replace(/[^0-9]/g, ''))) {
            if (!isBotAdmins) return lenwy.sendTextWithMentions(anu.id, `Gagal mengeluarkan @${num.split('@')[0]} karena bot bukan admin!`);
            await sleep(500); // tunggu welcome message selesai
            console.log(`✅ Ripper ${num} otomatis di-kick dari ${groupName}`)
            await lenwy.sendTextWithMentions(anu.id, `Halo @${num.split('@')[0]}, ${global.botname} akan mengeluarkan anda karena anda tercatat sebagai Ripper!`)
            await lenwy.groupParticipantsUpdate(anu.id, [num], 'remove');
          }
        }

        if (settextleft.includes('@groupname')) {
          settextleft = settextleft.replace('@groupname', groupName)
        }
        if (settextleft.includes('@usertag')) {
          settextleft = settextleft.replace('@usertag', usertag)
        }
        if (settextleft.includes('@jam')) {
          settextleft = settextleft.replace('@jam', jamnya)
        }
        if (settextleft.includes('@menit')) {
          settextleft = settextleft.replace('@menit', menitnya)
        }
        if (settextleft.includes('@detik')) {
          settextleft = settextleft.replace('@detik', detiknya)
        }
        if (settextleft.includes('@hari')) {
          settextleft = settextleft.replace('@hari', harinya)
        }
        if (settextleft.includes('@tanggal')) {
          settextleft = settextleft.replace('@tanggal', tanggalnya)
        }
        if (settextleft.includes('@bulan')) {
          settextleft = settextleft.replace('@bulan', bulannya)
        }
        if (settextleft.includes('@tahun')) {
          settextleft = settextleft.replace('@tahun', tahunnya)
        }
        if (settextleft.includes('@namabulan')) {
          settextleft = settextleft.replace('@namabulan', namabulannya)
        }

        if (!settextleft) {
          settextleft = `✉️ *Sampai Jumpa, @${num.split("@")[0]} Telah Meninggalkan Group*`
        }

        if (isLeftEnabled && anu.action === 'remove') {
          await lenwy.sendMessage(anu.id, { text: settextleft, contextInfo: { mentionedJid: [...tag] } })
        }
      }
    } catch (err) {
      console.log(err);
    }
  })

  async function compressSc(sourceDir, outputZip, selectedFiles = [
    'library', 'project', 'Session', 'storage',
    'author.json', 'banned.json', 'index.js',
    'len.js', 'lenwy.js', 'package-lock.json', 'package.json', 'premium.json'
  ]) {
    return new Promise((resolve, reject) => {
      console.log(
        `${chalk.greenBright(`[ ${jamnya}:${menitnya}:${detiknya} ]`)} ${chalk.greenBright(
          `Membuat Backup Files ...`
        )}`
      );

      const whitelist = [...selectedFiles, 'node_modules'];
      const allItems = fs.readdirSync(sourceDir);

      // Hapus semua yang tidak ada di whitelist
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

      sleep(10000)
      try {
        const whitelistForZip = selectedFiles.join(' ');
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
    if (global.autobackup) {
      let zipFile = `Sc${global.ownername}_${tanggalnya}-${namabulannya}`
      await compressSc('.', zipFile);
      try {
        await sleep(15000)
        await lenwy.sendMessage(`${global.owner}@s.whatsapp.net`, {
          document: fs.readFileSync(`./${zipFile}.zip`),
          fileName: `${zipFile}.zip`,
          mimetype: 'application/zip'
        }).catch((err) => console.log(`Gagal kirim backupan: `, err));

        // Hapus file backup.zip setelah dikirim
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
  }

  // Setiap 2 jam jalankan backup
  startBackupProcess()
  setInterval(startBackupProcess, 2 * 60 * 60 * 1000);

  setInterval(async () => {
    let ripperList = [];
    let pathRipper = path.join(__dirname, './storage/dataRipper.json')
    if (fs.existsSync(pathRipper)) {
      try {
        ripperList = JSON.parse(fs.readFileSync(pathRipper));
        if (!Array.isArray(ripperList)) ripperList = [];
      } catch (e) {
        ripperList = [];
      }
    }
    if (ripperList.length === 0) return
    let botNumber = await lenwy.decodeJid(lenwy.user.id);
    let groupList = await lenwy.groupFetchAllParticipating();

    for (let groupId in groupList) {
      try {
        let metadata = await lenwy.groupMetadata(groupId);
        let participants = metadata.participants || [];
        let isBotAdmin = participants.some(p => p.id === botNumber && p.admin !== null);

        // Cari semua ripper yang ada di grup ini
        let ripperMembers = participants
          .filter(member => ripperList.includes(member.id.replace(/[^0-9]/g, '')))
          .map(member => member.id);

        if (ripperMembers.length > 0) {
          // Mention semua sebelum kick
          let mentionsText = ripperMembers.map(id => `@${id.split('@')[0]}`).join(', ');
          if (!isBotAdmin) return lenwy.sendTextWithMentions(groupId, `Gagal mengeluarkan ${mentionsText} karena bot bukan admin!`);
          await lenwy.sendTextWithMentions(groupId, `${mentionsText}, anda terdeteksi sebagai *Ripper*. Bot akan mengeluarkan anda!`);

          // Kick semua sekaligus
          await lenwy.groupParticipantsUpdate(groupId, ripperMembers, 'remove');
          console.log(`✅ Ripper ${ripperMembers.join(', ')} dikeluarkan dari ${metadata.subject}`);
        }
      } catch (err) {
        console.error(`❌ Gagal memproses grup ${groupId}:`, err);
      }
    }

  }, 5 * 60 * 1000)


  const expiredCheck = async (lenwy) => {
    try {
      let pathsewa = './storage/sewa.json';
      let rawData = fs.readFileSync(pathsewa, 'utf8');
      let sewa = JSON.parse(rawData);
      if (!Array.isArray(sewa)) {
        sewa = [];
        fs.writeFileSync(pathsewa, JSON.stringify(sewa, null, 2), 'utf8');
      }
      let authorrr = JSON.parse(fs.readFileSync('./author.json'));

      for (let index = sewa.length - 1; index >= 0; index--) {
        const item = sewa[index];

        try {
          if (item.isAlifetime) continue;

          // Reminder 1d
          if (item.expired - Date.now() <= toMs('1d') && !item.reminded1d) {
            await lenwy.sendMessage(item.groupId, { text: `Sisa masa sewa di group ini adalah *1 hari* lagi, jika ingin perpanjang masa sewa silahkan chat admin berikut.` });
            await lenwy.sendContact(item.groupId, authorrr.map(i => i.split("@")[0]));
            item.reminded1d = true;
          }

          // Cek expired
          if (Date.now() >= item.expired) {
            console.log(`Sewa expired: ${item.id}`);

            // Hapus dari list
            sewa.splice(index, 1);

            const getGroups = await lenwy.groupFetchAllParticipating();
            const groupIds = Object.values(getGroups).map(v => v.id);

            if (!groupIds.includes(item.groupId)) {
              console.warn(`Bot bukan anggota grup ${item.groupId}, hapus data.`);
              continue;
            }

            let metadata;
            try {
              metadata = await lenwy.groupMetadata(item.groupId);
            } catch (err) {
              if (err.message.includes("forbidden")) {
                console.warn(`GroupMetadata forbidden, hapus data.`);
                continue;
              } else {
                throw err;
              }
            }

            let linkgc;
            try {
              let invite = await lenwy.groupInviteCode(item.groupId);
              linkgc = `https://chat.whatsapp.com/${invite}`;
            } catch (err) {
              console.warn(`Gagal ambil link grup: ${err.message}`);
              linkgc = '-';
            }

            const teks = `Masa sewa di grup ini sudah habis, bot akan keluar otomatis.\nJika ingin sewa lagi silahkan chat ke https://wa.me/${global.owner}`;
            await lenwy.sendMessage(item.groupId, { text: teks });
            await lenwy.sendContact(item.groupId, authorrr.map(i => i.split("@")[0]));
            await lenwy.sendMessage(`${global.owner}@s.whatsapp.net`, {
              text: `Masa sewa di grup *${metadata.subject}* sudah habis.\n\n> ID GROUP : ${item.groupId}\n> NAMA GROUP : ${metadata.subject || ''}\n> LINK GROUP : ${linkgc}`
            });

            await sleep(2000);
            try {
              await lenwy.groupLeave(item.groupId);
            } catch (error) {
              console.error(`Gagal keluar dari grup ${item.groupId}: ${error.message}`);
            }
          }
        } catch (err) {
          // Tangkap error per-item
          console.error(`Gagal proses sewa untuk grup ${item.groupId}: ${err}`);
          if (err.message.includes("forbidden") || err.message.includes("item-not-found")) {
            console.warn(`Grup ${item.groupId} tidak ditemukan, hapus entri dari sewa`);
            sewa.splice(index, 1);
          }
          continue;
        }
      }
      fs.writeFileSync(pathsewa, JSON.stringify(sewa, null, 2), 'utf8');
    } catch (error) {
      console.log(error)
      console.error('Terjadi kesalahan saat memeriksa entri kedaluwarsa:', error.message);
    }
  };
  setInterval(() => {
    expiredCheck(lenwy);
  }, 10000)

  lenwy.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return

    for (const msg of messages) {
      if (!msg.message) continue // Ganti return ➜ continue

      let from = msg.key.remoteJid
      let isGroup = from.endsWith('@g.us')
      let isMe = msg.key.fromMe

      if (isGroup || isMe) continue // Ganti return ➜ continue

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

      // Proses nomor pertama
      const firstNumber = kon[0];
      const firstContact = {
        displayName: await lenwy.getName(firstNumber + '@s.whatsapp.net'),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await lenwy.getName(firstNumber + '@s.whatsapp.net')}\nFN:${await lenwy.getName(firstNumber + '@s.whatsapp.net')}\nitem1.TEL;waid=${firstNumber}:${firstNumber}\nitem1.X-ABLabel:Owner - ${global.ownername}\nitem2.EMAIL;type=INTERNET:owner@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:Owner Bot ${botname}\nitem3.X-ABLabel:Grade\nitem4.ADR:;;Bumi\nEND:VCARD`
      };
      contacts.push(firstContact);
      displayName = 'Kontak Utama';

      // Kirim pesan kontak
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


  //Kalau Mau Self Lu Buat Jadi false
  lenwy.public = true
  lenwy.ev.on('creds.update', saveCreds)
  lenwy.serializeM = (m) => smsg(lenwy, m, store)
  lenwy.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession) {
        console.log(`Bad Session File, Please Delete Session and Scan Again`);
        process.exit();
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log("Connection closed, reconnecting....");
        connectToWhatsApp();
      } else if (reason === DisconnectReason.connectionLost) {
        console.log("Connection Lost from Server, reconnecting...");
        connectToWhatsApp();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
        process.exit();
      } else if (reason === DisconnectReason.loggedOut) {
        execSync(`rm -rf ./${global.sessionName}`)
        console.log(`Device Logged Out, Please Delete Folder Session and Scan Again.`);
        process.exit();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("Restart Required, Restarting...");
        connectToWhatsApp();
      } else if (reason === DisconnectReason.timedOut) {
        console.log("Connection TimedOut, Reconnecting...");
        connectToWhatsApp();
      } else {
        console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
        connectToWhatsApp();
      }
    } else if (connection === "open") {
      console.log(`${global.botname} Activated`)
    }
  });

  lenwy.ev.on('creds.update', saveCreds);
  return lenwy

}
connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.green(`📑  Update : ${__filename}`))
  delete require.cache[file]
  require(file)
})
