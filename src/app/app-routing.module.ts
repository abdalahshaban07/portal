import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasRoleGuard } from '@core/guards/has-role.guard';
import { IsAuthenticatedGuard } from '@core/guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('@features/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
  {
    path: 'questions',
    loadChildren: () =>
      import('@features/question/question.module').then(
        (m) => m.QuestionModule
      ),
  },
  {
    path: 'check-errors',
    loadChildren: () =>
      import('@features/check-errors/check-errors.module').then(
        (m) => m.CheckErrorsModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('@features/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'certificate',
    loadChildren: () =>
      import('@features/certificate/certificate.module').then(
        (m) => m.CertificateModule
      ),
    canActivate: [HasRoleGuard],
    data: {
      role: 'Admin',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
