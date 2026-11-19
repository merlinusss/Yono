const fs = require('fs')
const chalk = require('chalk')

// Identitas & Nomor
global.developer = '6285261255548'
global.developername = 'Merlinus'
global.owner = '6285167755578'
global.botNumber = '6288708519777'
global.ownername = 'Merlinus'
global.botname = 'Yono'
global.emoji = '༗'
global.packname = '༗'
global.author = ''

// Pengaturan Bot
global.sessionName = 'Session'
global.anticall = true
global.autobackup = true
global.usePairingCode = true // false = QR Code, true = Pairing Code
global.backupFiles = [
  'library', 'plugins', 'project', 'Session', 'storage', 'templates',
  'index.js', 'len.js', 'lenwy.js',
  'package-lock.json', 'package.json', 'readme.md', '.npmrc'
]

// Pembayaran & API
global.licenseKeycash = ''
global.idQris = ''
global.productkeydigi = ''
global.usernamedigi = ''
global.api = {
  merlinus: {
    domain: 'merlapi.xyz',
    apikey: 'merlapi-29eb4c46157a6002'
  },
  maelyn: {
    domain: 'api.maelyn.eu',
    apikey: 'sk_ms_2b6fea0fdb04f51f71b69a74ecdf336917a38fb830889a30'
  },
  ham: {
    domain: 'api.hamsoffc.my.id',
    apikey: '31050602'
  },
  lolhuman: {
    domain: 'api.lolhuman.xyz',
    apikey: 'edce68e031c34dcf71219133'
  }
}

global.text_sewa = ''
global.text_ppj = ''

// Pesan Sistem
global.mess = {
  success: 'Selesai.',
  admin: 'Fitur ini hanya bisa digunakan oleh admin grup.',
  botAdmin: 'Jadikan bot sebagai admin grup terlebih dahulu.',
  owner: 'Fitur ini hanya bisa digunakan oleh owner bot.',
  creator: 'Fitur ini hanya bisa digunakan oleh creator bot.',
  prem: 'Fitur ini khusus untuk pengguna premium.',
  group: 'Fitur ini hanya bisa digunakan di dalam grup.',
  wait: 'Sedang diproses, mohon tunggu sebentar.',
  error: 'Terjadi kesalahan, silakan coba lagi nanti.',
  link: 'Link yang kamu masukkan tidak valid.',
  ban: 'Kamu sedang diblokir oleh owner.',
}

// Pengaturan Role
global.settings = {
  roles: {
    role1: 'Bronze',
    role2: 'Silver',
    role3: 'Gold',
    role4: 'Owner',
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
