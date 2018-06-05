import { Component, OnInit } from '@angular/core';
import { ConsoleLogger } from '../shared/console.logger';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(logger:ConsoleLogger) {
    logger.log("Inside home component");
   }

  ngOnInit() {
  }

}
