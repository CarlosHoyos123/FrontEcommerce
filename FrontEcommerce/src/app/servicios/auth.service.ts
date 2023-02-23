import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

/** Interfaces */
import { Login } from '../interface/login';
import { RespuestaAuth } from '../interface/respuestaAuth';
import { Autorizacion } from '../interface/autorizacion';
import { ClientEntity } from '../interface/clientEntity';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})

export class AuthServicio {

    /** Propiedad Autenticación */
    private _authenticated: boolean = false;

    private url: string = 'Auth/';

    /** Propiedad configuración */
    private configSession: string = 'Usuario';


    constructor(
        private _http: HttpClient,
        private _router: Router) {
    }

    Login(login: Login): Observable<any> {

        let body = JSON.stringify(login);
        const url = `${this.url}user`;

        return this._http.post<RespuestaAuth>(url, body)
            .pipe(
                switchMap((response: RespuestaAuth) => {
                    if (response.estado) {
                        this.session = response;  // Asigna información del token
                        this._authenticated = true;     // Indica que usuario es autenticado
                    }
                    return of(response);                // Return a new observable with the response
                })
            );
    }

    Registry(newUser: ClientEntity): Observable<any> {

        let body = JSON.stringify(newUser);
        const url = `${this.url}create`;
        console.log(newUser); 
        return this._http.post<ClientEntity>(url, body)
            .pipe(
                switchMap((response: ClientEntity) => {
                    if (response != null) {
                        //this.session = response.cliente;  // Asigna información del token
                        //this._authenticated = true;     // Indica que usuario es autenticado
                    }
                    return of(response);                // Return a new observable with the response
                })
            );
    }

    formsSelects(): Observable <any>{
        //return this.http.get(this.server+'Auth/formConfig');
        const url = `${this.url}formConfig`;
        return this._http.get<any>(url)
    }

    cerrarSesion()
    {
        localStorage.removeItem(this.configSession);
        return of(true);
    }

    set session(auth: RespuestaAuth) {
        localStorage.setItem(this.configSession, JSON.stringify(auth));
    }

    get session(): RespuestaAuth {
        if (localStorage.getItem(this.configSession) === null) {
            this._router.navigate(['Auth/login']);
        }
        const sessionJson = localStorage.getItem(this.configSession);
        const session: RespuestaAuth = sessionJson !== null ? JSON.parse(sessionJson) : null;
        return session;
    }
}