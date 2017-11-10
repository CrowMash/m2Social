import { Component, Input, OnInit } from '@angular/core';
import { FacebookService } from '../facebook.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() postId: number;
  comments: Comment[];

  constructor(private service: FacebookService) {
  }

  ngOnInit() {
    this.service.getAllCommentsFromPost(this.postId).subscribe(comments => this.comments = comments);
  }

}
