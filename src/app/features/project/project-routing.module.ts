import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasRoleaCtiveGuard } from '@core/guards/has-rolea-ctive.guard';
import { Roles } from '@shared/Enums/roles';
import { ControlComponent } from './components/control/control.component';
import { DetailsComponent } from './components/view/Components/details/details.component';
import { ListProjectComponent } from './components/list/list.component';

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
    loadChildren: () =>
      import('./components/view/view.module').then((m) => m.ViewModule),
    data: {
      breadcrumb: {
        alias: 'View',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
