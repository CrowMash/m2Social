import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../Post';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { FacebookService } from '../facebook.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post?: Post;
  paramObs: Subscription;

  constructor(private route: ActivatedRoute, private service: FacebookService) {
  }

  ngOnInit() {
    this.paramObs = this.route.paramMap.switchMap(
      (params: ParamMap) => this.service.getPost(+params.get('id'))
    ).subscribe(post => this.post = post);
  }

}
