import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './page/product-page/product-page.component';

import { BarSearchComponent } from './component/bar-search/bar-search.component';
import { ShowSesultsComponent } from './component/show-sesults/show-sesults.component';
import { FilterButtonComponent } from './component/filter-button/filter-button.component';
import { ProductComponent } from './component/product/product.component';
import { ButtonComponent } from '../component/button/button.component';

@NgModule({
  declarations: [
    ProductPageComponent,
    BarSearchComponent,
    ShowSesultsComponent,
    FilterButtonComponent,
    ProductComponent,
    ButtonComponent
  ],
  imports: [CommonModule],
  exports: [ProductPageComponent],
})
export class ProductModule {}
