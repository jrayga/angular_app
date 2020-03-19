import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { PAGES } from 'src/resources/constants/pages';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  private decode = new JwtHelperService()

  constructor(
    private router: Router
  ) { }

  async isAuthenticated() {
    try {
      const o__token = await localStorage.getItem("o__token");
      const tokenStatus = await this.decode.isTokenExpired(o__token);
      if (tokenStatus) {
        await localStorage.removeItem("o__token");
        this.router.navigate([PAGES.LOGIN]);
      }
    } catch (error) {
      console.log("AuthTokenService -> isAuthenticated -> error", error)
      return false;
    }
  }
}
