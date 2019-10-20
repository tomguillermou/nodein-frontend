import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
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

    getSearchParams() {
        return {
            firstname: this.searchForm.get('firstname').value,
            lastname: this.searchForm.get('lastname').value,
            position: this.searchForm.get('position').value,
            email: this.searchForm.get('email').value
        };
    }

    ngOnInit() {
        const searchParams = this.getSearchParams();

        this.userService.fetchAll(searchParams)
            .subscribe({
                next: (body) => {
                    this.users = body.data;
                }
            });
    }

    onSubmit() {
        const searchParams = this.getSearchParams();

        this.userService.fetchAll(searchParams)
            .subscribe({
                next: (body) => {
                    this.users = body.data;
                }
            });
    }
}
