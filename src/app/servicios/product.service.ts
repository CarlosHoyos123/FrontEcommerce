import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


/* interfaces */

import { ProductEntity } from '../interface/productEntity';
import { environment } from 'src/environments/environment.localhost';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  url = environment;

  constructor(private http:HttpClient) { }

  SearchBarRequest(aBuscar: String){
    return this.http.get<ProductEntity[]>(this.url+'home/products/names/'+ aBuscar, { responseType: 'json'});
  }
  
}
