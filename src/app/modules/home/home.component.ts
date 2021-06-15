import {AfterContentInit, Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {ActionService} from '../../core/services/action.service';

import $ from 'jquery';

// import {ActivatedRoute, Route, Router} from "@angular/router";
@Component({
  selector: 'travel-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public user: any;
  public updatedAt: any;

  constructor(public authService: AuthService,
              public actionService: ActionService,
              private router: Router) {

    this.getBalance();
    this.updatedAt = new Date();
    this.user = this.authService.user;
  }

  ngOnInit() {

    if (this.authService.isLogged === '1') {
      setTimeout(() => {
        this.getBalance();
        this.updatedAt = new Date();
        this.ngOnInit();
      }, 20000);
    }
  }


  getBalance() {
    this.actionService.getBtcBalance().subscribe();
  }

  parseDate(date: any) {
    const data = new Date(date);
    // tslint:disable-next-line:max-line-length
    return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + ' - ' + (data.getHours() < 10 ? '0' + data.getHours() : data.getHours()) + ':' + (data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()) + ':' + (data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds());
  }
}

