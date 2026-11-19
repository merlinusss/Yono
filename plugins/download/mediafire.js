module.exports = {
  command: 'mediafire',
  category: 'DOWNLOAD',
  async execute(ctx) {
    const { lenwy, m, text, isBan, mess, quoted, LenwyLD, libs } = ctx;
    const { sleep } = libs;

if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply(mess.link)
  LenwyLD()
  await sleep(200)
  const baby1 = await (await fetch('https://endpoint.web.id/downloader/mediafire?key=315602&url=' + text)).json()
  const shanz = baby1.result;
  const extension = shanz.filename.split('.').pop().toLowerCase()

  const mimeTypes = {
      'pdf': 'application/pdf',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'mp4': 'video/mp4',
      'mp3': 'audio/mpeg',
      'zip': 'application/zip',
      'txt': 'text/plain',
  };
  const mimeType = mimeTypes[extension] || 'application/octet-stream';

  const result4 = `🔧 *MEDIAFIRE DOWNLOADER*\r\n\r\n🔖 *Name* : ${shanz.name}\r\n💽 *Size* : ${shanz.size}\r\n📌 *Desc* : ${shanz.desc}`
  
  lenwy.sendMessage(m.chat, {
      document: { url: shanz.media },
      fileName: shanz.filename,
      mimetype: mimeType,
      caption: result4
  }, { quoted: m })
  },
};
