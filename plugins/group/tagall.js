module.exports = {
  command: 'tagall',
  category: 'GROUP',
  async execute({ lenwy, m, q, isAdmins, mess, participants }) {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    let teks = `*Tag All*\n🎁 *Pesan : ${q ? q : 'Kosong'}*\n\n`;
    for (const mem of participants) {
      teks += `⨠ @${mem.id.split('@')[0]}\n`;
    }
    await lenwy.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m });
  },
};
