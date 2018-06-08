import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _user: any = {
  };
  failed: boolean;
  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit() {
  }

  userLogin() {
    console.log(this._user);
    this._loginService.login(this._user).subscribe(
      res => {
        this._loginService.saveToken(res["token"]);
        this._router.navigate(["ProductsList"]);
      },
      err => this.failed = true
    )
  }

}
