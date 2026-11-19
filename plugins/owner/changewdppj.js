module.exports = {
  command: 'changewdppj',
  category: 'OWNER',
  async execute(ctx) {
    const { m, text, isCreator, mess, owner } = ctx;

if (!isCreator) return (mess.owner)
let teksnya = text ? text : ''
global.text_ppj = teksnya
m.reply(mess.success)
  },
};
