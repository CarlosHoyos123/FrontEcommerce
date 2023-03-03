import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

/** Interfaces */
import { Login } from '../interface/login';
import { RespuestaApi } from '../interface/respuestaapi';
import { environment } from 'src/environments/environment';
import { FormConfig } from '../interface/formsConfig';
import { ClientEntity } from '../interface/clientEntity';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})

export class AuthServicio {

    private _authenticated: boolean = false;

    private url: string = 'Auth/';

    /** Propiedad configuración */
    private configSession: string = 'Usuario';


    constructor(
        private _http: HttpClient,
        private _router: Router) {
    }

    Login(login: Login): Observable<RespuestaApi> {
        let body = JSON.stringify(login);
        const url = `${this.url}user`;
        return this._http.post<RespuestaApi>(url, body)
    }

    formsInfo(){
        const url = `${this.url}formConfig`;
        return this._http.get<FormConfig>(url)
    }

    createUser(newUser: ClientEntity){
        let body = JSON.stringify(newUser);
        const url = `${this.url}create`;
        return this._http.post<ClientEntity>(url, body)
    }

    cerrarSesion()
    {
        localStorage.removeItem(this.configSession);
        return of(true);
    }

    set session(auth: RespuestaApi) {
        console.log("En guardar respuesta")
        localStorage.setItem(this.configSession, JSON.stringify(auth));
    }

    get session(): RespuestaApi {
        if (localStorage.getItem(this.configSession) === undefined) {
            this._router.navigate(['Auth/login']);
        }
        const sessionJson = localStorage.getItem(this.configSession);
        const session: RespuestaApi = sessionJson !== null ? JSON.parse(sessionJson) : null;
        return session;
    }

}