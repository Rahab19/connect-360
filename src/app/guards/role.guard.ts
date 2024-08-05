// import { CanActivateFn } from '@angular/router';

// export const roleGuard: CanActivateFn = (route, state) => {
//   return true;
// };
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode, { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class roleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const token = localStorage.getItem('token');
    const Email = localStorage.getItem('email');

    if (token && Email && this.isOfficialEmail(Email)) {
      // Token exists and user has an official email, allow access
      return true;
    } else {
      // No token or user doesn't have an official email, redirect to login page
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }

  private isOfficialEmail(email: string): boolean {
    // Implement your logic to check if the email is an official email
    // For example, you can check if the email ends with a specific domain
    const officialDomain = '@gok.com';
    return email.endsWith(officialDomain);
  }
}