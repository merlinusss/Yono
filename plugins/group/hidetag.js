module.exports = {
  command: 'hidetag',
  aliases: ['h'],
  category: 'GROUP',
  async execute({ lenwy, m, from, text, isAdmins, mess, participants }) {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    const texthidetag = text ? text : (m.quoted ? m.quoted.text : '');
    const mime = m.quoted ? m.quoted.mtype : m.mtype;
    const mentions = participants.map(a => a.id);

    try {
      if (/image/.test(mime)) {
        const media = await (m.quoted ? m.quoted.download() : m.download());
        if (!media) return m.reply('Gambar tidak ditemukan atau gagal diunduh.');
        await lenwy.sendMessage(from, { image: media, caption: texthidetag, mentions }, { quoted: m });
      } else if (/video/.test(mime)) {
        const media = await (m.quoted ? m.quoted.download() : m.download());
        if (!media) return m.reply('Video tidak ditemukan atau gagal diunduh.');
        await lenwy.sendMessage(from, { video: media, caption: texthidetag, mentions }, { quoted: m });
      } else {
        await lenwy.sendMessage(from, { text: texthidetag, mentions }, { quoted: m });
      }
    } catch (err) {
      console.error(err);
      m.reply('Terjadi kesalahan saat memproses media.');
    }
  },
};
