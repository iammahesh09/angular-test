
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/userServices';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any;
  isErorr:boolean=true;
  
  constructor(_userService:UserService) {
      _userService.getUserData().subscribe(
        rep => this.users= rep,
        error =>this.isErorr = error
        //error => console.log("connection cannot be established")
      )
   }

  ngOnInit() {
    
  }

}
