module.exports = {
  command: 'updatenamelist',
  category: 'GROUP',
  async execute(ctx) {
    const { m, q, isAdmins, mess, db_respon_list, libs } = ctx;
    const { updateKey } = libs;

if (!m.isGroup) return m.reply(mess.group)
 if (!isAdmins) return m.reply(mess.admin)
 const sepIdx = q.indexOf('|')
 if (sepIdx === -1) return m.reply(`*Cara Penggunaan : Updatenamelist OldKey|NewKey*\n🎁 *Contoh : Updatenamelist wdp|antri wdp*`)
 let oldKey = q.slice(0, sepIdx).toLowerCase().trim()
 let newKey = q.slice(sepIdx + 1).toLowerCase().trim()
 if (!oldKey || !newKey) return m.reply(`*Cara Penggunaan : Updatenamelist OldKey|NewKey*\n🎁 *Contoh : Updatenamelist wdp|antri wdp*`)
 if (updateKey(m.chat, oldKey, newKey, db_respon_list)) {
 m.reply(`📑 *Sukses Memperbarui Kode Dari ${oldKey} Menjadi ${newKey}*`)
 } else {
 m.reply(`⚠️ *Nama Item ${oldKey} Belum Terdaftar Dalam Group Ini*`)
 }
  },
};
