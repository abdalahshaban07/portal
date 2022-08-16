import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { WelcomeComponent } from '../../shared/components/welcome/welcome.component';
import { SharedModule } from '@shared/shared.module';
import { JoinedCountComponent } from './components/joined-count/joined-count.component';
import { MissingEvidencesComponent } from './components/missing-evidences/missing-evidences.component';
import { MissingEvidencesTableComponent } from './components/missing-evidences-table/missing-evidences-table.component';

@NgModule({
  declarations: [DashboardComponent, WelcomeComponent, JoinedCountComponent, MissingEvidencesComponent, MissingEvidencesTableComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
