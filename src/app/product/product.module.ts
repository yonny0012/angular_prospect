import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './page/product-page/product-page.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductPageComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ProductPageComponent, MatIconModule],
})
export class ProductModule {}
