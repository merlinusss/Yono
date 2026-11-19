const fs = require('fs');
const path = require('path');
const { getPluginsByCategory } = require('../../library/pluginLoader');
const { loadTemplate, parseTemplate, applyTemplate } = require('../../library/template');
const { runtime } = require('../../library/myfunc');

const LENWY_PATH = path.join(__dirname, '..', '..', 'lenwy.js');

function getAllCategoriesAndCommands() {
  const merged = {};
  const addCmd = (cat, cmd) => {
    const key = cat.toUpperCase();
    if (!merged[key]) merged[key] = new Set();
    merged[key].add(cmd);
  };

  // 1. Dari plugins/
  const pluginCats = getPluginsByCategory();
  for (const [cat, cmds] of Object.entries(pluginCats)) {
    for (const cmd of cmds) addCmd(cat, cmd);
  }

  // 2. Dari switch (command) yang masih ada di lenwy.js (jika ada)
  try {
    const fileContent = fs.readFileSync(LENWY_PATH, 'utf8');
    const catRegex = /\/\/\s*=====\s*AWAL MENU\s+([A-Z]+)\s*=====\s*\/\//g;
    let matchCat;
    while ((matchCat = catRegex.exec(fileContent)) !== null) {
      const catName = matchCat[1].toUpperCase();
      let section = fileContent.split(`// ===== AWAL MENU ${catName} ===== //`)[1];
      if (!section) continue;
      section = section.split('// =====')[0];
      const caseRegex = /\bcase\s+['"]([a-zA-Z0-9_.\s-]+)['"]\s*:/g;
      let match;
      while ((match = caseRegex.exec(section)) !== null) {
        addCmd(catName, match[1]);
      }
    }
  } catch (err) {
    console.error('[menu] Gagal membaca lenwy.js:', err.message);
  }

  return merged;
}

function formatCategoryBlock(categoryName, cmdSet, tplMeta) {
  if (!cmdSet || cmdSet.size === 0) return '';
  const headerTpl = tplMeta.HEADER || ' ◌⑅⃝ ⭐ {CATEGORY} Menu\n ﹌﹌﹌﹌﹌﹌﹌';
  const itemTpl = tplMeta.ITEM || ' ⋮ ⌗ ┆ {CMD}';
  const footerTpl = tplMeta.FOOTER || '╰───────⋆⋆⋆────────';

  const capCat = categoryName.charAt(0) + categoryName.slice(1).toLowerCase();
  const header = applyTemplate(headerTpl, {
    '{CATEGORY}': capCat,
    '{CATEGORY_UPPER}': categoryName.toUpperCase(),
    '{CATEGORY_LOWER}': categoryName.toLowerCase(),
  });

  const items = [...cmdSet].map((cmdName, idx) => {
    const capCmd = cmdName.charAt(0).toUpperCase() + cmdName.slice(1);
    return applyTemplate(itemTpl, {
      '{NO}': idx + 1,
      '{CMD}': capCmd,
      '{CMD_UPPER}': cmdName.toUpperCase(),
      '{CMD_LOWER}': cmdName.toLowerCase(),
    });
  }).join('\n');

  return `${header}\n${items}\n${footerTpl}\n\n`;
}

module.exports = {
  command: 'menu',
  category: 'INFO',
  hidden: true,
  async execute(ctx) {
    const { m, text, command, prefix, pushname, isCreator, isPrem, authorr } = ctx;
    const inputUser = text ? text.toLowerCase().trim() : '';
    const categories = getAllCategoriesAndCommands();

    const rawTemplate = loadTemplate('menu', '{MENU}');
    const { meta: tplMeta, body: bodyTemplate } = parseTemplate(rawTemplate);
    const listHeaderTpl = tplMeta.LIST_HEADER || ' ◌⑅⃝ ⭐ 𝗠𝗘𝗡𝗨 𝗕𝗢𝗧\n ﹌﹌﹌﹌﹌﹌﹌';
    const itemTpl = tplMeta.ITEM || ' ⋮ ⌗ ┆ {CMD}';
    const footerTpl = tplMeta.FOOTER || '╰───────⋆⋆⋆────────';

    let menuResult = '';

    if (!inputUser) {
      const entries = [
        `${prefix + command} all`,
        ...Object.keys(categories).map(catName => {
          const capName = catName.charAt(0) + catName.slice(1).toLowerCase();
          return `${prefix + command} ${capName}`;
        }),
      ];
      const rows = entries.map((entry, idx) => applyTemplate(itemTpl, {
        '{NO}': idx + 1,
        '{CMD}': entry,
        '{CMD_UPPER}': entry.toUpperCase(),
        '{CMD_LOWER}': entry.toLowerCase(),
      })).join('\n');
      menuResult = `${listHeaderTpl}\n${rows}\n${footerTpl}`;
    } else if (inputUser === 'all') {
      for (const [catName, cmdSet] of Object.entries(categories)) {
        menuResult += formatCategoryBlock(catName, cmdSet, tplMeta);
      }
    } else {
      const targetCategory = (inputUser.replace('menu', '').trim() || inputUser).toUpperCase();
      menuResult = formatCategoryBlock(targetCategory, categories[targetCategory], tplMeta);
      if (!menuResult) return m.reply(`Maaf kak, kategori menu *${inputUser}* tidak ditemukan!`);
    }

    const statusLabel = isCreator ? `${global.emoji} Creator` : isPrem ? '🎁 Premium' : '🏷️ User';
    const textMenu = applyTemplate(bodyTemplate, {
      '{RUNTIME}': runtime(process.uptime()),
      '{CREATOR}': authorr,
      '{NAME}': pushname,
      '{NUMBER}': m.sender.split('@')[0],
      '{STATUS}': statusLabel,
      '{MENU}': menuResult.trimEnd(),
    });

    await m.reply(textMenu);
  },
};
