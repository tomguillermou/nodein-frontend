import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../_models/Post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
    @Input() post: Post;

    constructor() { }

    ngOnInit() {
    }
}
