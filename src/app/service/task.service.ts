import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Task } from '../module/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl: string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  createTask() {
    const task: Task = {
      TaskSn: '1',
      TaskName: '新增任務',
      State: 'None'
    };

    return this.http.post<Task>(this.tasksUrl, task);
  }
}

