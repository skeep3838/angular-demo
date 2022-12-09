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
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // 6.2.1 利用 useClass 抽象服務
  // 利用 useClass 直接抽換原本的訂單服務
  providers: [{provide: OrderService, useClass: OrderDiscontService}],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
