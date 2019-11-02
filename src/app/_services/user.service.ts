import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseBody } from '../_models/ResponseBody';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private httpClient: HttpClient
    ) { }

    fetchAll(searchParams) {

        const urlSearch = new URLSearchParams(searchParams);

        return this.httpClient.get<ResponseBody>(`http://localhost:3000/users?${urlSearch.toString()}`);
    }
}
