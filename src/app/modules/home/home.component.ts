import {AfterContentInit, Component, OnDestroy, OnInit} from '@angular/core';
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
export class HomeComponent implements OnInit, OnDestroy {
  public user: any;
  public updatedAt: any;
  public updateBalance: any;

  constructor(public authService: AuthService,
              public actionService: ActionService,
              private router: Router) {

    this.getBalance();
    this.updatedAt = new Date();
    this.user = this.authService.user;
  }

  ngOnInit() {
    this.updateBalance = setInterval(() => {
      this.getBalance();
      this.updatedAt = new Date();
    }, 20000);
  }

  ngOnDestroy() {
    clearInterval(this.updateBalance);
  }

  getBalance() {
    this.actionService.getBtcBalance().subscribe();
  }

  parseDate(date: any) {
    const data = new Date(date);
    // tslint:disable-next-line:max-line-length
    return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + ' - ' + (data.getHours() < 10 ? '0' + data.getHours() : data.getHours()) + ':' + (data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()) + ':' + (data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds());
  }


  balanceWoFees(bal: any, tax: any) {
    return bal - tax;
  }

  calculateFees(value: any) {
    const tax = value - ((value / 100) * 0.1);
    return (value - tax).toFixed(8);
  }
}

