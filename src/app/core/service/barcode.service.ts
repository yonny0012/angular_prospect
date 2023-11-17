import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class barcodeService {
  constructor(private http: HttpClient) {
    // this.resultados = JSON.parse(localStorage.getItem('lastSearch')!) || [];
  }

  // tocken de la api de barcode!
  private apiKey: string = 't9lgb3s8x8c5i3su75oxsht1lfvmyy';
  base: string = 'https://api.barcodelookup.com/v3';

  public resultados: Product[] = [];

  getProducts(): void {
    // httparams
    const params = new HttpParams()
      .set('barcode', '9780140157376')
      .set('formatted', 'y')
      .set('key', this.apiKey);

    // Headers
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    this.http
      .get<Product>(`${this.base}/products`, { params , headers }  )
      .subscribe((resp) => {
        console.log(resp);

        // this.resultados = resp;
      });
  }
}
