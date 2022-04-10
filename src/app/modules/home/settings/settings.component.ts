import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {ActionService} from '../../../core/services/action.service';
// import * as console from "console";

declare var $: any;

@Component({
  selector: 'settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  public newPw: any = '';
  public confirmPw: any = '';
  public apKey = '';
  public apSctKey = '';

  constructor(public authService: AuthService,
              public actionService: ActionService) {

    // this.apKey = this.authService.apiKey;
    // this.apSctKey = this.authService.apiSecretKey;
  }

  ngOnInit() {
    this.getInfo();

  }

  update(type: string, name: string, pw?: string, apiKey?: string, apiSecret?: any) {
    let payload;
    switch (type) {
      case 'pw':
        payload = {
          username: name,
          password: pw,
          role: 'admin'
        };
        break;
      case 'key':
        payload = {
          username: name,
          api_key: apiKey,
          secret_key: apiSecret,
          role: 'admin'
        };
        break;
      default:
        return;
    }

    this.actionService.updateAccount(name, payload).subscribe();
  }

  getInfo() {
    this.actionService.getUserInfo().subscribe((data) => {
      // this.apKey = data.api_key;
      // this.apSctKey = data.secret_key;
    });
  }
}

