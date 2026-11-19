module.exports = {
  command: 'tinyurl',
  category: 'TOOLS',
  async execute(ctx) {
    const { m, text, q } = ctx;

if (!text) return m.reply(`*Mana Link Yang Akan Di Pendekkan?*`)

  let urlToShorten = q;
  let response = await fetch(`https://api.ryzendesu.vip/api/tool/tinyurl?url=${urlToShorten}`)
  
  if (!response.ok) {
      return m.reply(`*Error: ${response.status} ${response.statusText}*`)
  }
  
  let result = await response.json()
  let shortUrl = result.shortUrl;
  m.reply(shortUrl)
  },
};
