import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../shared/alert/alert.service';

@Component({
    selector: 'welcome-component',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit{
    public loginForm: UntypedFormGroup;
    constructor(private authService: AuthService,
                private fb: UntypedFormBuilder,
                private route: ActivatedRoute,
                private alert: AlertService,
                private router: Router) {
      
      


    }
    ngOnInit() {}
}

