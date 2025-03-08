import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../shared/alert/alert.service';

@Component({
    selector: 'travel-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
    public loginForm: UntypedFormGroup;
    constructor(private authService: AuthService,
                private fb: UntypedFormBuilder,
                private route: ActivatedRoute,
                private alert: AlertService,
                private router: Router) {
      
      
      this.loginForm = this.fb.group({
        user: ['example@email.com', Validators.required],
        password: ['*******', Validators.required],
      });

    }
    ngOnInit() {}

  get formValue() { return this.loginForm.controls; }

  login(){
      this.authService.login( this.formValue.user.value , this.formValue.password.value ).subscribe(
        (resp) => {
          this.router.navigate(['home']).then();
        },
        (error) => {}
      );
    }

    loginWithGoogle() {
      console.log('Login with Google');
      // Implement Google login
    }
    
    loginWithApple() {
      console.log('Login with Apple');
      // Implement Apple login
    }
    
    loginWithSSO() {
      console.log('Login with SSO');
      // Implement SSO login
    }
}

