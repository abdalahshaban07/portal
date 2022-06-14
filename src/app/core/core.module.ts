import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { SharedModule } from '@shared/shared.module';
import { FooterComponent } from './components/layout/footer/footer.component';
import { WelcomeComponent } from './components/layout/welcome/welcome.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, WelcomeComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, FooterComponent],
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
