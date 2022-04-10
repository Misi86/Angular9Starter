import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import * as _ from 'lodash';
import {ActionService} from '../../../core/services/action.service';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {SharingService} from '../../../core/services/sharing.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../../../shared/modal/modal.component';
import {AlertService} from "../../../shared/alert/alert.service";

@Component({
  selector: 'indicators-component',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss'],
})


export class IndicatorsComponent implements OnInit, AfterViewInit {
  @ViewChild('addModal') addModal: ModalComponent;
  @ViewChild('removeModal') removeModal: ModalComponent;
  public candles = [];
  public strategies = [];
  public indicatorForm: FormGroup;
  public candlesticks: any;
  public candlesticksShown: any;
  public initialCap: any;
  public finalCap: any;
  public finalCapTaxed: any;
  public pairs = [];
  public capitalss: any;
  public priceBtc: number;
  public from: any;
  public to: any;
  private activeList = [
    {pair: 'BNBBTC'},
    {pair: 'NULSBTC'},
    {pair: 'NEOBTC'},
    {pair: 'LINKBTC'},
    {pair: 'IOTABTC'},
    {pair: 'ETCBTC'},
    {pair: 'KNCBTC'},
    {pair: 'WTCBTC'},
    {pair: 'SNGLSBTC'},
    {pair: 'GASBTC'},
    {pair: 'SNMBTC'},
    {pair: 'BQXBTC'},
    {pair: 'QTUMBTC'},
    {pair: 'LTCBTC'},
    {pair: 'ETHBTC'},
    {pair: 'ZRXBTC'},
    {pair: 'OMGBTC'},
    {pair: '1INCHBTC'},
    {pair: 'AAVEBTC'},
    {pair: 'ACMBTC'},
    {pair: 'ADABTC'},
    {pair: 'ADXBTC'},
    {pair: 'AERGOBTC'},
    {pair: 'AIONBTC'},
    {pair: 'AKROBTC'},
    {pair: 'ALGOBTC'},
    {pair: 'ALICEBTC'},
    {pair: 'ALPHABTC'},
    {pair: 'AMBBTC'},
    {pair: 'AMPTC'},
    {pair: 'ANKRBTC'},
    {pair: 'APPCBTC'},
    {pair: 'ARBTC'},
    {pair: 'ARDRBTC'},
    {pair: 'ARKBTC'},
    {pair: 'ARPABTC'},
    {pair: 'ASRBTC'},
    {pair: 'ASTBTC'},
    {pair: 'ATABTC'},
    {pair: 'ATMBTC'},
    {pair: 'ATOMBTC'},
    {pair: 'AUCTIONBTC'},
    {pair: 'AUDIOBTC'},
    {pair: 'AUTOBTC'},
    {pair: 'AVABTC'},
    {pair: 'AVAXBTC'},
    {pair: 'AXSBTC'},
    {pair: 'BADGERBTC'},
    {pair: 'BAKEBTC'},
    {pair: 'BANDBTC'},
    {pair: 'BARBTC'},
    {pair: 'BATBTC'},
    {pair: 'BCDBTC'},
    {pair: 'BCHBTC'},
    {pair: 'BEAMBTC'},
    {pair: 'BELBTC'},
    {pair: 'BLZBTC'},
    {pair: 'BNTBTC'},
    {pair: 'BRDBTC'},
    {pair: 'BTCSTBTC'},
    {pair: 'BTGBTC'},
    {pair: 'BTSBTC'},
    {pair: 'BZRXBTC'},
    {pair: 'CAKEBTC'},
    {pair: 'CDTBTC'},
    {pair: 'CELOBTC'},
    {pair: 'CELRBTC'},
    {pair: 'CFXBTC'},
    {pair: 'CHRBTC'},
    {pair: 'CHZBTC'},
    {pair: 'CKBBTC'},
    {pair: 'CNDBTC'},
    {pair: 'COMPBTC'},
    {pair: 'COSBTC'},
    {pair: 'COTIBTC'},
    {pair: 'CRVBTC'},
    {pair: 'CTKBTC'},
    {pair: 'CTSIBTC'},
    {pair: 'CTXCBTC'},
    {pair: 'CVCBTC'},
    {pair: 'DASHBTC'},
    {pair: 'DATABTC'},
    {pair: 'DCRBTC'},
    {pair: 'DEGOBTC'},
    {pair: 'DIABTC'},
    {pair: 'DLTBTC'},
    {pair: 'DNTBTC'},
    {pair: 'DOCKBTC'},
    {pair: 'DODOBTC'},
    {pair: 'DOGEBTC'},
    {pair: 'DOTBTC'},
    {pair: 'DREPBTC'},
    {pair: 'DUSKBTC'},
    {pair: 'EGLDBTC'},
    {pair: 'ELFBTC'},
    {pair: 'ENJBTC'},
    {pair: 'EOSBTC'},
    {pair: 'EPSBTC'},
    {pair: 'EVXBTC'},
    {pair: 'EZBTC'},
    {pair: 'FETBTC'},
    {pair: 'FILBTC'},
    {pair: 'FIOBTC'},
    {pair: 'FIROBTC'},
    {pair: 'FISBTC'},
    {pair: 'FLMBTC'},
    {pair: 'FORBTC'},
    {pair: 'FORTHBTC'},
    {pair: 'FRONTBTC'},
    {pair: 'FTMBTC'},
    {pair: 'FTTBTC'},
    {pair: 'FUNBTC'},
    {pair: 'FXSBTC'},
    {pair: 'GLMBTC'},
    {pair: 'GOBTC'},
    {pair: 'GRSBTC'},
    {pair: 'GRTBTC'},
    {pair: 'GTCBTC'},
    {pair: 'GTOBTC'},
    {pair: 'GVTBTC'},
    {pair: 'GXSBTC'},
    {pair: 'HARDBTC'},
    {pair: 'HBARBTC'},
    {pair: 'HIVEBTC'},
    {pair: 'HNTBTC'},
    {pair: 'ICPBTC'},
    {pair: 'ICXBTC'},
    {pair: 'IDEXBTC'},
    {pair: 'INJBTC'},
    {pair: 'IOSTBTC'},
    {pair: 'IOTXBTC'},
    {pair: 'IRISBTC'},
    {pair: 'JSTBTC'},
    {pair: 'JASMYBTC'},
    {pair: 'JUVBTC'},
    {pair: 'KAVABTC'},
    {pair: 'KEEPBTC'},
    {pair: 'KLAYBTC'},
    {pair: 'KMDBTC'},
    {pair: 'LINABTC'},
    {pair: 'LITBTC'},
    {pair: 'LOOMBTC'},
    {pair: 'LPTBTC'},
    {pair: 'LRCBTC'},
    {pair: 'LSKBTC'},
    {pair: 'LTOBTC'},
    {pair: 'LUNABTC'},
    {pair: 'MANABTC'},
    {pair: 'MATICBTC'},
    {pair: 'MDABTC'},
    {pair: 'MDTBTC'},
    {pair: 'MDXBTC'},
    {pair: 'MIRBTC'},
    {pair: 'MITHBTC'},
    {pair: 'MKRBTC'},
    {pair: 'MTHBTC'},
    {pair: 'MTLBTC'},
    {pair: 'NANOBTC'},
    {pair: 'NASBTC'},
    {pair: 'NAVBTC'},
    {pair: 'NBSBTC'},
    {pair: 'NEARBTC'},
    {pair: 'NEBLBTC'},
    {pair: 'NKNBTC'},
    {pair: 'NMRBTC'},
    {pair: 'NUBTC'},
    {pair: 'NXSBTC'},
    {pair: 'OAXBTC'},
    {pair: 'OCEANBTC'},
    {pair: 'OGBTC'},
    {pair: 'OGNBTC'},
    {pair: 'OMBTC'},
    {pair: 'ONEBTC'},
    {pair: 'ONGBTC'},
    {pair: 'ONTBTC'},
    {pair: 'ORNBTC'},
    {pair: 'OXTBTC'},
    {pair: 'PAXGBTC'},
    {pair: 'PERLBTC'},
    {pair: 'PERPBTC'},
    {pair: 'PHABTC'},
    {pair: 'PHBBTC'},
    {pair: 'PIVXBTC'},
    {pair: 'PNTBTC'},
    {pair: 'POABTC'},
    {pair: 'POLSBTC'},
    {pair: 'POLYBTC'},
    {pair: 'PONDBTC'},
    {pair: 'POWRBTC'},
    {pair: 'PPTBTC'},
    {pair: 'PSGBTC'},
    {pair: 'QKCBTC'},
    {pair: 'QLCBTC'},
    {pair: 'QSPBTC'},
    {pair: 'RAMPBTC'},
    {pair: 'RCNBTC'},
    {pair: 'RDNBTC'},
    {pair: 'REEFBTC'},
    {pair: 'RENBTC'},
    {pair: 'RENBTCBTC'},
    {pair: 'REPBTC'},
    {pair: 'REQBTC'},
    {pair: 'RIFBTC'},
    {pair: 'RLCBTC'},
    {pair: 'ROSEBTC'},
    {pair: 'RSRBTC'},
    {pair: 'RUNEBTC'},
    {pair: 'RVNBTC'},
    {pair: 'SANDBTC'},
    {pair: 'SCBTC'},
    {pair: 'SCRTBTC'},
    {pair: 'SFPBTC'},
    {pair: 'SKLBTC'},
    {pair: 'SKYBTC'},
    {pair: 'SNTBTC'},
    {pair: 'SNXBTC'},
    {pair: 'SOLBTC'},
    {pair: 'SPELLBTC'},
    {pair: 'SRMBTC'},
    {pair: 'STEEMBTC'},
    {pair: 'STMXBTC'},
    {pair: 'STORJBTC'},
    {pair: 'STPTBTC'},
    {pair: 'STRAXBTC'},
    {pair: 'STXBTC'},
    {pair: 'SUPERBTC'},
    {pair: 'SUSDBTC'},
    {pair: 'SUSHIBTC'},
    {pair: 'SXPBTC'},
    {pair: 'SYSBTC'},
    {pair: 'TCTBTC'},
    {pair: 'TFUELBTC'},
    {pair: 'THETABTC'},
    {pair: 'TKOBTC'},
    {pair: 'TLMBTC'},
    {pair: 'TOMOBTC'},
    {pair: 'TORNBTC'},
    {pair: 'TRBBTC'},
    {pair: 'TROYBTC'},
    {pair: 'TRUBTC'},
    {pair: 'TRXBTC'},
    {pair: 'TVKBTC'},
    {pair: 'TWTBTC'},
    {pair: 'UMABTC'},
    {pair: 'UNFIBTC'},
    {pair: 'UNIBTC'},
    {pair: 'UTKBTC'},
    {pair: 'VETBTC'},
    {pair: 'VIABTC'},
    {pair: 'VIBBTC'},
    {pair: 'VIDTBTC'},
    {pair: 'VITEBTC'},
    {pair: 'WABIBTC'},
    {pair: 'WANBTC'},
    {pair: 'WAVESBTC'},
    {pair: 'WBTCBTC'},
    {pair: 'WINGBTC'},
    {pair: 'WNXMBTC'},
    {pair: 'WPRBTC'},
    {pair: 'WRXBTC'},
    {pair: 'XEMBTC'},
    {pair: 'XLMBTC'},
    {pair: 'XMRBTC'},
    {pair: 'XRPBTC'},
    {pair: 'XTZBTC'},
    {pair: 'XVGBTC'},
    {pair: 'XVSBTC'},
    {pair: 'YFIBTC'},
    {pair: 'YFIIBTC'},
    {pair: 'YOYOBTC'},
    {pair: 'ZECBTC'},
    {pair: 'ZENBTC'},
    {pair: 'ZILBTC'},
    {pair: 'DGBBTC'},
    {pair: 'BALBTC'},
    {pair: 'ANTBTC'},
    {pair: 'KSMBTC'},
    {pair: 'AGIXBTC'}];
  public totalGiri = 0;
  public parsedData = [];
  colorScheme = {
    domain: ['#A93F63', '#5AA454', '#AAAAAA']
  };
  public color: any;
  public monitoredPairs = [];
  public pairM: any;
  public pairToRemove: any;
  public projections = [];
  public filteredProjections = [];
  public pairToShow = [];
  public pairToShown: any;
  public minDates: any;
  public toDay: any;
  public timeBefore: any;
  public showCandleSelected: any;
  public fromProjection: any;
  public toProjection: any;
  public salti: string;
  public filters = [];
  public topPerformer = [];
  public aWeekAgo: any;
  public rowToShow = 12;
  public countProjections: any;
  public fromTop: any;
  public toTop: any;
  public bestLast = [];
  public laddaBest = false;
  public perCentStrategy = 20;
  public selectedProjections = [];

  constructor(public actionService: ActionService,
              private fb: FormBuilder,
              private cdFref: ChangeDetectorRef,
              public alertService: AlertService,
              private sharingService: SharingService,
              public calendar: NgbCalendar) {

    this.color = localStorage.getItem('cssmode') === 'light';

    this.indicatorForm = this.fb.group({
      indicator_cap: [1000, Validators.required],
      indicator_n_strat: ['', Validators.required],
      indicator_price: ['', [Validators.required]],
      indicator_satoshi: ['1', Validators.required],
      indicator_pair: ['', Validators.required],
      indicator_timeframe: ['1h', Validators.required],
      indicator_from: ['', Validators.required],
      indicator_to: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.actionService.getBtcPrice().subscribe();

    this.sharingService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('value')) {
        this.color = res.value;
      }
    });
    this.getPairs();
    this.getProjections();
    this.setDates();
    this.manageTopPerformer();

    this.pairToShown = 'all';
    this.salti = 'all';
    this.fromProjection = this.minDates;
    this.toProjection = this.toDay;
    this.filters = [
      {name: 'pair', val: this.pairToShown},
      {name: 'jumps', val: this.salti},
      {name: 'from', val: this.minDates},
      {name: 'to', val: this.toDay}];
  }

  ngAfterViewInit() {
    this.actionService.getBtcPrice().subscribe();
    this.loadPairs();
    this.cdFref.detectChanges();
  }

  // PROIEIZIONI

  loadPrice() {
    const value = this.formValue.indicator_pair.value;
    if (this.pairs.length > 0) {
      _.forEach(this.pairs, (o) => {
        if (o.name === value) {
          this.formValue.indicator_price.setValue(o.price.toFixed(8));
        }
      });
    }
  }

  loadPairs() {
    this.actionService.getAllPairs().subscribe((resp) => {
      const result = _.filter(resp, (o) => {
        return o.price <= 0.00001;
      });
      this.pairs = [];
      _.forEach(this.activeList, (o) => {

        _.forEach(result, (p) => {
          if (o.pair === p.name) {
            this.pairs.push(p);
          }
        });
      });
    });
  }

  load() {
    this.createWindow();
    this.createStrategies(this.formValue.indicator_n_strat.value, parseFloat(this.formValue.indicator_price.value));
    if (this.formValue.indicator_pair.value !== '') {
      _.forEach(this.strategies, (s) => {
        s.countB = 0;
        s.countS = 0;
        delete s.total;
      });
      // tslint:disable-next-line:max-line-length
      this.actionService.getCandleStick(this.formValue.indicator_pair.value, this.formValue.indicator_timeframe.value, this.timeBefore).subscribe((resp) => {
        const ticks = [];
        _.forEach(resp.ticks, (t) => {
          ticks.push({date: new Date(t[0]).toLocaleString('it-IT'), high: t[2], low: t[3], close: t[4], opens: t[1]});
        });
        this.candlesticks = ticks.slice(0, this.showCandleSelected);
        this.candlesticksShown = ticks.slice(0, this.showCandleSelected);
        // console.log(this.candlesticksShown)
      });
    }


  }

  createStrategies(num: any, price: any) {
    // tslint:disable-next-line:prefer-for-of
    const tempArray = [];
    let jump;
    switch (this.formValue.indicator_satoshi.value) {
      case '1':
        jump = 1e-8;
        break;
      case '2':
        jump = 2e-8;
        break;
      case '3':
        jump = 3e-8;
        break;
      case '4':
        jump = 4e-8;
        break;
      default:
        jump = 1e-8;
    }
    for (let i = 0; i < num; i++) {
      // tslint:disable-next-line:max-line-length
      tempArray.push({
        buy: parseFloat((price + (jump * i)).toFixed(8)),
        sell: parseFloat(((price + (jump * i)) + jump).toFixed(8)),
        isBuyed: false,
        countS: 0,
        countB: 0
      });
    }
    this.strategies = tempArray;
  }

  calculateBuy(id) {
    // do calculation and set isBuyed to true;
    this.strategies[id].countB++;
    this.strategies[id].isBuyed = true;

  }

  calculateSell(id) {
    // do calculation and set isBuyed to false;
    this.strategies[id].countS++;
    this.strategies[id].isBuyed = false;
  }

  calculateFees(value: any) {
    const tax = ((value / 100) * 0.1);
    return (value - tax);
  }

  calculateDelta(p1: any, p2: any) {
    const temp = (p2 - p1) / p1;
    return (temp * 100).toFixed(2);
  }

  start() {

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.candlesticks.length; i++) {
      for (let j = 0; j < this.strategies.length; j++) {
        if (this.strategies[j].buy > this.candlesticks[i].low &&
          !this.strategies[j].isBuyed) {
          this.calculateBuy(j);
        }
        if (this.strategies[j].sell < this.candlesticks[i].high &&
          this.strategies[j].isBuyed) {
          this.calculateSell(j);
        }
        if (this.strategies[j].buy > this.candlesticks[i].close &&
          this.strategies[j].buy < this.candlesticks[i].high &&
          !this.strategies[j].isBuyed) {
          this.calculateBuy(j);
        }
        if (this.strategies[j].sell < this.candlesticks[i].close &&
          this.strategies[j].sell > this.candlesticks[i].low &&
          this.strategies[j].isBuyed) {
          this.calculateSell(j);
        }
      }

    }
    this.calculateData();
  }

  calculateData() {
    // do the math here based on timeframe
    this.actionService.getBtcPrice().subscribe();
    const price = this.actionService.priceBtc;
    this.priceBtc = this.actionService.priceBtc;
    if (price) {
      _.forEach(this.strategies, (d, i) => {
        let capital = parseFloat((this.formValue.indicator_cap.value / price).toFixed(8));
        if ((d.countB === d.countS && d.countB !== 0) || (d.countB > d.countS && d.countB !== 0 && d.countS !== 0)) {
          let capitalTaxed = 0;
          // tslint:disable-next-line:no-shadowed-variable
          for (let i = 0; i < d.countS; i++) {
            const buy = Math.floor(capital / d.buy);
            const buyTaxed = this.calculateFees(buy);
            capital = buy * d.sell;
            capitalTaxed = buyTaxed * d.sell;
            capitalTaxed = this.calculateFees(capitalTaxed);
          }
          d.total = capital.toFixed(8);
          d.totalTaxed = capitalTaxed.toFixed(8);
        } else if (d.countB === 1 && d.countS === 0) {

          const temp = Math.floor(capital / d.buy);
          const tempT = this.calculateFees(temp);
          d.total = (temp * d.buy).toFixed(8);
          d.totalTaxed = (tempT * d.buy).toFixed(8);

        } else {
          d.total = capital;
          d.totalTaxed = capital;
        }
      });

      this.capitalss = parseFloat((this.formValue.indicator_cap.value / price).toFixed(8));
      const inittial = (this.capitalss * this.strategies.length);
      let result = 0;
      let taxedResult = 0;
      result = _.sumBy(this.strategies, (o) => {
        return parseFloat(o.total);
      });
      taxedResult = _.sumBy(this.strategies, (o) => {
        return parseFloat(o.totalTaxed);
      });

      const totalGiri = _.sumBy(this.strategies, (o) => {
        return o.countS;
      });
      this.totalGiri = totalGiri;
      this.initialCap = 0;
      this.finalCap = 0;
      this.finalCapTaxed = 0;
      this.initialCap = (inittial * price).toFixed(2);
      this.finalCap = (result * price).toFixed(2);
      this.finalCapTaxed = (taxedResult * price).toFixed(2);
      const dateFrom = _.last(this.candlesticks);
      const dateTo = _.first(this.candlesticks);
      this.from = dateFrom.date;
      this.to = dateTo.date;
      const t = [];
      _.forEach(this.strategies, (s, i) => {
        const name = s.buy.toFixed(8);
        const nameF = s.sell.toFixed(8);
        t.push(
          {
            name: name.slice(-3) + '-' + nameF.slice(-3),
            series: [{name: 'buy', value: s.countB}, {name: 'sell', value: s.countS}]
          }
        );
      });
      this.parsedData = [...t];
      this.candlesticks = null;
    }
  }

  setDates() {
    const date = new Date();
    const d = new Date();
    const w = new Date();
    d.setMonth(d.getMonth() - 1);
    w.setDate(w.getDate() - 7);

    this.toDay = {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
    this.minDates = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()};
    this.aWeekAgo = {year: w.getFullYear(), month: w.getMonth() + 1, day: w.getDate()};
  }

  createWindow() {
    if (this.formValue.indicator_from.value !== '' && this.formValue.indicator_to.value !== '') {
      // tslint:disable-next-line:max-line-length
      this.timeBefore = 0;
      this.showCandleSelected = 0;
      const from = this.formValue.indicator_from.value.month + '/' + this.formValue.indicator_from.value.day + '/' + this.formValue.indicator_from.value.year;
      // tslint:disable-next-line:max-line-length
      const to = this.formValue.indicator_to.value.month + '/' + this.formValue.indicator_to.value.day + '/' + this.formValue.indicator_to.value.year;
      const toDay = this.toDay.month + '/' + this.toDay.day + '/' + this.toDay.year;
      const date1 = new Date(from);
      const date2 = new Date(to);
      const dateTo = new Date(toDay);
      // @ts-ignore
      const diffTime = Math.abs(date2 - date1);
      // @ts-ignore
      const diffTimeT = Math.abs(dateTo - date1);
      const diffDays = (Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
      // tslint:disable-next-line:max-line-length
      this.timeBefore = this.formValue.indicator_timeframe.value === '1h' ? (Math.ceil(diffTimeT / (1000 * 60 * 60 * 24))) * 24 : (Math.ceil(diffTimeT / (1000 * 60 * 60 * 24))) + 1;
      this.showCandleSelected = this.formValue.indicator_timeframe.value === '1h' ? diffDays * 24 : diffDays + 1;
    }
  }

  get formValue() {
    return this.indicatorForm.controls;
  }

  // MONITOR

  setPairs() {
    this.actionService.setPairToMonitor(this.pairM).subscribe(data => {
      this.getPairs();
      this.manageAddModal(false);
    });
  }

  parseScenario(cases: any){
      switch (cases) {
        case 10:
          return '+';
        case  -5:
          return '+/-';
        case -10:
          return '-';
      }
  }

  calculateRecap(result: any, array: any, tot?: any, delta?: any){
    let res = 0;
    switch (result) {
      case 'str':
        res = _.sumBy(array , (a) => {
          if ( a.number_strategies){
            return a.number_strategies;
          } else {
            return 10;
          }
        });
        return res;
      case 'tot':
        return array.length * 1000;
      case 'delta':
        res = _.sumBy(array, 'delta_taxed');
        return (res / array.length).toFixed(2);
      case 'taxed':

        res = (tot / 100) * delta;
        return res.toFixed(2);
    }

  }
  getPairs() {
    this.actionService.getPairMonitored().subscribe(data => {
      this.monitoredPairs = data;
      const narray = Math.ceil(this.monitoredPairs.length / 12);
      const Arr = [];
      for (let i = 0; i < narray; i++) {
        Arr.push([]);
      }
      _.forEach(data, (p, j) => {
        const i = Math.floor(j / 12);
        if (j < (12 * (i + 1))) {
          Arr[i].push(p);
        }
      });
      this.monitoredPairs = Arr;
    });
  }

  removePair() {
    this.actionService.deletePairToMonitor(this.pairToRemove).subscribe(data => {
      this.getPairs();
      this.manageDeleteModal(false);
    });

  }

  manageAddModal(action: boolean) {
    if (action) {
      this.addModal.show('modal-s');
      return;
    }
    this.addModal.dismiss();
  }

  manageDeleteModal(action: boolean, pair?: any) {
    if (action) {
      this.pairToRemove = pair;
      this.removeModal.show('modal-s');
      return;
    }
    this.removeModal.dismiss();
    this.pairToRemove = '';
  }

  getFiltered() {
    const payload = this.filters;
    _.forEach(payload, (f) => {
      if (f.name === 'from' && _.isObject(f.val)) {
        const fr = f.val.month + '/' + f.val.day + '/' + f.val.year;
        f.val = fr;
      }
      if (f.name === 'to' && _.isObject(f.val)) {
        const tr = f.val.month + '/' + (f.val.day) + '/' + f.val.year;
        f.val = tr;
      }
    });
    this.actionService.getFilteredProjections(0, this.rowToShow, payload).subscribe(data => {
      this.filteredProjections = _.cloneDeep(data);
      this.actionService.getProjectionCount(payload).subscribe( resp => {
        this.countProjections = resp.count;
      });
    });
  }

  getProjections() {
    this.actionService.getProjections().subscribe(data => {
      this.projections = data;
      _.forEach(data, (d) => {
        this.pairToShow.push(d.pair);
      });
      this.pairToShow = _.uniq(this.pairToShow, 'pair');
      this.filterProjections(this.filters);
    });
    this.actionService.getProjectionCount(this.filters).subscribe( resp => {
      this.countProjections = resp.count;
    });
  }


  manageTopPerformer(side?: boolean) {
    // if (true){
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));

      if ( side != null ){
        this.selectedProjections = [];
        if ( !side ){
          this.fromTop = new Date(decodeURIComponent(this.fromTop));
          this.toTop = new Date(decodeURIComponent(this.toTop));
          const bfrom = new Date(this.fromTop.setDate(this.fromTop.getDate() - 7));
          this.fromTop = (bfrom.getMonth() + 1) + '%2F' + bfrom.getDate() + '%2F' + bfrom.getFullYear();
          const bto = new Date(this.toTop.setDate( this.toTop.getDate() - 7));
          this.toTop = (bto.getMonth() + 1) + '%2F' + bto.getDate() + '%2F' + bto.getFullYear();
        } else {
          this.fromTop = new Date(decodeURIComponent(this.fromTop));
          this.toTop = new Date(decodeURIComponent(this.toTop));
          const bfrom = new Date(this.fromTop.setDate(this.fromTop.getDate() + 7));
          this.fromTop = (bfrom.getMonth() + 1) + '%2F' + bfrom.getDate() + '%2F' + bfrom.getFullYear();
          const bto = new Date(this.toTop.setDate( this.toTop.getDate() + 7));
          this.toTop = (bto.getMonth() + 1) + '%2F' + bto.getDate() + '%2F' + bto.getFullYear();
        }
        this.actionService.getTopProjections(this.fromTop, this.toTop).subscribe( top => {
          this.topPerformer = _.uniqBy(top , 'pair').slice(0, 10);
          // console.log(this.topPerformer)
        });

      }
      else {

        this.toTop = (lastSunday.getMonth() + 1) + '%2F' + lastSunday.getDate() + '%2F' + lastSunday.getFullYear();
        const fromLast = _.cloneDeep(new Date(lastSunday.setDate(lastSunday.getDate() - 7)));
        this.fromTop = (fromLast.getMonth() + 1) + '%2F' + fromLast.getDate() + '%2F' + fromLast.getFullYear();
        this.actionService.getTopProjections(this.fromTop, this.toTop).subscribe( top => {
          this.topPerformer = _.uniqBy(top , 'pair').slice(0, 10);
        });
      }
    // }
  }

  getBestLast(){
    this.actionService.getTopProjections(this.fromTop, this.toTop).subscribe( top => {

      const payload = { projections: !this.selectedProjections.length ? this.topPerformer : this.selectedProjections,
                        percentage_strategy_number: this.perCentStrategy};
      this.laddaBest = true;
      this.actionService.getLastBestProjections(this.fromTop, this.toTop, payload).subscribe( data => {
        this.bestLast = data;
        this.laddaBest = false;
      }, err => {
        this.bestLast = [];
        this.alertService.addMessage('danger', err.message);
        this.laddaBest = false;
      });

    });
  }
  addPairtoParse(pro: any, event: any){
    if (event.target.checked ){
      this.selectedProjections.push(pro);
    }
    else{
      this.selectedProjections = _.remove(this.selectedProjections, (n) => {
        return n.pair !== pro.pair;
      });
    }
  }

  filtersSelected(type: string, value: any) {

    if (_.find(this.filters, {name: type})) {
      this.filters = _.remove(this.filters, (o) => {
        return o.name !== type;
      });
      this.filters.push({name: type, val: value});
    } else {
      this.filters.push({name: type, val: value});
    }
    this.getFiltered();
  }

  filterProjections(filter: any) {
    let result = this.projections;
    _.forEach(filter, (f) => {

      if (f.name === 'from') {
        const fr = new Date(f.val.month + '/' + f.val.day + '/' + f.val.year);
        result = _.filter(result, (o) => {
          return new Date(o.from) >= fr;
        });
      }
      if (f.name === 'to') {
        const tr = new Date(f.val.month + '/' + (f.val.day) + '/' + f.val.year);
        result = _.filter(result, (o) => {
          return new Date(o.to) <= tr;
        });
      }
      if (f.name === 'pair' && f.val !== 'all') {
        result = _.filter(result, {pair: f.val});
      }
      if (f.name === 'jumps' && f.val !== 'all') {
        result = _.filter(result, {jumps: parseFloat(f.val)});
      }

    });

    this.filteredProjections = result;
  }

  formatDate(date: any) {
    const d = new Date(date);
    return d.toLocaleString('it-IT');
  }

  loadRow(action: boolean) {
    if (action) {
      this.rowToShow += 12;
      this.getFiltered();
    } else {
      this.rowToShow -= 12;
      this.getFiltered();
    }
  }
}

