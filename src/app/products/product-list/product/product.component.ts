import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() getProduct:any;

  success: any[] = ["bg-success", "text-white"]
  danger: any[] = ["bg-danger", "text-white"]
  brRed: any = { border: '1px solid #dc3545 !important;' }
  brSuc: any = { border: '1px solid #28a745 !important;' }

  products:any

  constructor() {

   }

  // getRelativeTime(date){
  //      return moment(date).fromNow();
  //      return moment(date).startOf('hour').fromNow();
  //      return moment(date).startOf('day').fromNow();

  //      return moment(date).subtract(6, 'days').calendar();

  // }

  ngOnInit() {
  }

}

