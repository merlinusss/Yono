module.exports = {
  command: 'cekidgc',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, isCreator, mess, LenwyLD, libs } = ctx;
    const { sleep } = libs;

    if (!isCreator) return m.reply(mess.owner);
    LenwyLD();

    const getGroups = await lenwy.groupFetchAllParticipating();
    const groups = Object.values(getGroups);
    let teks = `Daftar grup ${global.botname} (${groups.length} grup)\n\n`;

    for (const g of groups) {
      let linkgc = '-';
      try {
        await sleep(500);
        const code = await lenwy.groupInviteCode(g.id);
        linkgc = `https://chat.whatsapp.com/${code}`;
      } catch {}

      teks += `Nama: ${g.subject || '-'}\nID: ${g.id}\nAnggota: ${g.participants?.length || 0}\nLink: ${linkgc}\n────────────────────────\n\n`;
    }

    return m.reply(teks + `Cara pushkontak: pushkontak idGrup|teks`);
  },
};
