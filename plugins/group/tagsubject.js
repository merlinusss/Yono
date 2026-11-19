module.exports = {
  command: 'tagsubject',
  aliases: ['faketag'],
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, q, isAdmins, mess, participants } = ctx;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!q) return m.reply('Masukkan teks yang ingin ditampilkan.');

    await lenwy.sendMessage(m.chat, {
      text: '@' + m.chat,
      contextInfo: {
        mentionedJid: participants.map(a => a.id),
        groupMentions: [{
          groupJid: m.chat,
          groupSubject: q,
        }],
      },
    });
  },
};
