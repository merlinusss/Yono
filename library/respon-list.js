const fs = require('fs');

const LIST_PATH = './storage/list-message.json';
const PAYMENT_PATH = './storage/databasePayment.json';

function addResponList(groupID, key, response, isImage, image_url, _db) {
  _db.push({
    id: groupID,
    key,
    response,
    isImage,
    image_url,
  });
  fs.writeFileSync(LIST_PATH, JSON.stringify(_db, null, 3));
}

function getDataResponList(groupID, key, _db) {
  return _db.find(item => item.id === groupID && item.key === key);
}

function isAlreadyResponList(groupID, key, _db) {
  return _db.some(item => item.id === groupID && item.key === key);
}

function sendResponList(groupId, key, _dir) {
  const item = _dir.find(entry => entry.id === groupId && entry.key === key);
  return item ? item.response : undefined;
}

function isAlreadyResponListGroup(groupID, _db) {
  return _db.some(item => item.id === groupID);
}

function delResponList(groupID, key, _db) {
  const position = _db.findIndex(item => item.id === groupID && item.key === key);
  if (position !== -1) {
    _db.splice(position, 1);
    fs.writeFileSync(LIST_PATH, JSON.stringify(_db, null, 3));
  }
}

function updateResponList(groupID, key, response, isImage, image_url, _db) {
  const item = _db.find(entry => entry.id === groupID && entry.key === key);
  if (item) {
    item.response = response;
    item.isImage = isImage;
    item.image_url = image_url;
    fs.writeFileSync(LIST_PATH, JSON.stringify(_db, null, 3));
  }
}

function updateKey(groupID, oldKey, newKey, _db) {
  const item = _db.find(x => x.id === groupID && x.key === oldKey);
  if (item) {
    item.key = newKey;
    fs.writeFileSync(LIST_PATH, JSON.stringify(_db, null, 3));
    return true;
  }
  return false;
}

function updateId(groupID, newId, _db) {
  let updated = false;
  for (const item of _db) {
    if (item.id === groupID) {
      item.id = newId;
      updated = true;
    }
  }
  if (updated) {
    fs.writeFileSync(LIST_PATH, JSON.stringify(_db, null, 3));
  }
  return updated;
}

function resetList(groupID, _db) {
  let updated = false;
  for (let i = _db.length - 1; i >= 0; i--) {
    if (_db[i].id === groupID) {
      _db.splice(i, 1);
      updated = true;
    }
  }
  if (updated) {
    fs.writeFileSync(LIST_PATH, JSON.stringify(_db, null, 3));
  }
  return updated;
}

function deleteListSampah(_db, groupIDs) {
  const before = _db.length;
  const newDb = _db.filter(item => groupIDs.includes(item.id));
  if (newDb.length !== before) {
    _db.splice(0, _db.length, ...newDb);
    fs.writeFileSync(LIST_PATH, JSON.stringify(_db, null, 3));
  }
  return before - newDb.length;
}

function readDatabasePayment() {
  if (!fs.existsSync(PAYMENT_PATH)) {
    fs.writeFileSync(PAYMENT_PATH, JSON.stringify([]), 'utf-8');
  }
  const data = fs.readFileSync(PAYMENT_PATH, 'utf-8');
  return JSON.parse(data);
}

function writeDatabasePayment(_db) {
  fs.writeFileSync(PAYMENT_PATH, JSON.stringify(_db, null, 3), 'utf-8');
}

async function getGroupIdFromLink(link, lenwy) {
  const coded = typeof link === 'string' ? link.split('https://chat.whatsapp.com/')[1] : '';
  if (!coded) throw new Error('Link grup tidak valid.');

  const response = await lenwy.query({
    tag: 'iq',
    attrs: {
      type: 'get',
      xmlns: 'w:g2',
      to: '@g.us',
    },
    content: [{ tag: 'invite', attrs: { code: coded.trim() } }],
  });

  return response.content[0].attrs.id + '@g.us';
}

module.exports = {
  addResponList,
  delResponList,
  isAlreadyResponList,
  isAlreadyResponListGroup,
  sendResponList,
  updateResponList,
  getDataResponList,
  updateKey,
  readDatabasePayment,
  writeDatabasePayment,
  updateId,
  getGroupIdFromLink,
  resetList,
  deleteListSampah,
};
