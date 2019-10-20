import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    private posts;

    fetchPosts() {
        this.postService.fetchAll()
            .subscribe({
                next: (body) => {
                    this.posts = body.data;
                    console.log(body.data);
                },
                error: (error) => {
                    console.log(error);
                }
            });
    }

    constructor(
        private postService: PostService
    ) { }

    ngOnInit() {
        this.fetchPosts();
    }

}
