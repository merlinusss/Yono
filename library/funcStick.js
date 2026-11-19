const fs = require('fs');

const STICKER_DB_PATH = './storage/databaseSticker.json';

function isKeyResponStick(groupID, key, _db) {
  return _db.some(item => item.id === groupID && item.key === key);
}

function getDataResponStick(groupID, key, _db) {
  return _db.find(item => item.id === groupID && item.key === key);
}

function isAlreadyResponStickGroup(groupID, _db) {
  return _db.some(item => item.id === groupID);
}

function delResponStick(groupID, key, _db) {
  const position = _db.findIndex(item => item.id === groupID && item.key === key);
  if (position !== -1) {
    _db.splice(position, 1);
    fs.writeFileSync(STICKER_DB_PATH, JSON.stringify(_db, null, 3));
    const stickerFile = `./storage/data/sticker/${key + groupID}.webp`;
    if (fs.existsSync(stickerFile)) {
      fs.unlinkSync(stickerFile);
    }
  }
}

module.exports = {
  isKeyResponStick,
  getDataResponStick,
  isAlreadyResponStickGroup,
  delResponStick,
};
