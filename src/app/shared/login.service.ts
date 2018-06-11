import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()

export class LoginService {

    constructor(private _http:HttpClient) { }

    login(userData:any) {
        return this._http.post('https://exp-rest-api.herokuapp.com/api/users/login', userData)
    }

    saveToken(token: string){
        return localStorage.setItem("token", token)
    }

    getToken(){
        return localStorage.getItem('token')
    }

    

    isLoggedin(): boolean {
       return !! localStorage.getItem("token");
    }
    // Option In isLogin
    // isLoggedin(): boolean {
    //     return localStorage.getItem("token") ? true:false;
    // }

    logout(){
        return localStorage.clear()
    }



}

