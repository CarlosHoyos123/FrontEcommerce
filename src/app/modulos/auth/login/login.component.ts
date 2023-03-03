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
<<<<<<< HEAD:src/app/modulos/auth/login/login.component.ts
        this._router.navigate(['Tienda/home']);
=======
        this._router.navigate(['Tienda/home/man']);
>>>>>>> 2249c2deec4142e1bc61a7a71b6e2c5d15376162:FrontEcommerce/src/app/modulos/auth/login/login.component.ts
      }).add(() => {

      });
  }

  OnSignIn(){
    this._router.navigate(['Auth/registro']);
  }
}
