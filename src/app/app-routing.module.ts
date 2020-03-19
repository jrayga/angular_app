import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PAGES } from "../resources/constants/pages";
import { AuthGuard } from './guards/auth/auth.guard';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/${PAGES.LOGIN}`,
    pathMatch: 'full'
  },
  {
    path: PAGES.LOGIN,
    component: LoginComponent,
    data: { title: 'Login Page' }
  },
  {
    path: PAGES.DASHBOARD,
    component: DashboardComponent,
    data: { title: 'Dashboard Page' },
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
