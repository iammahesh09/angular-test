import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _userlogin: any = {};
  constructor() { }

  ngOnInit() {
  }

  userLogin(){
    console.log(this._userlogin)
  }

}
