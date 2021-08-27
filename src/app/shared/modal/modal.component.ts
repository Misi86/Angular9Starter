import {Component, ElementRef, EventEmitter, Output, ViewChild} from "@angular/core";
declare var $: any;
// const $ = require('jquery');

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
})

export class ModalComponent{

  @ViewChild('myModal') myModal: ElementRef;
  @Output() closed = new EventEmitter<boolean>();
  private data: any;
  constructor() {}

  show(optClass?){
    // open modal using jQuery
    ($(this.myModal.nativeElement)).children().addClass(optClass ? optClass : '').end().modal(
      {
        backdrop: 'static',
        keyboard: false
      }
    );
  }


  isVisible(): boolean{
    return ($(this.myModal.nativeElement)).hasClass('show');
  }

  dismiss(){
    $(this.myModal.nativeElement).modal('hide');
    this.closed.emit();
  }

}
