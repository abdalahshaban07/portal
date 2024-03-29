import { Roles } from '@shared/Enums/roles';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseModel } from '@core/model/apiListResponse';
import { User, UserInfo } from '@core/model/user';
import { environment } from '@env';
import { BehaviorSubject, map } from 'rxjs';
import { ShareObsService } from '@shared/services/share-obs.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly APIUrl = environment.APIUrl;

  private readonly TOKEN_KEY = 'token';

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private _token$ = new BehaviorSubject<string>(this.token as string);

  user!: UserInfo;

  constructor(
    private http: HttpClient,
    private router: Router,
    private shareObsService: ShareObsService
  ) {
    this.checkToken();
  }

  checkToken() {
    this._isLoggedIn$.next(!!this.token);
    this.user = this.getUser(this.token as string) as UserInfo;
  }

  getTokenValue(): string {
    return this._token$.value;
  }

  hasRole(role: Roles[]): boolean {
    return [this.user?.Role].some((item) => role.includes(item));
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
          this.user = this.getUser(response.data as string) as UserInfo;
          return this.user;
        })
      );
  }

  private b64DecodeUnicode(str: string) {
    return decodeURIComponent(
      Array.prototype.map
        .call(atob(str), (c: string) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
  }

  private getUser(token: string): UserInfo | null {
    return token
      ? JSON.parse(
          JSON.parse(
            this.b64DecodeUnicode(
              token.split('.')[1].replace('-', '+').replace('_', '/')
            )
          ).UserInfo
        )
      : null;
  }

  logout() {
    // localStorage.removeItem(this.TOKEN_KEY);
    localStorage.clear();
    this._token$.next('');
    this._isLoggedIn$.next(false);
    this.user = {} as UserInfo;
    this.shareObsService.projects = [];
    this.shareObsService.projectId = 0;
    this.shareObsService.category = [];
    this.router.navigate(['login']);
  }
}
