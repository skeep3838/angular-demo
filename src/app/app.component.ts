import { ORDER_SERVICE, IOrderService } from './service/i-order-service';
import { Task } from './module/task';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, ViewChild, ElementRef, OnInit, Inject } from '@angular/core';
import { Ch3ComponentComponent } from './ch3-component/ch3-component.component';
import { FontSizeService } from './service/font-size.service';
import { OrderService } from './service/order.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    public fontSizeService: FontSizeService,
    public orderService: OrderService
    ){}
  
  ngOnInit(): void {
    this.fontSizeService.size=10
  }
  // 文字插值
  title = 'angular-demo';
  // 父元件
  fontsizeFather = 20;

  onSizeChange(size: number): void {
    this.fontsizeFather = size;
  }

// 父元件在城史內使用子元件的屬性與方法，
// 需利用 @ViewChild 裝飾器將子元件注入服元件內

  // 參考變數名稱
  @ViewChild('fontsize') fontsize2!: Ch3ComponentComponent;
  // 指定元件名稱
  @ViewChild(Ch3ComponentComponent) ch3ComponentComponent!: Ch3ComponentComponent;
  // HTML 元素實體
  @ViewChild('firstDiv') divElement!: ElementRef;

  ngAfterViewInit():void{
    console.log("ch3-component 6. ngAfterViewInit ##");
  }

  ngAfterViewChecked():void{
    console.log("ch3-component 7. ngAfterViewChecked ##");
    console.log(this.fontsize2);
    console.log(this.ch3ComponentComponent);
    console.log(this.divElement);
  }

  // tasks: Task[] = [
  //   new Task({ TaskSn: '001', TaskName: '待辦事項 A', State: 'Finish' }),
  //   new Task({ TaskSn: '002', TaskName: '待辦事項 B', State: 'Doing' }),
  //   new Task({ TaskSn: '003', TaskName: '待辦事項 C', State: 'None' }),
  //   new Task({ TaskSn: '004', TaskName: '待辦事項 D', State: 'None' }),
  // ];

  // trackByItems(index: number, task: Task): string {
  //   return task.TaskSn;
  // }

  // onReset(): void {
  //   this.tasks = [
  //     new Task({ TaskSn: '001', TaskName: '待辦事項 A', State: 'Finish' }),
  //     new Task({ TaskSn: '002', TaskName: '待辦事項 B', State: 'Doing' }),
  //     new Task({ TaskSn: '004', TaskName: '待辦事項 D', State: 'None' }),
  //     new Task({ TaskSn: '005', TaskName: '待辦事項 E', State: 'None' }),
  //   ];
  // }
}
