module.exports = {
  command: 'updatelist',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, q, isAdmins, mess, quoted, mime, db_respon_list, libs } = ctx;
    const { fs, uploaderLebih, isAlreadyResponList, updateResponList } = libs;

if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
const sepIdx = q.indexOf('|')
if (sepIdx === -1) return m.reply(`*Cara Pengunaan : Updatelist Item|Respon*\n🎁 *Contoh : Updatelist wdp|harga wdp | 28k*`)
let args1 = q.slice(0, sepIdx).toLowerCase().trim()
let args2 = q.slice(sepIdx + 1).trim()
if (!args1 || !args2) return m.reply(`*Cara Pengunaan : Updatelist Item|Respon*\n🎁 *Contoh : Updatelist wdp|harga wdp | 28k*`)
if (!isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`⚠️ *Nama Item ${args1} Belum Terdaftar Dalam Group Ini*`)
if (/image/.test(mime)) {
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await uploaderLebih(media)
updateResponList(m.chat, args1, args2, true, `${mem}`, db_respon_list)
m.reply(`📑 *Sukses Memperbarui Item Dengan Kode : ${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`📑 *Sukses Memperbarui Item Dengan Kode : ${args1}*`)
}
  },
};
