const { sleep } = require('../../library/myfunc');

module.exports = {
  command: 'restart',
  category: 'OWNER',
  async execute({ m, text, isCreator, mess }) {
    if (!isCreator) return m.reply(mess.owner);
    if (text) return;
    await m.reply(`restarting ${global.botname}`);
    await sleep(1500);
    process.exit();
  },
};
