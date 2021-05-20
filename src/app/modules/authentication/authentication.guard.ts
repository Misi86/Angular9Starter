import {AuthService} from '../../core/services/auth.service';
import {CanActivate, Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate() {
    if (!this.authService.token){
      // this.router.navigate(['home/dashboard']).then();
      return true;
    } else {
      this.router.navigate(['home/dashboard']).then();
      // return this.router.createUrlTree(['']);
    }
  }
}
