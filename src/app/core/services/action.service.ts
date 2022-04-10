import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AlertService} from '../../shared/alert/alert.service';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})

export class ActionService {
  private _active;
  private _btcBalance;
  private _btcPrice;
  private _allPairs;

  constructor(private http: HttpClient,
              private authService: AuthService,
              private alertService: AlertService) {
  }


  getAllPairs() {
    return this.http.get<any>('api/btcprice/all').pipe(map(resp => {
      this.allPairs = resp;
      return resp;
    }));
  }

  getSpecificPairs(pair: any) {
    return this.http.get<any>('api/btcprice/' + pair).pipe(map(resp => {
      return resp;
    }));
  }

  getBtcPrice() {
    return this.http.get<any>('api/btcprice/BTCUSDT').pipe(map(resp => {
      this.priceBtc = resp.price;
      return resp;
    }));
  }

  getDetailsPairs(pair: any) {
    return this.http.get<any>('api/binance/prevday/' + pair).pipe(map(resp => {
      return resp;
    }));
  }

  getCandleStick(pair: any, timeframe: any, limit: any) {
    return this.http.get<any>('api/binance/getcandlesticks/' + pair + '/' + timeframe + '/' + limit).pipe(map(resp => {
      return resp;
    }));
  }

  setStrategy(payload: any) {
    return this.http.post<any>('api/strategy/' + payload.name, payload).pipe(map(data => {
      return data;
    }));
  }

  setStrategySplitted(payload: any, size: any) {
    return this.http.post<any>('api/strategy/splitted/' + payload.name + '/' + size, payload).pipe(map(data => {
      return data;
    }));
  }

  setStrategiesSplitted(payload: any, size: any) {
    return this.http.post<any>('api/strategies/splitted/' + size, payload).pipe(map(data => {
      return data;
    }));
  }

  setStrategies(payload: any) {
    return this.http.post<any>('api/strategies', payload).pipe(map(data => {
      return data;
    }));
  }

  setPairToMonitor(pair: any) {
    // @ts-ignore
    return this.http.post<any>('api/pairs/' + pair).pipe(map(data => {
      return data;
    }));
  }

  deletePairToMonitor(pair: any) {
    // @ts-ignore
    return this.http.delete<any>('api/pairs/' + pair).pipe(map(data => {
      return data;
    }));
  }

  getPairMonitored() {
    return this.http.get<any>('api/pairs/all').pipe(map(data => {
      return data;
    }));
  }

  getProjections() {
    return this.http.get<any>('api/projections/all').pipe(map(data => {
      return data;
    }));
  }

  getTopProjections(from: any, to: any) {
    return this.http.get<any>('api/projections/best/' + 100 + '/' + from + '/' + to ).pipe(map(data => {
      return data;
    }));
  }

  getLastBestProjections(from: any, to: any, payload) {
    return this.http.post<any>('api/projections/lastbest/' + from + '/' + to, payload ).pipe(map(data => {
      return data;
    }));
  }

  getProjectionCount(payload: any){
    return this.http.post<any>('api/projections/count' ,  payload).pipe(map(data => {
      return data;
    }));
  }

  getFilteredProjections(skip: any, limit: any, payload: any) {
    return this.http.post<any>('api/projections/filter/' + skip + '/' + limit, payload).pipe(map(data => {
      return data;
    }));
  }

  getActiveStrategy() {
    return this.http.get<any>('api/strategy/all').pipe(map(data => {
      return data;
    }));
  }

  stopStrategy(orderId: number, pair: string) {
    return this.http.get<any>('api/binance/cancelorder/single/' + orderId + '/' + pair).pipe(map(data => {
      return data;
    }));
  }

  deleteFromDb(name: string) {
    return this.http.delete<any>('api/strategy/' + name).pipe(map(data => {
      return data;
    }));
  }

  multipleCancel(payload: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: payload,
    };
    return this.http.delete<any>('api/strategy/deletestrategies', options).pipe(map(data => {
      return data;
    }));
  }

  multipleUpdate(payload: any) {
    return this.http.put<any>('api/strategy/updatestrategies', payload).pipe(map(data => {
      return data;
    }));
  }

  updateStrategy(name: string, payload: any) {
    return this.http.post<any>('api/strategy/' + name, payload).pipe(map(data => {
      return data;
    }));
  }

  getBtcBalance() {
    return this.http.get<any>('api/binance/balance').pipe(map(data => {
      this.balanceBtc = data.btc_balance;
      return this.balanceBtc;
    }));
  }


  getAllBalances() {
    return this.http.get<any>('api/binance/balances').pipe(map(data => {
      // this.balanceBtc = data.btc_balance;
      return data;
    }));
  }

  getSpecificBalance(pair: any) {
    return this.http.get<any>('api/binance/balancebypair/' + pair).pipe(map(data => {
      // this.balanceBtc = data.btc_balance;
      return data;
    }));
  }

  getCurrentStatus(orderId: any, pair: any) {
    return this.http.get<any>('api/binance/orderstatus/' + orderId + '/' + pair).pipe(map(data => {
      return JSON.parse(data.success);
    }));
  }

  updateAccount(name: string, payload) {
    return this.http.post<any>('api/users/' + name, payload).pipe(map(data => {
      this.alertService.addMessage('success', 'Dati aggiornati correttamente');
      return data;
    }));
  }


  checkStrategy(name: any) {
    return this.http.get<any>('api/strategy/' + name).pipe(map(data => {
      return data;
    }));
  }

  getUserInfo() {
    return this.http.get<any>('api/users/' + this.authService.user).pipe(map(data => {
      // console.log(data);
      return data;
    }));
  }

  set balanceBtc(value: number) {
    this._btcBalance = value;
  }

  get balanceBtc(): number {
    return this._btcBalance;
  }

  set allPairs(value: any) {
    this._allPairs = value;
  }

  get allPairs(): any {
    return this._allPairs;
  }

  set priceBtc(value: number) {
    this._btcPrice = value;
  }

  get priceBtc(): number {
    // console.log('ritorno', this._btcPrice)
    return this._btcPrice;
  }
}

