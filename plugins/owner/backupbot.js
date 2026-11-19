const fs = require('fs');
const path = require('path');
const moment = require('moment-timezone');
const { execSync } = require('child_process');
const { sleep } = require('../../library/myfunc');

module.exports = {
  command: 'backupbot',
  aliases: ['botbackup'],
  category: 'OWNER',
  async execute({ lenwy, m, isAdmins, isCreator }) {
    if (!isAdmins && !isCreator) return m.reply('Khusus admin dan owner');

    const selectedFiles = (global.backupFiles || [
      'library', 'plugins', 'project', 'Session', 'storage', 'templates',
      'index.js', 'len.js', 'lenwy.js',
      'package-lock.json', 'package.json', 'readme.md', '.npmrc',
    ]).filter(f => fs.existsSync(f));

    const directoryPath = path.join('./');
    try {
      const files = fs.readdirSync(directoryPath);
      const fileSampah = files.filter(item =>
        item.match(/\.(gif|png|mp3|mp4|jpg|jpeg|webp|webm|zip|tar\.gz|rar)$/)
      );
      if (fileSampah.length > 0) {
        let teks = `🧹 Terdeteksi ${fileSampah.length} file sampah:\n\n`;
        fileSampah.forEach((e, i) => { teks += `${i + 1}. ${e}\n`; });
        await m.reply(teks);
        for (const file of fileSampah) {
          try { fs.unlinkSync(path.join(directoryPath, file)); } catch (e) { console.error(`Gagal hapus: ${file}`, e); }
        }
        await m.reply('✅ Semua file sampah berhasil dihapus.');
      }
    } catch (err) {
      return m.reply('Gagal membaca direktori: ' + err.message);
    }

    await sleep(1500);

    const ownerJid = `${global.owner}@s.whatsapp.net`;
    const waktu = moment.tz('Asia/Jakarta').format('DD-MM');
    const zipFileName = `Sc${global.ownername || 'Bot'}_${waktu}.zip`;

    try {
      execSync(`zip -r ${zipFileName} ${selectedFiles.join(' ')}`);
      await lenwy.sendMessage(ownerJid, {
        document: fs.readFileSync(`./${zipFileName}`),
        mimetype: 'application/zip',
        fileName: zipFileName,
      }, { quoted: m });

      fs.unlink(`./${zipFileName}`, err => {
        if (err) console.error(`❌ Gagal hapus ${zipFileName}:`, err);
        else console.log(`✅ Backup "${zipFileName}" dikirim dan dihapus.`);
      });

      m.reply('📦 Backup berhasil dikirim ke owner.');
    } catch (err) {
      console.error('❌ Gagal backup:', err);
      m.reply('❌ Terjadi kesalahan saat backup.');
    }
  },
};
