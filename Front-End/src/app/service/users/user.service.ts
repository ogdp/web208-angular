import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string | undefined;
  constructor(private http: HttpClient) {
    this.url = environment.API;
  }
  getUsers(token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    return this.http.get(`${this.url}/users`, config);
  }

  updateUserRole(id: string, body: object, token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    return this.http.patch(`${this.url}/users/${id}/disable`, body, config);
  }

  updateUserPassword(id: string, body: object, token: string) {
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    return this.http.patch(`${this.url}/users/${id}/reset`, body, config);
  }
}
