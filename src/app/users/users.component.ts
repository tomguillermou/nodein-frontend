import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

    users;

    searchForm = this.formBuilder.group({
        email: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        position: ['', Validators.required]
    });

    constructor(
        private formBuilder: FormBuilder,
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
