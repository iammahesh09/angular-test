import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-angular-forms',
  templateUrl: './anglar-form.component.html',
  styleUrls: ['./anglar-form.component.css']
})

export class AnglarFormComponent implements OnInit {
  product: any = {};

  constructor() { }

  sendProductNewData(){
    console.log(this.product)
  }

  ngOnInit() {
  }

}
