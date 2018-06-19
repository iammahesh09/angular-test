import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { productServices } from '../../shared/productServices';


@Component({
    selector: 'app-new-product',
    templateUrl: 'new-product.component.html',
    styleUrls: ['new-product.component.css']
})

export class NewProductComponent {

    product: any={brand:""}
    isSuccess: boolean;
    isError: boolean;

    constructor(private _productService: productServices, private _router:Router) { }

    addProduct() {

        console.log(this.product);

        this._productService.saveProduct(this.product).subscribe(
            res => {
                console.log(res),
                this.product = {},
                this.isSuccess= true,
                this.isError =false
                this._router.navigate(['/ProductsList'])
            },
            err =>{
                console.log(err),
                this.product = {},
                this.isError =true,
                this.isSuccess= false
            }

       )

    }

}