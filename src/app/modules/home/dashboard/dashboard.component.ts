import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from '../../../shared/modal/modal.component';
import {ActionService} from '../../../core/services/action.service';
import * as _ from 'lodash';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('detailsModal') detailsModal: ModalComponent;
  @ViewChild('stopModal') stopModal: ModalComponent;
  public activeStrategies: any;
  public stopData: any;
  public checkMobileData: any;
  public searchFilter: any;
  public details = false;
  private clonedStrategy: any;

  constructor(private actionService: ActionService) {

  }

  ngOnInit() {
    this.loadActiveStrategy();
  }

  closeStop() {
    this.stopModal.dismiss();
  }

  openConfirmModal(id) {
    this.checkMobileData = this.activeStrategies[id];
    this.detailsModal.show('modal-lg');
  }

  openStopModal(id) {
    this.stopData = this.activeStrategies[id];
    this.stopModal.show('modal-lg');
  }

  fromCoinToBTC(amount: any, value: any) {
    return amount * value;
  }

  loadActiveStrategy() {
    this.actionService.getActiveStrategy().subscribe((resp) => {
      this.clonedStrategy = _.cloneDeep(resp);
      this.activeStrategies = this.clonedStrategy;
      this.stopData = resp[0];
      this.checkMobileData = resp[0];
    });
  }

  cancelStrategy(orderId: number, pair: string, name: string) {
    console.log(orderId, pair);
    this.actionService.stopStrategy(orderId, pair).subscribe((resp) => {
      this.actionService.deleteFromDb(name).subscribe(() => {
        this.loadActiveStrategy();
      });
    });
  }

  updateStrategy(name: string, status: string) {

    const payload = {
      status: status === 'ACTIVE' ? 'STOP' : 'ACTIVE',
    };
    this.actionService.updateStrategy(name, payload).subscribe((resp) => {
      this.closeStop();
      this.loadActiveStrategy();
    });
  }

  filterResult(name: string) {

    let data;
    if (this.searchFilter !== undefined) {
      data = _.filter(this.clonedStrategy, (o) => {
        return o.coin_pair.includes(name.toUpperCase());
      });
    } else {
      data = this.clonedStrategy;
    }

    console.log(data);
    this.activeStrategies = data;

  }

  openDetails(data: any) {
    console.log(data);
    if (data.transactions.length) {
      this.details = true;
    }
  }
}

