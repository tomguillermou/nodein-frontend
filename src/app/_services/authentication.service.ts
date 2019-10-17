import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    loginUrl = 'auth/login';
    registerUrl = 'auth/register';

    constructor(
        private httpClient: HttpClient
    ) { }

    login(email: string, password: string) {
        return this.httpClient.post<any>(`http://localhost:3000/${this.loginUrl}`, { email, password })
            .pipe(map(body => {
                localStorage.setItem('token', body.token);
                return body;
            }));
    }

    register(email: string, password: string, firstname: string, lastname: string, position: string) {
        return this.httpClient.post<any>(`http://localhost:3000/${this.registerUrl}`, { email, password, firstname, lastname, position })
            .pipe(map(body => {
                localStorage.setItem('token', body.token);
                return body;
            }));
    }

    logout() {
        localStorage.removeItem('token');
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}
