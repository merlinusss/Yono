module.exports = {
  command: 'dellist',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, text, q, prefix, isAdmins, mess, quoted, db_respon_list, libs } = ctx;
    const { delResponList, isAlreadyResponList } = libs;

if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins) return m.reply(mess.admin)
    if (db_respon_list.length === 0) return m.reply(`List di group ini kosong loh`)
    if (!text) return m.reply(`Mau hapus list apa?`)
    let sortedList = db_respon_list.filter(i => i.id === m.chat).sort((a, b) => {
        if (a.key < b.key) return -1;
        if (a.key > b.key) return 1;
        return 0;
    })
    if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) {
        let buttons = sortedList.map(i => ({
            title: `${prefix}dellist ${i.key}`,
            id: `${prefix}dellist ${i.key}`
        }))
        await lenwy.sendMessage(m.chat, {
            text: "Item tidak ditemukan.\n\nCek lagi ketikannya, atau biar gampang langsung pilih dari tombol di bawah aja"
        }, { quoted: m })
        await lenwy.sendMessage(m.chat, {
            interactiveMessage: {
                header: "✨ Kamu lagi mau hapus apa yaa?",
                footer: "Ketik nama item nya atau klik tombol di bawah ini",
                nativeFlowMessage: {
                    buttons: [{
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            title: "📝 Dellist",
                            sections: [{
                                title: "✨ Daftar List yang akan di hapus",
                                rows: buttons
                            }]
                        })
                    }]
                }
            }
        }, { quoted: m })
    }

    if (isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) {
        delResponList(m.chat, q.toLowerCase(), db_respon_list)
        m.reply(`⚠️ *Sukses Menghapus Item Dengan kode : ${q}*`)
    }
  },
};
