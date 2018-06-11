import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productServices } from '../../shared/productServices';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any=[];

  // tslint:disable-next-line:max-line-length
  constructor(private _product: productServices) {}

  ngOnInit() {
    this._product.getProductsData().subscribe(
      resp => this.products= resp['data'],
      error => console.log("error")
    )    
  }

}
