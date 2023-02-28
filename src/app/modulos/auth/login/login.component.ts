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

  public login: Login = { correo: '', clave: '' }

  constructor(private _servicio: AuthServicio, private _router: Router) {

  }

  onSubmit() {
    this._servicio.Login(this.login)
      .subscribe((response: RespuestaApi) => {
        if (response.state) {
          this._servicio.session = response;  // Asigna información del token
      }
        this._router.navigate(['Tienda/home']);
      }).add(() => {

      });
  }

  OnSignIn(){
    this._router.navigate(['Auth/registro']);
  }
}
