import { ORDER_SERVICE } from './service/i-order-service';
import { OrderAnniversaryServiceService } from './service/order-anniversary-service.service';
import { OrderDiscontService } from './service/order-discont.service';
import { OrderService } from './service/order.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ch3ComponentComponent } from './ch3-component/ch3-component.component';
import { Ch4DirectiveComponent } from './ch4-directive/ch4-directive.component';
import { AComponent } from './ch4-directive/a/a.component';
import { BComponent } from './ch4-directive/b/b.component';
import { CComponent } from './ch4-directive/c/c.component';
import { CustomButtonDirective } from './ch4-directive/custom-button.directive';
import { ButtonConfirmDirective } from './ch4-directive/button-confirm.directive';
import { LimitDirective } from './ch4-directive/limit.directive';
import { LimitCaseDirective } from './ch4-directive/limit-case.directive';
import { OverHighlightDirective } from './ch4-directive/over-highlight.directive';
import { Ch5PipeComponent } from './ch5-pipe/ch5-pipe.component';
import { OrderByPipe } from './ch5-pipe/order-by.pipe';
import { Ch6ServiceComponent } from './ch6-service/ch6-service.component';
import { OtherComponent } from './other/other.component';
import { TaskComponent } from './task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    Ch3ComponentComponent,
    Ch4DirectiveComponent,
    AComponent,
    BComponent,
    CComponent,
    CustomButtonDirective,
    ButtonConfirmDirective,
    LimitDirective,
    LimitCaseDirective,
    OverHighlightDirective,
    Ch5PipeComponent,
    OrderByPipe,
    Ch6ServiceComponent,
    OtherComponent,
    TaskComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // 6.2.1 ?????? useClass ????????????
  // ?????? useClass ?????????????????????????????????
  // providers: [{ provide: OrderService, useClass: OrderDiscontService }, {provide: 'LoadingPath', useValue:'assets/loading.gif'}],

  // 6.2.2 ?????? useExisting ????????????
  // ??????useExisting ????????????????????????????????????????????????????????????????????????????????????????????????????????????
  // providers: [{provide: OrderService, useExisting: OrderDiscontService}, OrderDiscontService],

  // 6.2.3 ?????? useValue ????????????
  // useValue ????????????????????????
  // providers: [{provide: OrderService, useValue: {computeTotal: () => 100}}],

  // 6.2.4 ?????? useFactory ????????????
  // providers:
  //   [{
  //     provide: OrderService,
  //     useFactory: () => {
  //       return (new Date()).getMonth() === 11
  //         ? new OrderAnniversaryServiceService() : new OrderService();
  //     }
  //   }],

  // 6.3.3 InjectionToken ??????
  providers: [{ provide: ORDER_SERVICE, useClass: OrderService }, { provide: 'LoadingPath', useValue: 'assets/loading.gif' }],


  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
