import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  getProducts(){
    let apiUrl = 'http://localhost:8080/api/products';
    return this.http.get(apiUrl);
  }
  getProduct(id:string){
    let apiUrl = `http://localhost:8080/api/products/${id}`;
    return this.http.get(apiUrl);
  }
  getProductsNew(){
    let apiUrl = `http://localhost:8080/api/products?_limit=4&_order=desc`;
    return this.http.get(apiUrl);
  }
  getProductsPrice(){
    let apiUrl = `http://localhost:8080/api/products?_limit=4&_order=desc&_sort=price`;
    return this.http.get(apiUrl);
  }
}