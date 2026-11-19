module.exports = {
  command: 'cekidgc',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, isCreator, mess, groupMetadata, participants, owner, LenwyLD, libs } = ctx;
    const { sleep } = libs;

if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(200)
let getGroups = await lenwy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `*List Grup Yang Dimasuki ${botname}*\n🎁 *Total Group : ${anu.length} Group*\n\n`

for (let x of anu) {
  await sleep(5000)
  let metadata2 = await lenwy.groupMetadata(x)
  try {
    let response2 = await lenwy.groupInviteCode(metadata2.id)
    linkgc = `https://chat.whatsapp.com/${response2}`
  } catch {
    linkgc = '-'
  }
  teks += `*Nama Group : ${metadata2.subject}*
🎁 *ID Group : ${metadata2.id}*
📦 *Total Member Group : ${metadata2.participants.length}*
📎 *Link Group : ${linkgc}*
────────────────────────\n\n`
  }
  m.reply(teks + `*Cara Penggunaan : Pushkontak ID Group|Teks*\n🎁 *Contoh : Pushkontak ID Group|Save ${botname}*`)
  },
};
