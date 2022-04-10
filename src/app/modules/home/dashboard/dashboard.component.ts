import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit, ChangeDetectorRef,
  Component, Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {ModalComponent} from '../../../shared/modal/modal.component';
import {ActionService} from '../../../core/services/action.service';
import * as _ from 'lodash';
import {AlertService} from '../../../shared/alert/alert.service';
import {AuthService} from '../../../core/services/auth.service';
import {HomeComponent} from '../home.component';
import {SharingService} from '../../../core/services/sharing.service';
import {ViewportScroller} from '@angular/common';

declare var $: any;

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy, AfterContentChecked {
  @ViewChild('detailsModal') detailsModal: ModalComponent;
  @ViewChild('stopModal') stopModal: ModalComponent;
  @ViewChild('cancelModal') cancelModal: ModalComponent;
  @ViewChild('transactionsModal') transactionsModal: ModalComponent;
  @ViewChild('multipleAction') multipleAction: ModalComponent;
  // @Input() = valueChange: boolean;
  public activeStrategies: any;
  public stopData: any;
  public checkMobileData: any;
  public searchFilter: any;
  public searchName: any;
  public searchDate: any;
  public searchState = 'all';
  public details = false;
  private clonedStrategy: any;
  public reloadStuff: any;
  public currentState: any;
  public strNumber: any;
  public selectAll = false;
  public executedTransaction = 0;
  public selectedBox = [{order: 0, nm: '0', st: '0'}];
  public loaded = false;
  public selecteFilter = [];
  public selectedCoin = [];
  public minSlide = 0;
  public maxSlide = 3;
  public user: any;
  public currentPrices = [];
  public btcInitialTotal: any;
  public btcSelledTotal: any;
  public btcCurrentTotal: any;
  public selectedStrategy: any = [];
  public isChecked: any = [];
  public multipleType = '';
  public isPartial = [];
  public cssmode: any;
  public reloaded: any;
  public appliedFilter: boolean;

  constructor(private actionService: ActionService,
              private alertService: AlertService,
              private cdFref: ChangeDetectorRef,
              private _vps: ViewportScroller,
              private sharingService: SharingService,
              private authService: AuthService,
              private homeCmp: HomeComponent
  ) {
    this.loadActiveStrategy();
    this.user = this.authService.user;
    this.cssmode = localStorage.getItem('cssmode') === 'light';

  }

  ngOnInit() {

    this.reloadStuff = setInterval(() => {
      this.reload();
      this.reloaded = parseFloat($('#carouselExampleControlsTop .active').attr('id'));
    }, 31000);

    this.sharingService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('value')) {
        this.cssmode = res.value;
      }
    });

    $('#carouselExampleControlsTop').carousel({
      interval: false
    });


  }


  moveSliderDetails(action: string) {

    $('#carouselExampleControlsTop').carousel('pause');
    if (action === 'next') {
      for (let i = 0; i < this.strNumber; i++) {
        const name = '#carouselExampleControls' + i;
        $(name).carousel(action);
      }
    } else {
      for (let i = 0; i < this.strNumber; i++) {
        const name = '#carouselExampleControls' + i;
        $(name).carousel(action);
      }
    }
  }


  setSlider() {
    let slide = $('#carouselExampleControlsTop .active').attr('id');
    for (let i = 0; i < this.strNumber; i++) {
      const name = '#carouselExampleControls' + i;
      if (slide === undefined) {
        slide = 0;
      }
      if ($(name).find('#' + slide + '0').hasClass('active')) {
        $(name).find('#' + slide + '0').removeClass('active');
      }
      $(name).find('#' + slide + '0').addClass('active');
    }
  }


  ngAfterContentChecked() {
    this.calculateTotalTransactions();
  }

  ngOnDestroy() {
    clearInterval(this.reloadStuff);
  }

  reload() {
    this.resetFilter();
    this.loadActiveStrategy();
    this.executedTransaction = 0;
    this.calculateTotalTransactions();
    this.reloadCheckBox();
  }


  setFilterPair(pair: string) {
    if (this.searchFilter === pair) {
      this.searchFilter = '';
    } else {
      this.searchFilter = pair;
    }
    this.filterResult(this.searchFilter, 'pairs');
  }

  isNumero(val) {
    let result = false;
    if (!_.isNaN(val)) {
      result = true;
    }
    return result;
  }

  reloadCheckBox() {
    if (this.selectAll) {
      this.isChecked = _.fill(this.isChecked, true);
    } else if (!this.selectAll && !_.isEmpty(this.selectedStrategy)) {
      // console.log(this.selectedStrategy, 'reload')
      _.forEach(this.selectedStrategy, (s, i) => {
        this.isChecked[s.id] = true;
      });
    } else if (!this.selectAll && _.isEmpty(this.selectedStrategy)) {
      this.uncheckAll();
    }
  }

  manageAll(event: any) {

    if (event === true) {
      _.forEach(this.activeStrategies, (o, i) => {
        this.selectedStrategy.push({order: o.order_id, nm: o.name, st: o.status, pair: o.coin_pair});
        this.isChecked[i] = true;
      });
    } else {
      this.selectedStrategy = [];
      _.forEach(this.activeStrategies, (o, i) => {
        this.isChecked[i] = false;
      });
    }
    this.selectedStrategy = _.uniqBy(this.selectedStrategy, (o) => {
      return o.order;
    });

  }

  manageSlider(action: boolean) {
    if (action) {
      if (this.maxSlide < this.selectedCoin.length - 1) {
        this.minSlide++;
        this.maxSlide++;
      }
    } else {
      if (this.minSlide > 0) {
        this.minSlide--;
        this.maxSlide--;
      }
    }
  }

  updateSelectStatus(event: any, orderId: any, name: any, status: any, pairC: any, index: any) {
    this.selectAll = false;
    if (event.target.checked === true) {
      this.selectedStrategy.push({order: orderId, nm: name, st: status, pair: pairC, id: index});
      this.isChecked[index] = true;
    } else {
      this.selectedStrategy = _.remove(this.selectedStrategy, (n) => {
        return n.order !== orderId;
      });
      this.isChecked[index] = false;

    }
  }

  getFloor(value: any) {
    return Math.floor(value);
  }

  specificPair(pairs: any) {
    // console.log(pairs, 'pp')
    this.currentPrices = [];
    _.forEach(pairs, (p, i) => {
      this.actionService.getDetailsPairs(p.coin_pair).subscribe((resp) => {
          // console.log(resp);
          resp.prevDay.symbol = p.coin_pair;
          resp.prevDay.lastPrice = parseFloat(resp.prevDay.lastPrice);
          resp.prevDay.quoteVolume = parseFloat(resp.prevDay.quoteVolume);
          this.currentPrices.push(resp.prevDay);
          this.currentPrices = _.uniqBy(this.currentPrices, (e) => {
            return e.symbol;
          });
          // if (this.currentPrices === []) {
          // } else {
          //   _.forEach(this.currentPrices, (pp) => {
          //     if (pp.name === p.name && p.price !== pp.price) {
          //       pp.price = p.price;
          //     }
          //   });
          // }

          // console.log(this.currentPrices)
        },
        (error) => {
        });
    });
  }

  calculateCurrentCapital(currentCapital: any, pair: any, str: any) {

    if (str.current_status === 'BUY') {
      return this.calculateSelledCapital(str.capital, str.sell_price, str.current_capital, str.buy_price, str.current_status, str.isBtcCapital);
    }

    let selectedPairPrice;
    _.forEach(this.currentPrices, (cp) => {
      if (cp.symbol === pair) {
        selectedPairPrice = cp.lastPrice;
      }
    });
    const result = (currentCapital * selectedPairPrice).toFixed(8);
    if (parseFloat(result) <= 0.00000010) {
      return currentCapital;
    }
    return parseFloat(result);

  }

  calculateDelta(p1: any, p2: any, status?: any, str?: any) {
    if (parseFloat(p2) === 0) {
      return 0;
    }
    if (status === 'BUY') {
      // tslint:disable-next-line:max-line-length
      return this.calculateDelta(p1, this.calculateSelledCapital(str.capital, str.sell_price, str.current_capital, str.buy_price, str.current_status, str.isBtcCapital));
    }
    if (str && !str.isBtcCapital && _.isInteger(p1)) {
      p1 = (p1 * str.sell_price).toFixed(8);
    }

    const partial = (parseFloat(p2) - p1) / p1;
    return (partial * 100).toFixed(2);
  }

  calculateSelledCapital(capital: any, sellPrice: any, currentCapital: any, buyPrice: any, status: any, isBtcCapital: boolean) {
    const parseSellPrice = sellPrice.toFixed(8);
    const parseBuyPrice = buyPrice.toFixed(8);
    const ccS = parseFloat((currentCapital * parseSellPrice).toFixed(8));
    const ccB = parseFloat((currentCapital * parseBuyPrice).toFixed(8));
    switch (status) {
      case'BUY':
        if (ccB <= 0.00000010) {
          return capital;
        }
        // iisBtcCapital ? ccB :ccS
        return ccB;
        break;
      case'SELL':
        return ccS;
        break;
      default:
        return capital;
    }


  }

  calculateTransactions(str: any, status: any, transactions: any, length: any) {
    const lastTransaction = transactions[length - 1];
    const type = lastTransaction && lastTransaction.type_transaction ? lastTransaction.type_transaction : 'BUY';
    let result = length % 2 === 0 ? length / 2 : this.getFloor(length / 2);
    // if (length >= 3) {
    //
    // } else {
    //   if (type === 'SELL' && status === 'ACTIVE') {
    //     result = str.isBtcCapital ? result - 1 : result;
    //   }
    // }
    if (type === 'SELL' && status === 'ACTIVE') {
      result = str.isBtcCapital ? result - 1 : result;
    }
    return result;
  }

  calculateTotalTransactions() {
    let partial = 0;
    _.forEach(this.activeStrategies, (str) => {
      if (str.order_type !== 'single') {
        const lastTransaction = str.transactions[str.transactions.length - 1];
        const type = lastTransaction && lastTransaction.type_transaction ? lastTransaction.type_transaction : 'BUY';
        let result = str.transactions.length % 2 === 0 ? str.transactions.length / 2 : this.getFloor(str.transactions.length / 2);
        // if (str.transactions.length >= 3) {
        //   if (type === 'SELL' && str.status === 'ACTIVE') {
        //     result = str.isBtcCapital ? result - 1 : result;
        //   }
        // } else {
        // }
        if (type === 'SELL' && str.status === 'ACTIVE') {
          result = str.isBtcCapital ? result - 1 : result;
        }
        partial += result;
      }


    });
    this.executedTransaction = partial;
    this.loaded = true;
  }

  getCeil(value: any) {
    return Math.ceil(value);
  }

  closeStop() {
    this.stopModal.dismiss();
  }

  closeCancel() {
    this.cancelModal.dismiss();
  }

  closeTransaction() {
    this.transactionsModal.dismiss();
  }

  openConfirmModal(id) {
    this.checkMobileData = this.activeStrategies[id];
    this.detailsModal.show('modal-lg');
  }

  openMultiple(type: any) {
    if (this.selectedStrategy.length > 1) {

      this.multipleAction.show('modal-lg');
      switch (type) {
        case 'pp':
          this.multipleType = type;
          break;
        case 'cancel':
          this.multipleType = type;
          break;
        default:
          this.multipleType = '';
      }
    } else {
      this.alertService.addMessage('danger', 'Devi selezionare almeno 2 strategie');
    }
  }

  manageMultipleAction(type: any) {
    const payload = [];
    if (type === 'pp') {
      _.forEach(this.selectedStrategy, (ss, i) => {
        const stat = ss.st === 'STOP' ? 'ACTIVE' : 'STOP';
        payload.push({name: ss.nm, status: stat});
      });
      this.actionService.multipleUpdate(payload).subscribe((resp) => {
        if (resp) {
          this.closeMultiple();
          this.loadActiveStrategy();
          this.actionService.getBtcBalance().subscribe();
          this.calculateTotalTransactions();
          this.uncheckAll();
          this.selectedStrategy = [];
          this.alertService.addMessage('success', resp.success);
          this.clearFilter();
        }
      });
    } else {
      _.forEach(this.selectedStrategy, (ss, i) => {
        payload.push({name: ss.nm, orderId: ss.order, pair: ss.pair});
      });
      this.actionService.multipleCancel(payload).subscribe((resp) => {
        if (resp) {

          this.closeMultiple();
          this.loadActiveStrategy();
          this.actionService.getBtcBalance().subscribe();
          this.calculateTotalTransactions();
          this.uncheckAll();
          this.selectedStrategy = [];
          this.alertService.addMessage('success', resp.success);
          this.clearFilter();
        }

      });
    }

  }

  uncheckAll() {
    _.forEach(this.selectedStrategy, (as, i) => {
    });
    this.selectAll = false;
    this.isChecked = _.fill(this.isChecked, false);
  }

  closeMultiple() {
    this.multipleType = '';
    this.multipleAction.dismiss();
  }

  openStopModal() {
    this.closeTransaction();
    this.stopModal.show('modal-lg');
  }

  openCancelModal() {
    this.closeTransaction();
    this.cancelModal.show('modal-lg');
  }

  fromCoinToBTC(amount: any, price: any) {
    const parsedAmount = parseFloat((amount * price).toFixed(8));
    return parsedAmount;
  }

  loadActiveStrategy() {
    this.actionService.getActiveStrategy().subscribe((resp) => {
      this.clonedStrategy = _.cloneDeep(resp);
      this.activeStrategies = _.orderBy(this.clonedStrategy, 'name', 'asc');
      if (this.stopData === undefined) {
        this.stopData = resp[0];
      }
      this.selectedCoin = [];
      this.selectedCoin = _.uniqBy(this.activeStrategies, (e) => {
        return e.coin_pair;
      });
      this.specificPair(this.selectedCoin);
      this.checkMobileData = resp[0];
      this.strNumber = this.clonedStrategy.length;
      _.forEach(this.selecteFilter, (sf) => {
        if (sf.name !== 'all' && sf.name !== '') {
          this.filterResult(sf.name, sf.type);
        }
      });

      this.checkPartialOrders();
    });
  }

  checkPartialOrders() {
    const result = [];
    _.forEach(this.activeStrategies, (str, i) => {
      result.push({tr: _.last(str.transactions), pair: str.coin_pair, status: str.current_status});
    });
    _.forEach(result, (re, i) => {
      if (_.has(re.tr, 'partially_filled')) {
        this.isPartial[i] = true;
      } else {
        this.isPartial[i] = false;
      }
    });
  }

  getSpecificStatus(orderId: any, pair: any) {
    this.actionService.getCurrentStatus(orderId, pair).subscribe((resp) => {
      if (_.isEmpty(resp)) {
        this.alertService.addMessage('info', 'Stato dell ordine chiuso bilancio insufficente');
      } else {
        const state = resp.status === 'NEW' ? 'APERTO' : 'CHIUSO';
        this.alertService.addMessage('info', 'Stato dell ordine: ' + state);
      }
      return resp;
    });
  }

  deleteFromDb(name: string) {
    this.actionService.deleteFromDb(name).subscribe(() => {
      this.closeCancel();
      this.loadActiveStrategy();
      this.actionService.getBtcBalance().subscribe();
      this.calculateTotalTransactions();
      this.alertService.addMessage('success', 'Ordine cancellato con successo');
    });
  }

  cancelStrategy(orderId: number, pair: string, name: string) {
    if (orderId !== undefined) {

      this.actionService.stopStrategy(orderId, pair).subscribe((resp) => {
        this.actionService.deleteFromDb(name).subscribe(() => {
          this.closeCancel();
          this.loadActiveStrategy();
          this.actionService.getBtcBalance().subscribe();
          this.calculateTotalTransactions();
          this.alertService.addMessage('success', 'Ordine cancellato con successo');
        });
      });
    } else {
      this.closeCancel();
      this.alertService.addMessage('danger', 'Ordine nn ancora aperto riprova fra poco');
    }
  }

  updateStrategy(name: string, status: string) {

    const payload = {
      status: status === 'ACTIVE' ? 'STOP' : 'ACTIVE',
    };
    this.actionService.updateStrategy(name, payload).subscribe((resp) => {
      this.closeStop();
      this.loadActiveStrategy();
      this.calculateTotalTransactions();
    });
  }

  filterResult(name: string, type: string) {
    this.loaded = false;
    let data;

    if (type === 'pairs') {
      this.searchName = '';
      this.searchDate = '';
      this.searchState = 'all';
      if (this.searchFilter !== undefined) {
        data = _.filter(this.clonedStrategy, (o) => {
          return o.coin_pair.includes(name.toUpperCase());
        });
      } else {
        data = this.clonedStrategy;
      }
    } else if (type === 'name') {
      this.searchFilter = '';
      this.searchDate = '';
      this.searchState = 'all';
      if (this.searchName !== undefined) {
        data = _.filter(this.clonedStrategy, (o) => {
          return o.name.includes(name.toUpperCase());
        });
      } else {
        data = this.clonedStrategy;
      }
    } else if (type === 'date') {
      this.searchFilter = '';
      this.searchName = '';
      this.searchState = 'all';
      if (this.searchDate !== undefined) {
        data = _.filter(this.clonedStrategy, (o) => {
          return o.date.includes(name);
        });
      } else {
        data = this.clonedStrategy;
      }
    } else if (type === 'state') {
      this.searchFilter = '';
      this.searchName = '';
      this.searchDate = '';
      const nameUp = name.toUpperCase();

      if (this.searchState !== undefined && name !== 'all') {
        data = _.filter(this.clonedStrategy, (o) => {
          return o.current_status === nameUp;
        });
      } else {
        data = this.clonedStrategy;
      }
    }
    this.activeStrategies = _.orderBy(data, 'name', 'asc');
    this.loaded = true;

  }

  openDetails(data: any) {
    this.stopData = this.activeStrategies[data];
    $(document).on('click', '.showD', () => {
      this.transactionsModal.show('modal-lg');
    });
  }


  showInitialCapital(str: any) {
    if (str.isBtcCapital) {
      if (str.transactions[0] && str.transactions[0].cumulative_quantity) {
        return str.transactions[0].cumulative_quantity;
      }
      return str.capital;
    } else {
      // ALTCOINS
      // if (str.transactions[0] && str.transactions[0].cumulative_quantity ) {
      //   return str.transactions[0].cumulative_quantity;
      // }
      // if (str.current_status === 'SELL') {
      //   return this.fromCoinToBTC(str.capital, str.sell_price);
      // }
      // console.log(this.currentPrices);
      // const price = _.filter(this.currentPrices, (o) => {
      //   return o.name === str.coin_pair;
      // });
      // console.log(price, '<<<');

      if (str.current_initial_price && (str.sell_price < str.current_initial_price)) {
        // console.log('soddisffo',str);
        return this.fromCoinToBTC(str.capital, str.current_initial_price);
      }
      // console.log('nn soddisfso',str.name, str.capital, str.sell_price);

      return this.fromCoinToBTC(str.capital, str.sell_price);
    }

  }

  calculateCapital(type: string) {
    let startCapital = 0;
    let currentCapital = 0;
    let realCurrentCapital = 0;

    switch (type) {
      case 'initial':
        _.forEach(this.activeStrategies, (str) => {
          if (str.order_type !== 'single') {
            if (str.transactions[0] && str.transactions[0].cumulative_quantity && str.isBtcCapital) {
              // tslint:disable-next-line:max-line-length
              startCapital += str.transactions[0].cumulative_quantity;
            } else {
              // tslint:disable-next-line:max-line-length
              startCapital += str.isBtcCapital ? str.capital : str.sell_price < str.current_initial_price ? this.fromCoinToBTC(str.capital, str.current_initial_price) : this.fromCoinToBTC(str.capital, str.sell_price);
            }
          }
        });
        this.btcInitialTotal = startCapital.toFixed(8);
        return startCapital.toFixed(8);
      case 'selled':
        _.forEach(this.activeStrategies, (str) => {
          if (str.order_type !== 'single') {
            // tslint:disable-next-line:max-line-length
            currentCapital += this.calculateSelledCapital(str.capital, str.sell_price, str.current_capital, str.buy_price, str.current_status, str.isBtcCapital);
          }
        });
        this.btcSelledTotal = currentCapital.toFixed(8);
        return currentCapital.toFixed(8);
      case 'current' :
        _.forEach(this.activeStrategies, (str) => {
          if (str.order_type !== 'single') {
            realCurrentCapital += parseFloat(this.calculateCurrentCapital(str.current_capital, str.coin_pair, str));
          }
        });
        this.btcCurrentTotal = realCurrentCapital.toFixed(8);
        return realCurrentCapital.toFixed(8);
    }
  }

  parseDate(date: any) {
    const data = new Date(date);
    // tslint:disable-next-line:max-line-length
    return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + ' - ' + (data.getHours() < 10 ? '0' + data.getHours() : data.getHours()) + ':' + (data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes());
  }

  resetFilter() {
    const result = [];
    this.searchFilter = _.isEmpty(this.searchFilter) ? '' : this.searchFilter;
    result.push({name: this.searchFilter, type: 'pairs'});
    this.searchState = this.searchState === 'all' ? 'all' : this.searchState;
    result.push({name: this.searchState, type: 'state'});
    this.searchName = _.isEmpty(this.searchName) ? '' : this.searchName;
    result.push({name: this.searchName, type: 'name'});
    // this.searchDate = _.isEmpty(this.searchDate) ? '' : this.searchDate;
    this.selecteFilter = result;
    // this.selectedStrategy = [];

  }

  clearFilter() {
    this.searchFilter = undefined;
    this.searchState = 'all';
    this.searchName = undefined;
  }
}

