import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { LoginService } from "./login.service";
import { Product } from "./models/product.model";

@Injectable()

export class productServices {

    constructor(private _http: HttpClient, private _loginService: LoginService) { }

    getProductsData() {

        var hder = { 'authorization': this._loginService.getToken() };

        return this._http.get<Product[]>("https://exp-rest-api.herokuapp.com/api/products/", {headers:hder})

    }

    saveProduct(product) {
        var hder = { 'authorization': this._loginService.getToken() };
        return this._http.post('https://exp-rest-api.herokuapp.com/api/products/', product, {headers:hder})
    }


}