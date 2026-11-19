module.exports = {
  command: 'listsewa',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, prefix, isCreator, mess, groupMetadata, participants, owner, pathsewa, now, LenwyLD, libs } = ctx;
    const { fs, sleep } = libs;

if (!isCreator) return m.reply(mess.owner)
  LenwyLD()
  try {
      const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
      let ordernye = `*List Sewa*\nJumlah : ${currentDir.length}\n\n`
      for (const entry of currentDir) {
        await sleep(5000)
          let idgc = entry.groupId;
            let linkgc
            try {
              let response2 = await lenwy.groupInviteCode(idgc)
              linkgc = `https://chat.whatsapp.com/${response2}`
            } catch {
              linkgc = '-'
            }
            try {
              let metadata = await lenwy.groupMetadata(idgc)
              const totalMembers = metadata.participants ? metadata.participants.length : 0;
              let expirednya = `Permanent`
              if (!entry.isAlifetime) {
                const expiry = entry.expired;
                const remainingTime = expiry - Date.now()
                var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
                var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
                expirednya = `${days || '-'} hari ${hours || '-'} jam ${minutes || '-'} menit`
              }

              ordernye += `✅ ${metadata.subject}
🎁 ID Group : ${entry.groupId}
📦 Total Member : ${totalMembers || '-'} Member
⏰ Expired : ${expirednya}
> Link Group : ${linkgc}
────────────────────────\n\n`
            } catch (e) {
              ordernye += `⛔
🎁 Group ID: ${idgc}
📦 Tidak bisa mengakses metadata grup, Kemungkinan bot telah keluar dari group.
> Pesan: ${e.message}
────────────────────────\n\n`
            }
      }
      m.reply(ordernye + `> Gunakan ${prefix}delsewa (idGroup) untuk menghapus sewa jika private chat dengan bot
> Gunakan ${prefix}delsewa untuk menghapus sewa jika berada di dalam grup`)
  } catch (error) {
      m.reply('Terjadi kesalahan saat membaca file: ' + error.message)
  }
  },
};
