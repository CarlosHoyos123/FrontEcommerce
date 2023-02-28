import { Component, makeEnvironmentProviders, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeGridProduct } from 'src/app/interface/homeGridPriduct';
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

  sex: String = "man";
  aBuscar= "";
  searchRunning: boolean = false;
  ImagenLogo =  "../../../../assets/images/Convertic.JPG";
  welcomeImagenPath = "";
  mostSellingp: ProductEntity[] = [];
  searchResult: ProductEntity[] = [];
  productsMainGridList: HomeGridProduct[] = [];
  
  ngOnInit(){
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

  gridSexProductList(){
    this._productService.sexProductList(this.sex). 
      subscribe((response: HomeGridProduct[]) =>{
        this.productsMainGridList = response;
      })
  }
}