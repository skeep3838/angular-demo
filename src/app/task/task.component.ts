import { PostModule } from './../module/post-module';
import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  posts: PostModule[] = [];
  post$!: Observable<PostModule[]>;
  display = false;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    // this.getPosts();
    // 可監控變數，通常以$符號做結尾
    this.post$ = this.postService.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((res) => {
      this.posts = res;
      console.log(`getPost result: ${res}`);
    });
  }

  getPostsRes() {
    this.postService.getPostsRes().subscribe((res: HttpResponse<any>) => {
      this.posts = res.body;
      console.log("getPost result: " + JSON.stringify(res));
    });
  }

  createPost() {
    this.postService.createPost().subscribe((newPost) => {
      this.post$ = this.postService.getPosts();
    });
  }

}
