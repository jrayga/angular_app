import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PAGES } from 'src/resources/constants/pages';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const o__token = localStorage.getItem("o__token");
    if (o__token !== undefined || o__token !== null) {
      const isLoggedIn = this.authService.getSession()
      if (!isLoggedIn) {
        this.router.navigate([PAGES.LOGIN]);
      }
      return isLoggedIn;
    } else {
      return false;
    }
  }

}
