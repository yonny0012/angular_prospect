import { Component } from '@angular/core';

import { ProductElement } from 'src/app/core/interfaces/product.interface';
import { barcodeService } from 'src/app/core/service/barcode.service';

@Component({
  selector: 'app-bar-search',
  templateUrl: './bar-search.component.html',
  styleUrls: ['./bar-search.component.css'],
})
export class BarSearchComponent {
  products!: ProductElement[];
  value: string = '';
  isActive: boolean = false;
  isVisibleFilters: boolean = false;

  constructor(private productService: barcodeService) {}

  search(event: any | string) {
    if (event.target.value != '') {
      this.isActive = true;
    } else {
      this.isActive = false;
    }

    this.productService.getProducts(event.target.value).subscribe((product) => {
      this.products = product.products;
    });
  }
  hideHilters() {
    this.isVisibleFilters = !this.isVisibleFilters;
  }
  clean(): void {
    this.value = '';
    this.isActive = false;
  }
}
