import { LimitDirective } from './limit.directive';
import { Directive, Host, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLimitCase]'
})
export class LimitCaseDirective {

  constructor(
    //表示可以將一個或多個檢視附著到元件中的容器。
    private ViewContainer: ViewContainerRef,

    // 透過把一個指令放在 <ng-template> 元素（或一個帶 * 字首的指令）上，可以存取 TemplateRef 的例項。 
    // 內嵌檢視的 TemplateRef 例項會以 TemplateRef 作為令牌，注入到該指令的建構函式中。
    private templsteRef: TemplateRef<Object>,
    // 用於取得 LimitDirective 實體
    // @Host 參考6.5.2
    @Host() private limit: LimitDirective
  ) { }

  private hasView = false;
  @Input()
  set appLimitCase(value: string) {
    const condition = value === this.limit.appLimit;
    if (condition && !this.hasView) {
      this.ViewContainer.createEmbeddedView(this.templsteRef);
      this.hasView = true;
    }else if(!condition && this.hasView){
      this.ViewContainer.clear();
      this.hasView = false;
    }
  }

}
