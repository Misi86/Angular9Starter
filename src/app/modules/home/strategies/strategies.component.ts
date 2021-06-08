import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalComponent} from '../../../shared/modal/modal.component';
import {AlertService} from '../../../shared/alert/alert.service';
import {ActionService} from '../../../core/services/action.service';
import {DatePipe} from '@angular/common';
import * as _ from 'lodash';
import {parse} from "@angular/compiler/src/render3/view/style_parser";

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

  constructor(private fb: FormBuilder,
              private alert: AlertService,
              private actionService: ActionService,
              private datePipe: DatePipe) {

    this.strategiesForm = this.fb.group({
      strategy_name: ['', Validators.required],
      // small_cap: [false],
      strategy_pairs: ['', Validators.required],
      strategy_capital: ['', Validators.required],
      strategy_buy_price: ['', Validators.required],
      strategy_sell_price: ['', Validators.required],
    });

  }

  ngOnInit() {

    this.loadPairs();
  }

  loadPairs() {
    this.actionService.getAllPairs().subscribe((resp) => {
        this.pairs = _.filter(resp, (o) => {
          return o.price < 0.00001;
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
    console.log(payload);
    this.actionService.setStrategy(payload).subscribe((resp) => {
      if (resp) {
        this.close();
      }
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

  get formValue() {
    return this.strategiesForm.controls;
  }

}

