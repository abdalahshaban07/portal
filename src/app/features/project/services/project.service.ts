import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import {
  ApiListResponse,
  ResponseModel,
  ResponseModelWithGeneric,
} from '@core/model/apiListResponse';
import { ResourceService } from '@core/services/resource.service';
import { environment } from '@env';
import { selectMenuOptions } from '@shared/components/dynamic-form-field/dynamic-form-field.model';
import { paginatorForHttp } from '@shared/configs/paginator';
import { map, Observable, tap } from 'rxjs';
import { GetTotalSummary } from '../models/get-total';
import { IProject } from '../models/project';
import { IProjectPercentage } from '../models/projectPercentage';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends ResourceService<IProject> {
  getResourceUrl(): string {
    return 'Project';
  }
  constructor(private injector: Injector, private http: HttpClient) {
    super(injector);
  }

  getItemBy(
    paramsOptions: {},
    api: string
  ): Observable<ApiListResponse<IProject>> {
    let params = new HttpParams({ fromObject: paramsOptions }).toString();
    return this.injector
      .get(HttpClient)
      .get<ApiListResponse<IProject>>(
        `${this.APIUrl}/${api}?${params.toString()}`
      );
  }

  transform(data: ResponseModel): GetTotalSummary {
    return data.data as GetTotalSummary;
  }

  getTotal(id: number | string): Observable<GetTotalSummary> {
    return this.http
      .get<ResponseModel>(`${this.APIUrl}/GetTotalSummary?id=${id}`)
      .pipe(map((res: ResponseModel) => this.transform(res)));
  }

  acceptQuestion(id: number | string): Observable<any> {
    return this.http.post<any>(
      `${this.APIUrl}/AcceptProjectQuesation?id=${id}`,
      id
    );
  }

  getCategoryWithPercentageByProjectId(
    id: number | string
  ): Observable<ResponseModelWithGeneric<IProjectPercentage>> {
    return this.http.get<ResponseModelWithGeneric<IProjectPercentage>>(
      `${this.APIUrl}/GetProjectCategoryTotalSummary?id=${id}`
    );
  }
}
