import { Injectable, Injector } from '@angular/core';
import { ResourceService } from '@core/services/resource.service';
import { IQuestion } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class QuesationService extends ResourceService<IQuestion> {
  getResourceUrl(): string {
    return 'Quesation';
  }
  constructor(private injector: Injector) {
    super(injector);
  }
}
