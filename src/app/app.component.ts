import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

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
}
