import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class SharingService {
  private notify = new Subject<any>();
  /**
   * Observable string streams
   */
  notifyObservable$ = this.notify.asObservable();

  constructor(){}

  public notifyOther(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }
}
