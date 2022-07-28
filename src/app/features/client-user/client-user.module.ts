import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientUserRoutingModule } from './client-user-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { ControlComponent } from './components/control/control.component';

@NgModule({
  declarations: [
    ListComponent,
    ControlComponent
  ],
  imports: [CommonModule, ClientUserRoutingModule, SharedModule],
})
export class ClientUserModule {}