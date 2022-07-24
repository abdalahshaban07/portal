import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, retry, timer } from 'rxjs';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  constructor() {}

  shouldRetry(error: HttpErrorResponse) {
    if (error.status >= 500) {
      return timer(1000);
    }
    throw error;
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(retry({ count: 2, delay: this.shouldRetry }));
  }
}

export const retryInterceptorProviders = {
  provide: HTTP_INTERCEPTORS,
  useClass: RetryInterceptor,
  multi: true,
};
