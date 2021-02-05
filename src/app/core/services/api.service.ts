import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
    public readonly apiUrl = 'http://localhost:3000';

    constructor(private httpClient: HttpClient) {}

    private get headersWithToken() {
        return new HttpHeaders({
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        });
    }

    public get(route: string) {
        return this.httpClient.get(this.apiUrl + route, {
            headers: this.headersWithToken,
        });
    }

    public post(route: string, body: { [key: string]: {} }) {
        return this.httpClient.post(this.apiUrl + route, body, {
            headers: this.headersWithToken,
        });
    }
}
