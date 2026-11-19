module.exports = {
  command: 'sendlist',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, budy, text, command, prefix, isAdmins, isCreator, mess, groupMetadata, db_respon_list, libs } = ctx;
    const { updateId, getGroupIdFromLink } = libs;

let oldId
  let newId
  if (!m.isGroup) {
    if (!isCreator) return
    if (!text) return m.reply(`*Cara Penggunaan : ${prefix + command} linkGroup1|linkGroup2*`)
    if (!budy.includes('|')) return m.reply(`*Cara Penggunaan : ${prefix + command} linkGroup1|linkGroup2*`)
    let links = text.split('|')
    oldId = await getGroupIdFromLink(links[0].trim(), lenwy)
    newId = await getGroupIdFromLink(links[1].trim(), lenwy)
  } else {
    if (!isAdmins) return m.reply(mess.admin)
    if (!text) return m.reply(`*Cara Penggunaan : ${prefix + command} linkGroup2*`)
    oldId = m.chat
    newId = await getGroupIdFromLink(text, lenwy)
  }
  let datagrup = await lenwy.groupMetadata(newId)
  if (updateId(oldId, newId, db_respon_list)) {
      m.reply(`📑 *Sukses mengirimkan list ke Group ${datagrup.subject}*`);
  } else {
      m.reply(`⚠️ *Gagal mengirimkan list ke Group ${datagrup.subject}*`);
  }
  },
};
