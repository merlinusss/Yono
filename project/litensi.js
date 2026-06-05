const fetch = require('node-fetch');
const fs = require('fs');
const moment = require('moment-timezone')
const path = require('path')

const apiid = '';
const apiKey = '';

async function cekStatusAkunMedan() {
  const url = 'https://api.medanpedia.co.id/profile';

  try {
      const response = await fetch(url, {
          method: 'POST', // Menggunakan metode POST
          headers: {
              'Content-Type': 'application/json' // Menyatakan format data yang dikirim
          },
          body: JSON.stringify({
            api_id: apiid,
            api_key: apiKey
          })
      });

      const data = await response.json(); // Mengonversi respons ke JSON

      if (data.data) {
          return data // Mengembalikan data jika berhasil
      } else {
          throw new Error('Error: ' + data.data); // Menangani error dari API
      }
  } catch (error) {
      console.error('Terjadi kesalahan:', error);
      return null; // Mengembalikan null jika terjadi kesalahan
  }
}

async function cekLayananLitensi() {
  const url = 'https://api.medanpedia.co.id/services';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        api_id: apiid,
        api_key: apiKey,
        service_fav: 0
      })
    });

    const raw = await response.text();

    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      console.error("JSON Parse Error:", e.message);
      return null;
    }

    if (data.status) {
      return data;
    } else {
      console.error("API Error:", data);
      return null;
    }

  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    return null;
  }
}

async function simpanKeFileJSON() {
  const time1 = moment.tz('Asia/Jakarta').format('HH:mm:ss');
  try {
    const result = await cekLayananLitensi();
    const filePath = path.join(__dirname, './database/daftarProdukLitensi.json');
    fs.writeFileSync(filePath, JSON.stringify(result, null, 2), 'utf-8');
  } catch (err) {
    console.error('Gagal memperbarui data:', err);
  }
}

setInterval(simpanKeFileJSON, 30 * 60 * 1000);

async function cekLayanan() {
  return JSON.parse(fs.readFileSync('./project/database/daftarProdukLitensi.json', 'utf-8'))
}

async function orderLayanan(id, target, quantity) {
  const url = 'https://api.medanpedia.co.id/order';

    try {
      const response = await fetch(url, {
        method: 'POST', // Menggunakan metode POST
        headers: {
            'Content-Type': 'application/json' // Menyatakan format data yang dikirim
        },
        body: JSON.stringify({
            api_id: apiid,
            api_key: apiKey,
            service: id,
            target: target,
            quantity: quantity
        })
      });


      const data = await response.json();

      if (data.success = true) {
          return data;
      } else {
          throw new Error('Error: ' + data.data);
      }
  } catch (error) {
      console.error('Terjadi kesalahan:', error);
      return null;
  }
}

async function cekStatusOrderanKebsos(id) {
    const url = 'https://api.medanpedia.co.id/status';
  
      try {
        const response = await fetch(url, {
          method: 'POST', // Menggunakan metode POST
          headers: {
              'Content-Type': 'application/json' // Menyatakan format data yang dikirim
          },
          body: JSON.stringify({
              api_id: apiid,
              api_key: apiKey,
              id: id
          })
        });
  
  
        const data = await response.json(); // Mengonversi respons ke JSON
  
        if (data.success = true) {
            return data // Mengembalikan data jika berhasil
        } else {
            throw new Error('Error: ' + data.data); // Menangani error dari API
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return null; // Mengembalikan null jika terjadi kesalahan
    }
  }


module.exports = { cekStatusAkunMedan, cekLayanan, orderLayanan, cekStatusOrderanKebsos }