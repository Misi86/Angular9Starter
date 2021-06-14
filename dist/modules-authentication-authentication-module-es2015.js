(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-authentication-authentication-module"],{

/***/ "./src/app/modules/authentication/authentication.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.component.ts ***!
  \********************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthenticationComponent {
    constructor() { }
}
AuthenticationComponent.ɵfac = function AuthenticationComponent_Factory(t) { return new (t || AuthenticationComponent)(); };
AuthenticationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticationComponent, selectors: [["travel-component"]], decls: 3, vars: 0, consts: [[1, "jumbotron", "d-flex", "align-items-center", "min-vh-100", 2, "background-color", "#183153", "opacity", "0.8"], [1, "container", "text-center"]], template: function AuthenticationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  margin-bottom: 0rem !important;\n  border-radius: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBRENBO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICBmb250LXNpemU6IDFyZW07XG59XG4uanVtYm90cm9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cbiIsImgxIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uanVtYm90cm9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'travel-component',
                templateUrl: './authentication.component.html',
                styleUrls: ['./authentication.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/authentication/authentication.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.guard.ts ***!
  \****************************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthenticationGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (!this.authService.token) {
            // this.router.navigate(['home/dashboard']).then();
            return true;
        }
        else {
            this.router.navigate(['home/dashboard']).then();
            // return this.router.createUrlTree(['']);
        }
    }
}
AuthenticationGuard.ɵfac = function AuthenticationGuard_Factory(t) { return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthenticationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationGuard, factory: AuthenticationGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/authentication/authentication.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.routing */ "./src/app/modules/authentication/authentication.routing.ts");
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.component */ "./src/app/modules/authentication/authentication.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/authentication/login/login.component.ts");
/* harmony import */ var _authentication_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.guard */ "./src/app/modules/authentication/authentication.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/home.module */ "./src/app/modules/home/home.module.ts");








class AuthenticationModule {
}
AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); }, providers: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]], imports: [[
            _authentication_routing__WEBPACK_IMPORTED_MODULE_1__["AuthenticationRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, { declarations: [_authentication_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticationComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], imports: [_authentication_routing__WEBPACK_IMPORTED_MODULE_1__["AuthenticationRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _authentication_routing__WEBPACK_IMPORTED_MODULE_1__["AuthenticationRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
                ],
                providers: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                declarations: [_authentication_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticationComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/authentication/authentication.routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.routing.ts ***!
  \******************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.component */ "./src/app/modules/authentication/authentication.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/authentication/login/login.component.ts");
/* harmony import */ var _authentication_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.guard */ "./src/app/modules/authentication/authentication.guard.ts");







const routes = [
    {
        path: '', component: _authentication_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticationComponent"],
        canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            },
        ],
    },
];
class AuthenticationRoutingModule {
}
AuthenticationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthenticationRoutingModule });
AuthenticationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AuthenticationRoutingModule_Factory(t) { return new (t || AuthenticationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthenticationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/login/login.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/alert/alert.service */ "./src/app/shared/alert/alert.service.ts");







class LoginComponent {
    constructor(authService, fb, route, alert, router) {
        this.authService = authService;
        this.fb = fb;
        this.route = route;
        this.alert = alert;
        this.router = router;
        this.loginForm = this.fb.group({
            user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ngOnInit() { }
    get formValue() { return this.loginForm.controls; }
    login() {
        this.authService.login(this.formValue.user.value, this.formValue.password.value).subscribe((resp) => {
            this.router.navigate(['home']).then();
        }, (error) => { });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["travel-component"]], decls: 13, vars: 1, consts: [[1, "login-wrapper"], [1, "form-signin", 3, "formGroup", "ngSubmit"], ["src", "assets/bitcoin-brands.svg", "alt", "", "width", "72", "height", "72", 1, "mb-4"], [1, "h3", "mb-3", "font-weight-normal", 2, "color", "white"], ["for", "inputEmail", 1, "sr-only"], ["formControlName", "user", "type", "text", "id", "inputEmail", "autocomplete", "off", "placeholder", "Utente", 1, "form-control", "mb-3"], ["for", "inputPassword", 1, "sr-only"], ["formControlName", "password", "type", "password", "id", "inputPassword", "placeholder", "Password", 1, "form-control"], ["type", "submit", 1, "mt-3", "btn", "btn-lg", "login-btn", "btn-block"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Accedi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Utente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Accedi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".login-wrapper[_ngcontent-%COMP%]   .form-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.login-wrapper[_ngcontent-%COMP%]   .form-signin[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  color: black;\n  background-color: #F49419;\n  border-color: #F49419;\n  opacity: 0.8;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNBSjtBREVJO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4td3JhcHBlcntcbiAgLmZvcm0tc2lnbmlue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIC5sb2dpbi1idG57XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ5NDE5O1xuICAgICAgYm9yZGVyLWNvbG9yOiAjRjQ5NDE5O1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG59XG4iLCIubG9naW4td3JhcHBlciAuZm9ybS1zaWduaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubG9naW4td3JhcHBlciAuZm9ybS1zaWduaW4gLmxvZ2luLWJ0biB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0OTQxOTtcbiAgYm9yZGVyLWNvbG9yOiAjRjQ5NDE5O1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'travel-component',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-authentication-authentication-module-es2015.js.map