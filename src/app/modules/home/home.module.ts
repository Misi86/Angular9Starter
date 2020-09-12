import {NgModule} from '@angular/core';
import {AuthenticationRoutingModule} from './home.routing';
import {HomeComponent} from './home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from './404/404.component';
import {HomeGuard} from './home.guard';
import {IndicatorsComponent} from './indicators/indicators.component';
import {StrategiesComponent} from './strategies/strategies.component';
import {SettingsComponent} from './settings/settings.component';
// import {BrowserModule} from "@angular/platform-browser";
// import {HttpClientModule} from "@angular/common/http";


@NgModule({
    imports: [
        AuthenticationRoutingModule,
        // BrowserModule,
        // HttpClientModule,
    ],
    // providers: [HomeGuard],
    declarations: [HomeComponent, DashboardComponent, IndicatorsComponent, StrategiesComponent, SettingsComponent, NotFoundComponent]
})
export class HomeModule {

}
