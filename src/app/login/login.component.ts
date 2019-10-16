import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    error = '';

    loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
        this.authenticationService.logout();
    }

    onSubmit() {
        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;

        if (email && password) {
            this.authenticationService.login(email, password)
                .subscribe({
                    next: (body): void => {
                        // Redirects user after he logs in
                        this.router.navigateByUrl('/');
                    },
                    error: (error): void => {
                        console.warn(error); // to display only in "dev" mode
                        this.error = error;
                    }
                });
        }
    }

}
