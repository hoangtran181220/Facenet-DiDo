import { productsEducation } from './../../products-education';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  productsEducation = productsEducation;
  private line : any;
  private tabActive : any;
  private listTabItem : any;
  private listContentItem : any;
  isCheckShowFornRegister !: string;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.line = document.querySelector('.line');
    this.tabActive = document.querySelector('.content_product-tab-item.active');
    this.listTabItem = document.querySelectorAll('.content_product-tab-item');
    this.listContentItem = document.querySelectorAll('.content_tab-content-block');
    this.line.style.left = this.tabActive.offsetLeft + 'px';
    this.line.style.width = this.tabActive.offsetWidth + 'px';
    this.dataService.isCheckFromRegister.subscribe(data => this.isCheckShowFornRegister = data)
    this.isCheckShowFornRegister = 'none'
  };

  changeActive(event : any) {
    console.log(event.target.id);
    for(let i = 0; i < this.listTabItem.length; i++) {
      if(this.listTabItem[i].className == 'content_product-tab-item active') {
        this.listTabItem[i].classList.remove('active');
        this.listContentItem[i].classList.remove('active');
      }
      if (Number(event.target.id) == i) {
        this.listTabItem[i].classList.add('active');
        this.listContentItem[i].classList.add('active');
        this.tabActive = document.querySelector('.content_product-tab-item.active');
        this.line.style.left = this.tabActive.offsetLeft + 'px';
        this.line.style.width = this.tabActive.offsetWidth + 'px';
      }
    }
  }

  handleShowFormRegister() {
    if(this.isCheckShowFornRegister == 'none') {
      this.isCheckShowFornRegister = 'block'
      this.dataService.setisCheckFormContent(this.isCheckShowFornRegister)
    }
  }

}
