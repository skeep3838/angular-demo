import { PostModule } from './../module/post-module';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl: string = 'http://localhost:3000/posts';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostModule[]> {
    return this.http.get<PostModule[]>(this.postUrl);
  }

  getPostsRes() {
    return this.http.get<PostModule[]>(this.postUrl, {
      observe: 'response'
    });
  }

  createPost(): Observable<PostModule> {
    const postModule: PostModule = {
      id: 5,
      author: "auther add",
      title: "title add"
    }
    return this.http.post<PostModule>(this.postUrl, postModule, this.options);
  }
}
