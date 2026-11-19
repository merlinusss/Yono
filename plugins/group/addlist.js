module.exports = {
  command: 'addlist',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, from, q, command, prefix, isAdmins, mess, quoted, mime, db_respon_list, libs } = ctx;
    const { fs, uploaderLebih, addResponList, isAlreadyResponList } = libs;

if (!isAdmins) return m.reply(mess.admin)
if (!m.isGroup) return m.reply(mess.group)
const sepIdx = q.indexOf('|')
if (sepIdx === -1) return m.reply(`Contoh: ${prefix+command} Key|Respon\nContoh: ${prefix+command} wdp|harga wdp | 28k`)
let args1 = q.slice(0, sepIdx).toLowerCase().trim()
let args2 = q.slice(sepIdx + 1).trim()
if (!args1 || !args2) return m.reply(`Key dan respon harus di isi kak`)
if (args1 == args2) return m.reply(`Key dan respon tidak boleh sama kak`)
if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`Nama list ${args1} sudah ada`)
if (/image/.test(mime)) {
  media = await lenwy.downloadAndSaveMediaMessage(quoted)
  mem = await uploaderLebih(media)
  addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
  m.reply(`📑 Yeayy berhasil menambahkan list ${args1}`)
  if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
  addResponList(from, args1, args2, false, '-', db_respon_list)
  m.reply(`📑 Berhasil menambahkan list ${args1}`)
}
  },
};
