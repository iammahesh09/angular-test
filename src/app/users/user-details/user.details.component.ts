import { Component } from "@angular/core";
import { UserService } from "../../shared/userServices";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-user-details',
    templateUrl: 'user-details.html'
})
export class UserDetailsComponent {
    userdetails;
    page_error;

    constructor(_userDetails: UserService, route:ActivatedRoute) {
        let login: any = route.snapshot.params.login;
        _userDetails.getUserDetilsData(login).subscribe(
            rep => this.userdetails = rep,
            error => this.page_error = error
        )
    }

}