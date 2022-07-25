import { Injectable, Injector } from '@angular/core';
import { ResourceService } from '@core/services/resource.service';
import { IClient } from '@features/client/models/client';
import { ClientService } from '@features/client/services/client.service';
import { selectMenuOptions } from '@shared/components/dynamic-form-field/dynamic-form-field.model';
import { map } from 'rxjs';
import { IClientUser } from '../models/client-user';

@Injectable({
  providedIn: 'root',
})
export class ClientUserService extends ResourceService<IClientUser> {
  client!: ClientService;

  getResourceUrl(): string {
    return 'ClientUser';
  }
  constructor(private injector: Injector) {
    super(injector);
    this.client = this.injector.get(ClientService);
  }

  transform(entity: IClient): selectMenuOptions {
    return {
      key: entity.id,
      value: entity.name,
    };
  }

  getClients() {
    return this.client
      .getList()
      .pipe(
        map((clients) =>
          clients.data.dataList.map((client) => this.transform(client))
        )
      );
  }
}
