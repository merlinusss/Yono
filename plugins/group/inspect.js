module.exports = {
  command: 'inspect',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, from, args, isBan, mess, libs } = ctx;
    const { moment } = libs;

    if (isBan) return m.reply(mess.ban);
    if (!args[0]) return m.reply('Kirim link grup WhatsApp yang ingin diperiksa.');
    const coded = args.join(' ').split('https://chat.whatsapp.com/')[1]?.trim();
    if (!coded) return m.reply('❌ Link grup tidak valid.');

    try {
      const res = await lenwy.query({
        tag: 'iq',
        attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' },
        content: [{ tag: 'invite', attrs: { code: coded } }],
      });
      const attrs = res.content[0].attrs;
      const tekse = `Info link grup

Nama grup: ${attrs.subject || '-'}
Pembuat: ${attrs.creator ? '@' + attrs.creator.split('@')[0] : '-'}
Dibuat pada: ${attrs.creation ? moment(attrs.creation * 1000).tz('Asia/Jakarta').format('DD-MM-YYYY, HH:mm:ss') : '-'}
Total anggota: ${attrs.size || '-'} orang
Deskripsi diubah: ${attrs.s_t ? moment(attrs.s_t * 1000).tz('Asia/Jakarta').format('DD-MM-YYYY, HH:mm:ss') : '-'}
ID grup: ${attrs.id ? attrs.id + '@g.us' : '-'}

${global.botname}`;

      let pp;
      try {
        pp = await lenwy.profilePictureUrl(attrs.id + '@g.us', 'image');
      } catch {
        pp = 'https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153';
      }

      await lenwy.sendFile(from, pp, '', m, {
        caption: tekse,
        mentions: await lenwy.parseMention(tekse),
      });
    } catch {
      m.reply('❌ Gagal mengambil data grup. Link mungkin sudah tidak valid atau kedaluwarsa.');
    }
  },
};
