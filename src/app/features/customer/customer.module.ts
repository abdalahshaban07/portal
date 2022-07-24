import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from '@shared/shared.module';
import { ControlComponent } from './components/control/control.component';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [ListComponent, ControlComponent],
  imports: [CommonModule, CustomerRoutingModule, SharedModule],
  providers: [CustomerService],
})
export class CustomerModule {}
