import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { ListCertificateComponent } from './components/list/list.component';
import { ControlComponent } from './components/control/control.component';
import { SharedModule } from '@shared/shared.module';
import { ViewComponent } from './components/view/view.component';


@NgModule({
  declarations: [ListCertificateComponent, ControlComponent, ViewComponent],
  imports: [CommonModule, CertificateRoutingModule, SharedModule],
})
export class CertificateModule {}
