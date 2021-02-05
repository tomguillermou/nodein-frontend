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

@Injectable()
export class AuthenticationService {
    constructor(private httpClient: HttpClient) {}

    public login(requestBody: LoginRequestBody) {
        return this.httpClient
            .post<AuthResponseBody>('http://localhost:3000/auth/login', requestBody)
            .pipe(
                map((responseBody) => {
                    localStorage.setItem('token', responseBody.token);
                    return responseBody;
                })
            );
    }

    public register(requestBody: RegisterRequestBody) {
        return this.httpClient
            .post<AuthResponseBody>('http://localhost:3000/auth/register', requestBody)
            .pipe(
                map((responseBody) => {
                    localStorage.setItem('token', responseBody.token);
                    return responseBody;
                })
            );
    }

    public removeToken(): void {
        localStorage.removeItem('token');
    }

    public getToken(): string | null {
        return localStorage.getItem('token');
    }
}
