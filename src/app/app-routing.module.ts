import { MainPageComponent } from './main-page/main-page.component';
import { TaskComponent } from './task/task.component';
import { Ch6ServiceComponent } from './ch6-service/ch6-service.component';
import { Ch5PipeComponent } from './ch5-pipe/ch5-pipe.component';
import { Ch4DirectiveComponent } from './ch4-directive/ch4-directive.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ch3ComponentComponent } from './ch3-component/ch3-component.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'ch3', component: Ch3ComponentComponent },
  { path: 'ch4', component: Ch4DirectiveComponent },
  { path: 'ch5', component: Ch5PipeComponent },
  { path: 'ch6', component:  Ch6ServiceComponent },
  { path: 'task', component:  TaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
