import { Injectable, Injector } from '@angular/core';
import { ResourceService } from '@core/services/resource.service';
import { IAdmin } from '../models/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService extends ResourceService<IAdmin> {
  getResourceUrl(): string {
    return 'Consultant';
  }
  constructor(private injector: Injector) {
    super(injector);
  }
}
