import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  isCheckShowFormLogin : string = '';

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.isCheckFromLogin.subscribe(data => this.isCheckShowFormLogin = data)
    this.isCheckShowFormLogin = 'none'
  }

  handleShowFormLogin() {
    this.isCheckShowFormLogin = 'none'
    this.dataService.setIsCheckFormLogin(this.isCheckShowFormLogin)
  }

}
