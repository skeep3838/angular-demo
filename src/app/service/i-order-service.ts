import { InjectionToken } from "@angular/core";
import { OrderDetail } from "../module/order-detail";

export const ORDER_SERVICE = new InjectionToken<IOrderService>('Order Service');
export interface IOrderService {
    details: OrderDetail[];
    computeTotal(): number;
    message: string;
}
