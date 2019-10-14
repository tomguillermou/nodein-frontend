import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private loginUrl = '/auth/login';
    private registerUrl = '/auth/register';

    constructor(
        private httpClient: HttpClient
    ) { }
}
