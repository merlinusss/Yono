module.exports = {
  command: 'ffstalk',
  category: 'TOOLS',
  async execute(ctx) {
    const { m, text, isBan, mess } = ctx;

if (isBan) return m.reply(mess.ban);
  if (!text) return m.reply('*Contoh :*\n> *ffstalk* 587531837');
  
  try {
    let res = await fetch(`https://${global.api.merlinus.domain}/api/gameStalk/ff?id=${text}&apikey=${global.api.merlinus.apikey}`);
    let checkerResult = await res.json();
    
    if (!checkerResult.status || !checkerResult.result) {
      return m.reply('❌ Data tidak ditemukan atau API sedang error.');
    }

    let data = checkerResult.result;
    
    let name = data.nickname || '-';
    let uid = data.id || text;
    let region = data.region || '-';
    let level = data.level || '-';
    let exp = data.exp || '-';
    let likes = data.likes || 0;
    let created = data.created || '-';
    let lastLogin = data.lastLogin || '-';
    let signature = data.signature || '-';
    let petName = data.petName || '-';

    let weaponsText = data.weapons && data.weapons.length > 0 
      ? data.weapons.map(w => `• ${w.name}`).join('\n') 
      : '-';
      
    let outfitsText = data.outfits && data.outfits.length > 0 
      ? data.outfits.map(o => `• ${o.name}`).join('\n') 
      : '-';

    let caption = `👤 *Username:* ${name}
🆔 *ID:* ${uid}
🌍 *Region:* ${region}
📈 *Level:* ${level} (Exp: ${exp})
👍 *Likes:* ${likes}
📝 *Signature:* ${signature}
🐾 *Pet:* ${petName}
📅 *Akun Dibuat:* ${created}
🕰️ *Terakhir Login:* ${lastLogin}

🔫 *Senjata Utama:*
${weaponsText}

👕 *Pakaian (Outfits):*
${outfitsText}`;

    m.reply(caption.trim());
  } catch (e) {
    m.reply('Terjadi error : ' + e);
  }
  },
};
