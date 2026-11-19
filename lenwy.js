require('./len');
const {
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  InteractiveMessage,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType,
} = require('baileys');
const fs = require('fs');
const path = require('path');
const util = require('util');
let ms;
const toMs = require('ms');
(async () => {
  ms = (await import('parse-ms')).default;
})();
const chalk = require('chalk');
const os = require('os');
const axios = require('axios');
const fsx = require('fs-extra');
const crypto = require('crypto');
const ffmpeg = require('fluent-ffmpeg');
const moment = require('moment-timezone');
const cron = require('node-cron');
const { color, bgcolor } = require('./library/color');
const { uploader60Minute, uploaderLebih, up } = require('./library/uploader');
const { fromBuffer } = require('file-type');
const cheerio = require('cheerio');
const speed = require('performance-now');
const { Image } = require('node-webpmux');
const { performance } = require('perf_hooks');
const { exec, spawn, execSync } = require('child_process');
const {
  smsg,
  tanggal,
  getTime,
  formatp,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  parseMention,
  getRandom,
  getGroupAdmins,
  generateProfilePicture,
  toJid,
} = require('./library/myfunc.js');
const {
  JalanTikusMeme,
  Cerpen,
  Quotes,
  Couples,
  Darkjokes,
} = require('dhn-api');
const {
  addResponList,
  delResponList,
  isAlreadyResponList,
  isAlreadyResponListGroup,
  sendResponList,
  updateResponList,
  getDataResponList,
  updateKey,
  readDatabasePayment,
  writeDatabasePayment,
  updateId,
  getGroupIdFromLink,
  resetList,
  deleteListSampah,
} = require('./library/respon-list');
const {
  isKeyResponStick,
  getDataResponStick,
  isAlreadyResponStickGroup,
  delResponStick,
} = require('./library/funcStick');
const {
  addSewaGroup,
  getSewaExpired,
  getSewaPosition,
  checkSewaGroup,
  getAllPremiumUser,
} = require('./library/sewa');
const {
  cekStatusAkunDigi,
  cekLayananDigiPrabayar,
  isiSaldoDigi,
  orderDigi,
  cekItemDigi,
  cekOrderanDigi,
} = require('./project/digiflazz');
const { generateQris, checkQrisStatus, formatSaldo } = require('./project/paymentGateway.js');
const { webpToMp4, imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./library/exif');
const { igdl } = require('btch-downloader');
const { cekMl } = require('./library/mlRegi.js');
const { getPlugin, reloadPlugins } = require('./library/pluginLoader');
const roles = require('./library/roles');
const dns = require('dns').promises;

const pathsewa = './storage/sewa.json';
const gcMutedPath = path.resolve(__dirname, './storage/gcMuted.json');
const gcTopupPath = path.resolve(__dirname, './project/database/gcTopup.json');
const stickerDbPath = path.resolve(__dirname, './storage/databaseSticker.json');
const dbgcFilePath = path.join(__dirname, './storage/databaseGroup.json');

// Cache bacaan JSON berdasarkan mtimeMs agar tidak fs.readFileSync di setiap pesan
const jsonCache = new Map();
function readJsonCached(filePath, fallback = []) {
  try {
    const stat = fs.statSync(filePath);
    const cached = jsonCache.get(filePath);
    if (cached && cached.mtimeMs === stat.mtimeMs) {
      return cached.data;
    }
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    jsonCache.set(filePath, { mtimeMs: stat.mtimeMs, data });
    return data;
  } catch {
    return fallback;
  }
}

// Cache groupMetadata selama 45 detik per grup + auto-reset saat ada event grup
global.groupMetaCache = global.groupMetaCache || new Map();
const groupMetaCache = global.groupMetaCache;
const GROUP_META_TTL = 45 * 1000;
async function getCachedGroupMetadata(lenwy, jid) {
  const now = Date.now();
  const cached = groupMetaCache.get(jid);
  if (cached && now - cached.time < GROUP_META_TTL) {
    return cached.data;
  }
  const data = await lenwy.groupMetadata(jid).catch(() => null);
  if (data) {
    groupMetaCache.set(jid, { time: now, data });
  }
  return data || cached?.data || {};
}

// Pastikan global.db.data tersedia tanpa menimpa state di RAM saat hot-reload
if (!global.db) global.db = { data: null };
if (!global.db.data) {
  try {
    global.db.data = JSON.parse(fs.readFileSync('./storage/database.json', 'utf8'));
  } catch {
    global.db.data = {};
  }
}
global.db.data = {
  users: {},
  chats: {},
  game: {},
  database: {},
  settings: {},
  setting: {},
  others: {},
  sticker: {},
  ...(global.db.data || {}),
};

const kuismath = (global.db.data.game.math ??= {});
const tebakgambar = (global.db.data.game.tebakgambar ??= {});
const tebakkata = (global.db.data.game.tebakkata ??= {});
const caklontong = (global.db.data.game.lontong ??= {});
const caklontong_desk = (global.db.data.game.lontong_desk ??= {});
const tebakkalimat = (global.db.data.game.kalimat ??= {});
const tebaklirik = (global.db.data.game.lirik ??= {});
const tebakangka = (global.db.data.game.tebakangka ??= {});
const tictactoe = (global.db.data.game.tictactoe ??= {});
const db_respon_list = JSON.parse(fs.readFileSync('./storage/list-message.json', 'utf8'));
const reminders = {};

const authorr = global.owner;
const pengguna = JSON.parse(fs.readFileSync('./storage/user.json', 'utf8'));
if (!global.datagc) {
  try {
    global.datagc = JSON.parse(fs.readFileSync(dbgcFilePath, 'utf8'));
  } catch (error) {
    console.error('Terjadi kesalahan saat membaca file databaseGroup.json:', error);
    global.datagc = {};
  }
}

const PREFIX_REGEX = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/;
const TOXIC_REGEX = /(ewe|bangsad|mmk|koncol|puki|kojtol|kintil|momok|nigga|ajg|ewean|yatim|anjing|kontol|memek|bangsat|babi|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|ktl|ngentot|ngewe|bokep|bkp)/i;
const LIST_COLORS = ['red', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray'];
const MORE_CHAR = String.fromCharCode(8206);
const READMORE_STR = MORE_CHAR.repeat(4001);

module.exports = lenwy = async (lenwy, m, chatUpdate, store) => {
  try {
    const body =
      m.mtype === 'conversation'
        ? m.message.conversation
        : m.mtype === 'imageMessage'
          ? m.message.imageMessage.caption || '[ IMAGE ]'
          : m.mtype === 'videoMessage'
            ? m.message.videoMessage.caption || '[ VIDEO ]'
            : m.mtype === 'audioMessage'
              ? '[ AUDIO ]'
              : m.mtype === 'stickerMessage'
                ? '[ STICKER ]'
                : m.mtype === 'documentMessage'
                  ? `[ DOCUMENT ] ${m.message.documentMessage.fileName || ''}`
                  : m.mtype === 'contactMessage'
                    ? '[ CONTACT ]'
                    : m.mtype === 'locationMessage'
                      ? '[ LOCATION ]'
                      : m.mtype === 'extendedTextMessage'
                        ? m.message.extendedTextMessage.text
                        : m.mtype === 'buttonsResponseMessage'
                          ? m.message.buttonsResponseMessage.selectedButtonId
                          : m.mtype === 'listResponseMessage'
                            ? m.message.listResponseMessage.singleSelectReply.selectedRowId
                            : m.mtype === 'interactiveResponseMessage'
                              ? JSON.parse(
                                  m.message.interactiveResponseMessage.nativeFlowResponseMessage
                                    .paramsJson
                                ).id
                              : m.mtype === 'templateButtonReplyMessage'
                                ? m.message.templateButtonReplyMessage.selectedId
                                : m.mtype === 'messageContextInfo'
                                  ? m.message.buttonsResponseMessage?.selectedButtonId ||
                                    m.message.listResponseMessage?.singleSelectReply
                                      .selectedRowId ||
                                    m.text
                                  : '';

    const budy = typeof m.text === 'string' ? m.text : '';
    const rawBody = body || '';
    const prefix = PREFIX_REGEX.test(rawBody) ? rawBody.match(PREFIX_REGEX)[0] : '';

    const content = rawBody.slice(prefix.length).trim() || '';
    const parts = content.split(/ +/);
    const commandRaw = parts[0] || '';
    const args = parts.slice(1);
    const command = commandRaw.toLowerCase();
    const cmd = prefix + command;

    const matchedPlugin = command ? getPlugin(command) : null;
    const isEvalCmd = budy.startsWith('=>') || budy.startsWith('>');
    const isDbMsgCmd = Boolean(budy && global.db?.data?.database?.[budy.toLowerCase()]);
    const isCmd = Boolean(matchedPlugin || isEvalCmd || isDbMsgCmd);

    const full_args = rawBody.replace(commandRaw, '').slice(1).trim();
    const pushname = m.pushName || 'No Name';
    const text = (q = args.join(' '));
    const { type, quotedMsg, mentioned, now, fromMe } = m;
    const quoted = m.quoted ? m.quoted : m;
    const quoted2 =
      quoted.mtype === 'buttonsMessage'
        ? quoted[Object.keys(quoted)[1]]
        : quoted.mtype === 'templateMessage'
          ? quoted.hydratedTemplate[Object.keys(quoted.hydratedTemplate)[1]]
          : quoted.mtype === 'product'
            ? quoted[Object.keys(quoted)[0]]
            : m.quoted
              ? m.quoted
              : m;
    const mime = (quoted.msg || quoted).mimetype || '';
    const isMedia = /image|video|sticker|audio/.test(mime);
    const from = m.key.remoteJid;

    const rawIds = [lenwy.user?.id, lenwy.user?.jid].filter(Boolean);
    const botNumber = rawIds
      .map((v) => {
        const jid = typeof v === 'string' ? v : '';
        return jid.split('@')[0].split(':')[0].replace(/[^0-9]/g, '');
      })
      .filter(Boolean);
    const isBot = botNumber.includes((m.sender || '').replace(/[^0-9]/g, ''));

    const creatorFilePathh = roles.FILES.owner.target;
    const creatorNumbers = roles.getAllOwners();
    const author = creatorNumbers;
    const owner = creatorNumbers;

    const premiumFilePathh = roles.FILES.premium.target;
    const premiumNumbers = roles.getList('premium');
    const allPremium = [...botNumber, ...creatorNumbers, ...premiumNumbers];

    const bannedFilePathh = roles.FILES.banned.target;
    const bannedNumbers = roles.getList('banned');

    const gcMuted = readJsonCached(gcMutedPath, []);
    const isGcMuted = Array.isArray(gcMuted) && gcMuted.includes(m.chat);

    const gcTopup = readJsonCached(gcTopupPath, []);
    const isGcTopup = Array.isArray(gcTopup) && gcTopup.includes(m.chat);

    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.sender) : m.sender;
    const groupMetadata = m.isGroup ? await getCachedGroupMetadata(lenwy, m.chat) : '';
    const groupName = m.isGroup ? groupMetadata?.subject || '' : '';
    const participants = m.isGroup ? groupMetadata?.participants || [] : [];
    const groupAdmins = m.isGroup ? getGroupAdmins(participants) : [];

    const senderNumber = (m.sender || sender || '').replace(/[^0-9]/g, '');
    const isSuperOwner = roles.isSuperOwner(senderNumber);
    const isCreator = isSuperOwner || creatorNumbers.includes(senderNumber);
    const isPrem = allPremium.includes(senderNumber);
    const isBan = bannedNumbers.includes(senderNumber);

    const isBotAdmins = m.isGroup
      ? [lenwy.user?.id, lenwy.user?.lid].some(j =>
          groupAdmins.includes(j?.replace(/:\d+@/, '@'))
        )
      : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const isUser = pengguna.includes(m.sender);
    const numberQuery = text.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net';
    const mentionByTag =
      m.mtype === 'extendedTextMessage' &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    const qtod = m.quoted ? 'true' : 'false';
    const more = MORE_CHAR;
    const readmore = READMORE_STR;
    const isQuotedViewOnce = Boolean(m.quoted?.viewOnce);

    // Satu instance moment untuk seluruh format waktu di pesan ini
    const nowJkt = moment.tz('Asia/Jakarta');
    const harinya = nowJkt.format('dddd');
    const tanggalnya = nowJkt.format('DD');
    const bulannya = nowJkt.format('MM');
    const tahunnya = nowJkt.format('YYYY');
    const namabulannya = nowJkt.format('MMMM');
    const jamnya = nowJkt.format('HH');
    const menitnya = nowJkt.format('mm');
    const detiknya = nowJkt.format('ss');
    const hariini = nowJkt.format('dddd, DD MMMM YYYY');
    const hariini2 = nowJkt.format('DD MMMM YYYY');
    const hariini3 = nowJkt.format('DD MM YYYY');
    const hariini4 = nowJkt.format('DD-MMMM-YYYY');
    const waktubackup = nowJkt.format('DDMMMM');
    const wib = nowJkt.format('HH : mm : ss');
    const time2 = nowJkt.format('HH:mm:ss');
    const wit = nowJkt.clone().tz('Asia/Jayapura').format('HH : mm : ss');
    const wita = nowJkt.clone().tz('Asia/Makassar').format('HH : mm : ss');
    const time = nowJkt.clone().locale('id').format('HH:mm:ss z');
    const salam = nowJkt.clone().locale('id').format('a');

    let ucapanWaktu = `${global.emoji} Selamat Malam`;
    if (time2 < '03:00:00') {
      ucapanWaktu = `${global.emoji} Selamat Tengah Malam`;
    } else if (time2 < '05:00:00') {
      ucapanWaktu = `${global.emoji} Selamat Subuh`;
    } else if (time2 < '10:00:00') {
      ucapanWaktu = `${global.emoji} Selamat Pagi`;
    } else if (time2 < '15:00:00') {
      ucapanWaktu = `${global.emoji} Selamat Siang`;
    } else if (time2 < '18:00:00') {
      ucapanWaktu = `${global.emoji} Selamat Sore`;
    } else if (time2 < '19:00:00') {
      ucapanWaktu = `${global.emoji} Selamat Petang`;
    }

    async function LenwyLD() {
      await sleep(100);
      await lenwy.sendMessage(from, { react: { text: '🕒', key: m.key } });
    }

    try {
      if (m.isGroup) {
        const isNew = !global.datagc[m.chat];
        global.datagc[m.chat] ??= {
          text_welcome: '',
          text_left: '',
          text_open: '',
          text_close: '',
          text_proses: '',
          text_done: '',
          text_list: '',
          text_list_simbol: '',
          waktu_Open: '',
          waktu_Close: '',
        };
        if (isNew) {
          fs.writeFileSync(dbgcFilePath, JSON.stringify(global.datagc, null, 2), 'utf8');
        }
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menulis databaseGroup.json:', error);
    }

    try {
      const isNumber = x => typeof x === 'number' && !isNaN(x);
      const user = (global.db.data.users[m.sender] ??= {});
      user.afk ??= {};

      if (m.isGroup) {
        user.afk[m.chat] ??= { time: -1, reason: '' };

        const chats = (global.db.data.chats[m.chat] ??= {});
        chats.onlyAdmin ??= false;
        chats.wlcm ??= true;
        chats.left ??= true;
        chats.linkgc ??= '';
        chats.antilinktt ??= false;
        chats.antilinkyt ??= false;
        chats.antiwame ??= false;
        chats.antilink1 ??= false;
        chats.antilink2 ??= false;
        chats.antitoxic1 ??= false;
        chats.antitoxic2 ??= false;
        chats.antilinkgc1 ??= false;
        chats.antilinkgc2 ??= false;
        chats.antisw1 ??= false;
        chats.antisw2 ??= false;
      }

      if (!isNumber(user.level)) user.level = 0;
      user.autolevelup ??= true;

      const setting = (global.db.data.settings[botNumber] ??= {});
      if (!isNumber(setting.status)) setting.status = 0;
      setting.autobio ??= false;
      setting.autoread ??= false;
    } catch (err) {
      console.error(err);
    }

    if (isCmd) {
      if (global.db.data.chats[m.chat]?.onlyAdmin && !isAdmins && !isCreator && !isBot) return;
      if (isGcMuted && !isCreator && !isBot) return;
      if (!m.isGroup && !isCreator && !isBot) return;
      if (isBan) return;

      console.log(
        color(
          `\n⏰ [ ${jamnya}:${menitnya}:${detiknya} ]`,
          LIST_COLORS[Math.floor(Math.random() * LIST_COLORS.length)]
        ),
        color(
          `👥 [ ${m.isGroup ? groupName : m.chat.split('@')[0] || 'NoName'} ]`,
          LIST_COLORS[Math.floor(Math.random() * LIST_COLORS.length)]
        ),
        color(`\n👤 ${pushname || 'NoName'}`, 'cyan'),
        color(':', 'white'),
        color(`${body}`, 'green', 'bold')
      );

      if (!isUser) {
        pengguna.push(sender);
        fs.writeFileSync('./storage/user.json', JSON.stringify(pengguna, null, 2));
      }
    }

    if (global.db.data.settings[botNumber]?.autoread && m.message) {
      lenwy.readMessages([m.key]);
    }

    // ========== RESPONSE LIST FITUR ========== //
    const bodyLower = String(rawBody).toLowerCase();
    if (m.isGroup && isAlreadyResponList(m.chat, bodyLower, db_respon_list)) {
      const get_data_respon = getDataResponList(m.chat, bodyLower, db_respon_list);
      if (get_data_respon.isImage === false) {
        lenwy.sendMessage(
          m.chat,
          { text: sendResponList(m.chat, bodyLower, db_respon_list) },
          { quoted: m }
        );
      } else {
        try {
          const buffer = await getBuffer(get_data_respon.image_url);
          if (!buffer || !Buffer.isBuffer(buffer)) {
            throw new Error('Buffer gambar tidak valid atau gagal diunduh');
          }
          lenwy.sendMessage(
            m.chat,
            { image: buffer, caption: get_data_respon.response },
            { quoted: m }
          );
        } catch {
          m.reply(
            `Foto tidak tersedia, silakan chat admin untuk melakukan ${prefix}updatelist bergambar pada key ${rawBody}`
          );
          await sleep(5000);
          lenwy.sendMessage(
            m.chat,
            { text: sendResponList(m.chat, bodyLower, db_respon_list) },
            { quoted: m }
          );
        }
      }
    }

    const stickerDb = readJsonCached(stickerDbPath, []);
    if (m.isGroup && isKeyResponStick(m.chat, bodyLower, stickerDb)) {
      if (!isAdmins) return;
      const getRespon = getDataResponStick(m.chat, bodyLower, stickerDb);
      if (getRespon?.imageUrl && fs.existsSync(getRespon.imageUrl)) {
        const buffer = fs.readFileSync(getRespon.imageUrl);
        await lenwy.sendMessage(
          from,
          { sticker: buffer },
          { quoted: m.quoted ? m.quoted.fakeObj : m }
        );
      }
    }

    // ========== ANTI FITUR ========== //
    const chat = global.db.data.chats[m.chat] || {};
    const isNormalMember = m.isGroup && !m.key.fromMe && !isCreator && !isAdmins;
    const isThisGcLink = chat.linkgc ? new RegExp(chat.linkgc, 'i').test(rawBody) : false;
    const punish = async (replyMsg, shouldKick = false) => {
      if (replyMsg) m.reply(replyMsg);
      lenwy.sendMessage(m.chat, { delete: m.key });
      if (shouldKick) {
        await sleep(1500);
        await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }
    };

    if (isNormalMember) {
      if (chat.antilinktt && (bodyLower.includes('vt.tiktok.com') || bodyLower.includes('tiktok.com'))) {
        return punish('Anti link TikTok sedang aktif, pesan kamu dihapus.');
      }
      if (chat.antilinkyt && (bodyLower.includes('youtube.com') || bodyLower.includes('youtu.be'))) {
        return punish('Anti link YouTube sedang aktif, pesan kamu dihapus.');
      }
      if (chat.antiwame && bodyLower.includes('wa.me')) {
        return punish('Anti wa.me sedang aktif, pesan kamu dihapus.');
      }
      if (!isThisGcLink && bodyLower.includes('chat.whatsapp.com')) {
        if (chat.antilinkgc1) return punish('Anti link grup sedang aktif, pesan kamu dihapus.', false);
        if (chat.antilinkgc2) {
          return punish('Anti link grup sedang aktif, pesan kamu dihapus dan kamu dikeluarkan.', true);
        }
      }
      if (!isThisGcLink && bodyLower.includes('http')) {
        if (chat.antilink1) return punish('Anti link sedang aktif, pesan kamu dihapus.', false);
        if (chat.antilink2) {
          return punish('Anti link sedang aktif, pesan kamu dihapus dan kamu dikeluarkan.', true);
        }
      }
      if (TOXIC_REGEX.test(m.text || budy || rawBody)) {
        if (chat.antitoxic1) return punish(null, false);
        if (chat.antitoxic2) return punish(null, true);
      }
      if (m.mtype === 'groupStatusMentionMessage') {
        if (chat.antisw1) return punish('Anti status mention sedang aktif, pesan kamu dihapus.', false);
        if (chat.antisw2) {
          return punish('Anti status mention sedang aktif, pesan kamu dihapus dan kamu dikeluarkan.', true);
        }
      }
    }

    if (
      isMedia &&
      m.msg.fileSha256 &&
      m.msg.fileSha256.toString('base64') in global.db.data.sticker
    ) {
      const hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')];
      const { text: stickText, mentionedJid } = hash;
      const messages = await generateWAMessage(
        from,
        { text: stickText, mentions: mentionedJid },
        {
          userJid: lenwy.user.id,
          quoted: m.quoted && m.quoted.fakeObj,
        }
      );
      messages.key.fromMe = areJidsSameUser(m.sender, lenwy.user.id);
      messages.key.id = m.key.id;
      messages.pushName = m.pushName;
      if (m.isGroup) messages.participant = m.sender;
      const msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: 'append',
      };
      lenwy.ev.emit('messages.upsert', msg);
    }

    // ========== KUIS & GAME TEBAK ========== //
    const senderKey = (m.sender || '').split('@')[0];
    const quizMap = {
      kuismath: {
        data: kuismath,
        key: kuismath[m.chat] !== undefined ? m.chat : senderKey,
        title: 'Kuis Matematika',
        replay: 'math',
        isNumberGame: true,
      },
      tebakgambar: {
        data: tebakgambar,
        key: m.chat,
        title: 'Tebak Gambar',
        replay: 'tebak gambar',
      },
      tebakkata: {
        data: tebakkata,
        key: m.chat,
        title: 'Tebak Kata',
        replay: 'tebak kata',
      },
      caklontong: {
        data: caklontong,
        key: m.chat,
        title: 'Tebak Lontong',
        replay: 'tebak lontong',
        extraDelete: () => delete caklontong_desk[m.chat],
      },
      tebakkalimat: {
        data: tebakkalimat,
        key: m.chat,
        title: 'Tebak Kalimat',
        replay: 'tebak kalimat',
      },
      tebaklirik: {
        data: tebaklirik,
        key: m.chat,
        title: 'Tebak Lirik',
        replay: 'tebak lirik',
      },
      tebakangka: {
        data: tebakangka,
        key: m.chat,
        title: 'Tebak Angka',
        replay: 'tebak angka',
        isNumberGame: true,
      },
    };

    const isQuotingBot = Boolean(
      m.quoted && botNumber.includes((m.quoted.sender || '').replace(/[^0-9]/g, ''))
    );

    if (!m.key.fromMe && !isCmd && rawBody) {
      for (const { data, key, title, replay, extraDelete, isNumberGame } of Object.values(quizMap)) {
        if (!key || data[key] === undefined) continue;

        if (isNumberGame) {
          if (!/^-?\d+$/.test(rawBody.trim())) continue;
          const userTebak = parseInt(rawBody.trim(), 10);
          const jawabanBenar = parseInt(data[key], 10);

          if (userTebak === jawabanBenar) {
            await m.reply(
              `*${title}*\nJawaban benar! Ketik *${prefix + replay}* jika ingin bermain lagi.`
            );
            delete data[key];
          } else if (title === 'Tebak Angka') {
            const clue =
              userTebak > jawabanBenar ? 'Angka terlalu besar' : 'Angka terlalu kecil';
            await m.reply(`❌ Salah! ${clue}.`);
          } else if (isQuotingBot) {
            await m.reply('❌ Jawaban salah!');
          }
          return;
        }

        const jawaban = String(data[key]).toLowerCase().trim();
        if (bodyLower.trim() === jawaban) {
          const desk =
            title === 'Tebak Lontong' && caklontong_desk[key]
              ? `\nPenjelasan: ${caklontong_desk[key]}`
              : '';
          await m.reply(
            `*${title}*\nJawaban benar!${desk}\nKetik *${prefix + replay}* jika ingin bermain lagi.`
          );
          delete data[key];
          if (extraDelete) extraDelete();
          return;
        } else if (isQuotingBot) {
          await m.reply('❌ Jawaban salah!');
          return;
        }
      }
    }

    // ========== TICTACTOE ========== //
    const room = Object.values(tictactoe).find(
      r =>
        r.id &&
        r.game &&
        r.state &&
        r.id.startsWith('tictactoe') &&
        [r.game.playerX, r.game.playerO].includes(m.sender) &&
        r.state === 'PLAYING'
    );

    if (room && /^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) {
      let ok;
      let isWin = false;
      let isTie = false;
      const isSurrender = !/^[1-9]$/.test(m.text);

      if (m.sender !== room.game.currentTurn && !isSurrender) return true;

      if (
        !isSurrender &&
        1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text, 10) - 1))
      ) {
        m.reply(
          {
            '-3': 'Game telah berakhir',
            '-2': 'Invalid',
            '-1': 'Posisi tidak valid',
            0: 'Posisi sudah terisi',
          }[ok]
        );
        return true;
      }

      if (m.sender === room.game.winner) isWin = true;
      else if (room.game.board === 511) isTie = true;

      const arr = room.game.render().map(
        v =>
          ({
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
          })[v]
      );

      if (isSurrender) {
        room.game._currentTurn = m.sender === room.game.playerX;
        isWin = true;
      }

      const winner = isSurrender ? room.game.currentTurn : room.game.winner;
      const str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${
  isWin
    ? `@${winner.split('@')[0]} menang!`
    : isTie
      ? 'Game berakhir seri'
      : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${
          room.game.currentTurn.split('@')[0]
        })`
}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah`;

      if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from) {
        room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from;
      }

      if (room.x !== room.o) {
        await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) });
      }
      await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) });

      if (isTie || isWin) {
        delete tictactoe[room.id];
      }
      return;
    }

    // ========== AFK ========== //
    if (m.isGroup) {
      const mentionUser = [
        ...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])]),
      ];
      for (const jid of mentionUser) {
        const user = global.db.data.users[jid];
        const afkData = user?.afk?.[m.chat];
        if (!afkData || !afkData.time || afkData.time < 0) continue;

        const ygSedangAfk = (await lenwy.getName(jid)) || jid;
        const pushnameYgNgetag = (await lenwy.getName(m.sender)) || m.sender;

        m.reply(
          `${pushnameYgNgetag}, jangan tag *${ygSedangAfk}*, dia sedang AFK.\nAlasan: ${
            afkData.reason || 'Tidak ada'
          }\nSelama: ${clockString(new Date() - afkData.time)}`
        );
      }

      const senderAfk = global.db.data.users[m.sender]?.afk?.[m.chat];
      if (senderAfk && senderAfk.time > -1) {
        m.reply(
          `*${pushname}* telah kembali dari AFK.\nAlasan: ${
            senderAfk.reason || 'Tidak ada'
          }\nSelama: ${clockString(new Date() - senderAfk.time)}`
        );
        senderAfk.time = -1;
        senderAfk.reason = '';
      }
    }

    // ========== DISPATCH KE PLUGINS ========== //
    if (matchedPlugin) {
      const libs = {
        WA_DEFAULT_EPHEMERAL,
        getAggregateVotesInPollMessage,
        generateWAMessageFromContent,
        proto,
        generateWAMessageContent,
        InteractiveMessage,
        generateWAMessage,
        prepareWAMessageMedia,
        downloadContentFromMessage,
        areJidsSameUser,
        getContentType,
        fs,
        path,
        util,
        ms,
        toMs,
        chalk,
        os,
        axios,
        fsx,
        crypto,
        ffmpeg,
        moment,
        cron,
        color,
        bgcolor,
        uploader60Minute,
        uploaderLebih,
        up,
        fromBuffer,
        cheerio,
        speed,
        Image,
        performance,
        exec,
        spawn,
        execSync,
        dns,
        smsg,
        tanggal,
        getTime,
        formatp,
        isUrl,
        sleep,
        clockString,
        runtime,
        fetchJson,
        getBuffer,
        jsonformat,
        format,
        parseMention,
        getRandom,
        getGroupAdmins,
        generateProfilePicture,
        toJid,
        JalanTikusMeme,
        Quotes,
        Couples,
        Darkjokes,
        Cerpen,
        addResponList,
        delResponList,
        isAlreadyResponList,
        isAlreadyResponListGroup,
        sendResponList,
        updateResponList,
        getDataResponList,
        updateKey,
        readDatabasePayment,
        writeDatabasePayment,
        updateId,
        getGroupIdFromLink,
        resetList,
        deleteListSampah,
        isKeyResponStick,
        getDataResponStick,
        isAlreadyResponStickGroup,
        delResponStick,
        addSewaGroup,
        getSewaExpired,
        getSewaPosition,
        checkSewaGroup,
        getAllPremiumUser,
        cekStatusAkunDigi,
        cekLayananDigiPrabayar,
        isiSaldoDigi,
        orderDigi,
        cekItemDigi,
        cekOrderanDigi,
        generateQris,
        checkQrisStatus,
        formatSaldo,
        webpToMp4,
        imageToWebp,
        videoToWebp,
        writeExifImg,
        writeExifVid,
        igdl,
        cekMl,
      };
      return await matchedPlugin.execute({
        lenwy,
        m,
        chatUpdate,
        store,
        from,
        sender,
        senderNumber,
        pushname,
        body,
        budy,
        rawBody,
        args,
        text,
        q,
        command,
        prefix,
        isCmd,
        cmd,
        full_args,
        isAdmins,
        isCreator,
        isSuperOwner,
        isBotAdmins,
        isBot,
        isPrem,
        isBan,
        isUser,
        isGcMuted,
        gcMutedPath,
        gcMuted,
        isGcTopup,
        gcTopupPath,
        gcTopup,
        mess,
        groupName,
        groupMetadata,
        participants,
        groupAdmins,
        botNumber,
        author,
        authorr,
        owner,
        creatorNumbers,
        premiumNumbers,
        bannedNumbers,
        premiumFilePathh,
        bannedFilePathh,
        creatorFilePathh,
        pathsewa,
        quoted,
        quoted2,
        mime,
        isMedia,
        isQuotedViewOnce,
        type,
        quotedMsg,
        mentioned,
        now,
        fromMe,
        numberQuery,
        mentionByTag,
        qtod,
        more,
        readmore,
        db_respon_list,
        reminders,
        kuismath,
        tebakgambar,
        tebakkata,
        caklontong,
        caklontong_desk,
        tebakkalimat,
        tebaklirik,
        tebakangka,
        tictactoe,
        harinya,
        tanggalnya,
        bulannya,
        tahunnya,
        namabulannya,
        jamnya,
        menitnya,
        detiknya,
        hariini,
        hariini2,
        hariini3,
        hariini4,
        waktubackup,
        wib,
        wit,
        wita,
        time,
        time2,
        salam,
        ucapanWaktu,
        LenwyLD,
        reloadPlugins,
        libs,
      });
    }

    // ========== FALLBACK EVAL OWNER & DATABASE MESSAGE ========== //
    if (budy.startsWith('=>')) {
      if (!isCreator) return m.reply(global.mess.owner);
      try {
        const res = util.format(await eval(`(async () => { return ${budy.slice(3)} })()`));
        await sleep(500);
        await m.reply(res);
      } catch (e) {
        await m.reply(String(e));
      }
      return;
    }

    if (budy.startsWith('>')) {
      if (!isCreator) return m.reply(global.mess.owner);
      const kode = budy.trim().split(/ +/)[0];
      try {
        const teks = util.format(
          await eval(`(async () => { ${kode === '>>' ? 'return ' : ''} ${q}})()`)
        );
        await sleep(500);
        await m.reply(teks);
      } catch (e) {
        await m.reply(String(e));
      }
      return;
    }

    if (isDbMsgCmd && !m.isBaileys && !from.endsWith('broadcast')) {
      const msgKey = budy.toLowerCase();
      const msgs = global.db?.data?.database || {};
      if (msgKey in msgs) {
        try {
          await lenwy.copyNForward(from, msgs[msgKey], true);
        } catch (err) {
          console.error('copyNForward error:', err);
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
};

const file = require.resolve(__filename);
if (process.env.NODE_ENV !== 'production') {
  fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.green(`Update: ${__filename}`));
    delete require.cache[file];
    try {
      require(file);
    } catch (e) {
      console.error('Hot-reload error:', e);
    }
  });
}
