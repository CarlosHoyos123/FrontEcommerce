import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autorizacion } from 'src/app/interface/autorizacion';

import { ProductEntity } from 'src/app/interface/productEntity';
import { AuthServicio } from 'src/app/servicios/auth.service';
import { productServicio } from 'src/app/servicios/product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit{

  constructor(
    private _service: AuthServicio,
    private _productService: productServicio,
    private _router: Router) {}

  aBuscar= "";
  searchRunning: boolean = false;
  ImagenLogo =  "../../../../assets/images/Convertic.JPG";
  welcomeImagenPath = "";
  autorizacion?: Autorizacion;
  mostSellingp: ProductEntity[] = [];
  searchResult: ProductEntity[] = [];

  ngOnInit(){
    this._service.session;
    this.loadMostSelling();
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

  toCart(){
    this._router.navigate(['Tienda/carrito']); 
  }

  loadMostSelling(){
    this._productService.mostSellingList()
      .subscribe((seleccion: ProductEntity[]) =>
        {
          this.mostSellingp = seleccion;
        })
      .add()
  }
}
