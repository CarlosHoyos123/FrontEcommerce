import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

/** Interfaces */
import { Router } from '@angular/router';
import { ProductEntity } from '../interface/productEntity';
import { DetailResponse } from '../interface/detailResponse';

@Injectable({
    providedIn: 'root',
})

export class productServicio {

    private url: string = 'home/';
    
    constructor(
        private _http: HttpClient,
        private _router: Router) {
    }

mostSellingList(): Observable <ProductEntity[]>{
    const url = `${this.url}prodcuts/mostSelling`;
    return this._http.get<any>(url)
}

searchresults(aBuscar: String): Observable <ProductEntity[]>{
    const url = `${this.url}products/names/`+aBuscar;
    return this._http.get<any>(url)
}

ProductDetail(id: Number): Observable<DetailResponse> {
    let body = JSON.stringify(id);
    const url = `${this.url}product/detail`;
    return this._http.post<DetailResponse>(url, body)
}

}
