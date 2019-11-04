import { Component, OnInit } from '@angular/core';
import { Post } from '../_models/Post';
import { PostService } from '../_services/post.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {

    private posts: Post[];
    private error;

    private postCreationForm = this.formBuilder.group({
        content: ['', Validators.required]
    });

    constructor(
        private formBuilder: FormBuilder,
        private postService: PostService
    ) { }

    fetchPosts() {
        this.postService.fetchAll()
            .subscribe({
                next: (body) => {
                    this.posts = body.data;
                },
                error: (error) => {
                    console.warn('Error occured while fetching posts');
                    console.error(error);
                }
            });
    }

    ngOnInit() {
        this.fetchPosts();
    }

    onSubmit() {
        const content = this.postCreationForm.get('content').value;

        if (content) {
            this.postService.createOne({ content })
                .subscribe({
                    next: (body) => {
                        this.fetchPosts();
                    },
                    error: (error) => {
                        this.error = error;
                    }
                });
        }
    }

}
