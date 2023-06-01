import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SigninServiceService {
  constructor(private http: HttpClient) {}

  signinLogic(url: string, body: object) {
    const result = this.http.post(url, body);
    // console.log(result);
    return result;
  }
  verifyToken(url: string) {
    const result = this.http.get(url);
    // console.log(result);
    return result;
  }
}
