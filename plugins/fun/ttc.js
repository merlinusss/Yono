module.exports = {
  command: 'ttc',
  category: 'FUN',
  async execute(ctx) {
    const { lenwy, m, from, sender, text, command, prefix, isBan, libs } = ctx;
    const { parseMention } = libs;

if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*');
  
  let TicTacToe = require("../../library/tictactoe");
  this.game = this.game || {};
  
  if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) {
    return m.reply('⚠️ *Kamu Masih Didalam Permainan Atau Menunggu Lawan Bermain*\n\n> Ketik delttc atau nyerah untuk keluar dari permainan');
  }
  
  let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true));
  
  if (room) {
    clearTimeout(room.timeout);
    
    m.reply('*Lawan Bermain Ditemukan*');
    room.o = from;
    room.game.playerO = m.sender;
    room.state = 'PLAYING';
    
    let arr = room.game.render().map(v => {
      return {
        X: '❌',
        O: '⭕',
        1: '1️⃣',
        2: '2️⃣',
        3: '3️⃣',
        4: '4️⃣',
        5: '5️⃣',
        6: '6️⃣',
        7: '7️⃣',
        8: '8️⃣',
        9: '9️⃣',
      }[v];
    });
    
    let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nMenunggu @${room.game.currentTurn.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`;
    
    if (room.x !== room.o) await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) });
    await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) });
    
  } else {
    room = {
      id: 'tictactoe-' + (+new Date),
      x: from,
      o: '',
      game: new TicTacToe(m.sender, 'o'),
      state: 'WAITING',
      timeout: setTimeout(() => {
        if (this.game[room.id] && this.game[room.id].state === 'WAITING') {
          lenwy.sendMessage(room.x, { text: '🕒 *Waktu Habis*\n\nLawan bermain tidak ditemukan dalam 1 menit. Room TicTacToe telah dibatalkan secara otomatis.' });
          delete this.game[room.id];
        }
      }, 60000)
    };
    
    if (text) room.name = text;
    m.reply('*Menunggu Lawan Bermain*' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''));
    this.game[room.id] = room;
  }
  },
};
