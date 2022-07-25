import { Injectable, Injector } from '@angular/core';
import { ResourceService } from '@core/services/resource.service';
import { ICategory } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends ResourceService<ICategory> {
  getResourceUrl(): string {
    return 'Category';
  }
  constructor(private injector: Injector) {
    super(injector);
  }
}
