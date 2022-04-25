import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url: string = "http://localhost:8081/api/product/";

  private categoryId ?: number

  constructor(private http : HttpClient, private _dataService : DataService) {}

  private _refreshrequired = new Subject<void>()

  get Refreshrequired() {
    return this._refreshrequired;
  }

  getProduct(): Observable<any> {
    return this.http.get<any>(this._url);
  }

  createProduct(data : any): Observable<any> {
    this._dataService.categoryId.subscribe(res => this.categoryId = res)
    return this.http.post<any>(this._url + `${this.categoryId}`, data);
  }

  updateProduct(data : any, productId : number): Observable<any> {
    return this.http.put<any>(this._url + `${productId}`, data).pipe(
      tap(() => {
        this.Refreshrequired.next();
      })
    );
  }

  updateProductStatus(productId: number, productStatus : any): Observable<any> {
    return this.http.put<any>("http://localhost:8081/api/productUpdateStatus/" + `${productId}`, productStatus).pipe(
      tap(() => {
        this.Refreshrequired.next();
      })
    );
  }
}
