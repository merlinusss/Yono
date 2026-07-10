const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

global.linkGroup = ''
global.idChannel = '' // Boleh diisi nanti akan di gunakan di fitur welcome dan left
global.namaChannel = '' // Boleh diisi nanti akan di gunakan di fitur welcome dan left
global.linkChannel = ''// Boleh diisi nanti akan di gunakan di fitur welcome dan left


global.owner = ['6285167755578']
global.developer = ['6285261255548']
global.ownername = 'Merlinus'
global.developername = 'Merlinus'
global.botname = "Yono"
global.emoji = '༗'
global.packname = "༗"
global.author = ``


global.sessionName = 'Session'
global.anticall = true
global.autobackup = true
global.usePairingCode = false // isi false = QR Code & isi true = Code Pairing


global.licenseKeycash = ''
global.idQris = ''
global.productkeydigi = ''
global.usernamedigi = ''
global.api = {
  maelyn: {
    domain: "api.maelyn.eu",
    apikey: "sk_ms_2b6fea0fdb04f51f71b69a74ecdf336917a38fb830889a30"
  },
  web1: {
    domain: "merlapi.xyz",
    apikey: "merlapi-29eb4c46157a6002"
  },
  lolhuman: {
    domain: "api.lolhuman.xyz",
    apikey: "edce68e031c34dcf71219133"
  }
}


global.text_sewa = ''
global.text_ppj = ''


global.mess = {
    tagOwner: `Si ${global.ownername} gi bobo dia`,
    success: '*Selesai*',
    admin: '⚠️ *Fitur Khusus Admin Group!*',
    botAdmin: '⚠️ *Fitur Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group!*',
    owner: '⚠️ *Fitur Khusus Owner!*',
    creator: '⚠️ *Fitur Khusus Creator!*',
    prem: '⚠️ *Fitur Khusus Premium!*',
    group: '⚠️ *Fitur Ini Hanya Bisa Digunakan Di Group Chat!*',
    wait: '📦 *Dalam Proses*',
    error: '⚠️ *Kayaknya Ada Error, Coba Lagi Di Lain Waktu*',
    link: '⚠️ *Itu Bukan Link Yang Benar*',
}

global.settings = {
  roles: {
    role1: "Bronze",
    role2: "Silver",
    role3: "Gold",
    role4: "Owner",
    pricesrole2: 50000,
    pricesrole3: 100000,
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green(`📑  Update : ${__filename}`))
delete require.cache[file]
require(file)
})