import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasRoleaCtiveGuard } from '@core/guards/has-rolea-ctive.guard';
import { Roles } from '@shared/Enums/roles';
import { ControlComponent } from './components/control/control.component';
import { DetailsComponent } from './components/details/details.component';
import { ListProjectComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {
    path: '',
    component: ListProjectComponent,
    data: {
      breadcrumb: {
        label: 'Projects',
      },
    },
  },
  {
    path: 'create',
    component: ControlComponent,
    data: {
      breadcrumb: {
        alias: '@Create',
      },
    },
  },
  {
    path: 'edit/:id',
    component: ControlComponent,
    data: {
      breadcrumb: {
        alias: '@Edit',
      },
    },
  },
  {
    path: 'view/:id',
    component: ViewComponent,
    data: {
      breadcrumb: {
        alias: 'View',
      },
    },
  },
  {
    path: 'view/:idd/details/:id',
    component: DetailsComponent,
    canActivate: [HasRoleaCtiveGuard],
    data: {
      role: [Roles.User, Roles.Admin],
      breadcrumb: {
        alias: 'details',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
