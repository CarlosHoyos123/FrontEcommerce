import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

/** Interfaces */
import { Login } from '../interface/login';
import { RespuestaApi } from '../interface/respuestaapi';
import { environment } from 'src/environments/environment';
import { Autorizacion } from '../interface/autorizacion';

@Injectable({
    providedIn: 'root',
})

export class AuthServicio {

    //private url: string = 'http://cursoangular.ci4.cognox.com/Api00/Autorizacion/';
    /** Propiedad Autenticación */
    private _authenticated: boolean = false;

    private url: string = 'Autorizacion/';

    /** Propiedad configuración */
    private configSession: string = 'Peliculas';


    constructor(private _http: HttpClient) {
    }

    Login(login: Login): Observable<any> {

        let body = JSON.stringify(login);
        const url = `${this.url}Autenticacion`;

        return this._http.post<RespuestaApi>(url, body)
            .pipe(
                switchMap((response: RespuestaApi) => {
                    if (response.Mensaje.Estado) {
                        this.session = response.Datos;  // Asigna información del token
                        this._authenticated = true;     // Indica que usuario es autenticado
                    }
                    return of(response);                // Return a new observable with the response
                })
            );
    }

    set session(auth: Autorizacion) {
        localStorage.setItem(this.configSession, JSON.stringify(auth));
    }

    get session(): Autorizacion {
        if (localStorage.getItem(this.configSession) === undefined) {
            //cerrar
        }
        const sessionJson = localStorage.getItem(this.configSession);
        const session: Autorizacion = sessionJson !== null ? JSON.parse(sessionJson) : null;
        return session;
    }

    get token(): string {
        const sessionJson = localStorage.getItem(this.configSession);
        const session: Autorizacion = sessionJson !== null ? JSON.parse(sessionJson) : null;
        return session.Token!;
    }
}