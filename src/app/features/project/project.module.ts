import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ListComponent } from './components/list/list.component';
import { ControlComponent } from './components/control/control.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ListComponent, ControlComponent],
  imports: [CommonModule, ProjectRoutingModule, SharedModule],
  exports: [ListComponent],
})
export class ProjectModule {}
