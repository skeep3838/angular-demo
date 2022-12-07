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

@NgModule({
  declarations: [
    AppComponent,
    Ch3ComponentComponent,
    Ch4DirectiveComponent,
    AComponent,
    BComponent,
    CComponent,
    CustomButtonDirective
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
