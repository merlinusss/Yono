module.exports = {
  command: 'cekcase',
  category: 'OWNER',
  async execute(ctx) {
    const { m, text, command, prefix, isCreator, libs } = ctx;
    const { fs, path } = libs;

if (!isCreator) return
  if (!text) return m.reply(`Contoh: ${prefix + command} ping`)
  const target = text.trim().toLowerCase()
  const pluginsDir = path.join(__dirname, '..')
  let found = null

  for (const cat of fs.readdirSync(pluginsDir)) {
    const catDir = path.join(pluginsDir, cat)
    if (!fs.statSync(catDir).isDirectory()) continue
    for (const fn of fs.readdirSync(catDir)) {
      if (!fn.endsWith('.js')) continue
      const filePath = path.join(catDir, fn)
      const src = fs.readFileSync(filePath, 'utf-8')
      const idx = src.search(new RegExp(`case\\s+['"]${target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]\\s*:`))
      if (idx !== -1) {
        const startLine = src.slice(0, idx).split('\n').length
        const after = src.slice(idx)
        const brIdx = after.indexOf('break')
        const endLine = brIdx !== -1 ? startLine + after.slice(0, brIdx).split('\n').length - 1 : startLine
        found = { file: `plugins/${cat}/${fn}`, startLine, endLine }
        break
      }
      const mod = require(filePath)
      const names = [].concat(mod.command || [], mod.aliases || []).map(x => String(x).toLowerCase())
      if (names.includes(target)) {
        found = { file: `plugins/${cat}/${fn}`, startLine: 1, endLine: src.split('\n').length }
        break
      }
    }
    if (found) break
  }

  if (found) {
    return m.reply(`*FITUR DITEMUKAN!*\n• Nama: ${target}\n• File: \`${found.file}\`\n• Baris: ${found.startLine} - ${found.endLine}\n\nMau ambil kodenya? Ketik *${prefix}getcase ${target}*`)
  }
  return m.reply(`Fitur '${target}' tidak ditemukan di plugins/.`)
  },
};
