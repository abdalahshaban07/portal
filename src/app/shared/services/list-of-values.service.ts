import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '@core/model/apiListResponse';
import { environment } from '@env';
import { selectMenuOptions } from '@shared/components/dynamic-form-field/dynamic-form-field.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListOfValuesService {
  private readonly API = environment.APIUrl + 'ListOfValues';
  constructor(private http: HttpClient) {}

  transform(data: ResponseModel): selectMenuOptions[] {
    return data.data as selectMenuOptions[];
  }

  getCertifcates(): Observable<selectMenuOptions[]> {
    return this.http
      .get<ResponseModel>(`${this.API}/GetCertifcateListOfValues`)
      .pipe(map((res) => this.transform(res)));
  }

  getClients(): Observable<selectMenuOptions[]> {
    return this.http
      .get<ResponseModel>(`${this.API}/GetClientListOfValues`)
      .pipe(map((res) => this.transform(res)));
  }

  getConsultants(): Observable<selectMenuOptions[]> {
    return this.http
      .get<ResponseModel>(`${this.API}/GetCounsaltanentListOfValues`)
      .pipe(map((res) => this.transform(res)));
  }

  getGender(): Observable<selectMenuOptions[]> {
    return this.http
      .get<ResponseModel>(`${this.API}/GetGenderListOfValues`)
      .pipe(map((res) => this.transform(res)));
  }

  getCountries(): Observable<selectMenuOptions[]> {
    return this.http
      .get<ResponseModel>(`${this.API}/GetCountryListOfValues`)
      .pipe(map((res) => this.transform(res)));
  }

  getCities(countryId: string | number): Observable<selectMenuOptions[]> {
    let params = new HttpParams().set('countryId', countryId.toString());

    return this.http
      .get<ResponseModel>(
        `${this.API}/GetCityListOfValues?${params.toString()}`
      )
      .pipe(map((res) => this.transform(res)));
  }
}
