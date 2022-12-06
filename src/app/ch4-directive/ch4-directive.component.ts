import { Component, OnInit, Input, Type } from '@angular/core';
import {Task} from '../module/task'
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

@Component({
  selector: 'app-ch4-directive',
  templateUrl: './ch4-directive.component.html',
  styleUrls: ['./ch4-directive.component.css']
})
export class Ch4DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // 取得父元件資料
  // @Input() task!: Task;

  tasks: Task[] = [
    new Task({ TaskSn: '001', TaskName: '待辦事項 A', State: 'Finish' }),
    new Task({ TaskSn: '002', TaskName: '待辦事項 B', State: 'Doing' }),
    new Task({ TaskSn: '003', TaskName: '待辦事項 C', State: 'None' }),
    new Task({ TaskSn: '004', TaskName: '待辦事項 D', State: 'None' }),
  ];

  trackByItems(index: number, task: Task): string {
    return task.TaskSn;
  }

  onReset(): void {
    this.tasks = [
      new Task({ TaskSn: '001', TaskName: '待辦事項 A', State: 'Finish' }),
      new Task({ TaskSn: '002', TaskName: '待辦事項 B', State: 'Doing' }),
      new Task({ TaskSn: '004', TaskName: '待辦事項 D', State: 'None' }),
      new Task({ TaskSn: '005', TaskName: '待辦事項 E', State: 'None' }),
    ];
  }

  component!: Type<any>;
  onSwitch(type: string) {
    switch (type) {
      case 'a':
        this.component = AComponent;
        break;
      case 'b':
        this.component = BComponent;
        break;
      case 'c':
        this.component = CComponent;
        break;
    }
  }
}
