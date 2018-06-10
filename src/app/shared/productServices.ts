import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()

export class productServices {

    constructor(private _http: HttpClient) { }
    private productUrl = ""
    getProductsData() {
        return this._http.get('https://exp-rest-api.herokuapp.com/api/products')
    }

    getProductDetails(id){
        return this._http.get('https://exp-rest-api.herokuapp.com/api/products/' + id)
    }

    saveProduct(product){
        return this._http.post('https://exp-rest-api.herokuapp.com/api/products', product)
    }

}