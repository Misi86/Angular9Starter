import {Component} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
// import {ActivatedRoute, Route, Router} from "@angular/router";
@Component({
    selector: 'travel-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent{

    constructor(public authService: AuthService,
                private router: Router  ) {

    }
}

