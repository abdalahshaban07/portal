import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@features/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
  {
    path: 'check-errors',
    loadChildren: () =>
      import('@features/check-errors/check-errors.module').then(
        (m) => m.CheckErrorsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
