import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.css']
})
export class ButtonLoginComponent implements OnInit {
  isCheckShowFormLogin !: string;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.isCheckFromLogin.subscribe(data => this.isCheckShowFormLogin = data)
    this.isCheckShowFormLogin = 'none'
  }

  handleShowFormLogin() {
    if(this.isCheckShowFormLogin == 'none') {
      this.isCheckShowFormLogin = 'block'
      this.dataService.setIsCheckFormLogin(this.isCheckShowFormLogin)
      console.log(this.isCheckShowFormLogin);
    }
  }

}
