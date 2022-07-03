import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { ListComponent } from './components/list/list.component';
import { ControlComponent } from './components/control/control.component';
import { SharedModule } from '@shared/shared.module';
import { ReplyComponent } from './components/reply/reply.component';

@NgModule({
  declarations: [ListComponent, ControlComponent, ReplyComponent],
  imports: [CommonModule, QuestionRoutingModule, SharedModule],
})
export class QuestionModule {}
