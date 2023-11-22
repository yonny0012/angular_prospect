export const environment = {
  baseUrl: 'https://api.barcodelookup.com/v3',
  apiKey: 't9lgb3s8x8c5i3su75oxsht1lfvmyy',
  apiKey2: '6yrfp8oav75oow6k9r8avvh8zj5f59',
  proxyUrl: 'https://cors-anywhere.herokuapp.com/',
};
export let apiParameters: {
  barcode: '';
  mpn: '';
  asin: '';
  title: '';
  category: '';
  manufacturer: '';
  brand: '';
  search: '';
  metadata: '';
  cursor: '';
  page: '';
  geo: ['us', 'gb', 'ca', 'eu'];
  formatted: '';
  key: '';
};
