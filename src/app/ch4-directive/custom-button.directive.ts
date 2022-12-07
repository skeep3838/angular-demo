import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomButton]',
  exportAs: 'bButton'
})
export class CustomButtonDirective {

  constructor(
    // 4.3.1 自訂變更原宿樣式的屬性指令（Attribute Directive)
    private elRef: ElementRef, // 注入ElementRef 取得此指令的宿主元素
    private renderer: Renderer2 //透過注入Renderer2 來針對 注入ElementRef 的 nativeElement屬性設定樣式
  ) { }
  
  ngOnInit():void{
    this.renderer.setStyle(this.elRef.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', '14pt');
    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', 'bold');
 
  }

  changeColor(color: string): void {
    this.renderer.setStyle(
      this.elRef.nativeElement, 'color', color
    );
  }

}
