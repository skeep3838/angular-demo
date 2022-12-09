import { Component, OnInit } from '@angular/core';
import { Task } from '../module/task';

@Component({
  selector: 'app-ch5-pipe',
  templateUrl: './ch5-pipe.component.html',
  styleUrls: ['./ch5-pipe.component.css']
})
export class Ch5PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  tasks: Task[] = [
    new Task({ TaskSn: '001', TaskName: '待辦事項 A', State: 'Finish' }),
    new Task({ TaskSn: '002', TaskName: '待辦事項 B', State: 'Doing' }),
    new Task({ TaskSn: '003', TaskName: '待辦事項 C', State: 'None' }),
    new Task({ TaskSn: '004', TaskName: '待辦事項 D', State: 'None' }),
  ];

  task = new Task({ TaskSn: '001', TaskName: '待辦事項 A', State: 'Finish' });

  columnDesc = {
    TaskSn: '編號',
    TaskName: '名稱',
    State: '狀態',
  };

  now = new Date();
}
