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
  contributors: any[];
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
  last_update: string;
  stores: Store[];
  reviews: any[];
}

export enum Size {
  Empty = '',
  Small = 'Small',
  The1300W1150H000L = '13.00 W 11.50 H 0.00 L',
}

export interface Store {
  name: string;
  country: Country;
  currency: Currency;
  currency_symbol: CurrencySymbol;
  price: string;
  sale_price: string;
  tax: any[];
  link: string;
  item_group_id: string;
  availability: string;
  condition: Condition;
  shipping: any[];
  last_update: string;
}

export enum Condition {
  Empty = '',
  New = 'new',
}

export enum Country {
  CA = 'CA',
  Us = 'US',
}

export enum Currency {
  CAD = 'CAD',
  Usd = 'USD',
}

export enum CurrencySymbol {
  Empty = '$',
}
