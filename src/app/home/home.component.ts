import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title: string = 'Angular';
  user;
  isImportant: boolean;
  isActive: boolean;
  isSaved: boolean;
  isExpired
  name;

  myStyles = {
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold'
  }

  setMyStyles() {
    let styles = {
      'font-weight': this.isImportant ? 'bold' : 'normal'
    };
    return styles;
  }

  myClasses = {
    important: this.isImportant,
    inactive: !this.isActive,
    saved: this.isSaved
  }

  setMyClasses() {
    let classes = {
      important: this.isImportant,
      inactive: !this.isActive,
      saved: this.isSaved,
    };
    return classes;
  }

  htmlStr: string = '<strong>The Tortoise</strong> &amp; the Hare';

  constructor() { }


}
