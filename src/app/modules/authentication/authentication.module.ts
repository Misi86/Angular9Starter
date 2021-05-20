import {NgModule} from '@angular/core';
import {AuthenticationRoutingModule} from './authentication.routing';
import {AuthenticationComponent} from './authentication.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationGuard} from './authentication.guard';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeModule} from "../home/home.module";


@NgModule({
  imports: [
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    HomeModule,
  ],
    providers: [AuthenticationGuard],
    declarations: [AuthenticationComponent, LoginComponent]
})
export class AuthenticationModule {

}
