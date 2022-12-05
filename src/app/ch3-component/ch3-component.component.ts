import { Component, OnInit, Input, Attribute, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ch3-component',
  templateUrl: './ch3-component.component.html',
  styleUrls: ['./ch3-component.component.css']
})
export class Ch3ComponentComponent implements OnInit {

  constructor(@Attribute('color') public color: string) { }

  name = 'Angular';
  purchaseCount = 10;
  unitPrice = 200;
  fontsize = 12;
  fontColor = "red";
  fontSizeType = "middle";

  ngOnInit(): void {
  }

  // 3.3.1 元間屬性允許從父元件接收資料
  @Input() size!: number;
  private _sizePriv!: number;

  @Input()
  set sizePriv(sizePriv: string) {
    this._sizePriv = +sizePriv;
  }

  @Output() sizeChange = new EventEmitter<number>();

  get sizePriv(){
    return this._sizePriv.toString();
  }

  // 3.2.2 事件繫結
  onSetFontSize(value: number): void {
    this.fontsize += value;
    this.sizeChange.emit(this.fontsize);
  }

  // 3.2.5 類別繫結
  get fontClass(): string {
    return `${this.fontSizeType}-font`;
  }

}
