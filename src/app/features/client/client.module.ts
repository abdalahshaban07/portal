import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ListClientComponent } from './components/list/list.component';
import { ControlComponent } from './components/control/control.component';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [
    ListClientComponent,
    ControlComponent,
    ViewComponent
  ],
  imports: [CommonModule, ClientRoutingModule, SharedModule],
})
export class ClientModule {}
