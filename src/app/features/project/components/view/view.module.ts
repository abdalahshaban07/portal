import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './Components/view/view.component';
import { DetailsComponent } from './Components/details/details.component';
import { AcceptanceHistoryComponent } from './Components/acceptance-history/acceptance-history.component';
import { AddCommentComponent } from './Components/add-comment/add-comment.component';

@NgModule({
  declarations: [
    ViewComponent,
    DetailsComponent,
    AcceptanceHistoryComponent,
    AddCommentComponent,
  ],
  imports: [CommonModule, ViewRoutingModule, SharedModule],
})
export class ViewModule {}
