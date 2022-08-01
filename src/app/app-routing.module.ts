import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from '@core/guards/authenticated.guard';
import { HasRoleLoadGuard } from '@core/guards/has-role-load.guard';
import { NonAuthenticatedGuard } from '@core/guards/non-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadChildren: () =>
      import('@features/login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('@features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canLoad: [AuthenticatedGuard],
  },

  {
    path: 'check-errors',
    loadChildren: () =>
      import('@features/check-errors/check-errors.module').then(
        (m) => m.CheckErrorsModule
      ),
    canLoad: [AuthenticatedGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('@features/admin/admin.module').then((m) => m.AdminModule),
    canLoad: [AuthenticatedGuard],
  },
  {
    path: 'category',
    loadChildren: () =>
      import('@features/category/category.module').then(
        (m) => m.CategoryModule
      ),
    canLoad: [AuthenticatedGuard],
  },
  {
    path: 'client',
    loadChildren: () =>
      import('@features/client/client.module').then((m) => m.ClientModule),
    canLoad: [AuthenticatedGuard],
  },
  {
    path: 'client-user',
    loadChildren: () =>
      import('@features/client-user/client-user.module').then(
        (m) => m.ClientUserModule
      ),
    canLoad: [AuthenticatedGuard],
  },

  {
    path: 'certificate',
    loadChildren: () =>
      import('@features/certificate/certificate.module').then(
        (m) => m.CertificateModule
      ),
    canLoad: [AuthenticatedGuard, HasRoleLoadGuard],
    data: {
      role: 'Admin',
    },
  },
  {
    path: 'project',
    loadChildren: () =>
      import('@features/project/project.module').then((m) => m.ProjectModule),
    canLoad: [AuthenticatedGuard],
  },

  {
    path: 'question',
    loadChildren: () =>
      import('@features/question/question.module').then(
        (m) => m.QuestionModule
      ),
    canLoad: [AuthenticatedGuard],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
