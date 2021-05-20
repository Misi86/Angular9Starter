import {NgModule} from '@angular/core';
import {AuthenticationRoutingModule} from './authentication.routing';
import {AuthenticationComponent} from './authentication.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationGuard} from './authentication.guard';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    AuthenticationRoutingModule,
    ReactiveFormsModule,
  ],
    providers: [AuthenticationGuard],
    declarations: [AuthenticationComponent, LoginComponent]
})
export class AuthenticationModule {

}
