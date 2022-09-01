import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@core/services/auth.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('Error Event');
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            switch (error.status) {
              case 401: // Unautorized
                this.toastr.error(`${error.statusText}`, 'Authorization Error');
                this.authService.logout();
                break;
              case 403: // Forbidden
                this.toastr.error(`${error.statusText}`, 'Access Error');
                break;
              case 404: // Not found
                this.toastr.error(`${error.statusText}`, 'Route Error');
                break;
              case 503: // Server error
                this.toastr.error(`${error.statusText}`, 'Server Error');
                break;
              // case 0: // Server error
              //   this.toastr.error(`${error.statusText}`, 'Server Error');
              //   break;
            }
          }
        } else {
          console.log('An error occurred');
        }

        console.log(error);

        return throwError(() => new Error(error.statusText));
      })
    );
  }
}

export const httpErrorInterceptorProviders = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpErrorInterceptor,
  multi: true,
};
