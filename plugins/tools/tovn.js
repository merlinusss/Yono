module.exports = {
  command: 'tovn',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, from, quoted, mime, type, now, libs } = ctx;
    const { downloadContentFromMessage, fs, path, ffmpeg, exec } = libs;

if (!/audio|video/.test(mime)) return m.reply('*Reply ke pesan audio atau video*');

  if (/video/.test(mime)) {
    let media;
    try {
      media = await downloadContentFromMessage(quoted, type === "audioMessage" ? 'audio' : 'video');
    } catch (err) {
      console.log('Error saat download media:', err);
      return m.reply('*Gagal mengunduh media*');
    }
  
    if (!media) {
      return m.reply('*Media tidak valid*');
    }
  
    const tempFilePath = path.join(__dirname, `temp_${Date.now()}.${mime.includes('audio') ? 'mp3' : 'mp4'}`);
    const outputFilePath = path.join(__dirname, `output_${Date.now()}.mp3`);
    let buffer = Buffer.from([]);
  
    try {
      for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
      }
      fs.writeFileSync(tempFilePath, buffer);
    } catch (err) {
      console.log('Error saat memproses buffer:', err);
      return m.reply('*Gagal memproses media*');
    }
  
    if (mime.includes('video')) {
      try {
        await new Promise((resolve, reject) => {
          exec(`ffmpeg -i "${tempFilePath}" -vn -acodec libmp3lame -y "${outputFilePath}"`, (err) => {
            if (err) return reject(err);
            resolve();
          });
        });
        buffer = fs.readFileSync(outputFilePath);
      } catch (err) {
        console.log('Error saat konversi video ke audio:', err);
        return m.reply('*Gagal mengonversi video ke audio*');
      } finally {
        fs.unlinkSync(tempFilePath)
        if (fs.existsSync(outputFilePath)) fs.unlinkSync(outputFilePath);
      }
    }
  
    try {
      await lenwy.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    } catch (error) {
      console.log('Error saat mengirim pesan:', error);
    }  
  } else if (/audio/.test(mime)) {
    let media;
    try {
      media = await downloadContentFromMessage(quoted, 'audio');
    } catch (err) {
      console.log('Error saat mengunduh media:', err);
      return m.reply('*Gagal mengunduh media. Pastikan Anda mereply ke pesan audio yang valid.*');
    }
  
    let buffer = Buffer.from([]);
    try {
      for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
      }
    } catch (err) {
      console.log('Error saat memproses buffer:', err);
      return m.reply('*Gagal memproses audio.*');
    }
  
    if (buffer.length === 0) {
      return m.reply('*Audio kosong atau gagal diproses.*');
    }
  
    try {
      await lenwy.sendMessage(m.chat, {
        audio: buffer,
        mimetype: 'audio/mp4',
        ptt: true
      }, { quoted: m });
    } catch (error) {
      console.log('Error saat mengirim pesan:', error);
      return m.reply('*Gagal mengirim audio.*');
    }
  }
  },
};
