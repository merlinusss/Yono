module.exports = {
  command: 'cekidch',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, quoted } = ctx;

if (!text) return m.reply('📌 Kirim link channel WhatsApp-nya!');
 if (!text.includes("https://whatsapp.com/channel/")) return m.reply('❌ Link tidak valid! Format harus: https://whatsapp.com/channel/...');

 try {
 const channelCode = text.split('https://whatsapp.com/channel/')[1];
 const res = await lenwy.newsletterMetadata("invite", channelCode);

 if (!res?.id) return m.reply('❌ Gagal mengambil info channel.');

 const verified = res.verification === 'VERIFIED' ? '✅ Ya' : '❌ Tidak';
 const status = res.state === 'ACTIVE' ? '🟢 Aktif' : '🔴 Tidak aktif';
 
 const teks = `⬣ *INFORMASI CHANNEL*\n\n` +
 `📌 *Nama:* ${res.name || '-'}\n` +
 `🆔 *ID:* ${res.id}\n` +
 `👥 *Followers:* ${res.subscribers?.toLocaleString('id-ID') || 0}\n` +
 `📶 *Status:* ${status}\n` +
 `☑️ *Verified:* ${verified}`;

 await lenwy.sendMessage(m.chat, {
 text: teks,
 footer: `🔹 Gunakan tombol di bawah untuk copy ID Channel`,
 title: `📡 Channel: ${res.name || 'Tidak diketahui'}`,
 interactiveButtons: [
 {
 name: 'cta_copy',
 buttonParamsJson: JSON.stringify({
 display_text: '📋 Copy ID Channel',
 id: res.id,
 copy_code: res.id
 })
 }
 ]
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 return m.reply(`❌ *Gagal mengambil data channel:*\n${err.message || 'Tidak diketahui.'}`);
 }
  },
};
