module.exports = {
  command: 'delsampah',
  category: 'OWNER',
  async execute(ctx) {
    const { m, isCreator, libs } = ctx;
    const { fs, path, sleep } = libs;

if (!isCreator) return
let directoryPath = path.join("./")
fs.readdir(directoryPath, async function (err, files) {
if (err) {
  return m.reply("Tidak dapat memindai direktori: " + err)
}
let filteredArray = await files.filter(
  (item) =>
item.endsWith("gif") ||
item.endsWith("png") ||
item.endsWith("mp3") ||
item.endsWith("mp4") ||
item.endsWith("jpg") ||
item.endsWith("jpeg") ||
item.endsWith("webp") ||
item.endsWith("webm"),
)
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function (e, i) {
  teks += i + 1 + `. ${e}\n`
})
m.reply(teks)
await sleep(200)
m.reply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
  fs.unlinkSync(`./${file}`)
})
await sleep(200)
m.reply("Berhasil menghapus semua sampah")
  })
  },
};
