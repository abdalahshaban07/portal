import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientUserRoutingModule } from './client-user-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ListClientUserComponent } from './components/list/list.component';
import { ControlComponent } from './components/control/control.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [ListClientUserComponent, ControlComponent, ProfileComponent],
  imports: [CommonModule, ClientUserRoutingModule, SharedModule],
})
export class ClientUserModule {}
