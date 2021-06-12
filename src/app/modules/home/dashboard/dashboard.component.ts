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
  @ViewChild('cancelModal') cancelModal: ModalComponent;
  @ViewChild('transactionsModal') transactionsModal: ModalComponent;
  public activeStrategies: any;
  public stopData: any;
  public checkMobileData: any;
  public searchFilter: any;
  public searchName: any;
  public searchDate: any;
  public searchState = 'all';
  public details = false;
  private clonedStrategy: any;

  constructor(private actionService: ActionService) {
    setInterval(() => {
      this.loadActiveStrategy();
    }, 300000);
  }

  ngOnInit() {
    this.loadActiveStrategy();
  }

  closeStop() {
    this.stopModal.dismiss();
  }

  closeCancel() {
    this.cancelModal.dismiss();
  }

  openConfirmModal(id) {
    this.checkMobileData = this.activeStrategies[id];
    this.detailsModal.show('modal-lg');
  }

  openStopModal(id) {
    this.stopData = this.activeStrategies[id];
    this.stopModal.show('modal-lg');
  }

  openCancelModal(id) {
    this.stopData = this.activeStrategies[id];
    this.cancelModal.show('modal-lg');
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
    this.actionService.stopStrategy(orderId, pair).subscribe((resp) => {
      this.actionService.deleteFromDb(name).subscribe(() => {
        this.closeCancel();
        this.loadActiveStrategy();
        this.actionService.getBtcBalance().subscribe();
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

  filterResult(name: string, type: string) {

    let data;

    if (type === 'pairs') {
      this.searchName = '';
      this.searchDate = '';
      this.searchState = 'all';
      if (this.searchFilter !== undefined) {
        data = _.filter(this.clonedStrategy, (o) => {
          return o.coin_pair.includes(name.toUpperCase());
        });
      } else {
        data = this.clonedStrategy;
      }
    } else if (type === 'name') {
      this.searchFilter = '';
      this.searchDate = '';
      this.searchState = 'all';
      if (this.searchName !== undefined) {
        data = _.filter(this.clonedStrategy, (o) => {
          return o.name.includes(name);
        });
      } else {
        data = this.clonedStrategy;
      }
    } else if (type === 'date') {
      this.searchFilter = '';
      this.searchName = '';
      this.searchState = 'all';
      if (this.searchDate !== undefined) {
        data = _.filter(this.clonedStrategy, (o) => {
          return o.date.includes(name);
        });
      } else {
        data = this.clonedStrategy;
      }
    } else if (type === 'state') {
      this.searchFilter = '';
      this.searchName = '';
      this.searchDate = '';
      const nameUp = name.toUpperCase();

      if (this.searchState !== undefined && name !== 'all') {
        data = _.filter(this.clonedStrategy, (o) => {
          return o.current_status === nameUp;
        });
      } else {
        data = this.clonedStrategy;
      }
    }
    this.activeStrategies = data;

  }

  openDetails(data: any) {
    this.stopData = this.activeStrategies[data];
    this.transactionsModal.show('modal-lg');
  }
}

