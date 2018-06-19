import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";

@Injectable()

export class LoginService {

    constructor(private _http:HttpClient) { }

    login(userData:any) {
        return this._http.post('https://exp-rest-api.herokuapp.com/api/users/login', userData)
    }

    saveToken(token: string){
        this.isAuthenticated.next(true);
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
        localStorage.removeItem("token");
        this.isAuthenticated.next(false);
    }

    isAuthenticated: Subject<boolean> = new Subject();



}

