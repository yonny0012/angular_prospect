import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './page/product-page/product-page.component';

@NgModule({
  declarations: [ProductPageComponent],
  imports: [CommonModule],
  exports: [ProductPageComponent],
})
export class ProductModule {}
