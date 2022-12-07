import { Directive, Input, Output,EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonConfirm]'
})
export class ButtonConfirmDirective {

  constructor() { }

  @Input('appButtonConfirm') message!: string;
  @Output() confirm = new EventEmitter<void>();

  // 4.3.2 用於擷取按鈕事件
  @HostListener('click', ['$event'])
  clickEvent(event: Event){
    event.preventDefault();
    event.stopPropagation();
    if(confirm(this.message)){
      this.confirm.emit();
    }
  }

}
