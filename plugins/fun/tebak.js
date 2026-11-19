module.exports = {
  command: 'tebak',
  category: 'FUN',
  async execute(ctx) {
    const { lenwy, m, from, args, text, command, prefix, quoted, tebakgambar, tebakkata, caklontong, caklontong_desk, tebakkalimat, tebaklirik, tebakangka, libs } = ctx;
    const { sleep, fetchJson } = libs;

if (args[0] === "gambar") {
    if (tebakgambar.hasOwnProperty(m.chat)) return m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan Di Chat Ini!*');
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    lenwy.sendImage(from, result.img, `*Silahkan Jawab Soal Di Atas Ini*\n\n📑 *Deskripsi :* ${result.deskripsi}\n\n🕒 *Waktu : 60s*`, m).then(() => { tebakgambar[m.chat] = result.jawaban.toLowerCase(); });
    await sleep(60000);
    if (tebakgambar.hasOwnProperty(m.chat)) {
      console.log("Jawaban: " + result.jawaban);
      lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakgambar[m.chat]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Gambar*` }, { quoted: m });
      delete tebakgambar[m.chat];
    }
  } else if (args[0] === 'kata') {
    if (tebakkata.hasOwnProperty(m.chat)) return m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan Di Chat Ini!*');
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *${result.soal}*\n\n🕒 *Waktu : 60s*`, m).then(() => { tebakkata[m.chat] = result.jawaban.toLowerCase(); });
    await sleep(60000);
    if (tebakkata.hasOwnProperty(m.chat)) {
      console.log("Jawaban: " + result.jawaban);
      lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakkata[m.chat]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Kata*` }, { quoted: m });
      delete tebakkata[m.chat];
    }
  } else if (args[0] === 'kalimat') {
    if (tebakkalimat.hasOwnProperty(m.chat)) return m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan Di Chat Ini!*');
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *Pertanyaan :* ${result.soal}\n\n🕒 *Waktu : 60s*`, m).then(() => { tebakkalimat[m.chat] = result.jawaban.toLowerCase(); });
    await sleep(60000);
    if (tebakkalimat.hasOwnProperty(m.chat)) {
      console.log("Jawaban: " + result.jawaban);
      lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakkalimat[m.chat]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Kalimat*` }, { quoted: m });
      delete tebakkalimat[m.chat];
    }
  } else if (args[0] === 'lirik') {
    if (tebaklirik.hasOwnProperty(m.chat)) return m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan Di Chat Ini!*');
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    lenwy.sendText(from, `*Ini Adalah Lirik Dari Lagu? :*\n\n📦 *${result.soal}?*\n\n🕒 *Waktu : 60s*`, m).then(() => { tebaklirik[m.chat] = result.jawaban.toLowerCase(); });
    await sleep(60000);
    if (tebaklirik.hasOwnProperty(m.chat)) {
      lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebaklirik[m.chat]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Lirik*` }, { quoted: m });
      delete tebaklirik[m.chat];
    }
  } else if (args[0] === 'lontong') {
    if (caklontong.hasOwnProperty(m.chat)) return m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan Di Chat Ini!*');
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    lenwy.sendText(from, `*Jawablah Pertanyaan Berikut :*\n📦 *${result.soal}*\n🕒 *Waktu : 60s*`, m).then(() => { caklontong[m.chat] = result.jawaban.toLowerCase(); caklontong_desk[m.chat] = result.deskripsi; });
    await sleep(60000);
    if (caklontong.hasOwnProperty(m.chat)) {
      lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${caklontong[m.chat]}*\n\n📑 *Deskripsi : ${caklontong_desk[m.chat]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Lontong*` }, { quoted: m });
      delete caklontong[m.chat];
      delete caklontong_desk[m.chat];
    }
  } else if (args[0] === 'angka') {
    if (tebakangka.hasOwnProperty(m.chat)) return m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan Di Chat Ini!*');
    let randomNum = Math.floor(Math.random() * 100) + 1;
    lenwy.sendText(from, `*Silahkan Tebak Angka Berikut :*\n\n📦 *Bot memikirkan angka dari 1 sampai 100*\n\n🕒 *Waktu : 60s*`, m).then(() => { tebakangka[m.chat] = randomNum.toString(); });
    await sleep(60000);
    if (tebakangka.hasOwnProperty(m.chat)) {
      lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakangka[m.chat]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Angka*` }, { quoted: m });
      delete tebakangka[m.chat];
    }
  } else {
    m.reply(`Game yang tersedia:
> ${prefix + command} gambar
> ${prefix + command} kata
> ${prefix + command} kalimat
> ${prefix + command} lirik
> ${prefix + command} lontong
> ${prefix + command} angka`)
  }
  },
};
