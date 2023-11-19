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

  getProducts(): Observable<Product> {
    // httparams
    const params = new HttpParams()
      .set('barcode', '9780140157376')
      .set('formatted', 'y')
      .set('key', environment.apiKey2);

    // Headers
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*/*');

    return this.http.get<Product>(
      `${environment.proxyUrl}${environment.baseUrl}/products`,
      {
        params,
        headers,
      }
    );
  }
}
