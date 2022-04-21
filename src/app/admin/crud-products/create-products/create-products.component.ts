import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {
  private productName ?: string
  private supplier ?: number
  private srcImage ?: string
  private productDesc ?: string
  private productRate ?: number
  private timeCreate ?: any
  private status ?: number
  private categoryId ?: number
  private productSave : any

  constructor(private product : ProductService, private _dataService : DataService) { }

  ngOnInit(): void {
  }

  getProductName(event : any) {
    this.productName = event.target.value
  }

  getSupplier(event : any) {
    this.supplier = Number(event.target.value)
  }

  getSrcImage(event : any) {
    this.srcImage = event.target.value
  }

  getProductDesc(event : any) {
    this.productDesc = event.target.value
  }

  getProductRate(event : any) {
    this.productRate = Number(event.target.value)
  }

  getTimeCreate(event : any) {
    this.timeCreate = event.target.value
  }

  getStatus(event : any) {
    this.status = Number(event.target.value)
  }

  getCategory(event : any) {
    this.categoryId = Number(event.target.value)
  }

  handleSubmitProduct() {
    this.productSave = {
      "productName": this.productName,
      "vendorId" : this.supplier,
      "images" : this.srcImage,
      "description" : this.productDesc,
      "rating" : this.productRate,
      "createdDate" : this.timeCreate,
      "status" : this.status,
    }

    this._dataService.setCategoryId(Number(this.categoryId))

    this.product.createProduct(this.productSave).subscribe(response => {
      console.log(response);
    })
  }

}
