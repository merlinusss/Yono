const { loadTemplate, applyTemplate } = require('../../library/template');

module.exports = {
  command: 'open',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, isAdmins, isBotAdmins, mess, groupName, wib, harinya, hariini2 } = ctx;
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!isBotAdmins) return m.reply(mess.botAdmin);
    if (!global.datagc[m.chat]) global.datagc[m.chat] = {};

    const defaultTpl = loadTemplate('open', 'Grup berhasil dibuka.');
    const template = global.datagc[m.chat].text_open || defaultTpl;
    const settextopen = applyTemplate(template, {
      '{GROUPNAME}': groupName,
      '{TAG}': `@${m.sender.split('@')[0]}`,
      '{JAM}': wib,
      '{NAMAHARI}': harinya,
      '{TANGGAL}': hariini2,
    });

    await lenwy.groupSettingUpdate(m.chat, 'not_announcement');
    await lenwy.sendMessage(m.chat, { text: settextopen, mentions: [m.sender] }, { quoted: m });
  },
};
