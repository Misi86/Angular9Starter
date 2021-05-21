import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';

declare var $: any;

@Component({
  selector: 'settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }


}

