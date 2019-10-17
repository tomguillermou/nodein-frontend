import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    getAllUrl = '/users';

    constructor(
        private httpClient: HttpClient
    ) { }

    fetchAll() {
        return this.httpClient.get<any>(`http://localhost:3000${this.getAllUrl}`);
    }
}
