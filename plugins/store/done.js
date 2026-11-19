const fs = require('fs');
const { loadTemplate, applyTemplate } = require('../../library/template');

const DB_GROUP_PATH = './storage/databaseGroup.json';

module.exports = {
  command: 'done',
  category: 'store',
  async execute(ctx) {
    const {
      lenwy, m, args, text, q, command, prefix,
      isAdmins, mess, groupName,
      jamnya, menitnya, detiknya, harinya, tanggalnya, bulannya, tahunnya, namabulannya
    } = ctx;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!global.datagc[m.chat]) global.datagc[m.chat] = {};

    const teksDefault = loadTemplate('done', 'Pesanan {TAGREPLY} selesai!\nPesanan: {PESANAN}');

    if (!text && !m.quoted) {
      return m.reply(`*Penggunaan ${prefix + command}:*\n• Reply pesan customer lalu ketik *${prefix + command} [catatan]*`);
    }

    if (!m.quoted) return m.reply('⚠️ *Reply pesan si pemesan*');

    const quotedSender = m.quoted.sender;
    const query = q ? `*${q}*` : '-';
    const usertag = `@${m.sender.split('@')[0]}`;
    const tagReply = `@${quotedSender.split('@')[0]}`;
    const template = global.datagc[m.chat].text_done || teksDefault;

    const finalText = applyTemplate(template, {
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
      '{PESANAN}': query,
    });

    await lenwy.sendMessage(m.chat, { text: finalText, mentions: [quotedSender, m.sender] }, { quoted: m });
  },
};
