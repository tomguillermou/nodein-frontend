import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    posts: Post[] = [
        { id: '1', content: 'This is a post' },
        { id: '2', content: 'This is a cool post' },
        { id: '3', content: 'This is a great post' },
        { id: '4', content: 'This is a boring post' },
        { id: '5', content: 'This is a awesome post' },
    ];

    selectedPost: Post;

    onSelect(post: Post): void {
        this.selectedPost = post;
    }

    ngOnInit() {
    }

}
