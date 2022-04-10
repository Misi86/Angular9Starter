import {AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ModalComponent} from '../../../shared/modal/modal.component';
import {AlertService} from '../../../shared/alert/alert.service';
import {ActionService} from '../../../core/services/action.service';
import {DatePipe} from '@angular/common';
import * as _ from 'lodash';
import {Options} from '@angular-slider/ngx-slider';
import {AuthService} from '../../../core/services/auth.service';


declare var $: any;

@Component({
  selector: 'strategies-component',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.scss'],
  providers: [DatePipe]
})
export class StrategiesComponent implements OnInit, AfterViewChecked, AfterViewInit {
  public strategiesForm: FormGroup;
  @ViewChild('confirmModal') confirmModal: ModalComponent;
  public pairs: any = [];
  private currentPrice: number;
  private btcPrice: number;
  public strategyType = 'single';
  public isStrPresent: boolean;
  public options: Options;
  public optionsStr: Options;
  public pairSize: any;
  public strLength = 0;
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
    {pair: 'AMPBTC'},
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
  public capitalType = 'btc';
  public isBtcCapital = true;
  public availableCapital: any;
  public minOrder = 0;
  public orderType = 'cyclic';
  public isSegmented = false;
  public role: string;
  public btcBalance: any;
  public showMsg = false;
  public firstCall: any;

  constructor(private fb: FormBuilder,
              private alert: AlertService,
              private cdFref: ChangeDetectorRef,
              private actionService: ActionService,
              private alertService: AlertService,
              private authService: AuthService,
              private datePipe: DatePipe) {

    this.role = this.authService.role;
    this.strategiesForm = this.fb.group({
      strategy_name: [''],
      strategy_pairs: ['', Validators.required],
      strategy_capital: ['', [Validators.required]],
      strategy_buy_price: ['', Validators.required],
      strategy_sell_price: [''],
      strategy_jumps: [1],
      strategy_capitalType: ['btc'],
      strategy_segmented: [false],
      strategy_orderType: ['cyclic'],
      strategy_pairs_size: [null],
      strategy_direction: [''],
      strategy_size: [''],
    });
    this.options = {
      floor: 2,
      ceil: 50,
      step: 1
    };
    this.optionsStr = {
      floor: 0,
      ceil: 1000,
      step: 1
    };


  }

  ngOnInit() {
    this.loadPairs();

    this.actionService.getSpecificPairs('BTCUSDT').subscribe((resp) => {
      this.btcPrice = resp.price;
    });

  }

  ngAfterViewInit() {

    this.manageValidators(this.strategyType);

    this.cdFref.detectChanges();

  }

  ngAfterViewChecked() {

    this.btcBalance = this.actionService.balanceBtc;
  }

  checkInvestedCapital(type: string) {
    let disabled = false;
    if (type !== 'btc') {
      if (this.strategyType === 'single') {
        if (this.availableCapital < this.minOrder || this.formValue.strategy_capital.value >= this.availableCapital) {
          disabled = true;
        }
      } else {
        // tslint:disable-next-line:max-line-length
        if (this.availableCapital < this.minOrder || (this.formValue.strategy_capital.value * this.formValue.strategy_size.value) >= this.availableCapital) {
          disabled = true;
        }
      }

    } else {
      if (this.strategyType === 'single') {
        if (this.formValue.strategy_capital.value >= this.btcBalance) {
          disabled = true;
        }
      } else {
        if ((this.formValue.strategy_capital.value * this.formValue.strategy_size.value) >= this.btcBalance) {
          disabled = true;
        }
      }
    }

    this.showMsg = disabled;
    return disabled;
  }

  manageValidators(str: any) {

    if (str === 'single') {
      this.strategiesForm.reset();
      this.formValue.strategy_name.setValidators([Validators.required]);
      this.formValue.strategy_sell_price.setValidators([Validators.required]);
      this.formValue.strategy_direction.clearValidators();
      this.formValue.strategy_size.clearValidators();
      // this.formValue.strategy_jumps.clearValidators();
      this.updateFormStatus();
    } else {
      this.isStrPresent = false;
      this.strategiesForm.reset();
      _.forEach(this.formValue, (s) => {
        if (s.name !== 'strategy_pairs_size') {
          s.setValue('');
        }
      });
      this.formValue.strategy_name.clearValidators();
      this.formValue.strategy_sell_price.clearValidators();
      this.formValue.strategy_direction.setValidators([Validators.required]);
      this.formValue.strategy_size.setValidators([Validators.required]);
      // this.formValue.strategy_jumps.setValidators([Validators.required]);
      this.updateFormStatus();
    }
    this.formValue.strategy_capitalType.setValue('btc');
    this.formValue.strategy_orderType.setValue('cyclic');
    this.isBtcCapital = true;
  }

  updateFormStatus() {
    this.formValue.strategy_name.updateValueAndValidity();
    this.formValue.strategy_sell_price.updateValueAndValidity();
    this.formValue.strategy_direction.updateValueAndValidity();
    this.formValue.strategy_size.updateValueAndValidity();
  }

  checkIfExist(name) {
    if (name !== '/' && name !== '' && this.strategyType === 'single') {
      this.actionService.checkStrategy(name).subscribe((resp) => {
        if (_.isString(resp.success)) {
          this.isStrPresent = false;
        } else {
          this.isStrPresent = true;
          this.alertService.addMessage('danger', 'Nome strategia presente');
        }
        return this.isStrPresent;
      }, (error) => {

      });
    }
  }

  loadPairs() {
    this.actionService.getAllPairs().subscribe((resp) => {
      this.firstCall = _.cloneDeep(resp);
      this.setPairs();
      },
      (error) => {
      });
  }

  setPairs(){

    if (this.formValue.strategy_pairs_size.value === '' || this.formValue.strategy_pairs_size.value === null) {
      const result = _.filter(this.firstCall, (o) => {
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
      this.formValue.strategy_pairs_size.setValue('999');
      this.strLength = this.pairs.length;
    } else {
      // tslint:disable-next-line:max-line-length
      const pSize = (this.formValue.strategy_pairs_size.value);
      const value = this.formValue.strategy_pairs_size.value < 100 ? this.formValue.strategy_pairs_size.value < 10 ? '0.0000000' + pSize : '0.000000' + pSize : '0.00000' + pSize;
      const result2 = _.filter(this.firstCall, (o) => {
        return o.price <= parseFloat(value);
      });
      this.pairs = [];
      _.forEach(this.activeList, (o) => {
        _.forEach(result2, (p) => {
          if (o.pair === p.name) {
            this.pairs.push(p);
          }
        });

      });
      this.strLength = this.pairs.length;
    }
  }

  loadPrices() {
    const pairs = this.formValue.strategy_pairs.value;
    if (pairs) {
      const price = _.find(this.pairs, {name: pairs});
      this.currentPrice = price.price;
      const formattedPrice = Math.floor(price.price.toFixed(8));
      this.formValue.strategy_buy_price.setValue(price.price.toFixed(8));
      this.formValue.strategy_sell_price.setValue(price.price.toFixed(8));
      this.formValue.strategy_capitalType.setValue('btc');
      this.isBtcCapital = true;
      this.getAvailableBalance(pairs);
    }

  }

  initializeStrategy() {
    let quantity;
    if (this.capitalType === 'btc') {
      quantity = this.formValue.strategy_capital.value / parseFloat(this.formValue.strategy_buy_price.value);
    } else {
      quantity = this.formValue.strategy_capital.value;
    }
    const date = new Date();
    // console.log( parseFloat(this.formValue.strategy_sell_price.value) , this.formValue.strategy_sell_price.value);  : (this.formValue.strategy_capital.value * this.currentPrice).toFixed(8)
    const payload = {
      name: this.formValue.strategy_name.value,
      coin_pair: this.formValue.strategy_pairs.value,
      capital: this.formValue.strategy_capital.value,
      quantity: Math.floor(parseFloat(quantity.toFixed(3))),
      current_capital: this.formValue.strategy_capital.value,
      current_status: this.capitalType === 'btc' ? 'BUY' : 'SELL',
      buy_price: parseFloat(this.formValue.strategy_buy_price.value),
      sell_price: parseFloat(this.formValue.strategy_sell_price.value),
      current_initial_price: this.currentPrice,
      date: this.datePipe.transform(date, 'yyyy-MM-dd'),
      status: this.orderType !== 'single' ? 'ACTIVE' : 'INACTIVE',
      isBtcCapital: this.capitalType === 'btc',
      order_type: this.orderType,
    };
    if (this.formValue.strategy_segmented.value === true) {
      const size = (400 / this.btcPrice).toFixed(8);
      // console.log(payload, size)
      this.actionService.setStrategySplitted(payload, size).subscribe((resp) => {
          if (resp) {
            this.close();
            this.actionService.getBtcBalance().subscribe();
            this.alertService.addMessage('success', 'Strategia inizializzata con successo');
          }
        },
        (error) => {
          this.close();
        });

    } else {
      this.actionService.setStrategy(payload).subscribe((resp) => {
          if (resp) {
            this.close();
            this.actionService.getBtcBalance().subscribe();
            this.alertService.addMessage('success', 'Strategia inizializzata con successo');
          }
        },
        (error) => {
          this.close();
        });
    }


  }

  checkSizeOrder(type: string) {
    if (this.formValue.strategy_capital.value) {

      let result = false;

      if (this.formValue.strategy_capital.value * this.btcPrice > 800 && type === 'btc') {
        // console.log(this.formValue.strategy_capital.value, this.currentPrice, this.formValue.strategy_capital.value * this.currentPrice);
        // const val = this.formValue.strategy_capital.value * this.currentPrice;
        // const pivot = 400 / this.btcPrice;
        // console.log(val, pivot)
        result = true;
      }

      if (type !== 'btc') {
        const val = this.formValue.strategy_capital.value * this.currentPrice;
        const pivot = 400 / this.btcPrice;
        // console.log(val, pivot, 2 * pivot);
        if (val > (2 * pivot)) {
          result = true;
        }
      }
      return result;
    }
  }

  checkSizeAltcoin() {
    if (this.formValue.strategy_capitalType.value !== 'btc' && this.strategiesForm.valid) {
      if (this.strategyType !== 'single') {
        const count = this.availableCapital / this.formValue.strategy_capital.value;
        // tslint:disable-next-line:max-line-length
        if (count >= 2 && count >= this.formValue.strategy_size.value && (this.formValue.strategy_capital.value > this.minOrder.toFixed(0))) {
          return true;
        } else {
          return false;
        }
      } else {
        // tslint:disable-next-line:max-line-length
        if (this.formValue.strategy_capital.value > this.availableCapital || (this.formValue.strategy_capital.value < this.minOrder.toFixed(0))) {
          return false;
        } else {
          return true;
        }
      }
    } else if (this.formValue.strategy_capitalType.value === 'btc') {
      return true;
    }

  }

  getAvailableBalance(pair) {
    this.actionService.getSpecificBalance(pair).subscribe((resp) => {
        this.minOrder = 0.00011 / this.currentPrice;
        // console.log('min order: ', this.minOrder);
        if (resp.pair_balance > this.minOrder) {
          this.availableCapital = parseFloat(resp.pair_balance);
          this.isBtcCapital = false;

        } else {
          this.availableCapital = 0;
          this.isBtcCapital = true;
        }
      },
      (error) => {
      });
  }

  initializeStrategies() {
    let quantity;
    if (this.isBtcCapital) {
      quantity = this.formValue.strategy_capital.value / parseFloat(this.formValue.strategy_buy_price.value);
    } else {
      quantity = this.formValue.strategy_capital.value;
    }
    const payload = {
      coin_pair: this.formValue.strategy_pairs.value,
      capital: this.formValue.strategy_capital.value,
      quantity: Math.round(parseFloat(quantity.toFixed(3))),
      price: parseFloat(this.formValue.strategy_buy_price.value),
      current_initial_price: this.currentPrice,
      n_strategy: this.formValue.strategy_size.value,
      order: this.formValue.strategy_direction.value,
      // tslint:disable-next-line:radix
      jumps: parseInt(this.formValue.strategy_jumps.value),
      isBtcCapital: this.capitalType === 'btc',
      order_type: this.orderType
    };
    // console.log(payload);
    if (this.formValue.strategy_segmented.value === true) {
      // tslint:disable-next-line:max-line-length
      const size = (400 / this.btcPrice).toFixed(8) ;
      // console.log(payload, size)
      this.actionService.setStrategiesSplitted(payload, size).subscribe((resp) => {
          if (resp) {
            this.close();
            this.actionService.getBtcBalance().subscribe();
            this.alertService.addMessage('success', resp.success);
          }
        },
        (error) => {
          this.close();
          this.alertService.addMessage('danger', error.error);

        });
    } else {
      this.actionService.setStrategies(payload).subscribe((resp) => {
          if (resp) {
            this.close();
            this.actionService.getBtcBalance().subscribe();
            this.alertService.addMessage('success', resp.success);
          }
        },
        (error) => {
          this.close();
          this.alertService.addMessage('danger', error.error);

        });
    }

  }

  editStrategy() {
    this.openConfirmModal();

  }

  openConfirmModal() {
    if (this.checkSizeAltcoin()) {
      this.confirmModal.show('modal-lg');
    } else {
      this.alertService.addMessage('danger', 'Quantità inserite nell ordine errate!! Controlla il tuo ordine!!');
    }
  }


  close() {
    this.confirmModal.dismiss();
  }

  addFees(value: any) {
    // console.log(value);
    const taxed = value + ((value / 100) * 0.1);
    // console.log('value taxed', taxed);
    this.formValue.strategy_capital_taxed.setValue(taxed);
  }

  get formValue() {
    return this.strategiesForm.controls;
  }

}

