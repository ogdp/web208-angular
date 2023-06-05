import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BillServiceService {
  url = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}
  addToBill(body: object, token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    const result = this.http.post(`${this.url}/bill/`, body, config);
    return result;
  }
  getOneBill(id: string) {
    const result = this.http.get(`${this.url}/bill/${id}`);
    return result;
  }
}
