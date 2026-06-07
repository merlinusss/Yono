require('./len')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, InteractiveMessage, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("baileys");
const fs = require('fs')
const path = require('path')
const util = require('util')
let ms;
const toMs = require('ms');
(async () => {
  ms = (await import('parse-ms')).default;
})()
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const cron = require('node-cron')
const { color, bgcolor } = require('./library/color')
const { uploader60Minute, uploaderLebih, up } = require('./library/uploader')
const { fromBuffer } = require('file-type')
const cheerio = require('cheerio')
const speed = require('performance-now')
const { Image } = require('node-webpmux')
const { performance } = require('perf_hooks')
const { exec, spawn, execSync } = require("child_process")
const { smsg, tanggal, getTime, formatp, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture, toJid } = require('./library/myfunc.js')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api")
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList, updateKey, readDatabasePayment, writeDatabasePayment, updateId, getGroupIdFromLink, resetList, deleteListSampah } = require('./library/respon-list')
const { isKeyResponStick, getDataResponStick, isAlreadyResponStickGroup, delResponStick } = require('./library/funcStick')
const { addSewaGroup, getSewaExpired, getSewaPosition, checkSewaGroup, getAllPremiumUser } = require('./library/sewa')
const { number, command } = require('yargs')
const { error } = require('console')
const { cekStatusAkunDigi, cekLayananDigiPrabayar, isiSaldoDigi, orderDigi, cekItemDigi, cekOrderanDigi } = require('./project/digiflazz')
const { generateQris, checkQrisStatus, formatSaldo } = require('./project/paymentGateway.js')
const { webpToMp4, imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./library/exif')
const { igdl } = require('btch-downloader')
const { cekMl } = require('./library/mlRegi.js')
const dns = require('dns').promises

const pathsewa = './storage/sewa.json';
global.db.data = JSON.parse(fs.readFileSync('./storage/database.json'))
if (global.db.data) global.db.data = {
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

let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let db_respon_list = JSON.parse(fs.readFileSync('./storage/list-message.json'))
let reminders = {};

const authorr = global.owner
const pengguna = JSON.parse(fs.readFileSync('./storage/user.json'))
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const authorFilePath = path.resolve(__dirname, './author.json')
const author = JSON.parse(fs.readFileSync(authorFilePath))
const dbgcFilePath = path.join(__dirname, './storage/databaseGroup.json')
global.datagc
try {
  global.datagc = JSON.parse(fs.readFileSync(dbgcFilePath, 'utf-8'));
} catch (error) {
  console.error('Terjadi kesalahan saat membaca file database:', error);
}


module.exports = lenwy = async (lenwy, m, chatUpdate, store) => {
 try {
var body =
(m.mtype === 'conversation') ? m.message.conversation :
(m.mtype === 'imageMessage') ? (m.message.imageMessage.caption || '[ IMAGE ]') :
(m.mtype === 'videoMessage') ? (m.message.videoMessage.caption || '[ VIDEO ]') :
(m.mtype === 'audioMessage') ? '[ AUDIO ]' :
(m.mtype === 'stickerMessage') ? '[ STICKER ]' :
(m.mtype === 'documentMessage') ? `[ DOCUMENT ] ${m.message.documentMessage.fileName || ''}` :
(m.mtype === 'contactMessage') ? '[ CONTACT ]' :
(m.mtype === 'locationMessage') ? '[ LOCATION ]' :
(m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text :
(m.mtype === 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId :
(m.mtype === 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
(m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
(m.mtype === 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId :
(m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) :
''
var budy = (typeof m.text == 'string' ? m.text : '')
const premiumFilePath = path.join("./premium.json")
const dbFilePath = path.join(__dirname, './storage/database.json')
const rawBody = body || "";
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(rawBody)
  ? rawBody.match(/^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/gi)[0]
  : '';

const content = rawBody.slice(prefix.length).trim() || ""; 
const parts = content.split(/ +/);
const commandRaw = parts[0] || "";
const args = parts.slice(1);
const command = commandRaw.toLowerCase();
const commandPrivate = commandRaw.toLowerCase();
const isCmd = body?.startsWith(prefix)
const cmd = prefix + command

const full_args = body?.replace(command, '').slice(1).trim()
const spychat = body?.replace().slice().trim()
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const quoted2 = (quoted.mtype == 'buttonsMessage') ? quoted[Object.keys(quoted)[1]] : (quoted.mtype == 'templateMessage') ? quoted.hydratedTemplate[Object.keys(quoted.hydratedTemplate)[1]] : (quoted.mtype == 'product') ? quoted[Object.keys(quoted)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid

const rawIds = [lenwy.user?.id, lenwy.user?.jid].filter(Boolean)
const botNumber = rawIds.map(v => {
  const jid = typeof v === 'string' ? v : ''
  return jid
    .split('@')[0]
    .split(':')[0]
    .replace(/[^0-9]/g, '')
}).filter(Boolean)
const isBot = botNumber.includes(m.sender.replace(/[^0-9]/g, ''))

const creatorFilePathh = path.resolve(__dirname, './author.json')
const creatorNumbers = JSON.parse(fs.readFileSync(creatorFilePathh))

const premiumFilePathh = path.resolve(__dirname, './premium.json')
const premiumNumbers = JSON.parse(fs.readFileSync(premiumFilePathh))
const allPremium = [botNumber, ...creatorNumbers, ...premiumNumbers]

const bannedFilePathh = path.resolve(__dirname, './banned.json')
const bannedNumbers = JSON.parse(fs.readFileSync(bannedFilePathh))

const gcMutedPath = path.resolve(__dirname, './storage/gcMuted.json')
const gcMuted = JSON.parse(fs.readFileSync(gcMutedPath))
const isGcMuted = [...gcMuted].includes(m.chat)

const gcTopupPath = path.resolve(__dirname, './project/database/gcTopup.json')
const gcTopup = JSON.parse(fs.readFileSync(gcTopupPath))
const isGcTopup = [...gcTopup].includes(m.chat)

const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.sender) : m.sender
const groupMetadata = m.isGroup ? await lenwy.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? await groupMetadata?.subject : ''
const participants = m.isGroup ? await groupMetadata?.participants : []
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : []

const senderNumber = (m.sender || sender || '').replace(/[^0-9]/g, '');
const isCreator = creatorNumbers.includes(senderNumber);
const isPrem = allPremium.includes(senderNumber);
const isBan = bannedNumbers.includes(senderNumber);

const isBotAdmins = m.isGroup ? [lenwy.user.id, lenwy.user.lid].some(j => groupAdmins.includes(j?.replace(/:\d+@/, '@'))) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pengguna.includes(m.sender)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const isQuotedViewOnce = m.quoted?.viewOnce ? true : false


const harinya = moment.tz('Asia/Jakarta').format('dddd')
const tanggalnya = moment.tz('Asia/Jakarta').format('DD')
const bulannya = moment.tz('Asia/Jakarta').format('MM')
const tahunnya = moment.tz('Asia/Jakarta').format('YYYY')
const namabulannya = moment.tz('Asia/Jakarta').format('MMMM')
const jamnya = moment.tz('Asia/Jakarta').format('HH')
const menitnya = moment.tz('Asia/Jakarta').format('mm')
const detiknya = moment.tz('Asia/Jakarta').format('ss')

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariini2 = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const hariini3 = moment.tz('Asia/Jakarta').format('dddd')
const hariini4 = moment.tz('Asia/Jakarta').format('DD-MMMM-YYYY')
const waktubackup = moment.tz('Asia/Jakarta').format('DDMMMM')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

let ucapanWaktu = `${global.emoji} Selamat Malam`
if (time2 < "03:00:00") {
  ucapanWaktu = `${global.emoji} Selamat Tengah Malam`
} else if (time2 < "05:00:00") {
  ucapanWaktu = `${global.emoji} Selamat Subuh`
} else if (time2 < "10:00:00") {
  ucapanWaktu = `${global.emoji} Selamat Pagi`
} else if (time2 < "15:00:00") {
  ucapanWaktu = `${global.emoji} Selamat Siang`
} else if (time2 < "18:00:00") {
  ucapanWaktu = `${global.emoji} Selamat Sore`
} else if (time2 < "19:00:00") {
  ucapanWaktu = `${global.emoji} Selamat Petang`
}
    
const toxicWords = /(ewe|bangsad|mmk|koncol|puki|kojtol|kintil|momok|nigga|ajg|ewean|yatim|anjing|kontol|memek|bangsat|babi|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|ktl|ngentot|ngewe|bokep|bkp)/i;

function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

async function LenwyLD() {
  await sleep(100)
  await lenwy.sendMessage(from, { react: { text: '🕒', key: m.key } })
}

try {
    if (m.isGroup) {
        const isNew = !global.datagc[m.chat]

        global.datagc[m.chat] ??= {
            text_welcome: "",
            text_left: "",
            text_open: "",
            text_close: "",
            text_proses: "",
            text_done: "",
            text_list: "",
            text_list_simbol: "",
            waktu_Open: "",
            waktu_Close: ""
        }

        if (isNew) {
            fs.writeFileSync(dbgcFilePath, JSON.stringify(global.datagc, null, 2), "utf-8")
        }
    }
} catch (error) {
    console.error("Terjadi kesalahan saat membaca atau menulis file database:", error)
}

try {
    const isNumber = x => typeof x === 'number' && !isNaN(x)
    const user = global.db.data.users[m.sender] ??= {}
    if (!isNumber(user.afkTime)) user.afkTime = -1
    user.afkReason ??= ''
    if (!isNumber(user.level)) user.level = 0
    user.autolevelup ??= true

    if (m.isGroup) {
        const chats = global.db.data.chats[m.chat] ??= {}
        chats.onlyAdmin ??= false
        chats.wlcm ??= true
        chats.left ??= true
        chats.antitoxic1 ??= false
        chats.antitoxic2 ??= false
        chats.antilink ??= false
        chats.antilink2 ??= false
        chats.antich ??= false
        chats.antich2 ??= false
        chats.antilinkyt ??= false
        chats.antilinktt ??= false
        chats.antivirtex ??= true
        chats.antipanel ??= false
        chats.antilinkgc ??= false
        chats.antilinkgc2 ??= false
        chats.antiwame ??= false
        chats.antibot ??= false
        chats.linkgc ??= ''
    }

    const setting = global.db.data.settings[botNumber] ??= {}
    if (!isNumber(setting.status)) setting.status = 0
    setting.autobio ??= false
    setting.autoread ??= false
} catch (err) {
    console.error(err)
}

if (isCmd) {
  if (global.db.data.chats[m.chat]?.onlyAdmin && !isAdmins && !isCreator && !isBot) return
  if (isGcMuted && !isCreator && !isBot) return
  if (!m.isGroup && !isCreator && !isBot) return
}

if (isCmd) {
  const listcolor = ['red', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray']
  console.log(
    color(`\n⏰ [ ${jamnya}:${menitnya}:${detiknya} ]`, listcolor[Math.floor(Math.random() * listcolor.length)]),
    color(`👥 [ ${m.isGroup ? groupName : m.chat.split("@")[0] || 'NoName'} ]`, listcolor[Math.floor(Math.random() * listcolor.length)]),
    color(`\n👤 ${pushname || 'NoName'}`, 'cyan'),
    color(`:`, 'white'),
    color(`${body}`, 'green', 'bold')
  );
}

if (isCmd && !isUser) {
  pengguna.push(sender)
  fs.writeFileSync('./storage/user.json', JSON.stringify(pengguna, null, 2))
}

if (global.db.data.settings[botNumber].autoread) {
  if (m.message) {
    lenwy.readMessages([m.key])
  }
}

if (m.isGroup && isAlreadyResponList(m.chat, String(body || '').toLowerCase(), db_respon_list)) {
  var get_data_respon = getDataResponList(m.chat, String(body || '').toLowerCase(), db_respon_list)
  if (get_data_respon.isImage === false) {
    lenwy.sendMessage(m.chat, { text: sendResponList(m.chat, String(body || '').toLowerCase(), db_respon_list) }, {quoted: m})
  } else {
    try {
      lenwy.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {quoted: m})
    } catch (e) {
      m.reply(`Foto tidak tersedia silahkan chat admin untuk melakukan ${prefix}updatelist bergambar pada Key ${body}`)
      await sleep(5000)
      lenwy.sendMessage(m.chat, { text: sendResponList(m.chat, String(body || '').toLowerCase(), db_respon_list) }, {quoted: m})
    }
  }
}
if (m.isGroup && isKeyResponStick(m.chat, String(body || '').toLowerCase(), JSON.parse(fs.readFileSync('./storage/databaseSticker.json')))) {
  if (!isAdmins) return;
  var getRespon = getDataResponStick(m.chat, String(body || '').toLowerCase(), JSON.parse(fs.readFileSync('./storage/databaseSticker.json')));
  let buffer = fs.readFileSync(getRespon.imageUrl);
  await lenwy.sendMessage(from, { sticker: buffer }, { quoted: m.quoted ? m.quoted.fakeObj : m })
}

if (m.isGroup && db.data.chats[m.chat].antitoxic1) {
  const isToxic = toxicWords.exec(m.text)
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (isToxic) {
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (m.isGroup && db.data.chats[m.chat].antitoxic2) {
  const isToxic = toxicWords.exec(m.text)
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (isToxic) {
      lenwy.sendMessage(m.chat, { delete: m.key })
      await sleep(1500)
      await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
  }
}

if (m.isGroup && db.data.chats[m.chat].antilinkgc) {
  let storedLink = db.data.chats[m.chat].linkgc;
  let isLinkThisGc = new RegExp(storedLink, 'i') 
  let isgclink = isLinkThisGc.test(m.text) 
  if (!m.key.fromMe && !isCreator && !isAdmins && !isgclink) {
    if (budy.match(`chat.whatsapp.com`)) {
      m.reply(`*Anti Link Gc Sedang Aktif*\n⚠️ *Pesan Anda Akan Dihapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key }) 
    }
  }
}

if (m.isGroup && db.data.chats[m.chat].antilinkgc2) {
  let storedLink = db.data.chats[m.chat].linkgc;
  let isLinkThisGc = new RegExp(storedLink, 'i') 
  let isgclink = isLinkThisGc.test(m.text) 
  if (!m.key.fromMe && !isCreator && !isAdmins && !isgclink) {
    if (budy.match(`chat.whatsapp.com`)) {
      m.reply(`*Anti Link Gc2 Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus Dan Anda Akan Di Keluarkan*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
      await sleep(1500)
      await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
  }
}

if (m.isGroup && db.data.chats[m.chat].antiwame) {
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (budy.includes('https://wa.me') || budy.includes('wa.me') || budy.includes('Https://wa.me') || budy.includes('Wa.me') ) {
      m.reply(`*Anti Wame Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (m.isGroup && db.data.chats[m.chat].antilink) {
  let storedLink = db.data.chats[m.chat].linkgc;
  let isLinkThisGc = new RegExp(storedLink, 'i') 
  let isgclink = isLinkThisGc.test(m.text) 
  if (!m.key.fromMe && !isCreator && !isAdmins && !isgclink) {
    if (budy.includes('https:') || budy.includes('http')) {
      m.reply(`*Anti Link Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (m.isGroup && db.data.chats[m.chat].antilink2) {
  let storedLink = db.data.chats[m.chat].linkgc;
  let isLinkThisGc = new RegExp(storedLink, 'i') 
  let isgclink = isLinkThisGc.test(m.text) 
  if (!m.key.fromMe && !isCreator && !isAdmins && !isgclink) {
    if (budy.includes('https:') || budy.includes('http')) {
      m.reply(`*Anti Link2 Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus Dan Anda Akan Di Keluarkan*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
      await sleep(1500)
      await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
  }
}

if (m.isGroup && db.data.chats[m.chat].antipanel) {
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (budy.includes('PANEL') || budy.includes('Panel') || budy.includes('panel') || budy.includes('pnel')) {
      m.reply(`*Anti Promosi Panel Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (m.isGroup && db.data.chats[m.chat].antitiktok) {
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (budy.match(`https://vt.tiktok.com`)) {
      m.reply(`*Anti Link Tiktok Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (m.isGroup && db.data.chats[m.chat].antiyoutube) {
  if (!m.key.fromMe && !isCreator && !isAdmins) {
    if (budy.match(`https://youtube`)) {
      m.reply(`*Anti Link Youtube Sedang Aktif*\n⚠️ *Pesan Anda Akan Di Hapus*`)
      lenwy.sendMessage(m.chat, { delete: m.key })
    }
  }
}

if (m.isGroup && db.data.chats[m.chat].antibot) {
  if (m.id.startsWith('3EB0') || m.id.startsWith('B1E') || m.id.startsWith('BAE')) {
    m.reply(`*Bot Lain Terdeteksi*\n\n*Bot Akan Di Keluarkan, Karena Admin Mengaktifkan Anti Bot*`)
    lenwy.sendMessage(m.chat, { delete: m.key })
  }
}


let list = []
for (let i of owner) {
list.push({
displayName: await lenwy.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await lenwy.getName(i + '@s.whatsapp.net')}\n
FN:${await lenwy.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:FakeLenwy@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:Youtube : Lenwy\n
item3.X-ABLabel:Grup WangSaff\n
item4.ADR:;;Mars Area 51;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: lenwy.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, lenwy.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
lenwy.ev.emit('messages.upsert', msg)
}

const quizMap = {
  kuismath: {
    data: kuismath,
    title: 'Kuis Matematika',
    replay: 'Math Mode'
  },
  tebakgambar: {
    data: tebakgambar,
    title: 'Tebak Gambar',
    replay: 'Tebak Gambar'
  },
  tebakkata: {
    data: tebakkata,
    title: 'Tebak Kata',
    replay: 'Tebak Kata'
  },
  caklontong: {
    data: caklontong,
    title: 'Tebak Lontong',
    replay: 'Tebak Lontong',
    extraDelete: () => delete caklontong_desk[room]
  },
  tebakkalimat: {
    data: tebakkalimat,
    title: 'Tebak Kalimat',
    replay: 'Tebak Kalimat'
  },
  tebaklirik: {
    data: tebaklirik,
    title: 'Tebak Lirik',
    replay: 'Tebak Lirik'
  },
  tebaktebakan: {
    data: tebaktebakan,
    title: 'Tebak Tebakan',
    replay: 'Tebak Tebakan'
  }
}

for (const { data, title, replay, extraDelete } of Object.values(quizMap)) {
  if (!isCmd || !data[m.chat]) continue
  kuis = true
  jawaban = data[m.chat]
  if (body.toLowerCase() === jawaban) {
    await m.reply(`${global.emoji} *${title}*

🎁 *Jawaban Benar*
📣 *Ingin Bermain Lagi? Silakan Ketik ${replay}*`)
    delete data[m.chat]
    if (extraDelete) extraDelete()
  } else {
    await m.reply('❌ *Jawaban Salah!*')
  }
  return
}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
lenwy.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
lenwy.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) lenwy.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) lenwy.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) lenwy.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
lenwy.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) lenwy.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) lenwy.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
lenwy.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
  let user = global.db.data.users[jid]
  if (!user) continue
  let afkTime = user.afkTime
  if (!afkTime || afkTime < 0) continue
  let reason = user.afkReason || ''
  let ygSedangAfk = await lenwy.getName(jid) || jid
  let pushnameYgNgetag = await lenwy.getName(m.sender) || m.sender

  m.reply(`⚠️ *${pushnameYgNgetag} Jangan Tag ${ygSedangAfk}! Dia Sedang AFK*
❗❗ *Dengan Alasan :* ${reason ? reason : 'Dia Ga Ngasih Alasan Jir. Lanjut Aja Tag Dia Lagi 💀'}
🕒 *Selama : ${clockString(new Date - afkTime)}*
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
  let user = global.db.data.users[m.sender]
  m.reply(`*${pushname} Kembali Dari Afk*
⚠️ ${'*Dengan Alasan :* ' + (user.afkReason ? user.afkReason : 'Tidak Ada')}
🕒 *Selama : ${clockString(new Date - user.afkTime)}*
`.trim())
  user.afkTime = -1
  user.afkReason = ''
}

if (m.msg?.contextInfo?.mentionedJid?.some(jid => global.owner.includes(jid.replace(/@s\.whatsapp\.net$/, '')))) {
  if (fromMe) return
  return m.reply(mess.tagOwner);
}

const gameState = {
  angkaAcak: null,
  jumlahTebakan: 0
};


switch (command) {

case 'menu': 
case 'mainmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
    
let anu = ` ❛❛ Hai, I'm ${global.botname} 👋 ❛❛

   ➜ Whatsapp Bot To Solve Your Problems 🙌
   ➜ Please Dont Call Bots Or Get Blocked 🚫
 
   ╭─ ─ ─ ❛❛𝓘𝗇𝖿𝗈 𝓑𝗈𝗍 ❛❛
   │ ꖛ 𝗿𝘂𝗻𝘁𝗶𝗺𝗲 ⵓ ${runtime(process.uptime())}
   │ ꖛ 𝗰𝗿𝗲𝗮𝘁𝗼𝗿 ⵓ wa.me/${authorr}
   ╰╌╌╌╌╌╌╌╌╌𖧷⃝⃝⃝⏤͟͟͞͞ 

   ╭─ ─ ─ ❛❛𝓘𝗇𝖿𝗈𝓤𝗌𝖾𝗋 ❛❛
   │ ꖛ 𝗻𝗮𝗺𝗲 ⵓ ${pushname}
   │ ꖛ 𝗻𝘂𝗺𝗯𝗲𝗿 ⵓ wa.me/${m.sender.split('@')[0]}
   │ ꖛ 𝘀𝘁𝗮𝘁𝘂𝘀 ⵓ ${isCreator ? `${global.emoji} Creator` : isPrem ? '🎁 Premium' : "🏷️ User"}
   ╰╌╌╌╌╌╌╌╌╌𖧷⃝⃝⃝⏤͟͟͞͞ 
   
   ❛❛ 𝓚 𝖾𝗍𝖾𝗋𝖺𝗇𝗀𝖺𝗇 ❛❛
   ➜ 𝗵𝗲𝗹𝗽 ⵓ Menunjukkan Panduan
   ➜ 𝗺𝗲𝗻𝘂 ⵓ Menunjukkan Simple Menu
   ➜ 𝗮𝗹𝗹𝗺𝗲𝗻𝘂 ⵓ Menunjukkan Semua Menu
   ➜ 𝗹𝗶𝘀𝘁 ⵓ Menunjukkan List



   ╭─ ─ ─ ❛❛𝑀𝖾𝗇𝗎 ❛❛
   ││ ♡゙ Aboutmenu ( Menu Tentang )
   ││ ♡゙ Ownermenu ( Menu Owner )
   ││ ♡゙ Groupmenu ( Menu Grup )
   ││ ♡゙ Funmenu ( Menu Fun )
   ││ ♡゙ Toolsmenu ( Menu Tools )
   ││ ♡゙ Gamemenu ( Menu Game )
   ││ ♡゙ Beritamenu ( Menu Berita )
   ││ ♡゙ Randommenu ( Menu Random )
   ││ ♡゙ Downloadmenu ( Menu Download )
   ││ ♡゙ Islamimenu ( Menu Islam )
   ││ ♡゙ Searchmenu ( Menu Search )
   ││ ♡゙ Antimenu ( Menu Anti )
   ╰╌╌╌╌╌╌╌╌╌𖧷⃝⃝⃝⏤͟͟͞͞ 

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*`
m.reply(anu)
}
break

case 'almenu': 
case 'allmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
let anu = `               /)  /)  
             („• ֊ •„) 
◯┈──̇─∪─∪──̇──┈◯
 ❛❛ Hai, I'm ${global.botname} 👋 ❛❛

   ➜ Whatsapp Bot To Solve Your Problems 🙌
   ➜ Please Dont Call Bots Or Get Blocked 🚫
 
   ╭─ ─ ─ ❛❛𝓘𝗇𝖿𝗈 𝓑𝗈𝗍 ❛❛
   │ ꖛ 𝗿𝘂𝗻𝘁𝗶𝗺𝗲 ⵓ ${runtime(process.uptime())}
   │ ꖛ 𝗰𝗿𝗲𝗮𝘁𝗼𝗿 ⵓ wa.me/${authorr}
   ╰╌╌╌╌╌╌╌╌╌𖧷⃝⃝⃝⏤͟͟͞͞ 

   ╭─ ─ ─ ❛❛𝓘𝗇𝖿𝗈𝓤𝗌𝖾𝗋 ❛❛
   │ ꖛ 𝗻𝗮𝗺𝗲 ⵓ ${pushname}
   │ ꖛ 𝗻𝘂𝗺𝗯𝗲𝗿 ⵓ wa.me/${m.sender.split('@')[0]}
   │ ꖛ 𝘀𝘁𝗮𝘁𝘂𝘀 ⵓ ${isCreator ? `${global.emoji} Creator` : isPrem ? '🎁 Premium' : "🏷️ User"}
   ╰╌╌╌╌╌╌╌╌╌𖧷⃝⃝⃝⏤͟͟͞͞ 
   
   ❛❛ 𝓚 𝖾𝗍𝖾𝗋𝖺𝗇𝗀𝖺𝗇 ❛❛
   ➜ 𝗵𝗲𝗹𝗽 ⵓ Menunjukkan Panduan
   ➜ 𝗺𝗲𝗻𝘂 ⵓ Menunjukkan Simple Menu
   ➜ 𝗮𝗹𝗹𝗺𝗲𝗻𝘂 ⵓ Menunjukkan Semua Menu
   ➜ 𝗹𝗶𝘀𝘁 ⵓ Menunjukkan List



   ╭───── 私❛❛ About Menu
   ││
   ││ ♡゙ Owner
   ││ ♡゙ Developer
   ││ ♡゙ Sewa
   ││ ♡゙ Sc
   ││ ♡゙ Ping
   ││ ♡゙ Catatan
   ╰───── ♡゙𓇼𓂃 𓆪𐚁


   ╭───── 私❛❛ Owner Menu
   ││
   ││ ♡゙ Cekidgc
   ││ ♡゙ Pushkontak
   ││ ♡゙ Pushkontak2
   ││ ♡゙ Savekontak
   ││ ♡゙ Public
   ││ ♡゙ Self
   ││ ♡゙ Enc
   ││ ♡゙ Addallprem
   ││ ♡゙ Delallprem
   ││ ♡゙ Addprem
   ││ ♡゙ Delprem
   ││ ♡゙ Listprem
   ││ ♡゙ Banall
   ││ ♡゙ Delbanall
   ││ ♡゙ Ban
   ││ ♡゙ Delban
   ││ ♡゙ Listban
   ││ ♡゙ Setppbot
   ││ ♡゙ Setppbotpanjang
   ││ ♡゙ Join
   ││ ♡゙ Leave
   ││ ♡゙ Addgc
   ││ ♡゙ Delgc
   ││ ♡゙ Bcgc
   ││ ♡゙ Bcgcvideo
   ││ ♡゙ Autoread
   ││ ♡゙ Block
   ││ ♡゙ Unblock
   ││ ♡゙ Listdb
   ││ ♡゙ Getdb
   ││ ♡゙ Getuser
   ││ ♡゙ Restart
   ││ ♡゙ Delsesi
   ││ ♡゙ Delsampah
   ││ ♡゙ Setppsewa
   ││ ♡゙ Changewdsewa
   ││ ♡゙ Changewdppj
   ││ ♡゙ Addsewa
   ││ ♡゙ Delsewa
   ││ ♡゙ Ceksewa
   ││ ♡゙ Cekexpired
   ││ ♡゙ Perpanjangsewa
   ││ ♡゙ Listsewa
   ││ ♡゙ Backupbot
   ││ ♡゙ Cekip
   ││ - - - - - - - - - - - -
   ││ ♡゙ Cekstatusakun
   ││ ♡゙ Listlayanankebsos
   ││ ♡゙ Addkebsos
   ││ ♡゙ Delkebsos
   ││ ♡゙ cekorderankebsos
   ││ ♡゙ Addgctopup
   ││ ♡゙ Delgctopup
   ││ ♡゙ Upgrade
   ││ ♡゙ Deposit
   ││ ♡゙ Profit
   ││ ♡゙ Setprofit
   ││ ♡゙ Cekdata
   ││ ♡゙ Getcase
   ││ ♡゙ Addcase
   ││ ♡゙ Editcase
   ││ ♡゙ Delcase
   ││ ♡゙ Cekcase
   ╰───── ♡゙𓇼𓂃 𓆪𐚁


   ╭───── 私❛❛ Group Menu
   ││
   ││ ♡゙ Antich (on/off)
   ││ ♡゙ Antiwame (on/off)
   ││ ♡゙ Antilink (on/off)
   ││ ♡゙ Antipl (on/off)
   ││ ♡゙ Antitoxic1 (on/off)
   ││ ♡゙ Antitoxic2 (on/off)
   ││ ♡゙ Antilinktt (on/off)
   ││ ♡゙ Antilinkyt (on/off)
   ││ ♡゙ Antilinkgc1 (on/off)
   ││ ♡゙ Antilinkgc2 (on/off)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Addlist (key@Respon)
   ││ ♡゙ Dellist (key)
   ││ ♡゙ updatenamelist (key@newKey)
   ││ ♡゙ updatelist (key@newRespon)
   ││ ♡゙ setpayment (key@wording)
   ││ ♡゙ changewording (key@newWording)
   ││ ♡゙ delbutton (key)
   ││ ♡゙ setbuttoncopy
   ││ ♡゙ setbuttonurl
   ││ ♡゙ pay
   ││ ♡゙ Hidetag (textnya)
   ││ ♡゙ Faketag (textnya)
   ││ ♡゙ Tagall (textnya)
   ││ ♡゙ Kick (628xx)
   ││ ♡゙ Add (628xx)
   ││ ♡゙ Promote (628xx)
   ││ ♡゙ Demote (628xx)
   ││ ♡゙ Sendlinkgc (628xx)
   ││ ♡゙ Inspect (linknya)
   ││ ♡゙ Inspect2 (linknya)
   ││ ♡゙ Promoteall
   ││ ♡゙ Demoteall
   ││ - - - - - - - - - - - -
   ││ ♡゙ Setdesk (on/off)
   ││ ♡゙ Welcome (on/off/edit)
   ││ ♡゙ Left (on/off/edit)
   ││ ♡゙ Setlist (text)
   ││ ♡゙ Setsimbol (text)
   ││ ♡゙ SetGrup (open/close)
   ││ ♡゙ Open (edit)
   ││ ♡゙ Close (edit)
   ││ ♡゙ Done (edit)
   ││ ♡゙ Proses (edit)
   ││ ♡゙ Jeda
   ││ ♡゙ Editsubjek (textnya)
   ││ ♡゙ Editdesk (textnya)
   ││ ♡゙ Setppgc
   ││ ♡゙ Linkgroup
   ││ ♡゙ Resetlinkgc
   ││ ♡゙ Afk
   ││ - - - - - - - - - - - -
   ││ ♡゙ Saran
   ││ ♡゙ Reportbug
   ╰───── ♡゙𓇼𓂃 𓆪𐚁


   ╭───── 私❛❛ Fun Menu
   ││
   ││ ♡゙ Truth
   ││ ♡゙ Dare
   ││ ♡゙ Rate
   ││ ♡゙ Apakah
   ││ ♡゙ Kapankah
   ││ ♡゙ Bisakah
   ││ ♡゙ Bagaimanakah
   ││ ♡゙ Gantengcek
   ││ ♡゙ Cantikcek
   ││ ♡゙ Jodoh
   ││ ♡゙ Readmore
   ││ ♡゙ Cwr
   ││ ♡゙ Couple
   ││ ♡゙ Meme
   ││ - - - - - - - - - - - -
   ││ ♡゙ Cekkodam
   ││ ♡゙ FML
   ││ ♡゙ Bucin
   ││ ♡゙ Quotes
   ││ ♡゙ Motivasi
   ││ ♡゙ Katabijak
   ││ ♡゙ Katacinta
   ││ ♡゙ Katagalau
   ││ ♡゙ Katahacker
   ││ ♡゙ Katailham
   ││ ♡゙ Katasenja
   ││ ♡゙ Katasindiran
   ││ ♡゙ Quotesanime
   ││ ♡゙ Quotespubg
   ││ ♡゙ Quotesislamic
   ││ ♡゙ Nickff
   ││ ♡゙ Puisi
   ││ ♡゙ Pantun
   ││ ♡゙ Faktaunik
   ╰───── ♡゙𓇼𓂃 𓆪𐚁


   ╭───── 私❛❛ Tools Menu
   ││
   ││ ♡゙ Sticker
   ││ ♡゙ Smeme
   ││ ♡゙ Qc
   ││ ♡゙ Qckode
   ││ ♡゙ Wm
   ││ ♡゙ Brat
   ││ ♡゙ Brat2
   ││ ♡゙ Ttp
   ││ ♡゙ Attp
   ││ - - - - - - - - - - - -
   ││ ♡゙ Createqr
   ││ ♡゙ Detectqr
   ││ ♡゙ Toimg
   ││ ♡゙ Ocr
   ││ ♡゙ Rvo
   ││ ♡゙ Hd
   ││ ♡゙ Hd2
   ││ ♡゙ Hd3
   ││ ♡゙ Hd4
   ││ ♡゙ Removebg
   ││ ♡゙ Toanime
   ││ ♡゙ Tocyberpunk
   ││ ♡゙ Todreamscape
   ││ ♡゙ Tocomic
   ││ ♡゙ Todonghua
   ││ ♡゙ Todisney
   ││ ♡゙ Toghibli
   ││ ♡゙ Img2Txt
   ││ ♡゙ Txt2img
   ││ ♡゙ Txt2anime
   ││ ♡゙ Txt2flux
   ││ ♡゙ Txt2photoleap
   ││ ♡゙ Txt2waifu
   ││ - - - - - - - - - - - -
   ││ ♡゙ Hdvid
   ││ - - - - - - - - - - - -
   ││ ♡゙ text2speech
   ││ - - - - - - - - - - - -
   ││ ♡゙ Ssweb
   ││ ♡゙ Sstab
   ││ ♡゙ Sshp
   ││ - - - - - - - - - - - -
   ││ ♡゙ Cwr
   ││ ♡゙ Ffstalk
   ││ ♡゙ Mlstalk
   ││ ♡゙ Ttstalk
   ││ - - - - - - - - - - - -
   ││ ♡゙ Reminder
   ││ ♡゙ Getname
   ││ ♡゙ Getpic
   ││ ♡゙ Confes
   ││ ♡゙ Confes2
   ││ ♡゙ Readmore
   ││ ♡゙ Cwr
   ││ ♡゙ Tourl
   ╰───── ♡゙𓇼𓂃 𓆪𐚁


   ╭───── 私❛❛ Game Menu
   ││
   ││ ♡゙ TTC
   ││ ♡゙ Deltc
   ││ - - - - - - - - - - - -
   ││ ♡゙ Tebak Kata
   ││ ♡゙ Tebak Gambar
   ││ ♡゙ Tebak Lirik
   ││ ♡゙ Tebak Kalimat
   ││ ♡゙ Tebak Lontong
   ││ - - - - - - - - - - - -
   ││ ♡゙ Kuismath Noob
   ││ ♡゙ Kuismath Easy
   ││ ♡゙ Kuismath Medium
   ││ ♡゙ Kuismath Hard
   ││ ♡゙ Kuismath Extreme
   ││ ♡゙ Kuismath Imposibble
   ││ ♡゙ Kuismath Imposibble2
   ╰───── ♡゙𓇼𓂃 𓆪𐚁


   ╭───── 私❛❛ Berita Menu
   ││
   ││ ♡゙ Inews
   ││ ♡゙ Kontan
   ││ ♡゙ KompasNews
   ││ ♡゙ DetikNews
   ││ ♡゙ DailyNews
   ╰───── ♡゙𓇼𓂃 𓆪𐚁


   ╭───── 私❛❛ Random Menu
   ││
   ││ ♡゙ Qc
   ││ ♡゙ Nickff
   ││ ♡゙ Puisi
   ││ ♡゙ Pantun
   ││ ♡゙ Qckode
   ││ ♡゙ Sticker
   ││ ♡゙ Smeme
   ││ ♡゙ Reminder
   ││ ♡゙ Faktaunik
   ││ ♡゙ Couple
   ││ ♡゙ Meme
   ││ ♡゙ Getname
   ││ ♡゙ Getpic
   ││ ♡゙ Confes
   ││ ♡゙ Menfes
   ╰───── ♡゙𓇼𓂃 𓆪𐚁


   ╭───── 私❛❛ Download Menu
   ││
   ││ ♡゙ Fb (linknya)
   ││ ♡゙ Fbvideo (linknya)
   ││ ♡゙ Fbfoto (linknya)
   ││ ♡゙ Fbaudio (linknya)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Ig (linknya)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Tt (linknya)
   ││ ♡゙ Ttaudio (linknya)

   ││ - - - - - - - - - - - -
   ││ ♡゙ Twitter (linknya)
   ││ ♡゙ Twittervideo (linknya)
   ││ ♡゙ Twitterfoto (linknya)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Play (linknya)
   ││ ♡゙ Ytmp3 (linknya)
   ││ ♡゙ Ytmp4 (linknya)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Mediafire (linknya)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Spotify (text)
   ││ ♡゙ Spotifydl (Linknya)
   ╰───── ♡゙𓇼𓂃 𓆪𐚁


   ╭───── 私❛❛ Islami Menu
   ││
   ││ ♡゙ Doa
   ││ ♡゙ Asmaul Husna
   ││ ♡゙ Ayat Kursi
   ╰───── ♡゙𓇼𓂃 𓆪𐚁


   ╭───── 私❛❛ Search Menu
   ││
   ││ ♡゙ Ai
   ││ ♡゙ Yuna
   ││ ♡゙ Search
   ││ ♡゙ Imdb
   ││ ♡゙ Chord
   ││ ♡゙ Lirik
   ││ ♡゙ Cuaca
   ││ ♡゙ Jarak
   ││ ♡゙ Google
   ││ ♡゙ Mcserver
   ││ ♡゙ Apksearch
   ││ ♡゙ Animesearch
   ││ ♡゙ Animeinfo
   ││ ♡゙ Animedownload
   ││ ♡゙ Translate
   ││ ♡゙ Kodebahasa
   ╰───── ♡゙𓇼𓂃 𓆪𐚁


   ╭───── 私❛❛ Anti Menu
   ││
   ││ ♡゙ Antich
   ││ ♡゙ Antiwame
   ││ ♡゙ Antilink
   ││ ♡゙ Antipl
   ││ ♡゙ Antitoxic1
   ││ ♡゙ Antitoxic2
   ││ ♡゙ Antilinktt
   ││ ♡゙ Antilinkyt
   ││ ♡゙ Antilinkgc1
   ││ ♡゙ Antilinkgc2
   ╰───── ♡゙𓇼𓂃 𓆪𐚁

⚠️ Kalo Ada Error Bisa Chat Owner Ya
`
m.reply(anu)
}
break










case 'aboutmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ About Menu
   ││
   ││ ♡゙ Owner
   ││ ♡゙ Developer
   ││ ♡゙ Sewa
   ││ ♡゙ Sc
   ││ ♡゙ Ping
   ││ ♡゙ Catatan
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'ownermenu':
case 'menuowner': {
  if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
  LenwyLD()
  await sleep(200)
  m.reply(`   ╭───── 私❛❛ Owner Menu
   ││
   ││ ♡゙ Cekidgc
   ││ ♡゙ Pushkontak
   ││ ♡゙ Pushkontak2
   ││ ♡゙ Savekontak
   ││ ♡゙ Public
   ││ ♡゙ Self
   ││ ♡゙ Enc
   ││ ♡゙ Addallprem
   ││ ♡゙ Delallprem
   ││ ♡゙ Addprem
   ││ ♡゙ Delprem
   ││ ♡゙ Listprem
   ││ ♡゙ Banall
   ││ ♡゙ Delbanall
   ││ ♡゙ Ban
   ││ ♡゙ Delban
   ││ ♡゙ Listban
   ││ ♡゙ Setppbot
   ││ ♡゙ Setppbotpanjang
   ││ ♡゙ Join
   ││ ♡゙ Leave
   ││ ♡゙ Addgc
   ││ ♡゙ Delgc
   ││ ♡゙ Bcgc
   ││ ♡゙ Bcgcvideo
   ││ ♡゙ Autoread
   ││ ♡゙ Block
   ││ ♡゙ Unblock
   ││ ♡゙ Listdb
   ││ ♡゙ Getdb
   ││ ♡゙ Getuser
   ││ ♡゙ Restart
   ││ ♡゙ Delsesi
   ││ ♡゙ Delsampah
   ││ ♡゙ Setppsewa
   ││ ♡゙ Changewdsewa
   ││ ♡゙ Changewdppj
   ││ ♡゙ Addsewa
   ││ ♡゙ Delsewa
   ││ ♡゙ Ceksewa
   ││ ♡゙ Cekexpired
   ││ ♡゙ Perpanjangsewa
   ││ ♡゙ Listsewa
   ││ ♡゙ Backupbot
   ││ ♡゙ Cekip
   ││ - - - - - - - - - - - -
   ││ ♡゙ Cekstatusakun
   ││ ♡゙ Listlayanankebsos
   ││ ♡゙ Addkebsos
   ││ ♡゙ Delkebsos
   ││ ♡゙ cekorderankebsos
   ││ ♡゙ Addgctopup
   ││ ♡゙ Delgctopup
   ││ ♡゙ Upgrade
   ││ ♡゙ Deposit
   ││ ♡゙ Profit
   ││ ♡゙ Setprofit
   ││ ♡゙ Cekdata
   ││ ♡゙ Getcase
   ││ ♡゙ Addcase
   ││ ♡゙ Editcase
   ││ ♡゙ Delcase
   ││ ♡゙ Cekcase
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'groupmenu':
case 'grupmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Group Menu
   ││
   ││ ♡゙ Antich (on/off)
   ││ ♡゙ Antiwame (on/off)
   ││ ♡゙ Antilink (on/off)
   ││ ♡゙ Antipl (on/off)
   ││ ♡゙ Antitoxic1 (on/off)
   ││ ♡゙ Antitoxic2 (on/off)
   ││ ♡゙ Antilinktt (on/off)
   ││ ♡゙ Antilinkyt (on/off)
   ││ ♡゙ Antilinkgc1 (on/off)
   ││ ♡゙ Antilinkgc2 (on/off)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Addlist (key@Respon)
   ││ ♡゙ Dellist (key)
   ││ ♡゙ updatenamelist (key@newKey)
   ││ ♡゙ updatelist (key@newRespon)
   ││ ♡゙ setpayment (key@wording)
   ││ ♡゙ setbuttoncopy (key@disButn@cpyVal)
   ││ ♡゙ setbuttonurl (key@disButn@urlVal)
   ││ ♡゙ changewording (key@newWording)
   ││ ♡゙ delbutton (key)
   ││ ♡゙ pay
   ││ ♡゙ Hidetag (textnya)
   ││ ♡゙ Faketag (textnya)
   ││ ♡゙ Tagall (textnya)
   ││ ♡゙ Kick (628xx)
   ││ ♡゙ Add (628xx)
   ││ ♡゙ Promote (628xx)
   ││ ♡゙ Demote (628xx)
   ││ ♡゙ Sendlinkgc (628xx)
   ││ ♡゙ Inspect (linknya)
   ││ ♡゙ Inspect2 (linknya)
   ││ ♡゙ Promoteall
   ││ ♡゙ Demoteall
   ││ - - - - - - - - - - - -
   ││ ♡゙ Setdesk (on/off)
   ││ ♡゙ Welcome (on/off/edit)
   ││ ♡゙ Left (on/off/edit)
   ││ ♡゙ Setlist (text)
   ││ ♡゙ Setsimbol (text)
   ││ ♡゙ SetGrup (open/close)
   ││ ♡゙ Open (edit)
   ││ ♡゙ Close (edit)
   ││ ♡゙ Done (edit)
   ││ ♡゙ Proses (edit)
   ││ ♡゙ Jeda
   ││ ♡゙ Editsubjek (textnya)
   ││ ♡゙ Editdesk (textnya)
   ││ ♡゙ Setppgc
   ││ ♡゙ Linkgroup
   ││ ♡゙ Resetlinkgc
   ││ ♡゙ Afk
   ││ - - - - - - - - - - - -
   ││ ♡゙ Saran
   ││ ♡゙ Reportbug
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'funmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Fun Menu
   ││
   ││ ♡゙ Truth
   ││ ♡゙ Dare
   ││ ♡゙ Rate
   ││ ♡゙ Apakah
   ││ ♡゙ Kapankah
   ││ ♡゙ Bisakah
   ││ ♡゙ Bagaimanakah
   ││ ♡゙ Gantengcek
   ││ ♡゙ Cantikcek
   ││ ♡゙ Jodoh
   ││ ♡゙ Readmore
   ││ ♡゙ Cwr
   ││ ♡゙ Couple
   ││ ♡゙ Meme
   ││ - - - - - - - - - - - -
   ││ ♡゙ FML
   ││ ♡゙ FML
   ││ ♡゙ Bucin
   ││ ♡゙ Quotes
   ││ ♡゙ Motivasi
   ││ ♡゙ Katabijak
   ││ ♡゙ Katacinta
   ││ ♡゙ Katagalau
   ││ ♡゙ Katahacker
   ││ ♡゙ Katailham
   ││ ♡゙ Katasenja
   ││ ♡゙ Katasindiran
   ││ ♡゙ Quotesanime
   ││ ♡゙ Quotespubg
   ││ ♡゙ Quotesislamic
   ││ ♡゙ Nickff
   ││ ♡゙ Puisi
   ││ ♡゙ Pantun
   ││ ♡゙ Faktaunik
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'toolsmenu':
case 'toolmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Tools Menu
   ││
   ││ ♡゙ Sticker
   ││ ♡゙ Smeme
   ││ ♡゙ Qc
   ││ ♡゙ Qckode
   ││ ♡゙ Wm
   ││ ♡゙ Brat
   ││ ♡゙ Brat2
   ││ ♡゙ Ttp
   ││ ♡゙ Attp
   ││ - - - - - - - - - - - -
   ││ ♡゙ Createqr
   ││ ♡゙ Detectqr
   ││ ♡゙ Toimg
   ││ ♡゙ Ocr
   ││ ♡゙ Rvo
   ││ ♡゙ Hd
   ││ ♡゙ Hd2
   ││ ♡゙ Hd3
   ││ ♡゙ Hd4
   ││ ♡゙ Removebg
   ││ ♡゙ Toanime
   ││ ♡゙ Tocyberpunk
   ││ ♡゙ Todreamscape
   ││ ♡゙ Tocomic
   ││ ♡゙ Todonghua
   ││ ♡゙ Todisney
   ││ ♡゙ Toghibli
   ││ ♡゙ Img2Txt
   ││ ♡゙ Txt2img
   ││ ♡゙ Txt2anime
   ││ ♡゙ Txt2flux
   ││ ♡゙ Txt2photoleap
   ││ ♡゙ Txt2waifu
   ││ - - - - - - - - - - - -
   ││ ♡゙ Hdvid
   ││ - - - - - - - - - - - -
   ││ ♡゙ text2speech
   ││ - - - - - - - - - - - -
   ││ ♡゙ Ssweb
   ││ ♡゙ Sstab
   ││ ♡゙ Sshp
   ││ - - - - - - - - - - - -
   ││ ♡゙ Cwr
   ││ ♡゙ Ffstalk
   ││ ♡゙ Mlstalk
   ││ ♡゙ Ttstalk
   ││ - - - - - - - - - - - -
   ││ ♡゙ Reminder
   ││ ♡゙ Getname
   ││ ♡゙ Getpic
   ││ ♡゙ Confes
   ││ ♡゙ Confes2
   ││ ♡゙ Readmore
   ││ ♡゙ Cwr
   ││ ♡゙ Tourl
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'gamemenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Game Menu
   ││
   ││ ♡゙ TTC
   ││ ♡゙ Deltc
   ││ - - - - - - - - - - - -
   ││ ♡゙ Tebak Kata
   ││ ♡゙ Tebak Gambar
   ││ ♡゙ Tebak Lirik
   ││ ♡゙ Tebak Kalimat
   ││ ♡゙ Tebak Lontong
   ││ - - - - - - - - - - - -
   ││ ♡゙ Kuismath Noob
   ││ ♡゙ Kuismath Easy
   ││ ♡゙ Kuismath Medium
   ││ ♡゙ Kuismath Hard
   ││ ♡゙ Kuismath Extreme
   ││ ♡゙ Kuismath Imposibble
   ││ ♡゙ Kuismath Imposibble2
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'beritamenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Berita Menu
   ││
   ││ ♡゙ Inews
   ││ ♡゙ Kontan
   ││ ♡゙ KompasNews
   ││ ♡゙ DetikNews
   ││ ♡゙ DailyNews
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'randommenu':
case 'randmenu':{
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
const y11 = `   ╭───── 私❛❛ Random Menu
   ││
   ││ ♡゙ Qc
   ││ ♡゙ Nickff
   ││ ♡゙ Puisi
   ││ ♡゙ Pantun
   ││ ♡゙ Qckode
   ││ ♡゙ Sticker
   ││ ♡゙ Smeme
   ││ ♡゙ Reminder
   ││ ♡゙ Faktaunik
   ││ ♡゙ Couple
   ││ ♡゙ Meme
   ││ ♡゙ Getname
   ││ ♡゙ Getpic
   ││ ♡゙ Confes
   ││ ♡゙ Menfes
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`
m.reply(y11)
}
break

case 'downmenu':
case 'downloadmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Download Menu
   ││
   ││ ♡゙ Fb (linknya)
   ││ ♡゙ Fbvideo (linknya)
   ││ ♡゙ Fbfoto (linknya)
   ││ ♡゙ Fbaudio (linknya)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Ig (linknya)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Tt (linknya)
   ││ ♡゙ Ttaudio (linknya)

   ││ - - - - - - - - - - - -
   ││ ♡゙ Twitter (linknya)
   ││ ♡゙ Twittervideo (linknya)
   ││ ♡゙ Twitterfoto (linknya)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Play (linknya)
   ││ ♡゙ Ytmp3 (linknya)
   ││ ♡゙ Ytmp4 (linknya)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Mediafire (linknya)
   ││ - - - - - - - - - - - -
   ││ ♡゙ Spotify (text)
   ││ ♡゙ Spotifydl (Linknya)
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'islamimenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Islami Menu
   ││
   ││ ♡゙ Doa
   ││ ♡゙ Asmaul Husna
   ││ ♡゙ Ayat Kursi
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'searchmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Search Menu
   ││
   ││ ♡゙ Ai
   ││ ♡゙ Yuna
   ││ ♡゙ Imdb
   ││ ♡゙ Chord
   ││ ♡゙ Lirik
   ││ ♡゙ Cuaca
   ││ ♡゙ Jarak
   ││ ♡゙ Google
   ││ ♡゙ Mcserver
   ││ ♡゙ Apksearch
   ││ ♡゙ Animesearch
   ││ ♡゙ Animeinfo
   ││ ♡゙ Animedownload
   ││ ♡゙ Translate
   ││ ♡゙ Kodebahasa
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break

case 'antimenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`   ╭───── 私❛❛ Anti Menu
   ││
   ││ ♡゙ Antich
   ││ ♡゙ Antiwame
   ││ ♡゙ Antilink
   ││ ♡゙ Antipl
   ││ ♡゙ Antitoxic1
   ││ ♡゙ Antitoxic2
   ││ ♡゙ Antilinktt
   ││ ♡゙ Antilinkyt
   ││ ♡゙ Antilinkgc1
   ││ ♡゙ Antilinkgc2
   ╰───── ♡゙𓇼𓂃 𓆪𐚁
`)
}
break











case 'help': {
m.reply(`*Panduan Untuk Menggunakan Fitur Bot*

*#1 Membuat Sticker Whatsapp*
*#2 Membuat Sticker Video*
*#3 Mengubah Watermark Sticker*
*#4 Meningkatkan Kualitas Gambar*
*#5 Mengunduh Foto/Video Dari Link*
*#6 Mengunduh Audio/Video Youtube*
*#7 Mengunduh Lagu/Musik*
*#8 Bertanya Kepada Bot*
*#9 Mencari Berita*
*#10 Mengubah Gambar Menjadi Link*
*#11 Mengetahui Jarak Kota*
*#12 Menghapus Pesan Bot*

🎁 *Untuk Menampilkan Panduan Ketik Sesuai Nomor, Contoh : NO1* 

⚠️ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case '#1': case 'no1': {
m.reply(`*Membuat Sticker Whatsapp*

🎁 *Untuk Membuat Sticker Whatsapp Kirim Foto/Video Dengan Caption S, Stiker, Sticker*
🎁 *Untuk Membuat Sticker Dengan Caption Gunakan Smeme : Contoh Smeme Lenwy*`)
}
break

case 'no2': {
m.reply(`*Membuat Sticker Video*

🎁 *Untuk Membuat Sticker Video Kirim Video Minimal 9 Detik Dengan CAption S*`)
}
break

case 'no3': {
m.reply(`*Mengubah Watermark Sticker*

🎁 *Untuk Mengubah Watermark Sticker Balas Sticker Dengan Mengetik : Wm (Teks)*
🎁 *Contoh : Wm ${global.ownername}*`)
}
break

case 'no4': {
m.reply(`*Meningkatkan Kualitas Gambar*

🎁 *Untuk Meningkatkan Kualitas Gambar Kirim Gambar/Foto Dengan Caption Hd, Remini*`)
}
break

case 'no5': {
m.reply(`*Mengunduh Foto/Video Dari Link*

🎁 *Untuk Mengunduh Foto/Video Dari Link Ketik : Tiktok (Link Tiktok)*
🎁 *Lebih Lengkapnya Ketik Downmenu*

⚠️ *Pastikan Link Sesuai Dengan Perintah*`)
}
break

case 'no6': {
m.reply(`*Mengambil Audio/Video Dari Youtube*

🎁 *Untuk mengambil Audio/Video Dari Youtube Ketik : Ytmp4 (Link)*
🎁 *Ytmp3 Untuk Audio | Ytmp4 Untuk Video*

⚠️ *Audio/Video Lebih Dari 5 Menit Kemungkinan Gagal Dikirim*`)
}
break

case 'no7': {
m.reply(`*Mengunduh Lagu/Musik*

🎁 *Untuk Mengunduh Lagu ketik : Play (Nama Lagu)*
🎁 *Contoh : Play Boa - Duvet*`)
}
break

case 'no8': {
m.reply(`*Bertanya Kepada Bot*

🎁 *Untuk Bertanya kepada Bot Ketik : Ask (Pertanyaan)*
🎁 *Contoh : Ask Sejarah Indonesia*`)
}
break

case 'no9': {
m.reply(`*Mencari Berita*

🎁 *Untuk Mencari Berita Ketik : Inews*
🎁 *Lebih Lengkapnya Ketik Beritamenu*`)
}
break

case 'no10': {
m.reply(`*Mengubah Gambar Menjadi Link*

🎁 *Untuk Mengubah Gambar Menjadi Link Kirim Gmbar Dengan caption Tourl*`)
}
break

case 'no11': {
m.reply(`*Mengetahui Jarak Kota*

🎁 *Untuk Mengetahui Jarak Kota ketik : Jarak (Nama Kota)|(Nama Kota)*
🎁 *Contoh : Jarak Bandung|Jakarta*`)
}
break

case 'no12': {
m.reply(`*Menghapus Pesan Bot*

🎁 *Untuk Menghapus Pesan Bot, Balas Pesan Bot Dengan Mengetik : Del*`)
}
break

case 'translate': {
if (!text) return m.reply(`Masukkan Teks Yang Ingin Di Translate`)
let hasil = await (await fetch(`https://${global.api.lolhuman.domain}/api/translate/auto/id?apikey=${global.api.lolhuman.apikey}&text=${text}`)).json()
let resu = `Mentranslate teks dari Bahasa ${hasil.result.from} ke Bahasa ${hasil.result.to}

Arti dari '${hasil.result.original}' adalah

> ${hasil.result.translated}`
m.reply(resu)
}
break

case 'kodebahasa': {
m.reply(`📦 *Kode Bahasa*

 *⨠ Af: Afrikaans* 
 *⨠ Sq: Albanian*
 *⨠ Ar: Arabic*
 *⨠ Hy: Armenian*
 *⨠ Ca: Catalan* 
 *⨠ Zh: Chinese*
 *⨠ Zh-Cn: Chinese (Mandarin/China)*
 *⨠ Zh-Tw: Chinese (Mandarin/Taiwan)*
 *⨠ Zh-Yue: Chinese (Cantonese)*
 *⨠ Hr: Croatian*
 *⨠ Cs: Czech*
 *⨠ Da: Danish*
 *⨠ Nl: Dutch*
 *⨠ En: English*    
 *⨠ En-Au: English (Australia)*
 *⨠ En-Uk: English (United Kingdom)*
 *⨠ en-Us: English (United States)* 
 *⨠ Eo: Esperanto* 
 *⨠ Fi: Finnish* 
 *⨠ Fr: French*
 *⨠ De: German*
 *⨠ El: Greek* 
 *⨠ Ht: Haitian Creole* 
 *⨠ Hi: Hindi* 
 *⨠ Hu: Hungarian* 
 *⨠ Ss: Icelandic* 
 *⨠ Id: Indonesian* 
 *⨠ It: Italian*
 *⨠ Ja: Japanese*
 *⨠ Ko: Korean*
 *⨠ La: Latin*
 *⨠ Lv: Latvian*
 *⨠ Mk: Macedonian*
 *⨠ No: Norwegian*
 *⨠ Pl: Polish*
 *⨠ Pt: Portuguese*
 *⨠ Pt-Br: Portuguese (Brazil)*
 *⨠ Ro: Romanian*
 *⨠ Ru: Russian*
 *⨠ Sr: Serbian*
 *⨠ Sk: Slovak*
 *⨠ Es: Spanish* 
 *⨠ Es-Es: Spanish (Spain)*
 *⨠ Es-Us: Spanish (United States)*
 *⨠ Sw: Swahili*
 *⨠ Sv: Swedish*
 *⨠ Ta: Tamil*
 *⨠ Th: Thai*
 *⨠ Tr: Turkish*
 *⨠ Vi: Vietnamese* 
 *⨠ Cy: Welsh*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

/* ------------------------------------------------------------------------------------------------------------------------------------------- */

case 'sc':
case 'script': {
if (text) return
let buy = `*Script?*
📑 *No Enc, Pairing Code*
🎁 *Beli? :* wa.me/${global.developer}
🤖 *Sewa? :* wa.me/${global.owner}`
m.reply(buy)
}
break

case 'hai': {
m.reply('*Hallo Juga*')
}
break

case 'setsimbol': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  let teks_simbol = text || ''
  global.datagc[m.chat].text_list_simbol = teks_simbol;
  m.reply(mess.success)
  fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}
break

case 'list':
case 'listmenu': {
  if (args[0] === 'edit') {
    if (!isAdmins) return m.reply(mess.admin)
    const teks = args.slice(1).join(' ').trim()
    global.datagc[m.chat].text_list = teks;
    m.reply(teks ? `Teks ${command} berhasil diubah` : `Teks ${command} berhasil direset ke bawaan`)
    fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2));
    return await m.reply(`*Pengaturan fitur ${command}*

Ketik:
- *${prefix + command}* untuk menampilkan list
- *${prefix + command} edit teksnya* untuk mengubah template
- *${prefix}setsimbol teksnya* untuk mengubah template simbol

*Placeholder yang bisa digunakan:*

- {GROUPNAME} = nama grup
- {TAG} = tag admin/pengirim
- {JAM} = jam saat ini
- {MENIT} = menit saat ini
- {DETIK} = detik saat ini
- {HARI} = nama hari saat ini
- {TANGGAL} = tanggal saat ini
- {BULAN} = angka bulan saat ini
- {TAHUN} = tahun saat ini
- {NAMABULAN} = nama bulan saat ini
- {SIMBOL} = menampilkan seluruh daftar list yang tersedia

*Contoh:*
${prefix + command} edit
╭─〔 📋 DAFTAR MENU 〕
│
│ Halo {TAG}
│
│ 📅 {HARI}, {TANGGAL} {NAMABULAN} {TAHUN}
│ 🕒 {JAM}:{MENIT}:{DETIK} WIB
│ 🏠 {GROUPNAME}
│
│ {SIMBOL}
╰──────────────`)
  }
  if (text) return
  if (db_respon_list.length === 0) return m.reply(`*Belum Ada List Yang Ditambahkan*`);
  if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`*Belum Ada List Yang Terdaftar Di Grup Ini*`);

  const groupID = m.chat;
  const usertag = `@${m.sender.split("@")[0]}`;

  if (!global.datagc[groupID]) {
    global.datagc[groupID] = {
      text_list: '',
      text_list_simbol: ''
    };
    fs.writeFileSync('./db/databaseGroup.json', JSON.stringify(global.datagc, null, 2));
  }

  const textListTemplate = global.datagc[groupID].text_list || `Halo {TAG}
  selamat datang di *{GROUPNAME}*

── .✦ Hari : {HARI}
── .✦ Tanggal : {TANGGAL}/{BULAN}/{TAHUN}
── .✦ Jam : {JAM}:{MENIT}:{DETIK}

ㅤㅤㅤ⤿─ ⓘ 𝗰ׅ𝝰ׄ𝘁𝝰ׄ𝗹ׅ𝝾︩ׄ𝗴ׄ{SIMBOL}
ㅤㅤㅤ──┈─┈──┈─┈ 𓈀 ──┈─┈──┈─┈`

  const simbol = global.datagc[groupID].text_list_simbol || 'ㅤㅤㅤㅤˑ𓂃𔓕';

  const replaceTags = (text) => {
    return text
      .replace(/{TAG}/gi, usertag)
      .replace(/{GROUPNAME}/gi, groupName)
      .replace(/{JAM}/gi, jamnya)
      .replace(/{MENIT}/gi, menitnya)
      .replace(/{DETIK}/gi, detiknya)
      .replace(/{HARI}/gi, harinya)
      .replace(/{TANGGAL}/gi, tanggalnya)
      .replace(/{BULAN}/gi, bulannya)
      .replace(/{NAMABULAN}/gi, namabulannya)
      .replace(/{TAHUN}/gi, tahunnya);
  };

  try {
    const sortedList = db_respon_list.filter(i => i.id === groupID)
      .sort((a, b) => a.key.localeCompare(b.key));

    if (sortedList.length === 0) return m.reply(`*Tidak ada list yang tersedia di grup ini*`);

    const listBody = sortedList.map(i => `\n${simbol} *${i.key.toUpperCase()}*`).join('');

    const finalText = replaceTags(textListTemplate).replace('{SIMBOL}', listBody);

    lenwy.sendMessage(m.chat, { text: finalText, mentions: [m.sender] }, { quoted: m });

    await sleep(200);


    let buttons = sortedList.map(i => ({
      title: i.key,
      id: i.key
    }));

  let sections = [{
      title: "Daftar List",
      description: "", // opsional
      rows: buttons
  }];

    let buttonParamsJson = {
      title: "[ LIST ]",
      sections
    }

    let botakk = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: "Ketik Nama Barang Diatas Atau Pilih Barang Menggunakan Tombol Ini"
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: '',
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: '',
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [{
                name: "single_select",
                buttonParamsJson: JSON.stringify(buttonParamsJson)
              }]
            }),
          }),
        },
      },
    }, { quoted: m })

    lenwy.relayMessage(m.key.remoteJid, botakk.message, {
    additionalNodes: [
      {
        tag: "biz",
        attrs: {},
        content: [
          {
            tag: "interactive",
            attrs: {
              type: "native_flow",
              v: "1",
            },
            content: [
              {
                tag: "native_flow",
                attrs: {
                  name: "quick_reply",
                },
              },
            ],
          },
        ],
      },
    ],
  })
  } catch (err) {
    console.error(err);
    m.reply(`❌ *Terjadi Kesalahan Saat Menampilkan List*`);
  }
}
break

case 'addlist': {
if (!isAdmins) return m.reply(mess.admin)
if (!m.isGroup) return m.reply(mess.group)
let args = q.split("@")
let args1 = args[0].toLowerCase().trim()
let args2 = args[1]
if (!q.includes('@') && args1 == args2) return m.reply(`*Cara Pengunaan : ${prefix+command} Key@Respon*\n🎁 *Contoh : addlist wdp@harga wdp _-*`)
if (!args1 || !args2) return m.reply(`Key Dan Respon Harus Diisi!!`)
if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`⚠️ *Nama Key ${args1} Sudah Ada Dalam Group Ini*`)
if (/image/.test(mime)) {
media = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uploaderLebih(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
m.reply(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
m.reply(`📑 *Sukses Menambahkan Key Dengan Kode : ${args1}*`)
}
}
break

case 'dellist': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (db_respon_list.length === 0) return m.reply(`*Belum Ada List Yang Ditambahkan*`)
if (!text) return m.reply(`*Ketik Nama Item Yang Ingin Dihapus*`)
  let sortedList = db_respon_list.filter(i => i.id === m.chat).sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
    return 0;
})
    let buttons = sortedList.map(i => ({
        title: `${prefix}dellist ${i.key}`,
        id: `${prefix}dellist ${i.key}` // Mengubah ID di sini
    }))
let buttonParamsJson = JSON.stringify({
    title: "[ LIST ]",
    sections: [{
        title: "Daftar List",
        rows: buttons
    }]
})
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: {
                body: {
                    text: "Ketik Nama Item Nya Atau Coba Klik List Dibawah Ini"
                },
                footer: {
                    text: ""
                },
                header: {
                    title: "",
                    subtitle: "",
                    hasMediaAttachment: false
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "single_select",
                        buttonParamsJson: buttonParamsJson
                    }/*,{
                       name: "quick_reply",
                        buttonParamsJson: `{"display_text":"Payment","id":"pay a"}`          						
                    }*/]
                },
                contextInfo: {
                    mentionedJid: [m.sender],
                }
            }
        }
    }
}, { quoted: m })
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) {
await lenwy.sendMessage(m.chat, {
text: "Periksa Lagi List Nya Dan Ketikkan Dengan Benar Atau Gunakan Tombol Dibawah Jika Tidak Muncul.\n\nSilahkan Hubungi Owner Jika Anda Mengalami Kesulitan Dalam Penghapusan List."
}, {
quoted: m
})
    lenwy.relayMessage(m.key.remoteJid, msg.message, {
    additionalNodes: [
      {
        tag: "biz",
        attrs: {},
        content: [
          {
            tag: "interactive",
            attrs: {
              type: "native_flow",
              v: "1",
            },
            content: [
              {
                tag: "native_flow",
                attrs: {
                  name: "quick_reply",
                },
              },
            ],
          },
        ],
      },
    ],
  })
}
if (isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) {
delResponList(m.chat, q.toLowerCase(), db_respon_list)
m.reply(`⚠️ *Sukses Menghapus Item Dengan kode : ${q}*`)
}
}
break

case 'updatenamelist': {
 if (!m.isGroup) return m.reply(mess.group)
 if (!isAdmins) return m.reply(mess.admin)
 let args = q.split("@")
 let oldKey = args[0].toLowerCase().trim()
 let newKey = args[1].toLowerCase().trim()
 if (!oldKey || !newKey) return m.reply(`*Cara Penggunaan : Updatenamelist OldKey@NewKey*\n🎁 *Contoh : Updatenamelist wdp@antri wdp*`)
 if (updateKey(m.chat, oldKey, newKey, db_respon_list)) {
 m.reply(`📑 *Sukses Memperbarui Kode Dari ${oldKey} Menjadi ${newKey}*`)
 } else {
 m.reply(`⚠️ *Nama Item ${oldKey} Belum Terdaftar Dalam Group Ini*`)
 }
}
break

case 'updatelist': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let args = q.split("@")
let args1 = args[0].toLowerCase()
let args2 = args[1]
if (!q.includes("@")) return m.reply(`*Cara Pengunaan : Updatelist Item@Respon*\n🎁 *Contoh : Updatelist wdp@harga wdp eaa apala*`)
if (!isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`⚠️ *Nama Item ${args1} Belum Terdaftar Dalam Group Ini*`)
if (/image/.test(mime)) {
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await uploaderLebih(media)
updateResponList(m.chat, args1, args2, true, `${mem}`, db_respon_list)
m.reply(`📑 *Sukses Memperbarui Item Dengan Kode : ${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`📑 *Sukses Memperbarui Item Dengan Kode : ${args1}*`)
}
}
break

case 'sendlist': {
  let oldId
  let newId
  if (!m.isGroup) {
    if (!isCreator) return
    if (!text) return m.reply(`*Cara Penggunaan : ${prefix + command} linkGroup1|linkGroup2*`)
    if (!budy.includes('|')) return m.reply(`*Cara Penggunaan : ${prefix + command} linkGroup1|linkGroup2*`)
    let links = text.split('|')
    oldId = await getGroupIdFromLink(links[0].trim(), lenwy)
    newId = await getGroupIdFromLink(links[1].trim(), lenwy)
  } else {
    if (!isAdmins) return m.reply(mess.admin)
    if (!text) return m.reply(`*Cara Penggunaan : ${prefix + command} linkGroup2*`)
    oldId = m.chat
    newId = await getGroupIdFromLink(text, lenwy)
  }
  let datagrup = await lenwy.groupMetadata(newId)
  if (updateId(oldId, newId, db_respon_list)) {
      m.reply(`📑 *Sukses mengirimkan list ke Group ${datagrup.subject}*`);
  } else {
      m.reply(`⚠️ *Gagal mengirimkan list ke Group ${datagrup.subject}*`);
  }
}
break

case 'resetlist': {
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.isGroup) return m.reply(mess.group)
  if (resetList(m.chat, db_respon_list)) {
      m.reply(`📑 *Sukses mereset list*`);
  } else {
      m.reply(`⚠️ *Gagal mereset list*`);
  }
}
break

case 'dellistsampah': {
  if (!isCreator) return m.reply(mess.owner)
  LenwyLD()
  m.reply('🧹 Sedang memeriksa daftar grup dan membersihkan list sampah... (harap tunggu)')

  let getGroups = await lenwy.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).map(([_, v]) => v)

  let groupIDs = []

  for (let i = 0; i < groups.length; i++) {
      try {
          let metadata = await lenwy.groupMetadata(groups[i].id)
          groupIDs.push(metadata.id)
          console.log(`✅ Dapat metadata grup: ${metadata.subject} (${metadata.id})`)
      } catch (e) {
          console.log(`⚠️ Gagal fetch metadata grup ke-${i + 1}:`, e.message)
      }

      await sleep(5000)
  }

  let deletedCount = deleteListSampah(db_respon_list, groupIDs)

  if (deletedCount > 0) {
      m.reply(`🧾 *Selesai membersihkan list sampah!*\n🗑️ *Total dihapus:* ${deletedCount} data`)
  } else {
      m.reply(`✨ *Tidak ada list sampah yang ditemukan!*`)
  }
}
break

case 'kalkulator':
case 'calculator': {
    if (!q) return m.reply(`*Contoh:*
> kalkulator 12/2
> kalkulator 12*2
> kalkulator 12+2
> kalkulator 12-2`)

    const operator = q.match(/[+\-*/]/)?.[0]
    if (!operator) return m.reply('*Operator tidak valid!*')

    const [a, b] = q.split(operator).map(x => Number(x.trim()))
    if (isNaN(a) || isNaN(b)) return m.reply('*Input harus berupa angka!*')
    if (operator === '/' && b === 0) return m.reply('*Pembagian dengan nol tidak diperbolehkan!*')

    const hasil = {
        '+': a + b,
        '-': a - b,
        '*': a * b,
        '/': a / b
    }[operator]

    m.reply(`🎁 *Hasil:* ${hasil}`)
}
break

case 'saran': {
let lenwy_txt = args[0]
if (!text) return m.reply('*Mana Teksnya?*')
if (text.length > 30) return m.reply(`*Maksimal 30 Karakter*`)    
m.reply('*Saran Berhasil Terkirim, Terimakasih*')
lenwy.sendMessage(`${global.owner}@s.whatsapp.net`, { text: `📦 *Saran / Masukan*\n🎁 *Dari :* @${sender.split('@')[0]}\n📃 *Pesan :* ${q}\n\n 📣 *Saran Ini Dikirim Oleh ${botname}*`, mentions: [sender]}, { quoted: m })
}
break

case 'reportbug': {
let lenwy_txt = args[0]
if (!text) return m.reply('*Mana Teksnya?*')
if (text.length > 15) return m.reply(`*Maksimal 15 Karakter*`)    
m.reply('⚠️ *Report Berhasil Terkirim, Terimakasih*')
lenwy.sendMessage(`${global.owner}@s.whatsapp.net`, { text: `⚠️ *Report Bug*\n🎁 *Dari :* @${sender.split('@')[0]}\n📃 *Pesan :* ${q}\n\n 📣 *Laporan Ini Dikirim Oleh ${botname}*`, mentions: [sender]}, { quoted: m })
}
break

case 'bot': {
if (text) return
m.reply(`Iya Kak, ${pushname}`)
}
break

case 'malas': {
if (text) return 
const t3xt = require(`./storage/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'assalamualaikum': {
m.reply(`*Waalaikumussalam*`)
}
break

case 'hi': {
m.reply(`*Halo Juga*`)
}
break

case 'bokep': {
m.reply(`*Haduhh Otak Mesum*`)
}
break

case 'panel': {
if (text) return
m.reply(`Panel? Kalo minat chat no berikut: wa.me/6285261255548`)
}
break

case 'huft': case 'hmmph': {
const t3xt = require(`./storage/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break


case 'rate': {
if (!q) return m.reply(`*Contoh: ${prefix + command} Penampilan gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
m.reply(`*Rate : ${q}*\n🎁 *Jawaban : ${te}%*`)
}
break

case 'apakah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw lagi marah*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`*Pertanyaan : Apakah ${q}*\n🎁 *Jawaban : ${kah}*`)
}
break

case 'kapankah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw masuk rsj*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
m.reply(`*Pertanyaan : Kapankah ${q}*\n🎁 *Jawaban : ${kapankah}*`)
}
break

case 'bisakah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw hamil*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Awokawok', 'TENTU KAMU PASTI BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
m.reply(`*Pertanyaan : Bisakah ${q}*\n🎁 *Jawaban : ${ga}*`)
}
break

case 'bagaimanakah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw kuyang*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const gimana = ['Ya Begitulah', 'Gak Normal', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'Kayaknya Lanjut Part 2', 'Kepo Kamu', 'Gimana Aja']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
m.reply(`*Pertanyaan : Bagaimanakah ${q}*\n🎁 *Jawaban : ${ya}*`)
}
break

case 'gantengcek': case 'cekganteng': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const gan = ['Normal','Ganteng Njir','Ganteng Amat Bang','Jaga Penampilan Ya','Kurang :c','Lumayan','Boleh Juga']
const teng = gan[Math.floor(Math.random() * gan.length)]
m.reply(`*Nama* ${q}\n🎁 *Jawaban : ${teng}*`)
}
break

case 'cantikcek': case 'cekcantik': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const can = ['Normal','Cantik Njir','Cantik Amat Sih','Jaga Penampilan Ya','Kurang :c','Lumayan','Boleh Juga']
const tik = can[Math.floor(Math.random() * can.length)]
m.reply(`*Nama* ${q}\n🎁 *Jawaban : ${tik}*`)
}
break

case 'createqr': {
if (!text) return m.reply(`*Contoh : Createqr ${botname}*`)
LenwyLD()
await sleep(200)
const qrcode = require('qrcode')
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
lenwy.sendMessage(from, { image: data, caption: mess.success }, { quoted: m })
}
break

case 'detectqr': {
LenwyLD()
await sleep(200)
try {
mee = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uploader60Minute(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json()
  LenwyLD()
  await sleep(200) 
m.reply(util.format(data[0]))
} catch (err) {
m.reply(`*Mana Qrnya?*`)
}
}
break

case 'cekidgc': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(200)
let getGroups = await lenwy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `*List Grup Yang Dimasuki ${botname}*\n🎁 *Total Group : ${anu.length} Group*\n\n`

for (let x of anu) {
  await sleep(5000)
  let metadata2 = await lenwy.groupMetadata(x)
  try {
    let response2 = await lenwy.groupInviteCode(metadata2.id)
    linkgc = `https://chat.whatsapp.com/${response2}`
  } catch {
    linkgc = '-'
  }
  teks += `*Nama Group : ${metadata2.subject}*
🎁 *ID Group : ${metadata2.id}*
📦 *Total Member Group : ${metadata2.participants.length}*
📎 *Link Group : ${linkgc}*
────────────────────────\n\n`
  }
  m.reply(teks + `*Cara Penggunaan : Pushkontak ID Group|Teks*\n🎁 *Contoh : Pushkontak ID Group|Save ${botname}*`)
}
break

case 'addallprem': {
  if (!isCreator) return m.reply(mess.owner)
  if (!m.isGroup) return m.reply(`*Perintah Ini Hanya Dapat Digunakan Di Dalam Grup.*`)

  let groupMetadata;
  try {
      groupMetadata = await lenwy.groupMetadata(from)
  } catch (e) {
      console.error('Error fetching group metadata:', e)
      return m.reply('*Gagal Mengambil Metadata Grup.*')
  }

  let participants;
  try {
      participants = groupMetadata.participants;
  } catch (e) {
      console.error('Error fetching group participants:', e)
      return m.reply('*Gagal Mengambil Daftar Peserta Grup.*')
  }

  if (!participants || participants.length === 0) return m.reply('Tidak ada peserta dalam grup.')

  let owner;
  try {
      owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
  } catch (err) {
      console.error('Error reading premium.json:', err)
      return m.reply('*Gagal Memuat Daftar Premium.*')
  }

  let addedNumbers = []
  let existingNumbers = []

  for (let participant of participants) {
      let number = participant.id.replace('@s.whatsapp.net', '').replace(/[^0-9]/g, '')
      if (number.length > 0 && !owner.includes(number)) {
          owner.push(number)
          addedNumbers.push(number)
      } else if (owner.includes(number)) {
          existingNumbers.push(number)
      }
  }

  try {
      fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))
  } catch (err) {
      console.error('Error writing premium.json:', err)
      return m.reply('*Gagal Menyimpan Daftar Premium.*')
  }

  if (addedNumbers.length > 0) {
      m.reply(`*Nomor Berikut Telah Ditambahkan Ke Daftar Premium:*\n\n${addedNumbers.join('\n')}`)
  }
  if (existingNumbers.length > 0) {
      m.reply(`*Nomor Berikut Sudah Ada Di Daftar Premium:*\n\n${existingNumbers.join('\n')}`)
  }
}
break

case 'delallprem': {
    if (!isCreator) return m.reply(mess.owner)
    if (!m.isGroup) return m.reply(`Perintah ini hanya dapat digunakan di dalam grup.`)

    let groupMetadata;
    try {
        groupMetadata = await lenwy.groupMetadata(from)
    } catch (e) {
        console.error('Error fetching group metadata:', e)
      return m.reply('*Gagal Mengambil Metadata Grup.*')
    }

    let participants;
    try {
        participants = groupMetadata.participants;
    } catch (e) {
        console.error('Error fetching group participants:', e)
      return m.reply('*Gagal Mengambil Daftar Peserta Grup.*')
    }

    if (!participants || participants.length === 0) return m.reply('Tidak ada peserta dalam grup.')

    let owner;
    try {
        owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
    } catch (err) {
        console.error('Error reading premium.json:', err)
      return m.reply('*Gagal Memuat Daftar Premium.*')
    }

    let removedNumbers = []
    let notFoundNumbers = []

    for (let participant of participants) {
        let number = participant.id.replace('@s.whatsapp.net', '').replace(/[^0-9]/g, '')
        if (number.length > 0) {
            let index = owner.indexOf(number)
            if (index !== -1) {
                owner.splice(index, 1)
                removedNumbers.push(number)
            } else {
                notFoundNumbers.push(number)
            }
        }
    }

    try {
        fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))
    } catch (err) {
        console.error('Error writing premium.json:', err)
      return m.reply('*Gagal Menyimpan Daftar Premium.*')
    }

    if (removedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Telah Dihapus Dari Daftar Premium.*\n\n${removedNumbers.join('\n')}`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`*Nomor Berikut Tidak Ditemukan Di Daftar Premium:*\n\n${notFoundNumbers.join('\n')}`)
    }
}
break

case 'addprem': {
  if (!isCreator) return m.reply(mess.owner)
  if (!args[0]) return m.reply('*Mana Nomornya?*')

  let numbers = text
    .split('|')[0]
    .split(/\s+/)
    .map(number => number.replace(/[^0-9]/g, ''))
    .filter(Boolean)

  if (numbers.length === 0) return m.reply('*Tidak Ada Nomor Yang Diberikan.*')

  let invalidNumbers = []
  let validNumbers = []

  for (let number of numbers) {
    let ceknye = await lenwy.onWhatsApp(number + '@s.whatsapp.net')
    if (ceknye.length === 0) {
      invalidNumbers.push(number)
    } else {
      validNumbers.push(number)
    }
  }

  if (validNumbers.length > 0) {
    let owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
    owner = [...new Set([...owner, ...validNumbers])]
    fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))

    m.reply(`Nomor ${validNumbers.join(', ')} ditambahkan ke daftar premium.`)
  }

  if (invalidNumbers.length > 0) {
    m.reply(`Nomor berikut tidak valid: ${invalidNumbers.join(', ')}`)
  }
}
break

case 'delprem': {
    if (!isCreator) return m.reply(mess.owner)
    if (!args[0]) return m.reply(`*Mana Nomornya?*`)

    let numbers = text.split('|')[0].split(/\s+/).map(number => number.replace(/[^0-9]/g, ''))

    if (numbers.length === 0) return m.reply(`*Tidak Ada Nomor Yang Diberikan.*`)

    let removedNumbers = []
    let notFoundNumbers = []

    let owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))

    for (let number of numbers) {
        if (number.length === 0) continue;

        let index = owner.indexOf(number)
        if (index !== -1) {
            owner.splice(index, 1)
            removedNumbers.push(number)
        } else {
            notFoundNumbers.push(number)
        }
    }

    fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))

    if (removedNumbers.length > 0) {
        m.reply(`Nomor ${removedNumbers.join(', ')} telah dihapus dari daftar premium.`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`Nomor berikut tidak ditemukan dalam daftar premium: ${notFoundNumbers.join(', ')}`)
    }
}
break

case 'listprem': {
    if (!isCreator) return m.reply(mess.owner)

    let owner;
    try {
        owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
    } catch (err) {
        console.error('Error reading premium.json:', err)
        return m.reply('*Gagal Memuat Daftar Premium.*')
    }

    if (owner.length === 0) return m.reply('*Daftar Premium Masih Kosong.*')

    let teksooo = 'List Premium\n';
    for (let i of owner) {
        teksooo += `✉️ ${i}\n`
    }
    teksooo += `\nTotal: ${owner.length}`;

    lenwy.sendMessage(from, { text: teksooo.trim() }, { quoted: m })
}
break

case 'banall': {
    if (!isCreator) return m.reply(mess.owner)
    if (!m.isGroup) return m.reply('*Perintah ini hanya bisa digunakan dalam grup.*')

    let groupMetadata;
    try {
        groupMetadata = await lenwy.groupMetadata(m.chat)
    } catch (err) {
        console.error('Error fetching group metadata:', err)
        return m.reply('*Gagal mengambil metadata grup.*')
    }

    let participants = groupMetadata.participants || []
    
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    let bannedNumbers = []
    let alreadyBannedNumbers = []

    for (let participant of participants) {
        let orgnye = participant.id;
        if (banned.includes(orgnye)) {
            alreadyBannedNumbers.push(orgnye)
        } else {
            banned.push(orgnye)
            bannedNumbers.push(orgnye)
        }
    }

    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal menyimpan daftar banned.*')
    }

    if (bannedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Telah Dibanned:*\n\n${bannedNumbers.join('\n')}`)
    }
    if (alreadyBannedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Sudah Ada Dalam Daftar Banned:*\n\n${alreadyBannedNumbers.join('\n')}`)
    }
}
break

case 'delbanall': {
    if (!isCreator) return m.reply(mess.owner)
    if (!m.isGroup) return m.reply('*Perintah ini hanya bisa digunakan dalam grup.*')

    let groupMetadata;
    try {
        groupMetadata = await lenwy.groupMetadata(m.chat)
    } catch (err) {
        console.error('Error fetching group metadata:', err)
        return m.reply('*Gagal mengambil metadata grup.*')
    }

    let participants = groupMetadata.participants || []
    
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    let removedNumbers = []
    let notFoundNumbers = []

    for (let participant of participants) {
        let orgnye = participant.id;
        const index = banned.indexOf(orgnye)
        if (index !== -1) {
            banned.splice(index, 1) // Menghapus nomor dari daftar banned
            removedNumbers.push(orgnye)
        } else {
            notFoundNumbers.push(orgnye) // Nomor tidak ditemukan dalam daftar banned
        }
    }

    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal menyimpan daftar banned.*')
    }

    if (removedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Telah Dihapus dari Daftar Banned:*\n\n${removedNumbers.join('\n')}`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`*Nomor Berikut Tidak Ditemukan dalam Daftar Banned:*\n\n${notFoundNumbers.join('\n')}`)
    }
}
break

case 'ban': {
    if (!isCreator) return m.reply(mess.owner)
    let mentionedJids = m.mentionedJidList || []
    
    if (mentionedJids.length === 0) {
        if (!args[0]) return m.reply(`*Bukan Gitu Loh*\n\n> *Contoh : ${command} @tag1 @tag2 @tag3*`)
        mentionedJids = args.map(number => number.replace(/[^0-9]/g, '') + "@s.whatsapp.net")
    }
    
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    let bannedNumbers = []
    let alreadyBannedNumbers = []

    for (let orgnye of mentionedJids) {
        if (banned.includes(orgnye)) {
            alreadyBannedNumbers.push(orgnye)
        } else {
            banned.push(orgnye)
            bannedNumbers.push(orgnye)
        }
    }

    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal Menyimpan Daftar Banned.*')
    }

    if (bannedNumbers.length > 0) {
        m.reply(`*Nomor Telah Dibanned:*\n\n${bannedNumbers.join('\n')}`)
    }
    if (alreadyBannedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Sudah Ada Dalam Daftar Banned:*\n\n${alreadyBannedNumbers.join('\n')}`)
    }
}
break

case 'delban': {
    if (!isCreator) return m.reply(mess.owner)

    let mentionedJids = m.mentionedJidList || []
    
    if (mentionedJids.length === 0) {
        if (!args[0]) return m.reply(`*Bukan Gitu Loh*\n\n> *Contoh : ${command} @tag1 @tag2 @tag3*`)
        mentionedJids = args.map(number => number.replace(/[^0-9]/g, '') + "@s.whatsapp.net")
    }
    
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    let removedNumbers = []
    let notFoundNumbers = []

    for (let orgnye of mentionedJids) {
        const index = banned.indexOf(orgnye)
        if (index !== -1) {
            banned.splice(index, 1) // Menghapus nomor dari daftar banned
            removedNumbers.push(orgnye)
        } else {
            notFoundNumbers.push(orgnye) // Nomor tidak ditemukan dalam daftar banned
        }
    }

    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal Menyimpan Daftar Banned.*')
    }

    if (removedNumbers.length > 0) {
        m.reply(`*Nomor Telah Dihapus dari Daftar Banned:*\n\n${removedNumbers.join('\n')}`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`*Nomor Berikut Tidak Ditemukan dalam Daftar Banned:*\n\n${notFoundNumbers.join('\n')}`)
    }
}
break

case 'listban': {
    if (!isCreator) return m.reply(mess.owner)

    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        return m.reply('*Gagal Membaca Daftar Banned.*')
    }

    let response = '*Daftar Banned:*\n\n';
    if (banned.length === 0) {
        response += '*Daftar Banned Kosong.*';
    } else {
        response += banned.map((number, index) => `${index + 1}. ${number}`).join('\n')
    }

    m.reply(response)
}
break

case 'owner':
case 'creator': 
case 'developer': {
  if (text) return
  await lenwy.sendContact(m.chat, author.map( i => i.split("@")[0]), m.quoted ? m.quoted.fakeObj : m)
}
break

case 'hdvid':
case 'hdvidio':
case 'hdvideo': {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? lenwy.user.jid : m.sender;
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';

  if (!mime) return m.reply(`Videonya mana?`)
  if (!/video/.test(mime)) {
    return m.reply(`Kirim/kutip video dengan caption ${prefix + command}`)
  }

  LenwyLD()
  await sleep(200)
  let media = await q.download()
let video = Math.floor(Math.random() * 100) + 1;

  const inputFilePath = `./input${video}.mp4`;
  fs.writeFileSync(inputFilePath, media)

  const outputFilePath = `./output${video}.mp4`;
  const dir = './';
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir)
  }

  const ffmpegCommand = `ffmpeg -i ${inputFilePath} -vf "hqdn3d=1.5:1.5:6:6,unsharp=3:3:0.6,eq=brightness=0.05:contrast=1.1:saturation=1.05" -vcodec libx264 -preset slower -crf 22 -acodec copy -movflags +faststart ${outputFilePath}`;

  exec(ffmpegCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)
    lenwy.sendMessage(m.chat, { caption: `_Video berhasil ditingkatkan kualitasnya_`, video: { url: outputFilePath } }, { quoted: m })
    fs.unlinkSync(inputFilePath)
  })
}
break

case 'hd':
case 'hdr':
case 'remini': {
 if (!quoted) return m.reply(`Fotonya Mana?`)
 if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
 await LenwyLD()
 try {
 let media = await lenwy.downloadAndSaveMediaMessage(quoted)
 let anu = await uploader60Minute(media)
 let result = (util.format(anu))
 console.log(anu)
 await lenwy.sendMessage(m.chat, { image: { url: `https://api.nexray.eu.cc/tools/v1/enhancer?url=${result}` }, caption: 'SUCCESS ✅' }, { quoted: m })
 } catch (e) {
 console.error(e);
 return m.reply('Error, Coba Pakai hd2')
 }
}
break

case 'hd2':
case 'hdr2':
case 'remini2': {
if (!quoted) return m.reply('Fotonya Mana?')
if (!/image/.test(mime)) return m.reply('Fotonya Mana?')
LenwyLD()
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = util.format(anu)
try {
 await lenwy.sendMessage(m.chat, { image: { url: `https://api.nexray.eu.cc/tools/upscale?url=${result}&resolusi=2` }, caption: 'Selesai' }, { quoted: m })
} catch {
 return m.reply('Error, Coba Pakai hd3')
}
}
break

case 'hd3':
case 'hdr3':
case 'remini3': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
LenwyLD()
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
try {
 await lenwy.sendMessage(m.chat,{ image:{ url: `https://api.nexray.eu.cc/tools/v1/upscale?url=${result}` }, caption:'Selesai' },{ quoted: m })
} catch (e) {
 return m.reply('Error, Coba Pakai hd4')
}
}
break

case 'hd4':
case 'hdr4':
case 'remini4': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
LenwyLD()
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
try {
  await lenwy.sendMessage(m.chat,{ image:{ url: `https://api.nexray.eu.cc/tools/v3/upscale?url=${result}` }, caption:'Selesai' },{ quoted: m })
} catch (e) {
  return m.reply('Error, Coba Pakai hd5')
}
}
break

case 'hd5':
case 'hdr5':
case 'remini5': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
LenwyLD()
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
try {
  const { data } = await axios.get(`https://api.vreden.my.id/api/v1/artificial/imglarger/enhance?url=${result}`, { headers: { 'User-Agent': 'Mozilla/5.0' } })
  console.log(data.result)
  await lenwy.sendMessage(m.chat,{ image:{ url: data.result.download }, caption:'Selesai' },{ quoted: m })
} catch (e) {
  return m.reply('Error')
}
}
break

case 'skinswap': {
  if (!quoted) return m.reply(`Fotonya Mana?`)
  if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)

  let color_Skin = ["black", "pink", "green", "blue", "purple", "red", "gold", "silver", "brown", "orange"]

  if (!color_Skin.includes(text.toLowerCase())) {
      return m.reply(`Warna *${text}* tidak tersedia!\nGunakan salah satu dari:\n${color_Skin.join(', ')}`)
  }

  LenwyLD()
  await sleep(200)
  let media = await lenwy.downloadAndSaveMediaMessage(quoted)
  let anu = await uploader60Minute(media)
  let result = (util.format(anu))
  try {
      const result2 = await (await fetch(`https://${global.api.maelyn.domain}/api/img2img/skinswap?url=${result}&style=${text.toLowerCase()}`, {
          headers: {
              'x-maelyn-auth': global.api.maelyn.apikey
          }
      })).json()
      await lenwy.sendMessage(m.chat, { image: { url: result2.result }, caption: 'Selesai' }, { quoted: m })
  } catch (e) {
      console.log(e)
      return m.reply('Error saat proses skinswap!')
  }
}
break

case 'ocr': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
try{
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
const proses = await (await fetch(`https://deoberon-api.vercel.app/tools/ocr?url=${result}`)).json()
let teks = proses.result
await lenwy.sendMessage(m.chat, { text: `Hasilnya: ${teks}` }, { quoted: m})
} catch (error) {
console.error(error)
m.reply('Error')
}
}
break

case 'removebg':
case 'nobg': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Mana Fotonya?`)
LenwyLD()
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
const proses = await (await fetch(`https://${global.api.ham.domain}/tools/removebg?apikey=${global.api.ham.apikey}&url=${result}`)).json()
console.log(proses)
await lenwy.sendMessage(m.chat, { image: { url: proses.result.url }, caption: '🎁 *Removebg Selesai*'}, { quoted: m })
}
break

  
case 'qc': {
    if (!q) return m.reply(`*Contoh :* Qc white Lenwy\n🎁 *Kode Warna:* Qckode`)
    if (q.length > 400) return m.reply('*Maksimal 400 Karakter*')

    const [color, ...msg] = q.split(' ')
    const message = msg.join(' ')
    if (!message) return m.reply('*Teks tidak boleh kosong!*')

    const colors = {
        pink: '#f68ac9',
        blue: '#6cace4',
        red: '#f44336',
        green: '#4caf50',
        yellow: '#ffeb3b',
        purple: '#9c27b0',
        darkblue: '#0d47a1',
        lightblue: '#03a9f4',
        ash: '#9e9e9e',
        orange: '#ff9800',
        black: '#000000',
        white: '#ffffff',
        teal: '#008080',
        lightpink: '#ffc0cb',
        chocolate: '#a52a2a',
        salmon: '#ffa07a',
        magenta: '#ff00ff',
        tan: '#d2b48c',
        wheat: '#f5deb3',
        deeppink: '#ff1493',
        fire: '#b22222',
        lenwyblue: '#00bfff',
        brightlenwyblue: '#1e90ff',
        hotpink: '#ff69b4',
        lightlenwyblue: '#87ceeb',
        seagreen: '#20b2aa',
        darkred: '#8b0000',
        orangered: '#ff4500',
        cyan: '#48d1cc',
        violet: '#ba55d3',
        mossgreen: '#00ff7f',
        darkgreen: '#008000',
        navyblue: '#191970',
        darkorange: '#ff8c00',
        darkpurple: '#9400d3',
        fuchsia: '#ff00ff',
        darkmagenta: '#8b008b',
        darkgray: '#2f4f4f',
        peachpuff: '#ffdab9',
        darkishgreen: '#bdb76b',
        darkishred: '#dc143c',
        goldenrod: '#daa520',
        darkishgray: '#696969',
        darkishpurple: '#483d8b',
        gold: '#ffd700',
        silver: '#c0c0c0'
    }

    const backgroundColor = colors[color]
    if (!backgroundColor) {
        return m.reply(
            '☘ *Kode Warna Tidak Ditemukan*\n' +
            '🎁 Contoh : Qc white Lenwy\n' +
            '⚠ Gunakan huruf kecil'
        )
    }

    const obj = {
        type: 'quote',
        format: 'png',
        backgroundColor,
        width: 512,
        height: 768,
        scale: 2,
        messages: [{
            entities: [],
            avatar: true,
            from: {
                id: 1,
                name: pushname,
                photo: {
                    url: await lenwy.profilePictureUrl(m.sender, 'image')
                        .catch(() => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                }
            },
            text: message,
            replyMessage: {}
        }]
    }

    const res = await axios.post('https://bot.lyo.su/quote/generate', obj)
    const buffer = Buffer.from(res.data.result.image, 'base64')

    await lenwy.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, author: global.author })
}
break

case 'qckode': {
m.reply(`📦 Kode Warna Qc
 *⨠ Pink*
 *⨠ Blue*
 *⨠ Red*
 *⨠ Green*
 *⨠ Yellow*
 *⨠ Purple*
 *⨠ Darkblue*
 *⨠ Lightblue*
 *⨠ Ash*
 *⨠ Orange*
 *⨠ Black*
 *⨠ White*
 *⨠ Teal*
 *⨠ Lightpink*
 *⨠ Chocolate*
 *⨠ Salmon*
 *⨠ Magenta*
 *⨠ Tan*
 *⨠ Wheat*
 *⨠ Deeppink*
 *⨠ Fire*
 *⨠ lenwyblue*
 *⨠ Safron*
 *⨠ Brightlenwyblue*
 *⨠ Hotpink*
 *⨠ Lightlenwyblue*
 *⨠ Seagreen*
 *⨠ Darkred*
 *⨠ Orangered*
 *⨠ Cyan*
 *⨠ Violet*
 *⨠ Mossgreen*
 *⨠ Darkgreen*
 *⨠ Navyblue*
 *⨠ Darkorange*
 *⨠ Darkpurple*
 *⨠ Fuchsia*
 *⨠ Darkmagenta*
 *⨠ Darkgray*
 *⨠ Peachpuff*
 *⨠ Blackishgreen*
 *⨠ Darkishred*
 *⨠ Goldenrod*
 *⨠ Darkishgray*
 *⨠ Darkishpurple*
 *⨠ Gold*
 *⨠ Silver*

⚠️ Kalo Ada Error Bisa Chat Owner Ya
`)
}
break

case 'img2txt':
if (!/image/.test(mime)) return m.reply(`Gambarnya Mana?`)
if (/image/.test(mime)) {
LenwyLD()
let mee = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await uploader60Minute(mee)
let res = await (await fetch(`https://itzpire.com/tools/img2text?url=${mem}`)).json()
let result = res.result
lenwy.sendMessage(m.chat,{image:{url: mem}, caption:`${result}`},{quoted: m})
}
break

case 'txt2img':
case 'texttoimage':
case 'tekstoimage':
case 'text2image':
case 'teks2image':
case 'txt2image': {
    if (!q) return m.reply(`*Mau Gambar Apa?*`)

    LenwyLD
    await sleep(200)


    try {
        const apiUrl = `https://endpoint.web.id/ai/txt2img?key=315602&prompt=${encodeURIComponent(q)}`;

        let response = await fetch(apiUrl)
        let json = await response.json()

        if (json.status && json.code === 200) {
            let imageUrl = json.result.url;

            lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Gambar untuk prompt: "${q}"` }, { quoted: m })
        } else {
            m.reply(`Gagal mendapatkan gambar. Silakan coba lagi.`)
        }
    } catch (error) {
        console.error('Error:', error)
        m.reply(`Terjadi kesalahan saat memproses permintaan.`)
    }
}
break

case 'geminiimg': {
if (!quoted) return m.reply('Mana Gambarnya?')
m.reply('Sabar Yaa')
if (!/image/.test(mime)) return m.reply("Hanya Support Gambar")
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let { data } = await axios.get("https://gmni.vercel.app/api/img?imageUrl="+ anu +"&prompt=" + text)
m.reply(data.text)
}
break

case 'lirik':
case 'liriklagu': {
  if (!text) return m.reply(`Masukan Judul Lagu`)
  if (text.length > 30) return m.reply(`Maksimal 30 Karakter`)    
  LenwyLD()
  await sleep(200)
  try{
    let anu = await (await fetch(`https://endpoint.web.id/tools/lirik?key=315602&query=${text}`)).json()
    let result = anu.result
    let caption = '📃 Judul : ' + result.title + '\n📣 Artis : ' + result.artist + '\n\n🎁 Lirik :\n' + result.lyrics
    m.reply(caption)
  } catch (error) {
    m.reply(`⚠️ Lirik Lagu Tidak Ditemukan ${error}`)
  }
}
break

case 'linkgroup':
case 'linkgc': {
    if (!m.isGroup) return m.reply(mess.group)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    
    try {
        const groupMetadata = await lenwy.groupMetadata(from)

        let response = await lenwy.groupInviteCode(from)

        const message = `*Nama Group :* ${groupMetadata.subject}\n\n\n🎁 *Link Group :* https://chat.whatsapp.com/${response}\n\n🎁 *ID Group :* ${from}`;
        lenwy.sendText(from, message, m, { detectLink: true })
    } catch (error) {
        console.error('Error while fetching group info:', error)
        m.reply('Terjadi kesalahan saat mengambil informasi grup.')
    }
}
break

case 'resetlinkgc': {
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  try {
    await lenwy.groupRevokeInvite(from)
    await new Promise(resolve => setTimeout(resolve, 2000))
    let newLink = await lenwy.groupInviteCode(from)
    m.reply(`*Link Grup Berhasil Di Reset*\n\n*Menjadi:* https://chat.whatsapp.com/${newLink}`)
    global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
    fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2));
  } catch (err) {
    console.error('Error saat mereset link grup:', err)
    m.reply('Terjadi kesalahan saat mereset link grup.')
  }
}
break

case 'sendlinkgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285261255548`)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285261255548`)
var bnnd =  m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await lenwy.onWhatsApp(`${bnnd.split("@")[0]}`)
if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
try {
let response = await lenwy.groupInviteCode(from)
await lenwy.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, len, { detectLink: true })
m.reply('Selesai')
} catch (e) {
console.log(e)
m.reply('Gini Loh\n\n> sendlinkgc 628xx')
}
}
break

case 'add':
case 'addmember': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
var teks =  m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await lenwy.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
var a = await lenwy.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) lenwy.sendMessage(m.chat, {text: `Berhasil Menambahkan @${teks.split("@")[0]} Kedalam Grup Ini`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
if (a[0].status == 408) lenwy.sendMessage(m.chat, {text: `Gagal Menambahkan @${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
if (a[0].status == 409) lenwy.sendMessage(m.chat, {text: `@${teks.split("@")[0]} Sudah Ada Di Dalam Grup Ini!`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
if (a[0].status == 403) lenwy.sendMessage(m.chat, {text: `Gagal Menambahkan @${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
}
break

case 'kickall': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);

  try {
      const groupe = await lenwy.groupMetadata(from);
      const members = groupe.participants;

      const mems = members
          .filter(member => member.id !== m.sender && member.id !== botNumber)
          .map(member => member.id);

      if (mems.length === 0) {
          return m.reply("Tidak ada anggota yang dapat dikeluarkan.");
      }

      await lenwy.groupParticipantsUpdate(from, mems, 'remove')
          .then(() => m.reply(`Berhasil mengeluarkan ${mems.length} anggota dari grup.`))
          .catch(err => m.reply(`Gagal mengeluarkan anggota: ${err.toString()}`));
  } catch (error) {
      return m.reply(`Terjadi kesalahan: ${error.toString()}`);
  }
}
break

case 'dor':
case 'kick': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (text || m.quoted) {
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => lenwy.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} catch (e) {
  return m.reply(e)
}
} else {
return m.reply(`tag atau @user`)
}
}
break

case 'promote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [users], 'promote')
m.reply(mess.success)
}
break

case 'demote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [users], 'demote')
m.reply(mess.success)
}
break

case 'promoteall': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);

  try {
      const groupe = await lenwy.groupMetadata(from);
      const members = groupe.participants;

      const mems = members
          .filter(member => member.id !== m.sender && member.id !== botNumber)
          .map(member => member.id);

      if (mems.length === 0) {
          return m.reply("Tidak ada anggota yang dapat di-promote.");
      }

      await lenwy.groupParticipantsUpdate(from, mems, 'promote')
          .then(() => m.reply(`Berhasil mempromosikan ${mems.length} anggota ke admin.`))
          .catch(err => m.reply(`Gagal mempromosikan anggota: ${err.toString()}`));
  } catch (error) {
      return m.reply(`Terjadi kesalahan: ${error.toString()}`);
  }
}
break

case 'demoteall': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);

  try {
      const groupe = await lenwy.groupMetadata(from);
      const members = groupe.participants;

      const mems = members
          .filter(member => member.id !== m.sender && member.id !== botNumber)
          .map(member => member.id);

      if (mems.length === 0) {
          return m.reply("Tidak ada anggota yang dapat di-demote.");
      }

      await lenwy.groupParticipantsUpdate(from, mems, 'demote')
          .then(() => m.reply(`Berhasil mendemote ${mems.length} admin dari grup.`))
          .catch(err => m.reply(`Gagal mendemote anggota: ${err.toString()}`));
  } catch (error) {
      return m.reply(`Terjadi kesalahan: ${error.toString()}`);
  }
}
break


case 'setppbot': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
var medis = await lenwy.downloadAndSaveMediaMessage(quoted, 'ppbot')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await lenwy.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(mess.success)
} else {
var memeg = await lenwy.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(mess.success)
}
}
break

case 'setppbotpanjang': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Mana Fotonya?`)
if (/image/g.test(mime)) {
if (/webp/.test(mime)) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
var medis = await lenwy.downloadAndSaveMediaMessage(quoted, 'ppbot')
var { img } = await generateProfilePicture(medis)
await lenwy.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Sukses`)
} else {
var memeg = await lenwy.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(mess.success)
}
}
break

case 'setppgroup':
case 'setppgrup':
case 'setppgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!/image/.test(mime)) return m.reply(`Mana Fotonya?`)

let media = await lenwy.downloadAndSaveMediaMessage(quoted)
await lenwy.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break

case 'setppgcpanjang': {
  const jimp = require('jimp')
  
  async function processImage(media) {
    const image = await jimp.read(media)
    const cropped = image.crop(0, 0, image.getWidth(), image.getHeight())
    return {
      img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp.MIME_JPEG),
      preview: await cropped.normalize().getBufferAsync(jimp.MIME_JPEG)
    };
  }

  let media = await lenwy.downloadAndSaveMediaMessage(quoted)
  var { img } = await processImage(media)

  await lenwy.query({
    tag: "iq",
    attrs: {
      to: m.chat,
      type: "set",
      xmlns: "w:profile:picture",
    },
    content: [
      {
        tag: "picture",
        attrs: { type: "image" },
        content: img,
      },
    ],
  })
  
  await lenwy.sendMessage(m.chat, {
    react: {
      text: "✅",
      key: m.key,
    },
  })
  
  m.reply(mess.success)
}
break

case 'hidetag':
case 'h': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  const texthidetag_ = text ? text : (m.quoted ? m.quoted.text : '')
  const mime = m.quoted ? m.quoted.mtype : m.mtype
  try {
    if (/image/.test(mime)) {
      const media = await (m.quoted ? m.quoted.download() : m.download())
      console.log(media)
      if (!media) return m.reply("Gambar tidak ditemukan atau gagal diunduh.")
      await lenwy.sendMessage(from, { image: media, caption: texthidetag_, mentions: participants.map(a => a.id) },{ quoted: m })
    } else if (/video/.test(mime)) {
      const media = await (m.quoted ? m.quoted.download() : m.download())
      if (!media) return m.reply("Video tidak ditemukan atau gagal diunduh.")
      await lenwy.sendMessage(from, { video: media, caption: texthidetag_, mentions: participants.map(a => a.id) }, { quoted: m })
    } else {
      lenwy.sendMessage(from,{ text: texthidetag_, mentions: participants.map(a => a.id) }, { quoted: m })
    }
  } catch (err) {
    console.error(err);
    m.reply("Terjadi kesalahan saat memproses media.");
  }
}
break

case 'setgrup':
case 'setgroup': {   
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (args[0] === 'close'){
let settextclose = global.db.data.chats[m.chat]?.text_close || `_*Group Berhasil Ditutup*_ 「 🔒 」`
await lenwy.groupSettingUpdate(from, 'announcement').then((res) => m.reply(settextclose)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
let settextopen = global.db.data.chats[m.chat]?.text_open || `_*Group Berhasil Dibuka*_ 「 🔓 」`
await lenwy.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(settextopen)).catch((err) => m.reply(jsonformat(err)))
} else {
lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `*Silahkan Ketik*
${command} open
${command} close`}, { quoted: m }) 
}
}
break

case 'close': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}
  if (args[0] === 'edit') {
    const teks = args.slice(1).join(' ').trim()
    global.datagc[m.chat].text_close = teks
    m.reply(teks ? `Teks ${command} berhasil diubah` : `Teks ${command} berhasil direset ke bawaan`)
    fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
    return await m.reply(`*Pengaturan fitur ${command}*

Ketik:
- *${prefix + command}* untuk menutup grup
- *${prefix + command} edit teksnya* untuk mengubah teks close

*Placeholder yang bisa digunakan:*

- {GROUPNAME} = nama grup
- {TAGDIRI} = tag admin/pengirim
- {JAM} = jam saat ini
- {MENIT} = menit saat ini
- {DETIK} = detik saat ini
- {HARI} = nama hari saat ini
- {TANGGAL} = tanggal saat ini
- {BULAN} = angka bulan saat ini
- {TAHUN} = tahun saat ini
- {NAMABULAN} = nama bulan saat ini

*Contoh:*
${prefix + command} edit
🔒 Grup telah ditutup oleh {TAGDIRI}

📅 {HARI}, {TANGGAL} {NAMABULAN} {TAHUN}
🕒 {JAM}:{MENIT}:{DETIK} WIB

Grup {GROUPNAME} sementara ditutup.`)
  }
  const teksDefault = `_*Group Berhasil Ditutup*_ 「 🔒 」`
  let settextclose = global.datagc[m.chat].text_close || teksDefault
  const usertag = `@${m.sender.split('@')[0]}`
  const replacers = {
    '{GROUPNAME}': groupName,
    '{TAGDIRI}': usertag,
    '{JAM}': jamnya,
    '{MENIT}': menitnya,
    '{DETIK}': detiknya,
    '{HARI}': harinya,
    '{TANGGAL}': tanggalnya,
    '{BULAN}': bulannya,
    '{TAHUN}': tahunnya,
    '{NAMABULAN}': namabulannya
  }
  for (const [key, value] of Object.entries(replacers)) {
    settextclose = settextclose.replaceAll(key, value)
  }
  await lenwy.groupSettingUpdate(m.chat, 'announcement')
  lenwy.sendMessage(m.chat,{ text: settextclose, mentions: [m.sender]},{ quoted: m })
}
break

case 'open': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}
  if (args[0] === 'edit') {
    const teks = args.slice(1).join(' ').trim()
    global.datagc[m.chat].text_open = teks
    m.reply(teks ? `Teks ${command} berhasil diubah` : `Teks ${command} berhasil direset ke bawaan`)
    fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
    return await m.reply(`*Pengaturan fitur ${command}*

Ketik:
- *${prefix + command}* untuk membuka grup
- *${prefix + command} edit teksnya* untuk mengubah teks open

*Placeholder yang bisa digunakan:*

- {GROUPNAME} = nama grup
- {TAGDIRI} = tag admin/pengirim
- {JAM} = jam saat ini
- {MENIT} = menit saat ini
- {DETIK} = detik saat ini
- {HARI} = nama hari saat ini
- {TANGGAL} = tanggal saat ini
- {BULAN} = angka bulan saat ini
- {TAHUN} = tahun saat ini
- {NAMABULAN} = nama bulan saat ini

*Contoh:*
${prefix + command} edit
🔓 Grup telah dibuka oleh {TAGDIRI}

📅 {HARI}, {TANGGAL} {NAMABULAN} {TAHUN}
🕒 {JAM}:{MENIT}:{DETIK} WIB

Selamat berdiskusi di {GROUPNAME}`);
  }
  const teksDefault = `_*Group Berhasil Dibuka*_ 「 🔓 」`
  let settextopen = global.datagc[m.chat].text_open || teksDefault
  const usertag = `@${m.sender.split('@')[0]}`
  const replacers = {
    '{GROUPNAME}': groupName,
    '{TAGDIRI}': usertag,
    '{JAM}': jamnya,
    '{MENIT}': menitnya,
    '{DETIK}': detiknya,
    '{HARI}': harinya,
    '{TANGGAL}': tanggalnya,
    '{BULAN}': bulannya,
    '{TAHUN}': tahunnya,
    '{NAMABULAN}': namabulannya
  }
  for (const [key, value] of Object.entries(replacers)) {
    settextopen = settextopen.replaceAll(key, value)
  }
  await lenwy.groupSettingUpdate(m.chat, 'not_announcement')
  lenwy.sendMessage(m.chat,{ text: settextopen, mentions: [m.sender]}, { quoted: m })
}
break

case 'jeda': {
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (!args[0]) return m.reply(`*Pilih Waktu:*\n-s = Second\n-m = Minute\n-h = Hour\n-d = Day\n\n*Contoh:*\n${prefix+command} 10m`)
    let timeArg = args[0]
    let timer = toMs(timeArg)
    m.reply(`*Group akan ditutup selama ${timeArg}*`)
    lenwy.groupSettingUpdate(from, 'announcement')
        .then(() => {
            m.reply(`Group telah ditutup selama ${timeArg}. Grup akan dibuka kembali setelah waktu habis.`)
            setTimeout(() => {
                lenwy.groupSettingUpdate(from, 'not_announcement')
                    .then(() => {
                        m.reply(`Group telah dibuka kembali setelah ${timeArg}.`)
                    })
                    .catch(err => {
                        console.error('Error membuka grup:', err)
                        m.reply(`Terjadi kesalahan saat membuka grup kembali.`)
                    })
            }, timer)
        })
        .catch(err => {
            console.error('Error menutup grup:', err)
            m.reply(`Terjadi kesalahan saat menutup grup.`)
        })
}
break

case 'setdesk': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
 if (q == 'on'){
await lenwy.groupSettingUpdate(from, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group 🫡`)).catch((err) => m.reply(jsonformat(err)))
 } else if (q == 'off'){
await lenwy.groupSettingUpdate(from, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group 🫡`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Setdesk on
Setdesk off`}, {quoted:m}) 

}
}
break

case 'join': {
 if (!isCreator) return m.reply(mess.owner)
 if (!text) return m.reply('Masukkan Link Group!')
 if (!isUrl(text) || !text.includes('whatsapp.com')) return m.reply('Link tidak valid! 🤔')
 let linknya = text
 if (text.includes('?')) linknya = text.split('?')[0]
 m.reply('Sabar Yaa')

 try {
 let result = linknya.split('https://chat.whatsapp.com/')[1]
 if (!result) return m.reply('Link tidak valid! 🤔')
 
 await lenwy.groupAcceptInvite(result)
 m.reply('Bot berhasil bergabung ke grup!')
 } catch (err) {
 if (err.message.includes('not-authorized')) {
 return m.reply('Gagal bergabung ke grup. Bot kemungkinan baru saja dikeluarkan.')
 } else if (err.message.includes('gone')) {
 return m.reply('Link grup sudah di reset.')
 } else if (err.message.includes('conflict')) {
 m.reply('Bot sudah berada di dalam grup.')
 } else if (err.message.includes('already-exists')) {
 return m.reply('Bot sudah meminta gabung ke grup.')
 } else {
 console.log(err)
 return m.reply('Terjadi error yang tidak dikenali.')
 }
 }
}
break

case 'leave': {
 if (!isCreator) return m.reply(mess.owner)

 if (m.isGroup) {
 if (text) return
 setTimeout(async () => {
 try {
 await lenwy.groupLeave(m.chat)
 console.log(`Successfully left the group ${m.chat}`)
 } catch (err) {
 console.error('Error leaving the group:', err)
 await m.reply('*Gagal meninggalkan grup.*')
 }
 }, 2000)
 } else if (!m.isGroup) {
 if (!text) return m.reply('*Mana ID Grup / Link Nya?*\n*Ketik cekidgc Buat Liat Id Nya*')
 let groupId
 if (text.includes('https://chat.whatsapp.com')) {
 let linknya = text
 if (text.includes('?')) linknya = text.split('?')[0]
 groupId = await getGroupIdFromLink(linknya, lenwy)
 } else if (text.includes('@g.us')) {
 groupId = text
 } else {
 return m.reply(`Itu bukan id grup ataupun link grup`)
 }
 setTimeout(async () => {
 try {
 await lenwy.groupLeave(groupId)
 m.reply(`Berhasil keluar dari grup ${groupId}`)
 } catch (err) {
 console.error('Error leaving the group:', err)
 await m.reply('*Gagal meninggalkan grup.*')
 }
 }, 2000) // 5000 ms = 5 detik
 }
}
break

case 'editsubjek': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (!text) m.reply('Text nya ?')
await lenwy.groupUpdateSubject(from, text).catch((err) => m.reply(jsonformat(err)))
}
break

case 'editdesk': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (!text) m.reply('Text Nya ?')
await lenwy.groupUpdateDescription(from, text).catch((err) => m.reply(jsonformat(err)))
}
break

case 'tagall': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let teks = `*Tag All*
🎁 *Pesan : ${q ? q : 'Kosong'}*\n\n`
for (let mem of participants) {
teks += `⨠ @${mem.id.split('@')[0]}\n`
}
lenwy.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break

case 'inspect': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid 🤔")
lenwy.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `*Group Link Yang Di Inspect*

 *⨠ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}*
 *⨠ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
 *⨠ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}*
 *⨠ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
 *⨠ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member*

*⨠ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}*
🎁 *By ${botname}*`
try {
pp = await lenwy.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
lenwy.sendFile(from, pp, "", m, { caption: tekse, mentions: await lenwy.parseMention(tekse) })

})
}
break

case 'inspect2': {
if (isBan) return m.reply('Lu Di Ban Owner')
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
lenwy.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}@g.us

©By ${botname}`
try {
pp = await lenwy.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
lenwy.sendFile(from, pp, "", m, { caption: tekse, mentions: await lenwy.parseMention(tekse) })

})
}
break

case 'ping':
case 'botstatus':
case 'statusbot': {
    const { execSync } = require('child_process');
    const used = process.memoryUsage();
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
        return cpu;
    });
    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total;
        last.speed += cpu.speed / length;
        last.times.user += cpu.times.user;
        last.times.nice += cpu.times.nice;
        last.times.sys += cpu.times.sys;
        last.times.idle += cpu.times.idle;
        last.times.irq += cpu.times.irq;
        return last;
    }, { speed: 0, total: 0, times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 } });

    let timestamp = speed();
    let latensi = speed() - timestamp;
    let neww = performance.now();
    let oldd = performance.now();

    let serverLocation = 'Tidak diketahui';
    let ispName = 'Tidak diketahui';
    let timeZone = 'Tidak diketahui';
    try {
        const res = await fetch('http://ip-api.com/json/');
        const data = await res.json();
        serverLocation = `${data.city}, ${data.regionName}, ${data.country}`;
        ispName = data.isp;
        timeZone = data.timezone;
    } catch (e) {
        serverLocation = 'Gagal mengambil data lokasi';
        ispName = 'Gagal mengambil ISP';
    }

    let diskSpace = 'Tidak diketahui';
    try {
        if (os.platform() === 'win32') {
            diskSpace = 'Gagal membaca (OS Windows)';
        } else {
            diskSpace = execSync("df -h / | awk 'NR==2 {print $3\" Terpakai dari \"$2\" (\"$5\")\"}'").toString().trim();
        }
    } catch (err) {
        diskSpace = 'Error membaca disk';
    }

    const loadAvg = os.loadavg().map(v => v.toFixed(2)).join(' | ');

    let respon = `
⏱️ *Kecepatan Respon :* ${latensi.toFixed(4)} Detik
🚀 *Speed :* ${oldd - neww} Milidetik

🤖 *INFO BOT*
 *⨠ Runtime Bot :* ${runtime(process.uptime())}
 *⨠ Process ID :* ${process.pid}
 *⨠ Storage / Disk :* ${diskSpace}
 *⨠ Total RAM :* ${formatp(os.totalmem())}
 *⨠ RAM Terpakai Bot :* ${formatp(used.rss)}
 *⨠ RAM Sisa Sistem :* ${formatp(os.freemem())}

💻 *INFO VPS & SERVER*
 *⨠ Hostname :* ${os.hostname()}
 *⨠ Node.js :* ${process.version}
 *⨠ Platform :* ${os.platform()} ${os.arch()}
 *⨠ Uptime Server :* ${runtime(os.uptime())}
 *⨠ Provider/ISP :* ${ispName}
 *⨠ Region VPS :* ${serverLocation}
 *⨠ Timezone :* ${timeZone}

📈 *INFO CPU & BEBAN SISTEM*
 *⨠ Load Average :* ${loadAvg} (1m | 5m | 15m)
${cpus[0] ? ` *⨠ Model :* ${cpus[0].model.trim()} (${cpu.speed} MHZ)
${Object.keys(cpu.times).map(type => ` *⨠ ${(type + '*').padEnd(6)}:* ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
 *⨠ Core(s) :* ${cpus.length} Core` : ''}
`.trim();

    m.reply(respon);
}
break

case 'bcgc':
case 'bcgroup': {
    if (!isCreator) return m.reply(mess.OnlyOwner)
    if (!q) return m.reply(`*Bukan Gitu Loh*\n> *Contoh : ${prefix + command} OEE SEMUAANYAA*`)
    if (!text) return m.reply(`*Teks Broadcast Tidak Ditemukan*\n> *Contoh : ${prefix + command} OEEE*`)

    let getGroups;
    try {
        getGroups = await lenwy.groupFetchAllParticipating()
    } catch (err) {
        console.error('Error fetching groups:', err)
        return m.reply('*Gagal mengambil daftar grup.*')
    }
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let groupIds = groups.map(v => v.id)
    m.reply(`*Mengirim Broadcast Ke ${groupIds.length} Group Chat, Waktu Selesai ${groupIds.length * 1.5} detik*`)
    for (let groupId of groupIds) {
        await sleep(200)
        try {
            await lenwy.sendMessage(groupId, { text: `${text}` }, { quoted: m })
        } catch (err) {
            console.error('Error sending message to group:', groupId, err)
        }
    }
    m.reply(`*Sukses Mengirim Broadcast Ke ${groupIds.length} Group*`)
}
break


case 'bcimg':
case 'bcvid':
case 'bcvideo':
case 'share': {
    if (!isCreator) return m.reply('Maaf, Command ini Khusus untuk Developer Bot WhatsApp')
    if (m.isGroup) return m.reply(mess.private)
    if (!text) return m.reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix + command} teks\n\nReply Gambar/Video Untuk Mengirim Gambar/Video Ke Semua Group`)



    let getGroups;
    try {
        getGroups = await lenwy.groupFetchAllParticipating()
    } catch (err) {
        console.error('Error fetching groups:', err)
        return m.reply('*Gagal mengambil daftar grup.*')
    }

    let groups = Object.entries(getGroups).map(entry => entry[1])
    let groupIds = groups.map(v => v.id)

    global.teksjpm = text;

    let mime = m.quoted ? m.quoted.mimetype : '';

    for (let groupId of groupIds) {
        let metadata;
        try {
            metadata = await lenwy.groupMetadata(groupId)
        } catch (err) {
            console.error(`Error fetching metadata for group ${groupId}:`, err)
            continue; // Lanjutkan ke grup berikutnya jika terjadi kesalahan
        }

        let participants = metadata.participants || []

        try {
            if (/image/.test(mime)) {
                if (!m.quoted) return m.reply('Tidak ada gambar yang di-reply.')
                let media = await lenwy.downloadAndSaveMediaMessage(m.quoted)
                let mediaUrl = await uploader60Minute(media)
                await lenwy.sendMessage(groupId, { image: { url: mediaUrl }, caption: global.teksjpm, contextInfo: { mentionedJid: participants.map(p => p.id) } }, { quoted: m })
            } else if (/video/.test(mime)) {
                if (!m.quoted) return m.reply('Tidak ada video yang di-reply.')
                let media = await lenwy.downloadAndSaveMediaMessage(m.quoted)
                let mediaUrl = await uploader60Minute(media)
                await lenwy.sendMessage(groupId, { video: { url: mediaUrl }, caption: global.teksjpm, contextInfo: { mentionedJid: participants.map(p => p.id) } }, { quoted: m })
            } else {
                await lenwy.sendMessage(groupId, { text: global.teksjpm, contextInfo: { mentionedJid: participants.map(p => p.id) } }, { quoted: m })
            }
            await sleep(200) // Tunggu 2 detik antara pengiriman pesan
        } catch (err) {
            console.error(`Error sending message to group ${groupId}:`, err)
        }
    }

    m.reply(`*Sukses Mengirim Broadcast Ke ${groupIds.length} Group*`)
}
break








case 'antich': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  if (q === 'on') {
      global.db.data.chats[m.chat].antich = true;
      m.reply(`*Berhasil Mengaktifkan ${command}*`);
  } else if (q === 'off') {
      global.db.data.chats[m.chat].antich = false;
      m.reply(`*Menonaktifkan ${command}*`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
}
break

case 'antich2': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  if (q === 'on') {
      global.db.data.chats[m.chat].antich2 = true;
      m.reply(`*Berhasil Mengaktifkan ${command}*`);
  } else if (q === 'off') {
      global.db.data.chats[m.chat].antich2 = false;
      m.reply(`*Menonaktifkan ${command}*`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
}
break

case 'antiwame': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  if (q === 'on') {
      global.db.data.chats[m.chat].antiwame = true;
      m.reply(`*Berhasil Mengaktifkan ${command}*`);
  } else if (q === 'off') {
      global.db.data.chats[m.chat].antiwame = false;
      m.reply(`*Menonaktifkan ${command}*`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
}
break

case 'antilink': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  let newLink = await lenwy.groupInviteCode(from);
  if (q === 'on') {
      global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
      global.db.data.chats[m.chat].antilink = true;
      m.reply(`*Berhasil Mengaktifkan ${command}*`);
  } else if (q === 'off') {
      global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
      global.db.data.chats[m.chat].antilink = false;
      m.reply(`*Menonaktifkan ${command}*`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
  fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
}
break

case 'antilink2': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  let newLink = await lenwy.groupInviteCode(from)
  if (q === 'on') {
      global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
      global.db.data.chats[m.chat].antilink2 = true;
      m.reply(`*Berhasil Mengaktifkan ${command}*`);
  } else if (q === 'off') {
      global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
      global.db.data.chats[m.chat].antilink2 = false;
      m.reply(`*Menonaktifkan ${command}*`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
  fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
}
break

case 'antipl': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  if (q === 'on') {
      global.db.data.chats[m.chat].antipanel = true;
      m.reply(`*Berhasil Mengaktifkan ${command}*`);
  } else if (q === 'off') {
      global.db.data.chats[m.chat].antipanel = false;
      m.reply(`*Menonaktifkan ${command}*`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
}
break

case 'antitoxic1': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  if (q === 'on') {
      db.data.chats[m.chat].antitoxic1 = true;
      m.reply(`*Berhasil Mengaktifkan ${command}*`);
  } else if (q === 'off') {
      db.data.chats[m.chat].antitoxic1 = false;
      m.reply(`*Menonaktifkan ${command}*`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
}
break

case 'antitoxic2': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  if (q === 'on') {
      db.data.chats[m.chat].antitoxic2 = true;
      m.reply(`*Berhasil Mengaktifkan ${command}*`);
  } else if (q === 'off') {
      db.data.chats[m.chat].antitoxic2 = false;
      m.reply(`*Menonaktifkan ${command}*`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
}
break

case 'antilinkgc1': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  let newLink = await lenwy.groupInviteCode(from)
  if (q === 'on') {
      global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
      global.db.data.chats[m.chat].antilinkgc = true;
      m.reply(`*Berhasil Mengaktifkan ${command}*
🎁 *Ketik Antilinkgc2 Untuk Mengaktifkan Autokick*`);
  } else if (q === 'off') {
      global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
      global.db.data.chats[m.chat].antilinkgc = false;
      m.reply(`*Menonaktifkan ${command}*`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
  fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
}
break

case 'antilinkgc2': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  let newLink = await lenwy.groupInviteCode(from)
  if (q === 'on') {
      global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
      db.data.chats[m.chat].antilinkgc2 = true;
      m.reply(`*Berhasil Mengaktifkan ${command}*`);
  } else if (q === 'off') {
      global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
      db.data.chats[m.chat].antilinkgc2 = false;
      m.reply(`*Menonaktifkan ${command}*`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
  fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
}
break

case 'antilinktt': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  if (q === 'on') {
      global.db.data.chats[m.chat].antitiktok = true;
      m.reply(`*Berhasil Mengaktifkan ${command}*`);
  } else if (q === 'off') {
      global.db.data.chats[m.chat].antitiktok = false;
      m.reply(`*Menonaktifkan ${command}*`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
}
break

case 'antilinkyt': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  if (q === 'on') {
      global.db.data.chats[m.chat].antiyoutube = true;
      m.reply(`*Berhasil Mengaktifkan ${command}*`);
  } else if (q === 'off') {
      global.db.data.chats[m.chat].antiyoutube = false;
      m.reply(`*Menonaktifkan ${command}*`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
}
break

case 'antibot': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  if (q === 'on') {
      db.data.chats[m.chat].antibot = true;
      m.reply(`*Berhasil Mengaktifkan ${command}*`);
  } else if (q === 'off') {
      db.data.chats[m.chat].antibot = false;
      m.reply(`*Menonaktifkan ${command}*`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
}
break

case 'autoread': {
  if (!isCreator) return m.reply(mess.owner);
  if (q === 'on') {
      global.db.data.settings[botNumber].autoread = true;
      m.reply(`Berhasil mengubah autoread ke ${q}`);
  } else if (q === 'off') {
      global.db.data.settings[botNumber].autoread = false;
      m.reply(`Berhasil mengubah autoread ke ${q}`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
}
break









case 'stiker':
case 'sticker':
case 's':
case 'stickers':
case 'sgif': {
 if (isBan) return m.reply('⚠ *Kamu Di Ban Owner*')
 if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
 if (!/image/.test(mime) && !/video/.test(mime)) return
 if (/image/.test(mime)) {
 var stream = await downloadContentFromMessage(m.quoted? quoted : m.message.imageMessage, 'image');
 var buffer = Buffer.from([]);
 for await(const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk]);
 }
 let buffers = await writeExifImg(buffer, { packname: global.packname, author: global.author });
 await lenwy.sendMessage(from, { sticker: { url: buffers } }, { quoted: m });
 } else if (/video/.test(mime)) {
 var stream = await downloadContentFromMessage(m.quoted? quoted : m.message.videoMessage, 'video');
 var buffer = Buffer.from([]);
 for await(const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk]);
 }
 let buffers = await writeExifVid(buffer, { packname: global.packname, author: global.author });
 await lenwy.sendMessage(from, { sticker: { url: buffers } }, { quoted: m });
 } else {
 m.reply(`Balas gambar/video/sticker dengan caption ${prefix + 'sticker'} \n*(MAKSIMAL 10 DETIK!*)`);
 } 
 }
break

case 'smeme':
case 'stickermeme':
case 'stickmeme': {
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return
if (!text) return m.reply(respond)
LenwyLD()
await sleep(200)
let atas = text.split('|')[0] ? text.split('|')[0] : '-'
let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
try {
let mee = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await uploader60Minute(mee)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
let awikwok = await lenwy.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(awikwok)
} catch (e) {
m.reply(mess.error + e)
}
}
break

case 'cuaca': {
if (!text) return m.reply('*Mana Lokasinya?*')
if (text.length > 20) return m.reply(`*Maksimal 20 Karakter*`)
LenwyLD()
await sleep(200)
try {
let wdata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=id`)
let Lenwy_txt = ""
Lenwy_txt += `*Cuaca Dari : ${text}*\n`
Lenwy_txt += `☁️ *Cuaca :* *${wdata.data.weather[0].main}*\n`
Lenwy_txt += `🧾 *Deskripsi :* *${wdata.data.weather[0].description}*\n`
Lenwy_txt += `🌡️ *Suhu Rata Rata :* *${wdata.data.main.temp}*\n`
Lenwy_txt += `💨 *Tekanan :* *${wdata.data.main.pressure}*\n`
Lenwy_txt += `🧴 *kelembapan :* *${wdata.data.main.humidity}*\n`
Lenwy_txt += `🛳️ *Garis Bujur :* *${wdata.data.coord.lat}*\n`
Lenwy_txt += `🌏 *Negara :* *${wdata.data.sys.country}*\n`
lenwy.sendMessage(m.chat, { text: Lenwy_txt, }, { quoted: m })
} catch (e) {
m.reply(`Pastikan Wilayahnya Adalah Kota`)
}
}
break

case 'gpt4':
case 'gpt':
case 'ai': {
if (!text) return m.reply(`*Mau Nanya Apa Ama AI?*`) 
 LenwyLD()
 if (/image/.test(mime)) {
  try {
    if (quoted && /image/.test(mime)) {
        try {
          let media = await merlynn.downloadAndSaveMediaMessage(quoted)
          let anu = await uploader60Minute(media)
          let data = await (await fetch(`https://${global.api.maelyn.domain}/api/ai/gemini`,
                    {
                      method: "POST",
                      headers: {
                        "x-maelyn-auth": global.api.maelyn.apikey,
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        "prompt": text,
                        "model": "gemini-3-flash-preview",
                        "mode": "chat",
                        "images": [
                          anu
                        ]
                      })
                    }
                  )).json();
          console.log(data)
          m.reply(data.result.text)
        } catch (e) {
          console.log(e)
          return m.reply("*maaf, sedang terjadi error saat ini*")
        }
      } else {
        let gpt = await (await fetch(`https://${global.api.maelyn.domain}/api/ai/gemini`,
                    {
                      method: "POST",
                      headers: {
                        "x-maelyn-auth": global.api.maelyn.apikey,
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        "prompt": text,
                        "mode": "chat",
                        "model": "gemini-3-flash-preview"
                      })
                    }
                  )).json();
        console.log(gpt)
        m.reply(gpt.result.text)
      }
   } catch (e) {
    console.log(e)
    return m.reply("*Error Kak :(*")
   }
 }
}
break

case 'search':
case 'searchai':
  if (!text) return m.reply(`*Begini Loh*\n\n> *${command} Gempa di jepang*`)
  LenwyLD()
  try {
     let you = await (await fetch(`https://${global.api.maelyn.domain}/api/perplexity?q=${text}`, {
       headers: {
         'x-maelyn-auth': global.api.maelyn.apikey
       }
     })).json()
     console.log(you)
     let result = you.result
     let sourcenya = `> *Source*\n`
     result.source.forEach((url, index) => {
      sourcenya += `(${index + 1}) ${url}\n`
     });
     m.reply(`${result.answer}

${sourcenya}`)
   } catch (e) {
       lenwy.sendMessage (m.chat, { react: { text: `❌`, key: m.key }})
     }
break


case 'imdb':
if (!text) return m.reply(`*Masukan Judul Filmnya*`)
LenwyLD()
await sleep(200)
if (text.length > 20) return m.reply(`*Maksimal 20 Karakter*`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let Lenwy_txt = ""
            console.log(fids.data)
Lenwy_txt += "*IMDB Search*\n"
Lenwy_txt += "📖 *Judul :* *" + fids.data.Title + "*\n"
Lenwy_txt += "📅 *Tahun :* *" + fids.data.Year + "*\n"
Lenwy_txt += "📦 *Rilis :* *" + fids.data.Released + "*\n"
Lenwy_txt += "🕒 *Durasi :* *" + fids.data.Runtime + "*\n"
Lenwy_txt += "📰 *Genre :* *" + fids.data.Genre + "*\n"
Lenwy_txt += "📋 *Direktur :* *" + fids.data.Director + "*\n"
Lenwy_txt += "📝 *Penulis :* *" + fids.data.Writer + "*\n"
Lenwy_txt += "👤 *Aktor :* *" + fids.data.Actors + "*\n"     
Lenwy_txt += "💬 *Bahasa :* *" + fids.data.Language + "*\n"
Lenwy_txt += "🌏 *Negara :* *" + fids.data.Country + "*\n"
Lenwy_txt += "🏆 *Penghargaan :* *" + fids.data.Awards + "*\n"
Lenwy_txt += "🪙 *Keuntungan :* *" + fids.data.BoxOffice + "*\n"
Lenwy_txt += "🏷️ *Nilai :* *" + fids.data.imdbRating + "*\n"
Lenwy_txt += "📣 *Pemungutan Suara :* *" + fids.data.imdbVotes + "*\n\n"
Lenwy_txt += "📃 *Plot :*\n" + fids.data.Plot + ""
           lenwy.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: Lenwy_txt,
            }, {
                quoted: m,})
            .catch(console.error)
            break

case 'asmaul husna': {
const t3xt = require(`./storage/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'ayat kursi': {
let result = `🎁 *Ayat Kursi*

✉️ *Arab :*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

✉️ *Latin :*
*“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”*

✉️ *Artinya:*
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya) tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
*(QS. Al Baqarah: 255)*`
lenwy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/afb17800d56775ad1791d.png' }, caption: result}, { quoted: m })
}

break

case 'kisahnabi': {
if (!text) return m.reply(`*Tolong Masukkan Nama Nabi*`) 
try{
let ilenwy = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/kisahnabi?apikey=QIO8xicLNkEV43Y&nabi=${text}`)
const namanabi = ilenwy.result.name
const kelahiran = ilenwy.result.birth
const wafat = ilenwy.result.death_age
const asal = ilenwy.result.country_from
const ceritanabi = ilenwy.result.story
var lenwy_result = `*Kisah Nabi*
🎁 *Nama Nabi : ${namanabi}*
🗓️ *Hari Kelahiran : ${kelahiran}*
🕒 *Wafat Pada Umur : ${wafat}*
🌏 *Asal : ${asal}*

📑 *Kisah Dari Nabi ${namanabi} :*
${ceritanabi}`
m.reply(lenwy_result) 
} catch (error) {
    return m.reply(mess.error)
}
}
break

case 'doa': {
if (!text) return m.reply(`*Tolong Masukkan Doa Yang Ingin Dicari*`) 
try{
LenwyLD()
await sleep(200)
let ilenwy = await fetchJson(`https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/${text}`)
const namadoa = ilenwy.doa
const ayat = ilenwy.ayat
const latin = ilenwy.latin
var lenwy_result = `*Pencarian : ${namadoa}*

*${ayat}*

*${latin}*`
m.reply(lenwy_result) 
} catch (error) {
    return m.reply(mess.error)
}
}
break

case 'toimg': {
if (isBan) return m.reply(mess.ban)
try {
  LenwyLD()
  await sleep(200)
if (!quoted) return m.reply ('Reply Image')
if (!/webp/.test(mime)) reply `Balas sticker dengan caption *${prefix + command}*`
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) m.reply(err)
let buffer = fs.readFileSync(ran)
lenwy.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
} catch (e) {
    m.reply('[!] pastikan kamu reply stiker yang tidak gerak')
}
}
break

case 'tovid': {
  if (isBan) return m.reply(mess.ban);
  try {
    if (!quoted) return m.reply(`Balas sticker dengan caption *${prefix + command}*`);

    if (!/webp/.test(mime)) return m.reply(`Balas sticker dengan caption *${prefix + command}*`);

    if (/webp/.test(mime)) {
      let media = await lenwy.downloadAndSaveMediaMessage(quoted); // Download sticker
      let ran = await getRandom('.mp4'); // Generate nama file video

      const isAnimated = await isAnimatedWebp(media);
      if (!isAnimated) {
        return m.reply('Sticker yang kamu kirim bukan animasi webp. Harap kirim sticker animasi.');
      }

      exec(`ffmpeg -v error -i ${media} -t 10 -c:v libx264 -pix_fmt yuv420p -f mp4 ${ran}`, (err) => {
        fs.unlinkSync(media); // Hapus file sticker
        if (err) {
          return m.reply(`Terjadi kesalahan saat mengonversi sticker: ${err.message}`);
        }

        let buffer = fs.readFileSync(ran); // Baca file video
        lenwy.sendMessage(from, { video: buffer, caption: 'Sticker converted to video' }, { quoted: m }); // Kirim video hasil konversi
        fs.unlinkSync(ran); // Hapus file video setelah dikirim
      });
    }
  } catch (e) {
    m.reply(`[!] Pastikan kamu reply sticker dengan benar (format sticker GIF atau video). Error: ${e.message}`);
  }
}
break;

case 'chord':
  if (!text) return m.reply('masukkan judul lagunya!')
  try {
    let chord = await (await fetch('https://endpoint.web.id/search/chord?key=315602&query=' + text)).json()
    LenwyLD()
    await sleep(200)
    let result = chord.result;
    
    let message = `${result.title}\n\n`
    message += `Artis: ${result.artist}\n`
    message += `URL: ${result.url}\n`
    message += `URL Artis: ${result.artistUrl}\n\n`
    message += `Chord:\n${result.lyrics}`;
    
    lenwy.sendMessage(m.chat, { text: message }, { quoted: m })
  } catch (e) {
    m.reply('terjadi kesalahan: ' + e)
  }
break

case 'jodoh': {
if (!m.isGroup) return
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
await lenwy.sendMessage(from, { text : `@${me.split('@')[0]} ❤ @${jodoh.split('@')[0]}`, mentions : [me, jodoh] }, { quoted: m })
}
break

case 'jodoh2': {
  if (!m.isGroup) return
  let member = participants.map(u => u.id)
  let me = m.sender
  let jodoh = member[Math.floor(Math.random() * member.length)]
  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `@${me.split('@')[0]} ❤ @${jodoh.split('@')[0]}`
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "HALOO INI FOOTER"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: "HAIII INi header",
              subtitle: "HUEEEEEKKK",
              hasMediaAttachment: false
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  name: "single_select",
                  "buttonParamsJson": JSON.stringify({
                    title:"[ PILIH ]",
                    sections:[{
                      title: "INI JUDUL",

                      rows:[{
                        title: "pay a",
                        id: `pay a`
                      }]
                    }]
                  })
                }
              ],
            }),
            contextInfo: {
            mentionedJid: [me, jodoh], 
            forwardingScore: 9999,
            isForwarded: true
            }
         })
      }
    }
  }, { quoted: m })
  await lenwy.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
  })
  }
  break





case 'play':
case 'song': {
 if (isBan) return m.reply(mess.ban);
 if (!text) return m.reply(`*Mau Dengerin Lagu Apa?*`);
 LenwyLD();

 try {
 let searchnya = await (await fetch(`https://api.nexray.eu.cc/search/youtube?q=${encodeURIComponent(text)}`)).json();
 let res = searchnya.result; // Ambil semua hasil pencarian
 let audioInfo = res?.[0] || {};
 let procees = await (await fetch(`https://api.nexray.eu.cc/downloader/v1/ytmp3?url=${audioInfo.url}`)).json();
 console.log(procees)
 await lenwy.sendMessage(m.chat, { audio: { url: procees.result.url }, mimetype: 'audio/mp4' }, { quoted: m })
 } catch (e) {
 console.log(e)
 }
}
break

case 'ytmp3': {
 if (!text) return m.reply(`*Link Youtubenya Mana?*`)
try {
LenwyLD()
await sleep(200)
m.reply('Process sending audio, mungkin ini membutuhkan 1-3 menit jika durasi audio terlalu panjang!')
let procees = await (await fetch(`https://api.nexray.eu.cc/downloader/v1/ytmp3?url=${encodeURIComponent(text)}`)).json();
console.log(procees)
let audioUrl = procees.result.url

lenwy.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: m });
} catch (e) {
m.reply('terjadi error :' + e)
}
}
break

case 'ytmp4': {
if (!text) return m.reply(`*Link Youtubenya Mana?*`)
try {
LenwyLD()
m.reply('Process sending video, mungkin membutuhkan 1-3 menit jika durasi video terlalu panjang!')
let procees = await (await fetch(`https://api.nexray.eu.cc/downloader/v1/ytmp4?url=${encodeURIComponent(text)}`)).json();
console.log(procees)
lenwy.sendMessage(m.chat,{ video: {url: procees.result.url }, caption: `Caption: ${procees.result.title}` }, {quoted: m})
} catch (e) {
m.reply('terjadi error :' + e)
}
}
break


case 'spotify': {
  if (!text) return m.reply("*Mau Cari Lagu Apa?*");
  LenwyLD();
  try {
    var result = await axios.get(`https://api.vreden.my.id/api/v1/search/spotify?query=${text}&limit=3`, { headers: { 'User-Agent': 'Mozilla/5.0' } })
  } catch (error) {
    return m.reply('*Gagal melakukan pencarian, coba lagi nanti.*');
  }

  if (!result || !result.data.result || result.data.result.search_data.length === 0) {
    return m.reply('*Tidak ada hasil ditemukan*');
  }

  let res = result.data.result.search_data; // Ambil semua hasil pencarian
  let audioInfo = res[Math.floor(Math.random() * res.length)];
  console.log(audioInfo.song_link)
  let { data } = await axios.get(`https://api.vreden.my.id/api/v1/download/spotify?url=${audioInfo.song_link}`, { headers: { 'User-Agent': 'Mozilla/5.0' } })
  console.log(data)

  if (data.result) {
    lenwy.sendMessage(m.chat, { audio: { url: data.result.download }, mimetype: 'audio/mp4' }, { quoted: m });
  } else {
    return m.reply('*Gagal mendapatkan audio preview, coba lagi nanti.*');
  }
}
break





case 'ttdl':
case 'tt': {
  if (!text) return m.reply(`*Link Tiktoknya Mana?*`);
  if (!isUrl(text)) return m.reply(mess.link);
  
  LenwyLD();

  try {
    let response = await (await fetch(`https://api.siputzx.my.id/api/d/tiktok/v2?url=${encodeURIComponent(text)}`)).json();
    console.log(response);

    if (!response.status || !response.data) {
      return m.reply("Gagal mengambil data dari API.");
    }

    let data = response.data;
    
    let capt = `*Title:* ${data.text || 'No Title'}\n` +
               `*Author:* ${data.author_nickname}\n` +
               `*Views:* ${data.play_count.toLocaleString()} | *Likes:* ${data.like_count.toLocaleString()}\n` +
               `*Shares:* ${data.share_count.toLocaleString()}`;

    if (data.slides && typeof data.slides === 'object') {
      for (const key in data.slides) {
        const slide = data.slides[key];
        if (slide?.url) {
          await lenwy.sendMessage(m.chat, { image: { url: slide.url } }, { quoted: m });
        }
      }
      m.reply(capt || '');
    } else if (data.no_watermark_link) {
      let videoUrl = data.no_watermark_link;
      await lenwy.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: capt
      }, { quoted: m });
    } else {
      m.reply("Tipe konten tidak dikenali atau media tidak ditemukan.");
    }

    if (data.music_link) {
      let audioTitle = 'Tiktok_Audio';
      await lenwy.sendMessage(m.chat, {
        audio: { url: data.music_link },
        mimetype: 'audio/mpeg',
        fileName: `${audioTitle}.mp3`
      }, { quoted: m });
    }

  } catch (error) {
    console.error("Error TikTok DL:", error);
    m.reply("Terjadi kesalahan saat memproses permintaan.");
  }
}
break





case 'ig':
case 'igdl': {
  if (!text) return m.reply(`*Link Instagramnya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  
  LenwyLD()
  await sleep(200)
  try {
    let ress = await igdl(text);
    console.log(ress);
    
    const total = ress.length;
    const step = Math.floor(Math.sqrt(total));
    const batas = step;
    for (let i = 0; i < step; i++) {
      let responseIg = await axios.head(ress[i].url); 
      let contentType = responseIg.headers['content-type'];
      if (contentType.startsWith('image/')) {
        await lenwy.sendMessage(m.chat, { image: { url: ress[i].url}, caption: mess.success }, { quoted: m });
      } else {
        await lenwy.sendMessage(m.chat, { video: { url: ress[i].url}, caption: mess.success }, { quoted: m });
      }
    }
  } catch (e) {
    m.reply(e)
  }
}
break






case 'fb':
case 'fbdl': {
 if (!text) return m.reply(`*Link Fbnya Mana?*`)
 if (!isUrl(text)) return m.reply(mess.link)
 LenwyLD()
 await sleep(200)
 try {
 let { status, result } = await (await fetch(`https://${global.api.maelyn.domain}/api/facebook?url=${text}`, {
   headers: {
     'x-maelyn-auth': global.api.maelyn.apikey
   }
 })).json()
 if (status === "Success") {
 let videoHD = result.medias.find(media => media.quality === 'hd')
 await lenwy.sendMessage(m.chat, { video: { url: videoHD?.url }}, { quoted: m })
 } else {
 m.reply(`Gagal mengambil data`)
 }
 } catch (error) {
 m.reply(`Error: ${error}`)
 console.log(error)
 }
}
break






case 'twitter':
case 'xdl': {
  if (!text) return m.reply(`*Link Twitternya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  LenwyLD()
  try {
    let response = await (await fetch(`https://${global.api.maelyn.domain}/api/x?url=${text}`, {
      headers: {
        'x-maelyn-auth': global.api.maelyn.apikey
      }
    })).json()
    lenwy.sendMessage(m.chat, { video: { url: response.result.video_hd }, caption: `Caption: ${response.result.desc}` }, { quoted: m })
    await sleep(200)
    await lenwy.sendMessage(m.chat, { audio: { url: response.result.audio }, mimetype: 'audio/mp4' }, { quoted: m });
  } catch (error) {
    console.error(error)
    m.reply(mess.error)
  }
}
break







case 'mediafire': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply(mess.link)
  LenwyLD()
  await sleep(200)
  const baby1 = await (await fetch('https://endpoint.web.id/downloader/mediafire?key=315602&url=' + text)).json()
  const shanz = baby1.result;
  const extension = shanz.filename.split('.').pop().toLowerCase()

  const mimeTypes = {
      'pdf': 'application/pdf',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'mp4': 'video/mp4',
      'mp3': 'audio/mpeg',
      'zip': 'application/zip',
      'txt': 'text/plain',
  };
  const mimeType = mimeTypes[extension] || 'application/octet-stream';

  const result4 = `🔧 *MEDIAFIRE DOWNLOADER*\r\n\r\n🔖 *Name* : ${shanz.name}\r\n💽 *Size* : ${shanz.size}\r\n📌 *Desc* : ${shanz.desc}`
  
  lenwy.sendMessage(m.chat, {
      document: { url: shanz.media },
      fileName: shanz.filename,
      mimetype: mimeType,
      caption: result4
  }, { quoted: m })
}
break

case 'ssweb': 
case 'ssdesktop':
case 'ssdesk': {
  if (!q) return m.reply(`*Contoh ${prefix + command} Link Kamu*`)
  try {
      lenwy.sendMessage(from, { image: { url: `https://api.autoresbot.com/api/ssweb?url=${encodeURIComponent(q)}&apikey=4c04faf21fb8524bad4a9cb7` }, caption: mess.success }, { quoted: m })
  } catch (error) {
    console.error('Error saat memanggil API:', error)
    m.reply('Terjadi kesalahan saat memproses permintaan.')
  }
}
break
        
case 'sswebhp': 
case 'sshp':
case 'sshandphone': {
  if (!q) return m.reply(`*Contoh ${prefix + command} Link Kamu*`)
  const apiUrl = `https://endpoint.web.id/tools/sswebphone?key=315602&url=${encodeURIComponent(q)}`;
  try {
    const response = await axios.get(apiUrl)
    if (response.data.status && response.data.code === 200) {
      const imageUrl = response.data.result;
      lenwy.sendMessage(from, { image: { url: imageUrl }, caption: mess.success }, { quoted: m })
    } else {
      m.reply('Gagal mendapatkan tangkapan layar dari API.')
    }
  } catch (error) {
    console.error('Error saat memanggil API:', error)
    m.reply('Terjadi kesalahan saat memproses permintaan.')
  }
}
break
       
case 'sstab': {
  if (!q) return m.reply(`*Contoh ${prefix + command} Link Kamu*`)
  const apiUrl = `https://endpoint.web.id/tools/sswebtab?key=315602&url=${encodeURIComponent(q)}`;
  try {
    const response = await axios.get(apiUrl)
    if (response.data.status && response.data.code === 200) {
      const imageUrl = response.data.result;
      lenwy.sendMessage(from, { image: { url: imageUrl }, caption: mess.success }, { quoted: m })
    } else {
      m.reply('Gagal mendapatkan tangkapan layar dari API.')
    }
  } catch (error) {
    console.error('Error saat memanggil API:', error)
    m.reply('Terjadi kesalahan saat memproses permintaan.')
  }
}
break

case 'wm': {
  if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
  if (!quoted) return m.reply(`⚠️ Balas sticker dengan caption ${prefix + command}`)
  if (!text) return m.reply(`Contoh: ${prefix + command} teks_packname`)

  try {
    if (quoted.mtype !== 'stickerMessage') return m.reply(`⚠️ Fitur ini khusus untuk reply ke *sticker*!`);
    const webpBuffer = await quoted.download()
    if (!webpBuffer || webpBuffer.length === 0) return m.reply('⚠️ Gagal download sticker!');

    const img = new Image()
    await img.load(webpBuffer)

    const json = {
      "sticker-pack-id": "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2",
      "sticker-pack-name": text,
      "sticker-pack-publisher": '',
      "emojis": ["🤖"] 
    }

    const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    const jsonBuf = Buffer.from(JSON.stringify(json), 'utf-8')
    const padding = Buffer.alloc(jsonBuf.length % 2 === 1 ? 1 : 0)
    const exif = Buffer.concat([exifAttr, jsonBuf, padding])
    exif.writeUInt32LE(jsonBuf.length, 14)
    img.exif = exif
    const finalStickerBuffer = await img.save(null)
    await lenwy.sendMessage(from, { sticker: finalStickerBuffer }, { quoted: m })
  } catch (err) {
    console.error('Error detail:', err)
    m.reply(`⚠️ Error! ${err.message}`)
  }
}
break

case 'pin':
case 'pinterest': {
  if (!text) return m.reply(`*Contoh:* ${prefix + command} FF🗿`)
  
  LenwyLD()
  await sleep(200)
  let push = []
  try {
    async function createImage(url) {
      const { imageMessage } = await generateWAMessageContent({
        image: { url }
      }, {
        upload: lenwy.waUploadToServer
      })
      return imageMessage;
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randIndex]] = [array[randIndex], array[i]];
      }
    }
    
    let { data } = await axios.get(`https://api.nexray.eu.cc/search/pinterest?q=${encodeURIComponent(text)}`)
    
    if (!data.status || !data.result || data.result.length === 0) {
      throw new Error("Gagal mengambil data atau gambar tidak ditemukan")
    }
    
    let res = data.result
    shuffleArray(res) // Acak urutan gambarnya
    res = res.slice(0, 10) // Ambil maksimal 10 gambar

    let i = 1;
    for (let pinData of res) {
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `*${pinData.grid_title || 'Pinterest'}*\n\nImage Ke ${i++}/${res.length}`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: `By ${botname}`
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: '', 
          hasMediaAttachment: false,
          imageMessage: await createImage(pinData.images_url) // Ambil link gambar dari JSON terbaru
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_url",
              "buttonParamsJson": `{"display_text":"Source Pin","url":"${pinData.pin}","merchant_url":"${pinData.pin}"}`
            }
          ]
        })
      })
    }
    
    const botMsg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: '*P I N T E R E S T*', 
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: '*Hasil Dari:* ' + text,
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: [...push]
            })
          })
        }
      }
    }, {quoted: m})

    await lenwy.relayMessage(m.chat, botMsg.message, {
      messageId: botMsg.key.id
    })

  } catch (e) {
    console.log(e) 
    m.reply('Yah error di bagian: ' + e.message) 
  }
}
break

case 'bucin': case 'dare': case 'faktaunik': case 'fml': case 'katabijak': case 'katacinta': case 'katagalau': case 'katahacker': case 'katailham': case 'katasenja': case 'katasindiran': case 'motivasi': case 'nickff': case 'pantun': case 'puisi': case 'quotesislamic': case 'quotespubg': case 'truth': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
const t3xt = require(`./storage/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'quotes': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
var resi = await Quotes()
teks = `\n${global.emoji} *Author: ${resi.author}*\n`
teks = `\n🎁 *Quotes:*\n`
teks = `*${resi.quotes}*\n`
m.reply(teks)
}
break

case 'quotesanime': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
const an1 = JSON.parse(fs.readFileSync("./storage/text/quotesanime.json"))
const r4ndan1 = an1[Math.floor(Math.random() * an1.length)]
const tgt99 = `*Random Quotes Anime*

🍁 *Nama Anime : ${r4ndan1.anime}*
🍁 *Nama Character : ${r4ndan1.character}*
🍁 *Episode : ${r4ndan1.episode}*

🎁 *Quotes : ${r4ndan1.quotes}*`
lenwy.sendMessage(from, { text: tgt99 }, { quoted: m })
}
break

case 'meme': {
var reis = await JalanTikusMeme()
teks = ""
teks += "*Random Meme*\n\n"
teks += `🎁 *Source Meme :* ${reis}`
teks += ""
lenwy.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
}
break

case 'tourl': {
if (!/image/.test(mime) && !/video/.test(mime)) return m.reply(`*Mana Foto Atau Video Nya?*`)
if (/image/.test(mime)) {
LenwyLD()
await sleep(200)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
m.reply(util.format(anu))
} else if (/video/.test(mime)) {
  let q = m.quoted ? m.quoted : m;

    let media = await q.download()
    let link = await uploader60Minute(media)
    console.log(link)
    await m.reply(`${link}`)
} else {
m.reply(`Mokad kah? Chat Developer!!!`)
}
}
break

case 'tourl2': {
if (!/image/.test(mime) && !/video/.test(mime)) return m.reply(`*Mana Foto Atau Video Nya?*`)
if (/image/.test(mime)) {
LenwyLD()
await sleep(200)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploaderLebih(media)
m.reply(util.format(anu))
} else if (/video/.test(mime)) {
  let q = m.quoted ? m.quoted : m;

    let media = await q.download()
    let link = await uploader60Minute(media)
    console.log(link)
    await m.reply(`${link}`)
} else {
m.reply(`Mokad kah? Chat Developer!!!`)
}
}
break

case 'tourlvid': {
if (!/video/.test(mime)) return m.reply(`*Mana Video Nya?*`)
LenwyLD()
await sleep(200)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
if (/video/.test(mime)) {
  let q = m.quoted ? m.quoted : m;

    let media = await q.download()
    let link = await uploader60Minute(media)
    await m.reply(`${link}`)
} else if (/video/.test(mime)) {
let anu = await uploader60Minute(media)
m.reply(util.format(anu))
} else {
m.reply(`Mokad kah? Chat Developer!!!`)
}
await fs.unlinkSync(media)
}
break

case 'reminder': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (!args[0] || !args[1]) return m.reply('*Format : Reminder Waktu s/m/h/d Pesan*\n\n📑 *Contoh : Reminder 30m Jangan Lupa Sholat*')
const time = toMs(args[0])
const message = args.slice(1).join(' ')
setTimeout(() => {
lenwy.sendMessage(from, { text : `*Reminder Untuk @${sender.split("@")[0]}*\n\n📑 *Dengan Pesan :* ${message}`, contextInfo:{mentionedJid:[sender]}}, { quoted: m })}, time)
m.reply(`📑 *Berhasil Mengatur Reminder Untuk ${args[0]} ${args[1]} Ke Depan*`)
}
break

case 'couple': {
LenwyLD()
await sleep(200)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
lenwy.sendMessage(from, { image: { url: random.male }, caption: `🎁 *Couple Male*` }, {quoted:m})
lenwy.sendMessage(from, { image: { url: random.female }, caption: `🎁 *Couple Female*` }, {quoted:m})
}
break

case 'getname': {
if (qtod === "true") {
namenye = await lenwy.getName(m.quoted.sender)
m.reply(`Namanya: ${namenye}`)
} else if (qtod === "false") {
lenwy.sendMessage(from, {text:"✉️ *Reply Orangnya*"}, {quoted:m})
}
}
break

case 'getpic': {
if (qtod === "true") {
try {
pporg = await lenwy.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
lenwy.sendMessage(from, { image : { url : pporg }, caption:`*Selesai*` }, {quoted:m})
} else if (qtod === "false") {
try {
pporgs = await lenwy.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
lenwy.sendMessage(from, { image : { url : pporgs }, caption:`*Selesai*` }, {quoted:m})
}
}
break

case 'block': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(200)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'unblock': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(200)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'cwr': {
if (!text) return m.reply('*Format : Cwr [Total Match] [Winrate Saat Ini] [Target Winrate]*\n\n📑 *Contoh : Cwr 1200 67% 89%*')
var cwl = text.split(' ')
if (!cwl || cwl.length !== 3) return m.reply('*Format : Cwr [Total Match] [Winrate Saat Ini] [Target Winrate]*\n\n📑 *Contoh : Cwr 1200 67% 89%*')          
const tMatch = parseFloat(cwl[0])
const tWr = parseFloat(cwl[1])
const wrReq = parseFloat(cwl[2])          
if (isNaN(tMatch) || isNaN(tWr) || isNaN(wrReq)) {
return m.reply('⚠️ *Pastikan Semuanya Berupa Angka*')
}
let tLose = tMatch * (100 - tWr) / 100;
let seratusPersen = tLose * (100 / (100 - wrReq))
let final = seratusPersen - tMatch;
const tekl = `*Winrate Calculator Mobile Legend*

📑 *Data Yang Diberikan*
 *⨠ Total Petandingan : ${tMatch}*
 *⨠ Winrate Saat Ini : ${tWr}%*
 *⨠ Target Winrate : ${wrReq}%*

🎁 *Hasil :*
*Butuh ${Math.round(final)} Pertandingan Tanpa Kalah Untuk Mencapai ${wrReq}% Winrate*`;
m.reply(tekl)
}
break

case 'afk': {
if (!isAdmins) return m.reply (mess.admin)
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (text.length > 100) return m.reply(`*Maksimal 100 Karakter*`)    
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
lenwy.sendMessage(m.chat, { text: `*${pushname} Sedang AFK*\n⚠️ *Dengan Alasan :* ${text ? text : 'Tidak Ada'}` })
}
break

case 'tebak': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
 if (args[0] === "gambar") {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendImage(from, result.img, `*Silahkan Jawab Soal Di Atas Ini*\n\n📑 *Deskripsi :* ${result.deskripsi}\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakgambar[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Gambar*`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *${result.soal}*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakkata[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Kata*` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *Pertanyaan :* ${result.soal}\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text:`🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakkalimat[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Kalimat*`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Ini Adalah Lirik Dari Lagu? :* \n\n📦 *${result.soal}?*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebaklirik[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Lirik*`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Jawablah Pertanyaan Berikut :*\n📦 *${result.soal}*\n🕒 *Waktu : 60s*`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text:`🕒 *Waktu Habis*\n🎁 *Jawaban : ${caklontong[m.sender.split('@')[0]]}*\n\n📑 *Deskripsi : ${caklontong_desk[m.sender.split('@')[0]]}* \n\n📣 *Ingin Bermain Lagi? Ketik Tebak Lontong*`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break

case 'kuismath':
case 'math': {
  if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
  if (kuismath.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
  if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}
Contoh penggunaan: ${prefix}math medium`);
  let { genMath, modes } = require('./library/math')
  let result = await genMath(text.toLowerCase())
  await lenwy.sendText(from,
    `*Berapa Hasil Dari : ${result.soal.toLowerCase()}*?
🕒 *Waktu : ${(result.waktu / 1000).toFixed(2)} detik*`,
  m).then(() => {
    kuismath[m.sender.split('@')[0]] = result.jawaban
  })
  await sleep(result.waktu)
  if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    m.reply("🕒 *Waktu Habis*\n🎁 *Jawaban :* " + kuismath[m.sender.split('@')[0]])
    delete kuismath[m.sender.split('@')[0]]
  }
}
break

case 'tebakangka': {
    if (gameState.angkaAcak === null) {
        gameState.angkaAcak = Math.floor(Math.random() * 20) + 1;
        gameState.jumlahTebakan = 0; // Reset jumlah tebakan
        m.reply('Aku sudah memikirkan sebuah angka antara 1-20. Coba tebak!')
    } else {
        const tebakan = parseInt(text)
        if (isNaN(tebakan) || tebakan < 1 || tebakan > 20) {
            return m.reply('Tebakan harus berupa angka antara 1-20.')
        }

        gameState.jumlahTebakan++;

        if (tebakan < gameState.angkaAcak) {
            return m.reply("Tebakan Anda terlalu rendah. Coba lagi!")
        } else if (tebakan > gameState.angkaAcak) {
            return m.reply("Tebakan Anda terlalu tinggi. Coba lagi!")
        } else {
            m.reply(`Selamat! Anda telah menebak angka ${gameState.angkaAcak} dengan ${gameState.jumlahTebakan} tebakan.`)
            gameState.angkaAcak = null;
        }
    }
}
break

case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
let TicTacToe = require("./library/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('⚠️ *Kamu Masih Didalam Permainan Atau Menunggu Lawan Bermain*\n\n> Ketik delttc atau nyerah untuk keluar dari permainan')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('*Lawan Bermain Ditemukan*')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('*Menunggu Lawan Bermain*' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case 'delttc': case 'delttt': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) return m.reply('Kamu sedang tidak berada di room tictactoe!')
delete this.game[roomnya.id]
m.reply('Berhasil delete session room tictactoe!')
}
break   

case 'del':
case 'delete': {
 if (!isPrem && !isAdmins) return m.reply(mess.admin)
 if (!isBotAdmins) return m.reply(mess.botAdmin)
 if (!m.quoted) return m.reply("*Balas Pesan Yang Ingin Dihapus Oleh Bot*")
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 await lenwy.sendMessage(m.chat, {
 delete: {
 remoteJid: m.chat,
 id: m.quoted.id,
 participant: m.quoted.sender,
 },
 })
}
break

case 'done': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}
  const teksDefault = `         ∧    ∧ ‎
 ☆ (๑╹ꇴ╹๑)  ☆
‎───〇─〇──ೇ .꒰ !! ꒱ 
╭┄꯭───ׂ──────꒰🫧꒱─────ׂ┄꯭───ׂ╮
│ ᥡᥱᥡᥡᥡ ⍴ᥱsᥲᥒᥲᥒ {TAGREPLY}
│ 𝗍ᥱᥣᥲһ sᥙᥴᥴsᥱs
│ sіᥣᥲkᥲᥒ ძі ᥴᥱk ȷᥲᥒgᥲᥒ ᥣᥙ⍴ᥲ ss ᥡᥲᥕᥕ 
│(●'▽'●)ゝ
│
│ 𝝑𝝔 𝘱𝘦𝘴𝘢𝘯𝘢𝘯 : {PESANAN}
│ 𝝑𝝔 𝘵𝘢𝘯𝘨𝘨𝘢𝘭 : {HARI}, {TANGGAL} {NAMABULAN} {TAHUN}
│ 𝝑𝝔 𝘸𝘢𝘬𝘵𝘶 : {JAM}:{MENIT}:{DETIK} WIB
│ 𝝑𝝔 𝘴𝘵𝘢𝘵𝘶𝘴 : Succes
╰──ׂ┄꯭───ׂ┄꯭──────ׂ┄꯭───────╯`

  if (!text && !m.quoted) {
    return m.reply(`*Pengaturan fitur ${command}*

Ketik:
- *${prefix + command}* sambil reply pesan customer untuk mengirim done
- *${prefix + command} edit teksnya* untuk mengubah template

*Placeholder yang bisa digunakan:*
- {GROUPNAME} = nama grup
- {TAGDIRI} = tag admin/pengirim
- {TAGREPLY} = tag user yang direply
- {JAM} = jam saat ini
- {MENIT} = menit saat ini
- {DETIK} = detik saat ini
- {HARI} = nama hari saat ini
- {TANGGAL} = tanggal saat ini
- {BULAN} = angka bulan saat ini
- {TAHUN} = tahun saat ini
- {NAMABULAN} = nama bulan saat ini
- {PESANAN} = isi text setelah command

*Contoh:*
${prefix + command} edit Halo @tagreply

Pesanan:
@pesanan

Selesai pada @hari, @tanggal @namabulan @tahun
Jam @jam:@menit WIB`)
  }

  if (args[0] === 'edit') {
    const newText = args.slice(1).join(' ').trim()
    global.datagc[m.chat].text_done = newText
    fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
    return m.reply(newText ? mess.success : 'Direset ke bawaan.')
  }
  if (!m.quoted) return m.reply('⚠️ *Reply pesan si pemesan*')
  const quotedSender = m.quoted.sender
  const query = q ? `*${q}*` : '-'
  const usertag = `@${m.sender.split('@')[0]}`
  const tagReply = `@${quotedSender.split('@')[0]}`
  let settextdone = global.datagc[m.chat].text_done || teksDefault
  const replacers = {
    '{GROUPNAME}': groupName,
    '{TAGDIRI}': usertag,
    '{TAGREPLY}': tagReply,
    '{JAM}': jamnya,
    '{MENIT}': menitnya,
    '{DETIK}': detiknya,
    '{HARI}': harinya,
    '{TANGGAL}': tanggalnya,
    '{BULAN}': bulannya,
    '{TAHUN}': tahunnya,
    '{NAMABULAN}': namabulannya,
    '{PESANAN}': query
  }
  for (const [key, value] of Object.entries(replacers)) {
    settextdone = settextdone.replaceAll(key, value)
  }
  await lenwy.sendMessage(m.chat, { text: settextdone, mentions: [quotedSender, m.sender] }, { quoted: m })
}
break

case 'proses': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}

  const teksDefault = `         ∧    ∧ ‎
 ☆ (๑╹ꇴ╹๑)  ☆
‎───〇─〇──ೇ .꒰ !! ꒱ 
╭┄꯭───ׂ──────꒰🫧꒱─────ׂ┄꯭───ׂ╮
│ ⍴ᥱsᥲᥒᥲᥒ {TAGREPLY}
│ sᥱძᥲᥒg ძі ⍴r᥆sᥱs
│ m᥆һ᥆ᥒ ᥙᥒ𝗍ᥙk mᥱᥒᥙᥒggᥙ (๑'ᴗ')ゞ
│
│ 𝝑𝝔 𝘱𝘦𝘴𝘢𝘯𝘢𝘯 : {PESANAN}
│ 𝝑𝝔 𝘵𝘢𝘯𝘨𝘨𝘢𝘭 : {HARI}, {TANGGAL} {NAMABULAN} {TAHUN}
│ 𝝑𝝔 𝘸𝘢𝘬𝘵𝘶 : {JAM}:{MENIT}:{DETIK} WIB
│ 𝝑𝝔 𝘴𝘵𝘢𝘵𝘶𝘴 : Proses
╰──ׂ┄꯭───ׂ┄꯭──────ׂ┄꯭───────╯`

  if (!text && !m.quoted) {
    return m.reply(`*Pengaturan fitur ${command}*

Ketik:
- *${prefix + command}* sambil reply pesan customer untuk mengirim pesan proses
- *${prefix + command} edit teksnya* untuk mengubah template

*Placeholder yang bisa digunakan:*
- {GROUPNAME} = nama grup
- {TAGDIRI} = tag admin/pengirim
- {TAGREPLY} = tag user yang direply
- {JAM} = jam saat ini
- {MENIT} = menit saat ini
- {DETIK} = detik saat ini
- {HARI} = nama hari saat ini
- {TANGGAL} = tanggal saat ini
- {BULAN} = angka bulan saat ini
- {TAHUN} = tahun saat ini
- {NAMABULAN} = nama bulan saat ini
- {PESANAN} = isi text setelah command

*Contoh:*
${prefix + command} edit Halo {TAGREPLY}

Pesanan:
{PESANAN}

Sedang diproses pada {HARI}, {TANGGAL} {NAMABULAN} {TAHUN}
Jam {JAM}:{MENIT} WIB`)
  }

  if (args[0] === 'edit') {
    const newText = args.slice(1).join(' ').trim()
    global.datagc[m.chat].text_proses = newText
    fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
    return m.reply(newText ? mess.success : 'Direset ke bawaan.')
  }
  if (!m.quoted) return m.reply('⚠️ *Reply pesan si pemesan*')
  const quotedSender = m.quoted.sender
  const query = q ? `*${q}*` : '-'
  const usertag = `@${m.sender.split('@')[0]}`
  const tagReply = `@${quotedSender.split('@')[0]}`
  let settextproses = global.datagc[m.chat].text_proses || teksDefault
  const replacers = {
    '{GROUPNAME}': groupName,
    '{TAGDIRI}': usertag,
    '{TAGREPLY}': tagReply,
    '{JAM}': jamnya,
    '{MENIT}': menitnya,
    '{DETIK}': detiknya,
    '{HARI}': harinya,
    '{TANGGAL}': tanggalnya,
    '{BULAN}': bulannya,
    '{TAHUN}': tahunnya,
    '{NAMABULAN}': namabulannya,
    '{PESANAN}': query
  }

  for (const [key, value] of Object.entries(replacers)) {
    settextproses = settextproses.replaceAll(key, value)
  }

  await lenwy.sendMessage(m.chat,{ text: settextproses, mentions: [quotedSender, m.sender] },{ quoted: m })
}
break

case 'ffstalk': {
 if (isBan) return m.reply(mess.ban)
 if (!text) return m.reply('*Contoh :*\n> *ffstalk* 587531837')
try {
 let checkerResult = await (await fetch(`https://${global.api.ham.domain}/stalk/ff?apikey=${global.api.ham.apikey}&id=${text}`)).json()
console.log(checkerResult)
 m.reply(`Username: ${checkerResult.result.nickname || '-'}
Region: ${checkerResult.result.region || '-'}
Id: ${text}`)
} catch (e) {
 m.reply('terjadi error :' + e)
}
}
break

case 'stalkml':     
case 'mlstalk': {
 if (!q) return m.reply(`Contoh ${prefix + command} 696964467(8770)`)
 let parts = q.split("(");
 let id = parts[0].trim();
 let serverId = parts[1] ? parts[1].replace(")", "").trim() : "";

 let nicknameUser = '-';
 let regionUser = '-';
 let checkerResult = {};
 try {
 checkerResult = await (await fetch(`https://deoberon-api.vercel.app/stalk/mlbb?apikey=merl&userId=${id}&zoneId=${serverId}`)).json();
 } catch (e) {
 console.error('Gagal fetch checkerResult:', e);
 }

const matchFlag = checkerResult.country?.match(/(.*?)(🇦🇨|🇦🇩|🇦🇪|🇦🇫|🇦🇬|🇦🇮|🇦🇱|🇦🇲|🇦🇴|🇦🇶|🇦🇷|🇦🇸|🇦🇹|🇦🇺|🇦🇼|🇦🇽|🇦🇿|🇧🇦|🇧🇧|🇧🇩|🇧🇪|🇧🇫|🇧🇬|🇧🇭|🇧🇮|🇧🇯|🇧🇱|🇧🇲|🇧🇳|🇧🇴|🇧🇶|🇧🇷|🇧🇸|🇧🇹|🇧🇻|🇧🇼|🇧🇾|🇧🇿|🇨🇦|🇨🇨|🇨🇩|🇨🇫|🇨🇬|🇨🇭|🇨🇮|🇨🇰|🇨🇱|🇨🇲|🇨🇳|🇨🇴|🇨🇷|🇨🇺|🇨🇻|🇨🇼|🇨🇽|🇨🇾|🇨🇿|🇩🇪|🇩🇯|🇩🇰|🇩🇲|🇩🇴|🇩🇿|🇪🇨|🇪🇪|🇪🇬|🇪🇷|🇪🇸|🇪🇹|🇪🇺|🇫🇮|🇫🇯|🇫🇰|🇫🇲|🇫🇴|🇫🇷|🇬🇦|🇬🇧|🇬🇩|🇬🇪|🇬🇫|🇬🇬|🇬🇭|🇬🇮|🇬🇱|🇬🇲|🇬🇳|🇬🇵|🇬🇶|🇬🇷|🇬🇹|🇬🇺|🇬🇼|🇬🇾|🇭🇰|🇭🇲|🇭🇳|🇭🇷|🇭🇹|🇭🇺|🇮🇨|🇮🇩|🇮🇪|🇮🇱|🇮🇲|🇮🇳|🇮🇴|🇮🇶|🇮🇷|🇮🇸|🇮🇹|🇯🇪|🇯🇲|🇯🇴|🇯🇵|🇰🇪|🇰🇬|🇰🇭|🇰🇮|🇰🇲|🇰🇳|🇰🇵|🇰🇷|🇰🇼|🇰🇾|🇰🇿|🇱🇦|🇱🇧|🇱🇨|🇱🇮|🇱🇰|🇱🇷|🇱🇸|🇱🇹|🇱🇺|🇱🇻|🇱🇾|🇲🇦|🇲🇨|🇲🇩|🇲🇪|🇲🇫|🇲🇬|🇲🇭|🇲🇰|🇲🇱|🇲🇲|🇲🇳|🇲🇴|🇲🇵|🇲🇶|🇲🇷|🇲🇸|🇲🇹|🇲🇺|🇲🇻|🇲🇼|🇲🇽|🇲🇾|🇲🇿|🇳🇦|🇳🇨|🇳🇪|🇳🇫|🇳🇬|🇳🇮|🇳🇱|🇳🇴|🇳🇵|🇳🇷|🇳🇺|🇳🇿|🇴🇲|🇵🇦|🇵🇪|🇵🇫|🇵🇬|🇵🇭|🇵🇰|🇵🇱|🇵🇲|🇵🇳|🇵🇷|🇵🇸|🇵🇹|🇵🇼|🇵🇾|🇶🇦|🇷🇪|🇷🇴|🇷🇸|🇷🇺|🇷🇼|🇸🇦|🇸🇧|🇸🇨|🇸🇩|🇸🇪|🇸🇬|🇸🇭|🇸🇮|🇸🇯|🇸🇰|🇸🇱|🇸🇲|🇸🇳|🇸🇴|🇸🇷|🇸🇸|🇸🇹|🇸🇻|🇸🇾|🇸🇿|🇸🇽|🇸🇾|🇹🇦|🇹🇨|🇹🇩|🇹🇫|🇹🇬|🇹🇭|🇹🇯|🇹🇰|🇹🇱|🇹🇲|🇹🇳|🇹🇴|🇹🇷|🇹🇹|🇹🇻|🇹🇼|🇹🇿|🇺🇦|🇺🇬|🇺🇸|🇺🇾|🇺🇿|🇻🇦|🇻🇨|🇻🇪|🇻🇬|🇻🇮|🇻🇳|🇻🇺|🇼🇫|🇼🇸|🇽🇰|🇾🇪|🇾🇹|🇿🇦|🇿🇲|🇿🇼)$/);
let regionFlag = matchFlag[2] || undefined

 let topupText = "";
 try {
 let urlFirstTopup = await axios.get(`https://${global.api.ham.domain}/stalk/ml-first-topup?apikey=${global.api.ham.apikey}&id=${id}&zoneId=${serverId}`);
 let topupJson = urlFirstTopup?.data;

 if (topupJson?.result?.first_recharge?.length > 0) {
 for (let pkg of topupJson.result.first_recharge) {
 topupText += `• ${pkg.title} 💎: ${pkg.available ? "✅" : "❌"}\n`;
 }
 } else {
 topupText += "-";
 }
 
 } catch (e) {
 console.error('Gagal fetch firstTopup:', e);
 topupText += "-";
 }
 nicknameUser = checkerResult?.username
 regionUser = matchFlag[1] || checkerResult?.country
m.reply(`👤 *Username:* ${nicknameUser}
🆔 *ID:* ${id}
🌐 *Server ID:* ${serverId}
📍 *Region:* ${regionUser} 
🏳 *Bendera:* ${regionFlag}

🛒 *First Recharge:*
${topupText}`);
}
break

case 'jadinyata':
case 'toreal':
case 'toanime':
case 'jadianime': {
    if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    const { key } = await lenwy.sendMessage(m.chat, { text: mess.wait }, { quoted: m })
    const type = ['jadinyata', 'toreal'].includes(command) ? 'anime2real' : 'anime2d'

    try {
        const media = await lenwy.downloadAndSaveMediaMessage(quoted)
        const url = await uploader60Minute(media)

        const res = await fetch(`${api.xterm.url}/api/img2img/filters?action=${type}&url=${url}&key=${api.xterm.key}`).then(v => v.json())
        if (!res.status) return m.reply(res.msg || 'Error!')

        let i = 0
        while (i < 55) {
            const s = await fetch(`${api.xterm.url}/api/img2img/filters/batchProgress?id=${res.id}`).then(v => v.json())
            await lenwy.sendMessage(m.chat, { text: s.progress || 'Prepare...', edit: key }, { quoted: m })

            if (s.status === 3) return s.url
                ? lenwy.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m })
                : m.reply('Gambar tidak tersedia. Coba lagi.')

            if (s.status === 4) return m.reply('Terjadi kesalahan. Gunakan gambar lain.')

            await new Promise(r => setTimeout(r, 5000))
            i++
        }
    } catch (e) {
        console.error(e)
        m.reply(e.message || 'Terjadi kesalahan')
    }
}
break

case 'tocyberpunk':
case 'jadicyberpunk': {
    if (isBan) return m.reply(mess.ban)
    if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    try {
        m.reply('Process converting image, mohon tunggu...')
        const q = m.quoted || m
        const url = await uploader60Minute(await q.download())
        const res = await fetch(`https://api.nyxs.pw/ai-image/jadicyberpunk?url=${url}`).then(v => v.json())

        lenwy.sendMessage(m.chat, { image: { url: res.result }, caption: 'Nih Bos' }, { quoted: m })
    } catch (e) {
        console.error(e)
        m.reply('Harap coba beberapa saat lagi')
    }
}
break

case 'todreamscape':
case 'jadidreamscape': {
    if (isBan) return m.reply(mess.ban)
    if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    try {
        m.reply('Process converting image, mohon tunggu...')
        const q = m.quoted || m
        const url = await uploader60Minute(await q.download())
        const res = await fetch(`https://api.nyxs.pw/ai-image/jadidreamscape?url=${url}`).then(v => v.json())

        lenwy.sendMessage(m.chat, { image: { url: res.result }, caption: 'Nih Bos' }, { quoted: m })
    } catch (e) {
        console.error(e)
        m.reply('Harap coba beberapa saat lagi')
    }
}
break

case 'tocomic':
case 'jadicomic': {
    if (isBan) return m.reply(mess.ban)
    if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    try {
        m.reply('Process converting image, mohon tunggu...')
        const q = m.quoted || m
        const url = await uploader60Minute(await q.download())
        const res = await fetch(`https://api.nyxs.pw/ai-image/jadivaporwave?url=${url}`).then(v => v.json())

        lenwy.sendMessage(m.chat, { image: { url: res.result }, caption: 'Nih Bos' }, { quoted: m })
    } catch (e) {
        console.error(e)
        m.reply('Harap coba beberapa saat lagi')
    }
}
break

case 'todonghua':
case 'jadidonghua': {
    if (isBan) return m.reply(mess.ban)
    if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    try {
        m.reply('Process converting image, mohon tunggu...')
        const q = m.quoted || m
        const url = await uploader60Minute(await q.download())
        const res = await fetch(`https://api.nyxs.pw/ai-image/jadianime?url=${url}`).then(v => v.json())

        lenwy.sendMessage(m.chat, { image: { url: res.result }, caption: 'Nih Bos' }, { quoted: m })
    } catch (e) {
        console.error(e)
        m.reply('Harap coba beberapa saat lagi')
    }
}
break

case 'todisney':
case 'jadidisney': {
    if (isBan) return m.reply(mess.ban)
    if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    try {
        m.reply('Process converting image, mohon tunggu...')
        const q = m.quoted || m
        const url = await uploader60Minute(await q.download())
        const res = await fetch(`https://api.nyxs.pw/ai-image/jadidisney?url=${url}`).then(v => v.json())

        lenwy.sendMessage(m.chat, { image: { url: res.result }, caption: 'Nih Bos' }, { quoted: m })
    } catch (e) {
        console.error(e)
        m.reply('Harap coba beberapa saat lagi')
    }
}
break

case 'toghibli':
case 'jadighibli': {
    if (isBan) return m.reply(mess.ban)
    if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    try {
        m.reply('Process converting image, mohon tunggu...')
        const q = m.quoted || m
        const url = await uploader60Minute(await q.download())
        const res = await fetch(`https://api.nyxs.pw/ai-image/jadighibli?url=${url}`).then(v => v.json())

        lenwy.sendMessage(m.chat, { image: { url: res.result }, caption: 'Nih Bos' }, { quoted: m })
    } catch (e) {
        console.error(e)
        m.reply('Harap coba beberapa saat lagi')
    }
}
break

case 'fluxschenell':
case 'flux':
case 'txt2flux':
case 'texttoflux': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`*Mau Gambar Apa?*`)
LenwyLD()
await sleep(200)
try{
let result = await (await fetch(`https://endpoint.web.id/ai/flux-schnell?key=315602&prompt=${text}`)).json()
lenwy.sendMessage(m.chat, { image: { url: result.result }, caption: `Gambar untuk prompt: "${text}"` }, { quoted: m })
} catch (error) {
m.reply(mess.error)
}
}
break

case 'photoleap':
case 'txt2photoleap':
case 'texttophotoleap': {
    if (isBan) return m.reply(mess.ban)
    if (!text) return m.reply(`*Mau Gambar Apa?*`)
    LenwyLD()
    await sleep(200)
    try {
        let result = await (await fetch(`https://endpoint.web.id/ai/photoleap?key=315602&prompt=${text}`)).json()
        let imageUrl = result.result.result_url;
        lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Gambar untuk prompt: "${text}"` }, { quoted: m })
    } catch (error) {
        console.error(error)
        m.reply(mess.error)
    }
}
break

case '2waifu':
case 'towaifu':
case 'txt2waifu':
case 'texttowaifu': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply(`*Mau Gambar Apa?*`)
  LenwyLD()
  await sleep(200)
  try {
      let result = await (await fetch(`https://endpoint.web.id/ai/sdxl-waifu?key=315602&prompt=${text}`)).json()
      let imageUrl = result.result.image;
      lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Gambar untuk prompt: "${text}"` }, { quoted: m })
  } catch (error) {
      console.error(error)
      m.reply(mess.error)
  }
}
break

case 'readmore': {
m.reply(`*Pemisahnya adalah "|"*\n\n*Contoh:*\n> ${command} Hai, |Nama Saya Adalah ${botname}`)
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
lenwy.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break

case 'tinyurl': {
  if (!text) return m.reply(`*Mana Link Yang Akan Di Pendekkan?*`)

  let urlToShorten = q; // Pastikan q berisi URL yang valid
  let response = await fetch(`https://api.ryzendesu.vip/api/tool/tinyurl?url=${urlToShorten}`)
  
  if (!response.ok) {
      return m.reply(`*Error: ${response.status} ${response.statusText}*`)
  }
  
  let result = await response.json()
  let shortUrl = result.shortUrl;
  m.reply(shortUrl)
}
break

case 'rvo':
case 'readviewonce': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!isQuotedViewOnce) return m.reply('*Reply Foto, Video Atau Voice Note Yang Di View Once*')
let type = m.quoted.mtype
let media = await downloadContentFromMessage(quoted, type === "audioMessage" ? "audio" : type === "imageMessage" ? "image" : "video");
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await lenwy.sendMessage(m.chat, { video: buffer, caption: `Caption: ${m.quoted?.fakeObj?.message.videoMessage.text || ''}` }, {quoted: m})
} else if (/image/.test(type)) {
await lenwy.sendMessage(m.chat, { image: buffer, caption: `Caption: ${m.quoted?.fakeObj?.message.imageMessage.text || ''}` }, {quoted: m})
} else if (/audio/.test(type)) {
await lenwy.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
}
}
break

case 'tovn': {
  if (!/audio|video/.test(mime)) return m.reply('*Reply ke pesan audio atau video*');

  if (/video/.test(mime)) {
    let media;
    try {
      media = await downloadContentFromMessage(quoted, type === "audioMessage" ? 'audio' : 'video');
    } catch (err) {
      console.log('Error saat download media:', err);
      return m.reply('*Gagal mengunduh media*');
    }
  
    if (!media) {
      return m.reply('*Media tidak valid*');
    }
  
    const tempFilePath = path.join(__dirname, `temp_${Date.now()}.${mime.includes('audio') ? 'mp3' : 'mp4'}`);
    const outputFilePath = path.join(__dirname, `output_${Date.now()}.mp3`);
    let buffer = Buffer.from([]);
  
    try {
      for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
      }
      fs.writeFileSync(tempFilePath, buffer);
    } catch (err) {
      console.log('Error saat memproses buffer:', err);
      return m.reply('*Gagal memproses media*');
    }
  
    if (mime.includes('video')) {
      try {
        await new Promise((resolve, reject) => {
          exec(`ffmpeg -i "${tempFilePath}" -vn -acodec libmp3lame -y "${outputFilePath}"`, (err) => {
            if (err) return reject(err);
            resolve();
          });
        });
        buffer = fs.readFileSync(outputFilePath);
      } catch (err) {
        console.log('Error saat konversi video ke audio:', err);
        return m.reply('*Gagal mengonversi video ke audio*');
      } finally {
        fs.unlinkSync(tempFilePath)
        if (fs.existsSync(outputFilePath)) fs.unlinkSync(outputFilePath);
      }
    }
  
    try {
      await lenwy.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    } catch (error) {
      console.log('Error saat mengirim pesan:', error);
    }  
  } else if (/audio/.test(mime)) {
    let media;
    try {
      media = await downloadContentFromMessage(quoted, 'audio');
    } catch (err) {
      console.log('Error saat mengunduh media:', err);
      return m.reply('*Gagal mengunduh media. Pastikan Anda mereply ke pesan audio yang valid.*');
    }
  
    let buffer = Buffer.from([]);
    try {
      for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
      }
    } catch (err) {
      console.log('Error saat memproses buffer:', err);
      return m.reply('*Gagal memproses audio.*');
    }
  
    if (buffer.length === 0) {
      return m.reply('*Audio kosong atau gagal diproses.*');
    }
  
    try {
      await lenwy.sendMessage(m.chat, {
        audio: buffer,
        mimetype: 'audio/mp4',
        ptt: true
      }, { quoted: m });
    } catch (error) {
      console.log('Error saat mengirim pesan:', error);
      return m.reply('*Gagal mengirim audio.*');
    }
  }
}
break

case 'bingimg': {
await lenwy.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "✅️",key: m.key,}
})
if (!text) return m.reply('Masukan Gambarannya\nContoh:\nAnime cowok memakai baju hitam sedang coding bertuliskan ${botname}')
m.reply('*Proses ini membutuhkan waktu beberapa saat silahkan tunggu*')
try {
let img = await fetchJson(`http://15.235.142.199/api/ai/bingAi?prompt=${text}&apikey=DdUFIJY3sIGZW0g`)
let imgs = img.image
let c = 0
for (let ims of img.image) {
if (c == 0) await lenwy.sendMessage(m.chat, { image: { url: ims }, caption: `*[ V1 ]* Bing ${botname} ☑\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}` }, { quoted: m })
else await lenwy.sendMessage(m.sender, { image: { url: ims }}, { quoted: m })
c += 4
await sleep(200)
}
} catch {
m.reply('Terjadi kesalahan!')
}
}
break

case 'texttospeech':
case 'tekstospeech':
case 'txt2speech':
case 'tts': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (args.length == 0) return m.reply(`*Mo Convert Text Apa Ke Suara?*`)
try {
  let result = await (await fetch(`https://deoberon-api.vercel.app/tools/text-to-speech?text=${q}`)).json()
  let data = result.result
  let dataTts = data.find(u => u.voice_name.toLowerCase() == "eminem")
  lenwy.sendMessage(m.chat, { audio: { url: dataTts.eminem }, mimetype: 'audio/mp4' })
} catch (e) {
m.reply('Error')
console.log(e)
}
}
break

case 'sdxl':
case 'texttoanime':
case 'tekstoanime':
case 'text2anime':
case 'teks2anime':
case 'txt2anime': {
if (!text) return m.reply(`*Mau Gambar Apa?*`)
LenwyLD
await sleep(200)
LenwyLD()
await sleep(200)
try{
let mauGambar = text
let result = await (await fetch(`https://endpoint.web.id/ai/sdxl-anime?key=315602&prompt=${q}`)).json()
lenwy.sendMessage(m.chat, { image: { url: result.result.image }, caption: `Gambar untuk prompt: "${mauGambar}"` }, { quoted: m })
} catch (error) {
m.reply(mess.error)
}
}
break

case 'welcome': {
  if (!isAdmins) return m.reply(mess.admin)
  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}
  if (!text) {
    return m.reply(`*Pengaturan fitur ${command}*

Ketik:
- *${prefix + command} on* untuk mengaktifkan
- *${prefix + command} off* untuk menonaktifkan
- *${prefix + command} edit teksnya* untuk mengubah teks welcome

*Placeholder yang bisa dipakai:*
- {GROUPNAME} = nama grup
- {USERTAG} = tag user yang masuk
- {JAM} = jam sekarang
- {MENIT} = menit sekarang
- {DETIK} = detik sekarang
- {HARI} = nama hari
- {TANGGAL} = tanggal
- {BULAN} = angka bulan
- {TAHUN} = tahun
- {NAMABULAN} = nama bulan

*Contoh:*
${prefix + command} edit Halo {USERTAG}, selamat datang di {GROUPNAME}
Masuk pada {HARI}, {TANGGAL} {NAMABULAN} {TAHUN} jam {JAM}:{MENIT}`)
  }
  if (args[0] === 'on') {
    global.db.data.chats[m.chat].wlcm = true
    fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
    return m.reply('Fitur Welcome berhasil diaktifkan.')
  }
  if (args[0] === 'off') {
    global.db.data.chats[m.chat].wlcm = false
    fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
    return m.reply('Fitur Welcome berhasil dinonaktifkan.')
  }
  if (args[0] === 'edit') {
    const teksnye = args.slice(1).join(' ').trim()
    global.datagc[m.chat].text_welcome = teksnye
    fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
    return m.reply(teksnye ? `Teks ${command} berhasil diubah` : `Teks ${command} berhasil direset ke bawaan`)
  }
  return m.reply(`Pilihan tidak valid.\nGunakan: on, off, atau edit`)
}
break

case 'left': {
  if (!isAdmins) return m.reply(mess.admin)
  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}
  if (!text) {
    return m.reply(`*Pengaturan fitur ${command}*

Ketik:
- *${prefix + command} on* untuk mengaktifkan
- *${prefix + command} off* untuk menonaktifkan
- *${prefix + command} edit teksnya* untuk mengubah teks left

*Placeholder yang bisa dipakai:*
- {GROUPNAME} = nama grup
- {USERTAG} = tag user yang masuk
- {JAM} = jam sekarang
- {MENIT} = menit sekarang
- {DETIK} = detik sekarang
- {HARI} = nama hari
- {TANGGAL} = tanggal
- {BULAN} = angka bulan
- {TAHUN} = tahun
- {NAMABULAN} = nama bulan

*Contoh:*
${prefix + command} edit Sampai jumpa {USERTAG} dari grup {GROUPNAME}
Keluar pada {HARI}, {TANGGAL} {NAMABULAN} {TAHUN} jam {JAM}:{MENIT}`)
  }

  if (args[0] === 'on') {
    global.db.data.chats[m.chat].left = true
    fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
    return m.reply('Fitur Left berhasil diaktifkan.')
  }
  if (args[0] === 'off') {
    global.db.data.chats[m.chat].left = false
    fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
    return m.reply('Fitur Left berhasil dinonaktifkan.')
  }
  if (args[0] === 'edit') {
    const teksnye = args.slice(1).join(' ').trim()
    global.datagc[m.chat].text_left = teksnye
    fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
    return m.reply(teksnye ? `Teks ${command} berhasil diubah` : `Teks ${command} berhasil direset ke bawaan`)
  }
  return m.reply(`Pilihan tidak valid.\nGunakan: on, off, atau edit`)
}
break

case 'onlyadmin': {
  if (!isAdmins) return m.reply(mess.admin)
  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}
  if (!text) return m.reply(`Contoh:
${prefix + command} on / off`)
  if (args[0] === 'on') {
    global.db.data.chats[m.chat].onlyAdmin = true
  } else if (args[0] === 'off') {
    global.db.data.chats[m.chat].onlyAdmin = false
  }
  fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
  m.reply(mess.success)
}
break

case 'restart': {
if (!isCreator) return m.reply(mess.owner)
if (text) return
m.reply(`restarting ${botname}`)
await sleep(1500)
process.exit()
}
break

case 'tagsubject':
case 'faketag': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!q) return m.reply(`Teks Nya Mana Kak?`)
lenwy.sendMessage(m.chat, {
  text: "@"+m.chat,
  contextInfo: {
    mentionedJid: participants.map(a => a.id),
    groupMentions: [{
        groupJid: m.chat,
        groupSubject: q
    }]
   }
})
}
break

case 'delsession': 
case 'delsesi': {
 if (!isCreator) return
 fs.readdir(`./${sessionName}`, async function(err, files) {
 if (err) {
 console.log('Unable to scan directory: ' + err)
 return m.reply('Unable to scan directory: ' + err)
 }
 let filteredArray = files.filter(item => 
 item.startsWith("pre-key") || 
 item.startsWith("sender-key") || 
 item.startsWith("session-") || 
 item.startsWith("app-state")
 )
 console.log(filteredArray.length)
 let teks = `Detected ${filteredArray.length} junk files\n\n`
 if (filteredArray.length === 0) return m.reply('Sedang menghapus sampah...')
 filteredArray.forEach((item, i) => {
 teks += (i + 1) + `. ${item}\n`
 })
 console.log(teks)
 await sleep(200)
 m.reply("Menghapus session...")
 for (const file of filteredArray) {
 fs.unlinkSync(`./${sessionName}/${file}`)
 }
 await sleep(200)
 m.reply('Sukses menghapus session!')
 })
}
break

case 'delsampah': {
if (!isCreator) return
let directoryPath = path.join("./")
fs.readdir(directoryPath, async function (err, files) {
if (err) {
  return m.reply("Tidak dapat memindai direktori: " + err)
}
let filteredArray = await files.filter(
  (item) =>
item.endsWith("gif") ||
item.endsWith("png") ||
item.endsWith("mp3") ||
item.endsWith("mp4") ||
item.endsWith("jpg") ||
item.endsWith("jpeg") ||
item.endsWith("webp") ||
item.endsWith("webm"),
)
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function (e, i) {
  teks += i + 1 + `. ${e}\n`
})
m.reply(teks)
await sleep(200)
m.reply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
  fs.unlinkSync(`./${file}`)
})
await sleep(200)
m.reply("Berhasil menghapus semua sampah")
  })
}
break

case 'catatan': {
if (text) return
let catat =`Fitur untuk Setopen dan Setclose
1. @groupname = menampilkan nama group
2. @tagdiri = mentag pengirim/sender
3. @tagreply = tag orang yang pesannya di reply
4. @jam = menampilkan jam saat ini
5. @menit = menampilkan menit saat ini
6. @detik = menampilkan detik saat ini
7. @hari = menampilkan hari saat ini
8. @tanggal = menampilkan tanggal saat ini
9. @bulan = menampilkan bulan saat ini
10. @tahun = menampilkan tahun saat ini
11. @namabulan = menampilkan nama bulan saat ini


Fitur untuk setdone dan setproses
1. @groupname = menampilkan nama group
2. @tagdiri = mentag pengirim/sender
3. @tagreply = tag orang yang pesannya di reply
4. @jam = menampilkan jam saat ini
5. @menit = menampilkan menit saat ini
6. @detik = menampilkan detik saat ini
7. @hari = menampilkan hari saat ini
8. @tanggal = menampilkan tanggal saat ini
9. @bulan = menampilkan bulan saat ini
10. @tahun = menampilkan tahun saat ini
11. @namabulan = menampilkan nama bulan saat ini
12. @pesanan = isi text untuk menjadikan nya bahan yang di pesan


Fitur untuk setwelcome dan setleft
1. @groupname = menampilkan nama group
2. @usertag = mentag user saat join atau left
3. @jam = menampilkan jam saat ini
4. @menit = menampilkan menit saat ini
5. @detik = menampilkan detik saat ini
6. @hari = menampilkan hari saat ini
7. @tanggal = menampilkan tanggal saat ini
8. @bulan = menampilkan bulan saat ini
9. @tahun = menampilkan tahun saat ini
10. @namabulan = menampilkan nama bulan saat ini


Fitur untuk setlist
1. {GROUPNAME} = menampilkan nama group
2. {TAG} = mentag pengirim/sender
3. {JAM} = menampilkan jam saat ini
4. {MENIT} = menampilkan menit saat ini
5. {DETIK} = menampilkan detik saat ini
6. {HARI} = menampilkan hari saat ini
7. {TANGGAL} = menampilkan tanggal saat ini
8. {BULAN} = menampilkan bulan saat ini
9. {TAHUN} = menampilkan tahun saat ini
10. {NAMABULAN} = menampilkan nama bulan saat ini
11. {SIMBOL} = menampilkan list-list yang ada`

m.reply(catat)
}
break

case 'statusgc': {
  if (!m.isGroup) return m.reply('⚠️ Perintah ini hanya bisa digunakan di dalam grup!')

  try {
    const groupData = global.db.data.chats[from]
    if (!groupData) return m.reply('⚠️ Data grup tidak ditemukan dalam database. Coba kirim pesan apa saja di grup ini terlebih dahulu.');

    const check = (status) => status ? '✅ Aktif' : '❌ Off'
    let statusMessage = `*📊 STATUS PENGATURAN GRUP*\n`
    statusMessage += `ID: ${from}\n\n`

    statusMessage += `*Pengaturan Umum:*\n`
    statusMessage += `• Only Admin: ${check(groupData.onlyAdmin)}\n`
    statusMessage += `• Welcome (Wlcm): ${check(groupData.wlcm)}\n`
    statusMessage += `• Goodbye (Left): ${check(groupData.left)}\n\n`
    statusMessage += `*Keamanan & Perlindungan:*\n`
    statusMessage += `• Anti Toxic 1: ${check(groupData.antitoxic1)}\n`
    statusMessage += `• Anti Toxic 2: ${check(groupData.antitoxic2)}\n`
    statusMessage += `• Anti Link Umum: ${check(groupData.antilink)}\n`
    statusMessage += `• Anti Link Umum 2: ${check(groupData.antilink2)}\n`
    statusMessage += `• Anti Link GC: ${check(groupData.antilinkgc)}\n`
    statusMessage += `• Anti Link GC 2: ${check(groupData.antilinkgc2)}\n`
    statusMessage += `• Anti Link YouTube: ${check(groupData.antilinkyt)}\n`
    statusMessage += `• Anti Link TikTok: ${check(groupData.antilinktt)}\n`
    statusMessage += `• Anti Channel (CH): ${check(groupData.antich)}\n`
    statusMessage += `• Anti Channel (CH) 2: ${check(groupData.antich2)}\n`
    statusMessage += `• Anti Wa.me: ${check(groupData.antiwame)}\n`
    statusMessage += `• Anti Panel: ${check(groupData.antipanel)}\n`
    statusMessage += `• Anti Virtex: ${check(groupData.antivirtex)}\n`
    statusMessage += `• Anti Bot Lain: ${check(groupData.antibot)}\n`

    m.reply(statusMessage)

  } catch (error) {
    console.error('Terjadi kesalahan di statusgc:', error)
    m.reply('⚠️ Terjadi kesalahan saat membaca database grup.')
  }
}
break

case 'cekstatusakun': {
  if (!isCreator) return

  let statusDataDigi = await cekStatusAkunDigi()
  let dataDigi = statusDataDigi?.data || {}

  let mesnya = ` [ Status Akun ]

Saldo Topup: ${formatSaldo(dataDigi.deposit) || '-'}`
  m.reply(mesnya)
}
break

case 'addgctopup': {
  if (!isCreator) return
  const gcnya = m.chat; // Mendapatkan ID grup
  let gcList;
  try {
    const data = fs.readFileSync('./project/database/gcTopup.json', 'utf-8');
    gcList = JSON.parse(data);
  } catch (error) {
    console.error('Error membaca file gcTopup.json:', error);
    gcList = []; // Inisialisasi dengan array kosong jika terjadi kesalahan
  }
  if (gcList.includes(gcnya)) {
    return m.reply(`Grup dengan ID "${gcnya}" sudah ada dalam daftar.`);
  }
  gcList.push(gcnya);
  fs.writeFileSync('./project/database/gcTopup.json', JSON.stringify(gcList, null, 2));
  console.log(`ID grup "${gcnya}" berhasil ditambahkan ke gcTopup.json`);
  m.reply(`ID grup "${gcnya}" berhasil ditambahkan ke daftar gcTopup.`);
}
break

case 'delgctopup': {
  if (!isCreator) return
  const gcnya = m.chat; // Mendapatkan ID grup
  let gcList;
  try {
    const data = fs.readFileSync('./project/database/gcTopup.json', 'utf-8');
    gcList = JSON.parse(data);
  } catch (error) {
    console.error('Error membaca file gcTopup.json:', error);
    gcList = []; // Inisialisasi dengan array kosong jika terjadi kesalahan
  }
  const index = gcList.indexOf(gcnya);
  if (index === -1) {
    return m.reply(`Grup dengan ID "${gcnya}" tidak ditemukan dalam daftar.`);
  }
  gcList.splice(index, 1);
  fs.writeFileSync('./project/database/gcTopup.json', JSON.stringify(gcList, null, 2));
  console.log(`ID grup "${gcnya}" berhasil dihapus dari gcTopup.json`);
  m.reply(`ID grup "${gcnya}" berhasil dihapus dari daftar gcTopup.`);
}
break

case 'daftarharga': {
  if (!isGcTopup) return m.reply(`Group ini tidak terdaftar di group Topup`);

  let responseDigi = await cekLayananDigiPrabayar();
  let dataProdukDigi = Array.isArray(responseDigi?.data) ? responseDigi.data : [];

  const users = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'));
  const userData = users.find(item => {
    if (Array.isArray(item.id)) return item.id.includes(m.sender);
    return item.id === m.sender;
  });

  if (!userData) return m.reply(`Ketik ${prefix}daftar terlebih dahulu`);

  const userRole = String(userData.role || "1");

  const aliasMap = {
    ml: 'mobile legends',
    ff: 'free fire',
    pubg: 'pubg mobile',
    mlf: 'mobile legends filipina',
    mlb: 'mobile legends brazil',
    mlm: 'mobile legends malaysia',
    mlg: 'mobile legends global',
    mlw: 'mobile legends membership',
    tselpulsa: 'telkomsel pulsa',
    ttview: 'tiktok view'
  };

  const categoryGroup = ['Pulsa', 'Data'];
  let profitData = JSON.parse(fs.readFileSync('./project/database/config.json', 'utf8'));

  let input = text.toLowerCase().trim();
  input = aliasMap[input] || input || '-';

  let uniqueBrands = [];
  if (dataProdukDigi.length > 0) {
    uniqueBrands = [...new Set(dataProdukDigi.map(product => {
      let brand = product.brand.toLowerCase();
      let type = product.type?.toLowerCase() || 'umum';
      return type !== 'umum' ? `${brand} ${type}` : brand;
    }))];
  }

  if (uniqueBrands.some(brand => input.includes(brand))) {
    let filteredProducts = dataProdukDigi.filter(product => {
      let brand = product.brand.toLowerCase();
      let type = product.type?.toLowerCase() || 'umum';
      let fullTypeMatch = type !== 'umum' ? `${brand} ${type}` : brand;
      return input.includes(fullTypeMatch);
    });

    if (filteredProducts.length > 0) {
      filteredProducts.sort((a, b) => a.price - b.price);

      let header = `*List ${filteredProducts[0].brand}${(filteredProducts[0].type && filteredProducts[0].type.toUpperCase() !== 'UMUM') ? ' ' + filteredProducts[0].type : ''}*\n\n`;

      let messages = filteredProducts.map(product => {
        let basePrice = Number(product.price || 0);
        let harga1 = Math.round(basePrice * (1 + profitData.profit1Topup / 100));
        let harga2 = Math.round(basePrice * (1 + profitData.profit2Topup / 100));
        let harga3 = Math.round(basePrice * (1 + profitData.profit3Topup / 100));
        let adjustedPrice =
          userRole === "1" ? Math.round(basePrice * (1 + profitData.profit1Topup / 100)) :
          userRole === "2" ? Math.round(basePrice * (1 + profitData.profit2Topup / 100)) :
          userRole === "3" ? Math.round(basePrice * (1 + profitData.profit3Topup / 100)) :
          basePrice;

        let statusIcon = product.seller_product_status && product.buyer_product_status ? "✅" : "⛔";

        return `${statusIcon} *${product.product_name}*
> *Kode Produk:* ${product.buyer_sku_code}
> *Harga ${global.settings.roles.role1} :* ${formatSaldo(harga1)}
> *Harga ${global.settings.roles.role2} :* ${formatSaldo(harga2)}
> *Harga ${global.settings.roles.role3} :* ${formatSaldo(harga3)}`;
      }).join('\n\n');

      return lenwy.sendMessage(m.chat, { text: header + messages, mentions: [m.sender] }, { quoted: m });
    }
  }

  let teksnyee = '';

  if (dataProdukDigi.length > 0 && uniqueBrands.length > 0) {
    let categories = {};

    dataProdukDigi.forEach(product => {
      let brand = product.brand.toUpperCase();
      let type = (product.type || 'UMUM').toUpperCase();
      let category = product.category;
      let displayName;

      if (type === 'UMUM' && categoryGroup.includes(category)) {
        displayName = `${brand} ${category}`;
      } else if (type !== 'UMUM' && categoryGroup.includes(category)) {
        displayName = `${brand} ${type}`;
      } else if (type === 'UMUM') {
        displayName = brand;
      } else {
        displayName = `${brand} ${type}`;
      }

      if (!categories[category]) categories[category] = new Set();
      categories[category].add(displayName);
    });

    teksnyee += `╭─╸ *all produk topup* ⤸`;
    Object.keys(categories).sort().forEach(category => {
      teksnyee += `\n┃\n┃ ❏ *\`${category}\`*`;
      Array.from(categories[category]).sort().forEach(displayName => {
        let alias = Object.keys(aliasMap).find(key => aliasMap[key] === displayName.toLowerCase());
        teksnyee += `\n┃  ֢ ꤠ ${displayName.toUpperCase()} ${alias ? `(${alias.toUpperCase()})` : ''}`;
      });
    });
  }

  teksnyee += '\n╰╸\n\n> Contoh: `get ml`';
  return m.reply(teksnyee);
}
break

case 'get': {
  if (!isGcTopup) return m.reply(`Group ini tidak terdaftar di group Topup`);

  let responseDigi = await cekLayananDigiPrabayar();
  let dataProdukDigi = Array.isArray(responseDigi?.data) ? responseDigi.data : [];

  const users = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'));
  const userData = users.find(item => {
    if (Array.isArray(item.id)) return item.id.includes(m.sender);
    return item.id === m.sender;
  });

  if (!userData) return m.reply(`Ketik ${prefix}daftar terlebih dahulu`);

  const userRole = String(userData.role || "1");

  const aliasMap = {
    ml: 'mobile legends',
    ff: 'free fire',
    pubg: 'pubg mobile',
    mlf: 'mobile legends filipina',
    mlb: 'mobile legends brazil',
    mlm: 'mobile legends malaysia',
    mlg: 'mobile legends global',
    mlw: 'mobile legends membership',
    tselpulsa: 'telkomsel pulsa',
    ttview: 'tiktok view'
  };

  const categoryGroup = ['Pulsa', 'Data'];
  let profitData = JSON.parse(fs.readFileSync('./project/database/config.json', 'utf8'));

  let input = text.toLowerCase().trim();
  input = aliasMap[input] || input || '-';

  let uniqueBrands = [];
  if (dataProdukDigi.length > 0) {
    uniqueBrands = [...new Set(dataProdukDigi.map(product => {
      let brand = product.brand.toLowerCase();
      let type = product.type?.toLowerCase() || 'umum';
      return type !== 'umum' ? `${brand} ${type}` : brand;
    }))];
  }

  if (uniqueBrands.some(brand => input.includes(brand))) {
    let filteredProducts = dataProdukDigi.filter(product => {
      let brand = product.brand.toLowerCase();
      let type = product.type?.toLowerCase() || 'umum';
      let fullTypeMatch = type !== 'umum' ? `${brand} ${type}` : brand;
      return input.includes(fullTypeMatch);
    });

    if (filteredProducts.length > 0) {
      filteredProducts.sort((a, b) => a.price - b.price);

      let header = `*List ${filteredProducts[0].brand}${(filteredProducts[0].type && filteredProducts[0].type.toUpperCase() !== 'UMUM') ? ' ' + filteredProducts[0].type : ''}*\n\n`;

      let messages = filteredProducts.map(product => {
        let basePrice = Number(product.price || 0);
        let adjustedPrice =
          userRole === "1" ? Math.round(basePrice * (1 + profitData.profit1Topup / 100)) :
          userRole === "2" ? Math.round(basePrice * (1 + profitData.profit2Topup / 100)) :
          userRole === "3" ? Math.round(basePrice * (1 + profitData.profit3Topup / 100)) :
          basePrice;

        let statusIcon = product.seller_product_status && product.buyer_product_status ? "✅" : "⛔";

        return `${statusIcon} *${product.product_name}*
> *Kode Produk:* ${product.buyer_sku_code}
> *Harga:* ${formatSaldo(adjustedPrice)}`;
      }).join('\n\n');

      return lenwy.sendMessage(m.chat, { text: header + messages, mentions: [m.sender] }, { quoted: m });
    }
  }

  let teksnyee = '';

  if (dataProdukDigi.length > 0 && uniqueBrands.length > 0) {
    let categories = {};

    dataProdukDigi.forEach(product => {
      let brand = product.brand.toUpperCase();
      let type = (product.type || 'UMUM').toUpperCase();
      let category = product.category;
      let displayName;

      if (type === 'UMUM' && categoryGroup.includes(category)) {
        displayName = `${brand} ${category}`;
      } else if (type !== 'UMUM' && categoryGroup.includes(category)) {
        displayName = `${brand} ${type}`;
      } else if (type === 'UMUM') {
        displayName = brand;
      } else {
        displayName = `${brand} ${type}`;
      }

      if (!categories[category]) categories[category] = new Set();
      categories[category].add(displayName);
    });

    teksnyee += `╭─╸ *all produk topup* ⤸`;
    Object.keys(categories).sort().forEach(category => {
      teksnyee += `\n┃\n┃ ❏ *\`${category}\`*`;
      Array.from(categories[category]).sort().forEach(displayName => {
        let alias = Object.keys(aliasMap).find(key => aliasMap[key] === displayName.toLowerCase());
        teksnyee += `\n┃  ֢ ꤠ ${displayName.toUpperCase()} ${alias ? `(${alias.toUpperCase()})` : ''}`;
      });
    });
  }

  teksnyee += '\n╰╸\n\n> Contoh: `get ml`';
  return m.reply(teksnyee);
}
break

case 'upgrade': {
  if (!text) return m.reply(`Ada 2 cara upgrade user:

*Creator / Owner*
1. ${prefix + command} (${global.settings.roles.role2}/${global.settings.roles.role3}) lalu reply ke chat target
2. ${prefix + command} (${global.settings.roles.role2}/${global.settings.roles.role3}) 62852xxxx

*User biasa via QRIS*
1. ${prefix + command} ${global.settings.roles.role2}
2. ${prefix + command} ${global.settings.roles.role3}

Harga:
- ${global.settings.roles.role2}: ${formatSaldo(global.settings.roles.pricesrole2)}
- ${global.settings.roles.role3}: ${formatSaldo(global.settings.roles.pricesrole3)}`)

  const users = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'))
  const config = JSON.parse(fs.readFileSync('./project/database/config.json', 'utf8'))

  let roleInput = args[0]
  if (!roleInput) return m.reply(`Contoh:
${prefix + command} ${global.settings.roles.role2}
${prefix + command} ${global.settings.roles.role3}`);

  let roleBaru
  let hargaUpgrade = 0
  let namaRole = ''

  if (roleInput.toLowerCase() === global.settings.roles.role2.toLowerCase()) {
    roleBaru = "2"
    namaRole = global.settings.roles.role2
    hargaUpgrade = Number(global.settings.roles.pricesrole2 || 0)
  } else if (roleInput.toLowerCase() === global.settings.roles.role3.toLowerCase()) {
    roleBaru = "3"
    namaRole = global.settings.roles.role3
    hargaUpgrade = Number(global.settings.roles.pricesrole3 || 0)
  } else {
    return m.reply(`Role hanya bisa:
- ${global.settings.roles.role2}
- ${global.settings.roles.role3}`)
  }

  if (isCreator) {
    let target
    if (!m.quoted) {
      if (!args[1]) return m.reply(`Masukkan nomor target.

Contoh:
${prefix + command} ${namaRole} 6285261255548`);
      target = args[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      const cek = await lenwy.onWhatsApp(target.split("@")[0])
      if (cek.length < 1) return m.reply(`Nomor tersebut tidak terdaftar di WhatsApp`)
      if (args[1].startsWith("0")) return m.reply(`Nomor harus diawali dengan kode negara (62)`)
    } else {
      target = m.quoted.sender
    }

    const userIndex = users.findIndex(item => {
      if (Array.isArray(item.id)) return item.id.includes(target)
      return item.id === target
    })

    if (userIndex === -1) return m.reply(`User tersebut belum terdaftar, silakan ketik ${prefix}daftar terlebih dahulu`)
    if (String(users[userIndex].role) === roleBaru) return m.reply(`User @${target.split("@")[0]} sudah berada di role ${namaRole}`)

    users[userIndex].role = roleBaru
    fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(users, null, 2))

    return lenwy.sendMessage(m.chat, {
      text: `✅ Pengguna @${target.split("@")[0]} berhasil diupgrade ke ${namaRole}`,
      mentions: [target]
    }, { quoted: m })
  }

  const userIndex = users.findIndex(item => {
    if (Array.isArray(item.id)) return item.id.includes(m.sender)
    return item.id === m.sender
  })

  if (userIndex === -1) return m.reply(`Ketik ${prefix}daftar terlebih dahulu`)
  const roleSekarang = String(users[userIndex].role || "1")
  if (roleSekarang === roleBaru) return m.reply(`Role kamu sudah ${namaRole}`)

  let transactions = []
  if (fs.existsSync('./project/database/processTopup.json')) {
    transactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
  }

  const pendingTransaction = transactions.find(tx =>
    tx.id === m.sender &&
    tx.status === 'pending'
  )

  if (pendingTransaction) return m.reply(`❌ Kamu masih punya transaksi pending.
> Jenis: ${pendingTransaction.dari}
> Harga: ${formatSaldo(pendingTransaction.harga)}

Ketik N untuk membatalkan transaksi sebelumnya.`)

  const qris = await generateQris(hargaUpgrade, config.qrisPackage, 5)
  if (qris.status !== 200) return m.reply(`Error saat generate QRIS\n${qris.message}`)

  const transactionId = qris.data.transactionId
  const qrString = qris.data.qr_string
  const qrUrl = `https://larabert-qrgen.hf.space/v1/create-qr-code?size=500x500&style=1&color=1A1A2E&data=${encodeURIComponent(qrString)}`
  const getImage = await axios.get(qrUrl, { responseType: 'arraybuffer' })
  const qrBuffer = Buffer.from(getImage.data, 'binary')

  const upgradeData = {
    id: m.sender,
    item: `upgrade-${namaRole.toLowerCase()}`,
    tujuan: m.sender.split('@')[0],
    nama: `UPGRADE ${namaRole.toUpperCase()}`,
    status: 'pending',
    dari: 'upgrade',
    time: time2,
    harga: hargaUpgrade,
    roleTujuan: roleBaru,
    roleName: namaRole,
    transactionId: transactionId,
    username: pushname || '-'
  }

  transactions.push(upgradeData)
  fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(transactions, null, 2))

  const caption = `*UPGRADE ${namaRole.toUpperCase()}*
> User: @${m.sender.split('@')[0]}
> Upgrade ke: ${namaRole}
> Harga: ${formatSaldo(hargaUpgrade)}
> Status: Menunggu pembayaran

Scan QR di atas untuk melakukan pembayaran.
Ketik N untuk membatalkan.`

  let { key } = await lenwy.sendMessage(
    m.chat,
    { image: qrBuffer, caption, mentions: [m.sender] },
    { quoted: m }
  )

  let paid = false
  let attempt = 0
  const maxAttempts = 18

  while (!paid) {
    attempt++
    await sleep(15000)
    let latestTransactions = []
    if (fs.existsSync('./project/database/processTopup.json')) {
      latestTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
    }
    const upgradeIndex = latestTransactions.findIndex(tx =>
      tx.id === m.sender &&
      tx.status === 'pending' &&
      tx.dari === 'upgrade'
    )
    if (upgradeIndex === -1) {
      paid = true
      break
    }
    if (attempt >= maxAttempts) {
      latestTransactions.splice(upgradeIndex, 1)
      fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(latestTransactions, null, 2))
      try {
        await lenwy.sendMessage(m.chat, { delete: key })
      } catch {}
      return m.reply(`❌ Upgrade dibatalkan karena melewati batas waktu pembayaran.`)
    }

    try {
      const res = await checkQrisStatus(transactionId)
      if (res.status === 200 && res.data.status === 'paid') {
        paid = true
        try {
          await lenwy.sendMessage(m.chat, { delete: key })
        } catch {}

        let finalTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
        const finalUpgradeIndex = finalTransactions.findIndex(tx =>
          tx.id === m.sender &&
          tx.status === 'pending' &&
          tx.dari === 'upgrade'
        )

        if (finalUpgradeIndex === -1) return m.reply(`❌ Data upgrade tidak ditemukan atau sudah dibatalkan.`)
        finalTransactions[finalUpgradeIndex].status = 'paid'
        fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(finalTransactions, null, 2))
        let latestUsers = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'))
        const latestUserIndex = latestUsers.findIndex(item => {
          if (Array.isArray(item.id)) return item.id.includes(m.sender)
          return item.id === m.sender
        })

        if (latestUserIndex === -1) return m.reply(`User tidak ditemukan di database saat update role.`)
        latestUsers[latestUserIndex].role = roleBaru
        fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(latestUsers, null, 2))
        let cleanTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
        const cleanIndex = cleanTransactions.findIndex(tx =>
          tx.id === m.sender &&
          tx.dari === 'upgrade'
        )
        if (cleanIndex !== -1) {
          cleanTransactions.splice(cleanIndex, 1)
          fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(cleanTransactions, null, 2))
        }
        return lenwy.sendMessage(m.chat, {
          text: `✅ Upgrade berhasil
> User: @${m.sender.split('@')[0]}
> Role baru: ${namaRole}`,
          mentions: [m.sender]
        }, { quoted: m })
      }
    } catch (err) {
      console.log('Error check QRIS upgrade:', err)
    }
  }
}
break

case 'deposit': {
  if (!text) {
    return m.reply(`Ada 2 cara deposit

*Owner*
> 1. Menggunakan Nomor
Contoh: ${prefix + command} +10000 6285261255548

> 2. Menggunakan Reply
Contoh: Reply pesan user lalu ketik ${prefix + command} +10000

*User deposit via QRIS*
Contoh: ${prefix + command} 10000`)
  }

  const users = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'))
  const config = JSON.parse(fs.readFileSync('./project/database/config.json', 'utf8'))

  if (isCreator) {
    let user
    let nominalRaw = args[0]

    if (!nominalRaw) {
      return m.reply(`Contoh:
${prefix + command} +10000 6285261255548
atau reply chat user lalu ketik
${prefix + command} +10000`)
    }

    if (!m.quoted) {
      if (!args[1]) return m.reply(`Masukkan nomor target.\n\nContoh: ${prefix + command} +10000 6285261255548`);
      user = args[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      const cek = await lenwy.onWhatsApp(user.split('@')[0])
      if (cek.length < 1) return m.reply(`Nomor tersebut tidak terdaftar di WhatsApp\n\n> Contoh: ${prefix + command} +10000 6285261255548`);
      if (args[1].startsWith('0')) return m.reply(`Nomor harus diawali dengan kode negara (62)\n\n> Contoh: ${prefix + command} +10000 6285261255548`);
    } else {
      user = m.quoted.sender
    }

    const userIndex = users.findIndex(u => u.id === user)
    if (userIndex === -1) return m.reply(`User tersebut belum terdaftar, silakan ketik ${prefix}daftar terlebih dahulu`);

    if (!nominalRaw.startsWith('+') && !nominalRaw.startsWith('-')) return m.reply(`Jumlah harus diawali dengan + untuk menambah atau - untuk mengurangi.`);

    let nominal = parseFloat(nominalRaw)
    if (isNaN(nominal)) return m.reply(`Jumlah harus berupa angka.`);

    const saldoLama = Number(users[userIndex].saldo || 0)
    const saldoBaru = saldoLama + nominal

    if (saldoBaru < 0) return m.reply(`Saldo user tidak cukup untuk dikurangi.`);

    users[userIndex].saldo = saldoBaru
    fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(users, null, 2))

    const sukses = `Saldo @${user.split("@")[0]} berhasil ${nominal > 0 ? 'ditambah' : 'dikurangi'} ${formatSaldo(Math.abs(nominal))}.
Saldo sekarang: ${formatSaldo(users[userIndex].saldo)}`
    return lenwy.sendMessage(m.chat, { text: sukses, mentions: [user] }, { quoted: m })
  }

  const nominal = parseFloat(args[0])
  if (isNaN(nominal) || nominal <= 0) return m.reply(`Masukkan nominal deposit yang valid.\n\nContoh: ${prefix + command} 10000`)

  const userIndex = users.findIndex(u => u.id === m.sender)
  if (userIndex === -1) return m.reply(`Ketik ${prefix}daftar terlebih dahulu`)

  let transactions = []
  if (fs.existsSync('./project/database/processTopup.json')) {
    transactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
  }

  const pendingTransaction = transactions.find(tx =>
    tx.id === m.sender &&
    tx.status === 'pending'
  )

  if (pendingTransaction) {
    if (pendingTransaction.dari === 'deposit') {
      return m.reply(`❌ Anda masih memiliki deposit pending.
> Nominal: ${formatSaldo(pendingTransaction.harga)}

Ketik N untuk membatalkan.`)
    }

    return m.reply(`❌ Anda masih memiliki transaksi pending.
> Item: ${pendingTransaction.item}
> Tujuan: ${pendingTransaction.tujuan}
> Harga: ${formatSaldo(pendingTransaction.harga)}

Ketik N untuk membatalkan transaksi sebelumnya.`)
  }

  const qris = await generateQris(nominal, config.qrisPackage, 5)
  if (qris.status !== 200) return m.reply(`Error saat generate QRIS\n${qris.message}`)

  const transactionId = qris.data.transactionId
  const qrString = qris.data.qr_string
  const qrUrl = `https://larabert-qrgen.hf.space/v1/create-qr-code?size=500x500&style=1&color=1A1A2E&data=${encodeURIComponent(qrString)}`
  const getImage = await axios.get(qrUrl, { responseType: 'arraybuffer' })
  const qrBuffer = Buffer.from(getImage.data, 'binary')

  const depositData = {
    id: m.sender,
    item: 'deposit',
    tujuan: m.sender.split('@')[0],
    nama: 'DEPOSIT QRIS',
    status: 'pending',
    dari: 'deposit',
    time: time2,
    harga: nominal,
    transactionId: transactionId,
    username: pushname || '-'
  }

  transactions.push(depositData)
  fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(transactions, null, 2))

  const caption = `*DEPOSIT QRIS*
> User: @${m.sender.split('@')[0]}
> Nominal: ${formatSaldo(nominal)}
> Status: Menunggu pembayaran

Scan QR di atas untuk melakukan pembayaran.
Ketik N untuk membatalkan.`

  let { key } = await lenwy.sendMessage(
    m.chat,
    { image: qrBuffer, caption, mentions: [m.sender] },
    { quoted: m }
  )

  let paid = false
  let attempt = 0
  const maxAttempts = 18

  while (!paid) {
    attempt++
    await sleep(15000)

    let latestTransactions = []
    if (fs.existsSync('./project/database/processTopup.json')) {
      latestTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
    }

    const depositIndex = latestTransactions.findIndex(tx =>
      tx.id === m.sender &&
      tx.status === 'pending' &&
      tx.dari === 'deposit'
    )

    if (depositIndex === -1) {
      paid = true
      break
    }

    if (attempt >= maxAttempts) {
      latestTransactions.splice(depositIndex, 1)
      fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(latestTransactions, null, 2))
      try {
        await lenwy.sendMessage(m.chat, { delete: key })
      } catch {}
      return m.reply(`❌ Deposit dibatalkan karena melewati batas waktu pembayaran.`)
    }

    try {
      const res = await checkQrisStatus(transactionId)

      if (res.status === 200 && res.data.status === 'paid') {
        paid = true

        try {
          await lenwy.sendMessage(m.chat, { delete: key })
        } catch {}

        let finalTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
        const finalDepositIndex = finalTransactions.findIndex(tx =>
          tx.id === m.sender &&
          tx.status === 'pending' &&
          tx.dari === 'deposit'
        )

        if (finalDepositIndex === -1) return m.reply(`❌ Data deposit tidak ditemukan atau sudah dibatalkan.`)

        finalTransactions[finalDepositIndex].status = 'paid'
        fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(finalTransactions, null, 2))

        let latestUsers = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'))
        const latestUserIndex = latestUsers.findIndex(u => u.id === m.sender)

        if (latestUserIndex === -1) return m.reply(`User tidak ditemukan di database saat update saldo.`)

        latestUsers[latestUserIndex].saldo = Number(latestUsers[latestUserIndex].saldo || 0) + nominal
        fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(latestUsers, null, 2))

        let cleanTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
        const cleanIndex = cleanTransactions.findIndex(tx =>
          tx.id === m.sender &&
          tx.dari === 'deposit'
        )

        if (cleanIndex !== -1) {
          cleanTransactions.splice(cleanIndex, 1)
          fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(cleanTransactions, null, 2))
        }

        return lenwy.sendMessage(m.chat, {
          text: `✅ Deposit berhasil
> User: @${m.sender.split('@')[0]}
> Nominal: ${formatSaldo(nominal)}
> Saldo sekarang: ${formatSaldo(latestUsers[latestUserIndex].saldo)}`,
          mentions: [m.sender]
        }, { quoted: m })
      }
    } catch (err) {
      console.log('Error check QRIS:', err)
    }
  }
}
break

case 'order': {
  if (!isGcTopup) return m.reply(`Group ini tidak terdaftar di group Topup`);
  if (!text) return m.reply(`Contoh: ${prefix + command} <kode_produk> <nomor_pelanggan>\n\n> Jika game yang memiliki 2 id maka dipisah\n> ${prefix + command} ml5 12345678 1234`);

  const statusData = await cekStatusAkunDigi()
  if (!statusData?.data || statusData.data.deposit === 0) return m.reply(`Transaksi dibatalkan. Tag Admin\n\n> Note: Saldo deposit kosong / tidak tersedia`);

  const users = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'))
  const dataUser = users.find(user => user.id === m.sender)
  if (!dataUser) return m.reply(`Ketik ${prefix}daftar terlebih dahulu`);

  const buyerSkuCode = args[0]?.toLowerCase()
  const id = args[1]
  const serverId = args[2]
  let customerNo = id
  if (serverId) customerNo = id + serverId

  if (!buyerSkuCode || !customerNo) return m.reply(`Contoh: ${prefix + command} <kode_produk> <nomor_pelanggan>\n\n> Jika game yang memiliki 2 id maka dipisah\n> ${prefix + command} ml5 12345678 1234`);

  const result = await cekItemDigi(buyerSkuCode)
  if (!result || !result.data || !result.data[0]) return m.reply(`❌ Produk tidak ditemukan atau terjadi kesalahan.`);

  const projectconfig = JSON.parse(fs.readFileSync('./project/database/config.json', 'utf8'))

  let userName = '-'
  if (serverId) {
    let data = await cekMl(id, serverId)
    let userData = data?.message || ''
    let nicknameMatch = userData.match(/In-Game Nickname:\s*(.+)/)
    let nicknameUser = nicknameMatch ? nicknameMatch[1].trim() : 'Tidak ditemukan'
    userName = nicknameUser || customerNo || '-'
  }

  const basePrice = Number(result.data[0].price)
  let adjustedPrice = basePrice

  if (dataUser.role === global.settings.roles.role1) {
    adjustedPrice = Math.round(basePrice * (1 + projectconfig.profit1Topup / 100))
  } else if (dataUser.role === global.settings.roles.role2) {
    adjustedPrice = Math.round(basePrice * (1 + projectconfig.profit2Topup / 100))
  } else if (dataUser.role === global.settings.roles.role3) {
    adjustedPrice = Math.round(basePrice * (1 + projectconfig.profit3Topup / 100))
  } else if (dataUser.role === global.settings.roles.role4) {
    adjustedPrice = basePrice
  }

  let transactions = []
  if (fs.existsSync('./project/database/processTopup.json')) {
    transactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
  }

  const pendingTransaction = transactions.find(tx =>
    tx.id === m.sender &&
    tx.status === 'pending' &&
    tx.dari === 'digiflazz'
  )

  if (pendingTransaction) {
    return m.reply(`❌ Anda sudah memiliki pemesanan pending.
> Item: ${pendingTransaction.item}
> Id: ${pendingTransaction.tujuan}
> Harga: ${formatSaldo(pendingTransaction.harga)}

Y = Proses saldo
N = Batal
QRIS = Bayar pakai QRIS`)
  }

  const transaction = {
    id: m.sender,
    ref_id: result.data.ref_id || null,
    item: buyerSkuCode,
    tujuan: customerNo,
    nama: result.data[0].product_name,
    status: 'pending',
    dari: 'digiflazz',
    time: time2,
    harga: adjustedPrice,
    username: userName
  }

  transactions.push(transaction)
  fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(transactions, null, 2))

  const teksnya = `‼ KONFIRMASI @${m.sender.split("@")[0]}
> Nama Produk: ${transaction.nama}
> Kode Produk: ${buyerSkuCode}
> Id: ${customerNo}
> Nickname: ${userName}
> Harga: ${formatSaldo(adjustedPrice)}
> Saldo Anda: ${formatSaldo(dataUser.saldo)}

Y = Proses saldo
N = Batal
QRIS = Bayar pakai QRIS`

  let { key } = await lenwy.sendMessage(
    m.chat,
    { text: teksnya, mentions: [m.sender] },
    { quoted: m }
  )

  setTimeout(async () => {
    let transactions = []
    if (fs.existsSync('./project/database/processTopup.json')) {
      transactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
    }

    const index = transactions.findIndex(tx =>
      tx.id === m.sender &&
      tx.status === 'pending' &&
      tx.dari === 'digiflazz'
    )

    if (index !== -1) {
      transactions.splice(index, 1)
      fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(transactions, null, 2))

      try {
        await lenwy.sendMessage(m.chat, { delete: key })
      } catch (e) {
        console.error('Gagal menghapus pesan:', e)
      }

      await lenwy.sendMessage(
        m.chat,
        { text: `❌ Pemesanan dibatalkan otomatis karena tidak ada konfirmasi dalam 1 menit.` },
        { quoted: m }
      )
    }
  }, 60 * 1000)
}
break

case 'y': {
  let transactions = []
  if (fs.existsSync('./project/database/processTopup.json')) {
    transactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
  }

  const transactionIndex = transactions.findIndex(t =>
    t.id === m.sender &&
    t.status === 'pending' &&
    t.dari === 'digiflazz'
  )

  if (transactionIndex === -1) return

  const transaction = transactions[transactionIndex]
  if (transaction.isQris) return

  const users = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'))
  const userIndex = users.findIndex(u => u.id === m.sender)
  if (userIndex === -1) return m.reply(`User tidak ditemukan di database`)

  if (users[userIndex].saldo < transaction.harga) {
    return m.reply(`❌ Saldo tidak cukup.\n> Saldo Anda: ${formatSaldo(users[userIndex].saldo)}\n> Harga Item: ${formatSaldo(transaction.harga)}`)
  }

  const buyerSkuCode = transaction.item
  const customerNo = transaction.tujuan

  transactions[transactionIndex].status = 'Processing'
  fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(transactions, null, 2))

  users[userIndex].saldo -= transaction.harga
  fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(users, null, 2))

  const orderResult = await orderDigi(buyerSkuCode, customerNo)
  if (!orderResult?.data?.ref_id) {
    users[userIndex].saldo += transaction.harga
    fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(users, null, 2))

    transactions.splice(transactionIndex, 1)
    fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(transactions, null, 2))

    return m.reply(`❌ Gagal membuat pesanan ke server.`)
  }

  const refId = orderResult.data.ref_id
  m.reply(`Memproses pesanan anda.`)

  const checkDigiOrderStatus = async () => {
    const orderStatus = await cekOrderanDigi(refId, buyerSkuCode, customerNo)
    const SN = orderStatus?.data?.sn || '-'

    if (orderStatus?.data?.status === 'Sukses') {
      clearInterval(intervalId)

      let teksnya = `✅ Transaksi Sukses @${m.sender.split("@")[0]}
> Invoice: ${refId}
> Item: ${transaction.nama}
> Kode: ${buyerSkuCode}
> Tujuan: ${customerNo}
> Harga: ${formatSaldo(transaction.harga)}
> SN: ${SN}`

      await lenwy.sendMessage(m.chat, { text: teksnya, mentions: [m.sender] }, { quoted: m })

      let latestTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
      const idx = latestTransactions.findIndex(t => t.id === m.sender && t.status === 'Processing' && t.dari === 'digiflazz')
      if (idx !== -1) {
        latestTransactions.splice(idx, 1)
        fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(latestTransactions, null, 2))
      }
    } else if (orderStatus?.data?.status === 'Pending') {
      console.log('Status transaksi masih pending...')
    } else {
      clearInterval(intervalId)

      let latestUsers = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'))
      const latestUserIndex = latestUsers.findIndex(u => u.id === m.sender)
      if (latestUserIndex !== -1) {
        latestUsers[latestUserIndex].saldo += transaction.harga
        fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(latestUsers, null, 2))
      }

      let latestTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
      const idx = latestTransactions.findIndex(t => t.id === m.sender && t.dari === 'digiflazz')
      if (idx !== -1) {
        latestTransactions.splice(idx, 1)
        fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(latestTransactions, null, 2))
      }

      m.reply(`❌ Ada yang gagal. Tag Admin

> Status: ${orderStatus?.data?.status || '-'}
> Pesan: ${orderStatus?.data?.message || 'Tidak ada informasi.'}`)
    }
  }

  const intervalId = setInterval(checkDigiOrderStatus, 7000)
}
break

case 'n': {
  let transactions = []
  if (fs.existsSync('./project/database/processTopup.json')) {
    transactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
  }

  const transactionIndex = transactions.findIndex(tx =>
    tx.id === m.sender &&
    tx.status === 'pending'
  )

  if (transactionIndex === -1) return m.reply('❌ Tidak ada transaksi pending.')

  const trx = transactions[transactionIndex]
  transactions.splice(transactionIndex, 1)
  fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(transactions, null, 2))

  if (trx.dari === 'deposit') {
    return m.reply(`❌ Deposit dibatalkan
> Nominal: ${formatSaldo(trx.harga)}`)
  }

  if (trx.dari === 'upgrade') {
    return m.reply(`❌ Upgrade dibatalkan
> Upgrade ke: ${trx.roleName}
> Harga: ${formatSaldo(trx.harga)}`)
  }

  return m.reply(`❌ Transaksi dibatalkan
> Item: ${trx.nama}
> Kode: ${trx.item}
> Harga: ${formatSaldo(trx.harga)}`)
}
break

case 'qris': {
  let transactions = []
  if (fs.existsSync('./project/database/processTopup.json')) {
    transactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
  }

  const transactionIndex = transactions.findIndex(t =>
    t.id === m.sender &&
    t.status === 'pending' &&
    t.dari === 'digiflazz'
  )

  if (transactionIndex === -1) return

  const transaction = transactions[transactionIndex]
  const projectconfig = JSON.parse(fs.readFileSync('./project/database/config.json', 'utf8'))

  const data = await generateQris(transaction.harga, projectconfig.qrisPackage, 5)
  if (data.status !== 200) return m.reply(`Error saat generate QR\n${data.message}`)

  const url1 = `https://larabert-qrgen.hf.space/v1/create-qr-code?size=500x500&style=1&color=1A1A2E&data=${encodeURIComponent(data.data.qr_string)}`
  const getImage = await axios.get(url1, { responseType: 'arraybuffer' })
  const pay = Buffer.from(getImage.data, 'binary')
  const transactionId = data.data.transactionId

  transactions[transactionIndex].isQris = true
  transactions[transactionIndex].qrisTransactionId = transactionId
  fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(transactions, null, 2))

  const teksnya = `‼ KONFIRMASI QRIS @${m.sender.split("@")[0]}
> Nama Produk: ${transaction.nama}
> Kode Produk: ${transaction.item}
> Id: ${transaction.tujuan}
> Nickname: ${transaction.username}
> Harga: ${formatSaldo(transaction.harga)}

Ketik N untuk batal`

  let { key } = await lenwy.sendMessage(
    m.chat,
    { image: pay, caption: teksnya, mentions: [m.sender] },
    { quoted: m }
  )

  let statusPay = false
  let attempt = 0
  const maxAttempts = 18

  while (!statusPay) {
    attempt++
    await sleep(15000)

    let latestTransactions = []
    if (fs.existsSync('./project/database/processTopup.json')) {
      latestTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
    }

    const latestIndex = latestTransactions.findIndex(t =>
      t.id === m.sender &&
      t.status === 'pending' &&
      t.dari === 'digiflazz'
    )

    if (latestIndex === -1) {
      statusPay = true
      break
    }

    if (attempt >= maxAttempts) {
      latestTransactions.splice(latestIndex, 1)
      fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(latestTransactions, null, 2))
      await lenwy.sendMessage(from, { delete: key })
      return m.reply('❌ Pemesanan telah melewati batas waktu')
    }

    try {
      let res = await checkQrisStatus(transactionId)

      if (res.status === 200 && res.data.status === 'paid') {
        statusPay = true
        await lenwy.sendMessage(from, { delete: key })
        m.reply(`Pembayaran terdeteksi, memproses pesanan Anda...`)

        latestTransactions[latestIndex].status = 'Processing'
        fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(latestTransactions, null, 2))

        const orderResult = await orderDigi(transaction.item, transaction.tujuan)
        if (!orderResult?.data?.ref_id) {
          latestTransactions.splice(latestIndex, 1)
          fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(latestTransactions, null, 2))
          return m.reply(`❌ Gagal membuat pesanan setelah pembayaran masuk. Tag Admin`)
        }

        const refId = orderResult.data.ref_id

        const checkDigiOrderStatus = async () => {
          const orderStatus = await cekOrderanDigi(refId, transaction.item, transaction.tujuan)
          const SN = orderStatus?.data?.sn || '-'

          if (orderStatus?.data?.status === 'Sukses') {
            clearInterval(intervalId)

            let teksnya = `✅ Transaksi Sukses @${m.sender.split("@")[0]}
> Invoice: ${refId}
> Item: ${transaction.nama}
> Kode: ${transaction.item}
> Tujuan: ${transaction.tujuan}
> Harga: ${formatSaldo(transaction.harga)}
> SN: ${SN}`

            await lenwy.sendMessage(m.chat, { text: teksnya, mentions: [m.sender] }, { quoted: m })

            let finalTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
            const finalIndex = finalTransactions.findIndex(t => t.id === m.sender && t.dari === 'digiflazz')
            if (finalIndex !== -1) {
              finalTransactions.splice(finalIndex, 1)
              fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(finalTransactions, null, 2))
            }
          } else if (orderStatus?.data?.status === 'Pending') {
            console.log('Status transaksi masih dalam proses, mencoba lagi...')
          } else {
            clearInterval(intervalId)

            let finalTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
            const finalIndex = finalTransactions.findIndex(t => t.id === m.sender && t.dari === 'digiflazz')
            if (finalIndex !== -1) {
              finalTransactions.splice(finalIndex, 1)
              fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(finalTransactions, null, 2))
            }

            m.reply(`❌ Ada yang error. Tag Admin

> Status: ${orderStatus?.data?.status || '-'}
> Pesan: ${orderStatus?.data?.message || 'Tidak ada informasi.'}`)
          }
        }

        const intervalId = setInterval(checkDigiOrderStatus, 7000)
      }
    } catch (error) {
      console.log('Error:', error)
      statusPay = true

      let latestTransactions2 = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
      const idx = latestTransactions2.findIndex(t => t.id === m.sender && t.status === 'pending' && t.dari === 'digiflazz')
      if (idx !== -1) {
        latestTransactions2.splice(idx, 1)
        fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(latestTransactions2, null, 2))
      }

      try {
        await lenwy.sendMessage(from, { delete: key })
      } catch {}
      return m.reply('Ada kendala, pesanan dibatalkan\nSilakan lakukan pembelian ulang')
    }
  }
}
break

case 'saldo': {
  if (!isGcTopup) return m.reply(`Group ini tidak terdaftar di group Topup`)
  if (text) return
  let filePathdataBuyer = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'));
  let dataUser = filePathdataBuyer.find(obj => obj.id === m.sender);
  if (!getdataUser) return m.reply(`Ketik ${prefix}daftar terlebih dahulu`)

  m.reply(`[ Data Anda ]

> Nama: ${pushname}
> Role: ${getdataUser.role}
> Saldo: ${formatSaldo(getdataUser.saldo)}`)
}
break

case 'listmember': {
  try {
    if (!isCreator) return m.reply('❌ Anda tidak memiliki akses untuk perintah ini.');
    const userList = require('./project/database/dataBuyerDigi.json');
    const filteredUsers = userList.filter(user =>
      typeof user.id === 'string' &&
      user.id.endsWith('@s.whatsapp.net')
    );
    if (filteredUsers.length === 0) return m.reply('⚠️ Tidak ada data member yang sesuai.');
    let result = '*📋 Data Semua Member*\n\n';
    for (const user of filteredUsers) {
      const waId = user.id;
      const role = user.role;
      const saldo = user.saldo;
      const namaOrng = await lenwy.getName(waId);
      result += `• ${waId.replace('@s.whatsapp.net', '')} | ${namaOrng}
Role: ${role}
Saldo: ${formatSaldo(saldo)}\n\n`;
    }
    return m.reply(result.trim());
  } catch (err) {
    console.error(err);
    return m.reply('❗ Terjadi kesalahan saat mengambil data.\n' + String(err));
  }
}
break

case 'profit': {
  if (!isCreator) return
  if (text) return
  let rawDataProfit = fs.readFileSync('./project/database/config.json')
  let profitData = JSON.parse(rawDataProfit)
  m.reply(`[ Persentase profit ]
> Profit Topup
${global.settings.roles.role1}: ${profitData.profit1Topup}
${global.settings.roles.role2}: ${profitData.profit2Topup}
${global.settings.roles.role3}: ${profitData.profit3Topup}

> Profit Kebsos
${global.settings.roles.role1}: ${profitData.profit1Kebsos}
${global.settings.roles.role2}: ${profitData.profit2Kebsos}
${global.settings.roles.role3}: ${profitData.profit3Kebsos}

NOTE:
5 = 5%
Edit Profit? ketik ${prefix}setprofit`)
}
break

case 'setprofit': {
  if (!isCreator) return;
  if (!text) return m.reply(`Contoh: ${prefix + command} topup 7 5 2

Note:
2 = 2%
Format: ${prefix + command} jenis profit1 profit2 profit3`);

  if (args[0] !== "topup" && args[0] !== "kebsos") return m.reply(`Masukkan profit apa yang mau di edit.
> Contoh: ${prefix + command} topup 7 5 2

Note:
Hanya bisa ${prefix + command} topup atau ${prefix + command} kebsos`);
  let rawData = fs.readFileSync('./project/database/config.json');
  let profitData = JSON.parse(rawData);
  if (!args[1] || !args[2] || !args[3]) return m.reply(`Semua nilai profit harus diisi.`);

  if (args[0] === "topup") {
    profitData.profit1Topup = parseFloat(args[1]);
    profitData.profit2Topup = parseFloat(args[2]);
    profitData.profit3Topup = parseFloat(args[3]);
  } else if (args[0] === "kebsos") {
    profitData.profit1Kebsos = parseFloat(args[1]);
    profitData.profit2Kebsos = parseFloat(args[2]);
    profitData.profit3Kebsos = parseFloat(args[3]);
  }

  try {
    fs.writeFileSync('./project/database/config.json', JSON.stringify(profitData, null, 2));
  } catch (err) {
    return m.reply('❌ Gagal menyimpan perubahan.');
  }

  m.reply(`Profit ${args[0]} berhasil diperbarui:
${global.settings.roles.role1}: ${args[1]}%
${global.settings.roles.role2}: ${args[2]}%
${global.settings.roles.role3}: ${args[3]}%`);
}
break

case 'daftar': {
  if (!isGcTopup) return m.reply(`Group ini tidak terdaftar di group Topup`);
  if (text) return;
  let filePathdataBuyer = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'));
  let dataUser = filePathdataBuyer.find(obj => obj.id === m.sender);
  if (!dataUser) return m.reply(`Anda sudah terdaftar...`)

  filePathdataBuyer.push({
    id: m.sender,
    role: '1',
    saldo: 0
  });
  m.reply(`Berhasil mendaftar dengan ID:\n${m.sender}`);
  fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(filePathdataBuyer, null, 2));
}
break

case 'cekdata': {
  if (!isCreator) return
  let user
  if (!m.quoted && !budy.includes('@')) {
    user = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    const cek = await lenwy.onWhatsApp(user.split("@")[0])

    if (cek.length < 1) return m.reply(`Nomor Tersebut Tidak Terdaftar Di WhatsApp\n\n> Contoh: ${prefix + command} 6285261255548`)
    if (user.startsWith("0")) return m.reply(`Nomor Harus Diawali Dengan Kode Nomor Negara (62)\n\n> Contoh: ${prefix + command} 6285261255548`)
  } else if (!m.quoted && budy.includes('@')) {
    user = text.split('@')[1] + '@s.whatsapp.net'
    const cek = await lenwy.onWhatsApp(user.split("@")[0])
    if (cek.length < 1) return m.reply(`Nomor Tersebut Tidak Terdaftar Di WhatsApp\n\n> Contoh: ${prefix + command} @6285261255548`)
  } else if (m.quoted && !budy.includes('@')) {
    user = m.quoted.sender
  } else {
    return m.reply(`Hanya bisa
1. ${prefix + command} @User
2. ${prefix + command} 6285261255548
3. ${prefix + command} sambil reply chat yang mau di cek data`)
  }
  let filePathdataBuyer = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'));
  let dataUser = filePathdataBuyer.find(obj => obj.id === user);
  if (!dataUser) return m.reply(`User belum terdaftar`)
  m.reply(`[ Data User ]

> Id: ${user}
> Role: ${dataUser.role}
> Saldo: ${formatSaldo(dataUser.saldo)}`)
}
break

case 'detailproduk': {
  if (!isGcTopup) return m.reply(`Group ini tidak terdaftar di group Topup`)
  if (!text) return m.reply(`*Masukkan nama item nya*`)
  let resultdigi = await cekItemDigi(text)
  let resultkebsos = await cekLayanan()
  let dataMedan = resultkebsos?.data || []
  console.log(resultdigi)
  let selectedService = dataMedan.find(service => service.id.toString() === text)
  console.log(selectedService)
  let rawDataProfit = fs.readFileSync('./project/database/config.json')
  let profitData = JSON.parse(rawDataProfit)
  if (resultdigi) {
      let basePrice = resultdigi.data[0].price
      let harga1Topup = Math.round(basePrice * (1 + profitData.profit1Topup / 100));
      let harga2Topup = Math.round(basePrice * (1 + profitData.profit2Topup / 100));
      let harga3Topup = Math.round(basePrice * (1 + profitData.profit3Topup / 100));
      let statusIcon = resultdigi.data[0].seller_product_status && resultdigi.data[0].buyer_product_status ? "✅" : "⛔"
      m.reply(`───〔 *Detail Produk Topup* 〕───
» *Nama Produk:* ${resultdigi.data[0].product_name}
» *Kategori:* ${resultdigi.data[0].category}
» *Brand:* ${resultdigi.data[0].brand}
» *Stok:* ${resultdigi.data[0].stock}
» *Harga ${global.settings.roles.role1}:* ${formatSaldo(harga1Topup)}
» *Harga ${global.settings.roles.role2}:* ${formatSaldo(harga2Topup)}
» *Harga ${global.settings.roles.role3}:* ${formatSaldo(harga3Topup)}
» *Deskripsi:* ${resultdigi.data[0].desc}
» *Status:* ${statusIcon}`)
  }
  if (selectedService) {
      let basePrice = selectedService.price
      let harga1Kebsos = Math.round(basePrice * (1 + profitData.profit1Kebsos / 100));
      let harga2Kebsos = Math.round(basePrice * (1 + profitData.profit2Kebsos / 100));
      let harga3Kebsos = Math.round(basePrice * (1 + profitData.profit3Kebsos / 100));
      m.reply(`───〔 *Detail Produk Kebsos* 〕───
» *Nama Produk:* ${selectedService.name}
» *Kategori:* ${selectedService.category}
» *Minimal Order:* ${selectedService.min}
» *Maksimal Order:* ${selectedService.max}
» *Harga ${global.settings.roles.role1}/K:* ${formatSaldo(harga1Kebsos)}
» *Harga ${global.settings.roles.role2}/K:* ${formatSaldo(harga2Kebsos)}
» *Harga ${global.settings.roles.role3}/K:* ${formatSaldo(harga3Kebsos)}
» *Deskripsi:* ${selectedService.description}
» *Rata-rata pengerjaan:* ${selectedService.average_time}`)
  }
}
break

case 'caratopup':
case 'caraorder': {
if (!isGcTopup) return m.reply(`Group ini tidak terdaftar di group Topup`)
if (text) return
m.reply(`   °┄─────── 𓊔 ───────┄° 
*Cara Topup :*
order Kode Id Server [ order ML5 12345678 1234 ]
order2 Kode Id Server [ order2 ML5 12345678 1234 ]`)   
}
break











case 'getcase': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply(`Contoh: "getcase menu"`)

  try {
    const fileContent = fs.readFileSync("./lenwy.js").toString()
    let validasii = fileContent.split(`case '${text}'`)
    const caseSplit = validasii ? validasii : fileContent.split(`case '${text}'`)
    
    if (caseSplit.length < 2) {
        throw new Error(`Case '${text}' tidak ditemukan.`)
    }

    const caseContent = caseSplit[1].split("break")[0]
    m.reply("case " + `'${text}'` + caseContent + "break")
  } catch (error) {
    m.reply(`${error.message}`)
  }
}
break

case 'addcase': {
  if (!isCreator) return m.reply(mess.owner)
  if (!q) return m.reply(`Masukan input`)
  if (!q.includes("|||")) return m.reply(`❌ Format salah!\n\nGunakan:\n.addcase <caseTarget>|||<kodeCaseBaru>\n\nContoh:\n.addcase bot1|case 'bot2': {\n  m.reply(\`hii\`)\n}\nbreak`)

  const [targetCase, newCaseCode] = q.split("|||")
  const filePath = "./lenwy.js"
  let fileContent = fs.readFileSync(filePath, "utf-8")

  const casePattern = new RegExp(`case ['"\`]${targetCase}['"\`]:\\s*{`)
  const match = fileContent.match(casePattern)
  if (!match) return m.reply(`❌ Tidak ditemukan case '${targetCase}' di dalam lenwy.js.`)

  const startIndex = match.index

  const closingPattern = /}\s*\n\s*break/
  const afterCase = fileContent.slice(startIndex)
  const closeMatch = afterCase.match(closingPattern)

  if (!closeMatch) return m.reply(`❌ Tidak dapat menemukan akhir blok \n\n}\nbreak\n\n untuk case '${targetCase}'. Pastikan format case-nya benar.`)

  const insertPos = startIndex + closeMatch.index + closeMatch[0].length

  const updatedContent = fileContent.slice(0, insertPos) + `\n\n${newCaseCode}\n` + fileContent.slice(insertPos)

  fs.writeFileSync(filePath, updatedContent, "utf-8")

  m.reply(`✅ Case baru berhasil ditambahkan di bawah *case '${targetCase}'!*\n\n🧩 Case yang ditambahkan:\n${newCaseCode}`)
}
break

case 'editcase': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply(`Contoh: ${prefix + command} <nama_case>|<case_baru>`)
  let [caseName, ...newContentArr] = text.split('|')
  caseName = caseName.trim()
  let newContent = newContentArr.join('|').trim()
  if (!caseName || !newContent) return m.reply(`Contoh:\n\n${prefix + command} hai|case 'hai':\n{m.reply('Hai juga')\n}\nbreak`)
  const filePath = './lenwy.js';
  try {
      if (!fs.existsSync(filePath)) return m.reply(`File bot tidak ditemukan.`)
      let fileContent = fs.readFileSync(filePath, 'utf-8')
      const regex = new RegExp(`case ['"]${caseName}['"]: {([\\s\\S]*?)}\\s*break`, 'g')
      if (!regex.test(fileContent)) return m.reply(`Case *${caseName}* tidak ditemukan.`)
      const updatedFileContent = fileContent.replace(regex, `${newContent}`)
      fs.writeFileSync(filePath, updatedFileContent, 'utf-8')
      m.reply(`Case *${caseName}* berhasil diedit.`)
  } catch (error) {
      console.error('Error:', error)
      m.reply('Terjadi kesalahan saat mengedit case. Coba lagi nanti.')
  }
}
break

case 'delcase': {
if (!isCreator) return m.reply(mess.owner)
if (!q)
return m.reply("Masukan nama case yang akan di hapus")
let filePath = "./lenwy.js"
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) console.error("Kesalahan untuk menambahkan case:", err)

    const regex = new RegExp(`case\\s*['"]${q}['"]\\s*:.*?break?`, "gs")
    const modifiedData = data.replace(regex, "")
    if (modifiedData === data) {
      console.log(`Case '${q}' tidak ditemukan.`)
    } else {
      fs.writeFile(filePath, modifiedData, "utf8", (err) => {
      if (err) {
        m.reply(`Case ${q} Tidak Ada`)
        console.error("Terjadi kesalahan saat menulis file:", err)
      }
      m.reply(`Mas, Done. Coba Cek`)
      console.log(`Teks dari case '${q}' telah dihapus dari file.`)
    })
  }
})
}
break

case 'listcase':
case 'listfitur': {
  const code = fs.readFileSync("./lenwy.js", "utf8")
  var regex = /case\s+'([^']+)':/g;
  var matches = []
  var match;
  while ((match = regex.exec(code))) {
  matches.push(match[1])
  }
  let teks = `*Total Case*: ${matches.length} \n\n` 
  matches.forEach(function (x) {
    teks += "  ◦  " + x + "\n"
  })
m.reply(teks)
}
break

case 'totalfeature':
case 'totalfitur': 
case 'totalcmd': 
case 'totalcommand': {
  var mytext = fs.readFileSync("./lenwy.js").toString()
  var numUpper = (mytext.match(/case '/g) || []).length
  m.reply(`Hallo ${pushname}
Saat ini ${botname} memiliki total fitur ${numUpper}`)
}
break

case 'cekcase': {
if (!isCreator) return
if (!text) return m.reply(`Contoh: ${prefix+command} caseName`)
const caseName = text.trim()
if (!caseName) return m.reply(`Masukkan nama case yang ingin dicek. Contoh: ${prefix+command} caseName`)
const cekCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./lenwy.js", "utf-8")
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g')
const match = fileContent.match(caseRegex)
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n')
const caseLines = match[0].split('\n')
const startLine = lines.indexOf(caseLines[0]) + 1;
const endLine = startLine + caseLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `Terjadi kesalahan saat membaca file: ${error.message}` };
}};
const result = await cekCase(caseName)
if (result.error) {
m.reply(result.error)
} else if (result.found) {
const message = `*CASE DITEMUKAN!*
• Nama Case: ${caseName}
• Baris Awal: ${result.startLine}
• Baris Akhir: ${result.endLine}

Mau sekalian di ambil? Ketik getcase ${caseName}`
m.reply(message)
} else {
m.reply(`Case '${caseName}' tidak ditemukan.`)
}
}
break





























case 'setppsewa': {
  if (!isCreator) return m.reply(mess.owner);
  if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`);
  
  const path = './storage/data/image/fotosewa'; // Menentukan path file foto
  
  if (fs.existsSync(path)) {
    fs.unlinkSync(path); // Menghapus file yang sudah ada
    console.log(`File "${path}" berhasil dihapus.`);
  }

  await lenwy.downloadAndSaveMediaMessage(quoted, path);

  m.reply('Foto berhasil diperbarui menjadi foto sewa.');
}
break

case 'changewdsewa': {
if (!isCreator) return (mess.owner)
let teksnya = text ? text : ''
global.text_sewa = teksnya
m.reply(mess.success)
}
break

case 'changewdppj': {
if (!isCreator) return (mess.owner)
let teksnya = text ? text : ''
global.text_ppj = teksnya
m.reply(mess.success)
}
break

case 'sewa': {
 async function createImage(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: { url }
 }, {
 upload: lenwy.waUploadToServer
 });
 return imageMessage;
 }
 
 let tekssewa = global.text_sewa ? global.text_sewa : ` /) /) \n („• ֊ •„) \n╭───̇─∪─∪──̇──┈◯\n│❛ SEWA BOT ${botname} ˚\n│\n│1 вυℓαη : 𝖱𝗉 5.000\n│2 вυℓαη : 𝖱𝗉 10.000\n│𝟥 вυℓαη : 𝖱𝗉 15.000\n│𝟦 вυℓαη : 𝖱𝗉 18.000\n│𝟧 вυℓαη : 𝖱𝗉 21.000\n╰───────────✧✧✧`
 let teksppj = global.text_ppj ? global.text_ppj : '\n\n ╭─────────────❍\n │ ʚ˚̣̣̣͙ɞ・𝙥𝙚𝙧𝙥𝙖𝙣𝙟𝙖𝙣𝙜・ \n │\n │1 вυℓαη : 𝖱𝗉 5.000\n │𝟤 вυℓαη : 𝖱𝗉 10.000\n │𝟥 вυℓαη : 𝖱𝗉 15.000\n │ρєямαηєη : 𝖱𝗉 60.000\n │Tidak Ada,\n │Yang Abadi Tuan\n ╰─────────────❍'

 let imageUrl
 if (fs.existsSync('./storage/data/image/fotosewa.jpg')) {
 imageUrl = await createImage('./storage/data/image/fotosewa.jpg');
 } else if (fs.existsSync('./storage/data/image/fotosewa.png')) {
 imageUrl = await createImage('./storage/data/image/fotosewa.png');
 } else if (fs.existsSync('./storage/data/image/fotosewa.webp')) {
 imageUrl = await createImage('./storage/data/image/fotosewa.webp');
 } else {
 return m.reply(`Foto tidak tersedia, kamu harus ${prefix}setppsewa terlebih dahulu`)
 }

 const push = [{
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: tekssewa
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 text: `Klik Admin Dibawah Ya`
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: true,
 imageMessage: imageUrl
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Admin - ${global.ownername}","url":"https://api.whatsapp.com/send/?phone=${global.owner}&text=Haii+${global.ownername}%0ANak+Nyewa&type=phone_number&app_absent=0"}`
 },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Developer - ${global.developername}","url":"https://api.whatsapp.com/send/?phone=${global.developer}&text=%0AHaii+${global.developername}%0AAda+Yang+Bug+Nih&type=phone_number&app_absent=0"}`
 }
 ]
 })
 }, {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: teksppj
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 text: `Klik Admin Dibawah Ya`
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: true,
 imageMessage: imageUrl
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Admin - ${global.ownername}","url":"https://api.whatsapp.com/send/?phone=${global.owner}&text=Haii+${global.ownername}%0ANak+Perpanjang&type=phone_number&app_absent=0"}`
 },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Developer - ${global.developername}","url":"https://api.whatsapp.com/send/?phone=${global.developer}&text=%0AHaii+${global.developername}%0AAda+Yang+Bug+Nih&type=phone_number&app_absent=0"}`
 }
 ]
 })
 }];

 const bot = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: proto.Message.InteractiveMessage.Body.create({
 text: 'Berikut Daftarnya',
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `> ${botname}`,
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: push
 })
 })
 }
 }
 }, { quoted: m });

 await lenwy.relayMessage(m.chat, bot.message, { messageId: bot.key.id });
}
break

case 'addsewa':
case 'tambahsewa': {
 if (!isCreator) return m.reply(mess.owner)

 if (!text && !m.isGroup) {
 return m.reply(`Penggunaan:\n1. ${prefix + command} [durasi] (dari dalam grup)\n2. ${prefix + command} [durasi] [link grup] (dari chat pribadi)\n\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
 }

 let sewa = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))

 try {
 let duration, groupId

 if (m.isGroup && !text.includes('http')) {
 [duration] = text.split(' ')
 if (!duration) return m.reply(`Durasi harus diisi!\nContoh: ${prefix + command} 30d`)
 groupId = m.chat
 } else {
 let [d, link] = text.split(' ')
 if (!d || !link) return m.reply(`Durasi dan link grup harus diisi!\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
if (link.includes('?')) link = link.split('?')[0]
 duration = d

 const coded = link.split("https://chat.whatsapp.com/")[1]
 if (!coded) return m.reply("Link tidak valid 🤔")

 try {
 await lenwy.groupAcceptInvite(coded)
 m.reply('Bot berhasil masuk ke grup.')
 } catch (err) {
 if (err.message.includes('not-authorized')) {
 return m.reply('Gagal bergabung ke grup. Bot kemungkinan baru saja dikeluarkan.')
 } else if (err.message.includes('gone')) {
 return m.reply('Link grup sudah di reset.')
 } else if (err.message.includes('conflict')) {
 m.reply('Bot sudah berada di dalam grup.')
 } else if (err.message.includes('already-exists')) {
 return m.reply('Bot sudah meminta gabung ke grup.')
 } else {
 console.log(err)
 return m.reply('Terjadi error yang tidak dikenali.')
 }
 }

 groupId = await getGroupIdFromLink(link, lenwy)
 if (!groupId) return m.reply('Gagal mendapatkan ID grup.')
 }
 if (sewa.some(entry => entry.groupId === groupId)) {
 return m.reply(`Grup sudah ada dalam daftar sewa.`)
 }
 addSewaGroup(groupId, duration, sewa)
 m.reply(`✅ Grup berhasil ditambahkan ke daftar sewa selama *${duration}*.`)
 if (!m.isGroup) {
 await lenwy.sendMessage(groupId, {text: `Hallo semua, saya adalah bot ${global.botname}. Grup ini telah disewa selama *${duration}*.\n\n- Admin dapat cek sisa waktu dengan ketik *${prefix}ceksewa*\n- Untuk fitur lengkap ketik *${prefix}allmenu*`})
 }

 } catch (err) {
 console.error('Error saat addsewa:', err)
 m.reply('❌ Gagal menambahkan sewa grup.')
 }
}
break

case 'delsewa':
case 'hapussewa': {
 if (!isCreator) return m.reply(mess.owner)

 if (!text && !m.isGroup) {
 return m.reply(`Untuk menghapus sewa grup dari chat pribadi, sertakan link grup.\nContoh:\n${prefix + command} https://chat.whatsapp.com/xxxxx`)
 }

 try {
 let groupId
 let link
 if (m.isGroup) {
 groupId = m.chat
 } else if (text.includes('@g.us')) {
 groupId = text
 } else if (text.includes('https')) {
 if (text.includes('?')) link = text.split('?')[0]
 groupId = await getGroupIdFromLink(link, lenwy)
 }

 let sewa = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
 const index = sewa.findIndex(entry => entry.groupId === groupId)

 if (index === -1) return m.reply('Grup ini tidak ditemukan dalam daftar sewa.')

 sewa.splice(index, 1)
 fs.writeFileSync(pathsewa, JSON.stringify(sewa, null, 2))

 lenwy.sendMessage(groupId, {text: `Masa sewa di group ini telah *hapus*.`})
 m.reply('✅ Sewa grup berhasil dihapus.')
 } catch (err) {
 console.error('Error saat delsewa:', err)
 m.reply('❌ Gagal menghapus sewa grup.')
 }
}
break

case 'checksewa':
case 'ceksewa': {
  if (!isAdmins && !isCreator) return m.reply(mess.admin)
  if (!m.isGroup && !text) return m.reply(`Untuk mengecek sewa grup dari chat pribadi, sertakan link grup.\nContoh:\n${prefix + command} https://chat.whatsapp.com/xxxxx`)
  let groupId = from
  let link = text
  if (!m.isGroup) {
    if (text.includes('?')) link = text.split('?')[0]
    groupId = await getGroupIdFromLink(link, lenwy)
    if (!groupId) return m.reply(`Untuk mengecek sewa grup dari chat pribadi, sertakan link grup.\nContoh:\n${prefix + command} https://chat.whatsapp.com/xxxxx`)
  }
  try {
    const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
    const entry = currentDir.find(entry => entry.groupId === groupId)
    if (!entry) return m.reply(`Perintah ini hanya bisa dilakukan di dalam grup yang sudah di "${prefix}addsewa"`)
    if (entry.isAlifetime) return m.reply(`Akan Habis Hingga Owner Pensiun.`)
    const expiry = entry.expired;
    const remainingTime = expiry - Date.now()
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    const status = `${days} hari ${hours} jam ${minutes} menit`;
    m.reply(`Akan Habis Hingga ${status}.`)
  } catch (error) {
    m.reply('Terjadi kesalahan: ' + error.message)
  }
}
break

case 'removeexpired':
case 'cekexp':
case 'cekexpired': {
  if (!isCreator) return m.reply(mess.owner)
  try {
    const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
    await expiredCheck(lenwy, currentDir) // Asumsikan `conn` adalah objek koneksi bot
    m.reply('Pengecekan masa sewa sedang dilakukan, grup yang masa sewanya telah habis akan dihapus secara otomatis.')
  } catch (error) {
    m.reply(error.message)
  }
}
break

case 'perpanjangsewa': {
 if (!isCreator) return m.reply(mess.owner)
 if (!text && !m.isGroup) {
 return m.reply(`Ada 2 cara untuk melakukan ${prefix + command} ini:\n1. Di dalam grup tanpa tambahan (cukup durasi).\n2. Di private chat dengan menyertakan *durasi* + *link grup*.\n\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
 }

 await sleep(500)
 let currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))

 try {
 let groupId, duration;

 if (m.isGroup && !text.includes('https://chat.whatsapp.com/')) {
 [duration] = text.split(' ')
 if (!duration) return m.reply(`Durasi harus diisi!\nContoh:\n${prefix + command} 30d`)
 groupId = m.chat
 } else {
 let [d, link] = text.split(' ')
 if (!d || !link) return m.reply(`Durasi dan link grup harus diisi!\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
 duration = d
if (link.includes('?')) link = link.split('?')[0]
 groupId = await getGroupIdFromLink(link, lenwy)
 if (!groupId) return m.reply('Gagal mendapatkan ID grup dari link.')
 }

 if (!checkSewaGroup(groupId, currentDir)) {
 return m.reply('Grup ini tidak ditemukan dalam daftar sewa. Anda tidak dapat memperpanjang masa sewanya.')
 }

 const pos = currentDir.findIndex(entry => entry.groupId === groupId)
 if (pos !== -1) {
 const isLifetime = ['alifetime', 'permanent', 'permanen', 'perma'].includes(duration.toLowerCase())

 if (isLifetime) {
 currentDir[pos].expired = null
 currentDir[pos].isAlifetime = true
 currentDir[pos].reminded1d = false
 currentDir[pos].reminded1h = false
 currentDir[pos].reminded1m = false
 m.reply(`✅ Masa sewa grup${m.isGroup ? '' : ` dengan ID ${groupId}`} diperpanjang menjadi *Permanen*.`)
 await lenwy.sendMessage(groupId, { text: `🎉 Masa sewa grup ini telah di ubah menjadi *Permanen*!` })
 } else {
 if (currentDir[pos].expired === null || currentDir[pos].isAlifetime === true) {
 currentDir[pos].expired = Date.now() + toMs('3s') // Atau kamu bisa langsung toMs(duration)
 await sleep(500)
 }

 currentDir[pos].expired += toMs(duration)
 currentDir[pos].isAlifetime = false // Reset lifetime

 currentDir[pos].reminded1d = false
 currentDir[pos].reminded1h = false
 currentDir[pos].reminded1m = false
 let entry = currentDir[pos]
 let expiry = entry.expired
 let remainingTime = expiry - Date.now()
 var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
 var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
 var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
 
 let status = `${days} hari ${hours} jam ${minutes} menit`;
 await lenwy.sendMessage(groupId, { text: `⏳ Masa sewa telah diperpanjang selama *${duration}*. Sisa masa sewa saat ini adalah:\n*${status}*` })
 m.reply(`✅ Masa sewa grup${m.isGroup ? '' : ` dengan ID ${groupId}`} berhasil diperpanjang selama *${duration}*.`)
 }

 fs.writeFileSync(pathsewa, JSON.stringify(currentDir, null, 2))
 }

 } catch (err) {
 console.error('Error:', err)
 m.reply('Terjadi kesalahan saat memperpanjang sewa. Pastikan format benar dan link masih aktif.')
 }
}
break

case 'listsewa': {
  if (!isCreator) return m.reply(mess.owner)
  LenwyLD()
  try {
      const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
      let ordernye = `*List Sewa*\nJumlah : ${currentDir.length}\n\n`
      for (const entry of currentDir) {
        await sleep(5000)
          let idgc = entry.groupId;
            let linkgc
            try {
              let response2 = await lenwy.groupInviteCode(idgc)
              linkgc = `https://chat.whatsapp.com/${response2}`
            } catch {
              linkgc = '-'
            }
            try {
              let metadata = await lenwy.groupMetadata(idgc)
              const totalMembers = metadata.participants ? metadata.participants.length : 0;
              let expirednya = `Permanent`
              if (!entry.isAlifetime) {
                const expiry = entry.expired;
                const remainingTime = expiry - Date.now()
                var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
                var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
                expirednya = `${days || '-'} hari ${hours || '-'} jam ${minutes || '-'} menit`
              }

              ordernye += `✅ ${metadata.subject}
🎁 ID Group : ${entry.groupId}
📦 Total Member : ${totalMembers || '-'} Member
⏰ Expired : ${expirednya}
> Link Group : ${linkgc}
────────────────────────\n\n`
            } catch (e) {
              ordernye += `⛔
🎁 Group ID: ${idgc}
📦 Tidak bisa mengakses metadata grup, Kemungkinan bot telah keluar dari group.
> Pesan: ${e.message}
────────────────────────\n\n`
            }
      }
      m.reply(ordernye + `> Gunakan ${prefix}delsewa (idGroup) untuk menghapus sewa jika private chat dengan bot
> Gunakan ${prefix}delsewa untuk menghapus sewa jika berada di dalam grup`)
  } catch (error) {
      m.reply('Terjadi kesalahan saat membaca file: ' + error.message)
  }
}
break

case 'backupbot':
case 'botbackup': {
 if (!isAdmins && !isCreator) return m.reply(`Khusus admin dan owner`);

 const selectedFiles = [
  'library', 'project', 'Session', 'storage',
  'author.json', 'banned.json', 'index.js',
  'len.js', 'lenwy.js', 'package-lock.json', 'package.json', 'premium.json'
 ];

 const directoryPath = path.join("./");
 fs.readdir(directoryPath, async (err, files) => {
 if (err) return m.reply("Gagal membaca direktori: " + err);

 const fileSampah = files.filter(item =>
 item.match(/\.(gif|png|mp3|mp4|jpg|jpeg|webp|webm|zip|tar.gz|rar)$/)
 );

 if (fileSampah.length === 0) return m.reply(`Tidak ada file sampah ditemukan.`);

 let teks = `🧹 Terdeteksi ${fileSampah.length} file sampah:\n\n`;
 fileSampah.forEach((e, i) => teks += `${i + 1}. ${e}\n`);
 m.reply(teks);
 await sleep(1000);
 m.reply("Menghapus file sampah...");

 fileSampah.forEach(file => {
 try {
 fs.unlinkSync(path.join(directoryPath, file));
 } catch (e) {
 console.error(`Gagal hapus: ${file}`, e);
 }
 });

 await sleep(1000);
 m.reply("✅ Semua file sampah berhasil dihapus.");
 });

 await sleep(3000);

 const ownerJid = `${global.owner}@s.whatsapp.net`;
 const waktu = moment.tz('Asia/Jakarta').format('DD-MM');
 const zipFileName = `Sc${global.ownername || 'Bot'}_${waktu}.zip`;

 try {
 const command = `zip -r ${zipFileName} ${selectedFiles.join(" ")}`;
 execSync(command);

 await lenwy.sendMessage(ownerJid, {
 document: fs.readFileSync(`./${zipFileName}`),
 mimetype: "application/zip",
 fileName: zipFileName,
 }, { quoted: m });

 fs.unlink(`./${zipFileName}`, err => {
 if (err) console.error(`❌ Gagal hapus ${zipFileName}:`, err);
 else console.log(`✅ Backup "${zipFileName}" dikirim dan dihapus.`);
 });

 m.reply("📦 Backup berhasil dikirim ke owner.");
 } catch (err) {
 console.error("❌ Gagal backup:", err);
 m.reply("❌ Terjadi kesalahan saat backup.");
 }
}
break

case 'autobackup': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply(`*Ketik ${prefix + command} on/off*`)
    if (q == 'on') {
      global.autobakcup = true;
      m.reply(mess.success)
  } else if (q == 'off') {
      global.autobakcup = false;
      m.reply(mess.success)
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`)
  }
}
break

case 'getip':
case 'cekip': {
    if (!isCreator) return m.reply(mess.owner)
    
    try {
        const res = await fetch('http://ip-api.com/json/');
        const data = await res.json();

        let ipv4 = data.query

        if (ipv4) {
            const replyMessage = `*📮INFO SERVER*\n\n*IP :* ${ipv4}\n*Country :* ${data.city}, ${data.regionName}, ${data.country}`;
            m.reply(replyMessage)
        } else {
            m.reply('Gagal mengambil informasi IP IPv4. Silakan coba lagi nanti.')
        }
    } catch (error) {
        console.error('Error fetching IP:', error)
        m.reply('Gagal mengambil informasi IP. Silakan coba lagi nanti.')
    }
}
break

case 'setpayment': {
  if (!isAdmins) return m.reply(mess.admin);
  if (!text) return m.reply(`Contoh: Kirimkan foto dengan caption:\n${prefix + command} ewallet@Berikut Nomor E-Wallet nya:\nGopay: 085261255548\nDana: 085261255548`)
  if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`);

  let paymentMethod = text.split('@')[0]; // Metode pembayaran (misal: gopay)
  let paymentData = text.split('@')[1];
  if (!paymentData || !paymentMethod) {
      return m.reply(`Contoh: ${prefix + command} ewallet@Berikut Nomor E-Wallet nya:\nGopay: 085261255548\nDana: 085261255548`);
  }

  let groupID = m.chat; // Menggunakan ID grup untuk penyimpanan data

  let paymentDataId = `${groupID.split('@')[0]}-${paymentMethod}`; // Misal: 'groupID_gopay'

  let imageUrl = await lenwy.downloadAndSaveMediaMessage(quoted, `./storage/data/image/${paymentDataId}`);

  let _db = readDatabasePayment();

  if (!Array.isArray(_db)) {
      _db = [];
  }

  let existingPayment = _db.find(entry => entry.id === groupID && entry.key === paymentMethod);
  if (existingPayment) {
      return m.reply(`Key dengan metode ${paymentMethod} sudah ada untuk grup ini.`);
  }

  let obj_add = {
      id: groupID,
      key: paymentMethod,
      paymentData: paymentData, // Menyimpan ID pembayaran
      imageUrl: imageUrl
  };

  _db.push(obj_add);

  writeDatabasePayment(_db);

  return m.reply(`Pembayaran dengan metode ${paymentMethod} berhasil disimpan. Gambar pembayaran telah diterima.`);
}
break

case 'setbuttonurl': {
  if (!isAdmins) return
  if (!budy.includes('@')) return m.reply("Harap kirimkan format yang benar: setbuttonurl <key>@<displayName>@<url>")

  let key = text.split('@')[0];
  let displayName = text.split('@')[1];
  let url = text.split('@')[2];

  let _db = readDatabasePayment();

  let paymentData = _db.find(item => item.key === key && item.id === m.chat);
  if (!paymentData) {
      return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
  }

  let button = {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
          display_text: displayName, // Nama tombol
          url: url                   // URL yang akan diarahkan ketika tombol ditekan
      })
  };

  if (!paymentData.buttonData) {
      paymentData.buttonData = []; // Inisialisasi jika belum ada buttonData
  }

  paymentData.buttonData.push(button);

  writeDatabasePayment(_db);

  return m.reply(`Tombol URL dengan teks "${displayName}" dan URL "${url}" telah berhasil diset untuk key "${key}".`);
}
break

case 'setbuttoncopy': {
  if (!isAdmins) return
  if (!budy.includes('@')) return m.reply("Harap kirimkan format yang benar: setbuttonurl <key>@<displayName>@<url>")

  let key = text.split('@')[0];
  let displayName = text.split('@')[1];
  let nilaiCopy = text.split('@')[2];
  let _db = readDatabasePayment();

  let paymentData = _db.find(item => item.key === key && item.id === m.chat);
  if (!paymentData) {
      return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
  }

  let button = {
      name: "cta_copy",
      buttonParamsJson: JSON.stringify({
          display_text: displayName, // Nama tombol
          id: nilaiCopy,             // ID yang bisa diubah sesuai kebutuhan
          copy_code: nilaiCopy      // Teks yang disalin
      })
  };

  if (!paymentData.buttonData) {
      paymentData.buttonData = []; // Inisialisasi jika belum ada buttonData
  }

  paymentData.buttonData.push(button);

  writeDatabasePayment(_db);

  return m.reply(`Tombol salin dengan teks "${nilaiCopy}" telah berhasil diset untuk key "${key}".`);
}
break

case 'changewording': {
    if (!isAdmins) return
    if (!text) return m.reply('Contoh: changewording key@newWording');
    
    let [key, newWording] = text.split('@');
    
    if (!key || !newWording) return m.reply('Format yang benar: changewording key@newWording');
    
    let _db = readDatabasePayment();
    
    let payments = _db.filter(item => item.id === m.chat);
    
    if (payments.length === 0) {
        return m.reply("Tidak ada data pembayaran yang ditemukan di grup ini.");
    }
    
    let payment = payments.find(item => item.key === key);
    
    if (!payment) {
        return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
    }

    payment.paymentData = newWording;

    writeDatabasePayment(_db);

    return m.reply(`Wording untuk key "${key}" berhasil diubah.`);
}
break

case 'delbutton': {
    if (!isAdmins) return
    if (!text) return m.reply('Contoh: delbutton key');
    
    let key = text  // Extract the key from the text
    
    if (!key) return m.reply('Contoh: delbutton key');
    
    let _db = readDatabasePayment();
    
    let payments = _db.filter(item => item.id === m.chat);
    
    if (payments.length === 0) {
        return m.reply("Tidak ada data pembayaran yang ditemukan di grup ini.");
    }
    
    let payment = payments.find(item => item.key === key);
    
    if (!payment) {
        return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
    }

    payment.buttonData = [];  // Empty the buttonData array

    writeDatabasePayment(_db);

    return m.reply(`Semua tombol untuk key "${key}" berhasil dihapus.`);
}
break

case 'pay': {
  let _db = readDatabasePayment();
  
  let payments = _db.filter(item => item.id === m.chat);
  
  if (payments.length === 0) {
      return m.reply("Tidak ada data pembayaran yang ditemukan di grup ini.");
  }
  
  let missingButtons = [];

  for (let payment of payments) {
      if (!payment.buttonData || payment.buttonData.length === 0) {
          missingButtons.push(payment.key); // Menambahkan key ke array missingButtons
      }
  }

  if (missingButtons.length > 0) {
      return m.reply(`Key "${missingButtons.join(', ')}" belum di setbuttoncopy atau setbuttonurl.`);
  }
  
  async function createImage(filePath) {
      let { imageMessage } = await generateWAMessageContent({
          image: { url: filePath }  // Menggunakan path file lokal
      }, {
          upload: lenwy.waUploadToServer
      });
      return imageMessage;
  }

  let push = payments.map(async (payment) => {
      let imageMessage = await createImage(payment.imageUrl); // Menggunakan imageUrl dari data JSON
      
      return {
          body: proto.Message.InteractiveMessage.Body.fromObject({
              text: payment.paymentData
          }),
          footer: proto.Message.InteractiveMessage.Footer.fromObject({
              text: ``
          }),
          header: proto.Message.InteractiveMessage.Header.fromObject({
              hasMediaAttachment: true,
              imageMessage: imageMessage // Gunakan imageUrl yang ada di dalam data
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
              buttons: payment.buttonData.map(button => ({
                  name: button.name,
                  buttonParamsJson: button.buttonParamsJson
              }))
          })
      };
  });

  let pushCards = await Promise.all(push);

  let bot = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
          message: {
              interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: proto.Message.InteractiveMessage.Body.create({
                      text: 'Berikut Daftarnya',
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                      text: `> ${botname}`,
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                      hasMediaAttachment: false
                  }),
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                      cards: pushCards
                  })
              })
          }
      }
  }, { quoted: m });

  await lenwy.relayMessage(m.chat, bot.message, {
      messageId: bot.key.id
  });
}
break

case 'delpayment': {
  if (!isAdmins) return
  let key = text;
  if (!key) return m.reply("Harap kirimkan format yang benar: delpayment <key>");

  let _db = readDatabasePayment();

  let paymentIndex = _db.findIndex(item => item.key === key && item.id === m.chat);

  if (paymentIndex === -1) {
    let availableKeys = _db
      .filter(item => item.id === m.chat)
      .map((item, index) => `${index + 1}. ${item.key}`);
    if (availableKeys.length === 0) {
      return m.reply("Tidak ada data pembayaran yang tersedia di grup ini.");
    }
    return m.reply(`Key "${key}" tidak ditemukan. Key yang tersedia:\n${availableKeys.join('\n')}`);
  }

  let deletedPayment = _db.splice(paymentIndex, 1)[0];

  if (deletedPayment.imageUrl) {
    const fs = require('fs');
    fs.unlink(deletedPayment.imageUrl, (err) => {
      if (err) console.error("Gagal menghapus file gambar:", err);
    });
  }

  writeDatabasePayment(_db);

  m.reply(`Data pembayaran dengan key "${key}" berhasil dihapus.`);
}
break

case 'cekkhodam':
case 'cekkodam': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const tik = await (await fetch(`https://${global.api.ham.domain}/primbon/cekkhodam?apikey=${global.api.ham.apikey}&name=${q}`)).json()
m.reply(tik.result.message)
}
break



case 'brat': {
 if (isBan) return m.reply('⚠ *Kamu Di Ban Owner*');
 if (!text) return m.reply(`Penggunaan : ${prefix + command} <teks>`);
 try {
const proses = await (await fetch(`https://${global.api.maelyn.domain}/api/canvas/brat?text=${text}&isvideo=false&speed=medium`,
  {
    method: "GET",
    headers: {
      "x-maelyn-auth": global.api.maelyn.apikey
    }
  }
)).json()
 console.log(proses)
 await lenwy.sendImageAsSticker(from, proses.result.url, m, { packname: global.packname, author: global.author });
 } catch (e) {
 console.log(e);
 await m.reply(`Terjadi kesalahan saat membuat stiker`);
 }
}
break

case 'cekipurl': {
if (!text) return m.reply(`Contoh: ${prefix + command} urlNya\n\n> Note: Tanpa https://`)
if (text.startsWith('https://')) return m.reply(`Note: Tanpa https://`)
  try {
    const address = await dns.lookup(text);
    m.reply(`IPv4 Address of https://${text}: ${address.address}`);
  } catch (err) {
    console.error('Error:', err.message);
  }    
}
break

case 'ttp': {
  if (!q) return m.reply(`Gunakan dengan cara ${command} text\n\nContoh : ${command} lucu abis`)
  if (q.length > 75) return m.reply(`Teksnya terlalu panjang`)
  
  var data = await getBuffer(`https://${global.api.lolhuman.domain}/api/ttp?apikey=${global.api.lolhuman.apikey}&text=${encodeURIComponent(q)}`)
  var rand2 = getRandom('.webp')
  fs.writeFileSync(`./${rand2}`, data)
    exec(`webpmux -set exif ./data.exif ./${rand2} -o ./${rand2}`, async (error) => {
    lenwy.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: m })
    execSync(`rm -rf ./${rand2}.png`)
    fs.unlinkSync(`./${rand2}`)
  })
}
break
        
case 'attp': {
  if (!q) return m.reply(`Gunakan dengan cara ${command} text\n\nContoh : ${command} lucu abiss`)
  if (q.length > 75) return reply(`Teksnya terlalu panjang`)
            
  var data = await getBuffer(`https://${global.api.lolhuman.domain}/api/attp?apikey=${global.api.lolhuman.apikey}&text=${encodeURIComponent(q)}`)
  var rand2 = getRandom('.webp')
  fs.writeFileSync(`./${rand2}`, data)
  exec(`webpmux -set exif ./data.exif ./${rand2} -o ./${rand2}`, async (error) => {
    lenwy.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: m })
    fs.unlinkSync(`./${rand2}`)
})
}
break

case 'setstick': {
  if (!isAdmins) return m.reply(mess.admin);
  if (!text) return m.reply(`Contoh: Reply foto/sticker dengan caption:\n${prefix + command} (Key)`)
  if (!/image/.test(mime)) return m.reply(`Foto atau Sticker nya Mana?`);

  let nameKey = text
  let groupID = m.chat; // Menggunakan ID grup untuk penyimpanan data
  let imageUrl = await lenwy.downloadAndSaveMediaMessage(quoted, `./storage/data/sticker/${nameKey + groupID}`)
  let db_sticker = JSON.parse(fs.readFileSync('./storage/databaseSticker.json'))

  if (!Array.isArray(db_sticker)) {
    db_sticker = [];
  }
  let existingPayment = db_sticker.find(entry => entry.id === groupID && entry.key === nameKey);
  if (existingPayment) {
      return m.reply(`Sticker dengan key ${nameKey} sudah ada untuk grup ini.`);
  }
  let obj_add = {
    id: groupID,
    key: nameKey,
    imageUrl: imageUrl
  };

  db_sticker.push(obj_add);
  fs.writeFileSync('./storage/databaseSticker.json', JSON.stringify(db_sticker, null, 3), 'utf-8');
  m.reply(`Sticker ${nameKey} berhasil disimpan`);
}
break

case 'liststick': {
  if (text) return
  let db_sticker = JSON.parse(fs.readFileSync('./storage/databaseSticker.json'))
  if (!isAlreadyResponStickGroup(m.chat, db_sticker)) return m.reply(`*Belum Ada Sticker Yang Terdaftar Di Grup Ini*`);
  let sortedList = db_sticker.filter(i => i.id === m.chat).sort((a, b) => a.key.localeCompare(b.key));
  let tek = `List Sticker Yang Terdaftar Di Group ${groupName}\n`
  for (let i of sortedList) {
    tek += `\n> *${i.key}*`
  }
  m.reply(tek)
}
break

case 'delstick': {
  if (!isAdmins) return m.reply(mess.admin);
  if (!text) return m.reply(`Contoh: ${prefix + command} (key)`);
  let db_sticker = JSON.parse(fs.readFileSync('./storage/databaseSticker.json'))
  if (!isKeyResponStick(m.chat, text.toLowerCase(), db_sticker)) return m.reply(`*Sticker Dengan Key ${text} Tidak Ada Dalam Liststick*`);
  await delResponStick(m.chat, text.toLowerCase(), db_sticker)
  m.reply(`*Sukses Menghapus Sticker Dengan Key ${text}*`)
}
break

case 'mutegc': {
  if (!isCreator) return

  let gcList;
  try {
    const data = fs.readFileSync('./storage/gcMuted.json', 'utf-8');
    gcList = JSON.parse(data);
  } catch (error) {
    console.error('Error membaca file gcMuted.json:', error);
    gcList = [];
  }

  let groupId;

  if (m.isGroup) {
    groupId = m.chat;
  } else {
    if (!text) return m.reply(`Kirim link grupnya dulu bang!\nContoh:\n${prefix + command} https://chat.whatsapp.com/xxxxx`)
    let linknya = text
    if (text.includes('?')) linknya = text.split('?')[0]
    try {
      groupId = await getGroupIdFromLink(linknya, lenwy);
    } catch (err) {
      console.error(err);
      return m.reply("Gagal ambil ID grup dari link. Link mungkin tidak valid atau sudah expired.");
    }
  }

  if (gcList.includes(groupId)) return m.reply(`Grup ${groupId} sudah dalam daftar mute.`);

  gcList.push(groupId);
  fs.writeFileSync('./storage/gcMuted.json', JSON.stringify(gcList, null, 2));
  m.reply(`Grup ${groupId} berhasil dimute.`);
}
break

case 'unmutegc': {
  if (!isCreator) return

  let gcList;
  try {
    const data = fs.readFileSync('./storage/gcMuted.json', 'utf-8');
    gcList = JSON.parse(data);
  } catch (error) {
    console.error('Error membaca file gcMuted.json:', error);
    gcList = [];
  }

  let groupId;

  if (m.isGroup) {
    groupId = m.chat;
  } else {
    if (!text) return m.reply(`Kirim link grupnya dulu bang!\nContoh:\n${prefix + command} https://chat.whatsapp.com/xxxxx`);
    let linknya = text
    if (text.includes('?')) linknya = text.split('?')[0]
    try {
      groupId = await getGroupIdFromLink(linknya, lenwy);
    } catch (err) {
      console.error(err);
      return m.reply("Gagal mengambil ID grup dari link. Link mungkin tidak valid atau sudah kadaluarsa.");
    }
  }

  const index = gcList.indexOf(groupId);
  if (index === -1) return m.reply(`Grup ${groupId} tidak ditemukan dalam daftar mute.`);

  gcList.splice(index, 1);
  fs.writeFileSync('./storage/gcMuted.json', JSON.stringify(gcList, null, 2));
  m.reply(`Grup ${groupId} berhasil dihapus dari daftar gcMuted.`);
}
break

case 'pantun': {
    try {
        let response = await axios.get('https://apis.xyrezz.online-server.biz.id/api/pantun');
        let pantunList = response.data;
        let randomIndex = Math.floor(Math.random() * pantunList.length);
        let randomPantun = pantunList[randomIndex];

        m.reply(randomPantun.trim());
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat memuat pantun.');
    }
}
break

case 'bratvid': {
if (!text) return m.reply(`text nya`)
 try {
 const proses = await (await fetch(`https://${global.api.maelyn.domain}/api/canvas/brat?text=${text}&isvideo=true&speed=medium`,
  {
    method: "GET",
    headers: {
      "x-maelyn-auth": global.api.maelyn.apikey
    }
  }
)).json()
 console.log(proses)
 await lenwy.sendImageAsSticker(from, proses.result.url, m, { packname: global.packname, author: global.author })

 } catch (err) {
 console.error(err);
 m.reply("Maaf, terjadi kesalahan saat memproses permintaan.");
 }
}
break

case 'txt2chibi':
case 'text2chibi':
case 'texttochibi':
case 'chibi': {
  if (!text) m.reply(`Contoh: ${prefix + command} a boy with a black jacket and blue hair`)
  LenwyLD()
  let res = await (await fetch(`https://${global.api.maelyn.domain}/api/txt2chibi?prompt=${text}&resolution=Square`, {
    headers: {
      'x-maelyn-auth': global.api.maelyn.apikey
    }
  })).json()
  for (let imageUrl of res.result) {
    await lenwy.sendMessage(m.chat, { image: { url: imageUrl }}, { quoted: m })
  }
}
break

case 'txt2chibi':
case 'text2chibi':
case 'texttochibi':
case 'chibi': {
  if (!text) m.reply(`Contoh: ${prefix + command} a boy with a black jacket and blue hair`)
  LenwyLD()
  let res = await (await fetch(`https://${global.api.maelyn.domain}/api/txt2img/minecraft?prompt=${text}&resolution=Square`, {
    headers: {
      'x-maelyn-auth': global.api.maelyn.apikey
    }
  })).json()
  for (let imageUrl of res.result) {
    await lenwy.sendMessage(m.chat, { image: { url: imageUrl }}, { quoted: m })
  }
}
break

case 'fetch': {
if (!text) m.reply('Masukkan link nya')

try {
let res = await (await fetch(`${text}`)).json()
console.log(res)
m.reply(`${text}\n\n`+ JSON.stringify(res, null, 2))
} catch (e) {
m.reply(JSON.stringify(e, null, 2))
m.reply(e.message)
}
}
break

case 'addripper': {
  if (!isCreator) return m.reply(mess.owner)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (!text) return m.reply(`Masukkan nomor yang ingin ditambahkan.\nContoh: ${prefix + command} 628xxx`)

    let nomor = text.replace(/[^0-9]/g, '')
    var cek = await lenwy.onWhatsApp(nomor)
    if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
    const filePath = path.join(__dirname, './storage/dataRipper.json');

    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }

    let data = JSON.parse(fs.readFileSync(filePath));

    if (data.includes(nomor)) {
        return m.reply(`Nomor ${nomor} sudah terdaftar sebagai ripper.`)
    }

    data.push(nomor);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    m.reply(`Nomor ${nomor} berhasil ditambahkan ke daftar ripper.`)
}
break

case 'delripper': {
  if (!isCreator) return m.reply(mess.owner)
    if (!text) return m.reply(`Masukkan nomor yang ingin dihapus.\nContoh: ${prefix + command} 628xxx`);

    let nomor = text.replace(/[^0-9]/g, '');
    const filePath = path.join(__dirname, './storage/dataRipper.json');

    if (!fs.existsSync(filePath)) {
        return m.reply('Daftar ripper masih kosong.');
    }

    let data;
    try {
        data = JSON.parse(fs.readFileSync(filePath));
        if (!Array.isArray(data)) data = [];
    } catch (e) {
        data = [];
    }

    if (!data.includes(nomor)) {
        return m.reply(`Nomor ${nomor} tidak ditemukan dalam daftar ripper.`);
    }

    data = data.filter(n => n !== nomor);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    m.reply(`Nomor ${nomor} berhasil dihapus dari daftar ripper.`);
}
break

case 'listripper': {
  if (!isCreator) return m.reply(mess.owner)

    let owner;
    try {
        owner = JSON.parse(fs.readFileSync('./storage/dataRipper.json', 'utf8'))
    } catch (err) {
        console.error('Error reading premium.json:', err)
        return m.reply('*Gagal Memuat Daftar Premium.*')
    }

    if (owner.length === 0) return m.reply('*Daftar Ripper Masih Kosong.*')

    let teksooo = '\`— 𝗟𝗶𝘀𝘁 𝗥𝗶𝗽𝗽𝗲𝗿\`\n';
    for (let i of owner) {
        teksooo += `✉️ ${i}\n`
    }
    teksooo += `\nTotal: ${owner.length}`;

    lenwy.sendMessage(from, { text: teksooo.trim() }, { quoted: m })
}
break

case 'minta': {
  if (!["120363344469321945@g.us","120363419539538282@g.us"].includes(from)) return
  if (!text) return m.reply(`Contoh: minta hd`)
  if (text.toLowerCase() === command.toLowerCase()) return m.reply(`😊`)
  try {
    const caseName = text.toLowerCase()
    const fileContent = fs.readFileSync("./lenwy.js").toString()
    let validasii = fileContent.split(`case '${caseName}'`)
    const caseSplit = validasii? validasii : fileContent.split(`case '${caseName}'`)
    if (caseSplit.length < 2) {
      throw new Error(`Case '${caseName}' tidak ditemukan.`)
    }
    const caseContent = caseSplit[1].split("break")[0]
    const caseCode = "case " + `'${caseName}'` + caseContent + "break";
    const caseRegex = /((?:case\s+'[^']+'\s*:\s*)+)\s*\{/g
    let match, found = false
    let startIndex = -1, endIndex = -1
    let lastAlias = null
    while ((match = caseRegex.exec(caseCode)) !== null) {
      const rawCases = match[1]
      const aliases = [...rawCases.matchAll(/case\s+'([^']+)'/g)].map(m => m[1])
      if (aliases.includes(caseName)) {
        found = true
        lastAlias = aliases[aliases.length - 1] // gunakan yang terakhir karena itu yang buka blok {
        startIndex = match.index
        break
      }
    }

    if (!found || !lastAlias) return m.reply(`Case '${caseName}' tidak ditemukan.`)
    endIndex = caseCode.indexOf('break', startIndex)
    if (endIndex === -1) endIndex = caseCode.length
    const blockCode = caseCode.slice(startIndex, endIndex + 5).trim()
    const newBlock = blockCode.replace(/^((?:case\s+'[^']+'\s*:\s*)+)\s*\{/, `case '${lastAlias}': {`)
    m.reply(`editcase ${lastAlias}|${newBlock}`)
  } catch (err) {
    m.reply(`Gagal mengambil case '${text}': ${err.message}`)
  }
}
break

case 'cekidch': 
case 'inspectch': {
 if (!text) return m.reply('📌 Kirim link channel WhatsApp-nya!');
 if (!text.includes("https://whatsapp.com/channel/")) return m.reply('❌ Link tidak valid! Format harus: https://whatsapp.com/channel/...');

 try {
 const channelCode = text.split('https://whatsapp.com/channel/')[1];
 const res = await lenwy.newsletterMetadata("invite", channelCode);

 if (!res?.id) return reply('❌ Gagal mengambil info channel.');

 const verified = res.verification === 'VERIFIED' ? '✅ Ya' : '❌ Tidak';
 const status = res.state === 'ACTIVE' ? '🟢 Aktif' : '🔴 Tidak aktif';
 
 const teks = `⬣ *INFORMASI CHANNEL*\n\n` +
 `📌 *Nama:* ${res.name || '-'}\n` +
 `🆔 *ID:* ${res.id}\n` +
 `👥 *Followers:* ${res.subscribers?.toLocaleString('id-ID') || 0}\n` +
 `📶 *Status:* ${status}\n` +
 `☑️ *Verified:* ${verified}`;

 await lenwy.sendMessage(m.chat, {
 text: teks,
 footer: `🔹 Gunakan tombol di bawah untuk copy ID Channel`,
 title: `📡 Channel: ${res.name || 'Tidak diketahui'}`,
 interactiveButtons: [
 {
 name: 'cta_copy',
 buttonParamsJson: JSON.stringify({
 display_text: '📋 Copy ID Channel',
 id: res.id,
 copy_code: res.id
 })
 }
 ]
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 return m.reply(`❌ *Gagal mengambil data channel:*\n${err.message || 'Tidak diketahui.'}`);
 }
}
break

case 'id': {
if (from != '120363404278304048@g.us') return
if (!text) return m.reply(`Contoh: ${prefix + command} bot/aku`)
if (text === 'bot') {
let lidnya = lenwy.user?.lid.replace(/:\d+@/, '@')
let idnya = lenwy.user?.id.replace(/:\d+@/, '@')
m.reply(`Lid: ${lidnya}
Id: ${idnya}`)
} else if (text === 'aku') {
m.reply(`Id: ${m.sender}`)
} else {
return m.reply(`Contoh: ${prefix + command} bot/aku`)
}
if (m.sender === "152767909896298@lid") return
await sleep (5000)
await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
break


case 'stalkroblox':
case 'robloxstalk': {
 if (!text) return m.reply('masukkan username roblox anda');
 LenwyLD();
 try {
 const response = await (await fetch(`https://${global.api.ham.domain}/stalk/roblox?apikey=${global.api.ham.apikey}&nickname=${encodeURIComponent(text)}`)).json()
 const data = response.result;
 console.log(data)

 const formatPesan = `*🍒 ROBLOX PROFILE 🍒*\n\n` +
 `*PROFILE*\n` +
 `> *Username*: @${data.userInfo.name || '-'}\n` +
 `> *Display Name*: ${data.userInfo.displayName || '-'}\n` +
 `> *Bio*: ${data.userInfo.description && data.userInfo.description !== '-' ? data.userInfo.description : 'No bio available'}\n\n` +
 `*INFORMATION*\n` +
 `> *Created*: ${new Date(data.userInfo.created).toLocaleString('en-US')}\n` +
 `> *Verified*: ${data.userInfo.hasVerifiedBadge ? '✅' : '❌'}\n\n` +
 `*STATISTICS*\n` +
 `> *Friends*: ${data.userFriendCount.count.toLocaleString() || '-'}`

 await lenwy.sendMessage(m.chat, { image: { url: data.userAvatar.data[0].imageUrl }, caption: formatPesan }, { quoted: m });
 } catch (e) {
 console.error(e);
 m.reply('Terjadi kesalahan saat mengambil data.');
 }
}
break

default:
  if (budy.startsWith("=>")) {
    if (!isCreator) return m.reply('Only owner can use this command.');
    try {
      const res = util.format(await eval(`(async () => { return ${budy.slice(3)} })()`));
      await sleep(2000)
      await m.reply(res);
    } catch (e) {
      await m.reply(String(e));
    }
  }

  if (budy.startsWith(">")) {
    if (!isCreator) return m.reply('Only owner can use this command.');
    let kode = budy.trim().split(/ +/)[0];
    const inner = (kode == ">>") ? q : q;
    try {
      const teks = util.format(await eval(`(async () => { ${kode == ">>" ? "return " : ""} ${inner}})()`));
      await sleep(2000)
      await m.reply(teks);
    } catch (e) {
      await m.reply(String(e));
    }
  }

  if (isCmd && budy) {
    if (m.isBaileys || from.endsWith('broadcast')) return;

    const text = budy.toLowerCase();
    const msgs = global.db?.data?.database || {};

    if (text in msgs) {
      try {
        await lenwy.copyNForward(from, msgs[text], true);
      } catch (err) {
        console.error('copyNForward error:', err);
      }
    }
  }
}
} catch (err) {
  const e = String(err);
  console.log('[ERROR]', e);

  if (e.includes('rate-overlimit')) {
    console.warn('[WARNING] Kena rate limit WhatsApp. Tunggu sebelum coba lagi.');
    return;
  }

  console.error('[UNHANDLED ERROR]', err);
}
}

let file = require.resolve(__filename);
if (process.env.NODE_ENV !== "production") {
  fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.green(`📑 Update: ${__filename}`));
    delete require.cache[file];
    try {
      require(file);
    } catch (e) {
      console.error('Hot-reload error:', e);
    }
  });
}
