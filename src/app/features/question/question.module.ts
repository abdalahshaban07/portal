import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { listQuestionComponent } from './components/list/list.component';
import { ControlComponent } from './components/control/control.component';
import { SharedModule } from '@shared/shared.module';
import { ReplyComponent } from './components/reply/reply.component';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [
    listQuestionComponent,
    ControlComponent,
    ReplyComponent,
    ViewComponent,
  ],
  imports: [CommonModule, QuestionRoutingModule, SharedModule],
})
export class QuestionModule {}
