import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    getAllUrl = '/users';

    constructor(
        private httpClient: HttpClient
    ) { }

    fetchAll(searchParams) {

        const urlSearch = new URLSearchParams(searchParams);

        return this.httpClient.get<any>(`http://localhost:3000${this.getAllUrl}?${urlSearch.toString()}`);
    }
}
