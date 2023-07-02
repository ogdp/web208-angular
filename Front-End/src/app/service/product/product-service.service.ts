import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}
  getProductQuantity(total: number, page: number) {
    const result = this.http.get(
      `${this.url}/products/status?_limit=${total}&&_page=${page}`
    );
    return result;
  }
  getProductStatus() {
    const result = this.http.get(`${this.url}/products/status`);
    return result;
  }
  getProduct(token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    const result = this.http.get(`${this.url}/products`, config);
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
  updateFollowCategoryId(body: object, token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    const result = this.http.post(
      `${this.url}/products/updateFollowCateId`,
      body,
      config
    );
    return result;
  }
  // searchProduct(key: string) {
  //   return this.http.get(`${this.url}/products/search/${key}`);
  // }
  getProductsNew() {
    return this.http.get(`${this.url}/products/status?_limit=4&_order=desc`);
  }
  getProductsPrice() {
    return this.http.get(
      `${this.url}/products/status?_limit=4&_order=desc&_sort=price`
    );
  }
  // Pagination
  API_pagination(
    params: string,
    type?: string | null,
    page?: number,
    on_limit?: number
  ) {
    return this.http.get(
      `${this.url}/${params}?_limit=${on_limit}&_page=${page}`
    );
  }
}
