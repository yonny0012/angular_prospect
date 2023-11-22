import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductPageComponent } from './page/product-page/product-page.component';
import { BarSearchComponent } from './component/bar-search/bar-search.component';
import { ShowSesultsComponent } from './component/show-sesults/show-sesults.component';
import { FilterButtonComponent } from './component/filter-button/filter-button.component';
import { ProductComponent } from './component/product/product.component';
import { ButtonComponent } from '../component/button/button.component';
import { FilterBarComponent } from './component/filter-bar/filter-bar.component';
import { FilterInputComponent } from './component/filter-input/filter-input.component';

@NgModule({
  declarations: [
    ProductPageComponent,
    BarSearchComponent,
    ShowSesultsComponent,
    FilterButtonComponent,
    ProductComponent,
    ButtonComponent,
    FilterBarComponent,
    FilterInputComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [ProductPageComponent],
})
export class ProductModule {}
