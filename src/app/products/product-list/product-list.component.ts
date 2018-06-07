import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productServices } from '../../shared/productServices';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products:any;

  constructor(_product:productServices) {
    _product.getProductsData().subscribe(
                responce => this.products = responce["data"],
                error => console.log(error),
                //() => console.log(this.products)
            );
   }


}
