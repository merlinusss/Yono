module.exports = {
  command: 'jodoh',
  category: 'FUN',
  async execute(ctx) {
    const { lenwy, m, from, sender, text, participants, quoted } = ctx;

if (!m.isGroup) return
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
await lenwy.sendMessage(from, { text : `@${me.split('@')[0]} ❤ @${jodoh.split('@')[0]}`, mentions : [me, jodoh] }, { quoted: m })
  },
};
