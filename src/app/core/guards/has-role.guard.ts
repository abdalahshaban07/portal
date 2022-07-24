import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuthorized = this.authService.hasRole(route.data['role']);

    if (!isAuthorized) {
      //redirect to home page
      // display message
      window.alert('You are not authorized to access this page');
    }
    return isAuthorized;

    // this.authService.user.Role.includes(route.data.role); // if role is in the array
  }
}
