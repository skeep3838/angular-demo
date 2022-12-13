import { PostModule } from './../module/post-module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<PostModule[]>(this.postUrl);
  }

  createPost() {
    const postModule: PostModule = {
      id: 5,
      author: "auther add",
      title: "title add"
  }
    return this.http.post<PostModule>(this.postUrl, postModule);
  }
}
