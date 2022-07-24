import { Injectable, Injector } from '@angular/core';
import { ResourceService } from '@core/services/resource.service';
import { ICertificate } from '../models/certificate.model';

@Injectable({
  providedIn: 'root',
})
export class CertificateService extends ResourceService<ICertificate> {
  getResourceUrl(): string {
    return 'Certficate';
  }
  constructor(private injector: Injector) {
    super(injector);
  }
}
