import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListComponent } from './components/list/list.component';
import { ControlComponent } from './components/control/control.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ListComponent, ControlComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
