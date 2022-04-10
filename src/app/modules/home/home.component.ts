import {AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {ActionService} from '../../core/services/action.service';

import $ from 'jquery';
import {ModalComponent} from '../../shared/modal/modal.component';
import {SharingService} from "../../core/services/sharing.service";

declare const TradingView: any;


@Component({
  selector: 'travel-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @Output() valueChange = new EventEmitter();
  @ViewChild('walletModal') walletModal: ModalComponent;
  @ViewChild('chartModal') chartModal: ModalComponent;
  public user: any;
  public updatedAt: any;
  public updateBalance: any;
  public isOpen = true;
  public balances: any;
  public isLightMode = true;

  // public datePause: any;

  constructor(public authService: AuthService,
              public actionService: ActionService,
              public sharingService: SharingService,
              private router: Router) {

    this.getBalance();
    this.updatedAt = new Date();
    this.user = this.authService.user;
    if (localStorage.getItem('cssmode') ){

      this.isLightMode =  localStorage.getItem('cssmode') === 'light'  ;
    }
    // document.addEventListener("visibilitychange", () => {
    //   if (document.visibilityState === 'visible') {
    //    console.log('entro');
    //     if (Date.now() - this.datePause > 10000) {
    //       alert('fuoru');
    //     }
    //   } else {
    //     this.datePause = Date.now();
    //     console.log('prendo tempo')
    //   }
    // });
  }

  ngOnInit() {
    this.updateBalance = setInterval(() => {
      this.getBalance();
      this.updatedAt = new Date();
    }, 31000);
  }

  ngAfterViewInit() {

    new TradingView.widget(
      {
        autosize: true,
        symbol: 'BINANCE:BTCUSDT',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'it',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: 'map'
      }
    );
  }

  ngOnDestroy() {
    clearInterval(this.updateBalance);
  }




  setModeCss() {
    this.isLightMode = !this.isLightMode;
    this.sharingService.notifyOther({value: this.isLightMode});
    if (this.isLightMode) {
      localStorage.setItem('cssmode', 'light');
    } else {
      localStorage.setItem('cssmode', 'dark');
    }

  }

  openWallet() {
    this.getAllBalances();
    this.walletModal.show('modal-sm');

  }
  openChart() {
    this.chartModal.show('modal-xl');

  }

  getAllBalances() {
    this.actionService.getAllBalances().subscribe((resp) => {
      this.balances = resp;
    });
  }

  closeWallet() {
    this.walletModal.dismiss();
  }

  closeChart() {
    this.chartModal.dismiss();
  }

  getBalance() {
    this.actionService.getBtcBalance().subscribe();
  }

  parseDate(date: any) {
    const data = new Date(date);
    // tslint:disable-next-line:max-line-length
    return (data.getHours() < 10 ? '0' + data.getHours() : data.getHours()) + ':' + (data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()) + ':' + (data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds()) + ' | ' +  data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();
  }


  balanceWoFees(bal: any, tax: any) {
    return (bal - tax).toFixed(8);
  }

  calculateFees(value: any) {
    const tax = value - ((value / 100) * 0.1);
    return (value - tax).toFixed(8);
  }

  openMenu() {
    $(document).ready(() => {


      $('#sidebar').toggleClass('active');
      this.isOpen = !this.isOpen;
    });


  }
}

