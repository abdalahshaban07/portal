import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '@core/model/apiListResponse';
import { User } from '@core/model/user';
import { environment } from '@env';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly APIUrl = environment.APIUrl;

  private readonly TOKEN_KEY = 'token';

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  user!: User;

  constructor(private http: HttpClient) {
    this._isLoggedIn$.next(!!this.token);
    this.user = this.getUser(this.token as string);
  }

  hasRole(role: string): boolean {
    return this.user?.role === role;
  }

  get token() {
    const token = `eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJwcmVmZXJyZWRfdXNlcm5hbWUiOiJBZG1pbiIsInBhc3N3b3JkIjoiIiwidXNlcmlkIjoiMiIsImNsaWVudGlkIjoiIiwicm9sZSI6IkFkbWluIiwiVXNlckluZm8iOiJ7XCJJZFwiOjIsXCJDbGllbnRJZFwiOjAsXCJOYW1lXCI6XCJBZG1pblwiLFwiRW1haWxcIjpcIkFkbWluQGV4YW1wbGUuY29tXCIsXCJVc2VybmFtZVwiOlwiQWRtaW5cIixcIlBhc3N3b3JkXCI6XCJwdn5cIixcIlBob25lXCI6XCIwMTExOTg1NjA2MlwiLFwiR2VuZGVySWRcIjoxLFwiQ2l0eUlkXCI6MSxcIkNvdW50cnlJZFwiOjEsXCJSb2xlSWRcIjoxLFwiQ3JlYXRlRGF0ZVwiOm51bGwsXCJDcmVhdGVCeVwiOm51bGwsXCJMYXN0VXBkYXRlRGF0ZVwiOm51bGwsXCJMYXN0VXBkYXRlQnlcIjpudWxsLFwiQ2l0eVwiOm51bGwsXCJDb3VudHJ5XCI6bnVsbCxcIkdlbmRlclwiOm51bGwsXCJSb2xlXCI6XCJBZG1pblwifSIsIm5iZiI6MTY1ODY2OTY3NywiZXhwIjoxNjU4NzA1Njc3LCJpYXQiOjE2NTg2Njk2Nzd9.tqcpaj7jiOLdfAZPyPAy_8rrb8PvTdYqPQL5wluA72bwx0yImZJIXtwxIik1RRHnBYqkTEmfdPON2ZJRa5i0hQ`;
    return token;
    // return localStorage.getItem(this.TOKEN_KEY);
  }

  login(userName: string, password: string) {
    return this.http
      .post<ResponseModel<any>>(`${this.APIUrl}/Auth/login`, {
        userName,
        password,
      })
      .pipe(
        tap((response: ResponseModel<any>) => {
          this._isLoggedIn$.next(true);
          localStorage.setItem(this.TOKEN_KEY, response.data as string);
          this.user = this.getUser(response.data as string);
        })
      );
  }

  private getUser(token: string): User {
    return JSON.parse(atob(token.split('.')[1])) as User;
  }
}