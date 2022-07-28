import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { LoadingService } from '@core/services/loading.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  totalRequests = 0;
  requestsCompleted = 0;

  constructor(
    private authService: AuthService,
    private loader: LoadingService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loader.show();
    this.totalRequests++;

    let token = this.authService.getTokenValue();

    if (token) {
      request = request.clone({
        setHeaders: {
          authorization: `${token}`,
        },
      });
    }

    return next.handle(request).pipe(
      finalize(() => {
        this.requestsCompleted++;

        console.log(this.requestsCompleted, this.totalRequests);

        if (this.requestsCompleted === this.totalRequests) {
          this.loader.hide();
          this.totalRequests = 0;
          this.requestsCompleted = 0;
        }
      })
    );
  }
}

export const authInterceptorProviders = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
