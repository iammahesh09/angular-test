import { Component, OnInit } from '@angular/core';
import { ConsoleLogger } from '../shared/console.logger';
import { FileLogger } from '../shared/file.logger';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(fileloger:FileLogger) {
    fileloger.log("Hello File World")
  }

  ngOnInit() {
  }

}
