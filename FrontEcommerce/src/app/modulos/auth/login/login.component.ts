import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interface/login';
import { RespuestaAuth } from 'src/app/interface/respuestaAuth';
import { AuthServicio } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public login: Login = { correo: '', clave: '' }

  constructor(private _servicio: AuthServicio, private _router: Router) 
  { }

  onSubmit() {
    this._servicio.Login(this.login)
      .subscribe((respuesta: RespuestaAuth) => {
        console.log(respuesta);
        this._router.navigate(['Tienda/home']);
      }).add(() => {

      });
  }

  OnSignIn(){
    this._router.navigate(['Auth/registro']);
  }
}
