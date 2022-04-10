import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthService} from './core/services/auth.service';
import {APIInterceptor} from './shared/http-resources/api.interceptor';
import {ErrorInterceptor} from './shared/http-resources/error.interceptor';
import {TokenInterceptor} from './shared/http-resources/token.interceptor';
import {AlertService} from './shared/alert/alert.service';
import {HomeModule} from './modules/home/home.module';
import {ActionService} from './core/services/action.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import {SharingService} from './core/services/sharing.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    NgbModule,
    NgxSliderModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    AuthService,
    AlertService,
    ActionService,
    SharingService,
  ],
  exports: [
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
