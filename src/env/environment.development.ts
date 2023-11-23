export const environment = {
  baseUrl: 'https://api.barcodelookup.com/v3',
  apiKey: 'gvmc1lrsj7gnv6pg305oq31cdqu63q',
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
