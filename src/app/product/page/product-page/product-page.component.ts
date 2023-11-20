import { Component } from '@angular/core';

import { barcodeService } from 'src/app/core/service/barcode.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  products!: Product;
  // search!: any;

  constructor(private productService: barcodeService) {}
  buscar(event: any) {
    /* this.productService.getProducts(event.target.value).subscribe((product) => {
      this.products = product;

      // console.log(this.products.products);
      console.log(event.target.value);
      console.log(product.products[0].images[0]);
    }); */
  }
}
