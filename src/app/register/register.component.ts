import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
    templateUrl: './register.component.html',
    styles: ['.form { width: 100 %; max-width: 330px; padding: 15px; margin: auto; }']
})
export class RegisterComponent implements OnInit {

    error = '';

    loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        position: ['', Validators.required]
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
        const firstname = this.loginForm.get('firstname').value;
        const lastname = this.loginForm.get('lastname').value;
        const position = this.loginForm.get('position').value;

        if (email && password) {
            this.authenticationService.register({ email, password, firstname, lastname, position })
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
