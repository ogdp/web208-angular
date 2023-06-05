import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CategoryServiceService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:8080/api';
  getCategory() {
    return this.http.get(`${this.url}/categories`);
  }
}
