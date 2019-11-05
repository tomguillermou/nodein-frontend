import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

    private isAuthenticated: boolean;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
        this.isAuthenticated = this.authenticationService.isAuthenticated();
    }

    onLogout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

}
