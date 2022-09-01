import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ApiListResponse, ResponseModel } from '@core/model/apiListResponse';
import { ResourceService } from '@core/services/resource.service';
import { paginatorForHttp } from '@shared/configs/paginator';
import { map, Observable, of } from 'rxjs';
import { ICertificate } from '../models/certificate.model';
import { GetTotalSummary } from '../models/get-total-summary';

@Injectable({
  providedIn: 'root',
})
export class CertificateService extends ResourceService<ICertificate> {
  getResourceUrl(): string {
    return 'Certficate';
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

  getItemBy(
    paramsOptions: {},
    api: string
  ): Observable<ApiListResponse<ICertificate>> {
    let params = new HttpParams({ fromObject: paramsOptions }).toString();
    return this.injector
      .get(HttpClient)
      .get<ApiListResponse<ICertificate>>(`${this.APIUrl}/${api}?${params}`);
  }
}
