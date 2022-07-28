import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '@core/model/apiListResponse';
import { User } from '@core/model/user';
import { environment } from '@env';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly APIUrl = environment.APIUrl;

  private readonly TOKEN_KEY = 'token';

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private _token$ = new BehaviorSubject<string>(this.token as string);

  user!: User;

  constructor(private http: HttpClient) {
    this.checkToken();
  }

  checkToken() {
    this._isLoggedIn$.next(!!this.token);
    this.user = this.getUser(this.token as string) as User;
  }

  getTokenValue(): string {
    return this._token$.value;
  }

  hasRole(role: string): boolean {
    return this.user?.role === role;
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  login(userName: string, password: string) {
    return this.http
      .post<ResponseModel>(`${this.APIUrl}Auth/login`, {
        userName,
        password,
      })
      .pipe(
        map((response: ResponseModel) => {
          this._isLoggedIn$.next(true);
          localStorage.setItem(this.TOKEN_KEY, response.data as string);
          this.user = this.getUser(response.data as string) as User;
          return this.user;
        })
      );
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this._token$.next('');
    this._isLoggedIn$.next(false);
    this.user = {} as User;
  }

  private getUser(token: string): User | null {
    return token
      ? (JSON.parse(atob(token?.split('.')[1])) as User | null)
      : null;
  }
}
