import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOverHighlight]'
})
export class OverHighlightDirective {

  constructor(
    // 4.3.1 自訂變更原宿樣式的屬性指令（Attribute Directive)
  private elRef: ElementRef, // 注入ElementRef 取得此指令的宿主元素
  private renderer: Renderer2 //透過注入Renderer2 來針對 注入ElementRef 的 nativeElement屬性設定樣式
) { }

// 4.4.1 @HostListener 裝飾器-事件監聽
  @HostListener('mouseover')
  onMouseOver(){
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
  }

  @HostListener('mouseout')
  onMouseOut(){
    this.renderer.removeStyle(this.elRef.nativeElement, 'color');
  }



}
