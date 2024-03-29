import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeGuard} from './home.guard';
import {IndicatorsComponent} from './indicators/indicators.component';
import {StrategiesComponent} from './strategies/strategies.component';
import {SettingsComponent} from './settings/settings.component';
import {IndicatorsGuard} from './indicators/indicators.guard';
import {VaultComponent} from "./vault/vault.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [HomeGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        component: DashboardComponent
      }
      ,
      {
        path: 'indicators',
        component: IndicatorsComponent,
        canActivate: [IndicatorsGuard]
      }
      ,
      {
        path: 'vault',
        component: VaultComponent,
        canActivate: [IndicatorsGuard]
      }
      , {
      path: 'strategies',
        component: StrategiesComponent
      }
      ,
      {
      path: 'settings',
        component: SettingsComponent
      }
    ],
  }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AuthenticationRoutingModule {


}

