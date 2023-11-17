export interface Product {
  products: ProductElement[];
}

export interface ProductElement {
  barcode_number: string;
  barcode_formats: string;
  mpn: string;
  model: string;
  asin: string;
  title: string;
  category: string;
  manufacturer: string;
  brand: string;
  contributors: Contributor[];
  age_group: string;
  ingredients: string;
  nutrition_facts: string;
  energy_efficiency_class: string;
  color: string;
  gender: string;
  material: string;
  pattern: string;
  format: string;
  multipack: string;
  size: string;
  length: string;
  width: string;
  height: string;
  weight: string;
  release_date: string;
  description: string;
  features: any[];
  images: string[];
  last_update: Date;
  stores: Store[];
  reviews: any[];
}

export interface Contributor {
  role: string;
  name: string;
}

export interface Store {
  name: string;
  country: string;
  currency: string;
  currency_symbol: CurrencySymbol;
  price: string;
  sale_price: SalePrice;
  tax: any[];
  link: string;
  item_group_id: string;
  availability: Availability;
  condition: Condition;
  shipping: any[];
  last_update: Date;
}

export enum Availability {
  Empty = '',
  InStock = 'in stock',
}

export enum Condition {
  Empty = '',
  New = 'new',
  Used = 'used',
}

export enum CurrencySymbol {
  CurrencySymbol = '£',
  Empty = '$',
  L = 'L',
  Purple = '€',
}

export enum SalePrice {
  Empty = '',
  The1600 = '16.00',
  The8699 = '86.99',
}
