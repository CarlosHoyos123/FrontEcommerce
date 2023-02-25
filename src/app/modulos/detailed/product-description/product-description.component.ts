import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { productServicio } from 'src/app/servicios/product.service';
import { DetailResponse } from 'src/app/interface/detailResponse';
import { colorsAvailable } from 'src/app/interface/color';
import { Size } from 'src/app/interface/size';
import { productInfo } from 'src/app/interface/productDetailed';
import { ProductStock } from 'src/app/interface/productStock';
import { ItemToCar } from 'src/app/interface/itemToCar';
import { AuthServicio } from 'src/app/servicios/auth.service';
import { carServicio } from 'src/app/servicios/car.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {

  load: boolean = false
  productId:number = 0
  productImage = "../../../../assets/images/No_disponible.jpg";
  noItemsMesage: string = "No disponible"; 
  //-------------
  selectedColor:number = 0;
  selectedSize:number = 0;
  quantitySelected:number = 0;
  quantityLimit:number = 0;
  // ----------------
  colors: colorsAvailable[] =[];
  sizes: Size[] =[];
  stocks: ProductStock[] =[];
  //------------------
  toCarData: ItemToCar ={
    cliente: 0,
    desde: '',
    producto: 0,
    talla: 0,
    color: 0,
    cantidad: 0
  }
  description: productInfo = {
      plu: '',
      nombre: '',
      fabricante: '',
      precio: 0,
      descripcion: '',
      rutaFoto: "../../../../assets/images/No_disponible.jpg"
  }

  constructor(
    private route: ActivatedRoute,
    private _service: productServicio,
    private _Auth: AuthServicio,
    private _carService: carServicio,
    private router: Router
  ) {  }

ngOnInit(){
  this.productId = this.route.snapshot.params['id'];
  this.productDetail();
}

toggleColor(color:number){
  this.selectedColor = color;
  this.quantityShown();
}

toggleSize(size: number){
  this.selectedSize = size;
  this.quantityShown();
}

quantityShown(){
  this.quantityLimit = 0;
  this.stocks.forEach((stock) =>{
    if(stock.color == this.selectedColor && stock.talla == this.selectedSize){
      this.quantityLimit = stock.cantidad;
    }
  });
}

productDetail(){
this._service.ProductDetail(this.productId).
  subscribe((response: DetailResponse)=>{
    this.colors = response.colorsAvailable;
    this.sizes = response.sizesAvailable;
    this.description = response.productInfo;
    this.stocks = response.quantityAvailable;
    this.load = true;
  }).add()
}

itemToCart(){
  let session = this._Auth.session;
  this.toCarData.cliente = session.cliente.cliente;
  this.toCarData.color = this.selectedColor;
  this.toCarData.talla = this.selectedSize;
  this.toCarData.cantidad = this.quantitySelected
  this.toCarData.producto = this.productId;
  this._carService.addToCar(this.toCarData).
    subscribe((response: ItemToCar)=>{
      alert("hemos agregado el producto"+response.producto+" en: "+response.cantidad+".")
    }).add()
}

goToCart(){
  this.router.navigate(['Tienda/carrito']);
}

}
