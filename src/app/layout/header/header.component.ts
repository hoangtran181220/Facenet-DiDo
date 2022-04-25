import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categoryList : any

  constructor(private category : CategoryService, private categoryId : DataService) { }

  ngOnInit(): void {
    this.category.getCategory().subscribe(
      res => this.categoryList = res
    )
  }

  toggleHideSubMenu() {
    let subMenuElement = document.querySelector('.header_list-sub-menu')
    if(subMenuElement?.className == 'header_list-sub-menu') {
      subMenuElement.classList.add('active')
    } else if(subMenuElement?.className == 'header_list-sub-menu active') {
      subMenuElement.classList.remove('active')
    }
  }

  getCategoryId(categoryId : number) {
    console.log(categoryId);
    this.categoryId.setCategoryIdFromHeader(categoryId)
  }
}
