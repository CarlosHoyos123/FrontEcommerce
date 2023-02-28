import { Component, Input } from '@angular/core';
import { HomeGridProduct } from 'src/app/interface/homeGridPriduct';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent {

  rutaImagen = "../../../../assets/images/No_disponible.jpg";

  @Input() mainList?: HomeGridProduct;
}
