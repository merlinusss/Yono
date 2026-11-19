const fs = require('fs');
const { Readable } = require('stream');
const axios = require('axios');
const FormData = require('form-data');

async function uploader60Minute(filePath) {
  const form = new FormData();
  const fileStream = fs.createReadStream(filePath);
  form.append('uploader', fileStream);
  form.append('deleteAfter', 'true');

  try {
    const response = await axios.post('https://uploader.merlapi.xyz/upload', form, {
      headers: {
        ...form.getHeaders(),
        Authorization: 'Bearer CdnMerl',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Merl upload failed:', error);
  }
}

async function uploaderLebih(filePath) {
  const form = new FormData();
  const fileStream = fs.createReadStream(filePath);
  form.append('uploader', fileStream);
  form.append('deleteAfter', 'false');

  try {
    const response = await axios.post('https://uploader.merlapi.xyz/upload', form, {
      headers: {
        ...form.getHeaders(),
        Authorization: 'Bearer CdnMerl',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Merl upload failed:', error);
  }
}

async function up(pathOrBuffer) {
  const form = new FormData();
  let fileStream;

  if (Buffer.isBuffer(pathOrBuffer)) {
    const bufferStream = new Readable();
    bufferStream.push(pathOrBuffer);
    bufferStream.push(null);
    fileStream = bufferStream;
  } else {
    fileStream = fs.createReadStream(pathOrBuffer);
  }

  form.append('img', fileStream);
  form.append('content_type', '0');
  form.append('max_th_size', '420');

  try {
    const response = await axios.post('https://api.pixhost.to/images', form, {
      headers: {
        ...form.getHeaders(),
        Accept: 'application/json',
      },
    });
    return response.data.th_url;
  } catch (error) {
    console.error('Upload ke pixhost gagal:', error);
    return error.message;
  }
}

module.exports = { uploader60Minute, uploaderLebih, up };
