module.exports = {
  command: 'unblock',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, sender, text, isCreator, mess, owner, quoted, libs } = ctx;
    const { jsonformat } = libs;

if (!isCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  },
};
