import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './components/control/control.component';
import { ListCertificateComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {
    path: '',
    component: ListCertificateComponent,
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
    path: 'view/:id',
    component: ViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateRoutingModule {}
