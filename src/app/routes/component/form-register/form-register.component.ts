import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  private isCheckShowFormRegister : string = '';
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.isCheckFromContent.subscribe(data => this.isCheckShowFormRegister = data)
  }

  handleShowFormRegister() {
    this.isCheckShowFormRegister = 'none'
    this.dataService.setisCheckFormRegister(this.isCheckShowFormRegister)
  }

}
