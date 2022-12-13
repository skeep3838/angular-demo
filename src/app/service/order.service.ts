import { OrderDetail } from './../module/order-detail';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  message = '一般價格';
  details: OrderDetail[] = [];
  computeTotal(): number {
    console.log("OrderService"+this.details.map((d)=>d.PurchaseCount * d.UnitPrice)
    .reduce((act, curr) => act + curr, 0));
    return this.details.map((d)=>d.PurchaseCount * d.UnitPrice)
                        .reduce((act, curr) => act + curr, 0);
  } 
}
