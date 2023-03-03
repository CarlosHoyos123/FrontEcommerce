import { Component, makeEnvironmentProviders, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<<< HEAD:src/app/modulos/home/nav-bar/nav-bar.component.ts
import { HomeGridProduct } from 'src/app/interface/homeGridPriduct';
========
>>>>>>>> 2249c2deec4142e1bc61a7a71b6e2c5d15376162:src/app/modulos/layaout/layout-home/navigationBar/nav-bar/nav-bar.component.ts
import { ProductEntity } from 'src/app/interface/productEntity';
import { AuthServicio } from 'src/app/servicios/auth.service';
import { productServicio } from 'src/app/servicios/product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit{

  constructor(
    private _service: AuthServicio,
    private _productService: productServicio,
    private _router: Router) {}

<<<<<<<< HEAD:src/app/modulos/home/nav-bar/nav-bar.component.ts
  sex: String = "man";
  aBuscar= "";
  searchRunning: boolean = false;
  ImagenLogo =  "../../../../assets/images/Convertic.JPG";
  welcomeImagenPath = "";
  mostSellingp: ProductEntity[] = [];
  searchResult: ProductEntity[] = [];
  productsMainGridList: HomeGridProduct[] = [];
  
  ngOnInit(){
========
  ImagenLogo =  "../../../../assets/images/Convertic.JPG";
  aBuscar= "";
  searchRunning: boolean = false;
  searchResult: ProductEntity[] = [];
  mostSellingp: ProductEntity[] = [];

  ngOnInit(): void {
>>>>>>>> 2249c2deec4142e1bc61a7a71b6e2c5d15376162:src/app/modulos/layaout/layout-home/navigationBar/nav-bar/nav-bar.component.ts
    this._service.session;
    this.loadMostSelling();
    this.gridSexProductList();
  }

  oneKeyup(){
    if (this.aBuscar != '') {
      this.searchRunning = true;
      this._productService.searchresults(this.aBuscar).
        subscribe((results: ProductEntity[])=>{
          this.searchResult = results;
        }).add()
      }else{
        this.searchRunning = false;
      }
  }

  loadMostSelling(){
    this._productService.mostSellingList()
      .subscribe((seleccion: ProductEntity[]) =>
        {
          this.mostSellingp = seleccion;
        })
      .add()
  }
<<<<<<<< HEAD:src/app/modulos/home/nav-bar/nav-bar.component.ts

  gridSexProductList(){
    this._productService.sexProductList(this.sex). 
      subscribe((response: HomeGridProduct[]) =>{
        this.productsMainGridList = response;
      })
  }
}
========
  
  toCart(){
    this._router.navigate(['Tienda/carrito']); 
  }
}
>>>>>>>> 2249c2deec4142e1bc61a7a71b6e2c5d15376162:src/app/modulos/layaout/layout-home/navigationBar/nav-bar/nav-bar.component.ts
