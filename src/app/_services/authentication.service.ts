import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface LoginRequestBody {
    email: string;
    password: string;
}

interface RegisterRequestBody {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    position: string;
}

interface AuthResponseBody {
    token: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private httpClient: HttpClient
    ) { }

    login(requestBody: LoginRequestBody) {
        return this.httpClient.post<AuthResponseBody>('http://localhost:3000/auth/login', requestBody)
            .pipe(map(responseBody => {
                localStorage.setItem('token', responseBody.token);
                return responseBody;
            }));
    }

    register(requestBody: RegisterRequestBody) {
        return this.httpClient.post<AuthResponseBody>('http://localhost:3000/auth/register', requestBody)
            .pipe(map(responseBody => {
                localStorage.setItem('token', responseBody.token);
                return responseBody;
            }));
    }

    logout() {
        localStorage.removeItem('token');
    }

    isAuthenticated() {
        return localStorage.getItem('token') !== null;
    }
}
