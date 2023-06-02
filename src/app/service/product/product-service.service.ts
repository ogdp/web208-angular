import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}
  getProduct() {
    const result = this.http.get(`${this.url}/products`);
    return result;
  }
  removeProduct(id: string, token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    const result = this.http.delete(`${this.url}/products/${id}`, config);
    return result;
  }
}
