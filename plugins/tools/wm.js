module.exports = {
  command: 'wm',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, from, text, command, prefix, isBan, author, quoted, isMedia, LenwyLD, libs } = ctx;
    const { Image, writeExifImg, writeExifVid } = libs;

  {
if (isBan) return m.reply(global.mess.ban)
  if (!quoted) return m.reply(`⚠️ Balas media dengan caption ${prefix + command} packname|author`)

  let isMedia = /imageMessage|videoMessage|stickerMessage/.test(quoted.mtype);
  if (!isMedia) return m.reply('❌ Hanya bisa reply Gambar, Video, atau Sticker');

  try {
    let teks = text ? text.split('|') : [];
    let packname = teks[0] || '';
    let author = teks[1] || 'ㅤ';
    let buffer = await quoted.download();
    if (!buffer) return m.reply('⚠️ Gagal download media!');
    LenwyLD()

    if (quoted.mtype === 'videoMessage') {
      let videoMsg = quoted.message.videoMessage || m.message.videoMessage;
      if (videoMsg && videoMsg.seconds > 10) {
        return m.reply('❌ Durasi video maksimal 10 detik!');
      }
      let result = await writeExifVid(buffer, { packname, author });
      await lenwy.sendMessage(from, { sticker: { url: result } }, { quoted: m });
    } else if (quoted.mtype === 'imageMessage') {
      let result = await writeExifImg(buffer, { packname, author });
      await lenwy.sendMessage(from, { sticker: { url: result } }, { quoted: m });
    } else if (quoted.mtype === 'stickerMessage') {
      const webpmux = require('node-webpmux');
      const img = new webpmux.Image();
      await img.load(buffer);
      
      const json = {
        "sticker-pack-id": "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2",
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
        "emojis": ["🤖"] 
      }
      const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
      const jsonBuf = Buffer.from(JSON.stringify(json), 'utf-8')
      const padding = Buffer.alloc(jsonBuf.length % 2 === 1 ? 1 : 0)
      const exif = Buffer.concat([exifAttr, jsonBuf, padding])
      exif.writeUInt32LE(jsonBuf.length, 14)
      
      img.exif = exif
      const finalStickerBuffer = await img.save(null)
      
      await lenwy.sendMessage(from, { sticker: finalStickerBuffer }, { quoted: m });
    }
  } catch (err) {
    console.error('Error detail:', err);
    m.reply(`⚠️ Error: ${err.message}`);
  }
  }
  },
};
