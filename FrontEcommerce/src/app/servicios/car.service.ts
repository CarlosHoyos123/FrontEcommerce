import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { ItemToCar } from '../interface/itemToCar';
import { CarResponse } from '../interface/carResponse';
import { SellConfirmation } from '../interface/sellConfirmation';


@Injectable({
    providedIn: 'root',
})

export class carServicio {

    private url: string = 'car/';
    
    constructor(
        private _http: HttpClient
    ) { }

    addToCar(data:ItemToCar){
        let body = JSON.stringify(data);
        const url = `${this.url}addItem`;
        return this._http.post<ItemToCar>(url, body)
    }

    checkClientCar(client: number){
        const url = `${this.url}myCar/`+client;
        return this._http.get<CarResponse[]>(url)
    }

    sellConfirm(data:SellConfirmation){
        let body = JSON.stringify(data);
        const url = `${this.url}carConfirm`;
        return this._http.post<SellConfirmation>(url, body)
    }

    deleteItem(data: CarResponse){
        let body = JSON.stringify(data);
        const url = `${this.url}removeItem`;
        return this._http.post<CarResponse>(url, body)
    }
}