import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    error = '';

    loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
        this.authenticationService.logout();
    }

    onSubmit() {
        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;

        if (email && password) {
            this.authenticationService.login({ email, password })
                .subscribe({
                    next: (body): void => {
                        this.router.navigateByUrl('/');
                    },
                    error: (error): void => {
                        this.error = error;
                    }
                });
        }
    }

}
