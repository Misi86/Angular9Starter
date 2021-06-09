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

  constructor(public authService: AuthService,
              public actionService: ActionService,
              private router: Router) {


    setInterval(() => { this.getBalance(); } , 60000);
  }

  ngOnInit() {
    this.getBalance();
  }

  getBalance(){
    this.actionService.getBtcBalance().subscribe();
  }
}

