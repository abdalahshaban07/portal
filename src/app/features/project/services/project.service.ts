import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ApiListResponse, ResponseModel } from '@core/model/apiListResponse';
import { ResourceService } from '@core/services/resource.service';
import { environment } from '@env';
import { selectMenuOptions } from '@shared/components/dynamic-form-field/dynamic-form-field.model';
import { paginatorForHttp } from '@shared/configs/paginator';
import { map, Observable, tap } from 'rxjs';
import { GetTotalSummary } from '../models/get-total';
import { IProject } from '../models/project';

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

  GetProjectQuesationList() {
    // /Project/GetProjectQuesationList?projectId=1&pageNum=1&pagSize=10
  }

  GetProjectQuesationWithPercentageList() {
    // /Project/GetProjectQuesationWithPercentageList?pageNum=1&pagSize=10
  }

  AcceptProjectQuesation() {
    // /Project/AcceptProjectQuesation?projectId=1&quesationId=10
  }

  getItemBy(
    pageNum: number = paginatorForHttp.pageNumber,
    pagSize: number = paginatorForHttp.pageSize,
    id: number | string,
    api: string
  ): Observable<ApiListResponse<IProject>> {
    let params = new HttpParams()
      .set('id', id.toString())
      .set('pageNum', pageNum.toString())
      .set('pagSize', pagSize.toString());
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
    console.log(id);
    return this.http.post<any>(
      `${this.APIUrl}/AcceptProjectQuesation?id=${id}`,
      id
    );
  }
}
