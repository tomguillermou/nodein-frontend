import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReadManyResponseBody } from '../_models/ReadManyResponseBody';

interface CreatePostRequestBody {
    content: string;
}

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(
        private httpClient: HttpClient
    ) { }

    fetchAll() {

        return this.httpClient.get<ReadManyResponseBody>('http://localhost:3000/posts');
    }

    createOne(requestBody: CreatePostRequestBody) {
        return this.httpClient.post('http://localhost:3000/posts', requestBody);
    }
}
