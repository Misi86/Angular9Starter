import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalComponent} from '../../../shared/modal/modal.component';
import {AlertService} from "../../../shared/alert/alert.service";

declare var $: any;

@Component({
  selector: 'strategies-component',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.scss'],
})
export class StrategiesComponent implements OnInit {
  public strategiesForm: FormGroup;
  @ViewChild('confirmModal') confirmModal: ModalComponent;

  constructor(private fb: FormBuilder,
              private alert: AlertService) {

    this.strategiesForm = this.fb.group({
      strategy_name: ['', Validators.required],
      strategy_pairs: ['', Validators.required],
      strategy_capital: ['', Validators.required],
      strategy_buy_price: ['', Validators.required],
      strategy_sell_price: ['', Validators.required],
    });

  }

  ngOnInit() {
    // $(document).ready(function() {
    //   alert('we call alert from JQuery');
    // });
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

