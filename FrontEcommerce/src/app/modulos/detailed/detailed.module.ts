import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { RouterModule } from '@angular/router';
import { detailedRouting } from './detailed.routing';
import { CartDescriptionComponent } from './cart-description/cart-description.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ProductDescriptionComponent,
    CartDescriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(detailedRouting),
    FormsModule
  ]
})
export class DetailedModule { }
