import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { FacebookService } from '../facebook.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private service: FacebookService) {
  }

  ngOnInit() {
    this.service.getAllPosts().subscribe(posts => this.posts = posts);
  }

}
