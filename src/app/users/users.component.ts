import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users;

    constructor(
        private userService: UserService
    ) { }

    ngOnInit() {
        this.userService.fetchAll()
            .subscribe({
                next: (body) => {
                    this.users = body.data;
                }
            });
    }

}
