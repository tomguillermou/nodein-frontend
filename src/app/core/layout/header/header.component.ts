import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    private isAuthenticated: boolean;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    onLogout(): void {
        this.router.navigateByUrl('/login');
    }
}
