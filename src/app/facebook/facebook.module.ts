import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRootComponent } from './post-root/post-root.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostHeaderComponent } from './post-header/post-header.component';
import { FacebookService } from './facebook.service';
import { UserComponent } from './user/user.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentComponent } from './comment/comment.component';

const appRoutes: Routes = [
  {
    path: 'post', component: PostRootComponent,
    children: [
      {path: ':id', component: PostComponent},
      {path: '', component: PostListComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(appRoutes),
    FormsModule
  ],
  declarations: [PostRootComponent, PostComponent, PostListComponent, PostHeaderComponent, UserComponent,
    TimestampComponent, CommentListComponent, CommentComponent],
  providers: [FacebookService]
})
export class FacebookModule {
}
