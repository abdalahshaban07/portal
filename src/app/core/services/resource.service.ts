import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ApiListResponse, ResponseModel } from '@core/model/apiListResponse';
import { environment } from '@env';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ResourceService<T extends { id?: string | number }> {
  private readonly APIUrl = environment.APIUrl + this.getResourceUrl();

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

  getList(pageNum: number, pagSize: number): Observable<ApiListResponse<T>> {
    let params = new HttpParams()
      .set('pageNum', pageNum.toString())
      .set('pagSize', pagSize.toString());

    return this._http.get<ApiListResponse<T>>(
      `${this.APIUrl}/GetList?${params.toString()}`
    );
  }

  get(id: string | number): Observable<ResponseModel<T>> {
    let params = new HttpParams().set('id', id.toString());

    return this._http.get<ResponseModel<T>>(
      `${this.APIUrl}/GetById?${params.toString()}`
    );
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
}
