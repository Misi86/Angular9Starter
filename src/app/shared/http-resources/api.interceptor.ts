import {Injectable, SecurityContext} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {DomSanitizer} from "@angular/platform-browser";
import * as _ from 'lodash';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  private api = environment.api;


  constructor(private _sanitazer: DomSanitizer) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const escapeHtml = (unsafe) => {
      return unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    };

    let apiReq: HttpRequest<any> = req.clone({url: this.api + req.url});

    if (_.isString(apiReq)) {
      // @ts-ignore
      apiReq = this._sanitazer.sanitize(SecurityContext.HTML, escapeHtml(apiReq));
    }
    return next.handle(apiReq);
  }
}
