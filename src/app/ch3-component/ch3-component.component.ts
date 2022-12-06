import { Component, OnInit, Input, Attribute, Output, EventEmitter, OnChanges, SimpleChanges, ContentChild, ElementRef, ContentChildren, QueryList} from '@angular/core';

@Component({
  selector: 'app-ch3-component',
  templateUrl: './ch3-component.component.html',
  styleUrls: ['./ch3-component.component.css']
})

// 3.6 元件樣式先跳過 - 封裝模式設定，特殊選擇器
export class Ch3ComponentComponent implements OnInit, OnChanges {

  constructor(@Attribute('color') public color: string) { }

  name = 'Angular';
  purchaseCount = 10;
  unitPrice = 200;
  fontsize = 12;
  fontColor = "red";
  fontSizeType = "middle";

  // 3.3.1 元間屬性允許從父元件接收資料
  @Input() size!: number;
  @Input() font!: number;

  private _sizePriv!: number;

  @Input()
  set sizePriv(sizePriv: string) {
    this._sizePriv = +sizePriv;
  }

  @Output() sizeChange = new EventEmitter<number>();
  @Output() sizeChangeStr = new EventEmitter<string>();

  get sizePriv() {
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

  // SimpleChanges 可以確認是否首次變更 - 待確認
  ngOnChanges(changes: SimpleChanges): void {
    // 如果觀察的值變更後不會改道Component內的參考位置
    // 則不會觸發ngChanges
    console.log(changes['font']);

    console.log("ch3-component 1. ngOnChanges ##");
    //  if (changes['size']) {
    //   console.log("size: "+ this.size);
    //   this.sizeChangeStr.emit(`${changes['size'].currentValue}pt`)
    // }
  }

  // 元件初始化，整個生命週期只會呼叫一次
  ngOnInit(): void {
    console.log("ch3-component 2. ngOnInit ##");
  }

  // 如果觀察的值變更後不會改道Component內的參考位置
  // 則不會觸發ngChanges
  // 這種狀況可以使用ngDoCheck 檢查邏輯
  ngDoCheck() {
    console.log("ch3-component 3. ngDoCheck ##");
  }

  // 單個元件實體
  @ContentChild('title') titleElement!: ElementRef;
  // 多個元件實體
  @ContentChildren('button', { descendants: true }) bottonelements!: QueryList<ElementRef>;
  // 加入@ContentChild 裝飾器屬性，會在 ngAfterContentInit 依條件取得元件實體
  // 並在 ngDoCheck 後觸發，只會觸發一次
  ngAfterContentInit() {
    console.log("ch3-component 4. ngAfterContentInit ##");
    console.log(this.titleElement);
  }

  // 變更檢測時，在 ngDoCheck 後觸發
  ngAfterContentChecked() {
    console.log("ch3-component 5. ngAfterContentChecked ##");
    console.log(this.titleElement);
    console.log(this.bottonelements);
  }

//   使用者離開應用程式會觸發 ngOnDestory ，
//   釋放不會被自動收回的垃圾，避免記憶體洩漏風險，包含：
// 1. DOM 事件或可監控物件的取消訂閱
// 2. interval 計時器的停止
// 3. 「取消註冊」此指令所註冊過的callback方法
  ngOnDestory(){
    console.log("ch3-component 8. ngOnDestory ##");
  }

}
