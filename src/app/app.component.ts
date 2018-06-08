import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular';

  isLoggedin: boolean;

  constructor(private _loginService: LoginService, private _router: Router) {

    this.isLoggedin = _loginService.isLoggedin();

  }


  onLogout() {
    this._loginService.logout();
    this._router.navigate(["login"]);
  }

}
