import { Roles } from '@shared/Enums/roles';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './components/control/control.component';
import { DetailsComponent } from '../project/components/details/details.component';
import { listQuestionComponent } from './components/list/list.component';
import { ReplyComponent } from './components/reply/reply.component';
import { ViewComponent } from './components/view/view.component';
import { HasRoleaCtiveGuard } from '@core/guards/has-rolea-ctive.guard';

const routes: Routes = [
  {
    path: '',
    component: listQuestionComponent,
    canActivate: [HasRoleaCtiveGuard],
    data: {
      role: [Roles.Admin],
    },
  },
  {
    path: 'create',
    component: ControlComponent,
    canActivate: [HasRoleaCtiveGuard],
    data: {
      role: [Roles.Admin],
    },
  },
  {
    path: 'edit/:id',
    component: ControlComponent,
    canActivate: [HasRoleaCtiveGuard],
    data: {
      role: [Roles.Admin],
    },
  },
  {
    path: 'reply/:id',
    component: ReplyComponent,
    canActivate: [HasRoleaCtiveGuard],
    data: {
      role: [Roles.Admin],
    },
  },
  {
    path: 'view/:id',
    component: ViewComponent,
    canActivate: [HasRoleaCtiveGuard],
    data: {
      role: [Roles.Admin],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionRoutingModule {}
