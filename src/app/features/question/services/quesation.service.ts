import { environment } from '@env';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ApiListResponse } from '@core/model/apiListResponse';
import { ResourceService } from '@core/services/resource.service';
import { paginatorForHttp } from '@shared/configs/paginator';
import { Observable, of } from 'rxjs';
import { IQuestion } from '../models/question';
import { toFormData } from '@shared/services/toFormData';

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
  // GetListByCertifcate
  getItemBy(
    pageNum: number = paginatorForHttp.pageNumber,
    pagSize: number = paginatorForHttp.pageSize,
    id: number | string,
    api: string
  ): Observable<ApiListResponse<IQuestion>> {
    let params = new HttpParams()
      .set('id', id.toString())
      .set('pageNum', pageNum.toString())
      .set('pagSize', pagSize.toString());
    return this.injector
      .get(HttpClient)
      .get<ApiListResponse<IQuestion>>(
        `${this.APIUrl}/${api}?${params.toString()}`
      );
  }

  addCommentToQuestion(comment: {
    id: number | string;
    Answer: string;
    Attachments: File[];
  }): Observable<any> {
    let headers = new HttpHeaders();

    headers.set('Content-Type', null as any);
    headers.set('Accept', 'multipart/form-data');

    const formData = toFormData(comment);

    return this.injector
      .get(HttpClient)
      .post(`${environment.APIUrl}QuesationAnswer/Create`, formData, {
        headers,
        reportProgress: true,
        observe: 'events',
      });
  }
}
