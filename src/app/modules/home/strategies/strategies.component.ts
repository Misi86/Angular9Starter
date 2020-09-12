import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ModalComponent} from '../../../shared/modal/modal.component';
declare var $: any;
@Component({
  selector: 'strategies-component',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.scss'],
})
export class StrategiesComponent implements OnInit{
  public strategies: any;
  @ViewChild('editModal') editModal: ModalComponent;
  // private strategiesForm: any;
  constructor() {

    this.strategies = [
      {
        name: 'Fake  Strategies 1',
        coin_pair: 'ETH/BTC',
        indicator_id: 'FAKE_INDICATOR',
        timeframe: '1d',
        budget: '25%',
        created_at: '2020/09/01',
        is_active: 1,
      }, {
        name: 'Fake  Strategies 2',
        coin_pair: 'BNB/BTC',
        indicator_id: 'FAKE_INDICATOR',
        timeframe: '1d',
        budget: '25%',
        created_at: '2020/09/02',
        is_active: 1,
      }, {
        name: 'Fake  Strategies 3',
        coin_pair: 'XLM/BTC',
        indicator_id: 'FAKE_INDICATOR',
        timeframe: '1d',
        budget: '25%',
        created_at: '2020/09/03',
        is_active: 0
      }
    ];


  }
 ngOnInit() {
   // $(document).ready(function() {
   //   alert('we call alert from JQuery');
   // });
 }
 editStrategy(id: number, data: any){
  this.openEditModal();

 }
 openEditModal() {
   this.editModal.show('modal-lg');
  }

}

