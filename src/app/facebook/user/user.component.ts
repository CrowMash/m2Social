import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { FacebookService } from '../facebook.service';
import { User } from '../User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() userId?: number;
  user: User;
  paramObs: Subscription;

  constructor(private route: ActivatedRoute, private service: FacebookService) {
  }

  ngOnInit() {
    if (this.userId) {
      this.paramObs = this.route.paramMap.switchMap(
        (params: ParamMap) => this.service.getUser(this.userId)
      ).subscribe(user => this.user = user);
    }
  }

}
