module.exports = {
  command: 'inspect',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, from, args, isBan, type, libs } = ctx;
    const { moment, format, parseMention } = libs;

if (isBan) return m.reply(global.mess.ban)
if (!args[0]) return m.reply("Linknya?")
let coded = args.join(" ").split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link invalid")

lenwy.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
let attrs = res.content[0].attrs;
let tekse = `「 *INSPECT GROUP LINK* 」\n
▸ *Nama Group* : ${attrs.subject || "Undefined"}
▸ *Pembuat* : ${attrs.creator ? "@" + attrs.creator.split("@")[0] : "Undefined"}
▸ *Dibuat Pada* : ${attrs.creation ? moment(attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "Undefined"}
▸ *Total Member* : ${attrs.size || "Undefined"} Member
▸ *Deskripsi Diubah* : ${attrs.s_t ? moment(attrs.s_t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "Undefined"}
▸ *ID Group* : ${attrs.id ? attrs.id + "@g.us" : "Undefined"}\n
© By ${botname}`

let pp;
try {
pp = await lenwy.profilePictureUrl(attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}

lenwy.sendFile(from, pp, "", m, { caption: tekse, mentions: await lenwy.parseMention(tekse) })
}).catch(() => {
m.reply("Gagal mengambil data, mungkin link sudah tidak valid atau kedaluwarsa.")
})
  },
};
