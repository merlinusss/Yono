const TicTacToe = require('../../library/tictactoe');

module.exports = {
  command: 'ttc',
  aliases: ['tictactoe', 'delttc'],
  category: 'FUN',
  async execute(ctx) {
    const { lenwy, m, from, text, command, prefix, isBan, libs } = ctx;
    const { parseMention } = libs;

    if (isBan) return m.reply(global.mess.ban);

    const games = (global.db.data.game.tictactoe ??= {});
    const existingRoom = Object.values(games).find(
      room =>
        room.id &&
        room.id.startsWith('tictactoe') &&
        [room.game.playerX, room.game.playerO].includes(m.sender)
    );

    if (command === 'delttc') {
      if (!existingRoom) return m.reply('Kamu tidak sedang berada di dalam room TicTacToe.');
      if (existingRoom.timeout) clearTimeout(existingRoom.timeout);
      delete games[existingRoom.id];
      return m.reply('Room TicTacToe berhasil dihapus.');
    }

    if (existingRoom) {
      return m.reply(
        `Kamu masih berada di dalam permainan atau sedang menunggu lawan.\nKetik *${prefix}delttc* atau *nyerah* untuk keluar dari permainan.`
      );
    }

    let room = Object.values(games).find(
      r => r.state === 'WAITING' && (text ? r.name === text : true)
    );

    if (room) {
      clearTimeout(room.timeout);

      m.reply('Lawan bermain ditemukan!');
      room.o = from;
      room.game.playerO = m.sender;
      room.state = 'PLAYING';

      const arr = room.game.render().map(
        v =>
          ({
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
          })[v]
      );

      const str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nGiliran @${room.game.currentTurn.split('@')[0]}\n\nKetik *nyerah* untuk menyerah`;

      if (room.x !== room.o) await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) });
      await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) });
    } else {
      room = {
        id: 'tictactoe-' + +new Date(),
        x: from,
        o: '',
        game: new TicTacToe(m.sender, 'o'),
        state: 'WAITING',
        timeout: setTimeout(() => {
          if (games[room.id] && games[room.id].state === 'WAITING') {
            lenwy.sendMessage(room.x, {
              text: 'Waktu tunggu habis (1 menit). Room TicTacToe dibatalkan karena lawan tidak ditemukan.',
            });
            delete games[room.id];
          }
        }, 60000),
      };

      if (text) room.name = text;
      m.reply(
        'Menunggu lawan bermain' +
          (text ? `. Lawan bisa bergabung dengan mengetik *${prefix}${command} ${text}*` : `. Lawan bisa bergabung dengan mengetik *${prefix}${command}*`)
      );
      games[room.id] = room;
    }
  },
};
