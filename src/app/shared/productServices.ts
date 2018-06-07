import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()

export class productServices {

    products: any

    constructor(private _http: HttpClient) { }

    getProductsData() {
        return this._http.get('https://exp-rest-api.herokuapp.com/api/products/')
    }

}