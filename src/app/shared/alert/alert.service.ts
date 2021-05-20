import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';


@Injectable()
export class AlertService {
  private subject = new Subject<any>();

  constructor() {
  }

  addMessage(type: string, message: string) {
    this.subject.next({type, message});
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
