const fs = require('fs');

function isKeyResponStick(groupID, key, _db) {
  let found = false
  Object.keys(_db).forEach((x) => {
      if (_db[x].id === groupID && _db[x].key === key) {
          found = true
      }
  })
  return found
}

function getDataResponStick(groupID, key, _db) {
  let position = null
  Object.keys(_db).forEach((x) => {
      if (_db[x].id === groupID && _db[x].key === key) {
          position = x
      }
  })
  if (position !== null) {
      return _db[position]
  }
}

function isAlreadyResponStickGroup(groupID, _db) {
let found = false
Object.keys(_db).forEach((x) => {
if (_db[x].id === groupID) {
found = true
}
})
return found
}

function delResponStick(groupID, key, _db) {
  let position = null
  Object.keys(_db).forEach((x) => {
      if (_db[x].id === groupID && _db[x].key === key) {
          position = x
      }
  })

  if (position !== null) {
      _db.splice(position, 1)
      fs.writeFileSync('./storage/databaseSticker.json', JSON.stringify(_db, null, 3))
      fs.unlinkSync(`./storage/data/sticker/${key + groupID}.webp`)
  }
}

module.exports = {
  isKeyResponStick,
  getDataResponStick,
  isAlreadyResponStickGroup,
  delResponStick
}
