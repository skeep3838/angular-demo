import { PostModule } from './../module/post-module';
import { PostService } from './../service/post.service';
import { TaskService } from './../service/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../module/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[] = [];
  posts: PostModule[] = [];

  constructor(
    private taskService: TaskService,
    private postService : PostService
    ) { }

  ngOnInit(): void {
    this.getTasks();
    this.getPosts();

  }

  getTasks() {
    this.taskService.getTasks().subscribe((res: any) => {
      this.tasks = res;
      console.log(`getTasks result: ${res}`);
    });
  }

  createTask(){
    this.taskService.createTask().subscribe((newTask) => {
      this.tasks.push(newTask);
    });
  }

  getPosts(){
    this.postService.getPosts().subscribe((res) => {
      this.posts = res;
      console.log(`getPost result: ${res}`);
    });
  }

  createPost(){
    this.postService.createPost().subscribe((newPost) => {
      this.posts.push(newPost);
    });
  }

}
