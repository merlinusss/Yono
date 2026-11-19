module.exports = {
  command: 'robloxstalk',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, quoted, LenwyLD } = ctx;

if (!text) return m.reply('masukkan username roblox anda');
 LenwyLD();
 try {
 const response = await (await fetch(`https://${global.api.ham.domain}/stalk/roblox?apikey=${global.api.ham.apikey}&nickname=${encodeURIComponent(text)}`)).json()
 const data = response.result;
 console.log(data)

 const formatPesan = `*🍒 ROBLOX PROFILE 🍒*\n\n` +
 `*PROFILE*\n` +
 `> *Username*: @${data.userInfo.name || '-'}\n` +
 `> *Display Name*: ${data.userInfo.displayName || '-'}\n` +
 `> *Bio*: ${data.userInfo.description && data.userInfo.description !== '-' ? data.userInfo.description : 'No bio available'}\n\n` +
 `*INFORMATION*\n` +
 `> *Created*: ${new Date(data.userInfo.created).toLocaleString('en-US')}\n` +
 `> *Verified*: ${data.userInfo.hasVerifiedBadge ? '✅' : '❌'}\n\n` +
 `*STATISTICS*\n` +
 `> *Friends*: ${data.userFriendCount.count.toLocaleString() || '-'}`

 await lenwy.sendMessage(m.chat, { image: { url: data.userAvatar.data[0].imageUrl }, caption: formatPesan }, { quoted: m });
 } catch (e) {
 console.error(e);
 m.reply('Terjadi kesalahan saat mengambil data.');
 }
  },
};
