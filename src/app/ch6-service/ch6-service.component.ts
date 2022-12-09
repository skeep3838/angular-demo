import { OrderDetail } from './../module/order-detail';
import { FontSizeService } from './../service/font-size.service';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-ch6-service',
  templateUrl: './ch6-service.component.html',
  styleUrls: ['./ch6-service.component.css']
})
export class Ch6ServiceComponent implements OnInit {

  total = 0;
  constructor(
    public fontSizeService: FontSizeService,
    public orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderService.details= [
    new OrderDetail({PurchaseCount: 20, UnitPrice: 30 }),
    new OrderDetail({PurchaseCount: 5, UnitPrice: 10 })
    ];
    this.total = this.orderService.computeTotal();
  }

  onSetFontSize(value: number): void{
    this.fontSizeService.size += value;
  }

}