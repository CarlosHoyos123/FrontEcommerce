import { Component, OnInit } from '@angular/core';
import { ClientEntity } from 'src/app/interface/clientEntity';
import { Country } from 'src/app/interface/country';
import { FormConfig } from 'src/app/interface/formsConfig';
import { IdType } from 'src/app/interface/idType';
import { PhoneType } from 'src/app/interface/phoneType';
import { AuthServicio } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  selectCountryInfo: Country[] = [];
  selectPhoneInfo: PhoneType[] = [];
  selectDocumentInfo: IdType[] = [];
  passwordConfirm:  String= '';

  newUser: ClientEntity = {
    cliente:  0,
    email:  "",
    contrasenia:  "",
    primerNombre: "",
    segundoNombre:  "",
    primerApellido:  "",
    segundoApellido: "",
    tipoTelefono: {id: 0, tipoTelefono: ""},
    telefono: "",
    pais: {id: 0, nombrePais: ""},
    numeroDocumento: "",
    tipoDocumento: {id: 0, tipoDocumento: ""}
  }

    constructor(
      private _AuthService: AuthServicio)
    { }

  ngOnInit(){
      this._AuthService.formsInfo(). 
        subscribe((response: FormConfig)=>{
          this.selectCountryInfo = response.countries;
          this.selectDocumentInfo = response.documents;
          this.selectPhoneInfo = response.phones;
        }).add()
  }

  onSubmit(){    
  if(this.newUser.contrasenia == this.passwordConfirm){
    console.log(this.newUser);
    this._AuthService.createUser(this.newUser). 
      subscribe((response: ClientEntity)=>{
        alert("Se ha creado el usuario");
      }).add()
  }else{
    alert("las contraseñas deben ser iguales");
  }
    
  }
}
