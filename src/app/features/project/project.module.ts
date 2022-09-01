import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ListProjectComponent } from './components/list/list.component';
import { ControlComponent } from './components/control/control.component';
import { SharedModule } from '@shared/shared.module';
import { DetailsComponent } from './components/view/Components/details/details.component';
// import { AcceptanceHistoryComponent } from './components/view/Components/acceptance-history/acceptance-history.component';
// import { AddCommentComponent } from './components/view/Components/add-comment/add-comment.component';

@NgModule({
  declarations: [
    ListProjectComponent,
    ControlComponent,
    // DetailsComponent,
    // AcceptanceHistoryComponent,
    // AddCommentComponent,
  ],
  imports: [CommonModule, ProjectRoutingModule, SharedModule],
})
export class ProjectModule {}
