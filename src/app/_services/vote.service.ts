import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CreateVoteRequestBody {
    postId: string;
    type: string;
}

@Injectable({
    providedIn: 'root'
})
export class VoteService {

    constructor(
        private httpClient: HttpClient
    ) { }

    createOne(requestBody: CreateVoteRequestBody) {

        return this.httpClient.post('http://localhost:3000/votes', requestBody);
    }
}
