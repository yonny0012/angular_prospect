import { Component } from '@angular/core';

import { Product } from 'src/app/core/interfaces/product.interface';
// import { barcodeService } from 'src/app/core/service/barcode.service';

@Component({
  selector: 'app-bar-search',
  templateUrl: './bar-search.component.html',
  styleUrls: ['./bar-search.component.css'],
})
export class BarSearchComponent {
  products!: Product;
  value: string = 'qwe';
  isActive: boolean = false;
  isVisibleFilters: boolean = false;

  constructor(/* private productService: barcodeServiceService */) {}
  
  search(event: any | string) {
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
  hideHilters() {
    this.isVisibleFilters = !this.isVisibleFilters;
  }
  clean(): void {
    this.value = '';
  }
}
