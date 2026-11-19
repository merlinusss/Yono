module.exports = {
  command: 'mutegc',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, isCreator, gcMuted, mess, owner, libs } = ctx;
    const { fs, getGroupIdFromLink } = libs;

if (!isCreator) return m.reply(mess.owner)

  let gcList;
  try {
    const data = fs.readFileSync('./storage/gcMuted.json', 'utf-8');
    gcList = JSON.parse(data);
  } catch (error) {
    console.error('Error membaca file gcMuted.json:', error);
    gcList = [];
  }

  let groupId;

  if (m.isGroup) {
    groupId = m.chat;
  } else {
    if (!text) return m.reply(`Kirim link grupnya dulu bang!\nContoh:\n${prefix + command} https://chat.whatsapp.com/xxxxx`)
    let linknya = text
    if (text.includes('?')) linknya = text.split('?')[0]
    try {
      groupId = await getGroupIdFromLink(linknya, lenwy);
    } catch (err) {
      console.error(err);
      return m.reply("Gagal ambil ID grup dari link. Link mungkin tidak valid atau sudah expired.");
    }
  }

  if (gcList.includes(groupId)) return m.reply(`Grup ${groupId} sudah dalam daftar mute.`);

  gcList.push(groupId);
  fs.writeFileSync('./storage/gcMuted.json', JSON.stringify(gcList, null, 2));
  m.reply(`Grup ${groupId} berhasil dimute.`);
  },
};
