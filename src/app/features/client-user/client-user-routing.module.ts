import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasRoleaCtiveGuard } from '@core/guards/has-rolea-ctive.guard';
import { Roles } from '@shared/Enums/roles';
import { ControlComponent } from './components/control/control.component';
import { ListClientUserComponent } from './components/list/list.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ListClientUserComponent,
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
    path: 'profile',
    component: ProfileComponent,
    canActivate: [HasRoleaCtiveGuard],
    data: {
      role: [Roles.User],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientUserRoutingModule {}
