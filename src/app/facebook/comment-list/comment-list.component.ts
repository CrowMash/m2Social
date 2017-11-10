import { Component, Input, OnInit } from '@angular/core';
import { FacebookService } from '../facebook.service';
import { Commentaire } from '../Commentaire';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() postId: number;
  comments: Commentaire[];

  comment: Commentaire = {
    id: 0,
    postId: this.postId,
    content: '',
    userId: 1,
    timestamp: 0
  };

  constructor(private service: FacebookService) {
  }

  ngOnInit() {
    this.service.getAllCommentsFromPost(this.postId).subscribe(comments => this.comments = comments);
  }

  add(): void {
    this.service.addComment(this.postId, this.comment).subscribe();
    this.comments.push(this.comment);
  }


}
