import {Component} from '@angular/core';

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent{
    private activeStrategies: any;
    constructor() {

      this.activeStrategies = [
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
}

