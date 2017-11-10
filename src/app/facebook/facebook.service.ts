import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './Post';
import { Observable } from 'rxjs/Observable';
import { User } from './User';

@Injectable()
export class FacebookService {

  constructor(private http: HttpClient) {
  }

  getPost(id: number): Observable<Post> {
    return this.http.get(`/api/posts/${id}`);
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get('/api/posts');
  }

  getUser(id: number): Observable<User> {
    return this.http.get(`/api/users/${id}`);
  }

  getAllCommentsFromPost(id: number): Observable<Comment[]> {
    return this.http.get(`/api/posts/${id}/comments`);
  }

}
