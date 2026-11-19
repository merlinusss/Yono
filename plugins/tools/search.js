module.exports = {
  command: 'search',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, q, command, LenwyLD } = ctx;

if (!text) return m.reply(`*Begini Loh*\n\n> *${command} Gempa di jepang*`)
  LenwyLD()
  try {
     let you = await (await fetch(`https://${global.api.maelyn.domain}/api/perplexity?q=${text}`, {
       headers: {
         'x-maelyn-auth': global.api.maelyn.apikey
       }
     })).json()
     console.log(you)
     let result = you.result
     let sourcenya = `> *Source*\n`
     result.source.forEach((url, index) => {
      sourcenya += `(${index + 1}) ${url}\n`
     });
     m.reply(`${result.answer}

${sourcenya}`)
   } catch (e) {
       lenwy.sendMessage (m.chat, { react: { text: `❌`, key: m.key }})
     }
  },
};
