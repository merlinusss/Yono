module.exports = {
  command: 'getpic',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, from, sender, mess, quoted, qtod } = ctx;

let target = qtod === "true" ? m.quoted.sender : from;
  let pporg;
  try {
    pporg = await lenwy.profilePictureUrl(target, 'image');
  } catch {
    pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
  }
  lenwy.sendMessage(from, { image: { url: pporg }, caption: mess.success }, { quoted: m });
  },
};
