import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _token;
  private _user;
  private _role;

  constructor(private router: Router,
              private http: HttpClient) {
  }

  login(username: string, password: string) {
    // console.log(username, password );
    return this.http.get<any>('api/login/' + username + '/' + password)
      .pipe(map(resp => {
        console.log(resp, '<<<<<<<<<<<<<<<')
        this.token = resp.token;
        this.user = resp.user;
        this.role = resp.role;
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

  set user(value: string) {
    localStorage.setItem('user', value);
    this._user = value;
    console.log('<<<<', this._user);
  }

  get user(): string {
    console.log('return', this._user, localStorage.getItem('user'));
    return this._user || localStorage.getItem('user');
  }

  set role(value: string) {
    localStorage.setItem('role', value);
    this._user = value;
  }

  get role(): string {
    return this._user || localStorage.getItem('role');
  }

}
