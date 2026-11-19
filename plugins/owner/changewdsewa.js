module.exports = {
  command: 'changewdsewa',
  category: 'OWNER',
  async execute(ctx) {
    const { m, text, isCreator, mess, owner } = ctx;

if (!isCreator) return (mess.owner)
let teksnya = text ? text : ''
global.text_sewa = teksnya
m.reply(mess.success)
  },
};
