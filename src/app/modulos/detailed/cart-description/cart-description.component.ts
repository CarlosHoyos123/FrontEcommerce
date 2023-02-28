import { Component, OnInit } from '@angular/core';
import { AuthServicio } from 'src/app/servicios/auth.service';
import { carServicio } from 'src/app/servicios/car.service';
import { ItemToCar } from 'src/app/interface/itemToCar';
import { CarResponse } from 'src/app/interface/carResponse';
import { SellConfirmation } from 'src/app/interface/sellConfirmation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-description',
  templateUrl: './cart-description.component.html',
  styleUrls: ['./cart-description.component.css']
})
export class CartDescriptionComponent implements OnInit{

  items: CarResponse[]= [];
  cliente: String= "";
  idCliente : number= 0;
  carItems: ItemToCar= {
      cliente:0,
      desde: '',
      producto: 0,
      talla: 0,
      color: 0,
      cantidad: 0
  };
  confirmInformation: SellConfirmation = {
    invoice: {
      fecha: '',
      cliente: 0,
      dir_envio: 0,
      dir_facturacion: 0,
      estado: 0,
      total: 0
    },
    invoiceDetail: []
  }

  constructor(
    private _router: Router,
    private _carService: carServicio,
    private _Auth: AuthServicio
  ) { }

  ngOnInit(): void {
    let session = this._Auth.session;
    this.cliente = session.client.primerNombre;
    this._carService.checkClientCar(session.client.cliente). 
    subscribe((response: CarResponse[])=>{
      this.items = response;
      console.log(this.items);
    })
  }

  goToHome(){
    this._router.navigate(['Tienda/home']);
  }

  terminateSell(){
    this._carService.sellConfirm(this.confirmInformation).
      subscribe((response:SellConfirmation)=>{

      })
  }
  
  deleteItemInCar(id: CarResponse){
    this._carService.deleteItem(id). 
    subscribe((response: CarResponse)=>{
      alert("Se ha eliminado el item"+response.producto.producto
            +" Talla: "+ response.talla.talla
            +" Color: "+ response.color.color);
    })
  }
}
