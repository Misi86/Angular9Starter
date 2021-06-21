import {AfterContentInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from '../../../shared/modal/modal.component';
import {ActionService} from '../../../core/services/action.service';
import * as _ from 'lodash';
import {AlertService} from '../../../shared/alert/alert.service';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
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
  public reloadStuff: any;
  public currentState: any;
  public strNumber: any;

  constructor(private actionService: ActionService,
              private alertService: AlertService,
              private authService: AuthService) {
    this.loadActiveStrategy();
  }

  ngOnInit() {
    this.reloadStuff = setInterval(() => {
      this.reload();
    }, 30000);

  }

  ngOnDestroy() {
    clearInterval(this.reloadStuff);
  }

  reload() {
    this.resetFilter();
    this.loadActiveStrategy();
  }

  closeStop() {
    this.stopModal.dismiss();
  }

  closeCancel() {
    this.cancelModal.dismiss();
  }

  closeTransaction() {
    this.transactionsModal.dismiss();
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
      if (this.stopData === undefined) {
        this.stopData = resp[0];
      }
      this.checkMobileData = resp[0];
      this.strNumber = this.clonedStrategy.length;

    });
  }

  getSpecificStatus(orderId: any, pair: any) {
    this.actionService.getCurrentStatus(orderId, pair).subscribe((resp) => {
      const state = resp.status === 'NEW' ? 'APERTO' : 'CHIUSO';
      this.alertService.addMessage('info', 'Stato dell ordine: ' + state);
      return resp;
    });
  }

  cancelStrategy(orderId: number, pair: string, name: string) {
    if (orderId !== undefined) {

      this.actionService.stopStrategy(orderId, pair).subscribe((resp) => {
        this.actionService.deleteFromDb(name).subscribe(() => {
          this.closeCancel();
          this.loadActiveStrategy();
          this.actionService.getBtcBalance().subscribe();
          this.alertService.addMessage('success', 'Ordine cancellato con successo');
        });
      });
    } else {
      this.closeCancel();
      this.alertService.addMessage('danger', 'Ordine nn ancora aperto riprova fra poco');
    }
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

  parseDate(date: any) {
    const data = new Date(date);
    // tslint:disable-next-line:max-line-length
    return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + ' - ' + (data.getHours() < 10 ? '0' + data.getHours() : data.getHours()) + ':' + (data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes());
  }

  resetFilter() {
    this.searchFilter = '';
    this.searchState = 'all';
    this.searchName = '';
    this.searchDate = '';
  }
}

