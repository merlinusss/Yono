const fs = require('fs');
const path = require('path');
const { getPluginCount } = require('../../library/pluginLoader');

module.exports = {
  command: 'totalfitur',
  category: 'OWNER',
  async execute({ m, pushname }) {
    const lenwyText = fs.readFileSync(path.join(__dirname, '..', '..', 'lenwy.js'), 'utf8');
    const caseCount = (lenwyText.match(/\bcase\s+['"]/g) || []).length;
    const pluginCount = getPluginCount();
    const total = caseCount + pluginCount;
    m.reply(`Hallo ${pushname}\nSaat ini ${global.botname} memiliki total fitur *${total}* (${pluginCount} plugin + ${caseCount} case).`);
  },
};
