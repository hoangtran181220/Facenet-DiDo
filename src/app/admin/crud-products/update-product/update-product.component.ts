import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  products : any
  categoryList : any
  productId : any
  productName : any = ''
  productVendorId ?: number
  productImage : any = ''
  productDesc : any = ''
  productRate ?: number
  productStatus : number = 1

  constructor(private product : ProductService, private category : CategoryService) { }

  ngOnInit(): void {
    this.getProductList()
    this.product.Refreshrequired.subscribe(res => {
      this.getProductList()
    })
    this.getCategorys()
  }

  getProductList() {
    this.product.getProduct().subscribe(
      res => {
        this.products = res
        console.log(this.products);
      }
    )
  }

  getCategorys() {
    this.category.getCategory().subscribe(
      res => this.categoryList = res
    )
  }

  getProductInfo(productId : any, productName : any, productVendorId : any, productImage : any, productDesc : any, productRate : any, productStatus : any) {
    this.productId = productId
    this.productName = productName
    this.productVendorId = productVendorId
    this.productImage = productImage
    this.productDesc = productDesc
    this.productRate = productRate
    this.productStatus = (productStatus == true ) ? 1 : 0
  }

  handleUpdateProduct(newName : any, newVendorId : any, newImage : any, newDesc : any, newRate : any, newStatus : any) {
    let dataProduct = {
      "productName": newName,
      "vendorId": Number(newVendorId),
      "images": newImage,
      "description": newDesc,
      "rating": Number(newRate),
      "status": Number(newStatus),
    }

    this.product.updateProduct(dataProduct, this.productId).subscribe(response => {
      console.log(response);
    })
  }

}
