import {NgModule} from '@angular/core';
import {AuthenticationRoutingModule} from './home.routing';
import {HomeComponent} from './home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from './404/404.component';
import {HomeGuard} from './home.guard';
import {IndicatorsComponent} from './indicators/indicators.component';
import {StrategiesComponent} from './strategies/strategies.component';
import {SettingsComponent} from './settings/settings.component';
import {CommonModule} from '@angular/common';
import {ModalComponent} from '../../shared/modal/modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertComponent} from '../../shared/alert/alert.component';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {IndicatorsGuard} from './indicators/indicators.guard';
import {VaultComponent} from './vault/vault.component';
// import {BarChartModule} from "@swimlane/ngx-charts";
// import {Ng5SliderModule} from 'ng5-slider';
// import {BrowserModule} from "@angular/platform-browser";
// import {HttpClientModule} from "@angular/common/http";


@NgModule({
    imports: [
        AuthenticationRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgxSliderModule,
        NgxChartsModule,
        NgbDatepickerModule,
        // BarChartModule,
        // BrowserModule,
        // HttpClientModule,
    ],
  providers: [HomeGuard, IndicatorsGuard],
  declarations: [
    HomeComponent,
    DashboardComponent,
    IndicatorsComponent,
    StrategiesComponent,
    VaultComponent,
    SettingsComponent,
    NotFoundComponent,
    ModalComponent,
    AlertComponent,
    // NgxSliderModule,

  ],
  exports: [
    ModalComponent,
    AlertComponent,
    // NgxSliderModule,
  ]
})
export class HomeModule {

}
