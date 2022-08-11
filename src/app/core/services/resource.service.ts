import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ApiListResponse, ResponseModel } from '@core/model/apiListResponse';
import { environment } from '@env';
import { paginatorForHttp } from '@shared/configs/paginator';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ResourceService<T extends { id?: string | number }> {
  protected readonly APIUrl = environment.APIUrl + this.getResourceUrl();

  private _http!: HttpClient;

  constructor(injector: Injector) {
    this._http = injector.get(HttpClient);
  }

  abstract getResourceUrl(): string;

  toServer(entity: T): any {
    return entity;
  }

  fromServer(json: any): T {
    return json;
  }

  pageNum = paginatorForHttp.pageNumber;
  pageSize = paginatorForHttp.pageSize;

  getList(
    pageNum = this.pageNum,
    pageSize = this.pageSize
  ): Observable<ApiListResponse<T>> {
    let params = new HttpParams()
      .set('pageNum', pageNum.toString())
      .set('pagSize', pageSize.toString());

    return this._http.get<ApiListResponse<T>>(
      `${this.APIUrl}/GetList?${params.toString()}`
    );
  }

  get(id: string | number): Observable<T> {
    let idParam;
    switch (this.getResourceUrl()) {
      case 'ClientUser':
        idParam = 'UserID';
        break;
      case 'Consultant':
        idParam = 'UserID';
        break;
      default:
        idParam = 'id';
    }

    let params = new HttpParams().set(idParam, id.toString());
    return this._http
      .get<ResponseModel>(`${this.APIUrl}/GetById?${params.toString()}`)
      .pipe(map((response) => response.data as T));
  }

  add(resource: T): Observable<any> {
    return this._http.post(`${this.APIUrl}/Create`, resource);
  }

  delete(id: string | number): Observable<any> {
    return this._http.delete(`${this.APIUrl}/Delete/${id}`);
  }

  update(resource: T) {
    return this._http.post(`${this.APIUrl}/Update`, resource);
  }

  search(
    search: string,
    pageNum = this.pageNum,
    pageSize = this.pageSize
  ): Observable<ApiListResponse<T>> {
    let params = new HttpParams()
      .set('search', search)
      .set('pageNum', pageNum.toString())
      .set('pagSize', pageSize.toString());
    return this._http.get<ApiListResponse<T>>(
      `${this.APIUrl}/GetListSearch?${params.toString()}`
    );
  }
}
