import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { barcodeService } from 'src/app/core/service/barcode.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  products: Product[] = [];
  constructor(private productService: barcodeService){}
  buscar(){
    this.productService.getProducts(); 
  }
}
