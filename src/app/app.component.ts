import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

    isAuthenticated: boolean;

    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) { }

    ngOnInit() {
        this.isAuthenticated = this.authService.isLoggedIn();
    }

    ngDoCheck() {
        if (this.isAuthenticated !== this.authService.isLoggedIn()) {
            this.isAuthenticated = this.authService.isLoggedIn();
        }
    }

    onLogout() {
        this.authService.logout();
    }
}
