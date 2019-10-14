import { Injectable } from '@angular/core';
import { Post } from '../_models/post';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    posts: Post[] = [
        { id: '1', content: 'Test' },
        { id: '2', content: 'Cool' },
        { id: '3', content: 'Nice' },
        { id: '4', content: 'Awesome' },
        { id: '5', content: 'Boring' },
    ];

    constructor() { }

    getPosts(): Observable<Post[]> {
        return of(this.posts);
    }
}
