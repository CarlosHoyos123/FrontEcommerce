import { Component } from '@angular/core';
import { ProductSummary } from 'src/app/interface/productSummary';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {

  productImage = "../../../../assets/images/No_disponible.jpg";
  product?: ProductSummary;
  quantity: number = 0;

}
