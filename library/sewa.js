const fs = require('fs');
const toMs = require('ms');

const pathSewa = './storage/sewa.json';

function getNextId(_dir) {
  return _dir.length ? Math.max(..._dir.map(obj => obj.id)) + 1 : 1;
}

/*
 * Add a new sewa group entry.
 * @param {String} groupId - Group ID.
 * @param {String} duration - Duration of the sewa.
 * @param {Array} _dir - Array of existing data.
 */
function addSewaGroup(groupId, duration, _dir) {
  if (!Array.isArray(_dir)) {
    console.error('_dir should be an array.');
    return;
  }

  const sewaId = getNextId(_dir);
  const permanentKeywords = ['alifetime', 'permanent', 'permanen', 'perma'];
  const isPermanent = permanentKeywords.includes(duration.toLowerCase());

  const obj = {
    id: sewaId,
    groupId,
    expired: isPermanent ? null : Date.now() + toMs(duration),
    isAlifetime: isPermanent,
    reminded1d: false,
    reminded1h: false,
    reminded1m: false,
  };

  _dir.push(obj);

  try {
    fs.writeFileSync(pathSewa, JSON.stringify(_dir, null, 2));
  } catch (error) {
    console.error('Failed to write to file:', error.message);
  }
}

/**
 * Get expiration time for a given sewa group.
 * @param {String|Number} gid - Group ID or numeric entry ID.
 * @param {Array} _dir - Array of existing data.
 * @returns {Number|null}
 */
const getSewaExpired = (gid, _dir) => {
  const item = _dir.find(entry => entry.groupId === gid || entry.id === gid);
  return item ? item.expired : null;
};

/**
 * Check if a group is already in the sewa list.
 * @param {String} groupId - Group ID.
 * @param {Array} _dir - Array of existing data.
 * @returns {Boolean}
 */
function checkSewaGroup(groupId, _dir) {
  if (!Array.isArray(_dir)) {
    console.error('_dir should be an array.');
    return false;
  }
  return _dir.some(item => item.groupId === groupId);
}

/**
 * Get position of a sewa group by groupId or numeric ID.
 * @param {String|Number} gid - Group ID or numeric entry ID.
 * @param {Array} _dir - Array of existing data.
 * @returns {Number|null}
 */
const getSewaPosition = (gid, _dir) => {
  const position = _dir.findIndex(entry => entry.groupId === gid || entry.id === gid);
  return position !== -1 ? position : null;
};

/**
 * Get all IDs from the sewa data.
 * @param {Array} _dir - Array of existing data.
 * @returns {Array}
 */
const getAllPremiumUser = (_dir) => {
  return _dir.map(item => item.id);
};

module.exports = {
  addSewaGroup,
  getSewaExpired,
  getSewaPosition,
  checkSewaGroup,
  getAllPremiumUser,
  toMs,
};
