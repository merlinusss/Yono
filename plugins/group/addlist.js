module.exports = {
  command: 'addlist',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, from, q, command, prefix, isAdmins, mess, quoted, mime, db_respon_list, libs } = ctx;
    const { fs, uploaderLebih, addResponList, isAlreadyResponList } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);

    const sepIdx = q.indexOf('|');
    if (sepIdx === -1) {
      return m.reply(`Cara pakai: ${prefix + command} item|respon\nContoh: ${prefix + command} wdp|harga wdp | 28k`);
    }

    const args1 = q.slice(0, sepIdx).toLowerCase().trim();
    const args2 = q.slice(sepIdx + 1).trim();
    if (!args1 || !args2) return m.reply('Nama item dan respon harus diisi.');
    if (args1 === args2) return m.reply('Nama item dan respon tidak boleh sama.');
    if (isAlreadyResponList(from, args1, db_respon_list)) {
      return m.reply(`Item ${args1} sudah ada di grup ini.`);
    }

    if (/image/.test(mime)) {
      const media = await lenwy.downloadAndSaveMediaMessage(quoted);
      const mem = await uploaderLebih(media);
      addResponList(from, args1, args2, true, `${mem}`, db_respon_list);
      if (fs.existsSync(media)) fs.unlinkSync(media);
    } else {
      addResponList(from, args1, args2, false, '-', db_respon_list);
    }
    return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
  },
};
