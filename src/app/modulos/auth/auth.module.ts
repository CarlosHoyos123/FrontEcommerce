import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule } from '@angular/router';
import { AuthRutas } from './auth.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRutas),
    FormsModule
  ]
})
export class AuthModule { }
