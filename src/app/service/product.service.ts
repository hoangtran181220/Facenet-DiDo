import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url: string = "http://localhost:8000/api/product/get/";

  constructor(private http : HttpClient) {}

  getProduct(): Observable<any> {
    return this.http.get<any>(this._url);
  }
}
