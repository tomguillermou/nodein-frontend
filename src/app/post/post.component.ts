import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../_models/Post';
import { VoteService } from '../_services/vote.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
    @Input() post: Post;

    didVote = false;

    constructor(
        private voteService: VoteService
    ) { }

    ngOnInit() {
    }

    onUpvote() {
        console.log('Upvoting post', this.post._id);
        this.voteService.createOne({ postId: this.post._id, type: 'upvote' })
            .subscribe({
                next: (body) => {
                    this.post.upvotesCount += 1;
                    this.didVote = true;
                }
            });
    }

    onDownvote() {
        console.log('Downvoting post', this.post._id);
        this.voteService.createOne({ postId: this.post._id, type: 'downvote' })
            .subscribe({
                next: (body) => {
                    this.post.downvotesCount += 1;
                    this.didVote = true;
                }
            });
    }
}
