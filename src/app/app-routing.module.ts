import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { Page404Component } from '@core/components/page404/page404.component';
import { AuthenticatedGuard } from '@core/guards/authenticated.guard';
import { HasRoleLoadGuard } from '@core/guards/has-role-load.guard';
import { Roles } from '@shared/Enums/roles';

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
    data: {
      role: [Roles.User, Roles.Admin],
    },
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('@features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    data: {
      role: [Roles.User, Roles.Admin],
      breadcrumb: {
        info: { myData: { icon: 'home', iconType: 'material' } },
      },
    },
    canLoad: [AuthenticatedGuard],
  },

  {
    path: 'check-errors',
    loadChildren: () =>
      import('@features/check-errors/check-errors.module').then(
        (m) => m.CheckErrorsModule
      ),
    data: {
      role: [Roles.User],
      breadcrumb: {
        alias: 'check-errors',
      },
    },
    canLoad: [AuthenticatedGuard, HasRoleLoadGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('@features/admin/admin.module').then((m) => m.AdminModule),
    data: {
      role: [Roles.Admin],
      breadcrumb: {
        alias: 'admin',
      },
    },
    canLoad: [AuthenticatedGuard, HasRoleLoadGuard],
  },
  {
    path: 'category',
    loadChildren: () =>
      import('@features/category/category.module').then(
        (m) => m.CategoryModule
      ),
    data: {
      role: [Roles.Admin],
      breadcrumb: {
        alias: 'category',
      },
    },
    canLoad: [AuthenticatedGuard, HasRoleLoadGuard],
  },
  {
    path: 'client',
    loadChildren: () =>
      import('@features/client/client.module').then((m) => m.ClientModule),
    data: {
      role: [Roles.Admin],
      breadcrumb: {
        alias: 'client',
      },
    },
    canLoad: [AuthenticatedGuard, HasRoleLoadGuard],
  },
  {
    path: 'client-user',
    loadChildren: () =>
      import('@features/client-user/client-user.module').then(
        (m) => m.ClientUserModule
      ),
    data: {
      role: [Roles.User, Roles.Admin],
    },
    canLoad: [AuthenticatedGuard, HasRoleLoadGuard],
  },

  {
    path: 'certificate',
    loadChildren: () =>
      import('@features/certificate/certificate.module').then(
        (m) => m.CertificateModule
      ),
    canLoad: [AuthenticatedGuard, HasRoleLoadGuard],
    data: {
      role: [Roles.Admin],
    },
  },
  {
    path: 'project',
    loadChildren: () =>
      import('@features/project/project.module').then((m) => m.ProjectModule),
    data: {
      role: [Roles.User, Roles.Admin],
    },
    canLoad: [AuthenticatedGuard, HasRoleLoadGuard],
  },

  {
    path: 'question',
    loadChildren: () =>
      import('@features/question/question.module').then(
        (m) => m.QuestionModule
      ),
    data: {
      role: [Roles.User, Roles.Admin],
      breadcrumb: {
        label: 'question',
      },
    },
    canLoad: [AuthenticatedGuard, HasRoleLoadGuard],
  },

  {
    path: '**',
    component: Page404Component,
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
