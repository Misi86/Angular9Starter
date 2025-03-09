import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from './authentication.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AuthenticationGuard} from './authentication.guard';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path: '', component: AuthenticationComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ],
  },

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AuthenticationRoutingModule {


}

