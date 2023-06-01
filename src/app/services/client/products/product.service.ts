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
  

  

  // getProducts(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  // }

  // getProductById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/${id}`);
  // }

  // addProduct(employee: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, employee);
  // }

  // updateProduct(id: number, employee: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/${id}`, employee);
  // }

  // deleteProduct(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/${id}`);
  // }
}