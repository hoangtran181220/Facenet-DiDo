import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleHideSubMenu() {
    let subMenuElement = document.querySelector('.header_list-sub-menu')
    if(subMenuElement?.className == 'header_list-sub-menu') {
      subMenuElement.classList.add('active')
    } else if(subMenuElement?.className == 'header_list-sub-menu active') {
      subMenuElement.classList.remove('active')
    }
  }

}
