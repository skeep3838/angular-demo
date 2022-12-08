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
    LimitCaseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
