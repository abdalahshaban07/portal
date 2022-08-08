import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ResponseModel, ApiListResponse } from '@core/model/apiListResponse';
import { ResourceService } from '@core/services/resource.service';
import { Observable, map } from 'rxjs';
import { IClient } from '../models/client';
import { GetTotalSummary } from '../models/get.total';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends ResourceService<IClient> {
  getResourceUrl(): string {
    return 'Client';
  }
  constructor(private injector: Injector, private http: HttpClient) {
    super(injector);
  }
  transform(data: ResponseModel): GetTotalSummary {
    return data.data as GetTotalSummary;
  }

  getTotal(id: number | string): Observable<GetTotalSummary> {
    return this.http
      .get<ResponseModel>(`${this.APIUrl}/GetTotalSummary?id=${id}`)
      .pipe(map((res: ResponseModel) => this.transform(res)));
  }
}
