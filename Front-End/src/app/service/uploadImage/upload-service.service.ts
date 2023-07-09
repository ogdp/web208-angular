import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UploadServiceService {
  url: string | undefined;
  constructor(private http: HttpClient) {
    this.url = environment.API;
  }
  uploadIMG(body: any) {
    const result = this.http.post(`${this.url}/images/upload`, body);
    return result;
  }
}
