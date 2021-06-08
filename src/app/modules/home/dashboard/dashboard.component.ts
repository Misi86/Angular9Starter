import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from '../../../shared/modal/modal.component';
import {ActionService} from '../../../core/services/action.service';

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
      this.activeStrategies = resp;
      this.stopData = resp[0];
      this.checkMobileData = resp[0];
    });
  }

  cancelStrategy(name: string) {
    this.actionService.stopStrategy(name).subscribe((resp) => {
      this.closeStop();
      this.loadActiveStrategy();
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

}

