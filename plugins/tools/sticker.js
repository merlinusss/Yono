module.exports = {
  command: 'sticker',
  aliases: ['s'],
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, from, command, prefix, isBan, author, quoted, mime, libs } = ctx;
    const { downloadContentFromMessage, Image, writeExifImg, writeExifVid } = libs;

if (isBan) return m.reply(global.mess.ban)
 if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
 if (!/image/.test(mime) && !/video/.test(mime)) return
 if (/image/.test(mime)) {
    var stream = await downloadContentFromMessage(m.quoted? quoted : m.message.imageMessage, 'image');
    var buffer = Buffer.from([]);
    for await(const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let buffers = await writeExifImg(buffer, { packname: global.packname || "-", author: global.author || "-" });
    await lenwy.sendMessage(from, { sticker: { url: buffers } }, { quoted: m });
  } else if (/video/.test(mime)) {
    var stream = await downloadContentFromMessage(m.quoted? quoted : m.message.videoMessage, 'video');
    var buffer = Buffer.from([]);
    for await(const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let buffers = await writeExifVid(buffer, { packname: global.packname || "-", author: global.author || "-" });
    await lenwy.sendMessage(from, { sticker: { url: buffers } }, { quoted: m });
  } else {
   m.reply(`Balas gambar/video/sticker dengan caption ${prefix + 'sticker'} \n*(MAKSIMAL 10 DETIK!*)`);
  }
  },
};
