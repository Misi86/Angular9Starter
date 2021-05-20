import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _token;

  constructor(private router: Router,
              private http: HttpClient) {
  }

  login(username: string, password: string) {
    // console.log(username, password );
    return this.http.get<any>('api/login/' + username + '/' + password)
      .pipe(map(resp => {
        this.token = resp.token;
        return resp;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    this.token = '';
    this.router.navigate(['auth/login']).then();
  }

  get token(): string {
    return this._token || localStorage.getItem('token');
  }

  set token(value: string) {
    localStorage.setItem('token', value);
    this._token = value;
  }

}
