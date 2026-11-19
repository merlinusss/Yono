module.exports = {
  command: 'linkgc',
  category: 'GROUP',
  async execute({ lenwy, m, from, isBotAdmins, mess }) {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isBotAdmins) return m.reply(mess.botAdmin);
    try {
      const groupMetadata = await lenwy.groupMetadata(from);
      const response = await lenwy.groupInviteCode(from);
      const message = `ㅤㅤㅤㅤ𝗌𝗁𝗈𝗈𝗍 𝖿𝗈𝗋 𝗍𝗁𝖾 𝗆𝗈𝗈𝗇; 🌙    
 ꣑୧  ּ ִֶָ  𝖾𝗏𝖾𝗇 𝗂𝖿 𝗒𝗈𝗎 𝗆𝗂𝗌𝗌         
 ┈─𝗒𝗈𝗎'𝗅𝗅 𝗅𝖺𝗇𝖽 𝖺𝗆𝗈𝗇𝗀 𝗍𝗁𝖾 𝗌𝗍𝖺𝗋𝗌 ✨💫

 ┈─────┈  𝗁𝖾𝗋𝖾'𝗌 𝗎𝗋 𝗅𝗂𝗇𝗄 𝗀𝗋𝗈𝗎𝗉
 ╰  ⁺ִ 🏛.  ${groupMetadata.subject}
𝗅𝗂𝗇𝗄 𝗀𝗋𝗈𝗎𝗉⦂ https://chat.whatsapp.com/${response}

𝗂𝖽 𝗀𝗋𝗈𝗎𝗉⦂ ${from}


 𝖼⃘𐑋 ±  𝟨𝟨'𝗌   𝗌𝗂𝗅𝖾𝗇𝖼𝖾   🌙.   𝗅𝗂𝗀𝗁𝗍 !
    🏛   𝗇𝗈𝗍𝖾𝗌   ¿?   𝗅𝗂𝗍𝖾𝗋𝖺𝖼𝗒  ¡!
 ⓘ.  𝖻𝖾 𝖼𝖺𝗋𝖾𝖿𝗎𝗅 𝗍𝗈 𝗌𝗁𝖺𝗋𝖾 𝗍𝗁𝖾 𝗅𝗂𝗇𝗄`;
      lenwy.sendText(from, message, m, { detectLink: true });
    } catch (error) {
      console.error('Error while fetching group info:', error);
      m.reply('Terjadi kesalahan saat mengambil informasi grup.');
    }
  },
};
