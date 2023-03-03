import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { AuthServicio } from 'src/app/servicios/auth.service';
import { carServicio } from 'src/app/servicios/car.service';
import { ItemToCar } from 'src/app/interface/itemToCar';
import { CarResponse } from 'src/app/interface/carResponse';
import { SellConfirmation } from 'src/app/interface/sellConfirmation';
import { Router } from '@angular/router';
import { ClientEntity } from 'src/app/interface/clientEntity';
import { InvoiceDetail } from 'src/app/interface/invoiceDetail';
import { RespuestaApi } from 'src/app/interface/respuestaapi';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-cart-description',
  templateUrl: './cart-description.component.html',
  styleUrls: ['./cart-description.component.css']
})
export class CartDescriptionComponent implements OnInit{

  items: CarResponse[]= [];
  cliente: number=0;
  sendAdress: number=0;
  invoiceAdress: number=0;
  invoiceDefaultState:number = 1;
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
      total: 0,
      estado: 0,
      dir_envio: 0,
      dir_facturacion: 0
    },
    invoiceDetail: []
  }

  constructor(
    private _router: Router,
    private _carService: carServicio,
    private _Auth: AuthServicio,
    @Inject(LOCALE_ID) public locale: string
  ) { }

  ngOnInit(): void {
    let session = this._Auth.session;
    this.cliente = session.client.cliente;
    this.sendAdress = session.sendAdress.id;
    this.invoiceAdress = session.invoiceAdress.id;
    this._carService.checkClientCar(session.client.cliente). 
    subscribe((response: CarResponse[])=>{
      this.items = response;
    })
  }

  goToHome(){
    this._router.navigate(['Tienda/home/man']);
  }

  terminateSell(){
    let date = formatDate(new Date(), 'yyyy-MM-dd', this.locale);;
    this.confirmInformation.invoiceDetail = [];
    this.confirmInformation.invoice.cliente = this.cliente;
    this.confirmInformation.invoice.dir_envio = this.sendAdress;
    this.confirmInformation.invoice.dir_facturacion = this.invoiceAdress;
    this.confirmInformation.invoice.fecha = date;
    this.confirmInformation.invoice.estado = this.invoiceDefaultState;
    this.items.forEach(item => {
      let detailItem: InvoiceDetail ={factura: '',producto: 0, cantidad: 0,total: 0};
      detailItem.producto = item.producto.id;
      detailItem.cantidad = item.cantidad;
      this.confirmInformation.invoiceDetail.push(detailItem);
    });
    
    
    console.log(this.confirmInformation);
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
