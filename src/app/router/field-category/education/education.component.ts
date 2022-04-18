import { productsEducation } from '../../../products-education';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  productsEducation = productsEducation

  constructor() { }

  ngOnInit(): void {
  }

}
