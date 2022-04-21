import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-products',
  templateUrl: './crud-products.component.html',
  styleUrls: ['./crud-products.component.css']
})
export class CrudProductsComponent implements OnInit {
  private listNavigation : any;
  isShow ?: number
  constructor() { }

  ngOnInit(): void {
    this.listNavigation = document.querySelectorAll('.products_crud-navigation-item')
    this.isShow = 0
  }

  handleChangeNavigation(event: any) {
    this.isShow = Number(event.target.id)
    for(let i = 0; i < this.listNavigation.length; i++) {
      if(this.listNavigation[i].className == 'products_crud-navigation-item active') {
        this.listNavigation[i].classList.remove('active')
      }
      if(Number(event.target.id) == i) {
        this.listNavigation[i].classList.add('active')
      }
    }
  }

}
