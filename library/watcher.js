const fs = require('fs');
const path = require('path');
const vm = require('vm');
const chalk = require('chalk');

const ROOT_DIR = path.resolve(__dirname, '..');
const watchers = [];
const timers = new Map();
let started = false;

function deleteCache(absPath) {
  try {
    const resolved = require.resolve(absPath);
    delete require.cache[resolved];
    return resolved;
  } catch {
    return absPath;
  }
}

function reloadFile(absPath) {
  const relPath = path.relative(ROOT_DIR, absPath).replace(/\\/g, '/');

  try {
    if (!fs.existsSync(absPath)) {
      deleteCache(absPath);
      console.log(chalk.cyan('[RELOAD]'), relPath);
      return;
    }

    const code = fs.readFileSync(absPath, 'utf8');
    new vm.Script(code, { filename: absPath });

    const resolved = deleteCache(absPath);
    if (relPath === 'len.js') {
      require(resolved);
      deleteCache(path.join(ROOT_DIR, 'lenwy.js'));
    }

    console.log(chalk.cyan('[RELOAD]'), relPath);
  } catch (err) {
    console.error(chalk.red('[RELOAD ERROR]'), relPath, err.message);
  }
}

function scheduleReload(absPath) {
  if (global.__suppressWatcher) return;

  const existing = timers.get(absPath);
  if (existing) clearTimeout(existing);

  const timer = setTimeout(() => {
    timers.delete(absPath);
    if (global.__suppressWatcher) return;
    reloadFile(absPath);
  }, 250);

  timers.set(absPath, timer);
}

function watchDirectory(dirPath, filterFn) {
  if (!fs.existsSync(dirPath)) return;
  try {
    const watcher = fs.watch(dirPath, (eventType, filename) => {
      if (!filename) return;
      const name = String(filename);
      if (!filterFn(name)) return;
      scheduleReload(path.join(dirPath, name));
    });
    watcher.on('error', (err) => {
      console.error(chalk.red('[WATCHER ERROR]'), path.relative(ROOT_DIR, dirPath) || '.', err.message);
    });
    watchers.push(watcher);
  } catch (err) {
    console.error(chalk.red('[WATCHER ERROR]'), path.relative(ROOT_DIR, dirPath) || '.', err.message);
  }
}

function startHotReload() {
  if (started) return;
  started = true;

  watchDirectory(ROOT_DIR, (name) => name === 'len.js' || name === 'lenwy.js');
}

function stopHotReload() {
  for (const timer of timers.values()) {
    clearTimeout(timer);
  }
  timers.clear();
  while (watchers.length > 0) {
    const w = watchers.pop();
    try {
      w.close();
    } catch {}
  }
  started = false;
}

module.exports = { startHotReload, stopHotReload };
