import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicio } from 'src/app/servicios/auth.service';
import { ClientEntity } from 'src/app/interface/clientEntity';
import { Country } from 'src/app/interface/country';
import { IdType } from 'src/app/interface/idType';
import { PhoneType } from 'src/app/interface/phoneType';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  
  constructor(private _router: Router, private _service: AuthServicio){}

  public newUser: ClientEntity = {
    cliente: 0,     email: '',     contrasenia: '',
    primerNombre: '',   segundoNombre: '',
    primerApellido: '',    segundoApellido: '',
    tipoDocumento:0,      numeroDocumento: '',   pais:0,
    telefono: '', tipoTelefono: 0
  };
  clienteCreado?:     ClientEntity;
  passwordConfirm: String = '';
  countries?: Country[];
  idTypes?: IdType[];
  phoneTypes?: PhoneType[];


  ngOnInit(){
  }

  onregistry(){
    if(this.newUser.contrasenia == this.passwordConfirm){ 
      this._service.Registry(this.newUser)
        .subscribe((respuesta: ClientEntity) => {
          console.log(respuesta);
          this._router.navigate(['Tienda/home']);
        }).add(() => {

        });
    }else
      alert("contraseña y confirmacion deben ser iguales");
  }
}
