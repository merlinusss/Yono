module.exports = {
  command: 'getcase',
  category: 'OWNER',
  async execute(ctx) {
    const { m, text, command, prefix, isCreator, mess, owner, libs } = ctx;
    const { fs, path } = libs;

if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply(`Contoh: "${prefix}getcase menu"`)

  try {
    const target = text.trim().toLowerCase()
    const pluginsDir = path.join(__dirname, '..')
    let foundContent = null

    for (const cat of fs.readdirSync(pluginsDir)) {
      const catDir = path.join(pluginsDir, cat)
      if (!fs.statSync(catDir).isDirectory()) continue
      for (const fn of fs.readdirSync(catDir)) {
        if (!fn.endsWith('.js')) continue
        const filePath = path.join(catDir, fn)
        const src = fs.readFileSync(filePath, 'utf-8')
        const caseSplit = src.split(new RegExp(`case\\s+['"]${target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]\\s*:`))
        if (caseSplit.length >= 2) {
          const caseContent = caseSplit[1].split('br' + 'eak')[0]
          foundContent = `// Sumber: plugins/${cat}/${fn}\ncase '${target}':${caseContent}break`
          break
        }
        const mod = require(filePath)
        const names = [].concat(mod.command || [], mod.aliases || []).map(x => String(x).toLowerCase())
        if (names.includes(target)) {
          foundContent = `// Sumber: plugins/${cat}/${fn}\n${src}`
          break
        }
      }
      if (foundContent) break
    }

    if (!foundContent) throw new Error(`Fitur '${text}' tidak ditemukan di plugins/.`)
    m.reply(foundContent)
  } catch (error) {
    m.reply(`${error.message}`)
  }
  },
};
