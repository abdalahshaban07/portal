import { Injectable, Injector } from '@angular/core';
import { ResourceService } from '@core/services/resource.service';
import { IClient } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends ResourceService<IClient> {
  getResourceUrl(): string {
    return 'Client';
  }
  constructor(private injector: Injector) {
    super(injector);
  }
}
