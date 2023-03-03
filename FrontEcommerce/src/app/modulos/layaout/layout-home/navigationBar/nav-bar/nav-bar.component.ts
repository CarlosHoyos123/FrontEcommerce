import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  ImagenLogo =  "../../../../assets/images/Convertic.JPG";
  aBuscar= "";
  searchRunning: boolean = false;
  searchResult: ProductEntity[] = [];
  mostSellingp: ProductEntity[] = [];

  ngOnInit(): void {
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

  loadMostSelling(){
    this._productService.mostSellingList()
      .subscribe((seleccion: ProductEntity[]) =>
        {
          this.mostSellingp = seleccion;
        })
      .add()
  }
  
  toCart(){
    this._router.navigate(['Tienda/carrito']); 
  }
}
