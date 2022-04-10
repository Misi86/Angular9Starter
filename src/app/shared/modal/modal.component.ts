import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import * as _ from 'lodash';

declare var $: any;

// const $ = require('jquery');

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
})

export class ModalComponent {

  @ViewChild('myModal') myModal: ElementRef;
  @Output() closed = new EventEmitter<boolean>();
  private data: any;
  private openedElement = null;

  constructor() {
  }


  show(optClass?, openItem = null) {

    // open modal using jQuery
    ($(this.myModal.nativeElement) as any).children().addClass(optClass ? optClass : 'modal-lg').end().modal({
      backdrop: 'static',
      keyboard: false
    });

  }


  isVisible(): boolean {
    return ($(this.myModal.nativeElement) as any).hasClass('show');
  }

  dismiss() {
    $(this.myModal.nativeElement as any).modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    this.closed.emit();
  }

}
