import { Injectable } from '@angular/core';
import { ApiListResponse } from '@core/model/apiListResponse';
import { paginatorForHttp } from '@shared/configs/paginator';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListTableService {
  constructor() {}

  getList(
    page: number = paginatorForHttp.pageNumber,
    limit: number = paginatorForHttp.pageSize
  ): Observable<ApiListResponse<[]>> {
    return of();
  }

  getItemBy(paramsOptions: {}, api: string) {
    return of();
  }

  delete(id: number) {
    return of();
  }

  search(
    search: string,
    page: number = paginatorForHttp.pageNumber,
    limit: number = paginatorForHttp.pageSize
  ) {
    return of();
  }
}
