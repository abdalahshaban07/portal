import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { ControlComponent } from './components/control/control.component';

@NgModule({
  declarations: [
    ListComponent,
    ControlComponent
  ],
  imports: [CommonModule, ClientRoutingModule, SharedModule],
})
export class ClientModule {}
