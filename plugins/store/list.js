const fs = require('fs');
const { loadTemplate, parseTemplate, applyTemplate } = require('../../library/template');
const { isAlreadyResponListGroup } = require('../../library/respon-list');

const DB_GROUP_PATH = './storage/databaseGroup.json';

module.exports = {
  command: 'list',
  category: 'store',
  async execute(ctx) {
    const {
      lenwy, m, from, args, text, command, prefix,
      isAdmins, mess, groupName, db_respon_list,
      wib, harinya, hariini2
    } = ctx;

    if (text) return;
    if (db_respon_list.length === 0) return m.reply(`*Belum Ada List Yang Ditambahkan*`);
    if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`*Belum Ada List Yang Terdaftar Di Grup Ini*`);

    const groupID = m.chat;
    const usertag = `@${m.sender.split('@')[0]}`;

    if (!global.datagc[groupID]) {
      global.datagc[groupID] = { text_list: '', text_list_simbol: '' };
      fs.writeFileSync(DB_GROUP_PATH, JSON.stringify(global.datagc, null, 2));
    }

    const defaultRaw = loadTemplate('list', 'Halo {TAG}\n\n{SIMBOL}');
    const rawTemplate = global.datagc[groupID].text_list || defaultRaw;
    const { meta, body: textListTemplate } = parseTemplate(rawTemplate);
    const customSimbol = global.datagc[groupID].text_list_simbol;
    const itemTemplate = customSimbol
      ? (/\{KEY(?:_UPPER|_LOWER)?\}/i.test(customSimbol) ? customSimbol : `${customSimbol} *{KEY}*`)
      : (meta.ITEM || '    ⋆˙⟡ *{KEY}*');

    try {
      const sortedList = db_respon_list
        .filter(i => i.id === groupID)
        .sort((a, b) => a.key.localeCompare(b.key));
      if (sortedList.length === 0) return m.reply(`*Tidak ada list yang tersedia di grup ini*`);

      const listBody = sortedList
        .map((item, idx) => '\n' + applyTemplate(itemTemplate, {
          '{NO}': idx + 1,
          '{KEY}': item.key,
          '{KEY_UPPER}': item.key.toUpperCase(),
          '{KEY_LOWER}': item.key.toLowerCase(),
        }))
        .join('');
      const finalText = applyTemplate(textListTemplate, {
        '{GROUPNAME}': groupName,
        '{TAG}': usertag,
        '{JAM}': wib,
        '{NAMAHARI}': harinya,
        '{TANGGAL}': hariini2,
        '{SIMBOL}': listBody,
      });

      await lenwy.sendMessage(m.chat, { text: finalText, mentions: [m.sender] }, { quoted: m });

      const buttons = sortedList.map(i => ({ title: i.key, id: i.key }));
      await lenwy.sendMessage(from, {
        interactiveMessage: {
          header: `✨ Hai ini List di group ${groupName}`,
          footer: 'silahkan klik tombol di bawah ini lalu pilih *list* yang tersedia',
          nativeFlowMessage: {
            buttons: [
              {
                name: 'single_select',
                buttonParamsJson: JSON.stringify({
                  title: '📝 List',
                  sections: [{ title: '✨ Daftar', rows: buttons }],
                }),
              },
            ],
          },
        },
      }, { quoted: m });
    } catch (err) {
      console.error(err);
      m.reply(`❌ *Terjadi Kesalahan Saat Menampilkan List*`);
    }
  },
};
