const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
const cheerio = require('cheerio');
const crypto = require('crypto');
const fetch = require('node-fetch');

// Fungsi uploader60Minute
async function uploader60Minute(path) {
  let form = new FormData();
  let fileStream = fs.createReadStream(path);
  let deleteAfter = true
  form.append("uploader", fileStream);
  form.append("deleteAfter", deleteAfter.toString()); // Menambahkan parameter deleteAfter

  try {
    const response = await axios.post("https://uploader.merllerm.tech/upload", form, {
      headers: {
        ...form.getHeaders(),
        'Authorization': 'Bearer CdnMerl',  // Menambahkan API Key di header Authorization
      },
    });

    return response.data;
  } catch (error) {
    console.error('Merl upload failed:' + error);
  }
}

// Fungsi uploaderLebih
async function uploaderLebih(path) {
  let form = new FormData();
  let fileStream = fs.createReadStream(path);
  let deleteAfter = false
  form.append("uploader", fileStream);
  form.append("deleteAfter", deleteAfter.toString()); // Menambahkan parameter deleteAfter

  try {
    const response = await axios.post("https://uploader.merllerm.tech/upload", form, {
      headers: {
        ...form.getHeaders(),
        'Authorization': 'Bearer CdnMerl',  // Menambahkan API Key di header Authorization
      },
    });

    return response.data;
  } catch (error) {
    console.error('Merl upload failed:' + error);
  }
}


// Fungsi up (penggabungan)
async function up(pathOrBuffer) {
  const form = new FormData();

  let fileStream;
  
  // Jika pathOrBuffer adalah buffer (bukan string)
  if (Buffer.isBuffer(pathOrBuffer)) {
    // Untuk meng-upload buffer langsung, kita bisa menggunakan Readable Stream
    const bufferStream = new require('stream').Readable();
    bufferStream.push(pathOrBuffer);  // Menggunakan buffer
    bufferStream.push(null);  // Akhiri stream
    fileStream = bufferStream;
  } else {
    // Jika pathOrBuffer adalah string, kita gunakan fs.createReadStream
    fileStream = fs.createReadStream(pathOrBuffer);
  }

  form.append("img", fileStream);
  form.append("content_type", "0");  // 0 for FS (File Share) / 1 for NSFW
  form.append("max_th_size", "420");  // Ukuran thumbnail maksimal

  try {
    const response = await axios.post("https://api.pixhost.to/images", form, {
      headers: {
        ...form.getHeaders(),
        "Accept": "application/json",
      }
    });
    return response.data.th_url;  // Mengembalikan data dari respons
  } catch (error) {
    console.error('Upload ke pixhost gagal:', error);
    return error.message;
  }
}

// Export semua fungsi
module.exports = { uploader60Minute, uploaderLebih, up };

// File watcher untuk auto-reload jika file berubah
const chalk = require('chalk');
const { color } = require("./color");
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.bgGreen(color("[ UPDATE ]", "black")), chalk.white(`${__filename}`));
  delete require.cache[file];
  require(file);
});
