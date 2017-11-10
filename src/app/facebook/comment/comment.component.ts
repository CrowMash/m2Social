import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from '../Commentaire';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: Commentaire;

  constructor() {
  }

  ngOnInit() {
  }

}
