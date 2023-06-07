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
  getAllBill(token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    const result = this.http.get(`${this.url}/bill`, config);
    return result;
  }
  updateStatusBill(id: string, token: string, body: object) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    const result = this.http.patch(`${this.url}/bill/${id}`, body, config);
    return result;
  }
  getOneBill(id: string) {
    const result = this.http.get(`${this.url}/bill/${id}`);
    return result;
  }
  getBillFollowStatus(key_status: string, token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    const result = this.http.get(
      `${this.url}/bill/search/${key_status}`,
      config
    );
    return result;
  }
  getSearchName(key_search: string, token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    const result = this.http.get(
      `${this.url}/bill/search_name/${key_search}`,
      config
    );
    return result;
  }
}
