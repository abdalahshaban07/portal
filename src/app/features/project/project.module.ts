import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ListProjectComponent } from './components/list/list.component';
import { ControlComponent } from './components/control/control.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ListProjectComponent, ControlComponent],
  imports: [CommonModule, ProjectRoutingModule, SharedModule],
})
export class ProjectModule {}
