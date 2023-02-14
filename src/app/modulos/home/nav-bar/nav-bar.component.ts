import { Component } from '@angular/core';
import { ProductEntity } from 'src/app/interface/productEntity';
import { ProductService } from 'src/app/servicios/product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private ProdService: ProductService
  ) {}

  aBuscar= "";
  respuestaBusqueda: ProductEntity[] = [];

  oneKeyup(){
    if(this.aBuscar != ''){
      this.ProdService.SearchBarRequest(this.aBuscar)
      .subscribe(respuesta => {
        console.log(respuesta);
      },
      (error) => {
        console.log(error);
      });
    }else{
    this.respuestaBusqueda = [];
    }
  }
}
