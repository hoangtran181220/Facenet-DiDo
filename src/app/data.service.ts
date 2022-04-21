import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _dataSubject1: BehaviorSubject<string> = new BehaviorSubject<string>('');
  isCheckFromContent : Observable<string> = this._dataSubject1.asObservable();
  private _dataSubject2: BehaviorSubject<string> = new BehaviorSubject<string>('');
  isCheckFromRegister : Observable<string> = this._dataSubject2.asObservable();
  private _dataSubject3 : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  categoryId : Observable<number> = this._dataSubject3.asObservable();



  constructor() { }
  setisCheckFormContent(text: string) {
    this._dataSubject1.next(text)
  }

  setisCheckFormRegister(text: string) {
    this._dataSubject2.next(text)
  }

  setCategoryId(data : number) {
    this._dataSubject3.next(data)
  }
}
