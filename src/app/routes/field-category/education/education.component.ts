import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { CategoryService } from 'src/app/service/category.service';
import { ProductByCategoryIdService } from 'src/app/service/product-by-category-id.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  products : any
  categoryId : any
  categoryName : any

  constructor(
    private productsByCategoryId : ProductByCategoryIdService,
    private categoryIdFromHeader : DataService,
    private categorys : CategoryService,
  ) {

  }

  ngOnInit(): void {
    this.categoryIdFromHeader.categoryIdFromHeader.subscribe(
      res => {
        this.categoryId = res
        this.productsByCategoryId.getProduct(this.categoryId).subscribe(
          res => {
            this.products = res
            console.log(this.products);
          }
        )
        this.categorys.getCategory().subscribe(
          res => {
            this.categoryName = res[this.categoryId - 1].categoryName
            console.log(this.categoryName);
          }
        )
      }
    )
  }

}
