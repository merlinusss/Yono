module.exports = {
  command: 'sewa',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, body, text, prefix, owner, quoted, type, libs } = ctx;
    const { generateWAMessageFromContent, proto, generateWAMessageContent, InteractiveMessage, fs } = libs;

async function createImage(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: { url }
 }, {
 upload: lenwy.waUploadToServer
 });
 return imageMessage;
 }
 
 let tekssewa = global.text_sewa ? global.text_sewa : ` /) /) \n („• ֊ •„) \n╭───̇─∪─∪──̇──┈◯\n│❛ SEWA BOT ${botname} ˚\n│\n│1 вυℓαη : 𝖱𝗉 5.000\n│2 вυℓαη : 𝖱𝗉 10.000\n│𝟥 вυℓαη : 𝖱𝗉 15.000\n│𝟦 вυℓαη : 𝖱𝗉 18.000\n│𝟧 вυℓαη : 𝖱𝗉 21.000\n╰───────────✧✧✧`
 let teksppj = global.text_ppj ? global.text_ppj : '\n\n ╭─────────────❍\n │ ʚ˚̣̣̣͙ɞ・𝙥𝙚𝙧𝙥𝙖𝙣𝙟𝙖𝙣𝙜・ \n │\n │1 вυℓαη : 𝖱𝗉 5.000\n │𝟤 вυℓαη : 𝖱𝗉 10.000\n │𝟥 вυℓαη : 𝖱𝗉 15.000\n │ρєямαηєη : 𝖱𝗉 60.000\n │Tidak Ada,\n │Yang Abadi Tuan\n ╰─────────────❍'

 let imageUrl
 if (fs.existsSync('./storage/data/image/fotosewa.jpg')) {
 imageUrl = await createImage('./storage/data/image/fotosewa.jpg');
 } else if (fs.existsSync('./storage/data/image/fotosewa.png')) {
 imageUrl = await createImage('./storage/data/image/fotosewa.png');
 } else if (fs.existsSync('./storage/data/image/fotosewa.webp')) {
 imageUrl = await createImage('./storage/data/image/fotosewa.webp');
 } else {
 return m.reply(`Foto tidak tersedia, kamu harus ${prefix}setppsewa terlebih dahulu`)
 }

 const push = [{
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: tekssewa
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 text: `Klik Admin Dibawah Ya`
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: true,
 imageMessage: imageUrl
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Admin - ${global.ownername}","url":"https://api.whatsapp.com/send/?phone=${global.owner}&text=Haii+${global.ownername}%0ANak+Nyewa&type=phone_number&app_absent=0"}`
 },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Developer - ${global.developername}","url":"https://api.whatsapp.com/send/?phone=${global.developer}&text=%0AHaii+${global.developername}%0AAda+Yang+Bug+Nih&type=phone_number&app_absent=0"}`
 }
 ]
 })
 }, {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: teksppj
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 text: `Klik Admin Dibawah Ya`
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: true,
 imageMessage: imageUrl
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Admin - ${global.ownername}","url":"https://api.whatsapp.com/send/?phone=${global.owner}&text=Haii+${global.ownername}%0ANak+Perpanjang&type=phone_number&app_absent=0"}`
 },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Developer - ${global.developername}","url":"https://api.whatsapp.com/send/?phone=${global.developer}&text=%0AHaii+${global.developername}%0AAda+Yang+Bug+Nih&type=phone_number&app_absent=0"}`
 }
 ]
 })
 }];

 const bot = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: proto.Message.InteractiveMessage.Body.create({
 text: 'Berikut Daftarnya',
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `> ${botname}`,
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: push
 })
 })
 }
 }
 }, { quoted: m });

 await lenwy.relayMessage(m.chat, bot.message, { messageId: bot.key.id });
  },
};
