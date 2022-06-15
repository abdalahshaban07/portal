import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, CustomerRoutingModule, SharedModule],
})
export class CustomerModule {}
