module.exports = {
  command: 'ai',
  category: 'TOOLS',
  async execute(ctx) {
    const { m, body, text, quoted, mime, LenwyLD, libs } = ctx;
    const { uploader60Minute } = libs;

if (!text) return m.reply(`*Mau Nanya Apa Ama AI?*`) 
 LenwyLD()
 if (/image/.test(mime)) {
  try {
    if (quoted && /image/.test(mime)) {
        try {
          let media = await merlynn.downloadAndSaveMediaMessage(quoted)
          let anu = await uploader60Minute(media)
          let data = await (await fetch(`https://${global.api.maelyn.domain}/api/ai/gemini`,
                    {
                      method: "POST",
                      headers: {
                        "x-maelyn-auth": global.api.maelyn.apikey,
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        "prompt": text,
                        "model": "gemini-3-flash-preview",
                        "mode": "chat",
                        "images": [
                          anu
                        ]
                      })
                    }
                  )).json();
          console.log(data)
          m.reply(data.result.text)
        } catch (e) {
          console.log(e)
          return m.reply("*maaf, sedang terjadi error saat ini*")
        }
      } else {
        let gpt = await (await fetch(`https://${global.api.maelyn.domain}/api/ai/gemini`,
                    {
                      method: "POST",
                      headers: {
                        "x-maelyn-auth": global.api.maelyn.apikey,
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        "prompt": text,
                        "mode": "chat",
                        "model": "gemini-3-flash-preview"
                      })
                    }
                  )).json();
        console.log(gpt)
        m.reply(gpt.result.text)
      }
   } catch (e) {
    console.log(e)
    return m.reply("*Error Kak :(*")
   }
 }
  },
};
