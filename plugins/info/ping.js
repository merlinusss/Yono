const os = require('os');
const { execSync } = require('child_process');
const { performance } = require('perf_hooks');
const speed = require('performance-now');
const { runtime, formatp } = require('../../library/myfunc');

module.exports = {
  command: 'ping',
  category: 'INFO',
  async execute({ m }) {
    const used = process.memoryUsage();
    const cpus = os.cpus().map(cpu => {
      cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
      return cpu;
    });
    const cpu = cpus.reduce((last, c, _, { length }) => {
      last.total += c.total;
      last.speed += c.speed / length;
      last.times.user += c.times.user;
      last.times.nice += c.times.nice;
      last.times.sys += c.times.sys;
      last.times.idle += c.times.idle;
      last.times.irq += c.times.irq;
      return last;
    }, { speed: 0, total: 0, times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 } });

    const timestamp = speed();
    const latensi = speed() - timestamp;
    const neww = performance.now();
    const oldd = performance.now();

    let serverLocation = 'Tidak diketahui';
    let ispName = 'Tidak diketahui';
    let timeZone = 'Tidak diketahui';
    try {
      const res = await fetch('http://ip-api.com/json/');
      const data = await res.json();
      serverLocation = `${data.city}, ${data.regionName}, ${data.country}`;
      ispName = data.isp;
      timeZone = data.timezone;
    } catch {
      serverLocation = 'Gagal mengambil data lokasi';
      ispName = 'Gagal mengambil ISP';
    }

    let diskSpace = 'Tidak diketahui';
    try {
      if (os.platform() === 'win32') {
        diskSpace = 'Gagal membaca (OS Windows)';
      } else {
        diskSpace = execSync("df -h / | awk 'NR==2 {print $3\" Terpakai dari \"$2\" (\"$5\")\"}'").toString().trim();
      }
    } catch {
      diskSpace = 'Error membaca disk';
    }

    const loadAvg = os.loadavg().map(v => v.toFixed(2)).join(' | ');
    const respon = `
⏱️ *Kecepatan Respon :* ${latensi.toFixed(4)} Detik
🚀 *Speed :* ${oldd - neww} Milidetik

🤖 *INFO BOT*
 *⨠ Runtime Bot :* ${runtime(process.uptime())}
 *⨠ Process ID :* ${process.pid}
 *⨠ Storage / Disk :* ${diskSpace}
 *⨠ Total RAM :* ${formatp(os.totalmem())}
 *⨠ RAM Terpakai Bot :* ${formatp(used.rss)}
 *⨠ RAM Sisa Sistem :* ${formatp(os.freemem())}

💻 *INFO VPS*
 *⨠ Hostname :* ${os.hostname()}
 *⨠ Node.js :* ${process.version}
 *⨠ Platform :* ${os.platform()} ${os.arch()}
 *⨠ Uptime Server :* ${runtime(os.uptime())}
 *⨠ Provider/ISP :* ${ispName}
 *⨠ Region VPS :* ${serverLocation}
 *⨠ Timezone :* ${timeZone}

📈 *INFO CPU*
 *⨠ Load Average :* ${loadAvg} (1m | 5m | 15m)
${cpus[0] ? ` *⨠ Model :* ${cpus[0].model.trim()} (${cpu.speed} MHZ)
${Object.keys(cpu.times).map(type => ` *⨠ ${(type + '*').padEnd(6)}:* ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
 *⨠ Core(s) :* ${cpus.length} Core` : ''}
`.trim();
    m.reply(respon);
  },
};
