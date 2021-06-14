import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {ActionService} from "../../core/services/action.service";

// import {ActivatedRoute, Route, Router} from "@angular/router";
@Component({
  selector: 'travel-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public user: any;

  constructor(public authService: AuthService,
              public actionService: ActionService,
              private router: Router) {


    setTimeout(() => {
      this.getBalance();
    }, 20000);
  }

  ngOnInit() {
    this.user = this.authService.user;
    this.getBalance();
    // console.log('user', this.user);

  }

  getBalance() {
    this.actionService.getBtcBalance().subscribe();
  }
}

