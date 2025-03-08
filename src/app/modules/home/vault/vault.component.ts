import {UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {ActionService} from '../../../core/services/action.service';
import * as _ from 'lodash';

declare var $: any;
declare const TradingView: any;

@Component({
  selector: 'vault-component',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.scss'],
})
export class VaultComponent implements OnInit {

  public vaultForm: UntypedFormGroup;
  public macdValue: any;
  public allPairs: any;
  public isAccepted = false;
  public savedData = [];
  public reload: any;

  constructor(public authService: AuthService,
              private fb: UntypedFormBuilder,
              public actionService: ActionService) {

    this.vaultForm = this.fb.group({
      vault_pair: ['BTC'],
      vault_ex: ['USDT'],
      vault_timeframe: ['D'],
      vault_quantity: [0]
    });
  }

  ngOnInit() {
    // this.returnMACD(this.formValue.vault_pair.value, this.formValue.vault_ex.value);

    this.availablePairs();
    this.reload = setInterval(() => {
      this.callMACD();
    }, 10000);
    // this.showChart('BTC');
    // this.checkedPair('BTC');
  }

  checkedPair(pair: string, ex: string, tf: string) {
    this.showChart(pair, ex, tf);
    // TODO calculate value $ and show msg if not ok otherwise show input
    this.actionService.getMoneyPrice(pair, ex).subscribe(resp => {
      // @ts-ignore
      const price = parseFloat(Object.values(resp.price)[0]);
      // check min available 10$
      let qty = _.filter(this.allPairs, (o) => {
        return o.pair === pair;
      });

      qty = parseFloat(qty[0].available);
      const btcP = this.actionService.priceBtc;
      // @ts-ignore
      const totVal = (price * qty);
      const min = ex === 'USDT' ? 10 : 10 / btcP;
      // console.log(totValDollar, 'min', min)
      if (totVal > min) {
        this.isAccepted = true;
        this.formValue.vault_quantity.setValue(qty);
      } else {
        this.isAccepted = false;
        this.formValue.vault_quantity.setValue(0);
      }
    });

  }

  availablePairs() {
    this.actionService.getAllBalances().subscribe(resp => {
      // console.log(resp)
      this.allPairs = resp;
      this.checkedPair('BTC', 'USDT', 'D');
      this.actionService.getBtcPrice().subscribe();
      this.savedData = JSON.parse(localStorage.getItem('vaultData')) === null ? [] : JSON.parse(localStorage.getItem('vaultData'));
    });
  }

  returnMACD(pair: any) {
    this.actionService.getMACD(pair, '1d').subscribe(resp => {
      // console.log(resp);
      this.macdValue = _.last(resp);
  //    console.log(this.macdValue);
    });
  }

  showChart(pair: string, ex: string, tf: string) {
    new TradingView.widget(
      {
        autosize: true,
        symbol: 'BINANCE:' + pair + ex,
        interval: tf,
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'it',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        studies: [
          'MACD@tv-basicstudies'
        ],
        container_id: 'mappa'
      }
    );
  }

  get formValue() {
    return this.vaultForm.controls;
  }

  setData() {

    this.savedData.push({
      id: this.savedData.length + 1,
      initial_qty: this.formValue.vault_quantity.value,
      pair: this.formValue.vault_pair.value + this.formValue.vault_ex.value,
      timeframe: this.formValue.vault_timeframe.value,
      status: true,
      tmpMoney: 0,
      updated_qty: this.formValue.vault_quantity.value,
      increment: 0
    });

    localStorage.setItem('vaultData', JSON.stringify(this.savedData));
    // console.log('appena salvato', this.savedData)
  }

  removePair(id: string) {
    this.savedData = _.remove(this.savedData, (n) => {
      return n.id !== id;
    });
  }


  callMACD() {
    _.forEach(this.savedData, (d) => {

      this.returnMACD(d.pair);
      // console.log(this.macdValue);

    });
  }
}

