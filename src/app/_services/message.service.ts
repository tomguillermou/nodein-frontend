import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../_models/Message';

interface CreateOneRequestBody {
    receiverId: string;
    content: string;
}

interface FetchAllResponseBody {
    data: Message[];
}

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    constructor(
        private httpClient: HttpClient
    ) { }

    createOne(body: CreateOneRequestBody) {
        return this.httpClient.post('http://localhost:3000/messages', body);
    }

    fetchAllFromReceiver(receiverId: string) {
        return this.httpClient.get<FetchAllResponseBody>(`http://localhost:3000/messages?receiverId=${receiverId}`);
    }

}
