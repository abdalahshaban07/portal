import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ResponseModel } from '@core/model/apiListResponse';
import { ResourceService } from '@core/services/resource.service';
import { GetTotalSummary } from '@features/dashboard/models/get-total';
import { Observable, map } from 'rxjs';
import { IAdmin } from '../models/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService extends ResourceService<IAdmin> {
  getResourceUrl(): string {
    return 'Consultant';
  }
  constructor(private injector: Injector, private http: HttpClient) {
    super(injector);
  }

  transform(data: ResponseModel): GetTotalSummary {
    return data.data as GetTotalSummary;
  }

  getTotal(): Observable<GetTotalSummary> {
    return this.http
      .get<ResponseModel>(`${this.APIUrl}/GetTotalSummary`)
      .pipe(map((res: ResponseModel) => this.transform(res)));
  }
}
