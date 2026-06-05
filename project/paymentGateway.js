const path = require("path");
const fs = require("fs");
const fetch = require('node-fetch');

async function generateQris(amount, packageId, expiredInMinutes) {
  try {
    const response = await fetch('https://cashify.my.id/api/generate/qris', {
      method: 'POST',
      headers: {
        'x-license-key': global.licenseKeycash,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: global.idQris,
        amount,
        useUniqueCode: true,
        packageIds: [packageId],
        expiredInMinutes
      })
    })

    return await response.json()
  } catch (err) {
    return {
      status: 500,
      message: err.message || 'Generate QRIS error'
    }
  }
}

async function checkQrisStatus(transactionId) {
  try {
    const response = await fetch('https://cashify.my.id/api/generate/check-status', {
      method: 'POST',
      headers: {
        'x-license-key': global.licenseKeycash,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ transactionId })
    })

    return await response.json()
  } catch (err) {
    return {
      status: 500,
      message: err.message || 'Check status error'
    }
  }
}

function formatSaldo(amount) {
  return 'Rp. ' + new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

module.exports = { generateQris, checkQrisStatus, formatSaldo };