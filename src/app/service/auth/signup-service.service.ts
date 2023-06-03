import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {

  constructor(private http: HttpClient) {}

  signupLogic(url: string, body: object) {
    const result = this.http.post(url, body);
    // console.log(result);
    return result;
  }

}
