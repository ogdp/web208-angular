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
  getOneProduct(id: string) {
    const result = this.http.get(`${this.url}/products/${id}`);
    return result;
  }
  removeProduct(id: string, token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    const result = this.http.delete(`${this.url}/products/${id}`, config);
    return result;
  }
  addProduct(body: object, token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    const result = this.http.post(`${this.url}/products/`, body, config);
    return result;
  }
  updateProduct(id: string, body: object, token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    const result = this.http.patch(`${this.url}/products/${id}`, body, config);
    return result;
  }
}
