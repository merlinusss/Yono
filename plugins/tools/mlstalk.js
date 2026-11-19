module.exports = {
  command: 'mlstalk',
  category: 'TOOLS',
  async execute(ctx) {
    const { m, q, command, prefix, libs } = ctx;
    const { axios } = libs;

if (!q) return m.reply(`Contoh ${prefix + command} 696964467(8770)`);
  
  let [id, serverId] = q.split("(").map(v => v ? v.replace(")", "").trim() : "");
  if (!id || !serverId) return m.reply(`Masukkan id dan idzone anda`);
  
  let nicknameUser = '-', regionUser = '-', regionFlag = '-', topupText = "";

  try {
    const baseUrl = `https://${global.api.merlinus.domain}/api/gameStalk`;
    const apikey = global.api.merlinus.apikey;

    const [resRegion, resTopup] = await Promise.all([
      axios.get(`${baseUrl}/mlbb-region?id=${id}&zone=${serverId}&apikey=${apikey}`),
      axios.get(`${baseUrl}/mlbb-infodm?id=${id}&zone=${serverId}&apikey=${apikey}`)
    ].map(p => p.catch(() => null)));

    const dataRegion = resRegion?.data?.result || {};
    nicknameUser = dataRegion.nickname || '-';
    regionUser = dataRegion.country || '-';
    regionFlag = dataRegion.flag || '-';

    const dataTopup = resTopup?.data?.result || {};
    const dmGanda = dataTopup.dm_ganda || {};
    const bundles = dataTopup.bundles || {};

    if (Object.keys(dmGanda).length || Object.keys(bundles).length) {
      for (let [pkg, status] of Object.entries(dmGanda)) {
        topupText += `• ${pkg} 💎: ${status}\n`;
      }
      topupText += `\n🎁 *Bundles:*\n`;
      for (let [pkg, status] of Object.entries(bundles)) {
        topupText += `• ${pkg}: ${status}\n`;
      }
    } else {
      topupText = "-";
    }
  } catch (e) {
    console.error('Gagal fetch mlstalk:', e);
    topupText = "-";
  }

  m.reply(`👤 *Username:* ${nicknameUser}
🆔 *ID:* ${id}
🌐 *ID Zone:* ${serverId}
📍 *Region:* ${regionUser} 
🏳 *Bendera:* ${regionFlag}

🛒 *First Recharge:*
${topupText.trim()}`);
  },
};
