import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ch3ComponentComponent } from './ch3-component/ch3-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
