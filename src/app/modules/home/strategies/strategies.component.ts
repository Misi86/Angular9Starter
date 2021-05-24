import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalComponent} from '../../../shared/modal/modal.component';
import {AlertService} from '../../../shared/alert/alert.service';
import {ActionService} from '../../../core/services/action.service';
import * as _ from 'lodash';

declare var $: any;

@Component({
  selector: 'strategies-component',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.scss'],
})
export class StrategiesComponent implements OnInit {
  public strategiesForm: FormGroup;
  @ViewChild('confirmModal') confirmModal: ModalComponent;
  public pairs: any;

  constructor(private fb: FormBuilder,
              private alert: AlertService,
              private actionService: ActionService) {

    this.strategiesForm = this.fb.group({
      strategy_name: ['', Validators.required],
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
        this.pairs = resp;
      },
      (error) => {
      });
  }

  loadPrices() {
    const val = this.formValue.strategy_pairs.value;
    if (val) {
      const price = _.find(this.pairs, {name: val});
      this.formValue.strategy_buy_price.setValue(price.price);
      this.formValue.strategy_sell_price.setValue(price.price);
    }

  }

  editStrategy() {
    this.openConfirmModal();

  }

  close() {
    this.confirmModal.dismiss();
  }

  get formValue() {
    return this.strategiesForm.controls;
  }

  openConfirmModal() {
    this.confirmModal.show('modal-lg');
  }

}

