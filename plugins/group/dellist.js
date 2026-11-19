module.exports = {
  command: 'dellist',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, text, q, prefix, isAdmins, mess, db_respon_list, libs } = ctx;
    const { delResponList, isAlreadyResponList } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (db_respon_list.length === 0) return m.reply('Belum ada list di grup ini.');
    if (!text) return m.reply(`Masukkan nama item yang ingin dihapus. Contoh: ${prefix}dellist wdp`);

    const targetKey = q.toLowerCase().trim();
    if (!isAlreadyResponList(m.chat, targetKey, db_respon_list)) {
      const sortedList = db_respon_list
        .filter(i => i.id === m.chat)
        .sort((a, b) => a.key.localeCompare(b.key));
      const buttons = sortedList.map(i => ({
        title: `${prefix}dellist ${i.key}`,
        id: `${prefix}dellist ${i.key}`,
      }));

      await lenwy.sendMessage(m.chat, {
        text: '❌ Item tidak ditemukan. Pilih dari daftar di bawah atau cek kembali nama itemnya.',
      }, { quoted: m });

      if (buttons.length > 0) {
        await lenwy.sendMessage(m.chat, {
          interactiveMessage: {
            header: 'Pilih item yang ingin dihapus',
            footer: 'Klik tombol di bawah atau ketik manual nama itemnya.',
            nativeFlowMessage: {
              buttons: [{
                name: 'single_select',
                buttonParamsJson: JSON.stringify({
                  title: 'Daftar item',
                  sections: [{
                    title: 'Pilih untuk menghapus',
                    rows: buttons,
                  }],
                }),
              }],
            },
          },
        }, { quoted: m });
      }
      return;
    }

    delResponList(m.chat, targetKey, db_respon_list);
    return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
  },
};
