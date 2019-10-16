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

    register() {

    }

    logout() {
        localStorage.removeItem('token');
    }
}
