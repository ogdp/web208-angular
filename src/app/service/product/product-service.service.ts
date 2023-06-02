import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProducts(url: string) {
    const result = this.http.get(url);
    // console.log(result);
    return result;
  }
}
