import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  products : any

  constructor(private product : ProductService) { }

  ngOnInit(): void {
    this.getProductList()
    this.product.Refreshrequired.subscribe(res => {
      this.getProductList()
    })
  }

  getProductList() {
    this.product.getProduct().subscribe(
      res => {
        this.products = res
        console.log(this.products);
      }
    )
  }

  changeStatus(productId : any, productName : any, productVendorId : any, productImage : any, productDesc : any, productRate : any, productStatus : any) {
    console.log(productVendorId, productRate, productStatus);
    let dataProduct = {
      "productName": productName,
      "vendorId": productVendorId,
      "images": productImage,
      "description": productDesc,
      "rating": productRate,
      "status": productStatus,
    }

    this.product.updateProductStatus(productId, dataProduct).subscribe(res => {})
  }

}
