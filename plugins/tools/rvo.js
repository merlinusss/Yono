module.exports = {
  command: 'rvo',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, from, text, isAdmins, isCreator, mess, quoted, isQuotedViewOnce, type, libs } = ctx;
    const { downloadContentFromMessage } = libs;

  {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!isQuotedViewOnce) return m.reply('*Reply Foto, Video Atau Voice Note Yang Di View Once*')
let type = m.quoted.mtype
let media = await downloadContentFromMessage(quoted, type === "audioMessage" ? "audio" : type === "imageMessage" ? "image" : "video");
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await lenwy.sendMessage(m.chat, { video: buffer, caption: `Caption: ${m.quoted?.fakeObj?.message.videoMessage.text || ''}` }, {quoted: m})
} else if (/image/.test(type)) {
await lenwy.sendMessage(m.chat, { image: buffer, caption: `Caption: ${m.quoted?.fakeObj?.message.imageMessage.text || ''}` }, {quoted: m})
} else if (/audio/.test(type)) {
await lenwy.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
}
  }
  },
};
