import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { SharedModule } from '@shared/shared.module';
import { FooterComponent } from './components/layout/footer/footer.component';
import { authInterceptorProviders } from './interceptors/auth.interceptor';
import { httpErrorInterceptorProviders } from './interceptors/http-error.interceptor';
import { retryInterceptorProviders } from './interceptors/retry.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { Page404Component } from './components/page404/page404.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, Page404Component],
  imports: [CommonModule, SharedModule, ToastrModule.forRoot()],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    authInterceptorProviders,
    httpErrorInterceptorProviders,
    retryInterceptorProviders,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
