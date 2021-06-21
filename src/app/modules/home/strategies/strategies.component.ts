import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalComponent} from '../../../shared/modal/modal.component';
import {AlertService} from '../../../shared/alert/alert.service';
import {ActionService} from '../../../core/services/action.service';
import {DatePipe} from '@angular/common';
import * as _ from 'lodash';

declare var $: any;

@Component({
  selector: 'strategies-component',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.scss'],
  providers: [DatePipe]
})
export class StrategiesComponent implements OnInit {
  public strategiesForm: FormGroup;
  @ViewChild('confirmModal') confirmModal: ModalComponent;
  public pairs: any;
  private currentPrice: number;
  public strategyType = 'single';
  public isStrPresent: boolean;

  constructor(private fb: FormBuilder,
              private alert: AlertService,
              private actionService: ActionService,
              private alertService: AlertService,
              private datePipe: DatePipe) {

    this.strategiesForm = this.fb.group({
      strategy_name: [''],
      strategy_pairs: ['', Validators.required],
      strategy_capital: ['', Validators.required],
      strategy_buy_price: ['', Validators.required],
      strategy_sell_price: [''],
      strategy_direction: [''],
      strategy_size: [''],
    });
    this.manageValidators(this.strategyType);
  }

  ngOnInit() {

    this.loadPairs();
  }

  manageValidators(str: any) {
    if (str === 'single') {
      this.formValue.strategy_name.setValidators([Validators.required]);
      this.formValue.strategy_sell_price.setValidators([Validators.required]);
      this.formValue.strategy_direction.clearValidators();
      this.formValue.strategy_size.clearValidators();
      this.updateFormStatus();
    } else {
      this.formValue.strategy_name.clearValidators();
      this.formValue.strategy_sell_price.clearValidators();
      this.formValue.strategy_direction.setValidators([Validators.required]);
      this.formValue.strategy_size.setValidators([Validators.required]);
      this.updateFormStatus();
    }

  }

  updateFormStatus() {
    this.formValue.strategy_name.updateValueAndValidity();
    this.formValue.strategy_sell_price.updateValueAndValidity();
    this.formValue.strategy_direction.updateValueAndValidity();
    this.formValue.strategy_size.updateValueAndValidity();
  }

  checkIfExist(name) {
    if (name !== '' && this.strategyType === 'single') {
      this.actionService.checkStrategy(name).subscribe((resp) => {
        // console.log(resp, _.isEmpty(resp));
        if (_.isEmpty(resp)) {
          this.isStrPresent = false;
        } else {
          this.isStrPresent = true;
          this.alertService.addMessage('danger', 'Nome strategia presente');
        }
        return this.isStrPresent;
      }, (error) => {
        this.alertService.addMessage('success', 'Nome strategia disponibile');
      });
    }
  }

  loadPairs() {
    this.actionService.getAllPairs().subscribe((resp) => {
        this.pairs = _.filter(resp, (o) => {
          return o.price < 0.000002;
        });
      },
      (error) => {
      });
  }

  loadPrices() {
    const pairs = this.formValue.strategy_pairs.value;
    if (pairs) {
      const price = _.find(this.pairs, {name: pairs});
      this.currentPrice = price.price;
      const formattedPrice = Math.floor(price.price.toFixed(8));
      this.formValue.strategy_buy_price.setValue(price.price.toFixed(8));
      this.formValue.strategy_sell_price.setValue(price.price.toFixed(8));
    }

  }

  initializeStrategy() {
    const quantity = this.formValue.strategy_capital.value / parseFloat(this.formValue.strategy_buy_price.value);
    const date = new Date();
    const payload = {
      name: this.formValue.strategy_name.value,
      coin_pair: this.formValue.strategy_pairs.value,
      capital: this.formValue.strategy_capital.value,
      quantity: Math.round(parseFloat(quantity.toFixed(3))),
      current_capital: this.formValue.strategy_capital.value,
      current_status: 'BUY',
      buy_price: parseFloat(this.formValue.strategy_buy_price.value),
      sell_price: parseFloat(this.formValue.strategy_sell_price.value),
      date: this.datePipe.transform(date, 'yyyy-MM-dd'),
      status: 'ACTIVE',
    };
    // console.log(payload);
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

  initializeStrategies() {
    const quantity = this.formValue.strategy_capital.value / parseFloat(this.formValue.strategy_buy_price.value);
    const payload = {
      coin_pair: this.formValue.strategy_pairs.value,
      capital: this.formValue.strategy_capital.value,
      quantity: Math.round(parseFloat(quantity.toFixed(3))),
      price: parseFloat(this.formValue.strategy_buy_price.value),
      n_strategy: this.formValue.strategy_size.value,
      order: this.formValue.strategy_direction.value
    };
    // console.log(payload);
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

  editStrategy() {
    this.openConfirmModal();

  }

  openConfirmModal() {
    this.confirmModal.show('modal-lg');
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

