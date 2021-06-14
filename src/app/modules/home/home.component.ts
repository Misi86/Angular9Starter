import {AfterContentInit, Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {ActionService} from '../../core/services/action.service';

// import {ActivatedRoute, Route, Router} from "@angular/router";
@Component({
  selector: 'travel-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterContentInit {
  public user: any;

  constructor(public authService: AuthService,
              public actionService: ActionService,
              private router: Router) {

    this.getBalance();
    this.user = this.authService.user;
  }

  ngOnInit() {

    // console.log('user', this.user);
    if (this.authService.isLogged === '1') {
      setTimeout(() => {
        this.getBalance();
        this.ngOnInit();
      }, 20000);
    }
  }

  ngAfterContentInit() {

  }

  getBalance() {
    this.actionService.getBtcBalance().subscribe();
  }
}

