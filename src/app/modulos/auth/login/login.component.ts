import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interface/login';
import { RespuestaApi } from 'src/app/interface/respuestaapi';
import { AuthServicio } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public login: Login = { Correo: '', Clave: '' }

  constructor(private _servicio: AuthServicio, private _router: Router) {

  }

  onSubmit() {
    this._servicio.Login(this.login)
      .subscribe((respuesta: RespuestaApi) => {
        alert("Hubo respuesta");
        console.log(respuesta);
      }).add(() => {

      });
  }

  OnSignIn(){
    this._router.navigate(['Auth/registro']);
  }
}
