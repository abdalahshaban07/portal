import { environment } from '@env';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ApiListResponse } from '@core/model/apiListResponse';
import { ResourceService } from '@core/services/resource.service';
import { paginatorForHttp } from '@shared/configs/paginator';
import { Observable, of } from 'rxjs';
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
    //this is the important step. You need to set content type as null
    headers.set('Content-Type', null as any);
    headers.set('Accept', 'multipart/form-data');

    const formData: FormData = new FormData();

    if (comment.Attachments) {
      Array.from(comment.Attachments).forEach((file) => {
        formData.append('Attachments', file, file.name);
      });
    } else {
      formData.append('Attachments', null as any);
    }
    formData.append('id', comment.id as any);
    formData.append('Answer', comment.Answer);

    return this.injector
      .get(HttpClient)
      .post(`${environment.APIUrl}QuesationAnswer/Create`, formData, {
        headers,
        reportProgress: true,
        observe: 'events',
      });
  }

  // getQuestionByCategoryId(
  //   id: number | string
  // ): Observable<ApiListResponse<IQuestion>> {
  //   let params = new HttpParams().set('id', id.toString());
  //   return this.injector
  //     .get(HttpClient)
  //     .get<ApiListResponse<IQuestion>>(
  //       `${this.APIUrl}/GetByCategoryId?${params.toString()}`
  //     );
  // }
}
