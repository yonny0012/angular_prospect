import { Component } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';
import { barcodeService } from 'src/app/core/service/barcode.service';

@Component({
  selector: 'app-bar-search',
  templateUrl: './bar-search.component.html',
  styleUrls: ['./bar-search.component.css'],
})
export class BarSearchComponent {
  products!: Product;

  isActive: boolean = false;
  // search!: any;

  constructor(/* private productService: barcodeServiceService */) {}
  buscar(event: any) {
    if (event.target.value != '') {
      this.isActive = true;
    } else {
      this.isActive = false;
    }

    /* this.productService.getProducts(event.target.value).subscribe((product) => {
      this.products = product;

      // console.log(this.products.products);
      console.log(event.target.value);
      console.log(product.products[0].images[0]);
    }); */
  }
  clean(): void {}
}
