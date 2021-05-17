import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ModalComponent} from '../../../shared/modal/modal.component';

declare var $: any;

@Component({
  selector: 'strategies-component',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.scss'],
})
export class StrategiesComponent implements OnInit {
  // public strategies: any;
  @ViewChild('confirmModal') confirmModal: ModalComponent;

  // private strategiesForm: any;
  constructor() {



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

  openConfirmModal() {
    this.confirmModal.show('modal-lg');
  }

}

