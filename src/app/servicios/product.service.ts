import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/** Interfaces */
import { Router } from '@angular/router';
import { ProductEntity } from '../interface/productEntity';
import { DetailResponse } from '../interface/detailResponse';
import { HomeGridProduct } from '../interface/homeGridPriduct';

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

searchresults(aBuscar: string): Observable <ProductEntity[]>{
    const url = `${this.url}products/names/`+aBuscar;
    return this._http.get<any>(url)
}

ProductDetail(id: number): Observable<DetailResponse> {
    let body = JSON.stringify(id);
    const url = `${this.url}product/detail`;
    return this._http.post<DetailResponse>(url, body)
}

<<<<<<< HEAD:src/app/servicios/product.service.ts
sexProductList(sex: String){
=======
sexProductList(sex: string){
>>>>>>> 2249c2deec4142e1bc61a7a71b6e2c5d15376162:FrontEcommerce/src/app/servicios/product.service.ts
    const url = `${this.url}list/`+sex;
    return this._http.get<HomeGridProduct[]>(url)
}
}