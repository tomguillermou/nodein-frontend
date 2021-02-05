import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
} from '@angular/router';

import { AuthenticationService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let isAuthenticated: boolean;

        if (this.authenticationService.getToken()) {
            isAuthenticated = true;
        } else {
            this.router.navigateByUrl('/login');
            isAuthenticated = false;
        }

        return isAuthenticated;
    }
}
