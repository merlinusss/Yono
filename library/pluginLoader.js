const fs = require('fs');
const path = require('path');

const PLUGINS_DIR = path.join(__dirname, '..', 'plugins');
const commandMap = new Map();
const categoryMap = new Map();
let loaded = false;

function scanDir(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...scanDir(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.js') && !entry.name.startsWith('_')) {
      files.push(fullPath);
    }
  }
  return files;
}

function loadPlugins(forceReload = false) {
  if (loaded && !forceReload) return commandMap;
  commandMap.clear();
  categoryMap.clear();

  const files = scanDir(PLUGINS_DIR);
  for (const filePath of files) {
    try {
      if (forceReload) {
        delete require.cache[require.resolve(filePath)];
      }
      const plugin = require(filePath);
      if (!plugin || typeof plugin.execute !== 'function') continue;

      const relDir = path.relative(PLUGINS_DIR, path.dirname(filePath));
      const category = String(plugin.category || relDir || 'OTHER').toUpperCase();

      const primaryNames = [];
      if (typeof plugin.command === 'string') primaryNames.push(plugin.command);
      else if (Array.isArray(plugin.command)) primaryNames.push(...plugin.command);

      const allNames = [...primaryNames];
      if (Array.isArray(plugin.aliases)) allNames.push(...plugin.aliases);

      for (const name of allNames) {
        const key = String(name).toLowerCase().trim();
        if (key) commandMap.set(key, plugin);
      }

      if (!plugin.hidden && primaryNames.length > 0) {
        if (!categoryMap.has(category)) categoryMap.set(category, new Set());
        const set = categoryMap.get(category);
        for (const name of primaryNames) {
          const key = String(name).toLowerCase().trim();
          if (key) set.add(key);
        }
      }
    } catch (err) {
      console.error(`[pluginLoader] Gagal load ${path.relative(PLUGINS_DIR, filePath)}:`, err.message);
    }
  }

  loaded = true;
  return commandMap;
}

function getPlugin(command) {
  if (!loaded) loadPlugins();
  if (!command) return null;
  return commandMap.get(String(command).toLowerCase()) || null;
}

function getPluginsByCategory() {
  if (!loaded) loadPlugins();
  const result = {};
  for (const [cat, set] of categoryMap.entries()) {
    result[cat] = [...set];
  }
  return result;
}

function getPluginCount() {
  if (!loaded) loadPlugins();
  let total = 0;
  for (const set of categoryMap.values()) total += set.size;
  return total;
}

function reloadPlugins() {
  return loadPlugins(true);
}

module.exports = {
  PLUGINS_DIR,
  loadPlugins,
  getPlugin,
  getPluginsByCategory,
  getPluginCount,
  reloadPlugins,
};
