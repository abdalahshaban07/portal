import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ControlComponent } from './components/control/control.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ControlComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule],
})
export class LoginModule {}
