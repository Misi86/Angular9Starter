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
    // this.stopData = this.activeStrategies[0];
    // this.checkMobileData = this.activeStrategies[0];
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

  loadActiveStrategy() {
    this.actionService.getActiveStrategy().subscribe((resp) => {
      console.log(resp);
      this.activeStrategies = resp;
      this.stopData = resp[0];
      this.checkMobileData = resp[0];
      // console.log(this.stopData, 'sssss')
    });
  }

  cancelStrategy(name: string) {
    this.actionService.stopStrategy(name).subscribe((resp) => {
    console.log(resp);
    this.closeStop();
    this.loadActiveStrategy();
    });
  }

}

