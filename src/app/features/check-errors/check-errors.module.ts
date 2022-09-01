import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckErrorsRoutingModule } from './check-errors-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ListComponent } from './components/list/list.component';
@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [CommonModule, CheckErrorsRoutingModule, SharedModule],
})
export class CheckErrorsModule {}
