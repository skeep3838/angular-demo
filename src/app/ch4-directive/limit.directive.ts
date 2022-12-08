import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appLimit]'
})
export class LimitDirective {

  constructor() { }
  @Input() appLimit!: string;

}
