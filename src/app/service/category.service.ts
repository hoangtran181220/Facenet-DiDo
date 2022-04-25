import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _url: string = "http://localhost:8081/api/category/";

  constructor(private http : HttpClient) { }

  getCategory(): Observable<any> {
    return this.http.get<any>(this._url);
  }
}
