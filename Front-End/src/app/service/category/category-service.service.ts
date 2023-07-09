import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CategoryServiceService {
  url: string | undefined;
  constructor(private http: HttpClient) {
    this.url = environment.API;
  }
  getCategory() {
    return this.http.get(`${this.url}/categories`);
  }
  getOneCategory(id: string) {
    return this.http.get(`${this.url}/categories/${id}`);
  }
  addCategory(body: object, token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    const result = this.http.post(`${this.url}/categories`, body, config);
    return result;
  }
  updateCategory(id: string, body: object, token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    const result = this.http.patch(
      `${this.url}/categories/${id}`,
      body,
      config
    );
    return result;
  }
  removeCategory(id: string, token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    const result = this.http.delete(`${this.url}/categories/${id}`, config);
    return result;
  }
}
