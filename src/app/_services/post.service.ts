import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseBody } from '../_models/ResponseBody';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    getAllUrl = '/posts';

    constructor(
        private httpClient: HttpClient
    ) { }

    fetchAll() {

        return this.httpClient.get<ResponseBody>(`http://localhost:3000${this.getAllUrl}`);
    }
}
