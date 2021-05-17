import {Component, ViewChild} from '@angular/core';
import {ModalComponent} from '../../../shared/modal/modal.component';

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent{
  @ViewChild('confirmModal') confirmModal: ModalComponent;
    private activeStrategies: any;
    constructor() {

      this.activeStrategies = [
        {
          name: 'Fake  Strategies 1',
          coin_pair: 'BNB/BTC',
          indicator_id: 'FAKE_INDICATOR',
          timeframe: '1d',
          initial_budget: '0.00000010',
          current_budget: '0.00000016',
          created_at: '2020/09/01',
          buy_price: 0.00005,
          sell_price: 0.000051,
          is_active: 1,
        }, {
          name: 'Fake  Strategies 2',
          coin_pair: 'BNB/BTC',
          indicator_id: 'FAKE_INDICATOR',
          timeframe: '1d',
          initial_budget: '0.00000011',
          current_budget: '0.00000014',
          created_at: '2020/09/02',
          buy_price: 0.000049,
          sell_price: 0.000050,
          is_active: 1,
        }, {
          name: 'Fake  Strategies 3',
          coin_pair: 'BNB/BTC',
          indicator_id: 'FAKE_INDICATOR',
          timeframe: '1d',
          initial_budget: '0.00000012',
          current_budget: '0.00000015',
          buy_price: 0.000052,
          sell_price: 0.000053,
          created_at: '2020/09/03',
          is_active: 1
        }
      ];

    }

  checkStrategy() {
    this.openConfirmModal();

  }

  close() {
    this.confirmModal.dismiss();
  }

  openConfirmModal() {
    this.confirmModal.show('modal-lg');
  }
}

