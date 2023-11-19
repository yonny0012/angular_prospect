import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product.model';
import { environment } from 'src/env/environment.development';

@Injectable({
  providedIn: 'root',
})
export class barcodeService {
  constructor(private http: HttpClient) {}

  getProducts(input: string): Observable<Product> {
    // httparams
    const params = new HttpParams()
      // .set('barcode', '9780140157376')
      .set('formatted', 'y')
      .set('manufacturer', 'Samsung')
      .set('key', environment.apiKey2);

    // Headers
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*/*');
    if (input) {
      params.append('search', `${input}`);
      return this.http.get<Product>(
        `${environment.proxyUrl}${environment.baseUrl}/products`,
        {
          params,
          headers,
        }
      );
    } else {
      return this.http.get<Product>(
        `${environment.proxyUrl}${environment.baseUrl}/products`,
        {
          params,
          headers,
        }
      );
    }
  }
}
