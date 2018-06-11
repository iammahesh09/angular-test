import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { LoginService } from "./login.service";

@Injectable()

export class productServices {

    constructor(private _http: HttpClient, private _loginService: LoginService) { }

    getProductsData() {

        var hder = { 'authorization': this._loginService.getToken() };

        return this._http.get("https://exp-rest-api.herokuapp.com/api/products/", {headers:hder})
    }

    saveProduct(product: any) {
        return this._http.post('https://exp-rest-api.herokuapp.com/api/products', product)
    }


}