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
const { error } = require('console')
const { cekStatusAkunDigi, cekLayananDigiPrabayar, isiSaldoDigi, orderDigi, cekItemDigi, cekOrderanDigi } = require('./project/digiflazz')
const { generateQris, checkQrisStatus, formatSaldo } = require('./project/paymentGateway.js')
const { webpToMp4, imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./library/exif')
const { igdl } = require('btch-downloader')
const { cekMl } = require('./library/mlRegi.js')
const { getPlugin, reloadPlugins } = require('./library/pluginLoader')
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
let tebakangka = db.data.game.tebakangka = {}
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
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(rawBody) ? rawBody.match(/^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/gi)[0]: '';

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
const hariini3 = moment.tz('Asia/Jakarta').format('DD MM YYYY')
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
    user.afk ??= {}

    if (m.isGroup) {
        user.afk[m.chat] ??= { time: -1, reason: '' }
        
        const chats = global.db.data.chats[m.chat] ??= {}
        chats.onlyAdmin ??= false
        chats.wlcm ??= true
        chats.left ??= true
        chats.linkgc ??= ''
        //antimenu
        chats.antilinktt ??= false
        chats.antilinkyt ??= false
        chats.antiwame ??= false
        chats.antilink1 ??= false
        chats.antilink2 ??= false
        chats.antitoxic1 ??= false
        chats.antitoxic2 ??= false
        chats.antilinkgc1 ??= false
        chats.antilinkgc2 ??= false
        chats.antisw1 ??= false
        chats.antisw2 ??= false
    }

    if (!isNumber(user.level)) user.level = 0
    user.autolevelup ??= true

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
  if (isBan) return
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

// ========== RESPONSE LIST FITUR ========== //
if (m.isGroup && isAlreadyResponList(m.chat, String(body || '').toLowerCase(), db_respon_list)) {
  var get_data_respon = getDataResponList(m.chat, String(body || '').toLowerCase(), db_respon_list)
  if (get_data_respon.isImage === false) {
    lenwy.sendMessage(m.chat, { text: sendResponList(m.chat, String(body || '').toLowerCase(), db_respon_list) }, {quoted: m})
  } else {
    try {
      const buffer = await getBuffer(get_data_respon.image_url)
      if (!buffer || !Buffer.isBuffer(buffer)) throw new Error("Buffer gambar tidak valid atau gagal diunduh");
      lenwy.sendMessage(m.chat, { image: buffer, caption: get_data_respon.response }, { quoted: m })
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


// ========== ANTI FITUR ========== //
const chat = db.data.chats[m.chat] || {};
const isNormalMember = !m.key.fromMe && !isCreator && !isAdmins;
const isThisGcLink = chat.linkgc ? new RegExp(chat.linkgc, 'i').test(text) : false;
const punish = async (replyMsg, shouldKick = false) => {
  if (replyMsg) m.reply(replyMsg);
  lenwy.sendMessage(m.chat, { delete: m.key });
  if (shouldKick) {
    await sleep(1500);
    await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
  }
};
if (isNormalMember) {
  if (chat.antilinktt && text.includes('vt.tiktok.com')) { 
    return punish(`*Anti link TikTok sedang aktif*\n⛔ *Pesan kamu akan dihapus*`);
  }
  if (chat.antilinkyt && text.includes('youtube.')) { 
    return punish(`*Anti link YouTube sedang aktif*\n⛔ *Pesan kamu akan dihapus*`);
  }
  if (chat.antiwame && text.includes('wa.me')) {
    return punish(`*Anti wa.me sedang aktif*\n⛔ *Pesan kamu akan dihapus*`);
  }
  if (!isThisGcLink && text.includes('http')) {
    if (chat.antilink1) return punish(`*Anti link sedang aktif*\n⛔ *Pesan kamu akan dihapus*`, false);
    if (chat.antilink2) return punish(`*Anti link sedang aktif*\n⛔ *Pesan kamu akan dihapus dan kamu akan dikeluarkan*`, true);
  }
  if (toxicWords.exec(m.text || budy)) {
    if (chat.antitoxic1) return punish(null, false);
    if (chat.antitoxic2) return punish(null, true);
  }
  if (!isThisGcLink && text.includes('chat.whatsapp.com')) {
    if (chat.antilinkgc1) return punish(`*Anti link grup sedang aktif*\n⛔ *Pesan kamu akan dihapus*`, false);
    if (chat.antilinkgc2) return punish(`*Anti link grup sedang aktif*\n⛔ *Pesan kamu akan dihapus dan kamu akan dikeluarkan*`, true);
  }
  if (m.mtype === 'groupStatusMentionMessage') {
    if (chat.antisw1) return punish(`*Anti status mention sedang aktif*\n⛔ *Pesan kamu akan dihapus*`, false);
    if (chat.antisw2) return punish(`*Anti status mention sedang aktif*\n⛔ *Pesan kamu akan dihapus dan kamu akan dikeluarkan*`, true);
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
  },
  tebakangka: {
    data: tebakangka,
    title: 'Tebak Angka',
    replay: 'tebak angka',
    isNumberGame: true
  }
}

for (const { data, title, replay, extraDelete, isNumberGame } of Object.values(quizMap)) {
  if (m.key.fromMe) continue
  if (!isCmd || !data[m.chat]) continue
  kuis = true
  
  if (isNumberGame) {
    let userTebak = parseInt(body);
    let jawabanBenar = parseInt(data[m.chat]); 
    
    if (!isNaN(userTebak)) {
      if (userTebak === jawabanBenar) {
        await m.reply(`${global.emoji} *${title}*\n\n🎁 *Jawaban Benar*\n📣 *Ingin Bermain Lagi? Silakan Ketik ${prefix + replay}*`);
        delete data[m.chat]; 
      } else {
        let clue = userTebak > jawabanBenar ? 'Angka terlalu besar 📉' : 'Angka terlalu kecil 📈';
        await m.reply(`❌ *Salah!*\n\n${clue}`);
      }
      return;
    }
    continue;
  }

  jawaban = data[m.chat]
  if (body.toLowerCase() === jawaban) {
    await m.reply(`${global.emoji} *${title}*\n\n🎁 *Jawaban Benar*\n📣 *Ingin Bermain Lagi? Silakan Ketik ${prefix + replay}*`)
    delete data[m.chat]
    if (extraDelete) extraDelete()
  } else {
    await m.reply('❌ *Jawaban Salah!*')
  }
  return
}
this.game = this.game || {};
let room = Object.values(this.game).find(
  (room) =>
    room.id &&
    room.game &&
    room.state &&
    room.id.startsWith('tictactoe') &&
    [room.game.playerX, room.game.playerO].includes(m.sender) &&
    room.state === 'PLAYING'
);

if (room) {
  let ok;
  let isWin = false;
  let isTie = false;
  let isSurrender = false;

  if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return;
  isSurrender = !/^[1-9]$/.test(m.text);

  if (m.sender !== room.game.currentTurn) {
    if (!isSurrender) return true;
  }

  if (
    !isSurrender &&
    1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))
  ) {
    m.reply({
      '-3': 'Game telah berakhir',
      '-2': 'Invalid',
      '-1': 'Posisi Invalid',
      0: 'Posisi Invalid',
    }[ok]);
    return true;
  }

  if (m.sender === room.game.winner) isWin = true;
  else if (room.game.board === 511) isTie = true;

  let arr = room.game.render().map((v) => {
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
    }[v];
  });

  if (isSurrender) {
    room.game._currentTurn = m.sender === room.game.playerX;
    isWin = true;
  }

  let winner = isSurrender ? room.game.currentTurn : room.game.winner;
  let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${
  isWin
    ? `@${winner.split('@')[0]} Menang!`
    : isTie
    ? `Game berakhir`
    : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${
        room.game.currentTurn.split('@')[0]
      })`
}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`;

  if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from;

  if (room.x !== room.o)
    await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) });
  await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) });

  if (isTie || isWin) {
    delete this.game[room.id];
  }
}

this.suit = this.suit || {};
let roof = Object.values(this.suit).find(
  (roof) => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender)
);

if (roof) {
  let win = '';
  let tie = false;

  if (
    m.sender == roof.p2 &&
    /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) &&
    m.isGroup &&
    roof.status == 'wait'
  ) {
    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
      lenwy.sendTextWithMentions(
        from,
        `@${roof.p2.split(`@`)[0]} menolak suit, suit dibatalkan`,
        m
      );
      delete this.suit[roof.id];
      return true;
    }

    roof.status = 'play';
    roof.asal = from;
    clearTimeout(roof.waktu);

    lenwy.sendText(
      from,
      `Suit telah dikirimkan ke chat

@${roof.p.split(`@`)[0]} dan 
@${roof.p2.split(`@`)[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split(`@`)[0]}`,
      m,
      { mentions: [roof.p, roof.p2] }
    );

    if (!roof.pilih)
      lenwy.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m);
    if (!roof.pilih2)
      lenwy.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m);

    roof.waktu_milih = setTimeout(() => {
      if (!roof.pilih && !roof.pilih2) {
        lenwy.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`);
      } else if (!roof.pilih || !roof.pilih2) {
        win = !roof.pilih ? roof.p2 : roof.p;
        lenwy.sendTextWithMentions(
          from,
          `@${
            (roof.pilih ? roof.p2 : roof.p).split(`@`)[0]
          } tidak memilih suit, game berakhir`,
          m
        );
      }
      delete this.suit[roof.id];
      return true;
    }, roof.timeout);
  }

  let jwb = m.sender == roof.p;
  let jwb2 = m.sender == roof.p2;
  let g = /gunting/i;
  let b = /batu/i;
  let k = /kertas/i;
  let reg = /^(gunting|batu|kertas)/i;

  if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
    roof.pilih = reg.exec(m.text.toLowerCase())[0];
    roof.text = m.text;
    m.reply(
      `Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`
    );
    if (!roof.pilih2)
      lenwy.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0);
  }

  if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
    roof.pilih2 = reg.exec(m.text.toLowerCase())[0];
    roof.text2 = m.text;
    m.reply(
      `Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
    );
    if (!roof.pilih)
      lenwy.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0);
  }

  let stage = roof.pilih;
  let stage2 = roof.pilih2;

  if (roof.pilih && roof.pilih2) {
    clearTimeout(roof.waktu_milih);

    if (b.test(stage) && g.test(stage2)) win = roof.p;
    else if (b.test(stage) && k.test(stage2)) win = roof.p2;
    else if (g.test(stage) && k.test(stage2)) win = roof.p;
    else if (g.test(stage) && b.test(stage2)) win = roof.p2;
    else if (k.test(stage) && b.test(stage2)) win = roof.p;
    else if (k.test(stage) && g.test(stage2)) win = roof.p2;
    else if (stage == stage2) tie = true;

    lenwy.sendText(
      roof.asal,
      `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split(`@`)[0]} (${roof.text}) ${
        tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`
      }
@${roof.p2.split(`@`)[0]} (${roof.text2}) ${
        tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`
      }`.trim(),
      m,
      { mentions: [roof.p, roof.p2] }
    );
    delete this.suit[roof.id];
  }
}

if (m.isGroup) {
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of mentionUser) {
        let user = global.db.data.users[jid]
        if (!user || !user.afk || !user.afk[m.chat]) continue
        
        let afkTime = user.afk[m.chat].time
        if (!afkTime || afkTime < 0) continue
        
        let reason = user.afk[m.chat].reason || ''
        let ygSedangAfk = await lenwy.getName(jid) || jid
        let pushnameYgNgetag = await lenwy.getName(m.sender) || m.sender

        m.reply(`⚠️ *${pushnameYgNgetag} Jangan Tag ${ygSedangAfk}! Dia Sedang AFK*
❗❗ *Dengan Alasan :* ${reason ? reason : 'Tidak ada'}
🕒 *Selama : ${clockString(new Date - afkTime)}*
`.trim())
    }

    if (global.db.data.users[m.sender]?.afk?.[m.chat]?.time > -1) {
        let user = global.db.data.users[m.sender]
        let afkData = user.afk[m.chat]
        
        m.reply(`*${pushname} Kembali Dari Afk*
⚠️ ${'*Dengan Alasan :* ' + (afkData.reason ? afkData.reason : 'Tidak ada')}
🕒 *Selama : ${clockString(new Date - afkData.time)}*
`.trim())
        
        afkData.time = -1
        afkData.reason = ''
    }
}


// Jalankan plugin jika command terdaftar di folder plugins/
const matchedPlugin = getPlugin(command);
if (matchedPlugin) {
  const libs = {
    WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent,
    proto, generateWAMessageContent, InteractiveMessage, generateWAMessage,
    prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType,
    fs, path, util, ms, toMs, chalk, os, axios, fsx, crypto, ffmpeg, moment, cron,
    color, bgcolor, uploader60Minute, uploaderLebih, up, fromBuffer, cheerio, speed,
    Image, performance, exec, spawn, execSync, dns,
    smsg, tanggal, getTime, formatp, isUrl, sleep, clockString, runtime, fetchJson,
    getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins,
    generateProfilePicture, toJid,
    JalanTikusMeme, Quotes, Couples, Darkjokes, Cerpen,
    addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup,
    sendResponList, updateResponList, getDataResponList, updateKey,
    readDatabasePayment, writeDatabasePayment, updateId, getGroupIdFromLink,
    resetList, deleteListSampah,
    isKeyResponStick, getDataResponStick, isAlreadyResponStickGroup, delResponStick,
    addSewaGroup, getSewaExpired, getSewaPosition, checkSewaGroup, getAllPremiumUser,
    cekStatusAkunDigi, cekLayananDigiPrabayar, isiSaldoDigi, orderDigi, cekItemDigi, cekOrderanDigi,
    generateQris, checkQrisStatus, formatSaldo,
    webpToMp4, imageToWebp, videoToWebp, writeExifImg, writeExifVid,
    igdl, cekMl,
  };
  return await matchedPlugin.execute({
    lenwy, m, chatUpdate, store, from, sender, senderNumber, pushname,
    body, budy, rawBody, args, text, q, command, prefix, isCmd, cmd, full_args,
    isAdmins, isCreator, isBotAdmins, isBot, isPrem, isBan, isUser,
    isGcMuted, gcMutedPath, gcMuted, isGcTopup, gcTopupPath, gcTopup,
    mess, groupName, groupMetadata, participants, groupAdmins, botNumber,
    author, authorr, owner, creatorNumbers, premiumNumbers, bannedNumbers,
    premiumFilePathh, bannedFilePathh, creatorFilePathh, pathsewa,
    quoted, quoted2, mime, isMedia, isQuotedViewOnce, type, quotedMsg, mentioned, now, fromMe,
    numberQuery, mentionByTag, qtod, more, readmore,
    db_respon_list, reminders,
    kuismath, tebakgambar, tebakkata, caklontong, caklontong_desk,
    tebakkalimat, tebaklirik, tebaktebakan, tebakangka,
    harinya, tanggalnya, bulannya, tahunnya, namabulannya,
    jamnya, menitnya, detiknya, hariini, hariini2, hariini3, hariini4,
    waktubackup, wib, wit, wita, time, time2, salam, ucapanWaktu,
    LenwyLD, reloadPlugins, libs,
  });
}

switch (command) {
// MULAI DARI SINI YAAAA
// [INFO] -> plugins/info/kode.js
// [OWNER] -> plugins/owner/ownerPanel.js
// [GROUP] -> plugins/group/groupManager.js
// [DOWNLOAD] -> plugins/download/downloader.js
// [FUN] -> plugins/fun/funGames.js
// [TOOLS] -> plugins/tools/tools.js
// [TOPUP] -> plugins/topup/digiflazz.js
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
