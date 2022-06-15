import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckErrorsRoutingModule } from './check-errors-routing.module';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, CheckErrorsRoutingModule, SharedModule],
})
export class CheckErrorsModule {}
