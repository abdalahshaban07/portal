import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './components/control/control.component';
import { listQuestionComponent } from './components/list/list.component';
import { ReplyComponent } from './components/reply/reply.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {
    path: '',
    component: listQuestionComponent,
  },
  {
    path: 'create',
    component: ControlComponent,
  },
  {
    path: 'edit/:id',
    component: ControlComponent,
  },
  {
    path: 'reply/:id',
    component: ReplyComponent,
  },
  {
    path: 'view/:id',
    component: ViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionRoutingModule {}
