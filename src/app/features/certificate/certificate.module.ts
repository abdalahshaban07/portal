import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { ListComponent } from './components/list/list.component';
import { ControlComponent } from './components/control/control.component';
import { SharedModule } from '@shared/shared.module';
import { ViewComponent } from './components/view/view.component';
import { QuestionModule } from '@features/question/question.module';
import { ProjectModule } from '@features/project/project.module';

@NgModule({
  declarations: [ListComponent, ControlComponent, ViewComponent],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    SharedModule,
    QuestionModule,
    ProjectModule,
  ],
})
export class CertificateModule {}
