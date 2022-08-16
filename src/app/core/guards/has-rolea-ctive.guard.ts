import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HasRoleaCtiveGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuthorized = this.authService.hasRole(route.data?.['role']);

    if (!isAuthorized) {
      this.toastr.warning('You are not authorized to access this page');
      this.router.navigate(['dashboard']);
    }
    return isAuthorized;
  }
}
