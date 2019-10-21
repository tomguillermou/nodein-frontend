import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class VoteService {

    constructor(
        private httpClient: HttpClient
    ) { }

    createOne(body) {

        return this.httpClient.post('http://localhost:3000/votes', body);
    }
}
