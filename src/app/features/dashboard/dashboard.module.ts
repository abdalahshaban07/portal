import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { WelcomeComponent } from '../../shared/components/welcome/welcome.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, WelcomeComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
