import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers(token: string) {
    let url = 'https://api-poly-framework-1.onrender.com/api/users';
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    return this.http.get(url, config);
  }

  updateUserRole(id: string, body: object, token: string) {
    let url = 'https://api-poly-framework-1.onrender.com/api/users';
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    return this.http.patch(`${url}/${id}/disable`, body, config);
  }

  updateUserPassword(id: string, body: object, token: string) {
    let url = 'https://api-poly-framework-1.onrender.com/api/users';
    const config = {
      headers: { Authorization: 'Bearer ' + token },
    };
    return this.http.patch(`${url}/${id}/reset`, body, config);
  }
}
