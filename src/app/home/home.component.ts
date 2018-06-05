import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title: string = 'Angular';
  show:boolean = true;
  
  constructor() { }

  toggle(){
    this.show = !this.show;
  }


}
