import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeGridProduct } from 'src/app/interface/homeGridPriduct';
import { productServicio } from 'src/app/servicios/product.service';


@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit{

  constructor(
    private _productService: productServicio,
    private _activatedRoute: ActivatedRoute
    ) {}

  sex: string = "man";
  ImagenLogo =  "../../../../assets/images/Convertic.JPG";
  welcomeImagenPath = "";
 
  productsMainGridList: HomeGridProduct[] = [];
  
  ngOnInit(){
    this.sex = this._activatedRoute.snapshot.params['gender'];
    this.gridSexProductList(this.sex);
  }


  gridSexProductList(sex: string ){
    this._productService.sexProductList(sex). 
      subscribe((response: HomeGridProduct[]) =>{
        this.productsMainGridList = response;
        console.log(response);
      })
  }

}
