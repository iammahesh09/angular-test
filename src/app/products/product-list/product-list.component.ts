import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productServices } from '../../shared/productServices';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../shared/userServices';
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: any;

  // tslint:disable-next-line:max-line-length
  constructor(private _product: productServices, private _loginService: LoginService, private _ativeRoute: ActivatedRoute, private _router: Router ) {

    if (this._loginService.isLoggedin()) {
      this.products = this._ativeRoute.snapshot.data.products;
    } else {
      // tslint:disable-next-line:no-unused-expression
      this._router.navigate['login'];
    }

  }

}
