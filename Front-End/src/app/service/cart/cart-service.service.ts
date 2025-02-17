import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  url: string | undefined;
  constructor(private http: HttpClient) {
    this.url = environment.API;
  }
  addToCart(body: any) {
    return this.http.post(`${this.url}/cart`, body);
  }
  removeCart(id: string) {
    return this.http.delete(`${this.url}/cart/${id}`);
  }
  updateCartFollowDevice(value: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.patch(`${this.url}/cart/device/${value}`, headers);
  }
  getDeviceCart(value: string) {
    return this.http.get(`${this.url}/cart/device/${value}`);
  }
}
