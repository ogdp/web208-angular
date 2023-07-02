import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UploadServiceService {
  url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}
  uploadIMG(body: any) {
    const result = this.http.post(`${this.url}/images/upload`, body);
    return result;
  }
}
