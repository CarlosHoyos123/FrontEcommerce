import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { homeRouting } from './home.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BestSellsComponent } from './best-sells/best-sells.component';


@NgModule({
  declarations: [
    NavBarComponent,
    BestSellsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(homeRouting)
  ],
  exports:[
    NavBarComponent,
  ]
})
export class HomeModule { }
