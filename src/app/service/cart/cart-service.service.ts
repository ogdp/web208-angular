import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  url = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}
  addToCart(body: any) {
    return this.http.post(`${this.url}/cart`, body);
  }
  removeCart(id: string) {
    return this.http.delete(`${this.url}/cart/${id}`);
  }
  getDeviceCart(value: string) {
    return this.http.get(`${this.url}/cart/device/${value}`);
  }
}
