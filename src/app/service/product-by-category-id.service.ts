import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductByCategoryIdService {

  private _url: string = "http://localhost:8081/api/productsByCategoryId/"

  constructor(private http : HttpClient) { }

  getProduct(categoryId : number): Observable<any> {
    return this.http.get<any>(this._url + `${categoryId}`);
  }
}
