import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit {
  products : any

  constructor(private product : ProductService) { }

  ngOnInit(): void {
    this.product.getProduct().subscribe(
      res => {
        this.products = res
        console.log(this.products);
      }
    )
  }

}
