import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from '@shared/shared.module';
import { ControlComponent } from './components/control/control.component';

@NgModule({
  declarations: [ListComponent, ControlComponent],
  imports: [CommonModule, CustomerRoutingModule, SharedModule],
})
export class CustomerModule {}
