import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {AlertService} from "./alert.service";

const $ = require('jquery');

@Component({
  selector: 'alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit {
  @ViewChild('alertContainer') el: ElementRef;

  constructor(private alertService: AlertService) {
  }

  close = (currentAlert: any) => {
    $(currentAlert).alert('close');
  }

  ngOnInit() {
    this.alertService.getMessage().subscribe(alert => {
      const currentAlert = $(`<div class="alert alert-${alert.type} alert-dismissible fade" role="alert">${alert.message}<button type="button" class="close" data-dismiss="alert" ><span aria-hidden="true">&times;</span></button></div>`);
      $(this.el.nativeElement).append(currentAlert);

      setTimeout(() => {
        currentAlert.addClass('show');
      });

      setTimeout(() => {
        $(currentAlert).alert('close');
      }, 15000);
    });

  }
}
