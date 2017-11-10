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
  post: Post = {
    id: 0,
    content: '',
    userId: 1,
    timestamp: 0
  };

  constructor(private service: FacebookService) {
  }

  ngOnInit() {
    this.service.getAllPosts().subscribe(posts => this.posts = posts);
  }

  add() {
    this.service.addPost(this.post).subscribe(post => {
      this.posts.push(post);
    });
    this.post.content = '';
    this.post.img = '';
    this.post.timestamp = Date.now() / 1000;
  }

}
