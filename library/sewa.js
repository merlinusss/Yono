const fs = require('fs');
const toMs = require('ms');

// Tentukan path ke file JSON
const pathSewa = './storage/sewa.json'

function getNextId(_dir) {
    return _dir.length ? Math.max(..._dir.map(obj => obj.id)) + 1 : 1;
}

/*
 * Add a new sewa group entry.
 * @param {String} groupId - Group ID.
 * @param {String} groupName - Group name.
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
        groupId: groupId,
        expired: isPermanent ? null : Date.now() + toMs(duration),
        isAlifetime: isPermanent,
        reminded1d: false,
        reminded1h: false,
        reminded1m: false
    };

    _dir.push(obj);

    try {
        fs.writeFileSync(pathSewa, JSON.stringify(_dir, null, 2));
        console.log('Data successfully saved to sewa.json');
    } catch (error) {
        console.error('Failed to write to file:', error.message);
    }
}

/**
 * Get expiration time for a given sewa group.
 * @param {String} gid - Group ID.
 * @param {Array} _dir - Array of existing data.
 * @returns {Number|null} - Expiration time in milliseconds or null if not found.
 */
const getSewaExpired = (gid, _dir) => {
    const item = _dir.find(entry => entry.id === gid);
    return item ? item.expired : null;
}

/**
 * Check if a group is already in the sewa list.
 * @param {String} groupId - Group ID.
 * @param {Array} _dir - Array of existing data.
 * @returns {Boolean} - True if group is in the sewa list, otherwise false.
 */
function checkSewaGroup(groupId, _dir) {
    if (!Array.isArray(_dir)) {
        console.error('_dir should be an array.');
        return false;
    }
    return _dir.some(item => item.groupId === groupId);
}

/**
 * Get position of a sewa group by ID.
 * @param {String} gid - Group ID.
 * @param {Array} _dir - Array of existing data.
 * @returns {Number|null} - Position of the group or null if not found.
 */
const getSewaPosition = (gid, _dir) => {
    const position = _dir.findIndex(entry => entry.id === gid);
    return position !== -1 ? position : null;
}

// Fungsi untuk memeriksa dan menangani entri yang sudah kedaluwarsa
const expiredCheck = async (conn) => {
    try {
        let rawData = fs.readFileSync(pathSewa, 'utf8');
        let sewa = JSON.parse(rawData);

        for (const [index, item] of sewa.entries()) {
            if (Date.now() >= item.expired) {
                console.log(`Sewa expired: ${item.id}`);

                const getGroups = await conn.groupFetchAllParticipating();
                const groupIds = Object.values(getGroups).map(v => v.id);

                if (groupIds.includes(item.groupId)) {
                    const teks = `Waktu sewa di grup ini sudah habis, bot akan keluar otomatis\nJika ingin sewa lagi silahkan ketik .owner untuk mengetahui pemilik bot`;
                    await conn.sendMessage(item.groupId, { text: teks });
                    await conn.groupLeave(item.groupId);
                    await conn.sendMessage(`6282215393363@s.whatsapp.net`, { text: `Waktu sewa di grup ${item.groupId} ini sudah habis` });
                }

                // Menghapus entri kedaluwarsa
                sewa.splice(index, 1);
                try {
                    fs.writeFileSync(pathSewa, JSON.stringify(sewa, null, 2), 'utf8');
                } catch (error) {
                    console.error('Failed to write to file:', error.message);
                }
            }
        }
    } catch (error) {
        console.error('Terjadi kesalahan saat memeriksa entri kedaluwarsa:', error.message);
    }
}


/**
 * Get all premium user IDs from the sewa data.
 * @param {Array} _dir - Array of existing data.
 * @returns {String[]} - Array of premium user IDs.
 */
const getAllPremiumUser = (_dir) => {
    return _dir.map(item => item.id);
}



module.exports = {
    addSewaGroup,
    getSewaExpired,
    getSewaPosition,
    expiredCheck,
    checkSewaGroup,
    getAllPremiumUser,
    toMs
}

const { color } = require("./color");
const chalk = require('chalk');
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.bgGreen(color("[  UPDATE ]", "black")), chalk.white(`${__filename}`));
    delete require.cache[file];
    require(file);
});
