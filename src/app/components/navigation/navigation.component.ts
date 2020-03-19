import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isLoggedIn = false

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isUserLoggedIn()
  }

  async isUserLoggedIn() {
    try {
      this.isLoggedIn = await this.authService.getSession().toPromise()
    } catch (error) {
      this.isLoggedIn = false
      console.log("NavigationComponent -> isUserLoggedIn -> error", error)
      console.log("NavigationComponent -> isUserLoggedIn -> this.isLoggedIn", this.isLoggedIn)
    }
  }

  async logOut() {
    try {
      
    } catch (error) {
      
    }
  }

}
