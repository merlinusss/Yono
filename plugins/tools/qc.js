module.exports = {
  command: 'qc',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, from, sender, pushname, text, q, author, quoted, type, time, libs } = ctx;
    const { axios, moment, color, format, writeExifImg } = libs;

  {
if (!q) return m.reply(`*Contoh :* Qc white Lenwy\n🎁 *Kode Warna:* Qckode`)
    if (q.length > 400) return m.reply('*Maksimal 400 Karakter*')

    const [color, ...msg] = q.split(' ')
    const message = msg.join(' ')
    if (!message) return m.reply('*Teks tidak boleh kosong!*')

    const colors = {
        pink: '#f68ac9',
        blue: '#6cace4',
        red: '#f44336',
        green: '#4caf50',
        yellow: '#ffeb3b',
        purple: '#9c27b0',
        darkblue: '#0d47a1',
        lightblue: '#03a9f4',
        ash: '#9e9e9e',
        orange: '#ff9800',
        black: '#000000',
        white: '#ffffff',
        teal: '#008080',
        lightpink: '#ffc0cb',
        chocolate: '#a52a2a',
        salmon: '#ffa07a',
        magenta: '#ff00ff',
        tan: '#d2b48c',
        wheat: '#f5deb3',
        deeppink: '#ff1493',
        fire: '#b22222',
        lenwyblue: '#00bfff',
        brightlenwyblue: '#1e90ff',
        hotpink: '#ff69b4',
        lightlenwyblue: '#87ceeb',
        seagreen: '#20b2aa',
        darkred: '#8b0000',
        orangered: '#ff4500',
        cyan: '#48d1cc',
        violet: '#ba55d3',
        mossgreen: '#00ff7f',
        darkgreen: '#008000',
        navyblue: '#191970',
        darkorange: '#ff8c00',
        darkpurple: '#9400d3',
        fuchsia: '#ff00ff',
        darkmagenta: '#8b008b',
        darkgray: '#2f4f4f',
        peachpuff: '#ffdab9',
        darkishgreen: '#bdb76b',
        darkishred: '#dc143c',
        goldenrod: '#daa520',
        darkishgray: '#696969',
        darkishpurple: '#483d8b',
        gold: '#ffd700',
        silver: '#c0c0c0'
    }

    const backgroundColor = colors[color]
    if (!backgroundColor) {
        return m.reply(
            '☘ *Kode Warna Tidak Ditemukan*\n' +
            '🎁 Contoh : Qc white Lenwy\n' +
            '⚠ Gunakan huruf kecil'
        )
    }
    let ppUrl = await lenwy.profilePictureUrl(m.sender, 'image');
    let proses = await axios.get(ppUrl, { responseType: 'arraybuffer' });
    const mimeType = proses.headers['content-type'];
    const base64Data = Buffer.from(proses.data, 'binary').toString('base64');
    let base64Image = `data:${mimeType};base64,${base64Data}`;
    const res = await axios.post(`https://${global.api.merlinus.domain}/api/tools/qc`, {
        text: message,
        name: pushname,
        avatar: base64Image,
        time: moment().tz('Asia/Jakarta').format('HH:mm'),
        bubbleColor: backgroundColor,
        apikey: global.api.merlinus.apikey
    }, {
      responseType: 'arraybuffer'
    })
    const buffer = Buffer.from(res.data)
    let buffers = await writeExifImg(buffer, { packname: global.packname || "-", author: global.author || "-" });
    await lenwy.sendMessage(m.chat, { sticker: { url: buffers } }, { quoted: m });
  }
  },
};
