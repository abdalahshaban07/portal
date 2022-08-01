import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './components/control/control.component';
import { ListProjectComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListProjectComponent,
  },
  {
    path: 'create',
    component: ControlComponent,
  },
  {
    path: 'edit/:id',
    component: ControlComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
