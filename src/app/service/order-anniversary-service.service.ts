import { Injectable } from '@angular/core';
import { OrderDetail } from '../module/order-detail';

@Injectable({
  providedIn: 'root'
})
export class OrderAnniversaryServiceService {

  constructor() { }

  message = '八折價格';
  details: OrderDetail[] = [];
  computeTotal(): number {
    // Array.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)
    // accumulator：經由個別 currentValue 加總的累計值
    // currentValue：Array 的個別 item
    // currentIndex：Array item 的索引
    // array：呼叫該 Array method 的陣列
    // initialValue：預設值，放在 function 的最後方，非必填
    // https://w3c.hexschool.com/blog/a2cb755f
    const total = this.details.map((d) => d.PurchaseCount * d.UnitPrice * 0.8) 
                              .reduce((acc, curr) => acc + curr, 0);
    return total * 0.9;
  }
}
