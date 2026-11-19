module.exports = {
  command: 'get',
  aliases: ['detail'],
  category: 'TOPUP',
  async execute(ctx) {
    const { lenwy, m, from, sender, text, command, prefix, isGcTopup, quoted, type, libs } = ctx;
    const { fs, cekLayananDigiPrabayar, formatSaldo } = libs;

if (!isGcTopup) return m.reply(`Group ini tidak terdaftar di group Topup`);

  let responseDigi = await cekLayananDigiPrabayar();
  let dataProdukDigi = Array.isArray(responseDigi?.data) ? responseDigi.data : [];

  const users = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'));
  const userData = users.find(item => {
    if (Array.isArray(item.id)) return item.id.includes(m.sender);
    return item.id === m.sender;
  });

  if (!userData) return m.reply(`Ketik ${prefix}daftar terlebih dahulu`);

  const userRole = String(userData.role || "1");

  const aliasMap = {
    ml: 'mobile legends',
    ff: 'free fire',
    pubg: 'pubg mobile',
    mlf: 'mobile legends filipina',
    mlb: 'mobile legends brazil',
    mlm: 'mobile legends malaysia',
    mlg: 'mobile legends global',
    mlw: 'mobile legends membership',
    tselpulsa: 'telkomsel pulsa',
    ttview: 'tiktok view'
  };

  const categoryGroup = ['Pulsa', 'Data'];
  let profitData = JSON.parse(fs.readFileSync('./project/database/config.json', 'utf8'));

  let input = text.toLowerCase().trim();
  input = aliasMap[input] || input || '';

  let uniqueBrands = [];
  if (dataProdukDigi.length > 0) {
    uniqueBrands = [...new Set(dataProdukDigi.map(product => {
      let brand = product.brand.toLowerCase();
      let type = product.type?.toLowerCase() || 'umum';
      return type !== 'umum' ? `${brand} ${type}` : brand;
    }))];
  }

  if (uniqueBrands.some(brand => input.includes(brand))) {
    let filteredProducts = dataProdukDigi.filter(product => {
      let brand = product.brand.toLowerCase();
      let type = product.type?.toLowerCase() || 'umum';
      let fullTypeMatch = type !== 'umum' ? `${brand} ${type}` : brand;
      return fullTypeMatch === input;
    });

    if (filteredProducts.length > 0) {
      filteredProducts.sort((a, b) => a.price - b.price);

      let brandName = filteredProducts[0].brand.toUpperCase();
      let typeName = (filteredProducts[0].type && filteredProducts[0].type.toUpperCase() !== 'UMUM') ? ' ' + filteredProducts[0].type.toUpperCase() : '';
      let productTitle = brandName + typeName;

      let header = `⠀⠀⠀⢸⣦⡀⠀⠀⠀⠀⢀⡄ 
⠀⠀⠀⢸⣏⠻⣶⣤⡶⢾⡿⠁ 𝗅𝗂𝗍𝗍𝗅𝖾 𝗌𝗍𝖺𝗋𝗌 𝗐𝗂𝗍𝗁 𝖽𝗋𝖾𝖺𝗆𝗌
⠀⠀⣀⣼⠷⠀⠀⠁⢀⣿⠃⠀╰     ⁺ִ 💫.   ╮  𝖳𝗁𝖾 𝗌𝗍𝖺𝗋𝗌 .
⠴⣾⣯⣅⣀⠀⠀⠀⠈⢻⣦⡀ 𝖽𝗈𝗇𝗍 𝖼𝗈𝗆𝗉𝖾𝗍𝖾 𝖿𝗈𝗋
⠀⠀⠀⠉⢻⡇⣤⣾⣿⣷⣿⣿⡄ 𝖺𝗍𝗍𝖾𝗇𝗍𝗂𝗈𝗇, 𝗍𝗁𝖾𝗒 𝗃𝗎𝗌𝗍 
⠀⠀⠀⠀⠸⣿⡿⠏ 𝗌𝗁𝗂𝗇𝖾 𝗂𝗇 𝗍𝗁𝖾𝗂𝗋 𝗈𝗐𝗇 𝗐𝖺𝗒. !! ‹𝟹  
⠀⠀⠀⠀⠀⠟⠁┈─────┈ 𝖼𝗁𝖾𝖼𝗄 𝗒𝗈𝗎𝗋 𝗉𝗋𝗂𝖼𝖾𝗅𝗂𝗌𝗍 ¡!\n\n`;

      let messages = filteredProducts.map(product => {
        let basePrice = Number(product.price || 0);
        let harga1 = Math.round(basePrice * (1 + profitData.profit1Topup / 100));
        let harga2 = Math.round(basePrice * (1 + profitData.profit2Topup / 100));
        let harga3 = Math.round(basePrice * (1 + profitData.profit3Topup / 100));
        let adjustedPrice =
          userRole === "1" ? harga1 :
          userRole === "2" ? harga2 :
          userRole === "3" ? harga3 :
          basePrice;

        let statusIcon = product.seller_product_status && product.buyer_product_status ? "✅" : "⛔";

        if (command === 'detail' || command === 'daftarharga') {
          return `ㅤ╭⫍🏛 ╮${product.product_name}
ㅤ.. 𖹭 ╯ Kode produk ⦂ ${product.buyer_sku_code}
ㅤ╰ 𖹭..  Status ⦂ ${statusIcon}
ㅤ.. 𖹭 ╯ Harga ${global.settings.roles.role2} ⦂ ${formatSaldo(harga2)}
ㅤ╰ 𖹭..  Harga ${global.settings.roles.role1} ⦂ ${formatSaldo(harga1)}
ㅤ.. 𖹭 ╯ Harga ${global.settings.roles.role3} ⦂ ${formatSaldo(harga3)}`;
        } else {
          return `ㅤ╭⫍🏛 ╮${product.product_name}
ㅤ.. 𖹭 ╯ Kode produk ⦂ ${product.buyer_sku_code}
ㅤ╰ 𖹭..  Status ⦂ ${statusIcon}
ㅤ.. 𖹭 ╯ Harga ⦂ ${formatSaldo(adjustedPrice)}`;
        }
      }).join('\n\n');

      return lenwy.sendMessage(m.chat, { text: header + messages, mentions: [m.sender] }, { quoted: m });
    }
  }

  if (dataProdukDigi.length > 0 && uniqueBrands.length > 0) {
    let categories = {};

    dataProdukDigi.forEach(product => {
      let brand = product.brand.toUpperCase();
      let type = (product.type || 'UMUM').toUpperCase();
      let category = product.category;
      let displayName;

      if (type === 'UMUM' && categoryGroup.includes(category)) {
        displayName = `${brand} ${category}`;
      } else if (type !== 'UMUM' && categoryGroup.includes(category)) {
        displayName = `${brand} ${type}`;
      } else if (type === 'UMUM') {
        displayName = brand;
      } else {
        displayName = `${brand} ${type}`;
      }

      if (!categories[category]) categories[category] = new Set();
      categories[category].add(displayName);
    });

let teksnyee = `.  ׅ  ⢀⣤⣤             
 ⢀⣾⠛⣿⠁  𝗉𝖾𝖺𝖼𝖾   𝗈𝖿    𝗁𝖾𝖺𝗏𝖾𝗇;  🌙    
 ⣾⠇  ⣿⡀    ꣑୧  ּ ִֶָ   𝖻𝖾 𝗅𝗂𝗄𝖾 𝗍𝗁𝖾 𝗆𝗈𝗈𝗇       
 ⣿⡄   ⠘⢷⣤⣀⣀⣀⣠⣦  ┈──────┈     
 ⠘⢿⣄    ⠉⠉⠉⣩⡿⠃ 𝗂𝗇𝗌𝗉𝗂𝗋𝗂𝗇𝗀  𝗉𝖾𝗈𝗉𝗅𝖾  𝖾𝗏𝖾𝗇
    ⠙⠻⠷⠶⠶⠶⠟  𝗐𝗁𝖾𝗇 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗌𝗈 𝖿𝖺𝗋 ±\n`;
    Object.keys(categories).sort().forEach(category => {
      teksnyee += `\n ㅤ ㅤ ┈─────┈  ${category}
 ㅤ ㅤ╰     ⁺ִ 🏛.    ╮`;
      Array.from(categories[category]).sort().forEach(displayName => {
        let alias = Object.keys(aliasMap).find(key => aliasMap[key] === displayName.toLowerCase());
        let textContent = alias ? alias.toLowerCase() : displayName.toLowerCase();
        teksnyee += `\n ㅤ ㅤ╎ 𑣿 ⤾ ׂ ${textContent}`;
      });
      teksnyee += `\nㅤㅤㅤㅤ• ──────── ╯\n`;
    });

    teksnyee += `\n\nㅤ    𝖼⃘𐑋±  𝟨𝟨'𝗌   𝗌𝗂𝗅𝖾𝗇𝖼𝖾   🌙.   𝗅𝗂𝗀𝗁𝗍 !
ㅤ        🏛   𝗇𝗈𝗍𝖾𝗌   ¿?   𝗅𝗂𝗍𝖾𝗋𝖺𝖼𝗒  ¡!
ㅤ   ⓘ.  𝗉𝗈𝗐𝖾𝗋𝖾𝖽 𝖻𝗒 𝗒𝗈𝗎𝗋 𝖻𝗈𝗍`;

    return lenwy.sendMessage(m.chat, { text: teksnyee }, { quoted: m });
  }

  return m.reply('Data produk sedang tidak tersedia.');
  },
};
