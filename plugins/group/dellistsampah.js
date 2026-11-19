module.exports = {
  command: 'dellistsampah',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, isCreator, mess, groupMetadata, owner, db_respon_list, LenwyLD, libs } = ctx;
    const { sleep, deleteListSampah } = libs;

if (!isCreator) return m.reply(mess.owner)
  LenwyLD()
  m.reply('🧹 Sedang memeriksa daftar grup dan membersihkan list sampah... (harap tunggu)')
  let getGroups = await lenwy.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).map(([_, v]) => v)
  let groupIDs = []
  for (let i = 0; i < groups.length; i++) {
      try {
          let metadata = await lenwy.groupMetadata(groups[i].id)
          groupIDs.push(metadata.id)
          console.log(`✅ Dapat metadata grup: ${metadata.subject} (${metadata.id})`)
      } catch (e) {
          console.log(`⚠️ Gagal fetch metadata grup ke-${i + 1}:`, e.message)
      }
      await sleep(5000)
  }

  let deletedCount = deleteListSampah(db_respon_list, groupIDs)
  if (deletedCount > 0) {
      m.reply(`🧾 *Selesai membersihkan list sampah!*\n🗑️ *Total dihapus:* ${deletedCount} data`)
  } else {
      m.reply(`✨ *Tidak ada list sampah yang ditemukan!*`)
  }
  },
};
