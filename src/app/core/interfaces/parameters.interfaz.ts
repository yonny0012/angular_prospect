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
//  código de barras, fabricante, palabras clave, marca y categoría
export interface apiRequiredParameters {
  barcode: string;
  manufacturer: string;
  brand: string;
  category: string;
  
  mpn: string;
  asin: string;
  title: string;
  search: string;
  metadata: string;
  cursor: string;
  page: string;
  geo: ['us', 'gb', 'ca', 'eu'];
  formatted: 'y';
  key: string;
}

