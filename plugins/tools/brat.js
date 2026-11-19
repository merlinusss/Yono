module.exports = {
  command: 'brat',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, from, text, command, prefix, author, type, libs } = ctx;
    const { speed } = libs;

  {
if (!text) return m.reply(`Penggunaan : ${prefix + command} <img/vid> <teks>\n\nContoh:\n${prefix + command} img Halo kamu\n${prefix + command} vid Halo kamu`);
  let argsList = text.split(' ');
  let type = argsList[0].toLowerCase();
  let bratText = argsList.slice(1).join(' ');
  if (type !== 'img' && type !== 'vid') {
    return m.reply(`Tipe tidak valid! Harap gunakan *img* untuk gambar atau *vid* untuk video.\n\nContoh: ${prefix + command} img halo`);
  }
  if (!bratText) return m.reply(`Teksnya mana?\nContoh: ${prefix + command} ${type} halo`);
  let isVideo = type === 'vid' ? 'true' : 'false';
  try {
    const response = await fetch(`https://${global.api.maelyn.domain}/api/canvas/brat?text=${encodeURIComponent(bratText)}&isvideo=${isVideo}&speed=medium`, {
      method: "GET",
      headers: {
        "x-maelyn-auth": global.api.maelyn.apikey
      }
    });
    const proses = await response.json();
    console.log(proses);
    if (isVideo === 'true') {
      await lenwy.sendVideoAsSticker(from, proses.result.url, m, { packname: global.packname, author: global.author });
    } else {
      await lenwy.sendImageAsSticker(from, proses.result.url, m, { packname: global.packname, author: global.author });
    }
  } catch (e) {
    console.error(e);
    await m.reply("Maaf, terjadi kesalahan saat memproses permintaan.");
  }
  }
  },
};
