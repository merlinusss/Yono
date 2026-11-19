const fs = require('fs');
const { loadTemplate, applyTemplate } = require('../../library/template');

const DB_GROUP_PATH = './storage/databaseGroup.json';

module.exports = {
  command: 'close',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, args, command, prefix, isAdmins, isBotAdmins, mess, groupName, wib, harinya, hariini2 } = ctx;
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!isBotAdmins) return m.reply(mess.botAdmin);
    if (!global.datagc[m.chat]) global.datagc[m.chat] = {};

    const defaultTpl = loadTemplate('close', '_*Group Berhasil Ditutup*_ 「 🔒 」');
    const template = global.datagc[m.chat].text_close || defaultTpl;
    const settextclose = applyTemplate(template, {
      '{GROUPNAME}': groupName,
      '{TAG}': `@${m.sender.split('@')[0]}`,
      '{JAM}': wib,
      '{NAMAHARI}': harinya,
      '{TANGGAL}': hariini2,
    });

    await lenwy.groupSettingUpdate(m.chat, 'announcement');
    await lenwy.sendMessage(m.chat, { text: settextclose, mentions: [m.sender] }, { quoted: m });
  },
};
