import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './components/control/control.component';
import { ListComponent } from './components/list/list.component';
import { ReplyComponent } from './components/reply/reply.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionRoutingModule {}
