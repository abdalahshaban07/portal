import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ListProjectComponent } from './components/list/list.component';
import { ControlComponent } from './components/control/control.component';
import { SharedModule } from '@shared/shared.module';
import { ViewComponent } from './components/view/view.component';
import { DetailsComponent } from './components/details/details.component';
import { AcceptanceHistoryComponent } from './components/acceptance-history/acceptance-history.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';

@NgModule({
  declarations: [
    ListProjectComponent,
    ControlComponent,
    ViewComponent,
    DetailsComponent,
    AcceptanceHistoryComponent,
    AddCommentComponent,
  ],
  imports: [CommonModule, ProjectRoutingModule, SharedModule],
})
export class ProjectModule {}
