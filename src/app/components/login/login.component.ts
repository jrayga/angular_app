import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { PAGES } from 'src/resources/constants/pages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loggedInForm = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoggedIn()
  }

  async loggedIn() {
    try {
      const loginDetails = await this.authService.login(this.loggedInForm)
      await localStorage.setItem("o__token", loginDetails.token);
      console.log("LoginComponent -> loggedIn -> loginDetails", loginDetails)
      this.router.navigate([PAGES.DASHBOARD]);
    } catch (error) {
      console.log("LoginComponent -> loggedIn -> error", error)
    }
  }

  async isLoggedIn() {
    try {
      const isLoggedIn = await localStorage.getItem("o__token") !== undefined || localStorage.getItem("o__token") !== null
      if (isLoggedIn) {
        this.router.navigate([PAGES.DASHBOARD]);
      }
    } catch (error) {
      console.log("LoginComponent -> isLoggedIn -> error", error)
    }
  }

}
