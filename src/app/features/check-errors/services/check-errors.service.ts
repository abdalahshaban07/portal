import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ApiListResponse } from '@core/model/apiListResponse';
import { ResourceService } from '@core/services/resource.service';
import { IQuestion } from '@features/question/models/question';
import { paginatorForHttp } from '@shared/configs/paginator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckErrorsService extends ResourceService<IQuestion> {
  getResourceUrl(): string {
    return 'Project';
  }
  constructor(private injector: Injector, private http: HttpClient) {
    super(injector);
  }
  getItemBy(
    paramsOptions: {},
    api: string
  ): Observable<ApiListResponse<IQuestion>> {
    let params = new HttpParams({ fromObject: paramsOptions }).toString();

    return this.injector
      .get(HttpClient)
      .get<ApiListResponse<IQuestion>>(`${this.APIUrl}/${api}?${params}`);
  }

  // GetProjectQuesationByCategoryId(
  //   paramsOptions: {},
  //   api: string
  // ): Observable<ApiListResponse<IProject>> {
  //   let params = new HttpParams()
  //     .set('ProjectId', ProjectId.toString())
  //     .set('CategoryId', CategoryId.toString())
  //     .set('pageNum', pageNum.toString())
  //     .set('pagSize', pagSize.toString());
  //   return this.injector
  //     .get(HttpClient)
  //     .get<ApiListResponse<IProject>>(
  //       `${this.APIUrl}/GetProjectQuesationByCategoryId?${params.toString()}`
  //     );
  // }
}
