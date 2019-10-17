import { Component, OnInit } from '@angular/core';
import { Post } from '../../_models/post';
import { HomeService } from '../../_services/home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    posts: Post[];

    constructor(
        private homeService: HomeService
    ) { }

    ngOnInit() {
        this.homeService.getPosts()
            .subscribe(posts => this.posts = posts);
    }

}
