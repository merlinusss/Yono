module.exports = {
  command: 'updatelist',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, q, prefix, isAdmins, mess, quoted, mime, db_respon_list, libs } = ctx;
    const { fs, uploaderLebih, isAlreadyResponList, updateResponList } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);

    const sepIdx = q.indexOf('|');
    if (sepIdx === -1) {
      return m.reply(`Cara pakai: ${prefix}updatelist item|respon\nContoh: ${prefix}updatelist wdp|harga wdp | 28k`);
    }

    const args1 = q.slice(0, sepIdx).toLowerCase().trim();
    const args2 = q.slice(sepIdx + 1).trim();
    if (!args1 || !args2) {
      return m.reply(`Cara pakai: ${prefix}updatelist item|respon\nContoh: ${prefix}updatelist wdp|harga wdp | 28k`);
    }
    if (!isAlreadyResponList(m.chat, args1, db_respon_list)) {
      return m.reply(`❌ Item ${args1} belum terdaftar di grup ini.`);
    }

    if (/image/.test(mime)) {
      const media = await lenwy.downloadAndSaveMediaMessage(quoted);
      const mem = await uploaderLebih(media);
      updateResponList(m.chat, args1, args2, true, `${mem}`, db_respon_list);
      if (fs.existsSync(media)) fs.unlinkSync(media);
    } else {
      updateResponList(m.chat, args1, args2, false, '-', db_respon_list);
    }
    return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
  },
};
