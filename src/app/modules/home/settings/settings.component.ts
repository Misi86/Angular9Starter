import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {ActionService} from "../../../core/services/action.service";

declare var $: any;

@Component({
  selector: 'settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  public newPw: any;

  constructor(public authService: AuthService,
              public actionService: ActionService) {
  }

  ngOnInit() {


  }

  update(name: string, pw: string) {
    this.actionService.updatePassword(name, pw).subscribe();
  }

}

