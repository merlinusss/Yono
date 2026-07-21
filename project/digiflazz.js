const fetch = require('node-fetch')
const crypto = require('crypto')
const path = require('path')
const fs = require('fs')
const moment = require('moment-timezone')
const pathDigi = './database/daftarProdukDigiflazz.json'
  
  async function cekStatusAkunDigi() {
      let sign = crypto.createHash('md5').update(global.usernamedigi + global.productkeydigi + "depo").digest('hex')
  
      let url = 'https://api.digiflazz.com/v1/cek-saldo'
  
      try {
          const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  cmd: "deposit",
                  username: global.usernamedigi,
                  sign: sign
              })
          })
  
          const data = await response.json()
          console.log(data)
          if (data) {
              return data;
          } else {
              return data;
          }
      } catch (error) {
          console.error('Terjadi kesalahan:', error.message)
          return null
      }
  }
  
  async function cekLayananDigiflazz() {
    let sign = crypto.createHash('md5').update(global.usernamedigi + global.productkeydigi + "pricelist").digest('hex');
  
    let url = 'https://api.digiflazz.com/v1/price-list';
  
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cmd: "prepaid",
                username: global.usernamedigi,
                sign: sign
            })
        });
  
        const data = await response.json();
  
        if (data && data.data) {
            return data;
        } else {
            console.log('Data kosong');
            return null;
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
        return null;
    }
  }
  
  async function simpanKeFileJSON() {
    const filePath = path.join(__dirname, pathDigi);
    const batasWaktuMs = 6 * 60 * 1000; 

    try {
        if (!fs.existsSync(filePath) || (Date.now() - fs.statSync(filePath).mtimeMs > batasWaktuMs)) {
            console.log(`[Digiflazz] Waktunya fetch data pricelist...`);
            const result = await cekLayananDigiflazz();
            
            if (result) {
                fs.writeFileSync(filePath, JSON.stringify(result, null, 2), 'utf-8');
                const time1 = moment.tz('Asia/Jakarta').format('HH:mm:ss');
                console.log(`[Digiflazz] Berhasil! File diperbarui pada ${time1}`);
            } else {
                console.log(`[Digiflazz] Fetch gagal/limit. Menunda fetch berikutnya selama 6 menit.`);
                
                if (!fs.existsSync(filePath)) {
                    fs.writeFileSync(filePath, JSON.stringify({ data: [] }), 'utf-8');
                } else {
                    const timeNow = new Date();
                    fs.utimesSync(filePath, timeNow, timeNow);
                }
            }
        }
    } catch (err) {
        console.error('Gagal mengecek atau memperbarui data:', err);
    }
  }

  setInterval(simpanKeFileJSON, 60 * 1000);
  
  async function cekLayananDigiPrabayar() {
    return JSON.parse(fs.readFileSync(path.join(__dirname, pathDigi), 'utf-8'));
  }
  
  
  async function isiSaldoDigi(amount, bank, owner_name) {
      const sign = crypto.createHash('md5').update(global.usernamedigi + global.productkeydigi + "deposit").digest('hex')
      const url = 'https://api.digiflazz.com/v1/cek-saldo'
    
      try {
          const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  username: global.usernamedigi,
                  amount: amount,
                  bank: bank,
                  owner_name,
                  sign: sign
              })
          })
    
          const data = await response.json()
          console.log(sign)
          if (data) {
              return data
          } else {
              throw new Error('Error: ' + JSON.stringify(data.data)) // Log yang lebih baik
          }
      } catch (error) {
          console.error('Terjadi kesalahan:', error.message) // Hanya log error message
          return null
      }
    }
  
  async function orderDigi(buyerSkuCode, customerNo, refId) {
    const sign = crypto.createHash('md5').update(global.usernamedigi + global.productkeydigi + refId).digest('hex');
    const url = 'https://api.digiflazz.com/v1/transaction'
  
    try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username: global.usernamedigi,
              buyer_sku_code: buyerSkuCode,
              customer_no: customerNo,
              ref_id: refId,
              sign: sign
          })
      })
  
      const data = await response.json()
      console.log(sign)
      if (data && data.data) {
          return data;
      } else {
          throw new Error('Error: ' + JSON.stringify(data.data))
      }
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message)
        return null
    }
  }
  
  async function cekItemDigi(buyerSkuCode) {
    try {
        const filePath = path.join(__dirname, pathDigi);
  
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(fileData);
  
        const produk = jsonData.data.find(p => p.buyer_sku_code.toLowerCase() === buyerSkuCode.toLowerCase());
  
        if (produk) {
            return {
                status: true,
                data: [produk]
            };
        } else {
            return {
                status: false,
                message: `Produk dengan buyer_sku_code '${buyerSkuCode}' tidak ditemukan`
            };
        }
    } catch (error) {
        console.error('Terjadi kesalahan saat membaca data:', error.message);
        return {
            status: false,
            message: error.message
        };
    }
  }
  
  async function cekOrderanDigi(refId, buyerSkuCode, customerNo) {
      const sign = crypto.createHash('md5').update(global.usernamedigi + global.productkeydigi + refId).digest('hex');
      const url = 'https://api.digiflazz.com/v1/transaction'
    
      try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: global.usernamedigi,
                buyer_sku_code: buyerSkuCode,
                customer_no: customerNo,
                ref_id: refId,
                sign: sign
            })
        })
    
        const data = await response.json()
        console.log(sign)
        if (data && data.data) {
            return data;
        } else {
            throw new Error('Error: ' + JSON.stringify(data.data))
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message)
        return null
    }
    }
  
  module.exports = { cekStatusAkunDigi, cekLayananDigiPrabayar, isiSaldoDigi, orderDigi, cekItemDigi, cekOrderanDigi };