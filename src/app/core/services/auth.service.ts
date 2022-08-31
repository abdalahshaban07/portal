import { Roles } from '@shared/Enums/roles';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private http: HttpClient, private router: Router) {
    this.checkToken();
  }

  checkToken() {
    this._isLoggedIn$.next(!!this.token);
    this.user = this.getUser(this.token as string) as User;
  }

  getTokenValue(): string {
    return this._token$.value;
  }

  hasRole(role: Roles[]): boolean {
    return [this.user?.role].some((item) => role.includes(item));
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
          this._token$.next(response.data as string);
          localStorage.setItem(this.TOKEN_KEY, response.data as string);
          this.user = this.getUser(response.data as string) as User;
          return this.user;
        })
      );
  }

  logout() {
    // localStorage.removeItem(this.TOKEN_KEY);
    localStorage.clear();
    this._token$.next('');
    this._isLoggedIn$.next(false);
    this.user = {} as User;
    this.router.navigate(['login']);
  }

  private getUser(token: string): User | null {
    return token
      ? (JSON.parse(atob(token?.split('.')[1])) as User | null)
      : null;
  }
}
