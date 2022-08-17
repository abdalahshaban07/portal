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

    dataRes.forEach((item: IComment) => {
      let dataItem: IAnswerDocs = {
        id: item.id,
        projectId: item.projectId,
        answer: item.answer,
        clientUserCreateBy: item.clientUserCreateBy,
        consultentCreateBy: item.consultentCreateBy,
        documentName: item.answerDocs
          .map((doc: IAnswerDocs) => doc.documentName)
          .flatMap((doc: string[]) => doc),
        imagePath: item.answerDocs
          .map((doc: IAnswerDocs) => doc.imagePath)
          .flatMap((doc: string[]) => doc),
      };
      dataList.push(dataItem);
    });

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
