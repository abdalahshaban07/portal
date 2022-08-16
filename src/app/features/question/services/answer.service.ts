import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ApiListResponse } from '@core/model/apiListResponse';
import { ResourceService } from '@core/services/resource.service';
import { paginatorForHttp } from '@shared/configs/paginator';
import { Observable, tap, map } from 'rxjs';
import { IAnswerDocs, IAnswerTable, IComment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class AnswerService extends ResourceService<IComment> {
  getResourceUrl(): string {
    return 'QuesationAnswer';
  }

  constructor(private injector: Injector) {
    super(injector);
  }

  table!: IAnswerTable;
  transform(data: ApiListResponse<IComment>): IAnswerTable {
    let dataRes = data.data.dataList;
    let totalCount = data.data.totalCount;
    let dataList: IAnswerDocs[] = [];

    for (let i = 0; i < dataRes.length; i++) {
      const answerDocs = dataRes[i].answerDocs;

      for (let j = 0; j < answerDocs.length; j++) {
        answerDocs[j].answer = dataRes[i].answer;
        answerDocs[j].clientUserCreateBy = dataRes[i].clientUserCreateBy;
        answerDocs[j].consultentCreateBy = dataRes[i].consultentCreateBy;
        dataList.push(answerDocs[j]);
      }
    }

    return {
      data: {
        dataList,
        totalCount,
      },
    };
  }

  getItemBy(
    pageNum: number = paginatorForHttp.pageNumber,
    pagSize: number = paginatorForHttp.pageSize,
    id: number | string,
    api: string
  ): Observable<ApiListResponse<IComment>> {
    let params = new HttpParams()
      .set('id', id.toString())
      .set('pageNum', pageNum.toString())
      .set('pagSize', pagSize.toString());
    return this.injector
      .get(HttpClient)
      .get<ApiListResponse<IComment>>(
        `${this.APIUrl}/${api}?${params.toString()}`
      )
      .pipe(
        map(
          (res: ApiListResponse<IComment>) =>
            this.transform(res) as unknown as ApiListResponse<IComment>
        )
      );
  }
}
