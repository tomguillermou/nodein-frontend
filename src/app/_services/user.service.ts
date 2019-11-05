import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReadManyResponseBody } from '../_models/ReadManyResponseBody';
import { User } from '../_models/User';

interface FetchOneResponseBody {
    user: User;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private httpClient: HttpClient
    ) { }

    fetchAll(searchParams) {
        const urlSearch = new URLSearchParams(searchParams);

        return this.httpClient.get<ReadManyResponseBody>(`http://localhost:3000/users?${urlSearch.toString()}`);
    }

    fetchOne(id: string) {
        return this.httpClient.get<FetchOneResponseBody>(`http://localhost:3000/users/${id}`);
    }
}
