export interface apiParams {
  barcode: string;
  mpn: string;
  asin: string;
  title: string;
  category: string;
  manufacturer: string;
  brand: string;
  search: string;
  metadata: string;
  cursor: string;
  page: string;
  geo: ['us', 'gb', 'ca', 'eu'];
  formatted: 'y';
  key: string;
}
