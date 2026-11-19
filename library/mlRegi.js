const fetchFn = typeof global.fetch === 'function' ? global.fetch.bind(global) : require('node-fetch');

async function fetchMoogoldData(url, params) {
  const response = await fetchFn(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: params,
  });

  return await response.json();
}

async function cekMl(userId, zoneId) {
  const url = 'https://moogold.com/wp-content/plugins/id-validation-new/id-validation-ajax.php';
  const params = new URLSearchParams();
  params.append('attribute_diamonds', 'Weekly Pass');
  params.append('text-5f6f144f8ffee', userId);
  params.append('text-1601115253775', zoneId);
  params.append('quatity', 1);
  params.append('add-to-chart', 5846232);
  params.append('product_id', 5846232);
  params.append('variation_id', 5846345);

  return await fetchMoogoldData(url, params);
}

const regionDisplay = new Intl.DisplayNames(['id'], { type: 'region' });

function cekRegionMl(value) {
  if (!value || typeof value !== 'string') return '';
  try {
    return regionDisplay.of(value.trim().toUpperCase()) || '';
  } catch {
    return '';
  }
}

module.exports = { cekMl, cekRegionMl };
