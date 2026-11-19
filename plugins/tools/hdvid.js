module.exports = {
  command: 'hdvid',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, sender, q, command, prefix, quoted, mime, fromMe, LenwyLD, libs } = ctx;
    const { fs, ffmpeg, exec } = libs;

  {
const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? lenwy.user.jid : m.sender;
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';

  if (!mime) return m.reply(`Videonya mana?`)
  if (!/video/.test(mime)) {
    return m.reply(`Kirim/kutip video dengan caption ${prefix + command}`)
  }
  LenwyLD()
  let media = await q.download()
let video = Math.floor(Math.random() * 100) + 1;

  const inputFilePath = `./input${video}.mp4`;
  fs.writeFileSync(inputFilePath, media)

  const outputFilePath = `./output${video}.mp4`;
  const dir = './';
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir)
  }

  const ffmpegCommand = `ffmpeg -i ${inputFilePath} -vf "hqdn3d=1.5:1.5:6:6,unsharp=3:3:0.6,eq=brightness=0.05:contrast=1.1:saturation=1.05" -vcodec libx264 -preset slower -crf 22 -acodec copy -movflags +faststart ${outputFilePath}`;

  exec(ffmpegCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)
    lenwy.sendMessage(m.chat, { caption: `_Video berhasil ditingkatkan kualitasnya_`, video: { url: outputFilePath } }, { quoted: m })
    fs.unlinkSync(inputFilePath)
  })
  }
  },
};
