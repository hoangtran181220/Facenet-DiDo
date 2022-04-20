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



  constructor() { }
  setisCheckFormContent(text: string) {
    this._dataSubject1.next(text)
  }

  setisCheckFormRegister(text: string) {
    this._dataSubject2.next(text)
  }
}
