import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = '/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductImagesService {

  constructor(private httpClient: HttpClient) { 

  }

  postImage(productId: number, imagesFile: FormData): Observable<Object> {

    const options = {
      headers: new HttpHeaders(
      {
          'Content-Type':'multipart/form-data; boundary=???',
          'Accept': '*/*'
      })
    }

    const url = BASE_URL + `/${productId}/image`
    return this.httpClient.post(url, imagesFile, options).pipe();
  }
}
