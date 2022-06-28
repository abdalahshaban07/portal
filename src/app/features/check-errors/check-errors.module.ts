import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckErrorsRoutingModule } from './check-errors-routing.module';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from '@shared/shared.module';
import { DetailsComponent } from './components/details/details.component';
import { AcceptanceHistoryComponent } from './components/acceptance-history/acceptance-history.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    AcceptanceHistoryComponent,
    AddCommentComponent,
  ],
  imports: [CommonModule, CheckErrorsRoutingModule, SharedModule],
})
export class CheckErrorsModule {}
