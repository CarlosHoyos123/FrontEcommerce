import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { GridListComponent } from './grid-list/grid-list.component';


@NgModule({
  declarations: [
    ProductGridComponent,
    GridListComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(homeRouting)
  ]
})
export class HomeModule { }
