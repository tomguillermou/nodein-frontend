import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

    private isAuthenticated: boolean;

    constructor(
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
        this.isAuthenticated = this.authenticationService.isAuthenticated();
    }

    onLogout() {
        this.authenticationService.logout();
    }

}
