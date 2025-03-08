(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_home_404_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home/404/404.component */ "./src/app/modules/home/404/404.component.ts");





const routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-authentication-authentication-module */ "modules-authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./modules/authentication/authentication.module */ "./src/app/modules/authentication/authentication.module.ts")).then(m => m.AuthenticationModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts")).then(m => m.HomeModule)
    },
    { path: '**', component: _modules_home_404_404_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/alert/alert.component */ "./src/app/shared/alert/alert.component.ts");




class AppComponent {
    constructor() {
        this.title = 'BTCBot';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "alert-wrapper", "alert-z-container"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _shared_http_resources_api_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/http-resources/api.interceptor */ "./src/app/shared/http-resources/api.interceptor.ts");
/* harmony import */ var _shared_http_resources_error_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/http-resources/error.interceptor */ "./src/app/shared/http-resources/error.interceptor.ts");
/* harmony import */ var _shared_http_resources_token_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/http-resources/token.interceptor */ "./src/app/shared/http-resources/token.interceptor.ts");
/* harmony import */ var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/alert/alert.service */ "./src/app/shared/alert/alert.service.ts");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _core_services_action_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/services/action.service */ "./src/app/core/services/action.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "./node_modules/@angular-slider/ngx-slider/__ivy_ngcc__/fesm2015/angular-slider-ngx-slider.js");
/* harmony import */ var _core_services_sharing_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/services/sharing.service */ "./src/app/core/services/sharing.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_http_resources_api_interceptor__WEBPACK_IMPORTED_MODULE_6__["APIInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_http_resources_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_http_resources_token_interceptor__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptor"], multi: true },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"] },
        _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
        _core_services_action_service__WEBPACK_IMPORTED_MODULE_11__["ActionService"],
        _core_services_sharing_service__WEBPACK_IMPORTED_MODULE_15__["SharingService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
            _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_14__["NgxSliderModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__["NgxChartsModule"]
        ],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
        _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_14__["NgxSliderModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__["NgxChartsModule"]], exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                    _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_14__["NgxSliderModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__["NgxChartsModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_http_resources_api_interceptor__WEBPACK_IMPORTED_MODULE_6__["APIInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_http_resources_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_http_resources_token_interceptor__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptor"], multi: true },
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"] },
                    _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                    _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
                    _core_services_action_service__WEBPACK_IMPORTED_MODULE_11__["ActionService"],
                    _core_services_sharing_service__WEBPACK_IMPORTED_MODULE_15__["SharingService"],
                ],
                exports: [
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/services/action.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/action.service.ts ***!
  \*************************************************/
/*! exports provided: ActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionService", function() { return ActionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/alert/alert.service */ "./src/app/shared/alert/alert.service.ts");







class ActionService {
    constructor(http, authService, alertService) {
        this.http = http;
        this.authService = authService;
        this.alertService = alertService;
    }
    getAllPairs() {
        return this.http.get('api/btcprice/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => {
            this.allPairs = resp;
            return resp;
        }));
    }
    getSpecificPairs(pair) {
        return this.http.get('api/btcprice/' + pair).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => {
            return resp;
        }));
    }
    getBtcPrice() {
        return this.http.get('api/btcprice/BTCUSDT').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => {
            this.priceBtc = resp.price;
            return resp;
        }));
    }
    getMoneyPrice(pairs, ex) {
        return this.http.get('api/binance/getprice/' + pairs + ex).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => {
            return resp;
        }));
    }
    getDetailsPairs(pair) {
        return this.http.get('api/binance/prevday/' + pair).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => {
            return resp;
        }));
    }
    getCandleStick(pair, timeframe, limit) {
        return this.http.get('api/binance/getcandlesticks/' + pair + '/' + timeframe + '/' + limit).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => {
            return resp;
        }));
    }
    setStrategy(payload) {
        return this.http.post('api/strategy/' + payload.name, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    setStrategySplitted(payload, size) {
        return this.http.post('api/strategy/splitted/' + payload.name + '/' + size, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    setStrategiesSplitted(payload, size) {
        return this.http.post('api/strategies/splitted/' + size, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    setStrategies(payload) {
        return this.http.post('api/strategies', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    setPairToMonitor(pair) {
        // @ts-ignore
        return this.http.post('api/pairs/' + pair).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    deletePairToMonitor(pair) {
        // @ts-ignore
        return this.http.delete('api/pairs/' + pair).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    getPairMonitored() {
        return this.http.get('api/pairs/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    getProjections() {
        return this.http.get('api/projections/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    getMACD(pair, interval) {
        return this.http.get('api/macd/' + pair + '/' + interval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    getTopProjections(from, to) {
        return this.http.get('api/projections/best/' + 100 + '/' + from + '/' + to).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    getLastBestProjections(from, to, payload) {
        return this.http.post('api/projections/lastbest/' + from + '/' + to, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    getProjectionCount(payload) {
        return this.http.post('api/projections/count', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    getFilteredProjections(skip, limit, payload) {
        return this.http.post('api/projections/filter/' + skip + '/' + limit, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    getActiveStrategy() {
        return this.http.get('api/strategy/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    stopStrategy(orderId, pair) {
        return this.http.get('api/binance/cancelorder/single/' + orderId + '/' + pair).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    deleteFromDb(name) {
        return this.http.delete('api/strategy/' + name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    multipleCancel(payload) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            body: payload,
        };
        return this.http.delete('api/strategy/deletestrategies', options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    multipleUpdate(payload) {
        return this.http.put('api/strategy/updatestrategies', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    updateStrategy(name, payload) {
        return this.http.post('api/strategy/' + name, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    getBtcBalance() {
        return this.http.get('api/binance/balance').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            this.balanceBtc = data.btc_balance;
            return this.balanceBtc;
        }));
    }
    getAllBalances() {
        return this.http.get('api/binance/balances').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            // this.balanceBtc = data.btc_balance;
            return data;
        }));
    }
    getSpecificBalance(pair) {
        return this.http.get('api/binance/balancebypair/' + pair).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            // this.balanceBtc = data.btc_balance;
            return data;
        }));
    }
    getCurrentStatus(orderId, pair) {
        return this.http.get('api/binance/orderstatus/' + orderId + '/' + pair).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return JSON.parse(data.success);
        }));
    }
    updateAccount(name, payload) {
        return this.http.post('api/users/' + name, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            this.alertService.addMessage('success', 'Dati aggiornati correttamente');
            return data;
        }));
    }
    checkStrategy(name) {
        return this.http.get('api/strategy/' + name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    getUserInfo() {
        return this.http.get('api/users/' + this.authService.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            // console.log(data);
            return data;
        }));
    }
    set balanceBtc(value) {
        this._btcBalance = value;
    }
    get balanceBtc() {
        return this._btcBalance;
    }
    set allPairs(value) {
        this._allPairs = value;
    }
    get allPairs() {
        return this._allPairs;
    }
    set priceBtc(value) {
        this._btcPrice = value;
    }
    get priceBtc() {
        // console.log('ritorno', this._btcPrice)
        return this._btcPrice;
    }
}
ActionService.ɵfac = function ActionService_Factory(t) { return new (t || ActionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
ActionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActionService, factory: ActionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class AuthService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this._user = '';
    }
    login(username, password) {
        return this.http.get('api/login/' + username + '/' + password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => {
            this.token = resp.token;
            this.user = resp.user;
            this.role = resp.role;
            this.isLogged = '1';
            return resp;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        this.token = '';
        this.user = '';
        this.role = '';
        this.isLogged = '0';
        localStorage.clear();
        this.router.navigate(['auth/login']).then();
    }
    get token() {
        return this._token || localStorage.getItem('token');
    }
    set token(value) {
        localStorage.setItem('token', value);
        this._token = value;
    }
    set user(value) {
        localStorage.setItem('user', value);
        this._user = value;
    }
    get user() {
        return localStorage.getItem('user');
    }
    set isLogged(value) {
        localStorage.setItem('isLogged', value);
        this._isLogged = value;
    }
    get isLogged() {
        return localStorage.getItem('isLogged');
    }
    set role(value) {
        localStorage.setItem('role', value);
        this._user = value;
    }
    get role() {
        return this._user || localStorage.getItem('role');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/sharing.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/sharing.service.ts ***!
  \**************************************************/
/*! exports provided: SharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingService", function() { return SharingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");



class SharingService {
    constructor() {
        this.notify = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Observable string streams
         */
        this.notifyObservable$ = this.notify.asObservable();
    }
    notifyOther(data) {
        if (data) {
            this.notify.next(data);
        }
    }
}
SharingService.ɵfac = function SharingService_Factory(t) { return new (t || SharingService)(); };
SharingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharingService, factory: SharingService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/404/404.component.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/home/404/404.component.ts ***!
  \***************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["dashboard-component"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS80MDQvNDA0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dashboard-component',
                templateUrl: './404.component.html',
                styleUrls: ['./404.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/dashboard/dashboard.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/home/dashboard/dashboard.component.ts ***!
  \***************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_services_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/action.service */ "./src/app/core/services/action.service.ts");
/* harmony import */ var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/alert/alert.service */ "./src/app/shared/alert/alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_services_sharing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/sharing.service */ "./src/app/core/services/sharing.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/modal/modal.component */ "./src/app/shared/modal/modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











const _c0 = ["detailsModal"];
const _c1 = ["stopModal"];
const _c2 = ["cancelModal"];
const _c3 = ["transactionsModal"];
const _c4 = ["multipleAction"];
const _c5 = function (a0) { return { "active": a0 }; };
function DashboardComponent_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_6_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const p_r17 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.setFilterPair(p_r17.symbol); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r17 = ctx.$implicit;
    const first_r18 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c5, first_r18));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r17.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", p_r17.lastPrice.toFixed(8), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", p_r17.quoteVolume.toFixed(2), " BTC ");
} }
const _c6 = function (a0, a1, a2) { return { "light": a0, "dark": a1, "selected-filter": a2 }; };
function DashboardComponent_div_6_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_6_div_15_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const p_r22 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.setFilterPair(p_r22.symbol); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c6, ctx_r21.cssmode, !ctx_r21.cssmode, p_r22.symbol === ctx_r21.searchFilter));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r22.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", p_r22.lastPrice.toFixed(8), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", p_r22.quoteVolume.toFixed(2), " ");
} }
function DashboardComponent_div_6_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_6_div_15_span_1_Template, 8, 8, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.currentPrices);
} }
function DashboardComponent_div_6_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_6_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_6_div_22_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.openMultiple("pp"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PAUSE/PLAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_6_div_22_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.openMultiple("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CANCELLA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Strategie selezionate: ", ctx_r14.selectedStrategy.length, "");
} }
function DashboardComponent_div_6_tr_153_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 93);
} }
function DashboardComponent_div_6_tr_153_strong_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Comincia settando le tue strategie !!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_6_tr_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_6_tr_153_span_3_Template, 1, 0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_6_tr_153_strong_4_Template, 2, 0, "strong", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r15.activeStrategies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.activeStrategies && ctx_r15.activeStrategies.length === 0);
} }
function DashboardComponent_div_6_tr_154_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 123);
} }
function DashboardComponent_div_6_tr_154_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 124);
} }
function DashboardComponent_div_6_tr_154_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 125);
} }
function DashboardComponent_div_6_tr_154_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 126);
} }
function DashboardComponent_div_6_tr_154_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const str_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.calculateCurrentCapital(str_r31.current_capital, str_r31.coin_pair, str_r31));
} }
function DashboardComponent_div_6_tr_154_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_6_tr_154_span_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const str_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", str_r31.order_type !== "single" ? ctx_r41.calculateDelta(str_r31.isBtcCapital ? str_r31.transactions[0] && str_r31.transactions[0].cumulative_quantity ? str_r31.transactions[0].cumulative_quantity : str_r31.capital : str_r31.sell_price < str_r31.current_initial_price ? ctx_r41.fromCoinToBTC(str_r31.capital, str_r31.current_initial_price) : ctx_r41.fromCoinToBTC(str_r31.capital, str_r31.sell_price), ctx_r41.calculateCurrentCapital(str_r31.current_capital, str_r31.coin_pair, str_r31), str_r31.current_status, str_r31) : 0, "% ");
} }
function DashboardComponent_div_6_tr_154_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_6_tr_154_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_6_tr_154_span_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_6_tr_154_span_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c7 = function (a0, a1) { return { "partial": a0, "single": a1 }; };
const _c8 = function (a0, a1) { return { "btn-dark": a0, "btn-success": a1 }; };
function DashboardComponent_div_6_tr_154_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_6_tr_154_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const $index_r32 = ctx.index; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.openDetails($index_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DashboardComponent_div_6_tr_154_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const str_r31 = ctx.$implicit; const $index_r32 = ctx.index; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.updateSelectStatus($event, str_r31.order_id, str_r31.name, str_r31.status, str_r31.coin_pair, $index_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_6_tr_154_img_5_Template, 1, 0, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_6_tr_154_img_6_Template, 1, 0, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_6_tr_154_img_7_Template, 1, 0, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_div_6_tr_154_img_8_Template, 1, 0, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, DashboardComponent_div_6_tr_154_span_64_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, DashboardComponent_div_6_tr_154_div_65_Template, 3, 0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, DashboardComponent_div_6_tr_154_span_67_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, DashboardComponent_div_6_tr_154_div_68_Template, 3, 0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_6_tr_154_Template_button_click_77_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r51.openStopModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, DashboardComponent_div_6_tr_154_span_78_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, DashboardComponent_div_6_tr_154_span_79_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_6_tr_154_Template_button_click_81_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.openCancelModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, DashboardComponent_div_6_tr_154_span_85_Template, 2, 0, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const str_r31 = ctx.$implicit;
    const $index_r32 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](52, _c7, ctx_r16.isPartial[$index_r32] === true, str_r31.order_type === "single"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "select" + $index_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r16.isChecked[$index_r32])("name", str_r31.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r31.current_status == "BUY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r31.current_status != "BUY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r31.status == "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r31.status != "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", str_r31.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "carouselExampleControls" + $index_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](55, _c5, 0 === ctx_r16.reloaded || ctx_r16.reloaded === undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r31.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](57, _c5, 1 === ctx_r16.reloaded));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r31.coin_pair);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](59, _c5, 2 === ctx_r16.reloaded));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.showInitialCapital(str_r31), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](61, _c5, 3 === ctx_r16.reloaded));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.calculateSelledCapital(str_r31.capital, str_r31.sell_price, str_r31.current_capital, str_r31.buy_price, str_r31.current_status, str_r31.isBtcCapital));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](63, _c5, 4 === ctx_r16.reloaded));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", str_r31.order_type !== "single" ? ctx_r16.calculateDelta(str_r31.isBtcCapital ? str_r31.transactions[0] && str_r31.transactions[0].cumulative_quantity ? str_r31.transactions[0].cumulative_quantity : str_r31.capital : str_r31.sell_price < str_r31.current_initial_price ? ctx_r16.fromCoinToBTC(str_r31.capital, str_r31.current_initial_price) : ctx_r16.fromCoinToBTC(str_r31.capital, str_r31.sell_price), ctx_r16.calculateSelledCapital(str_r31.capital, str_r31.sell_price, str_r31.current_capital, str_r31.buy_price, str_r31.current_status, str_r31.isBtcCapital), false, str_r31) : 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](65, _c5, 5 === ctx_r16.reloaded));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.calculateCurrentCapital(str_r31.current_capital, str_r31.coin_pair, str_r31));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](67, _c5, 6 === ctx_r16.reloaded));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", str_r31.order_type !== "single" ? ctx_r16.calculateDelta(str_r31.isBtcCapital ? str_r31.transactions[0] && str_r31.transactions[0].cumulative_quantity ? str_r31.transactions[0].cumulative_quantity : str_r31.capital : str_r31.sell_price < str_r31.current_initial_price ? ctx_r16.fromCoinToBTC(str_r31.capital, str_r31.current_initial_price) : ctx_r16.fromCoinToBTC(str_r31.capital, str_r31.sell_price), ctx_r16.calculateCurrentCapital(str_r31.current_capital, str_r31.coin_pair, str_r31), str_r31.current_status, str_r31) : 0, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](69, _c5, 7 === ctx_r16.reloaded));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r31.order_type !== "single" ? str_r31.buy_price.toFixed(8) : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](71, _c5, 8 === ctx_r16.reloaded));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r31.sell_price.toFixed(8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](73, _c5, 9 === ctx_r16.reloaded));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](54, 46, str_r31.date, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r31.coin_pair);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.showInitialCapital(str_r31));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.calculateSelledCapital(str_r31.capital, str_r31.sell_price, str_r31.current_capital, str_r31.buy_price, str_r31.current_status, str_r31.isBtcCapital));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", str_r31.order_type !== "single" ? ctx_r16.calculateDelta(str_r31.isBtcCapital ? str_r31.transactions[0] && str_r31.transactions[0].cumulative_quantity ? str_r31.transactions[0].cumulative_quantity : str_r31.capital : str_r31.sell_price < str_r31.current_initial_price ? ctx_r16.fromCoinToBTC(str_r31.capital, str_r31.current_initial_price) : ctx_r16.fromCoinToBTC(str_r31.capital, str_r31.sell_price), ctx_r16.calculateSelledCapital(str_r31.capital, str_r31.sell_price, str_r31.current_capital, str_r31.buy_price, str_r31.current_status, str_r31.isBtcCapital), false, str_r31) : 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.isNumero(ctx_r16.calculateCurrentCapital(str_r31.current_capital, str_r31.coin_pair, str_r31)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.isNumero(ctx_r16.calculateCurrentCapital(str_r31.current_capital, str_r31.coin_pair, str_r31)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.isNumero(ctx_r16.calculateCurrentCapital(str_r31.current_capital, str_r31.coin_pair, str_r31)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.isNumero(ctx_r16.calculateCurrentCapital(str_r31.current_capital, str_r31.coin_pair, str_r31)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r31.order_type !== "single" ? str_r31.buy_price.toFixed(8) : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r31.sell_price.toFixed(8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](75, 49, str_r31.date, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](75, _c8, str_r31.status == "ACTIVE", str_r31.status != "ACTIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r31.status == "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r31.status != "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", str_r31.order_type !== "single" ? ctx_r16.calculateTransactions(str_r31, str_r31.status, str_r31.transactions, str_r31.transactions.length) : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r31.current_status === "SELL" && str_r31.status === "STOP");
} }
const _c9 = function (a0) { return { "light": a0 }; };
const _c10 = function (a0) { return { "opacity": a0 }; };
function DashboardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_6_div_7_Template, 8, 6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardComponent_div_6_div_15_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DashboardComponent_div_6_div_16_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DashboardComponent_div_6_div_22_Template, 9, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Stato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Nome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Scambio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "ToT Btc Iniziali");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "ToT Btc Vendita");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u25B2 BTC vendita");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "ToT Btc Correnti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u25B2 BTC Correnti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Prezzo Compera");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Prezzo Vendita");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_6_Template_a_click_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.moveSliderDetails("prev"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_6_Template_a_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.moveSliderDetails("next"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Scambio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "BTC iniziali");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "BTC alla vendita");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u25B2 % vendita");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "BTC correnti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u25B2 % correnti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Prezzo di compera");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Prezzo di vendita");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "PAUSA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "CHIUDI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Cicli eseguiti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_6_Template_input_ngModelChange_113_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.selectAll = $event; })("ngModelChange", function DashboardComponent_div_6_Template_input_ngModelChange_113_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.manageAll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_6_Template_input_ngModelChange_116_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.searchState = $event; })("ngModelChange", function DashboardComponent_div_6_Template_input_ngModelChange_116_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.filterResult(ctx_r59.searchState, "state"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_6_Template_input_ngModelChange_120_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.searchState = $event; })("ngModelChange", function DashboardComponent_div_6_Template_input_ngModelChange_120_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.filterResult(ctx_r61.searchState, "state"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_6_Template_input_ngModelChange_124_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.searchState = $event; })("ngModelChange", function DashboardComponent_div_6_Template_input_ngModelChange_124_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.filterResult(ctx_r63.searchState, "state"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_6_Template_input_ngModelChange_128_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.searchName = $event; })("ngModelChange", function DashboardComponent_div_6_Template_input_ngModelChange_128_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.filterResult(ctx_r65.searchName, "name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_6_Template_input_ngModelChange_130_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.searchFilter = $event; })("ngModelChange", function DashboardComponent_div_6_Template_input_ngModelChange_130_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.filterResult(ctx_r67.searchFilter, "pairs"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_6_Template_input_ngModelChange_146_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.searchDate = $event; })("ngModelChange", function DashboardComponent_div_6_Template_input_ngModelChange_146_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.filterResult(ctx_r69.searchDate, "date"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_6_Template_input_ngModelChange_152_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.executedTransaction = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, DashboardComponent_div_6_tr_153_Template, 5, 2, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](154, DashboardComponent_div_6_tr_154_Template, 86, 78, "tr", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.currentPrices);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPrices.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.currentPrices.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedStrategy.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.calculateCapital("initial"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.calculateCapital("selled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.calculateDelta(ctx_r0.btcInitialTotal, ctx_r0.btcSelledTotal) + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.calculateCapital("current"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.calculateDelta(ctx_r0.btcInitialTotal, ctx_r0.btcCurrentTotal) + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c9, ctx_r0.cssmode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c9, ctx_r0.cssmode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c10, ctx_r0.searchState == "all" ? "1" : "0.5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c10, ctx_r0.searchState == "buy" ? "1" : "0.5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c10, ctx_r0.searchState == "sell" ? "1" : "0.5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.calculateCapital("initial"))("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.calculateCapital("selled"))("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.calculateDelta(ctx_r0.btcInitialTotal, ctx_r0.btcSelledTotal) + "%")("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.calculateCapital("current"))("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.calculateDelta(ctx_r0.btcInitialTotal, ctx_r0.btcCurrentTotal) + "%")("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r0.searchDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.executedTransaction)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.activeStrategies || !ctx_r0.activeStrategies.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.activeStrategies);
} }
function DashboardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.checkMobileData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.checkMobileData.coin_pair);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.checkMobileData.capital);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.checkMobileData.capital);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.checkMobileData.buy_price.toFixed(8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.checkMobileData.sell_price.toFixed(8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.checkMobileData.date);
} }
function DashboardComponent_h2_20_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stai fermando");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_h2_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stai riavviando");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_h2_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_h2_20_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_h2_20_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.stopData.status === "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.stopData.status !== "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.stopData.name, "");
} }
function DashboardComponent_h2_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Stai cancellando la strategia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.stopData.name, "");
} }
function DashboardComponent_div_47_tr_21_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_47_tr_21_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const tr_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r80.getSpecificStatus(tr_r75.order_id, ctx_r80.stopData.coin_pair); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "STATO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_47_tr_21_button_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_47_tr_21_button_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_47_tr_21_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_47_tr_21_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r85.openStopModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_47_tr_21_button_12_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_47_tr_21_button_12_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c8, ctx_r78.stopData.status == "ACTIVE", ctx_r78.stopData.status != "ACTIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r78.stopData.status == "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r78.stopData.status != "ACTIVE");
} }
function DashboardComponent_div_47_tr_21_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_47_tr_21_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r87.openCancelModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_47_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_47_tr_21_button_10_Template, 2, 0, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_div_47_tr_21_button_12_Template, 3, 6, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardComponent_div_47_tr_21_button_14_Template, 2, 0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tr_r75 = ctx.$implicit;
    const lst_r76 = ctx.last;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tr_r75.order_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tr_r75.type_transaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r73.parseDate(tr_r75.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tr_r75.quantity ? tr_r75.quantity : "fake");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lst_r76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lst_r76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lst_r76);
} }
function DashboardComponent_div_47_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_47_tr_22_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r89.deleteFromDb(ctx_r89.stopData.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CANCELLA STRATEGIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Strategia: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Id dell' Ordine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Quantit\u00E0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Stato Ordine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pausa Ordine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ferma Ordine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DashboardComponent_div_47_tr_21_Template, 15, 7, "tr", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DashboardComponent_div_47_tr_22_Template, 8, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_47_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.closeTransaction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CHIUDI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.stopData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.stopData.transactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.stopData.transactions.length === 0);
} }
function DashboardComponent_div_53_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r94.nm);
} }
function DashboardComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_53_li_4_Template, 2, 1, "li", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Conferma !!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_53_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.closeMultiple(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CHIUDI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_53_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.manageMultipleAction(ctx_r97.multipleType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CONTINUA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Stai eseguendo una ", ctx_r10.multipleType === "pp" ? "PLAY/PAUSE" : "CANCELLAZIONE", " multipla per le seguenti startegie:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.selectedStrategy);
} }
class DashboardComponent {
    constructor(actionService, alertService, cdFref, _vps, sharingService, authService, homeCmp) {
        this.actionService = actionService;
        this.alertService = alertService;
        this.cdFref = cdFref;
        this._vps = _vps;
        this.sharingService = sharingService;
        this.authService = authService;
        this.homeCmp = homeCmp;
        this.searchState = 'all';
        this.details = false;
        this.selectAll = false;
        this.executedTransaction = 0;
        this.selectedBox = [{ order: 0, nm: '0', st: '0' }];
        this.loaded = false;
        this.selecteFilter = [];
        this.selectedCoin = [];
        this.minSlide = 0;
        this.maxSlide = 3;
        this.currentPrices = [];
        this.selectedStrategy = [];
        this.isChecked = [];
        this.multipleType = '';
        this.isPartial = [];
        this.loadActiveStrategy();
        this.user = this.authService.user;
        this.cssmode = localStorage.getItem('cssmode') === 'light';
    }
    ngOnInit() {
        this.reloadStuff = setInterval(() => {
            this.reload();
            this.reloaded = parseFloat($('#carouselExampleControlsTop .active').attr('id'));
        }, 31000);
        this.sharingService.notifyObservable$.subscribe((res) => {
            if (res.hasOwnProperty('value')) {
                this.cssmode = res.value;
            }
        });
        $('#carouselExampleControlsTop').carousel({
            interval: false
        });
    }
    moveSliderDetails(action) {
        $('#carouselExampleControlsTop').carousel('pause');
        if (action === 'next') {
            for (let i = 0; i < this.strNumber; i++) {
                const name = '#carouselExampleControls' + i;
                $(name).carousel(action);
            }
        }
        else {
            for (let i = 0; i < this.strNumber; i++) {
                const name = '#carouselExampleControls' + i;
                $(name).carousel(action);
            }
        }
    }
    setSlider() {
        let slide = $('#carouselExampleControlsTop .active').attr('id');
        for (let i = 0; i < this.strNumber; i++) {
            const name = '#carouselExampleControls' + i;
            if (slide === undefined) {
                slide = 0;
            }
            if ($(name).find('#' + slide + '0').hasClass('active')) {
                $(name).find('#' + slide + '0').removeClass('active');
            }
            $(name).find('#' + slide + '0').addClass('active');
        }
    }
    ngAfterContentChecked() {
        this.calculateTotalTransactions();
    }
    ngOnDestroy() {
        clearInterval(this.reloadStuff);
    }
    reload() {
        this.resetFilter();
        this.loadActiveStrategy();
        this.executedTransaction = 0;
        this.calculateTotalTransactions();
        this.reloadCheckBox();
    }
    setFilterPair(pair) {
        if (this.searchFilter === pair) {
            this.searchFilter = '';
        }
        else {
            this.searchFilter = pair;
        }
        this.filterResult(this.searchFilter, 'pairs');
    }
    isNumero(val) {
        let result = false;
        if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](val)) {
            result = true;
        }
        return result;
    }
    reloadCheckBox() {
        if (this.selectAll) {
            this.isChecked = lodash__WEBPACK_IMPORTED_MODULE_1__["fill"](this.isChecked, true);
        }
        else if (!this.selectAll && !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.selectedStrategy)) {
            // console.log(this.selectedStrategy, 'reload')
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.selectedStrategy, (s, i) => {
                this.isChecked[s.id] = true;
            });
        }
        else if (!this.selectAll && lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.selectedStrategy)) {
            this.uncheckAll();
        }
    }
    manageAll(event) {
        if (event === true) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, (o, i) => {
                this.selectedStrategy.push({ order: o.order_id, nm: o.name, st: o.status, pair: o.coin_pair });
                this.isChecked[i] = true;
            });
        }
        else {
            this.selectedStrategy = [];
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, (o, i) => {
                this.isChecked[i] = false;
            });
        }
        this.selectedStrategy = lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"](this.selectedStrategy, (o) => {
            return o.order;
        });
    }
    manageSlider(action) {
        if (action) {
            if (this.maxSlide < this.selectedCoin.length - 1) {
                this.minSlide++;
                this.maxSlide++;
            }
        }
        else {
            if (this.minSlide > 0) {
                this.minSlide--;
                this.maxSlide--;
            }
        }
    }
    updateSelectStatus(event, orderId, name, status, pairC, index) {
        this.selectAll = false;
        if (event.target.checked === true) {
            this.selectedStrategy.push({ order: orderId, nm: name, st: status, pair: pairC, id: index });
            this.isChecked[index] = true;
        }
        else {
            this.selectedStrategy = lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.selectedStrategy, (n) => {
                return n.order !== orderId;
            });
            this.isChecked[index] = false;
        }
    }
    getFloor(value) {
        return Math.floor(value);
    }
    specificPair(pairs) {
        // console.log(pairs, 'pp')
        this.currentPrices = [];
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](pairs, (p, i) => {
            this.actionService.getDetailsPairs(p.coin_pair).subscribe((resp) => {
                // console.log(resp);
                resp.prevDay.symbol = p.coin_pair;
                resp.prevDay.lastPrice = parseFloat(resp.prevDay.lastPrice);
                resp.prevDay.quoteVolume = parseFloat(resp.prevDay.quoteVolume);
                this.currentPrices.push(resp.prevDay);
                this.currentPrices = lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"](this.currentPrices, (e) => {
                    return e.symbol;
                });
                // if (this.currentPrices === []) {
                // } else {
                //   _.forEach(this.currentPrices, (pp) => {
                //     if (pp.name === p.name && p.price !== pp.price) {
                //       pp.price = p.price;
                //     }
                //   });
                // }
                // console.log(this.currentPrices)
            }, (error) => {
            });
        });
    }
    calculateCurrentCapital(currentCapital, pair, str) {
        if (str.current_status === 'BUY') {
            return this.calculateSelledCapital(str.capital, str.sell_price, str.current_capital, str.buy_price, str.current_status, str.isBtcCapital);
        }
        let selectedPairPrice;
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.currentPrices, (cp) => {
            if (cp.symbol === pair) {
                selectedPairPrice = cp.lastPrice;
            }
        });
        const result = (currentCapital * selectedPairPrice).toFixed(8);
        if (parseFloat(result) <= 0.00000010) {
            return currentCapital;
        }
        return parseFloat(result);
    }
    calculateDelta(p1, p2, status, str) {
        if (parseFloat(p2) === 0) {
            return 0;
        }
        if (status === 'BUY') {
            // tslint:disable-next-line:max-line-length
            return this.calculateDelta(p1, this.calculateSelledCapital(str.capital, str.sell_price, str.current_capital, str.buy_price, str.current_status, str.isBtcCapital));
        }
        if (str && !str.isBtcCapital && lodash__WEBPACK_IMPORTED_MODULE_1__["isInteger"](p1)) {
            p1 = (p1 * str.sell_price).toFixed(8);
        }
        const partial = (parseFloat(p2) - p1) / p1;
        return (partial * 100).toFixed(2);
    }
    calculateSelledCapital(capital, sellPrice, currentCapital, buyPrice, status, isBtcCapital) {
        const parseSellPrice = sellPrice.toFixed(8);
        const parseBuyPrice = buyPrice.toFixed(8);
        const ccS = parseFloat((currentCapital * parseSellPrice).toFixed(8));
        const ccB = parseFloat((currentCapital * parseBuyPrice).toFixed(8));
        switch (status) {
            case 'BUY':
                if (ccB <= 0.00000010) {
                    return capital;
                }
                // iisBtcCapital ? ccB :ccS
                return ccB;
                break;
            case 'SELL':
                return ccS;
                break;
            default:
                return capital;
        }
    }
    calculateTransactions(str, status, transactions, length) {
        const lastTransaction = transactions[length - 1];
        const type = lastTransaction && lastTransaction.type_transaction ? lastTransaction.type_transaction : 'BUY';
        let result = length % 2 === 0 ? length / 2 : this.getFloor(length / 2);
        // if (length >= 3) {
        //
        // } else {
        //   if (type === 'SELL' && status === 'ACTIVE') {
        //     result = str.isBtcCapital ? result - 1 : result;
        //   }
        // }
        if (type === 'SELL' && status === 'ACTIVE') {
            result = str.isBtcCapital ? result - 1 : result;
        }
        return result;
    }
    calculateTotalTransactions() {
        let partial = 0;
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, (str) => {
            if (str.order_type !== 'single') {
                const lastTransaction = str.transactions[str.transactions.length - 1];
                const type = lastTransaction && lastTransaction.type_transaction ? lastTransaction.type_transaction : 'BUY';
                let result = str.transactions.length % 2 === 0 ? str.transactions.length / 2 : this.getFloor(str.transactions.length / 2);
                // if (str.transactions.length >= 3) {
                //   if (type === 'SELL' && str.status === 'ACTIVE') {
                //     result = str.isBtcCapital ? result - 1 : result;
                //   }
                // } else {
                // }
                if (type === 'SELL' && str.status === 'ACTIVE') {
                    result = str.isBtcCapital ? result - 1 : result;
                }
                partial += result;
            }
        });
        this.executedTransaction = partial;
        this.loaded = true;
    }
    getCeil(value) {
        return Math.ceil(value);
    }
    closeStop() {
        this.stopModal.dismiss();
    }
    closeCancel() {
        this.cancelModal.dismiss();
    }
    closeTransaction() {
        this.transactionsModal.dismiss();
    }
    openConfirmModal(id) {
        this.checkMobileData = this.activeStrategies[id];
        this.detailsModal.show('modal-lg');
    }
    openMultiple(type) {
        if (this.selectedStrategy.length > 1) {
            this.multipleAction.show('modal-lg');
            switch (type) {
                case 'pp':
                    this.multipleType = type;
                    break;
                case 'cancel':
                    this.multipleType = type;
                    break;
                default:
                    this.multipleType = '';
            }
        }
        else {
            this.alertService.addMessage('danger', 'Devi selezionare almeno 2 strategie');
        }
    }
    manageMultipleAction(type) {
        const payload = [];
        if (type === 'pp') {
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.selectedStrategy, (ss, i) => {
                const stat = ss.st === 'STOP' ? 'ACTIVE' : 'STOP';
                payload.push({ name: ss.nm, status: stat });
            });
            this.actionService.multipleUpdate(payload).subscribe((resp) => {
                if (resp) {
                    this.closeMultiple();
                    this.loadActiveStrategy();
                    this.actionService.getBtcBalance().subscribe();
                    this.calculateTotalTransactions();
                    this.uncheckAll();
                    this.selectedStrategy = [];
                    this.alertService.addMessage('success', resp.success);
                    this.clearFilter();
                }
            });
        }
        else {
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.selectedStrategy, (ss, i) => {
                payload.push({ name: ss.nm, orderId: ss.order, pair: ss.pair });
            });
            this.actionService.multipleCancel(payload).subscribe((resp) => {
                if (resp) {
                    this.closeMultiple();
                    this.loadActiveStrategy();
                    this.actionService.getBtcBalance().subscribe();
                    this.calculateTotalTransactions();
                    this.uncheckAll();
                    this.selectedStrategy = [];
                    this.alertService.addMessage('success', resp.success);
                    this.clearFilter();
                }
            });
        }
    }
    uncheckAll() {
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.selectedStrategy, (as, i) => {
        });
        this.selectAll = false;
        this.isChecked = lodash__WEBPACK_IMPORTED_MODULE_1__["fill"](this.isChecked, false);
    }
    closeMultiple() {
        this.multipleType = '';
        this.multipleAction.dismiss();
    }
    openStopModal() {
        this.closeTransaction();
        this.stopModal.show('modal-lg');
    }
    openCancelModal() {
        this.closeTransaction();
        this.cancelModal.show('modal-lg');
    }
    fromCoinToBTC(amount, price) {
        const parsedAmount = parseFloat((amount * price).toFixed(8));
        return parsedAmount;
    }
    loadActiveStrategy() {
        this.actionService.getActiveStrategy().subscribe((resp) => {
            this.clonedStrategy = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](resp);
            this.activeStrategies = lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](this.clonedStrategy, 'name', 'asc');
            if (this.stopData === undefined) {
                this.stopData = resp[0];
            }
            this.selectedCoin = [];
            this.selectedCoin = lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"](this.activeStrategies, (e) => {
                return e.coin_pair;
            });
            this.specificPair(this.selectedCoin);
            this.checkMobileData = resp[0];
            this.strNumber = this.clonedStrategy.length;
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.selecteFilter, (sf) => {
                if (sf.name !== 'all' && sf.name !== '') {
                    this.filterResult(sf.name, sf.type);
                }
            });
            this.checkPartialOrders();
        });
    }
    checkPartialOrders() {
        const result = [];
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, (str, i) => {
            result.push({ tr: lodash__WEBPACK_IMPORTED_MODULE_1__["last"](str.transactions), pair: str.coin_pair, status: str.current_status });
        });
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](result, (re, i) => {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["has"](re.tr, 'partially_filled')) {
                this.isPartial[i] = true;
            }
            else {
                this.isPartial[i] = false;
            }
        });
    }
    getSpecificStatus(orderId, pair) {
        this.actionService.getCurrentStatus(orderId, pair).subscribe((resp) => {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](resp)) {
                this.alertService.addMessage('info', 'Stato dell ordine chiuso bilancio insufficente');
            }
            else {
                const state = resp.status === 'NEW' ? 'APERTO' : 'CHIUSO';
                this.alertService.addMessage('info', 'Stato dell ordine: ' + state);
            }
            return resp;
        });
    }
    deleteFromDb(name) {
        this.actionService.deleteFromDb(name).subscribe(() => {
            this.closeCancel();
            this.loadActiveStrategy();
            this.actionService.getBtcBalance().subscribe();
            this.calculateTotalTransactions();
            this.alertService.addMessage('success', 'Ordine cancellato con successo');
        });
    }
    cancelStrategy(orderId, pair, name) {
        if (orderId !== undefined) {
            this.actionService.stopStrategy(orderId, pair).subscribe((resp) => {
                this.actionService.deleteFromDb(name).subscribe(() => {
                    this.closeCancel();
                    this.loadActiveStrategy();
                    this.actionService.getBtcBalance().subscribe();
                    this.calculateTotalTransactions();
                    this.alertService.addMessage('success', 'Ordine cancellato con successo');
                });
            });
        }
        else {
            this.closeCancel();
            this.alertService.addMessage('danger', 'Ordine nn ancora aperto riprova fra poco');
        }
    }
    updateStrategy(name, status) {
        const payload = {
            status: status === 'ACTIVE' ? 'STOP' : 'ACTIVE',
        };
        this.actionService.updateStrategy(name, payload).subscribe((resp) => {
            this.closeStop();
            this.loadActiveStrategy();
            this.calculateTotalTransactions();
        });
    }
    filterResult(name, type) {
        this.loaded = false;
        let data;
        if (type === 'pairs') {
            this.searchName = '';
            this.searchDate = '';
            this.searchState = 'all';
            if (this.searchFilter !== undefined) {
                data = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.clonedStrategy, (o) => {
                    return o.coin_pair.includes(name.toUpperCase());
                });
            }
            else {
                data = this.clonedStrategy;
            }
        }
        else if (type === 'name') {
            this.searchFilter = '';
            this.searchDate = '';
            this.searchState = 'all';
            if (this.searchName !== undefined) {
                data = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.clonedStrategy, (o) => {
                    return o.name.includes(name.toUpperCase());
                });
            }
            else {
                data = this.clonedStrategy;
            }
        }
        else if (type === 'date') {
            this.searchFilter = '';
            this.searchName = '';
            this.searchState = 'all';
            if (this.searchDate !== undefined) {
                data = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.clonedStrategy, (o) => {
                    return o.date.includes(name);
                });
            }
            else {
                data = this.clonedStrategy;
            }
        }
        else if (type === 'state') {
            this.searchFilter = '';
            this.searchName = '';
            this.searchDate = '';
            const nameUp = name.toUpperCase();
            if (this.searchState !== undefined && name !== 'all') {
                data = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.clonedStrategy, (o) => {
                    return o.current_status === nameUp;
                });
            }
            else {
                data = this.clonedStrategy;
            }
        }
        this.activeStrategies = lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](data, 'name', 'asc');
        this.loaded = true;
    }
    openDetails(data) {
        this.stopData = this.activeStrategies[data];
        $(document).on('click', '.showD', () => {
            this.transactionsModal.show('modal-lg');
        });
    }
    showInitialCapital(str) {
        if (str.isBtcCapital) {
            if (str.transactions[0] && str.transactions[0].cumulative_quantity) {
                return str.transactions[0].cumulative_quantity;
            }
            return str.capital;
        }
        else {
            // ALTCOINS
            // if (str.transactions[0] && str.transactions[0].cumulative_quantity ) {
            //   return str.transactions[0].cumulative_quantity;
            // }
            // if (str.current_status === 'SELL') {
            //   return this.fromCoinToBTC(str.capital, str.sell_price);
            // }
            // console.log(this.currentPrices);
            // const price = _.filter(this.currentPrices, (o) => {
            //   return o.name === str.coin_pair;
            // });
            // console.log(price, '<<<');
            if (str.current_initial_price && (str.sell_price < str.current_initial_price)) {
                // console.log('soddisffo',str);
                return this.fromCoinToBTC(str.capital, str.current_initial_price);
            }
            // console.log('nn soddisfso',str.name, str.capital, str.sell_price);
            return this.fromCoinToBTC(str.capital, str.sell_price);
        }
    }
    calculateCapital(type) {
        let startCapital = 0;
        let currentCapital = 0;
        let realCurrentCapital = 0;
        switch (type) {
            case 'initial':
                lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, (str) => {
                    if (str.order_type !== 'single') {
                        if (str.transactions[0] && str.transactions[0].cumulative_quantity && str.isBtcCapital) {
                            // tslint:disable-next-line:max-line-length
                            startCapital += str.transactions[0].cumulative_quantity;
                        }
                        else {
                            // tslint:disable-next-line:max-line-length
                            startCapital += str.isBtcCapital ? str.capital : str.sell_price < str.current_initial_price ? this.fromCoinToBTC(str.capital, str.current_initial_price) : this.fromCoinToBTC(str.capital, str.sell_price);
                        }
                    }
                });
                this.btcInitialTotal = startCapital.toFixed(8);
                return startCapital.toFixed(8);
            case 'selled':
                lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, (str) => {
                    if (str.order_type !== 'single') {
                        // tslint:disable-next-line:max-line-length
                        currentCapital += this.calculateSelledCapital(str.capital, str.sell_price, str.current_capital, str.buy_price, str.current_status, str.isBtcCapital);
                    }
                });
                this.btcSelledTotal = currentCapital.toFixed(8);
                return currentCapital.toFixed(8);
            case 'current':
                lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, (str) => {
                    if (str.order_type !== 'single') {
                        realCurrentCapital += parseFloat(this.calculateCurrentCapital(str.current_capital, str.coin_pair, str));
                    }
                });
                this.btcCurrentTotal = realCurrentCapital.toFixed(8);
                return realCurrentCapital.toFixed(8);
        }
    }
    parseDate(date) {
        const data = new Date(date);
        // tslint:disable-next-line:max-line-length
        return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + ' - ' + (data.getHours() < 10 ? '0' + data.getHours() : data.getHours()) + ':' + (data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes());
    }
    resetFilter() {
        const result = [];
        this.searchFilter = lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.searchFilter) ? '' : this.searchFilter;
        result.push({ name: this.searchFilter, type: 'pairs' });
        this.searchState = this.searchState === 'all' ? 'all' : this.searchState;
        result.push({ name: this.searchState, type: 'state' });
        this.searchName = lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.searchName) ? '' : this.searchName;
        result.push({ name: this.searchName, type: 'name' });
        // this.searchDate = _.isEmpty(this.searchDate) ? '' : this.searchDate;
        this.selecteFilter = result;
        // this.selectedStrategy = [];
    }
    clearFilter() {
        this.searchFilter = undefined;
        this.searchState = 'all';
        this.searchName = undefined;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_sharing_service__WEBPACK_IMPORTED_MODULE_5__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["dashboard-component"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.detailsModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stopModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cancelModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.transactionsModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multipleAction = _t.first);
    } }, decls: 54, vars: 7, consts: [[1, "sub-header"], [1, "h1"], [1, "float-right", 2, "font-size", "16px"], ["class", "mt-3", 4, "ngIf"], ["id", "edit-modal"], ["detailsModal", ""], [1, "app-modal-header"], ["class", "app-modal-body", 4, "ngIf"], ["id", "stop-modal"], ["stopModal", ""], [1, "app-modal-body"], [1, "text-center"], [4, "ngIf"], ["data-dismiss", "modal", 1, "btn", "btn-danger", "float-left", 3, "click"], ["data-dismiss", "modal", 1, "btn", "start-btn", "float-right", 3, "click"], ["id", "cancel-modal"], ["cancelModal", ""], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["id", "transaction-modal"], ["transactionsModal", ""], ["class", "text-center", 4, "ngIf"], ["id", "multiple-action"], ["multipleAction", ""], ["class", "app-modal-body ", 4, "ngIf"], [1, "mt-3"], ["id", "accordion", 1, "mb-3"], [1, "row"], [1, "col-10"], [1, "mobile-info"], ["id", "carouselExampleControlsAssets", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item stat ", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["href", "#carouselExampleControlsAssets", "role", "button", "data-slide", "prev", 1, "carousel-control-prev", "top"], [1, "sr-only"], ["href", "#carouselExampleControlsAssets", "role", "button", "data-slide", "next", 1, "carousel-control-next", "top"], [1, "desk-info", "top"], [1, "col-2"], [1, "float-right", "mb-2"], ["src", "assets/icons/info-solid.svg", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Ordine parzialmente eseguito", 1, "info-dot", "partial"], ["src", "assets/icons/info-solid.svg", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Ordine singolo", 1, "info-dot", "single"], ["id", "dash-table", 1, "table-responsive"], [1, "desk-info"], ["id", "carouselExampleControlsTop", "data-interval", "false", 1, "carousel", "slide"], ["id", "0", 1, "carousel-item", "stat", "active"], ["id", "1", 1, "carousel-item", "stat"], ["id", "2", 1, "carousel-item", "stat"], ["id", "3", 1, "carousel-item", "stat"], ["id", "4", 1, "carousel-item", "stat"], ["id", "5", 1, "carousel-item", "stat"], ["id", "6", 1, "carousel-item", "stat"], ["id", "7", 1, "carousel-item", "stat"], ["id", "8", 1, "carousel-item", "stat"], ["id", "9", 1, "carousel-item", "stat"], ["href", "#carouselExampleControlsTop", "role", "button", "data-slide", "prev", 1, "carousel-control-prev", "top", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-prev-icon", 3, "ngClass"], ["href", "#carouselExampleControlsTop", "role", "button", "data-slide", "next", 1, "carousel-control-next", "top", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-next-icon", 3, "ngClass"], [1, "hidden-column"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Totale BTC alla fine di tutte le vendite", 1, "hidden-column"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Differenza % tra BTC iniziali e BTC vendita", 1, "hidden-column"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Totale BTC al valore attuale di mercato", 1, "hidden-column"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Differenza % tra BTC iniziali e BTC correnti", 1, "hidden-column"], [1, "d-none"], ["type", "checkbox", "id", "selectAll", 3, "ngModel", "ngModelChange"], ["for", "all", "data-toggle", "tooltip", "data-placement", "top", "title", "Tutti gli ordini", 1, "mr-1", "label-custom"], ["id", "all", "type", "radio", "value", "all", 1, "radio-dash", "all", 3, "ngModel", "ngModelChange"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "dollar-sign", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 288 512", 1, "svg-inline--fa", "fa-dollar-sign", "fa-w-9", 3, "ngStyle"], ["fill", "blue", "d", "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"], ["for", "buy", "data-toggle", "tooltip", "data-placement", "top", "title", "Ordini in acquisto", 1, "mr-1", "label-custom"], ["id", "buy", "type", "radio", "value", "buy", 1, "radio-dash", "buy", 3, "ngModel", "ngModelChange"], ["fill", "green", "d", "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"], ["for", "sell", "data-toggle", "tooltip", "data-placement", "top", "title", "Ordini in vendita", 1, "label-custom"], ["id", "sell", "type", "radio", "value", "sell", 1, "radio-dash", "sell", 3, "ngModel", "ngModelChange"], ["fill", "red", "d", "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"], ["type", "text", "id", "filter-name", 1, "w-100", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "filter-pair", 1, "filter-dash", 3, "ngModel", "ngModelChange"], ["type", "text", 1, "filter-dash", "tot", 3, "value", "disabled"], ["type", "text", 1, "filter-dash", "tot", "text-center", 3, "value", "disabled"], ["type", "text", 1, "filter-dash", 3, "disabled"], ["type", "text", "id", "filter-date", 1, "filter-dash", 3, "disabled", "ngModel", "ngModelChange"], ["type", "text", 1, "filter-dash", "min", 3, "disabled"], ["type", "text", 1, "filter-dash", "text-center", 3, "ngModel", "disabled", "ngModelChange"], ["style", "cursor: pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "carousel-item", "stat", 3, "ngClass", "click"], ["class", "price-label m-1 pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "price-label", "m-1", "pointer", 3, "ngClass", "click"], ["role", "status", 1, "card-s"], [1, "float-left", "mt-2", "mb-2", "multi-container"], [1, "btn", "btn-dark", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "float-right"], ["colspan", "13", 1, "text-uppercase", "pt-3", "text-center"], ["class", "spinner-border", 4, "ngIf"], [1, "spinner-border"], [2, "cursor", "pointer", 3, "ngClass", "click"], ["type", "checkbox", 1, "check-dash", 3, "checked", "name", "id", "change"], [1, "text-center", "showD"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Visualizza ordini"], ["src", "assets/icons/dollar-sign-solid.svg", "alt", "buy", "width", "18", 4, "ngIf"], ["src", "assets/icons/dollar-sign.svg", "alt", "sell", "width", "18", 4, "ngIf"], ["class", "status-icon play", "src", "assets/icons/play-circle-solid.svg", "alt", "play", "width", "18", 4, "ngIf"], ["class", "status-icon pause", "src", "assets/icons/pause-circle-solid.svg", "alt", "pause", "width", "18", 4, "ngIf"], [1, "showD", "desk-info"], [1, "mobile-info", "read"], ["data-interval", "false", 1, "carousel", "slide", 3, "id"], ["id", "00", 1, "carousel-item", 3, "ngClass"], ["id", "10", 1, "carousel-item", 3, "ngClass"], ["id", "20", 1, "carousel-item", 3, "ngClass"], ["id", "30", 1, "carousel-item", 3, "ngClass"], ["id", "40", 1, "carousel-item", 3, "ngClass"], ["id", "50", 1, "carousel-item", 3, "ngClass"], ["id", "60", 1, "carousel-item", 3, "ngClass"], ["id", "70", 1, "carousel-item", 3, "ngClass"], ["id", "80", 1, "carousel-item", 3, "ngClass"], ["id", "90", 1, "carousel-item", 3, "ngClass"], [1, "hidden-column", "showD"], [1, "hidden-column", "showD", "text-center"], ["class", "spinner-grow", "role", "status", 4, "ngIf"], [1, "showD", "d-none"], [1, "btn", 3, "ngClass", "click"], ["alt", "stop", "src", "assets/icons/stop-circle-solid.svg", "width", "20"], [1, "nTransactions", "text-center", "showD"], ["data-toggle", "tooltip", "data-placement", "top", "title", "A transazione conclusa", 4, "ngIf"], ["src", "assets/icons/dollar-sign-solid.svg", "alt", "buy", "width", "18"], ["src", "assets/icons/dollar-sign.svg", "alt", "sell", "width", "18"], ["src", "assets/icons/play-circle-solid.svg", "alt", "play", "width", "18", 1, "status-icon", "play"], ["src", "assets/icons/pause-circle-solid.svg", "alt", "pause", "width", "18", 1, "status-icon", "pause"], ["role", "status", 1, "spinner-grow"], ["width", "20", "alt", "pause", "src", "assets/icons/pause-circle-solid.svg"], ["width", "20", "alt", "play", "src", "assets/icons/play-circle-solid.svg"], ["data-toggle", "tooltip", "data-placement", "top", "title", "A transazione conclusa"], [1, "table-responsive-lg"], [4, "ngFor", "ngForOf"], ["data-dismiss", "modal", 1, "btn", "btn-danger", "mt-3", "w-100", 3, "click"], ["class", "btn btn-dark w-100", 3, "click", 4, "ngIf"], ["class", "btn w-100", 3, "ngClass", "click", 4, "ngIf"], ["class", "btn btn-danger w-100", 3, "click", 4, "ngIf"], [1, "btn", "btn-dark", "w-100", 3, "click"], [1, "btn", "w-100", 3, "ngClass", "click"], [1, "btn", "btn-danger", "w-100", 3, "click"], ["colspan", "3"], ["style", "  list-style-type: none;", 4, "ngFor", "ngForOf"], [2, "list-style-type", "none"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Riepilogo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_6_Template, 155, 50, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "modal", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dettagli: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_div_12_Template, 15, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "modal", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "STOP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DashboardComponent_h2_20_Template, 4, 3, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Conferma !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_23_listener() { return ctx.closeStop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CHIUDI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_25_listener() { return ctx.updateStrategy(ctx.stopData.name, ctx.stopData.status); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " CONTINUA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "modal", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "CANCEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DashboardComponent_h2_34_Template, 4, 1, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Conferma !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_37_listener() { return ctx.closeCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "CHIUDI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_39_listener() { return ctx.cancelStrategy(ctx.stopData.order_id, ctx.stopData.coin_pair, ctx.stopData.name); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " CONTINUA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "modal", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "TRANSAZIONI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DashboardComponent_div_47_Template, 25, 3, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "modal", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Azione multipla : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, DashboardComponent_div_53_Template, 11, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Strategie attive: ", ctx.strNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkMobileData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stopData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stopData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stopData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedStrategy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".arrow[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: relative;\n  background-color: orange;\n  border-radius: 16px;\n  padding: 5px;\n  border: 1px solid white;\n  width: 34px;\n  cursor: pointer;\n  text-align: center;\n}\n.arrow.left[_ngcontent-%COMP%] {\n  float: left;\n  top: 50px;\n  margin-right: -25px;\n}\n.arrow.right[_ngcontent-%COMP%] {\n  float: right;\n  top: -92px;\n  right: -2px;\n}\n.coin-card[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  border-radius: 16px;\n  background-color: #183153;\n  opacity: 0.8;\n  color: white;\n  padding: 10px 20px;\n}\n.price-label[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  background-color: transparent;\n  display: inline-block;\n  border-bottom: 1px solid #435772;\n  border-top: 1px solid #435772;\n}\n.price-label.light[_ngcontent-%COMP%] {\n  color: #020202;\n}\n.price-label.light.selected-filter[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.62);\n  -webkit-box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.62);\n  -moz-box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.62);\n}\n.price-label.dark[_ngcontent-%COMP%] {\n  color: #f2f2f2;\n}\n.price-label.dark.selected-filter[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.62);\n  -webkit-box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.62);\n  -moz-box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.62);\n}\n.info-dot[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  border: 2px solid;\n  width: 30px;\n  height: 30px;\n  margin-left: 4px;\n  padding: 3px;\n}\n.info-dot.partial[_ngcontent-%COMP%] {\n  background-color: #C1ECFD;\n}\n.info-dot.single[_ngcontent-%COMP%] {\n  background-color: #FDF493;\n}\n.multi-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n}\n.mobile-info[_ngcontent-%COMP%] {\n  display: none;\n}\n.desk-info[_ngcontent-%COMP%] {\n  display: block;\n}\n.desk-info.top[_ngcontent-%COMP%] {\n  height: 74px;\n}\ntable[_ngcontent-%COMP%] {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\ntable[_ngcontent-%COMP%]   .single[_ngcontent-%COMP%] {\n  background-color: #FDF493;\n  color: black;\n}\ntable[_ngcontent-%COMP%]   .partial[_ngcontent-%COMP%] {\n  background-color: #C1ECFD;\n  color: black;\n}\n.dot[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: inherit;\n}\n.dot.run[_ngcontent-%COMP%] {\n  background-color: green;\n}\n.dot.stop[_ngcontent-%COMP%] {\n  background-color: red;\n}\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 8px;\n}\ntd[_ngcontent-%COMP%]   .label-custom[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .label-custom[_ngcontent-%COMP%] {\n  width: 10px;\n  padding-top: 6px;\n  margin-top: -25px;\n  height: 10px;\n}\ntd[_ngcontent-%COMP%]   .filter-dash[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .filter-dash[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\ntd[_ngcontent-%COMP%]   .filter-dash.min[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .filter-dash.min[_ngcontent-%COMP%] {\n  max-width: 48px;\n}\ntd[_ngcontent-%COMP%]   .filter-dash.tot[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .filter-dash.tot[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\ntd[_ngcontent-%COMP%]   .radio-dash[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .radio-dash[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\ntd[_ngcontent-%COMP%]   .radio-dash.buy[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .radio-dash.buy[_ngcontent-%COMP%] {\n  color: green;\n}\ntd[_ngcontent-%COMP%]   .radio-dash.sell[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .radio-dash.sell[_ngcontent-%COMP%] {\n  color: red;\n}\ntd[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  border-radius: 16px;\n}\ntd[_ngcontent-%COMP%]   .status-icon.play[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .status-icon.play[_ngcontent-%COMP%] {\n  background-color: green;\n}\ntd[_ngcontent-%COMP%]   .status-icon.pause[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .status-icon.pause[_ngcontent-%COMP%] {\n  background-color: black;\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  opacity: 0;\n}\ninput[type=radio][_ngcontent-%COMP%]    + path[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: -24px;\n}\ninput[_ngcontent-%COMP%]    + svg[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ninput[class=all][_ngcontent-%COMP%]:hover    + svg[_ngcontent-%COMP%], input[class=all][_ngcontent-%COMP%]:checked    + svg[_ngcontent-%COMP%], input[class=all][_ngcontent-%COMP%]:focus    + svg[_ngcontent-%COMP%] {\n  fill: #006dd9;\n}\n@media screen and (max-width: 600px) {\n  .hidden-column[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .filter-dash[_ngcontent-%COMP%] {\n    max-width: 60px !important;\n  }\n}\n@media screen and (max-width: 414px) {\n  .price-label[_ngcontent-%COMP%] {\n    text-align: center;\n    display: block;\n  }\n\n  .desk-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-info[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .mobile-info[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n    text-align: center;\n    min-height: 80px;\n  }\n  .mobile-info[_ngcontent-%COMP%]   .carousel-item.stat[_ngcontent-%COMP%] {\n    min-height: 40px;\n  }\n  .mobile-info[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n  }\n  .mobile-info[_ngcontent-%COMP%]   .carousel-control-next-icon.light[_ngcontent-%COMP%] {\n    background-image: url('arrow-circle-right-solid.svg');\n  }\n  .mobile-info[_ngcontent-%COMP%]   .carousel-control-next-icon.top[_ngcontent-%COMP%] {\n    top: 25px;\n  }\n  .mobile-info[_ngcontent-%COMP%]   .carousel-control-prev-icon.light[_ngcontent-%COMP%] {\n    background-image: url('arrow-circle-left-solid.svg');\n  }\n  .mobile-info[_ngcontent-%COMP%]   .carousel-control-prev-icon.top[_ngcontent-%COMP%] {\n    top: 25px;\n  }\n\n  table[_ngcontent-%COMP%]   #filter-pair[_ngcontent-%COMP%] {\n    max-width: 156px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2hvbWUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDRUo7QURBRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0VKO0FERUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDQTtFQUVFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNDRjtBREFFO0VBRUUsY0FBQTtBQ0NKO0FEQUk7RUFFRSwrQ0FBQTtFQUNBLHVEQUFBO0VBQ0Esb0RBQUE7QUNDTjtBREVFO0VBRUUsY0FBQTtBQ0RKO0FERUk7RUFFRSxxREFBQTtFQUNBLDZEQUFBO0VBQ0EsMERBQUE7QUNETjtBRE9BO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSkY7QURLRTtFQUNFLHlCQUFBO0FDSEo7QURLRTtFQUNFLHlCQUFBO0FDSEo7QURPQTtFQUdFLFdBQUE7RUFDQSxhQUFBO0FDTkY7QURRQTtFQUNFLGFBQUE7QUNMRjtBRE9BO0VBQ0UsY0FBQTtBQ0pGO0FES0U7RUFDRSxZQUFBO0FDSEo7QURNQTtFQUVFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDSkY7QURXRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ1RKO0FEV0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNUSjtBRGNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNYRjtBRFlFO0VBQ0UsdUJBQUE7QUNWSjtBRFlFO0VBQ0UscUJBQUE7QUNWSjtBRGFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDVkY7QURXRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1RKO0FEV0U7RUFDRSxlQUFBO0FDVEo7QURVTTtFQUNFLGVBQUE7QUNSUjtBRFVJO0VBQ0UsZ0JBQUE7QUNSTjtBRFdFO0VBQ0UsaUJBQUE7QUNUSjtBRFVJO0VBQ0UsWUFBQTtBQ1JOO0FEVUk7RUFDRSxVQUFBO0FDUk47QURZRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNWSjtBRFdJO0VBQ0UsdUJBQUE7QUNUTjtBRFdJO0VBQ0UsdUJBQUE7QUNUTjtBRGtCQTtFQUVJLFVBQUE7QUNoQko7QURvQkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNqQkY7QURvQkE7RUFDRSxlQUFBO0FDakJGO0FEb0JBOzs7RUFHRSxhQUFBO0FDakJGO0FEbUJBO0VBSUU7SUFDRSx3QkFBQTtFQ25CRjs7RURxQkE7SUFDRSwwQkFBQTtFQ2xCRjtBQUNGO0FEb0JBO0VBRUU7SUFDRSxrQkFBQTtJQUNBLGNBQUE7RUNuQkY7O0VEcUJBO0lBQ0UsYUFBQTtFQ2xCRjs7RURvQkE7SUFDRSxjQUFBO0VDakJGO0VEbUJFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtFQ2pCSjtFRGtCSTtJQUNFLGdCQUFBO0VDaEJOO0VEa0JJO0lBQ0UseUJBQUE7RUNoQk47RURvQkk7SUFDRSxxREFBQTtFQ2xCTjtFRG9CSTtJQUNFLFNBQUE7RUNsQk47RURzQkk7SUFDRSxvREFBQTtFQ3BCTjtFRHNCSTtJQUNFLFNBQUE7RUNwQk47O0VEeUJFO0lBQ0UsMkJBQUE7RUN0Qko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFycm93e1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiAzNHB4O1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmLmxlZnR7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTI1cHg7XG4gIH1cbiAgJi5yaWdodHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdG9wOiAtOTJweDtcbiAgICByaWdodDogLTJweDtcbiAgfVxufVxuXG4uY29pbi1jYXJke1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MzE1MztcbiAgb3BhY2l0eTogMC44O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5wcmljZS1sYWJlbHtcbiAgLy9ib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MzU3NzI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDM1NzcyO1xuICAmLmxpZ2h0e1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjojNDM1NzcyIDtcbiAgICBjb2xvcjojMDIwMjAyO1xuICAgICYuc2VsZWN0ZWQtZmlsdGVye1xuICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsMCwwLDAuNjIpO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjYyKTtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwwLDAsMC42Mik7XG4gICAgfVxuICB9XG4gICYuZGFya3tcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IzQzNTc3MiA7XG4gICAgY29sb3I6I2YyZjJmMjtcbiAgICAmLnNlbGVjdGVkLWZpbHRlcntcbiAgICAgIC8vYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgyNTUsMjU1LDI1NSwwLjYyKTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMjU1LDI1NSwyNTUsMC42Mik7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDI1NSwyNTUsMjU1LDAuNjIpO1xuICAgIH1cbiAgfVxuXG59XG5cbi5pbmZvLWRvdHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgJi5wYXJ0aWFse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMUVDRkQ7XG4gIH1cbiAgJi5zaW5nbGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERjQ5MztcbiAgfVxufVxuXG4ubXVsdGktY29udGFpbmVye1xuICAvL2JvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xuICAvL2JhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1vYmlsZS1pbmZve1xuICBkaXNwbGF5OiBub25lO1xufVxuLmRlc2staW5mb3tcbiAgZGlzcGxheTogYmxvY2s7XG4gICYudG9we1xuICAgIGhlaWdodDogNzRweDtcbiAgfVxufVxudGFibGUge1xuXG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG5cblxuICAuaGlkZGVuLWNvbHVtbntcbiAgIC8vZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc2luZ2xle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREY0OTM7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIC5wYXJ0aWFse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMUVDRkQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cblxufVxuLmRvdCB7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcbiAgJi5ydW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIH1cbiAgJi5zdG9we1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxufVxudGQsIHRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xuICAubGFiZWwtY3VzdG9te1xuICAgIHdpZHRoOjEwcHg7XG4gICAgcGFkZGluZy10b3A6IDZweDtcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gIH1cbiAgLmZpbHRlci1kYXNoe1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICAgICYubWlue1xuICAgICAgICBtYXgtd2lkdGg6NDhweDtcbiAgICAgIH1cbiAgICAmLnRvdHtcbiAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgfVxuICB9XG4gIC5yYWRpby1kYXNoe1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICYuYnV5e1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICAmLnNlbGx7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgfVxuXG4gIC5zdGF0dXMtaWNvbntcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgJi5wbGF5e1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgfVxuICAgICYucGF1c2V7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cblxufVxuXG5cblxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gIC8vZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgcGF0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbn1cblxuaW5wdXQgKyBzdmcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0W2NsYXNzPVwiYWxsXCJdOmhvdmVyICsgc3ZnLFxuaW5wdXRbY2xhc3M9XCJhbGxcIl06Y2hlY2tlZCArIHN2ZyxcbmlucHV0W2NsYXNzPVwiYWxsXCJdOmZvY3VzICsgc3ZnIHtcbiAgZmlsbDogcmdiKDAsIDEwOSwgMjE3KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50YWJsZSB7XG5cbiAgfVxuICAuaGlkZGVuLWNvbHVtbntcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZpbHRlci1kYXNoe1xuICAgIG1heC13aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuXG4gIC5wcmljZS1sYWJlbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5kZXNrLWluZm8ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm1vYmlsZS1pbmZvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgICAmLnN0YXR7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgICBsYWJlbHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcbiAgICAgICYubGlnaHR7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaWNvbnMvYXJyb3ctY2lyY2xlLXJpZ2h0LXNvbGlkLnN2Z1wiKTtcbiAgICAgIH1cbiAgICAgICYudG9we1xuICAgICAgICB0b3A6MjVweFxuICAgICAgfVxuICAgIH1cbiAgICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24ge1xuICAgICAgJi5saWdodHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pY29ucy9hcnJvdy1jaXJjbGUtbGVmdC1zb2xpZC5zdmdcIik7XG4gICAgICB9XG4gICAgICAmLnRvcHtcbiAgICAgICAgdG9wOjI1cHhcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGFibGUge1xuICAgICNmaWx0ZXItcGFpcntcbiAgICAgIG1heC13aWR0aDogMTU2cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgfVxufVxuIiwiLmFycm93IHtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICB3aWR0aDogMzRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXJyb3cubGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB0b3A6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogLTI1cHg7XG59XG4uYXJyb3cucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHRvcDogLTkycHg7XG4gIHJpZ2h0OiAtMnB4O1xufVxuXG4uY29pbi1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODMxNTM7XG4gIG9wYWNpdHk6IDAuODtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5wcmljZS1sYWJlbCB7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQzNTc3MjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0MzU3NzI7XG59XG4ucHJpY2UtbGFiZWwubGlnaHQge1xuICBjb2xvcjogIzAyMDIwMjtcbn1cbi5wcmljZS1sYWJlbC5saWdodC5zZWxlY3RlZC1maWx0ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjYyKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjYyKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjYyKTtcbn1cbi5wcmljZS1sYWJlbC5kYXJrIHtcbiAgY29sb3I6ICNmMmYyZjI7XG59XG4ucHJpY2UtbGFiZWwuZGFyay5zZWxlY3RlZC1maWx0ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYyKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYyKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYyKTtcbn1cblxuLmluZm8tZG90IHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cbi5pbmZvLWRvdC5wYXJ0aWFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MxRUNGRDtcbn1cbi5pbmZvLWRvdC5zaW5nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGNDkzO1xufVxuXG4ubXVsdGktY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tb2JpbGUtaW5mbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kZXNrLWluZm8ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5kZXNrLWluZm8udG9wIHtcbiAgaGVpZ2h0OiA3NHB4O1xufVxuXG50YWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZSAuc2luZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZERjQ5MztcbiAgY29sb3I6IGJsYWNrO1xufVxudGFibGUgLnBhcnRpYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzFFQ0ZEO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5kb3Qge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XG59XG4uZG90LnJ1biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLmRvdC5zdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG50ZCwgdGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA4cHg7XG59XG50ZCAubGFiZWwtY3VzdG9tLCB0aCAubGFiZWwtY3VzdG9tIHtcbiAgd2lkdGg6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIG1hcmdpbi10b3A6IC0yNXB4O1xuICBoZWlnaHQ6IDEwcHg7XG59XG50ZCAuZmlsdGVyLWRhc2gsIHRoIC5maWx0ZXItZGFzaCB7XG4gIG1heC13aWR0aDogODBweDtcbn1cbnRkIC5maWx0ZXItZGFzaC5taW4sIHRoIC5maWx0ZXItZGFzaC5taW4ge1xuICBtYXgtd2lkdGg6IDQ4cHg7XG59XG50ZCAuZmlsdGVyLWRhc2gudG90LCB0aCAuZmlsdGVyLWRhc2gudG90IHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cbnRkIC5yYWRpby1kYXNoLCB0aCAucmFkaW8tZGFzaCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxudGQgLnJhZGlvLWRhc2guYnV5LCB0aCAucmFkaW8tZGFzaC5idXkge1xuICBjb2xvcjogZ3JlZW47XG59XG50ZCAucmFkaW8tZGFzaC5zZWxsLCB0aCAucmFkaW8tZGFzaC5zZWxsIHtcbiAgY29sb3I6IHJlZDtcbn1cbnRkIC5zdGF0dXMtaWNvbiwgdGggLnN0YXR1cy1pY29uIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbnRkIC5zdGF0dXMtaWNvbi5wbGF5LCB0aCAuc3RhdHVzLWljb24ucGxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxudGQgLnN0YXR1cy1pY29uLnBhdXNlLCB0aCAuc3RhdHVzLWljb24ucGF1c2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBvcGFjaXR5OiAwO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSArIHBhdGgge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogLTI0cHg7XG59XG5cbmlucHV0ICsgc3ZnIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFtjbGFzcz1hbGxdOmhvdmVyICsgc3ZnLFxuaW5wdXRbY2xhc3M9YWxsXTpjaGVja2VkICsgc3ZnLFxuaW5wdXRbY2xhc3M9YWxsXTpmb2N1cyArIHN2ZyB7XG4gIGZpbGw6ICMwMDZkZDk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oaWRkZW4tY29sdW1uIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmlsdGVyLWRhc2gge1xuICAgIG1heC13aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAucHJpY2UtbGFiZWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5kZXNrLWluZm8ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLWluZm8ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5tb2JpbGUtaW5mbyAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gIH1cbiAgLm1vYmlsZS1pbmZvIC5jYXJvdXNlbC1pdGVtLnN0YXQge1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLm1vYmlsZS1pbmZvIC5jYXJvdXNlbC1pdGVtIGxhYmVsIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5tb2JpbGUtaW5mbyAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ubGlnaHQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaWNvbnMvYXJyb3ctY2lyY2xlLXJpZ2h0LXNvbGlkLnN2Z1wiKTtcbiAgfVxuICAubW9iaWxlLWluZm8gLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLnRvcCB7XG4gICAgdG9wOiAyNXB4O1xuICB9XG4gIC5tb2JpbGUtaW5mbyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24ubGlnaHQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaWNvbnMvYXJyb3ctY2lyY2xlLWxlZnQtc29saWQuc3ZnXCIpO1xuICB9XG4gIC5tb2JpbGUtaW5mbyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24udG9wIHtcbiAgICB0b3A6IDI1cHg7XG4gIH1cblxuICB0YWJsZSAjZmlsdGVyLXBhaXIge1xuICAgIG1heC13aWR0aDogMTU2cHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dashboard-component',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss'],
            }]
    }], function () { return [{ type: _core_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"] }, { type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["ViewportScroller"] }, { type: _core_services_sharing_service__WEBPACK_IMPORTED_MODULE_5__["SharingService"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] }]; }, { detailsModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['detailsModal']
        }], stopModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stopModal']
        }], cancelModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cancelModal']
        }], transactionsModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['transactionsModal']
        }], multipleAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['multipleAction']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_action_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/action.service */ "./src/app/core/services/action.service.ts");
/* harmony import */ var _core_services_sharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/sharing.service */ "./src/app/core/services/sharing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/modal/modal.component */ "./src/app/shared/modal/modal.component.ts");









const _c0 = ["walletModal"];
const _c1 = ["chartModal"];
const _c2 = function () { return ["indicators"]; };
function HomeComponent_li_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Proiezioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["vault"]; };
function HomeComponent_li_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Vault");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
function HomeComponent_li_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Proiezioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function HomeComponent_li_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vault");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
function HomeComponent_li_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", b_r7.pair, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", b_r7.available, " ");
} }
const _c4 = function (a0, a1) { return { "light": a0, "dark": a1 }; };
const _c5 = function () { return ["dashboard"]; };
const _c6 = function () { return ["strategies"]; };
const _c7 = function () { return ["settings"]; };
const _c8 = function (a0) { return { "padding-left": a0 }; };
class HomeComponent {
    // public datePause: any;
    constructor(authService, actionService, sharingService, router) {
        this.authService = authService;
        this.actionService = actionService;
        this.sharingService = sharingService;
        this.router = router;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isOpen = true;
        this.isLightMode = true;
        this.getBalance();
        this.updatedAt = new Date();
        this.user = this.authService.user;
        if (localStorage.getItem('cssmode')) {
            this.isLightMode = localStorage.getItem('cssmode') === 'light';
        }
        // document.addEventListener("visibilitychange", () => {
        //   if (document.visibilityState === 'visible') {
        //    console.log('entro');
        //     if (Date.now() - this.datePause > 10000) {
        //       alert('fuoru');
        //     }
        //   } else {
        //     this.datePause = Date.now();
        //     console.log('prendo tempo')
        //   }
        // });
    }
    ngOnInit() {
        this.updateBalance = setInterval(() => {
            this.getBalance();
            this.updatedAt = new Date();
        }, 31000);
    }
    ngAfterViewInit() {
        new TradingView.widget({
            autosize: true,
            symbol: 'BINANCE:BTCUSDT',
            interval: 'D',
            timezone: 'Etc/UTC',
            theme: 'dark',
            style: '1',
            locale: 'it',
            toolbar_bg: '#f1f3f6',
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: 'map'
        });
    }
    ngOnDestroy() {
        clearInterval(this.updateBalance);
    }
    setModeCss() {
        this.isLightMode = !this.isLightMode;
        this.sharingService.notifyOther({ value: this.isLightMode });
        if (this.isLightMode) {
            localStorage.setItem('cssmode', 'light');
        }
        else {
            localStorage.setItem('cssmode', 'dark');
        }
    }
    openWallet() {
        this.getAllBalances();
        this.walletModal.show('modal-sm');
    }
    openChart() {
        this.chartModal.show('modal-xl');
    }
    getAllBalances() {
        this.actionService.getAllBalances().subscribe((resp) => {
            this.balances = resp;
        });
    }
    closeWallet() {
        this.walletModal.dismiss();
    }
    closeChart() {
        this.chartModal.dismiss();
    }
    getBalance() {
        this.actionService.getBtcBalance().subscribe();
    }
    parseDate(date) {
        const data = new Date(date);
        // tslint:disable-next-line:max-line-length
        return (data.getHours() < 10 ? '0' + data.getHours() : data.getHours()) + ':' + (data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()) + ':' + (data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds()) + ' | ' + data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();
    }
    balanceWoFees(bal, tax) {
        return (bal - tax).toFixed(8);
    }
    calculateFees(value) {
        const tax = value - ((value / 100) * 0.1);
        return (value - tax).toFixed(8);
    }
    openMenu() {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(() => {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#sidebar').toggleClass('active');
            this.isOpen = !this.isOpen;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_action_service__WEBPACK_IMPORTED_MODULE_3__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_sharing_service__WEBPACK_IMPORTED_MODULE_4__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["travel-component"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.walletModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chartModal = _t.first);
    } }, outputs: { valueChange: "valueChange" }, decls: 105, vars: 46, consts: [[1, "site-wrapper"], [1, "navbar-crypto", 3, "ngClass"], [1, "navbar", "navbar-expand-md"], ["href", "#", 1, "navbar-brand"], [1, "text-capitalize"], [1, "switch"], ["type", "checkbox", 3, "checked", "change"], [1, "slider", "round"], [1, "absolute-no"], ["src", "assets/icons/sun-solid.svg", "width", "28"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["alt", "", "width", "24", "src", "assets/icons/bars-solid.svg"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse", "mobile-menu", 3, "ngClass"], [1, "pr-3", "balance", "ml-1"], [2, "font-size", "17px"], [1, "navbar-recap", 3, "click"], [1, "wallet"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Grafico", "alt", "", "width", "18", "src", "../../../assets/icons/chart-line-solid.svg", 1, "pointer"], [1, "navbar-recap"], ["alt", "", "src", "../../../assets/icons/wallet-solid.svg", "width", "18", 1, "pointer", 3, "click"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Ultimo aggiornamento", "alt", "", "width", "32", "src", "../../../assets/icons/clock-solid.svg"], ["src", "../../../assets/icons/bitcoin-brand-custom.svg", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Bilancio BTC", "alt", "", "width", "32"], ["id", "no-tax"], [1, "d-sm-block", "d-md-none"], [1, "nav", "flex-column"], [1, "nav-item"], ["data-target", ".navbar-collapse.show", "data-toggle", "collapse", 1, "nav-link", "mobile", 3, "routerLink"], ["width", "22", "src", "assets/icons/tachometer-alt-solid.svg"], ["width", "22", "src", "assets/icons/tasks-solid.svg"], ["class", "nav-item", 4, "ngIf"], ["width", "22", "src", "assets/icons/folder-open-solid.svg"], [1, "btn", "btn-lg", "d-sm-block", "d-md-none", 3, "click"], ["src", "../../../assets/icons/sign-out-alt-solid.svg", "width", "24", "alt", "logout"], ["role", "main", 1, "main-content", "container-fluid", 3, "ngClass"], ["id", "sidebar", 1, "side-menu"], [1, "profile-img", "pointer", 3, "click"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Apri/Chiudi Menu", "src", "assets/bitcoin-brands.svg", 3, "width"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Riepilogo", 1, "nav-link", "text-white", 3, "routerLink"], ["alt", "riepilogo", "width", "22", "src", "assets/icons/tachometer-alt-solid.svg"], [1, "ml-1"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Strategie", 1, "nav-link", "text-white", 3, "routerLink"], ["alt", "strategie", "width", "22", "src", "assets/icons/tasks-solid.svg"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Opzioni", 1, "nav-link", "text-white", 3, "routerLink"], ["alt", "opzioni", "width", "22", "src", "assets/icons/folder-open-solid.svg"], [1, "nav-item", "logout"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Log Out", 1, "btn", "btn-lg", 3, "click"], [1, "sides", 3, "ngStyle"], [3, "ngClass"], ["walletModal", ""], [1, "app-modal-header"], [1, "app-modal-body"], [4, "ngFor", "ngForOf"], ["data-dismiss", "modal", 1, "btn", "btn-danger", "float-left", "w-100", 3, "click"], ["chartModal", ""], [1, "tradingview-widget-container"], ["id", "map"], ["data-dismiss", "modal", 1, "btn", "btn-danger", "float-left", "w-100", "mt-3", 3, "click"], ["width", "22", "src", "assets/icons/chart-line-solid-b.svg"], ["width", "22", "src", "assets/icons/lock-solid.svg"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Calcoli", 1, "nav-link", "text-white", 3, "routerLink"], ["alt", "opzioni", "width", "22", "src", "assets/icons/chart-line-solid-b.svg"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Vault", 1, "nav-link", "text-white", 3, "routerLink"], ["alt", "vault", "width", "22", "src", "assets/icons/lock-solid.svg"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ciao ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_Template_input_change_8_listener() { return ctx.setModeCss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_18_listener() { return ctx.openChart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_img_click_23_listener() { return ctx.openWallet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "SENZA TASSE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Riepilogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Strategie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, HomeComponent_li_47_Template, 5, 2, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, HomeComponent_li_48_Template, 5, 2, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Opzioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_54_listener() { return ctx.authService.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "main", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_60_listener() { return ctx.openMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Riepilogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Strategie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, HomeComponent_li_73_Template, 5, 2, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, HomeComponent_li_74_Template, 5, 2, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Opzioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_81_listener() { return ctx.authService.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "modal", 48, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Portafoglio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, HomeComponent_li_92_Template, 4, 2, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_93_listener() { return ctx.closeWallet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "CHIUDI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "modal", 48, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Grafico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_103_listener() { return ctx.closeChart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "CHIUDI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c4, ctx.isLightMode, !ctx.isLightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.user, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isLightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](26, _c4, ctx.isLightMode, !ctx.isLightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.parseDate(ctx.updatedAt), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.actionService.balanceBtc, " BTC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.balanceWoFees(ctx.actionService.balanceBtc, ctx.calculateFees(ctx.actionService.balanceBtc)), " BTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.role === "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.role === "admin" && (ctx.authService.user === "Misi862" || ctx.authService.user === "mattia88"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](32, _c4, ctx.isLightMode, !ctx.isLightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.isOpen ? "135" : "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.role === "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.role === "admin" && (ctx.authService.user === "Misi862" || ctx.authService.user === "mattia88"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c8, ctx.isOpen ? "170px" : "65px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](40, _c4, ctx.isLightMode, !ctx.isLightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.balances);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](43, _c4, ctx.isLightMode, !ctx.isLightMode));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".site-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.site-wrapper[_ngcontent-%COMP%]   .alert-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 70px;\n  right: 15px;\n  max-width: 400px;\n  z-index: 1052;\n}\n.site-wrapper[_ngcontent-%COMP%]   .alert-wrapper[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%] {\n  z-index: 1;\n  \n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   .navbar-recap[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   .ques[_ngcontent-%COMP%] {\n  color: darkslateblue;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  top: 5px;\n  width: 70px;\n  height: 34px;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: black;\n  transition: 0.4s;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  z-index: 2;\n  content: \"\";\n  height: 30px;\n  width: 30px;\n  left: 2px;\n  bottom: 2px;\n  background-color: darkslategrey;\n  transition: all 0.4s ease-in-out;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:after {\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  content: url('moon-solid.svg');\n  font-size: 15px;\n  text-align: left !important;\n  padding-left: 0;\n  padding-top: 5px;\n  width: 70px;\n  color: #fff;\n  height: 34px;\n  border-radius: 100px;\n  background-color: #f2f2f2;\n  transform: translateX(-36px);\n  transition: all 0.4s ease-in-out;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:after {\n  transform: translateX(0px);\n  \n  padding-left: 5px;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  background-color: darkslategrey;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(36px);\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%] {\n  border-radius: 100px;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   .slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   .absolute-no[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  color: darkslategrey;\n  text-align: right !important;\n  font-size: 45px;\n  width: calc(100% - 25px);\n  height: 34px;\n  line-height: 95px;\n  cursor: pointer;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   .absolute-no[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  left: 22px;\n  top: -34px;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto.light[_ngcontent-%COMP%] {\n  background-color: #435772;\n  color: white;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto.light[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto.light[_ngcontent-%COMP%]   .mobile-menu[_ngcontent-%COMP%] {\n  background: transparent;\n  justify-content: flex-end;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto.dark[_ngcontent-%COMP%] {\n  background-color: #435772 !important;\n  color: white !important;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto.dark[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto.dark[_ngcontent-%COMP%]   .mobile-menu[_ngcontent-%COMP%] {\n  background: transparent;\n  justify-content: flex-end;\n  color: white;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   .wallet[_ngcontent-%COMP%] {\n  padding: 3px 5px 6px 5px;\n  border: 2px solid white;\n  border-radius: 22px;\n}\n.site-wrapper[_ngcontent-%COMP%]   #color-mode[_ngcontent-%COMP%]:checked    ~ main.main-content[_ngcontent-%COMP%] {\n  background-color: black !important;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content.light[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%] {\n  background-color: #8d99ae;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content.dark[_ngcontent-%COMP%] {\n  background-color: #161A1E;\n  color: #80858B;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content.dark[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%] {\n  background-color: #2A2E34;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%] {\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding-top: 56px;\n  width: 170px;\n  z-index: 0;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  text-align: center;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  border-radius: 60%;\n  background-color: white;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  border: 3px #fff solid;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  letter-spacing: 1px;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  vertical-align: text-top;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n}\n.site-wrapper[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  color: white;\n  min-height: 60px;\n}\n.site-wrapper[_ngcontent-%COMP%]   .start-btn[_ngcontent-%COMP%] {\n  background-color: #435772;\n  opacity: 0.8;\n}\n\n#sidebar.active[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 70px;\n  text-align: center;\n}\n\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: 45px;\n}\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: left;\n}\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  text-align: center;\n  font-size: 0.85em;\n}\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  display: block;\n  font-size: 1.8em;\n  margin-bottom: 5px;\n}\n\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n\n#sidebar.active[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  top: auto;\n  bottom: 10px;\n  right: 50%;\n  transform: translateX(50%);\n}\n#map[_ngcontent-%COMP%] {\n  height: 500px;\n}\n@media screen and (max-width: 414px) {\n  .navbar-recap[_ngcontent-%COMP%] {\n    display: list-item;\n    list-style: none;\n    text-align: left;\n    margin-bottom: 5px;\n  }\n  .navbar-recap[_ngcontent-%COMP%]:first-child {\n    margin-bottom: 10px;\n  }\n\n  #no-tax[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    display: block;\n  }\n}\n@media (max-width: 768px) {\n  \n  .site-wrapper[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .site-wrapper[_ngcontent-%COMP%]   .panel-side[_ngcontent-%COMP%] {\n    margin-left: 0%;\n  }\n  .site-wrapper[_ngcontent-%COMP%]   .sides[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n  }\n  .site-wrapper[_ngcontent-%COMP%]   .navbar-crypto.dark[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: white;\n  }\n\n  .mobile-menu[_ngcontent-%COMP%] {\n    margin-left: -16px;\n    margin-bottom: -8px;\n    margin-right: -16px;\n    color: white !important;\n    opacity: 0.8;\n  }\n  .mobile-menu.light[_ngcontent-%COMP%] {\n    background: #8d99ae !important;\n  }\n  .mobile-menu.dark[_ngcontent-%COMP%] {\n    background: #2A2E34 !important;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .balance[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 15px;\n  }\n\n  #sidebar.active[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  \n  #sidebar[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  \n  #sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n    font-size: 0.85em;\n  }\n\n  #sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 0;\n    display: block;\n    font-size: 1.8em;\n    margin-bottom: 5px;\n  }\n\n  \n  #sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px !important;\n  }\n\n  \n  .dropdown-toggle[_ngcontent-%COMP%]::after {\n    top: auto;\n    bottom: 10px;\n    right: 50%;\n    transform: translateX(50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFhRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDWEY7QURIRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0tKO0FESkk7RUFDRSxrQkFBQTtBQ01OO0FERUU7RUFDRSxVQUFBO0VBZ0dBLG9CQUFBO0FDL0ZKO0FEQ0k7RUFDRSxpQkFBQTtBQ0NOO0FEV0k7RUFDRSxvQkFBQTtBQ1ROO0FEV0k7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVE47QURZSTtFQUFlLGFBQUE7QUNUbkI7QURXSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBRUEsZ0JBQUE7QUNUTjtBRFlJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUtBLGdDQUFBO0FDZE47QURnQkk7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBR0EsNEJBQUE7RUFDQSxnQ0FBQTtBQ2ZOO0FEa0JJO0VBR0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDaEJOO0FEbUJJO0VBQ0UsK0JBQUE7QUNqQk47QURvQkk7RUFHRSwyQkFBQTtBQ2xCTjtBRHVCSTtFQUNFLG9CQUFBO0FDckJOO0FEeUJJO0VBQ0Usa0JBQUE7QUN2Qk47QUQwQkk7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ3hCTjtBRHlCTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUN2QlI7QUQwQkk7RUFDRSx5QkFBQTtFQUVBLFlBQUE7QUN6Qk47QUQwQk07RUFDRSxZQUFBO0FDeEJSO0FEMEJNO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtBQ3hCUjtBRDRCSTtFQUVFLG9DQUFBO0VBQ0EsdUJBQUE7QUMzQk47QUQ0Qk07RUFDRSxZQUFBO0FDMUJSO0FENEJNO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUMxQlI7QUQ2Qkk7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUMzQk47QURvQ0U7RUFDRSxrQ0FBQTtBQ2xDSjtBRHFDRTtFQUNFLE9BQUE7RUFDQSxjQUFBO0FDbkNKO0FEdUNHO0VBQ0UseUJBQUE7QUNyQ0w7QUR5Q0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUN2Q047QUR3Q007RUFDRSx5QkFBQTtBQ3RDUjtBRDRDSTtFQUVFLFlBQUE7RUFHQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDN0NOO0FEOENNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQzVDUjtBRDhDUTtFQUVFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQzdDVjtBRDhDVTtFQUNFLHNCQUFBO0FDNUNaO0FEZ0RNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQzlDUjtBRGdEVTtFQU1FLFdBQUE7RUFFQSx3QkFBQTtBQ3BEWjtBRHVEUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDckRWO0FEK0RFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDN0RKO0FEZ0VFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDOURKO0FEbUVBLDRFQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDaEVGO0FEbUVBLHdIQUFBO0FBRUE7RUFDRSxnQkFBQTtBQ2pFRjtBRG1FQTtFQUNFLGFBQUE7QUNoRUY7QURtRUE7RUFDRSxnQkFBQTtBQ2hFRjtBRG1FQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2hFRjtBRG1FQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2hFRjtBRG1FQSwrQkFBQTtBQUNBO0VBQ0Usd0JBQUE7QUNoRUY7QURtRUE7O29DQUFBO0FBR0E7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFHQSwwQkFBQTtBQ2hFRjtBRGtFQTtFQUNFLGFBQUE7QUMvREY7QURrRUE7RUFDRTtJQUtFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VDbkVGO0VENkRFO0lBQ0UsbUJBQUE7RUMzREo7O0VEa0VBO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0VDL0RGO0FBQ0Y7QURrRUE7RUFDRTs7R0FBQTtFQUlFO0lBQ0UsYUFBQTtFQ2pFSjtFRG1FRTtJQUNFLGVBQUE7RUNqRUo7RURtRUU7SUFDRSw0QkFBQTtFQ2pFSjtFRHNFTTtJQUNFLFlBQUE7RUNwRVI7O0VEMkVBO0lBUUksa0JBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0VDL0VKO0VEb0VFO0lBQ0UsOEJBQUE7RUNsRUo7RURxRUU7SUFDQyw4QkFBQTtFQ25FSDtFRDBFSTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7RUN4RU47O0VENkVBO0lBQ0UsYUFBQTtFQzFFRjs7RUQ4RUEsbURBQUE7RUFDQTtJQUNFLGNBQUE7RUMzRUY7O0VEaUZBLDRDQUFBO0VBQ0E7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0VDOUVGOztFRGlGQTtJQUNFLGVBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQzlFRjs7RURpRkEscUNBQUE7RUFDQTtJQUNFLHdCQUFBO0VDOUVGOztFRGlGQTs7cUNBQUE7RUFHQTtJQUNFLFNBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUdBLDBCQUFBO0VDOUVGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlLXdyYXBwZXJ7XG4gIC5hbGVydC13cmFwcGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDcwcHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICB6LWluZGV4OjEwNTI7XG4gICAgLmFsZXJ0e1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgfVxuXG4gIC8vZmlsdGVyOiBpbnZlcnQoMSkgaHVlLXJvdGF0ZSgxODBkZWcpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5uYXZiYXItY3J5cHRve1xuICAgIHotaW5kZXg6MTtcblxuICAgIC5uYXZiYXItcmVjYXB7XG4gICAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgIH1cblxuXG4gICAgLm5hdmJhci1jb2xsYXBzZXtcbiAgICAgICYuc2hvd3tcblxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy9UT0dHTEVcbiAgICAucXVlcyB7XG4gICAgICBjb2xvcjogZGFya3NsYXRlYmx1ZTtcbiAgICB9XG4gICAgLnN3aXRjaCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB0b3A6IDVweDtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgIH1cblxuICAgIC5zd2l0Y2ggaW5wdXQge2Rpc3BsYXk6bm9uZTt9XG5cbiAgICAuc2xpZGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgIH1cblxuICAgIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBsZWZ0OiAycHg7XG4gICAgICBib3R0b206IDJweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG4gICAgICAvL2JvcmRlcjogd2hpdGUgMXB4IHNvbGlkO1xuICAgICAgLy8td2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjIpO1xuICAgICAgLy9ib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyKTtcbiAgICAgIC8vLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgLnNsaWRlcjphZnRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGNvbnRlbnQ6IHVybChcInNyYy9hc3NldHMvaWNvbnMvbW9vbi1zb2xpZC5zdmdcIik7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAvL2xpbmUtaGVpZ2h0OiA5NXB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzZweCk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNnB4KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzZweCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjphZnRlciB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICAvKndpZHRoOiAyMzVweDsqL1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgfVxuXG4gICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG4gICAgfVxuXG4gICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM2cHgpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNnB4KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNnB4KTtcblxuICAgIH1cblxuICAgIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xuICAgIC5zbGlkZXIucm91bmQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAvL2NvbnRlbnQ6IHVybChcInNyYy9hc3NldHMvaWNvbnMvc3VuLXNvbGlkLnN2Z1wiKTtcbiAgICB9XG5cbiAgICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgLmFic29sdXRlLW5vIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBjb2xvcjogZGFya3NsYXRlZ3JleTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICBsaW5lLWhlaWdodDogOTVweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGltZ3tcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAyMnB4O1xuICAgICAgICB0b3A6IC0zNHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAmLmxpZ2h0e1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNTc3MjtcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI0Y0OTQxOTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGF7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC5tb2JpbGUtbWVudXtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmRcblxuICAgICAgfVxuICAgIH1cbiAgICAmLmRhcmt7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzU3NzIgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgYXtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgLm1vYmlsZS1tZW51e1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgICAud2FsbGV0e1xuICAgICAgcGFkZGluZzogM3B4IDVweCA2cHggNXB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIH1cblxuXG5cblxuXG4gIH1cblxuICAjY29sb3ItbW9kZTpjaGVja2VkIH4gbWFpbi5tYWluLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIG1haW4ubWFpbi1jb250ZW50e1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgJi5saWdodHtcblxuICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgLnNpZGUtbWVudXtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhkOTlhZTtcbiAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMTgzMTUzO1xuICAgfVxuICAgIH1cbiAgICAmLmRhcmt7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxQTFFO1xuICAgICAgY29sb3I6ICM4MDg1OEIgO1xuICAgICAgLnNpZGUtbWVudXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkUzNDtcbiAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgLnNpZGUtbWVudXtcbiAgICAgIC8vbWFyZ2luLXRvcDoyMHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAvL29wYWNpdHk6IDAuODtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLXRvcDogNTZweDtcbiAgICAgIHdpZHRoOjE3MHB4O1xuICAgICAgei1pbmRleDowO1xuICAgICAgLnByb2ZpbGUtaW1ne1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgaW1ne1xuICAgICAgICAgIC8vbWF4LXdpZHRoOiAxMzVweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmIDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGJvcmRlcjogM3B4ICNmZmYgc29saWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubmF2e1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAubmF2LWxpbmt7XG4gICAgICAgICAgc3BhbntcbiAgICAgICAgICAgIC8vJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgIC8vICBwYWRkaW5nOjBweCAxcHggOHB4IDFweDtcbiAgICAgICAgICAgIC8vICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIC8vICBib3JkZXItcmFkaXVzOjEycHg7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICAvL3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5sb2dvdXR7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cblxuXG5cbiAgICB9XG4gIH1cblxuICBmb290ZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIH1cblxuICAuc3RhcnQtYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzU3NzIgO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxufVxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKipUT0dHTEUgU0lERUJPQVJEKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4jc2lkZWJhci5hY3RpdmUge1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIG1heC13aWR0aDogNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBUb2dnbGluZyB0aGUgc2lkZWJhciBoZWFkZXIgY29udGVudCwgaGlkZSB0aGUgYmlnIGhlYWRpbmcgW2gzXSBhbmQgc2hvd2luZyB0aGUgc21hbGwgaGVhZGluZyBbc3Ryb25nXSBhbmQgdmljZSB2ZXJzYSovXG5cbiNzaWRlYmFyLmFjdGl2ZSB1bHtcbiAgbWFyZ2luLXRvcDogNDVweDtcbn1cbiNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jc2lkZWJhciB1bCBsaSBhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIGkge1xuICBtYXJnaW4tcmlnaHQ6ICAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4vKiBTYW1lIGRyb3Bkb3duIGxpbmtzIHBhZGRpbmcqL1xuI3NpZGViYXIuYWN0aXZlIHVsIHVsIGEge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIENoYW5naW5nIHRoZSBhcnJvdyBwb3NpdGlvbiB0byBib3R0b20gY2VudGVyIHBvc2l0aW9uLFxuICAgdHJhbnNsYXRlWCg1MCUpIHdvcmtzIHdpdGggcmlnaHQ6IDUwJVxuICAgdG8gYWNjdXJhdGVseSAgY2VudGVyIHRoZSBhcnJvdyAqL1xuI3NpZGViYXIuYWN0aXZlIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG59XG4jbWFwe1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCl7XG4gIC5uYXZiYXItcmVjYXB7XG5cbiAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgIH1cbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAjbm8tdGF4e1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAvKiA4MHB4IGFuZCBpdHMgY29udGVudCBhbGlnbmVkIHRvIGNlbnRyZS4gUHVzaGluZyBpdCBvZmYgdGhlIHNjcmVlbiB3aXRoIHRoZVxuICAgICBuZWdhdGl2ZSBsZWZ0IG1hcmdpblxuICAqL1xuICAuc2l0ZS13cmFwcGVye1xuICAgIC5zaWRlLW1lbnV7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAucGFuZWwtc2lkZSB7XG4gICAgICBtYXJnaW4tbGVmdDogMCU7XG4gICAgfVxuICAgIC5zaWRlc3tcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICB9XG4gICAgLm5hdmJhci1jcnlwdG97XG4gICAgICAmLmRhcmt7XG4gICAgICAgIC5uYXYtbGlua3tcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5tb2JpbGUtbWVudXtcbiAgICAmLmxpZ2h0e1xuICAgICAgYmFja2dyb3VuZDogIzhkOTlhZSAhaW1wb3J0YW50O1xuXG4gICAgfVxuICAgICYuZGFya3tcbiAgICAgYmFja2dyb3VuZDogIzJBMkUzNCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAuYmFsYW5jZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgIH1cbiAgICB9XG5cblxuICAjc2lkZWJhci5hY3RpdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuXG4gIC8qIFJlYXBwZWFyaW5nIHRoZSBzaWRlYmFyIG9uIHRvZ2dsZSBidXR0b24gY2xpY2sgKi9cbiAgI3NpZGViYXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cblxuXG5cbiAgLyogRG93bnNpemUgdGhlIG5hdmlnYXRpb24gbGlua3MgZm9udCBzaXplICovXG4gICNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAwLjg1ZW07XG4gIH1cblxuICAjc2lkZWJhci5hY3RpdmUgdWwgbGkgYSBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6ICAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgLyogQWRqdXN0IHRoZSBkcm9wZG93biBsaW5rcyBwYWRkaW5nKi9cbiAgI3NpZGViYXIuYWN0aXZlIHVsIHVsIGEge1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC8qIENoYW5naW5nIHRoZSBhcnJvdyBwb3NpdGlvbiB0byBib3R0b20gY2VudGVyIHBvc2l0aW9uLFxuICAgIHRyYW5zbGF0ZVgoNTAlKSB3b3JrcyB3aXRoIHJpZ2h0OiA1MCVcbiAgICB0byBhY2N1cmF0ZWx5ICBjZW50ZXIgdGhlIGFycm93ICovXG4gIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gIH1cbn1cbiIsIi5zaXRlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2l0ZS13cmFwcGVyIC5hbGVydC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDcwcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB6LWluZGV4OiAxMDUyO1xufVxuLnNpdGUtd3JhcHBlciAuYWxlcnQtd3JhcHBlciAuYWxlcnQge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4uc2l0ZS13cmFwcGVyIC5uYXZiYXItY3J5cHRvIHtcbiAgei1pbmRleDogMTtcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXG59XG4uc2l0ZS13cmFwcGVyIC5uYXZiYXItY3J5cHRvIC5uYXZiYXItcmVjYXAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5zaXRlLXdyYXBwZXIgLm5hdmJhci1jcnlwdG8gLnF1ZXMge1xuICBjb2xvcjogZGFya3NsYXRlYmx1ZTtcbn1cbi5zaXRlLXdyYXBwZXIgLm5hdmJhci1jcnlwdG8gLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0b3A6IDVweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogMzRweDtcbn1cbi5zaXRlLXdyYXBwZXIgLm5hdmJhci1jcnlwdG8gLnN3aXRjaCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2l0ZS13cmFwcGVyIC5uYXZiYXItY3J5cHRvIC5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLnNpdGUtd3JhcHBlciAubmF2YmFyLWNyeXB0byAuc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgbGVmdDogMnB4O1xuICBib3R0b206IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG4uc2l0ZS13cmFwcGVyIC5uYXZiYXItY3J5cHRvIC5zbGlkZXI6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGNvbnRlbnQ6IHVybChcInNyYy9hc3NldHMvaWNvbnMvbW9vbi1zb2xpZC5zdmdcIik7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHdpZHRoOiA3MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNnB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG4uc2l0ZS13cmFwcGVyIC5uYXZiYXItY3J5cHRvIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgLyp3aWR0aDogMjM1cHg7Ki9cbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uc2l0ZS13cmFwcGVyIC5uYXZiYXItY3J5cHRvIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG59XG4uc2l0ZS13cmFwcGVyIC5uYXZiYXItY3J5cHRvIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzZweCk7XG59XG4uc2l0ZS13cmFwcGVyIC5uYXZiYXItY3J5cHRvIC5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cbi5zaXRlLXdyYXBwZXIgLm5hdmJhci1jcnlwdG8gLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc2l0ZS13cmFwcGVyIC5uYXZiYXItY3J5cHRvIC5hYnNvbHV0ZS1ubyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xuICBoZWlnaHQ6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiA5NXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2l0ZS13cmFwcGVyIC5uYXZiYXItY3J5cHRvIC5hYnNvbHV0ZS1ubyBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDIycHg7XG4gIHRvcDogLTM0cHg7XG59XG4uc2l0ZS13cmFwcGVyIC5uYXZiYXItY3J5cHRvLmxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNTc3MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNpdGUtd3JhcHBlciAubmF2YmFyLWNyeXB0by5saWdodCBhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNpdGUtd3JhcHBlciAubmF2YmFyLWNyeXB0by5saWdodCAubW9iaWxlLW1lbnUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5zaXRlLXdyYXBwZXIgLm5hdmJhci1jcnlwdG8uZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzU3NzIgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uc2l0ZS13cmFwcGVyIC5uYXZiYXItY3J5cHRvLmRhcmsgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zaXRlLXdyYXBwZXIgLm5hdmJhci1jcnlwdG8uZGFyayAubW9iaWxlLW1lbnUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNpdGUtd3JhcHBlciAubmF2YmFyLWNyeXB0byAud2FsbGV0IHtcbiAgcGFkZGluZzogM3B4IDVweCA2cHggNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbn1cbi5zaXRlLXdyYXBwZXIgI2NvbG9yLW1vZGU6Y2hlY2tlZCB+IG1haW4ubWFpbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbi5zaXRlLXdyYXBwZXIgbWFpbi5tYWluLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5zaXRlLXdyYXBwZXIgbWFpbi5tYWluLWNvbnRlbnQubGlnaHQgLnNpZGUtbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZDk5YWU7XG59XG4uc2l0ZS13cmFwcGVyIG1haW4ubWFpbi1jb250ZW50LmRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxQTFFO1xuICBjb2xvcjogIzgwODU4Qjtcbn1cbi5zaXRlLXdyYXBwZXIgbWFpbi5tYWluLWNvbnRlbnQuZGFyayAuc2lkZS1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkUzNDtcbn1cbi5zaXRlLXdyYXBwZXIgbWFpbi5tYWluLWNvbnRlbnQgLnNpZGUtbWVudSB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiA1NnB4O1xuICB3aWR0aDogMTcwcHg7XG4gIHotaW5kZXg6IDA7XG59XG4uc2l0ZS13cmFwcGVyIG1haW4ubWFpbi1jb250ZW50IC5zaWRlLW1lbnUgLnByb2ZpbGUtaW1nIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNpdGUtd3JhcHBlciBtYWluLm1haW4tY29udGVudCAuc2lkZS1tZW51IC5wcm9maWxlLWltZyBpbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnNpdGUtd3JhcHBlciBtYWluLm1haW4tY29udGVudCAuc2lkZS1tZW51IC5wcm9maWxlLWltZyBpbWc6aG92ZXIge1xuICBib3JkZXI6IDNweCAjZmZmIHNvbGlkO1xufVxuLnNpdGUtd3JhcHBlciBtYWluLm1haW4tY29udGVudCAuc2lkZS1tZW51IC5uYXYge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNpdGUtd3JhcHBlciBtYWluLm1haW4tY29udGVudCAuc2lkZS1tZW51IC5uYXYgLm5hdi1saW5rIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xufVxuLnNpdGUtd3JhcHBlciBtYWluLm1haW4tY29udGVudCAuc2lkZS1tZW51IC5uYXYgLmxvZ291dCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG59XG4uc2l0ZS13cmFwcGVyIGZvb3RlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cbi5zaXRlLXdyYXBwZXIgLnN0YXJ0LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzU3NzI7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKlRPR0dMRSBTSURFQk9BUkQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiNzaWRlYmFyLmFjdGl2ZSB7XG4gIG1pbi13aWR0aDogNzBweDtcbiAgbWF4LXdpZHRoOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIFRvZ2dsaW5nIHRoZSBzaWRlYmFyIGhlYWRlciBjb250ZW50LCBoaWRlIHRoZSBiaWcgaGVhZGluZyBbaDNdIGFuZCBzaG93aW5nIHRoZSBzbWFsbCBoZWFkaW5nIFtzdHJvbmddIGFuZCB2aWNlIHZlcnNhKi9cbiNzaWRlYmFyLmFjdGl2ZSB1bCB7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jc2lkZWJhciB1bCBsaSBhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIGkge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuOGVtO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi8qIFNhbWUgZHJvcGRvd24gbGlua3MgcGFkZGluZyovXG4jc2lkZWJhci5hY3RpdmUgdWwgdWwgYSB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLyogQ2hhbmdpbmcgdGhlIGFycm93IHBvc2l0aW9uIHRvIGJvdHRvbSBjZW50ZXIgcG9zaXRpb24sXG4gICB0cmFuc2xhdGVYKDUwJSkgd29ya3Mgd2l0aCByaWdodDogNTAlXG4gICB0byBhY2N1cmF0ZWx5ICBjZW50ZXIgdGhlIGFycm93ICovXG4jc2lkZWJhci5hY3RpdmUgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbn1cblxuI21hcCB7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gIC5uYXZiYXItcmVjYXAge1xuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIC5uYXZiYXItcmVjYXA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAjbm8tdGF4IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC8qIDgwcHggYW5kIGl0cyBjb250ZW50IGFsaWduZWQgdG8gY2VudHJlLiBQdXNoaW5nIGl0IG9mZiB0aGUgc2NyZWVuIHdpdGggdGhlXG4gICAgIG5lZ2F0aXZlIGxlZnQgbWFyZ2luXG4gICovXG4gIC5zaXRlLXdyYXBwZXIgLnNpZGUtbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuc2l0ZS13cmFwcGVyIC5wYW5lbC1zaWRlIHtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cbiAgLnNpdGUtd3JhcHBlciAuc2lkZXMge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNpdGUtd3JhcHBlciAubmF2YmFyLWNyeXB0by5kYXJrIC5uYXYtbGluayB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm1vYmlsZS1tZW51IHtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICAubW9iaWxlLW1lbnUubGlnaHQge1xuICAgIGJhY2tncm91bmQ6ICM4ZDk5YWUgIWltcG9ydGFudDtcbiAgfVxuICAubW9iaWxlLW1lbnUuZGFyayB7XG4gICAgYmFja2dyb3VuZDogIzJBMkUzNCAhaW1wb3J0YW50O1xuICB9XG4gIC5tb2JpbGUtbWVudSAuYmFsYW5jZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG5cbiAgI3NpZGViYXIuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLyogUmVhcHBlYXJpbmcgdGhlIHNpZGViYXIgb24gdG9nZ2xlIGJ1dHRvbiBjbGljayAqL1xuICAjc2lkZWJhciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAvKiBEb3duc2l6ZSB0aGUgbmF2aWdhdGlvbiBsaW5rcyBmb250IHNpemUgKi9cbiAgI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEge1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBmb250LXNpemU6IDAuODVlbTtcbiAgfVxuXG4gICNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIGkge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG4gIC8qIEFkanVzdCB0aGUgZHJvcGRvd24gbGlua3MgcGFkZGluZyovXG4gICNzaWRlYmFyLmFjdGl2ZSB1bCB1bCBhIHtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBDaGFuZ2luZyB0aGUgYXJyb3cgcG9zaXRpb24gdG8gYm90dG9tIGNlbnRlciBwb3NpdGlvbixcbiAgICB0cmFuc2xhdGVYKDUwJSkgd29ya3Mgd2l0aCByaWdodDogNTAlXG4gICAgdG8gYWNjdXJhdGVseSAgY2VudGVyIHRoZSBhcnJvdyAqL1xuICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICByaWdodDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'travel-component',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _core_services_action_service__WEBPACK_IMPORTED_MODULE_3__["ActionService"] }, { type: _core_services_sharing_service__WEBPACK_IMPORTED_MODULE_4__["SharingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], walletModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['walletModal']
        }], chartModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chartModal']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/home/home.guard.ts":
/*!********************************************!*\
  !*** ./src/app/modules/home/home.guard.ts ***!
  \********************************************/
/*! exports provided: HomeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGuard", function() { return HomeGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HomeGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.token) {
            return true;
        }
        else {
            return this.router.createUrlTree(['auth']);
        }
    }
}
HomeGuard.ɵfac = function HomeGuard_Factory(t) { return new (t || HomeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeGuard, factory: HomeGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.routing */ "./src/app/modules/home/home.routing.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/home/dashboard/dashboard.component.ts");
/* harmony import */ var _404_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./404/404.component */ "./src/app/modules/home/404/404.component.ts");
/* harmony import */ var _home_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.guard */ "./src/app/modules/home/home.guard.ts");
/* harmony import */ var _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indicators/indicators.component */ "./src/app/modules/home/indicators/indicators.component.ts");
/* harmony import */ var _strategies_strategies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./strategies/strategies.component */ "./src/app/modules/home/strategies/strategies.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/modules/home/settings/settings.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/modal/modal.component */ "./src/app/shared/modal/modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/alert/alert.component */ "./src/app/shared/alert/alert.component.ts");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "./node_modules/@angular-slider/ngx-slider/__ivy_ngcc__/fesm2015/angular-slider-ngx-slider.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _indicators_indicators_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./indicators/indicators.guard */ "./src/app/modules/home/indicators/indicators.guard.ts");
/* harmony import */ var _vault_vault_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vault/vault.component */ "./src/app/modules/home/vault/vault.component.ts");



















// import {BarChartModule} from "@swimlane/ngx-charts";
// import {Ng5SliderModule} from 'ng5-slider';
// import {BrowserModule} from "@angular/platform-browser";
// import {HttpClientModule} from "@angular/common/http";
class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, providers: [_home_guard__WEBPACK_IMPORTED_MODULE_5__["HomeGuard"], _indicators_indicators_guard__WEBPACK_IMPORTED_MODULE_16__["IndicatorsGuard"]], imports: [[
            _home_routing__WEBPACK_IMPORTED_MODULE_1__["AuthenticationRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_13__["NgxSliderModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__["NgxChartsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDatepickerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_6__["IndicatorsComponent"],
        _strategies_strategies_component__WEBPACK_IMPORTED_MODULE_7__["StrategiesComponent"],
        _vault_vault_component__WEBPACK_IMPORTED_MODULE_17__["VaultComponent"],
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
        _404_404_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
        _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
        _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"]], imports: [_home_routing__WEBPACK_IMPORTED_MODULE_1__["AuthenticationRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_13__["NgxSliderModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__["NgxChartsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDatepickerModule"]], exports: [_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
        _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _home_routing__WEBPACK_IMPORTED_MODULE_1__["AuthenticationRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_13__["NgxSliderModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__["NgxChartsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDatepickerModule"],
                ],
                providers: [_home_guard__WEBPACK_IMPORTED_MODULE_5__["HomeGuard"], _indicators_indicators_guard__WEBPACK_IMPORTED_MODULE_16__["IndicatorsGuard"]],
                declarations: [
                    _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                    _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_6__["IndicatorsComponent"],
                    _strategies_strategies_component__WEBPACK_IMPORTED_MODULE_7__["StrategiesComponent"],
                    _vault_vault_component__WEBPACK_IMPORTED_MODULE_17__["VaultComponent"],
                    _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
                    _404_404_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
                    _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
                    _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                ],
                exports: [
                    _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
                    _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/home/home.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/home/home.routing.ts ***!
  \**********************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/home/dashboard/dashboard.component.ts");
/* harmony import */ var _home_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.guard */ "./src/app/modules/home/home.guard.ts");
/* harmony import */ var _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./indicators/indicators.component */ "./src/app/modules/home/indicators/indicators.component.ts");
/* harmony import */ var _strategies_strategies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strategies/strategies.component */ "./src/app/modules/home/strategies/strategies.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/modules/home/settings/settings.component.ts");
/* harmony import */ var _indicators_indicators_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./indicators/indicators.guard */ "./src/app/modules/home/indicators/indicators.guard.ts");
/* harmony import */ var _vault_vault_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vault/vault.component */ "./src/app/modules/home/vault/vault.component.ts");












const routes = [
    {
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_home_guard__WEBPACK_IMPORTED_MODULE_4__["HomeGuard"]],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            },
            {
                path: 'indicators',
                component: _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_5__["IndicatorsComponent"],
                canActivate: [_indicators_indicators_guard__WEBPACK_IMPORTED_MODULE_8__["IndicatorsGuard"]]
            },
            {
                path: 'vault',
                component: _vault_vault_component__WEBPACK_IMPORTED_MODULE_9__["VaultComponent"],
                canActivate: [_indicators_indicators_guard__WEBPACK_IMPORTED_MODULE_8__["IndicatorsGuard"]]
            },
            {
                path: 'strategies',
                component: _strategies_strategies_component__WEBPACK_IMPORTED_MODULE_6__["StrategiesComponent"]
            },
            {
                path: 'settings',
                component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"]
            }
        ],
    }
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

/***/ "./src/app/modules/home/indicators/indicators.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/indicators/indicators.component.ts ***!
  \*****************************************************************/
/*! exports provided: IndicatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorsComponent", function() { return IndicatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/Utils */ "./src/app/shared/Utils.ts");
/* harmony import */ var _core_services_action_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/action.service */ "./src/app/core/services/action.service.ts");
/* harmony import */ var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/alert/alert.service */ "./src/app/shared/alert/alert.service.ts");
/* harmony import */ var _core_services_sharing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/sharing.service */ "./src/app/core/services/sharing.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/modal/modal.component */ "./src/app/shared/modal/modal.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");













const _c0 = ["addModal"];
const _c1 = ["removeModal"];
function IndicatorsComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r27.name);
} }
function IndicatorsComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Saldo finale:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.finalCap, "$");
} }
function IndicatorsComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Saldo finale Tassato:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.finalCapTaxed, "$");
} }
function IndicatorsComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dal: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.to, "\u00A0\u00A0 ");
} }
function IndicatorsComponent_span_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Differenza:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.calculateDelta(ctx_r6.initialCap, ctx_r6.finalCap), " % ");
} }
function IndicatorsComponent_span_81_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorsComponent_span_81_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.start(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Calcola ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndicatorsComponent_span_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Differenza Tassata:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.calculateDelta(ctx_r8.initialCap, ctx_r8.finalCapTaxed), " % ");
} }
function IndicatorsComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Giri eseguiti: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.totalGiri, " ");
} }
function IndicatorsComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Al: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.from, " ");
} }
function IndicatorsComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-charts-bar-vertical-2d", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](!ctx_r11.color ? "fill: #ffffff" : "fill: #000000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("results", ctx_r11.parsedData)("xAxisLabel", "Strategie")("legendTitle", "Legenda")("yAxisLabel", "Buy/Sell")("legend", true)("showXAxisLabel", true)("showYAxisLabel", true)("xAxis", true)("yAxis", true)("gradient", true);
} }
function IndicatorsComponent_button_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mostra/Nascondi Candele ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndicatorsComponent_div_90_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    const c_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Candela del: " + c_r30.date + "\n" + "High: " + c_r30.high + "\n" + "Low: " + c_r30.low + "\n" + "Open: " + c_r30.opens + "\n" + "Close: " + c_r30.close);
} }
function IndicatorsComponent_div_90_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 91);
} if (rf & 2) {
    const c_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Candela del: " + c_r30.date + "\n" + "High: " + c_r30.high + "\n" + "Low: " + c_r30.low + "\n" + "Open: " + c_r30.opens + "\n" + "Close: " + c_r30.close);
} }
function IndicatorsComponent_div_90_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 92);
} if (rf & 2) {
    const c_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Candela del: " + c_r30.date + "\n" + "High: " + c_r30.high + "\n" + "Low: " + c_r30.low + "\n" + "Open: " + c_r30.opens + "\n" + "Close: " + c_r30.close);
} }
function IndicatorsComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndicatorsComponent_div_90_img_1_Template, 1, 1, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IndicatorsComponent_div_90_img_2_Template, 1, 1, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IndicatorsComponent_div_90_img_3_Template, 1, 1, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r30.close > c_r30.opens);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r30.close < c_r30.opens);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r30.close === c_r30.opens);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r30.date);
} }
function IndicatorsComponent_table_92_tr_20_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((s_r39.total * ctx_r40.priceBtc).toFixed(2));
} }
function IndicatorsComponent_table_92_tr_20_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((s_r39.totalTaxed * ctx_r41.priceBtc).toFixed(2));
} }
function IndicatorsComponent_table_92_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, IndicatorsComponent_table_92_tr_20_span_16_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, IndicatorsComponent_table_92_tr_20_span_18_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r39 = ctx.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r39.buy.toFixed(8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r39.sell.toFixed(8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r39.countB);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r39.countS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.capitalss);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r39.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r39.totalTaxed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r39.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r39.totalTaxed);
} }
const _c2 = function (a0, a1) { return { "light": a0, "dark": a1 }; };
function IndicatorsComponent_table_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Buy Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sell Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "N\u00B0 Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "N\u00B0 Sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Partenza");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Totale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Totale Tassato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Totale $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Totale $ Tassato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, IndicatorsComponent_table_92_tr_20_Template, 19, 9, "tr", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c2, ctx_r14.color, !ctx_r14.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.strategies);
} }
function IndicatorsComponent_div_101_div_3_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorsComponent_div_101_div_3_li_2_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const mm_r48 = ctx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r49.manageDeleteModal(true, mm_r48.pair); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mm_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mm_r48.pair, " ");
} }
function IndicatorsComponent_div_101_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IndicatorsComponent_div_101_div_3_li_2_Template, 3, 1, "li", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", m_r45);
} }
function IndicatorsComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Monete monitorate:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IndicatorsComponent_div_101_div_3_Template, 3, 1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.monitoredPairs);
} }
function IndicatorsComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Scegli le tue monete da monitorare !!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndicatorsComponent_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ops! Non hai pi\u00F9 risultati");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndicatorsComponent_div_110_tr_35_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IndicatorsComponent_div_110_tr_35_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const p_r52 = ctx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.addPairtoParse(p_r52, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r52 = ctx.$implicit;
    const $index_r53 = ctx.index;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "add" + $index_r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r52.pair, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.parseScenario(p_r52.possible_situation));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r52.open.toFixed(8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r52.jumps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r52.number_strategies ? p_r52.number_strategies : 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r52.delta, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r52.delta_taxed, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.formatDate(p_r52.from));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.formatDate(p_r52.to));
} }
function IndicatorsComponent_div_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "N\u00B0 Strategie:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Investimento:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tot Delta Tassato:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ricavo Tassato:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Moneta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Scenario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Apertura");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Salti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Strategie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Delta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Delta T");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, IndicatorsComponent_div_110_tr_35_Template, 21, 10, "tr", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.calculateRecap("str", ctx_r18.topPerformer), " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.calculateRecap("tot", ctx_r18.topPerformer, ctx_r18.calculateRecap("str", ctx_r18.topPerformer)), "$ - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.calculateRecap("delta", ctx_r18.topPerformer), "% - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.calculateRecap("taxed", ctx_r18.topPerformer, ctx_r18.calculateRecap("tot", ctx_r18.topPerformer, ctx_r18.calculateRecap("str", ctx_r18.topPerformer)), ctx_r18.calculateRecap("delta", ctx_r18.topPerformer)), "$ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c2, ctx_r18.color, !ctx_r18.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.topPerformer);
} }
function IndicatorsComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Proiezioni non ancora pronte! Aspetta fino a domenica!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndicatorsComponent_div_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Proiezioni non ancora pronte! Aspetta fino a domenica!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndicatorsComponent_div_123_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndicatorsComponent_div_123_div_2_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r59 = ctx.$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r59.pair, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r58.parseScenario(p_r59.possible_situation));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r59.open.toFixed(8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r59.jumps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r59.number_strategies ? p_r59.number_strategies : 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r59.delta, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r59.delta_taxed, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r58.formatDate(p_r59.from));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r58.formatDate(p_r59.to));
} }
function IndicatorsComponent_div_123_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "N\u00B0 Strategie:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Investimento:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tot Delta Tassato:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ricavo Tassato:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Moneta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Scenario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Apertura");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Salti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Strategie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Delta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Delta T");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, IndicatorsComponent_div_123_div_2_tr_34_Template, 19, 9, "tr", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r57.calculateRecap("str", ctx_r57.bestLast), " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r57.calculateRecap("tot", ctx_r57.bestLast, ctx_r57.calculateRecap("str", ctx_r57.bestLast)), "$ - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r57.calculateRecap("delta", ctx_r57.bestLast), "% - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r57.calculateRecap("taxed", ctx_r57.bestLast, ctx_r57.calculateRecap("tot", ctx_r57.bestLast, ctx_r57.calculateRecap("str", ctx_r57.bestLast)), ctx_r57.calculateRecap("delta", ctx_r57.bestLast)), "$ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c2, ctx_r57.color, !ctx_r57.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r57.bestLast);
} }
function IndicatorsComponent_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndicatorsComponent_div_123_div_1_Template, 3, 0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IndicatorsComponent_div_123_div_2_Template, 35, 9, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.laddaBest);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r21.laddaBest && ctx_r21.bestLast.length);
} }
function IndicatorsComponent_div_125_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r65);
} }
function IndicatorsComponent_div_125_tr_60_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r66.pair);
} }
function IndicatorsComponent_div_125_tr_60_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r69.parseScenario(s_r66.possible_situation));
} }
function IndicatorsComponent_div_125_tr_60_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r66.number_strategies ? s_r66.number_strategies : 10);
} }
function IndicatorsComponent_div_125_tr_60_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r66.open.toFixed(8));
} }
function IndicatorsComponent_div_125_tr_60_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r66.jumps);
} }
function IndicatorsComponent_div_125_tr_60_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r73.formatDate(s_r66.from));
} }
function IndicatorsComponent_div_125_tr_60_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r74.formatDate(s_r66.to));
} }
function IndicatorsComponent_div_125_tr_60_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", s_r66.delta, "%");
} }
function IndicatorsComponent_div_125_tr_60_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", s_r66.delta_taxed, "%");
} }
function IndicatorsComponent_div_125_tr_60_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r66.loops);
} }
function IndicatorsComponent_div_125_tr_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndicatorsComponent_div_125_tr_60_td_1_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IndicatorsComponent_div_125_tr_60_td_2_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IndicatorsComponent_div_125_tr_60_td_3_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IndicatorsComponent_div_125_tr_60_td_4_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IndicatorsComponent_div_125_tr_60_td_5_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IndicatorsComponent_div_125_tr_60_td_6_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IndicatorsComponent_div_125_tr_60_td_7_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, IndicatorsComponent_div_125_tr_60_td_8_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IndicatorsComponent_div_125_tr_60_td_9_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IndicatorsComponent_div_125_tr_60_td_10_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r67 = ctx.index;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r67 < ctx_r63.rowToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r67 < ctx_r63.rowToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r67 < ctx_r63.rowToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r67 < ctx_r63.rowToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r67 < ctx_r63.rowToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r67 < ctx_r63.rowToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r67 < ctx_r63.rowToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r67 < ctx_r63.rowToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r67 < ctx_r63.rowToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r67 < ctx_r63.rowToShow);
} }
function IndicatorsComponent_div_125_tr_61_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorsComponent_div_125_tr_61_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r90.loadRow(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mostra piu risultati");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndicatorsComponent_div_125_tr_61_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorsComponent_div_125_tr_61_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r92.loadRow(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mostra meno risultati");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndicatorsComponent_div_125_tr_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IndicatorsComponent_div_125_tr_61_button_2_Template, 2, 0, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IndicatorsComponent_div_125_tr_61_button_3_Template, 2, 0, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r64.countProjections > ctx_r64.rowToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r64.rowToShow > 12);
} }
function IndicatorsComponent_div_125_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Storico");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Moneta :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndicatorsComponent_div_125_Template_select_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.pairToShown = $event; })("ngModelChange", function IndicatorsComponent_div_125_Template_select_ngModelChange_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.filtersSelected("pair", ctx_r96.pairToShown); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tutti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, IndicatorsComponent_div_125_option_13_Template, 2, 1, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Da");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 113, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndicatorsComponent_div_125_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.fromProjection = $event; })("dateSelect", function IndicatorsComponent_div_125_Template_input_dateSelect_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.filtersSelected("from", ctx_r98.fromProjection); })("keydown.enter", function IndicatorsComponent_div_125_Template_input_keydown_enter_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r61.toggle(); })("click", function IndicatorsComponent_div_125_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r61.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 115, 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndicatorsComponent_div_125_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.toProjection = $event; })("dateSelect", function IndicatorsComponent_div_125_Template_input_dateSelect_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.filtersSelected("to", ctx_r102.toProjection); })("keydown.enter", function IndicatorsComponent_div_125_Template_input_keydown_enter_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r62.toggle(); })("click", function IndicatorsComponent_div_125_Template_input_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r62.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Salti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndicatorsComponent_div_125_Template_select_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.salti = $event; })("ngModelChange", function IndicatorsComponent_div_125_Template_select_ngModelChange_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r106.filtersSelected("jumps", ctx_r106.salti); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Tutti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Moneta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Scenario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Strategie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Apertura");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Salti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Da");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Delta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Delta Tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Giri");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, IndicatorsComponent_div_125_tr_60_Template, 11, 10, "tr", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, IndicatorsComponent_div_125_tr_61_Template, 4, 2, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.pairToShown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.pairToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.fromProjection)("maxDate", ctx_r22.toDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.toProjection)("maxDate", ctx_r22.toDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.salti);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c2, ctx_r22.color, !ctx_r22.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.filteredProjections);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.countProjections > 12);
} }
function IndicatorsComponent_div_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Proiezioni non ancora pronte! Aspetta fino a domenica!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndicatorsComponent_option_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r107 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r107.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r107.name);
} }
class IndicatorsComponent {
    constructor(actionService, fb, cdFref, alertService, sharingService, calendar) {
        this.actionService = actionService;
        this.fb = fb;
        this.cdFref = cdFref;
        this.alertService = alertService;
        this.sharingService = sharingService;
        this.calendar = calendar;
        this.candles = [];
        this.strategies = [];
        this.pairs = [];
        this.activeList = _shared_Utils__WEBPACK_IMPORTED_MODULE_3__["default"].getList();
        this.totalGiri = 0;
        this.parsedData = [];
        this.colorScheme = {
            domain: ['#A93F63', '#5AA454', '#AAAAAA']
        };
        this.monitoredPairs = [];
        this.projections = [];
        this.filteredProjections = [];
        this.pairToShow = [];
        this.filters = [];
        this.topPerformer = [];
        this.rowToShow = 12;
        this.bestLast = [];
        this.laddaBest = false;
        this.perCentStrategy = 20;
        this.selectedProjections = [];
        this.color = localStorage.getItem('cssmode') === 'light';
        this.indicatorForm = this.fb.group({
            indicator_cap: [1000, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            indicator_n_strat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            indicator_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            indicator_satoshi: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            indicator_pair: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            indicator_timeframe: ['1h', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            indicator_from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            indicator_to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.actionService.getBtcPrice().subscribe();
        this.sharingService.notifyObservable$.subscribe((res) => {
            if (res.hasOwnProperty('value')) {
                this.color = res.value;
            }
        });
        this.getPairs();
        this.getProjections();
        this.setDates();
        this.manageTopPerformer();
        this.pairToShown = 'all';
        this.salti = 'all';
        this.fromProjection = this.minDates;
        this.toProjection = this.toDay;
        this.filters = [
            { name: 'pair', val: this.pairToShown },
            { name: 'jumps', val: this.salti },
            { name: 'from', val: this.minDates },
            { name: 'to', val: this.toDay }
        ];
    }
    ngAfterViewInit() {
        this.actionService.getBtcPrice().subscribe();
        this.loadPairs();
        this.cdFref.detectChanges();
    }
    // PROIEIZIONI
    loadPrice() {
        const value = this.formValue.indicator_pair.value;
        if (this.pairs.length > 0) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.pairs, (o) => {
                if (o.name === value) {
                    this.formValue.indicator_price.setValue(o.price.toFixed(8));
                }
            });
        }
    }
    loadPairs() {
        this.actionService.getAllPairs().subscribe((resp) => {
            const result = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](resp, (o) => {
                return o.price <= 0.1;
            });
            this.pairs = [];
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeList, (o) => {
                lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](result, (p) => {
                    if (o.pair === p.name) {
                        this.pairs.push(p);
                    }
                });
            });
        });
    }
    load() {
        this.createWindow();
        this.createStrategies(this.formValue.indicator_n_strat.value, parseFloat(this.formValue.indicator_price.value));
        if (this.formValue.indicator_pair.value !== '') {
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.strategies, (s) => {
                s.countB = 0;
                s.countS = 0;
                delete s.total;
            });
            // tslint:disable-next-line:max-line-length
            this.actionService.getCandleStick(this.formValue.indicator_pair.value, this.formValue.indicator_timeframe.value, this.timeBefore).subscribe((resp) => {
                const ticks = [];
                lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](resp.ticks, (t) => {
                    ticks.push({ date: new Date(t[0]).toLocaleString('it-IT'), high: t[2], low: t[3], close: t[4], opens: t[1] });
                });
                this.candlesticks = ticks.slice(0, this.showCandleSelected);
                this.candlesticksShown = ticks.slice(0, this.showCandleSelected);
                // console.log(this.candlesticksShown)
            });
        }
    }
    createStrategies(num, price) {
        // tslint:disable-next-line:prefer-for-of
        const tempArray = [];
        let jump;
        switch (this.formValue.indicator_satoshi.value) {
            case '1':
                jump = 1e-8;
                break;
            case '2':
                jump = 2e-8;
                break;
            case '3':
                jump = 3e-8;
                break;
            case '4':
                jump = 4e-8;
                break;
            default:
                jump = 1e-8;
        }
        for (let i = 0; i < num; i++) {
            // tslint:disable-next-line:max-line-length
            tempArray.push({
                buy: parseFloat((price + (jump * i)).toFixed(8)),
                sell: parseFloat(((price + (jump * i)) + jump).toFixed(8)),
                isBuyed: false,
                countS: 0,
                countB: 0
            });
        }
        this.strategies = tempArray;
    }
    calculateBuy(id) {
        // do calculation and set isBuyed to true;
        this.strategies[id].countB++;
        this.strategies[id].isBuyed = true;
    }
    calculateSell(id) {
        // do calculation and set isBuyed to false;
        this.strategies[id].countS++;
        this.strategies[id].isBuyed = false;
    }
    calculateFees(value) {
        const tax = ((value / 100) * 0.1);
        return (value - tax);
    }
    calculateDelta(p1, p2) {
        const temp = (p2 - p1) / p1;
        return (temp * 100).toFixed(2);
    }
    start() {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.candlesticks.length; i++) {
            for (let j = 0; j < this.strategies.length; j++) {
                if (this.strategies[j].buy > this.candlesticks[i].low &&
                    !this.strategies[j].isBuyed) {
                    this.calculateBuy(j);
                }
                if (this.strategies[j].sell < this.candlesticks[i].high &&
                    this.strategies[j].isBuyed) {
                    this.calculateSell(j);
                }
                if (this.strategies[j].buy > this.candlesticks[i].close &&
                    this.strategies[j].buy < this.candlesticks[i].high &&
                    !this.strategies[j].isBuyed) {
                    this.calculateBuy(j);
                }
                if (this.strategies[j].sell < this.candlesticks[i].close &&
                    this.strategies[j].sell > this.candlesticks[i].low &&
                    this.strategies[j].isBuyed) {
                    this.calculateSell(j);
                }
            }
        }
        this.calculateData();
    }
    calculateData() {
        // do the math here based on timeframe
        this.actionService.getBtcPrice().subscribe();
        const price = this.actionService.priceBtc;
        this.priceBtc = this.actionService.priceBtc;
        if (price) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.strategies, (d, i) => {
                let capital = parseFloat((this.formValue.indicator_cap.value / price).toFixed(8));
                if ((d.countB === d.countS && d.countB !== 0) || (d.countB > d.countS && d.countB !== 0 && d.countS !== 0)) {
                    let capitalTaxed = 0;
                    // tslint:disable-next-line:no-shadowed-variable
                    for (let i = 0; i < d.countS; i++) {
                        const buy = Math.floor(capital / d.buy);
                        const buyTaxed = this.calculateFees(buy);
                        capital = buy * d.sell;
                        capitalTaxed = buyTaxed * d.sell;
                        capitalTaxed = this.calculateFees(capitalTaxed);
                    }
                    d.total = capital.toFixed(8);
                    d.totalTaxed = capitalTaxed.toFixed(8);
                }
                else if (d.countB === 1 && d.countS === 0) {
                    const temp = Math.floor(capital / d.buy);
                    const tempT = this.calculateFees(temp);
                    d.total = (temp * d.buy).toFixed(8);
                    d.totalTaxed = (tempT * d.buy).toFixed(8);
                }
                else {
                    d.total = capital;
                    d.totalTaxed = capital;
                }
            });
            this.capitalss = parseFloat((this.formValue.indicator_cap.value / price).toFixed(8));
            const inittial = (this.capitalss * this.strategies.length);
            let result = 0;
            let taxedResult = 0;
            result = lodash__WEBPACK_IMPORTED_MODULE_1__["sumBy"](this.strategies, (o) => {
                return parseFloat(o.total);
            });
            taxedResult = lodash__WEBPACK_IMPORTED_MODULE_1__["sumBy"](this.strategies, (o) => {
                return parseFloat(o.totalTaxed);
            });
            const totalGiri = lodash__WEBPACK_IMPORTED_MODULE_1__["sumBy"](this.strategies, (o) => {
                return o.countS;
            });
            this.totalGiri = totalGiri;
            this.initialCap = 0;
            this.finalCap = 0;
            this.finalCapTaxed = 0;
            this.initialCap = (inittial * price).toFixed(2);
            this.finalCap = (result * price).toFixed(2);
            this.finalCapTaxed = (taxedResult * price).toFixed(2);
            const dateFrom = lodash__WEBPACK_IMPORTED_MODULE_1__["last"](this.candlesticks);
            const dateTo = lodash__WEBPACK_IMPORTED_MODULE_1__["first"](this.candlesticks);
            this.from = dateFrom.date;
            this.to = dateTo.date;
            const t = [];
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.strategies, (s, i) => {
                const name = s.buy.toFixed(8);
                const nameF = s.sell.toFixed(8);
                t.push({
                    name: name.slice(-3) + '-' + nameF.slice(-3),
                    series: [{ name: 'buy', value: s.countB }, { name: 'sell', value: s.countS }]
                });
            });
            this.parsedData = [...t];
            this.candlesticks = null;
        }
    }
    setDates() {
        const date = new Date();
        const d = new Date();
        const w = new Date();
        d.setMonth(d.getMonth() - 1);
        w.setDate(w.getDate() - 7);
        this.toDay = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        this.minDates = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
        this.aWeekAgo = { year: w.getFullYear(), month: w.getMonth() + 1, day: w.getDate() };
    }
    createWindow() {
        if (this.formValue.indicator_from.value !== '' && this.formValue.indicator_to.value !== '') {
            // tslint:disable-next-line:max-line-length
            this.timeBefore = 0;
            this.showCandleSelected = 0;
            const from = this.formValue.indicator_from.value.month + '/' + this.formValue.indicator_from.value.day + '/' + this.formValue.indicator_from.value.year;
            // tslint:disable-next-line:max-line-length
            const to = this.formValue.indicator_to.value.month + '/' + this.formValue.indicator_to.value.day + '/' + this.formValue.indicator_to.value.year;
            const toDay = this.toDay.month + '/' + this.toDay.day + '/' + this.toDay.year;
            const date1 = new Date(from);
            const date2 = new Date(to);
            const dateTo = new Date(toDay);
            // @ts-ignore
            const diffTime = Math.abs(date2 - date1);
            // @ts-ignore
            const diffTimeT = Math.abs(dateTo - date1);
            const diffDays = (Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
            // tslint:disable-next-line:max-line-length
            this.timeBefore = this.formValue.indicator_timeframe.value === '1h' ? (Math.ceil(diffTimeT / (1000 * 60 * 60 * 24))) * 24 : (Math.ceil(diffTimeT / (1000 * 60 * 60 * 24))) + 1;
            this.showCandleSelected = this.formValue.indicator_timeframe.value === '1h' ? diffDays * 24 : diffDays + 1;
        }
    }
    get formValue() {
        return this.indicatorForm.controls;
    }
    // MONITOR
    setPairs() {
        this.actionService.setPairToMonitor(this.pairM).subscribe(data => {
            this.getPairs();
            this.manageAddModal(false);
        });
    }
    parseScenario(cases) {
        switch (cases) {
            case 10:
                return '+';
            case -5:
                return '+/-';
            case -10:
                return '-';
        }
    }
    calculateRecap(result, array, tot, delta) {
        let res = 0;
        switch (result) {
            case 'str':
                res = lodash__WEBPACK_IMPORTED_MODULE_1__["sumBy"](array, (a) => {
                    if (a.number_strategies) {
                        return a.number_strategies;
                    }
                    else {
                        return 10;
                    }
                });
                return res;
            case 'tot':
                return array.length * 1000;
            case 'delta':
                res = lodash__WEBPACK_IMPORTED_MODULE_1__["sumBy"](array, 'delta_taxed');
                return (res / array.length).toFixed(2);
            case 'taxed':
                res = (tot / 100) * delta;
                return res.toFixed(2);
        }
    }
    getPairs() {
        this.actionService.getPairMonitored().subscribe(data => {
            this.monitoredPairs = data;
            const narray = Math.ceil(this.monitoredPairs.length / 12);
            const Arr = [];
            for (let i = 0; i < narray; i++) {
                Arr.push([]);
            }
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](data, (p, j) => {
                const i = Math.floor(j / 12);
                if (j < (12 * (i + 1))) {
                    Arr[i].push(p);
                }
            });
            this.monitoredPairs = Arr;
        });
    }
    removePair() {
        this.actionService.deletePairToMonitor(this.pairToRemove).subscribe(data => {
            this.getPairs();
            this.manageDeleteModal(false);
        });
    }
    manageAddModal(action) {
        if (action) {
            this.addModal.show('modal-s');
            return;
        }
        this.addModal.dismiss();
    }
    manageDeleteModal(action, pair) {
        if (action) {
            this.pairToRemove = pair;
            this.removeModal.show('modal-s');
            return;
        }
        this.removeModal.dismiss();
        this.pairToRemove = '';
    }
    getFiltered() {
        const payload = this.filters;
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](payload, (f) => {
            if (f.name === 'from' && lodash__WEBPACK_IMPORTED_MODULE_1__["isObject"](f.val)) {
                const fr = f.val.month + '/' + f.val.day + '/' + f.val.year;
                f.val = fr;
            }
            if (f.name === 'to' && lodash__WEBPACK_IMPORTED_MODULE_1__["isObject"](f.val)) {
                const tr = f.val.month + '/' + (f.val.day) + '/' + f.val.year;
                f.val = tr;
            }
        });
        this.actionService.getFilteredProjections(0, this.rowToShow, payload).subscribe(data => {
            this.filteredProjections = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](data);
            this.actionService.getProjectionCount(payload).subscribe(resp => {
                this.countProjections = resp.count;
            });
        });
    }
    getProjections() {
        this.actionService.getProjections().subscribe(data => {
            this.projections = data;
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](data, (d) => {
                this.pairToShow.push(d.pair);
            });
            this.pairToShow = lodash__WEBPACK_IMPORTED_MODULE_1__["uniq"](this.pairToShow, 'pair');
            this.filterProjections(this.filters);
        });
        this.actionService.getProjectionCount(this.filters).subscribe(resp => {
            this.countProjections = resp.count;
        });
    }
    manageTopPerformer(side) {
        // if (true){
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));
        if (side != null) {
            this.selectedProjections = [];
            if (!side) {
                this.fromTop = new Date(decodeURIComponent(this.fromTop));
                this.toTop = new Date(decodeURIComponent(this.toTop));
                const bfrom = new Date(this.fromTop.setDate(this.fromTop.getDate() - 7));
                this.fromTop = (bfrom.getMonth() + 1) + '%2F' + bfrom.getDate() + '%2F' + bfrom.getFullYear();
                const bto = new Date(this.toTop.setDate(this.toTop.getDate() - 7));
                this.toTop = (bto.getMonth() + 1) + '%2F' + bto.getDate() + '%2F' + bto.getFullYear();
            }
            else {
                this.fromTop = new Date(decodeURIComponent(this.fromTop));
                this.toTop = new Date(decodeURIComponent(this.toTop));
                const bfrom = new Date(this.fromTop.setDate(this.fromTop.getDate() + 7));
                this.fromTop = (bfrom.getMonth() + 1) + '%2F' + bfrom.getDate() + '%2F' + bfrom.getFullYear();
                const bto = new Date(this.toTop.setDate(this.toTop.getDate() + 7));
                this.toTop = (bto.getMonth() + 1) + '%2F' + bto.getDate() + '%2F' + bto.getFullYear();
            }
            this.actionService.getTopProjections(this.fromTop, this.toTop).subscribe(top => {
                this.topPerformer = lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"](top, 'pair').slice(0, 10);
                // console.log(this.topPerformer)
            });
        }
        else {
            this.toTop = (lastSunday.getMonth() + 1) + '%2F' + lastSunday.getDate() + '%2F' + lastSunday.getFullYear();
            const fromLast = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](new Date(lastSunday.setDate(lastSunday.getDate() - 7)));
            this.fromTop = (fromLast.getMonth() + 1) + '%2F' + fromLast.getDate() + '%2F' + fromLast.getFullYear();
            this.actionService.getTopProjections(this.fromTop, this.toTop).subscribe(top => {
                this.topPerformer = lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"](top, 'pair').slice(0, 10);
            });
        }
        // }
    }
    getBestLast() {
        this.actionService.getTopProjections(this.fromTop, this.toTop).subscribe(top => {
            const payload = { projections: !this.selectedProjections.length ? this.topPerformer : this.selectedProjections,
                percentage_strategy_number: this.perCentStrategy };
            this.laddaBest = true;
            this.actionService.getLastBestProjections(this.fromTop, this.toTop, payload).subscribe(data => {
                this.bestLast = data;
                this.laddaBest = false;
            }, err => {
                this.bestLast = [];
                this.alertService.addMessage('danger', err.message);
                this.laddaBest = false;
            });
        });
    }
    addPairtoParse(pro, event) {
        if (event.target.checked) {
            this.selectedProjections.push(pro);
        }
        else {
            this.selectedProjections = lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.selectedProjections, (n) => {
                return n.pair !== pro.pair;
            });
        }
    }
    filtersSelected(type, value) {
        if (lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.filters, { name: type })) {
            this.filters = lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.filters, (o) => {
                return o.name !== type;
            });
            this.filters.push({ name: type, val: value });
        }
        else {
            this.filters.push({ name: type, val: value });
        }
        this.getFiltered();
    }
    filterProjections(filter) {
        let result = this.projections;
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](filter, (f) => {
            if (f.name === 'from') {
                const fr = new Date(f.val.month + '/' + f.val.day + '/' + f.val.year);
                result = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](result, (o) => {
                    return new Date(o.from) >= fr;
                });
            }
            if (f.name === 'to') {
                const tr = new Date(f.val.month + '/' + (f.val.day) + '/' + f.val.year);
                result = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](result, (o) => {
                    return new Date(o.to) <= tr;
                });
            }
            if (f.name === 'pair' && f.val !== 'all') {
                result = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](result, { pair: f.val });
            }
            if (f.name === 'jumps' && f.val !== 'all') {
                result = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](result, { jumps: parseFloat(f.val) });
            }
        });
        this.filteredProjections = result;
    }
    formatDate(date) {
        const d = new Date(date);
        return d.toLocaleString('it-IT');
    }
    loadRow(action) {
        if (action) {
            this.rowToShow += 12;
            this.getFiltered();
        }
        else {
            this.rowToShow -= 12;
            this.getFiltered();
        }
    }
}
IndicatorsComponent.ɵfac = function IndicatorsComponent_Factory(t) { return new (t || IndicatorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_action_service__WEBPACK_IMPORTED_MODULE_4__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_sharing_service__WEBPACK_IMPORTED_MODULE_6__["SharingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCalendar"])); };
IndicatorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndicatorsComponent, selectors: [["indicators-component"]], viewQuery: function IndicatorsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.removeModal = _t.first);
    } }, decls: 155, vars: 35, consts: [[1, "sub-header"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "home-tab", "data-toggle", "tab", "href", "#proiezioni", "role", "tab", "aria-controls", "proiezioni", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-toggle", "tab", "href", "#monitor", "role", "tab", "aria-controls", "monitor", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content"], ["id", "proiezioni", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "mt-3", "row"], [1, "col-sm-5"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "form-group", "col-sm-6"], ["for", "cap"], ["id", "cap", "type", "number", "formControlName", "indicator_cap", 1, "form-control", "inputStr"], ["for", "n-strat"], ["id", "n-strat", "type", "number", "formControlName", "indicator_n_strat", 1, "form-control", "inputStr"], [1, "form-group", "col-sm-12"], ["for", "pairs"], ["formControlName", "indicator_pair", "id", "pairs", 1, "form-control", "inputStr", 3, "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "s-price"], ["id", "s-price", "type", "number", "formControlName", "indicator_price", 1, "form-control", "inputStr"], ["for", "satoshi"], ["id", "satoshi", "formControlName", "indicator_satoshi", 1, "form-control", "inputStr"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["for", "timeframe"], ["id", "timeframe", "formControlName", "indicator_timeframe", 1, "form-control", "inputStr"], ["value", "1h"], ["value", "1d"], [1, "col-sm-6", "form-group"], ["for", "fromD"], ["id", "fromD", "name", "fromD", "ngbDatepicker", "", "formControlName", "indicator_from", 1, "form-control", "inputStr", 3, "minDate", "maxDate", "keydown.enter", "click"], ["fromD", "ngbDatepicker"], ["for", "toD"], ["id", "toD", "name", "toD", "ngbDatepicker", "", "formControlName", "indicator_to", 1, "form-control", "inputStr", 3, "minDate", "maxDate", "keydown.enter", "click"], ["toD", "ngbDatepicker"], [1, "btn", "start-btn", "w-100", 3, "disabled"], [1, "col-sm-7"], [1, "mt-4", "stat-container"], [1, "d-flex"], [1, "float-left"], [4, "ngIf"], [1, "float-right", "pl-5"], ["role", "button", "tabindex", "0", "class", "btn start-btn ml-3", 3, "click", 4, "ngIf"], ["class", "pt-4 d-flex chart-dark text-center", 4, "ngIf"], [1, "col-sm-12", "text-center"], [1, "mb-3"], ["class", "btn start-btn ", "type", "button", "data-toggle", "collapse", "data-target", "#collapseCandle", "aria-expanded", "false", "aria-controls", "collapseCandle", 4, "ngIf"], ["id", "collapseCandle", 1, "row", "collapse"], ["class", "col-sm-1 candlesticks mt-2", 4, "ngFor", "ngForOf"], [1, "col-sm-12"], ["class", "table mt-3 project-table", 3, "ngClass", 4, "ngIf"], ["id", "monitor", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], [1, "btn", "start-btn", 3, "click"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseList", "aria-expanded", "false", "aria-controls", "collapseList", 1, "ml-3", "btn", "start-btn"], ["id", "collapseList", "class", "collapse pt-3", 4, "ngIf"], ["class", "pt-3", 4, "ngIf"], [1, "col-sm-6"], [1, "mb-3", "text-center"], ["role", "button", "width", "20", 1, "float-left", 3, "src", "click"], ["role", "button", "width", "20", 1, "float-right", 3, "src", "click"], ["class", "pt-5 text-center", 4, "ngIf"], ["class", "pt-3 text-center", 4, "ngIf"], [1, "sub-header", "custom", "d-flex", "space-btwn"], [1, "mb-3", 2, "font-size", "20px"], ["for", "pcStrategy"], ["id", "pcStrategy", "type", "number", 1, "ml-3", 2, "width", "50px", 3, "ngModel", "ngModelChange"], [1, "btn", "start-btn", "ml-3", 3, "click"], ["class", "text-center", 4, "ngIf"], ["addModal", ""], [1, "app-modal-header"], [1, "app-modal-body", "text-center"], [1, "col-sm-12", "form-group"], ["for", "pairsM"], ["id", "pairsM", 1, "form-control", "inputStr", 3, "ngModel", "ngModelChange"], [1, "btn", "start-btn", "w-100", 3, "click"], ["removeModal", ""], [3, "value"], ["role", "button", "tabindex", "0", 1, "btn", "start-btn", "ml-3", 3, "click"], [1, "pt-4", "d-flex", "chart-dark", "text-center"], [3, "results", "xAxisLabel", "legendTitle", "yAxisLabel", "legend", "showXAxisLabel", "showYAxisLabel", "xAxis", "yAxis", "gradient"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseCandle", "aria-expanded", "false", "aria-controls", "collapseCandle", 1, "btn", "start-btn"], [1, "col-sm-1", "candlesticks", "mt-2"], ["data-toggle", "tooltip", "data-placement", "bottom", "src", "assets/icons/thumbs-up-solid.svg", "alt", "", "width", "24", 3, "title", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "bottom", "src", "assets/icons/thumbs-down-solid.svg", "alt", "", "width", "24", 3, "title", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "bottom", "src", "assets/icons/equals-solid.svg", "alt", "", "width", "24", 3, "title", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "bottom", "src", "assets/icons/thumbs-up-solid.svg", "alt", "", "width", "24", 3, "title"], ["data-toggle", "tooltip", "data-placement", "bottom", "src", "assets/icons/thumbs-down-solid.svg", "alt", "", "width", "24", 3, "title"], ["data-toggle", "tooltip", "data-placement", "bottom", "src", "assets/icons/equals-solid.svg", "alt", "", "width", "24", 3, "title"], [1, "table", "mt-3", "project-table", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["id", "collapseList", 1, "collapse", "pt-3"], ["class", "pairs-list ", 4, "ngFor", "ngForOf"], [1, "pairs-list"], ["role", "button", "tabindex", "0", "src", "assets/icons/times-circle-solid.svg", "width", "16", 1, "float-right", "pt-1", "pl-1", 3, "click"], [1, "pt-3"], [1, "pt-5", "text-center"], [1, "pt-3", "text-center"], [1, "project-table", "table", "best", "table-responsive", "mt-3", 3, "ngClass"], ["type", "checkbox", 1, "check-dash", 3, "id", "change"], [1, "text-center"], ["class", "spinner-grow spinner-grow-border-xl mt-5", "role", "status", 4, "ngIf"], ["role", "status", 1, "spinner-grow", "spinner-grow-border-xl", "mt-5"], [1, "sr-only"], [1, "col-sm-3"], [1, "form-group"], ["for", "moneta"], ["id", "moneta", 1, "inputStr", "form-control", 3, "ngModel", "ngModelChange"], ["value", "all"], ["id", "fromDP", "name", "fromDP", "ngbDatepicker", "", 1, "form-control", "inputStr", 3, "ngModel", "maxDate", "ngModelChange", "dateSelect", "keydown.enter", "click"], ["fromDP", "ngbDatepicker"], ["id", "toDP", "name", "toDP", "ngbDatepicker", "", 1, "form-control", "inputStr", 3, "ngModel", "minDate", "maxDate", "ngModelChange", "dateSelect", "keydown.enter", "click"], ["toDP", "ngbDatepicker"], ["for", "jumps"], ["id", "jumps", 1, "inputStr", "form-control", 3, "ngModel", "ngModelChange"], [1, "project-table", "table", "mt-3", 3, "ngClass"], ["colspan", "10"], ["class", "btn start-btn float-left", 3, "click", 4, "ngIf"], ["class", "btn btn-danger float-right", 3, "click", 4, "ngIf"], [1, "btn", "start-btn", "float-left", 3, "click"], [1, "btn", "btn-danger", "float-right", 3, "click"]], template: function IndicatorsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Proiezioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Proiezioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Monitor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function IndicatorsComponent_Template_form_ngSubmit_13_listener() { return ctx.load(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Capitale per strategia $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Numero Strategie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Scambio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndicatorsComponent_Template_select_ngModelChange_26_listener() { return ctx.loadPrice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, IndicatorsComponent_option_28_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Prezzo di partenza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Salto in Satoshi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Timeframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "1h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "1d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Da");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function IndicatorsComponent_Template_input_keydown_enter_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57); return _r1.toggle(); })("click", function IndicatorsComponent_Template_input_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57); return _r1.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function IndicatorsComponent_Template_input_keydown_enter_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62); return _r2.toggle(); })("click", function IndicatorsComponent_Template_input_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62); return _r2.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Carica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Saldo iniziale:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, IndicatorsComponent_div_74_Template, 4, 1, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, IndicatorsComponent_div_75_Template, 4, 1, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, IndicatorsComponent_div_76_Template, 4, 1, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, IndicatorsComponent_span_80_Template, 4, 1, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, IndicatorsComponent_span_81_Template, 2, 0, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, IndicatorsComponent_span_82_Template, 4, 1, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, IndicatorsComponent_div_83_Template, 4, 1, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, IndicatorsComponent_div_84_Template, 4, 1, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, IndicatorsComponent_div_85_Template, 2, 12, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, IndicatorsComponent_button_88_Template, 2, 0, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, IndicatorsComponent_div_90_Template, 6, 4, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, IndicatorsComponent_table_92_Template, 21, 5, "table", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorsComponent_Template_button_click_97_listener() { return ctx.manageAddModal(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " AGGIUNGI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " LISTA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, IndicatorsComponent_div_101_Template, 4, 1, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, IndicatorsComponent_div_102_Template, 3, 0, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h5", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorsComponent_Template_img_click_106_listener() { return ctx.manageTopPerformer(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Top 10 Monete della Settimana: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorsComponent_Template_img_click_108_listener() { return ctx.manageTopPerformer(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, IndicatorsComponent_div_109_Template, 3, 0, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, IndicatorsComponent_div_110_Template, 36, 9, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, IndicatorsComponent_div_111_Template, 3, 0, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Riscontro: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "% da Applicare:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndicatorsComponent_Template_input_ngModelChange_119_listener($event) { return ctx.perCentStrategy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorsComponent_Template_button_click_120_listener() { return ctx.getBestLast(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "CALCOLA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, IndicatorsComponent_div_122_Template, 3, 0, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, IndicatorsComponent_div_123_Template, 3, 2, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, IndicatorsComponent_div_125_Template, 62, 13, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, IndicatorsComponent_div_126_Template, 3, 0, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "modal", null, 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Aggiungi moneta da Monitorare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "label", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Scambio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "select", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndicatorsComponent_Template_select_ngModelChange_137_listener($event) { return ctx.pairM = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](139, IndicatorsComponent_option_139_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorsComponent_Template_button_click_141_listener() { return ctx.setPairs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " AGGIUNGI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "modal", null, 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Rimuovi moneta da Monitorare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorsComponent_Template_button_click_153_listener() { return ctx.removePair(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " RIMUOVI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.indicatorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pairs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minDate", ctx.minDates)("maxDate", ctx.toDay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minDate", ctx.formValue.indicator_from.value)("maxDate", ctx.toDay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.indicatorForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.initialCap || ctx.formValue.indicator_cap.value * ctx.strategies.length, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.finalCap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.finalCapTaxed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.to);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.initialCap && ctx.finalCap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.candlesticks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.initialCap && ctx.finalCapTaxed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.initialCap && ctx.finalCap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.from);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parsedData.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.candlesticksShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.candlesticksShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.monitoredPairs.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.monitoredPairs.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.color ? "assets/icons/arrow-circle-left-solid.svg" : "assets/icons/arrow-circle-left-solid-w.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.color ? "assets/icons/arrow-circle-right-solid.svg" : "assets/icons/arrow-circle-right-solid-w.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.topPerformer.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topPerformer.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.projections.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.perCentStrategy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.bestLast.length && !ctx.laddaBest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.laddaBest || ctx.bestLast.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projections.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.projections.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pairM);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pairs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Stai rimuovendo ", ctx.pairToRemove, " !! ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbInputDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__["BarVertical2DComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: [".project-table[_ngcontent-%COMP%] {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n.project-table.best[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 73px;\n}\n.project-table.dark[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  color: #dddddd !important;\n}\n.project-table.light[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  color: black !important;\n}\n.pairs-list[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.pairs-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 10px;\n}\n.stat-container[_ngcontent-%COMP%] {\n  font-size: large;\n}\n.candlesticks[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n}\n.candlesticks.red[_ngcontent-%COMP%] {\n  background-color: orangered;\n  color: white;\n}\n.candlesticks.green[_ngcontent-%COMP%] {\n  background-color: forestgreen;\n  color: white;\n}\n@media screen and (max-width: 600px) {\n  .project-table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2hvbWUvaW5kaWNhdG9ycy9pbmRpY2F0b3JzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvaW5kaWNhdG9ycy9pbmRpY2F0b3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBZ0JFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDZEY7QURGSTtFQUNFLFlBQUE7QUNJTjtBREFJO0VBQ0UseUJBQUE7QUNFTjtBREVJO0VBQ0UsdUJBQUE7QUNBTjtBRFFBO0VBQ0Usb0JBQUE7QUNMRjtBRE9FO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xKO0FEU0E7RUFDRSxnQkFBQTtBQ05GO0FEUUE7RUFDRSxlQUFBO0VBR0Esa0JBQUE7QUNQRjtBRFFFO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0FDTko7QURRRTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQ05KO0FEU0E7RUFDRTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtFQ05GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvaW5kaWNhdG9ycy9pbmRpY2F0b3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtdGFibGV7XG4gICYuYmVzdHtcbiAgICB0cntcbiAgICAgIGhlaWdodDogNzNweDtcbiAgICB9XG4gIH1cbiAgJi5kYXJre1xuICAgIHRye1xuICAgICAgY29sb3I6ICNkZGRkZGQgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgJi5saWdodHtcbiAgICB0cntcbiAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFpcnMtbGlzdHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cbiAgdWx7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbn1cblxuLnN0YXQtY29udGFpbmVye1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuLmNhbmRsZXN0aWNrc3tcbiAgZm9udC1zaXplOjE0cHg7XG4gIC8vYm9yZGVyOiAxcHggc29saWQgIzcyNzI3MjtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICYucmVke1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgJi5ncmVlbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmb3Jlc3RncmVlbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5wcm9qZWN0LXRhYmxle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbn1cbiIsIi5wcm9qZWN0LXRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9qZWN0LXRhYmxlLmJlc3QgdHIge1xuICBoZWlnaHQ6IDczcHg7XG59XG4ucHJvamVjdC10YWJsZS5kYXJrIHRyIHtcbiAgY29sb3I6ICNkZGRkZGQgIWltcG9ydGFudDtcbn1cbi5wcm9qZWN0LXRhYmxlLmxpZ2h0IHRyIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5wYWlycy1saXN0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4ucGFpcnMtbGlzdCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnN0YXQtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmNhbmRsZXN0aWNrcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhbmRsZXN0aWNrcy5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jYW5kbGVzdGlja3MuZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmb3Jlc3RncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucHJvamVjdC10YWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndicatorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'indicators-component',
                templateUrl: './indicators.component.html',
                styleUrls: ['./indicators.component.scss'],
            }]
    }], function () { return [{ type: _core_services_action_service__WEBPACK_IMPORTED_MODULE_4__["ActionService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }, { type: _core_services_sharing_service__WEBPACK_IMPORTED_MODULE_6__["SharingService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCalendar"] }]; }, { addModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addModal']
        }], removeModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['removeModal']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/home/indicators/indicators.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/indicators/indicators.guard.ts ***!
  \*************************************************************/
/*! exports provided: IndicatorsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorsGuard", function() { return IndicatorsGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class IndicatorsGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.role === 'admin') {
            return true;
        }
        else {
            return this.router.navigate(['home/dashboard']).then();
        }
    }
}
IndicatorsGuard.ɵfac = function IndicatorsGuard_Factory(t) { return new (t || IndicatorsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
IndicatorsGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IndicatorsGuard, factory: IndicatorsGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndicatorsGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/settings/settings.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/settings/settings.component.ts ***!
  \*************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/action.service */ "./src/app/core/services/action.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function SettingsComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SettingsComponent {
    constructor(authService, actionService) {
        this.authService = authService;
        this.actionService = actionService;
        this.newPw = '';
        this.confirmPw = '';
        this.apKey = '';
        this.apSctKey = '';
        // this.apKey = this.authService.apiKey;
        // this.apSctKey = this.authService.apiSecretKey;
    }
    ngOnInit() {
        this.getInfo();
    }
    update(type, name, pw, apiKey, apiSecret) {
        let payload;
        switch (type) {
            case 'pw':
                payload = {
                    username: name,
                    password: pw,
                    role: 'admin'
                };
                break;
            case 'key':
                payload = {
                    username: name,
                    api_key: apiKey,
                    secret_key: apiSecret,
                    role: 'admin'
                };
                break;
            default:
                return;
        }
        this.actionService.updateAccount(name, payload).subscribe();
    }
    getInfo() {
        this.actionService.getUserInfo().subscribe((data) => {
            // this.apKey = data.api_key;
            // this.apSctKey = data.secret_key;
        });
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["settings-component"]], decls: 45, vars: 10, consts: [[1, "sub-header"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "home-tab", "data-toggle", "tab", "href", "#user", "role", "tab", "aria-controls", "user", "aria-selected", "true", 1, "nav-link", "active"], ["class", "nav-item", 4, "ngIf"], ["id", "myTabContent", 1, "tab-content"], ["id", "user", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-9", "mb-4"], ["type", "text", 1, "form-control", "w-40", 3, "disabled", "readOnly", "ngModel"], ["type", "password", 1, "form-control", "w-40", 3, "ngModel", "ngModelChange"], [1, "col-sm-9"], [1, "btn", "start-btn", 3, "disabled", "click"], ["id", "account", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], ["type", "text", 1, "w-100", "form-control", 3, "ngModel"], ["type", "text", 1, "w-100", "form-control", 3, "ngModel", "ngModelChange"], ["id", "profile-tab", "data-toggle", "tab", "href", "#account", "role", "tab", "aria-controls", "account", "aria-selected", "false", 1, "nav-link"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Opzioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Utente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SettingsComponent_li_7_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Profilo utente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nome utente:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Nuova password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_20_listener($event) { return ctx.newPw = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Conferma nuova password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_24_listener($event) { return ctx.confirmPw = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_27_listener() { return ctx.update("pw", ctx.authService.user, ctx.newPw); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "PROCEDI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Api Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Api Key:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Api Secret key:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_40_listener($event) { return ctx.apSctKey = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_43_listener() { return ctx.update("key", ctx.authService.user, ctx.apKey, ctx.apSctKey); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "PROCEDI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.role === "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("readOnly", true)("ngModel", ctx.authService.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPw);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPw);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.newPw !== ctx.confirmPw || ctx.newPw === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.apKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.apSctKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.apKey.length < 15 || ctx.apSctKey.length < 15);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".tab-pane[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2hvbWUvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItcGFuZSB7XG4gIHBhZGRpbmc6MnJlbSAwO1xufVxuXG4ubmF2LWxpbmsge1xuICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMywzLDM3LDAuMSkgMTAwJSk7XG59XG4ubmF2LWxpbmsuYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6I2ZmZjtcbn1cblxuXG4iLCIudGFiLXBhbmUge1xuICBwYWRkaW5nOiAycmVtIDA7XG59XG5cbi5uYXYtbGluay5hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'settings-component',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss'],
            }]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _core_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/strategies/strategies.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/strategies/strategies.component.ts ***!
  \*****************************************************************/
/*! exports provided: StrategiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategiesComponent", function() { return StrategiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/Utils */ "./src/app/shared/Utils.ts");
/* harmony import */ var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/alert/alert.service */ "./src/app/shared/alert/alert.service.ts");
/* harmony import */ var _core_services_action_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/action.service */ "./src/app/core/services/action.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/modal/modal.component */ "./src/app/shared/modal/modal.component.ts");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "./node_modules/@angular-slider/ngx-slider/__ivy_ngcc__/fesm2015/angular-slider-ngx-slider.js");













const _c0 = ["confirmModal"];
function StrategiesComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function StrategiesComponent_div_18_Template_input_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.checkIfExist(ctx_r23.formValue.strategy_name.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r25.name);
} }
function StrategiesComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Salti in satoshi:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_label_38_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StrategiesComponent_label_38_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.capitalType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.formValue.strategy_pairs.value)("ngModel", ctx_r5.capitalType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r5.formValue.strategy_pairs.value ? ctx_r5.formValue.strategy_pairs.value.replace("BTC", "") : "Choose", " - ", ctx_r5.availableCapital, " | Ordine minimo: ", ctx_r5.minOrder.toFixed(0), "");
} }
function StrategiesComponent_label_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ordine frammentato (tagli da $400) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Capitale errato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Seleziona Ordine:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_49_label_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StrategiesComponent_div_49_label_5_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.orderType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ordine Singolo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r28.orderType);
} }
function StrategiesComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StrategiesComponent_div_49_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.orderType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Ordine Ciclico");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StrategiesComponent_div_49_label_5_Template, 3, 1, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.orderType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.capitalType != "btc");
} }
function StrategiesComponent_div_50_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " compera");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prezzo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StrategiesComponent_div_50_span_3_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.strategyType === "single");
} }
function StrategiesComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prezzo vendita:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Direzione:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Crescente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Decrescente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Numero ordini:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-slider", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r17.options);
} }
function StrategiesComponent_p_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Prezzo di vendita: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r19.formValue.strategy_sell_price.value, "1.1-8"), " BTC ");
} }
function StrategiesComponent_span_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "per strategia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_p_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ordine: ", ctx_r21.formValue.strategy_direction.value === "up" ? "Crescente" : "Decrescente", "");
} }
function StrategiesComponent_p_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("N\u00B0 Ordini: ", ctx_r22.formValue.strategy_size.value, "");
} }
class StrategiesComponent {
    constructor(fb, alert, cdFref, actionService, alertService, authService, datePipe) {
        this.fb = fb;
        this.alert = alert;
        this.cdFref = cdFref;
        this.actionService = actionService;
        this.alertService = alertService;
        this.authService = authService;
        this.datePipe = datePipe;
        this.pairs = [];
        this.strategyType = 'single';
        this.strLength = 0;
        this.activeList = _shared_Utils__WEBPACK_IMPORTED_MODULE_4__["default"].getList();
        this.capitalType = 'btc';
        this.isBtcCapital = true;
        this.minOrder = 0;
        this.orderType = 'cyclic';
        this.isSegmented = false;
        this.showMsg = false;
        this.role = this.authService.role;
        this.strategiesForm = this.fb.group({
            strategy_name: [''],
            strategy_pairs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            strategy_capital: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            strategy_buy_price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            strategy_sell_price: [''],
            strategy_jumps: [],
            strategy_capitalType: ['btc'],
            strategy_segmented: [false],
            strategy_orderType: ['cyclic'],
            strategy_pairs_size: [null],
            strategy_direction: [''],
            strategy_size: [''],
        });
        this.options = {
            floor: 2,
            ceil: 50,
            step: 1
        };
        this.optionsStr = {
            floor: 0,
            ceil: 1000,
            step: 1
        };
    }
    ngOnInit() {
        this.loadPairs();
        this.actionService.getSpecificPairs('BTCUSDT').subscribe((resp) => {
            this.btcPrice = resp.price;
        });
    }
    ngAfterViewInit() {
        this.manageValidators(this.strategyType);
        this.cdFref.detectChanges();
    }
    ngAfterViewChecked() {
        this.btcBalance = this.actionService.balanceBtc;
    }
    checkInvestedCapital(type) {
        let disabled = false;
        if (type !== 'btc') {
            if (this.strategyType === 'single') {
                if (this.availableCapital < this.minOrder || this.formValue.strategy_capital.value >= this.availableCapital) {
                    disabled = true;
                }
            }
            else {
                // tslint:disable-next-line:max-line-length
                if (this.availableCapital < this.minOrder || (this.formValue.strategy_capital.value * this.formValue.strategy_size.value) >= this.availableCapital) {
                    disabled = true;
                }
            }
        }
        else {
            if (this.strategyType === 'single') {
                if (this.formValue.strategy_capital.value >= this.btcBalance) {
                    disabled = true;
                }
            }
            else {
                if ((this.formValue.strategy_capital.value * this.formValue.strategy_size.value) >= this.btcBalance) {
                    disabled = true;
                }
            }
        }
        this.showMsg = disabled;
        return disabled;
    }
    manageValidators(str) {
        if (str === 'single') {
            this.strategiesForm.reset();
            this.formValue.strategy_name.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.formValue.strategy_sell_price.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.formValue.strategy_direction.clearValidators();
            this.formValue.strategy_size.clearValidators();
            this.updateFormStatus();
        }
        else {
            this.isStrPresent = false;
            this.strategiesForm.reset();
            lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](this.formValue, (s) => {
                if (s.name !== 'strategy_pairs_size') {
                    s.setValue('');
                }
            });
            this.formValue.strategy_name.clearValidators();
            this.formValue.strategy_sell_price.clearValidators();
            this.formValue.strategy_direction.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.formValue.strategy_size.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.formValue.strategy_jumps.setValue(1);
            this.updateFormStatus();
        }
        this.formValue.strategy_capitalType.setValue('btc');
        this.formValue.strategy_orderType.setValue('cyclic');
        this.isBtcCapital = true;
    }
    updateFormStatus() {
        this.formValue.strategy_name.updateValueAndValidity();
        this.formValue.strategy_sell_price.updateValueAndValidity();
        this.formValue.strategy_direction.updateValueAndValidity();
        this.formValue.strategy_size.updateValueAndValidity();
    }
    checkIfExist(name) {
        if (name !== '/' && name !== '' && this.strategyType === 'single') {
            this.actionService.checkStrategy(name).subscribe((resp) => {
                if (lodash__WEBPACK_IMPORTED_MODULE_3__["isString"](resp.success)) {
                    this.isStrPresent = false;
                }
                else {
                    this.isStrPresent = true;
                    this.alertService.addMessage('danger', 'Nome strategia presente');
                }
                return this.isStrPresent;
            }, (error) => {
            });
        }
    }
    loadPairs() {
        this.actionService.getAllPairs().subscribe((resp) => {
            this.firstCall = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](resp);
            this.setPairs();
        }, (error) => {
        });
    }
    setPairs() {
        if (this.formValue.strategy_pairs_size.value === '' || this.formValue.strategy_pairs_size.value === null) {
            // filter pair by price if needed
            const result = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](this.firstCall, (o) => {
                return o.price;
            });
            this.pairs = [];
            lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](this.activeList, (o) => {
                lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](result, (p) => {
                    if (o.pair === p.name) {
                        this.pairs.push(p);
                    }
                });
            });
            this.formValue.strategy_pairs_size.setValue('999');
            this.strLength = this.pairs.length;
        }
        else {
            // tslint:disable-next-line:max-line-length
            const pSize = (this.formValue.strategy_pairs_size.value);
            const value = this.formValue.strategy_pairs_size.value < 100 ? this.formValue.strategy_pairs_size.value < 10 ? '0.0000000' + pSize : '0.000000' + pSize : '0.00000' + pSize;
            const result2 = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](this.firstCall, (o) => {
                return o.price <= parseFloat(value);
            });
            this.pairs = [];
            lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](this.activeList, (o) => {
                lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](result2, (p) => {
                    if (o.pair === p.name) {
                        this.pairs.push(p);
                    }
                });
            });
            this.strLength = this.pairs.length;
        }
    }
    loadPrices() {
        const pairs = this.formValue.strategy_pairs.value;
        if (pairs) {
            const price = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.pairs, { name: pairs });
            this.currentPrice = price.price;
            const formattedPrice = Math.floor(price.price.toFixed(8));
            this.formValue.strategy_buy_price.setValue(price.price.toFixed(8));
            this.formValue.strategy_sell_price.setValue(price.price.toFixed(8));
            this.formValue.strategy_capitalType.setValue('btc');
            this.isBtcCapital = true;
            this.getAvailableBalance(pairs);
        }
    }
    initializeStrategy() {
        let quantity;
        if (this.capitalType === 'btc') {
            quantity = this.formValue.strategy_capital.value / parseFloat(this.formValue.strategy_buy_price.value);
        }
        else {
            quantity = this.formValue.strategy_capital.value;
        }
        const date = new Date();
        // console.log( parseFloat(this.formValue.strategy_sell_price.value) , this.formValue.strategy_sell_price.value);  : (this.formValue.strategy_capital.value * this.currentPrice).toFixed(8)
        const payload = {
            name: this.formValue.strategy_name.value,
            coin_pair: this.formValue.strategy_pairs.value,
            capital: this.formValue.strategy_capital.value,
            quantity: Math.floor(parseFloat(quantity.toFixed(3))),
            current_capital: this.formValue.strategy_capital.value,
            current_status: this.capitalType === 'btc' ? 'BUY' : 'SELL',
            buy_price: parseFloat(this.formValue.strategy_buy_price.value),
            sell_price: parseFloat(this.formValue.strategy_sell_price.value),
            current_initial_price: this.currentPrice,
            date: this.datePipe.transform(date, 'yyyy-MM-dd'),
            status: this.orderType !== 'single' ? 'ACTIVE' : 'INACTIVE',
            isBtcCapital: this.capitalType === 'btc',
            order_type: this.orderType,
        };
        if (this.formValue.strategy_segmented.value === true) {
            const size = (400 / this.btcPrice).toFixed(8);
            // console.log(payload, size)
            this.actionService.setStrategySplitted(payload, size).subscribe((resp) => {
                if (resp) {
                    this.close();
                    this.actionService.getBtcBalance().subscribe();
                    this.alertService.addMessage('success', 'Strategia inizializzata con successo');
                }
            }, (error) => {
                this.close();
            });
        }
        else {
            this.actionService.setStrategy(payload).subscribe((resp) => {
                if (resp) {
                    this.close();
                    this.actionService.getBtcBalance().subscribe();
                    this.alertService.addMessage('success', 'Strategia inizializzata con successo');
                }
            }, (error) => {
                this.close();
            });
        }
    }
    checkSizeOrder(type) {
        if (this.formValue.strategy_capital.value) {
            let result = false;
            if (this.formValue.strategy_capital.value * this.btcPrice > 800 && type === 'btc') {
                // console.log(this.formValue.strategy_capital.value, this.currentPrice, this.formValue.strategy_capital.value * this.currentPrice);
                // const val = this.formValue.strategy_capital.value * this.currentPrice;
                // const pivot = 400 / this.btcPrice;
                // console.log(val, pivot)
                result = true;
            }
            if (type !== 'btc') {
                const val = this.formValue.strategy_capital.value * this.currentPrice;
                const pivot = 400 / this.btcPrice;
                if (val > (2 * pivot)) {
                    result = true;
                }
            }
            return result;
        }
    }
    checkSizeAltcoin() {
        if (this.formValue.strategy_capitalType.value !== 'btc' && this.strategiesForm.valid) {
            if (this.strategyType !== 'single') {
                const count = this.availableCapital / this.formValue.strategy_capital.value;
                // tslint:disable-next-line:max-line-length
                if (count >= 2 && count >= this.formValue.strategy_size.value && (this.formValue.strategy_capital.value > this.minOrder.toFixed(0))) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                // tslint:disable-next-line:max-line-length
                if (this.formValue.strategy_capital.value > this.availableCapital || (this.formValue.strategy_capital.value < this.minOrder.toFixed(0))) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        else if (this.formValue.strategy_capitalType.value === 'btc') {
            return true;
        }
    }
    getAvailableBalance(pair) {
        this.actionService.getSpecificBalance(pair).subscribe((resp) => {
            this.minOrder = 0.00011 / this.currentPrice;
            // console.log('min order: ', this.minOrder);
            if (resp.pair_balance > this.minOrder) {
                this.availableCapital = parseFloat(resp.pair_balance);
                this.isBtcCapital = false;
            }
            else {
                this.availableCapital = 0;
                this.isBtcCapital = true;
            }
        }, (error) => {
        });
    }
    initializeStrategies() {
        let quantity;
        if (this.isBtcCapital) {
            quantity = this.formValue.strategy_capital.value / parseFloat(this.formValue.strategy_buy_price.value);
        }
        else {
            quantity = this.formValue.strategy_capital.value;
        }
        const payload = {
            coin_pair: this.formValue.strategy_pairs.value,
            capital: this.formValue.strategy_capital.value,
            quantity: Math.round(parseFloat(quantity.toFixed(3))),
            price: parseFloat(this.formValue.strategy_buy_price.value),
            current_initial_price: this.currentPrice,
            n_strategy: this.formValue.strategy_size.value,
            order: this.formValue.strategy_direction.value,
            // tslint:disable-next-line:radix
            jumps: parseInt(this.formValue.strategy_jumps.value),
            isBtcCapital: this.capitalType === 'btc',
            order_type: this.orderType
        };
        // console.log(payload);
        if (this.formValue.strategy_segmented.value === true) {
            // tslint:disable-next-line:max-line-length
            const size = (400 / this.btcPrice).toFixed(8);
            // console.log(payload, size)
            this.actionService.setStrategiesSplitted(payload, size).subscribe((resp) => {
                if (resp) {
                    this.close();
                    this.actionService.getBtcBalance().subscribe();
                    this.alertService.addMessage('success', resp.success);
                }
            }, (error) => {
                this.close();
                this.alertService.addMessage('danger', error.error);
            });
        }
        else {
            this.actionService.setStrategies(payload).subscribe((resp) => {
                if (resp) {
                    this.close();
                    this.actionService.getBtcBalance().subscribe();
                    this.alertService.addMessage('success', resp.success);
                }
            }, (error) => {
                this.close();
                this.alertService.addMessage('danger', error.error);
            });
        }
    }
    editStrategy() {
        this.openConfirmModal();
    }
    openConfirmModal() {
        if (this.checkSizeAltcoin()) {
            this.confirmModal.show('modal-lg');
        }
        else {
            this.alertService.addMessage('danger', 'Quantità inserite nell ordine errate!! Controlla il tuo ordine!!');
        }
    }
    close() {
        this.confirmModal.dismiss();
    }
    addFees(value) {
        // console.log(value);
        const taxed = value + ((value / 100) * 0.1);
        // console.log('value taxed', taxed);
        this.formValue.strategy_capital_taxed.setValue(taxed);
    }
    get formValue() {
        return this.strategiesForm.controls;
    }
}
StrategiesComponent.ɵfac = function StrategiesComponent_Factory(t) { return new (t || StrategiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_action_service__WEBPACK_IMPORTED_MODULE_6__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"])); };
StrategiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StrategiesComponent, selectors: [["strategies-component"]], viewQuery: function StrategiesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confirmModal = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])], decls: 88, vars: 37, consts: [[1, "sub-header"], [1, "row"], [1, "col-sm-2"], ["for", "single-order"], ["value", "single", "type", "radio", "id", "single-order", 3, "ngModel", "ngModelChange"], [1, "col-sm-3"], ["for", "multiple-order"], ["type", "radio", "value", "multi", "id", "multiple-order", 3, "ngModel", "ngModelChange"], [1, "col-sm-7"], [1, "strategies-container"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "col-sm-8"], ["class", "col-sm-3 form-group", 4, "ngIf"], ["class", "col-sm-9 form-group", 4, "ngIf"], [1, "col-sm-3", "form-group"], ["for", "select-pairs"], [1, "col-sm-9", "form-group"], ["formControlName", "strategy_pairs", "id", "select-pairs", 1, "form-control", 3, "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "btc-capital"], ["formControlName", "strategy_capitalType", "type", "radio", "value", "btc", "id", "btc-capital", 3, "ngModel", "ngModelChange"], ["for", "other-capital", 4, "ngIf"], ["for", "buy-price"], ["formControlName", "strategy_capital", "type", "number", "id", "capital", 1, "form-control", "inputStr"], ["for", "cutOrder", "class", "mt-3", 4, "ngIf"], ["class", "p-2 alert-danger  mt-1", "style", "border-radius: 6px", 4, "ngIf"], ["class", "col-sm-9 form-group custom-slider", 4, "ngIf"], [1, "btn", "start-btn", "float-right", 3, "disabled"], [1, "col-sm-4"], ["confirmModal", ""], [1, "app-modal-header"], [1, "app-modal-body", "text-center"], [4, "ngIf"], ["data-dismiss", "modal", 1, "btn", "btn-danger", "float-left", 3, "click"], ["data-dismiss", "modal", 1, "btn", "start-btn", "float-right", 3, "click"], ["for", "strategy-name"], ["formControlName", "strategy_name", "type", "text", "id", "strategy-name", 1, "form-control", 3, "blur"], [3, "value"], ["for", "select-jumps"], ["type", "number", "formControlName", "strategy_jumps", "id", "select-jumps", 1, "form-control", "inputStr"], ["for", "other-capital"], ["formControlName", "strategy_capitalType", "type", "radio", "id", "other-capital", 3, "value", "ngModel", "ngModelChange"], ["for", "cutOrder", 1, "mt-3"], ["id", "cutOrder", "type", "checkbox", "formControlName", "strategy_segmented", 1, ""], [1, "p-2", "alert-danger", "mt-1", 2, "border-radius", "6px"], ["for", "cyclic-order"], ["formControlName", "strategy_orderType", "type", "radio", "value", "cyclic", "id", "cyclic-order", 3, "ngModel", "ngModelChange"], ["for", "single-order", 4, "ngIf"], ["formControlName", "strategy_orderType", "type", "radio", "value", "single", "id", "one-order", 3, "ngModel", "ngModelChange"], ["formControlName", "strategy_buy_price", "type", "number", "id", "buy-price", 1, "form-control", "inputStr"], ["for", "sell-price"], ["formControlName", "strategy_sell_price", "type", "number", "id", "sell-price", 1, "form-control", "inputStr"], ["for", "direction"], ["formControlName", "strategy_direction", "type", "number", "id", "direction", 1, "form-control", "inputStr"], ["value", "up"], ["value", "down"], [1, "col-sm-9", "form-group", "custom-slider"], ["formControlName", "strategy_size", 3, "options"]], template: function StrategiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Strategie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StrategiesComponent_Template_input_ngModelChange_5_listener($event) { return ctx.strategyType = $event; })("ngModelChange", function StrategiesComponent_Template_input_ngModelChange_5_listener() { return ctx.manageValidators(ctx.strategyType); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Ordine singolo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StrategiesComponent_Template_input_ngModelChange_9_listener($event) { return ctx.strategyType = $event; })("ngModelChange", function StrategiesComponent_Template_input_ngModelChange_9_listener() { return ctx.manageValidators(ctx.strategyType); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ordine multiplo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StrategiesComponent_Template_form_ngSubmit_13_listener() { return ctx.openConfirmModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, StrategiesComponent_div_17_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, StrategiesComponent_div_18_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Seleziona scambio: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StrategiesComponent_Template_select_ngModelChange_25_listener() { return ctx.loadPrices(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, StrategiesComponent_option_27_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, StrategiesComponent_div_28_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, StrategiesComponent_div_29_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Seleziona Capitale:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StrategiesComponent_Template_input_ngModelChange_35_listener($event) { return ctx.capitalType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " BTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, StrategiesComponent_label_38_Template, 3, 5, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "(tasse escluse)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, StrategiesComponent_label_46_Template, 3, 0, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, StrategiesComponent_div_47_Template, 2, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, StrategiesComponent_div_48_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, StrategiesComponent_div_49_Template, 6, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, StrategiesComponent_div_50_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, StrategiesComponent_div_51_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, StrategiesComponent_div_52_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, StrategiesComponent_div_53_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, StrategiesComponent_div_54_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, StrategiesComponent_div_55_Template, 6, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, StrategiesComponent_div_56_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, StrategiesComponent_div_57_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "AVVIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "modal", null, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Conferma azione");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, StrategiesComponent_p_76_Template, 3, 4, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, StrategiesComponent_span_79_Template, 2, 0, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, StrategiesComponent_p_80_Template, 2, 1, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, StrategiesComponent_p_81_Template, 2, 1, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "CONFERMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StrategiesComponent_Template_button_click_84_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "DECLINA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StrategiesComponent_Template_button_click_86_listener() { return ctx.strategyType === "single" ? ctx.initializeStrategy() : ctx.initializeStrategies(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "CONFERMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.strategyType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.strategyType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.strategiesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(N\u00B0 ", ctx.strLength, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pairs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.capitalType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isBtcCapital);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Capitale ", ctx.capitalType != "btc" ? ctx.capitalType.toUpperCase().replace("BTC", "") : "BTC", ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkSizeOrder(ctx.capitalType) && ctx.role === "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkInvestedCapital(ctx.capitalType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderType === "cyclic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderType === "cyclic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.strategiesForm.invalid || ctx.isStrPresent || ctx.checkInvestedCapital(ctx.capitalType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Stai inizializzando \"", ctx.strategyType === "single" ? ctx.formValue.strategy_name.value : "un ordine Multiplo", "\" con i seguenti settaggi:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Scambio: ", ctx.formValue.strategy_pairs.value, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Prezzo di compera: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](75, 34, ctx.formValue.strategy_buy_price.value, "1.1-8"), " BTC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Capitale: ", ctx.formValue.strategy_capital.value, " ", ctx.capitalType === "btc" ? ctx.capitalType.toUpperCase() : ctx.capitalType.replace("BTC", "").toUpperCase(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_9__["ɵa"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".strategies-container[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  \n  \n}\n.strategies-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .strategies-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.strategies-container[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.custom-slider[_ngcontent-%COMP%]   .ngx-slider.ngx-slider-pointer[_ngcontent-%COMP%] {\n  width: 22px !important;\n  height: 22px !important;\n  background-color: #183153 !important;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2hvbWUvc3RyYXRlZ2llcy9zdHJhdGVnaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvc3RyYXRlZ2llcy9zdHJhdGVnaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBR0UsZ0JBQUE7RUFLQSxnQ0FBQTtFQVFBLFlBQUE7QUNiRjtBRE1FOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQ0pKO0FEU0U7RUFDRSwwQkFBQTtBQ1BKO0FEZ0JJO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQ2JOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL3N0cmF0ZWdpZXMvc3RyYXRlZ2llcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnN0cmF0ZWdpZXMtY29udGFpbmVyIHtcblxuICAvL21heC13aWR0aDogNjAlO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICAvLy5kYXJre1xuXG4gIC8vfVxuXG4gIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xuICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuXG4gIC8qIEZpcmVmb3ggKi9cbiAgaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgfVxuXG5cblxuXG59XG4uY3VzdG9tLXNsaWRlcntcbiAgLm5neC1zbGlkZXJ7XG4gICAgJi5uZ3gtc2xpZGVyLXBvaW50ZXJ7XG4gICAgICB3aWR0aDogMjJweCAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzMTUzICFpbXBvcnRhbnQ7XG4gICAgICBvcGFjaXR5OjAuODtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG4iLCIuc3RyYXRlZ2llcy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICAvKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cbiAgLyogRmlyZWZveCAqL1xufVxuLnN0cmF0ZWdpZXMtY29udGFpbmVyIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuLnN0cmF0ZWdpZXMtY29udGFpbmVyIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4uc3RyYXRlZ2llcy1jb250YWluZXIgaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5jdXN0b20tc2xpZGVyIC5uZ3gtc2xpZGVyLm5neC1zbGlkZXItcG9pbnRlciB7XG4gIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzMTUzICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuODtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StrategiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'strategies-component',
                templateUrl: './strategies.component.html',
                styleUrls: ['./strategies.component.scss'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _core_services_action_service__WEBPACK_IMPORTED_MODULE_6__["ActionService"] }, { type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }]; }, { confirmModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['confirmModal']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/home/vault/vault.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/home/vault/vault.component.ts ***!
  \*******************************************************/
/*! exports provided: VaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultComponent", function() { return VaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_action_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/action.service */ "./src/app/core/services/action.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function VaultComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.pair);
} }
function VaultComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VaultComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " AVVIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VaultComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Credito insufficente per investire !!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VaultComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaultComponent_tr_49_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const d_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.removePair(d_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancella");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r6.pair);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r6.initial_qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r6.updated_qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r6.tmpMoney);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r6.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", d_r6.increment, "%");
} }
class VaultComponent {
    constructor(authService, fb, actionService) {
        this.authService = authService;
        this.fb = fb;
        this.actionService = actionService;
        this.isAccepted = false;
        this.savedData = [];
        this.vaultForm = this.fb.group({
            vault_pair: ['BTC'],
            vault_ex: ['USDT'],
            vault_timeframe: ['D'],
            vault_quantity: [0]
        });
    }
    ngOnInit() {
        // this.returnMACD(this.formValue.vault_pair.value, this.formValue.vault_ex.value);
        this.availablePairs();
        this.reload = setInterval(() => {
            this.callMACD();
        }, 10000);
        // this.showChart('BTC');
        // this.checkedPair('BTC');
    }
    checkedPair(pair, ex, tf) {
        this.showChart(pair, ex, tf);
        // TODO calculate value $ and show msg if not ok otherwise show input
        this.actionService.getMoneyPrice(pair, ex).subscribe(resp => {
            // @ts-ignore
            const price = parseFloat(Object.values(resp.price)[0]);
            // check min available 10$
            let qty = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.allPairs, (o) => {
                return o.pair === pair;
            });
            qty = parseFloat(qty[0].available);
            const btcP = this.actionService.priceBtc;
            // @ts-ignore
            const totVal = (price * qty);
            const min = ex === 'USDT' ? 10 : 10 / btcP;
            // console.log(totValDollar, 'min', min)
            if (totVal > min) {
                this.isAccepted = true;
                this.formValue.vault_quantity.setValue(qty);
            }
            else {
                this.isAccepted = false;
                this.formValue.vault_quantity.setValue(0);
            }
        });
    }
    availablePairs() {
        this.actionService.getAllBalances().subscribe(resp => {
            // console.log(resp)
            this.allPairs = resp;
            this.checkedPair('BTC', 'USDT', 'D');
            this.actionService.getBtcPrice().subscribe();
            this.savedData = JSON.parse(localStorage.getItem('vaultData')) === null ? [] : JSON.parse(localStorage.getItem('vaultData'));
        });
    }
    returnMACD(pair) {
        this.actionService.getMACD(pair, '1d').subscribe(resp => {
            // console.log(resp);
            this.macdValue = lodash__WEBPACK_IMPORTED_MODULE_1__["last"](resp);
            //    console.log(this.macdValue);
        });
    }
    showChart(pair, ex, tf) {
        new TradingView.widget({
            autosize: true,
            symbol: 'BINANCE:' + pair + ex,
            interval: tf,
            timezone: 'Etc/UTC',
            theme: 'dark',
            style: '1',
            locale: 'it',
            toolbar_bg: '#f1f3f6',
            enable_publishing: false,
            allow_symbol_change: true,
            studies: [
                'MACD@tv-basicstudies'
            ],
            container_id: 'mappa'
        });
    }
    get formValue() {
        return this.vaultForm.controls;
    }
    setData() {
        this.savedData.push({
            id: this.savedData.length + 1,
            initial_qty: this.formValue.vault_quantity.value,
            pair: this.formValue.vault_pair.value + this.formValue.vault_ex.value,
            timeframe: this.formValue.vault_timeframe.value,
            status: true,
            tmpMoney: 0,
            updated_qty: this.formValue.vault_quantity.value,
            increment: 0
        });
        localStorage.setItem('vaultData', JSON.stringify(this.savedData));
        // console.log('appena salvato', this.savedData)
    }
    removePair(id) {
        this.savedData = lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.savedData, (n) => {
            return n.id !== id;
        });
    }
    callMACD() {
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.savedData, (d) => {
            this.returnMACD(d.pair);
            // console.log(this.macdValue);
        });
    }
}
VaultComponent.ɵfac = function VaultComponent_Factory(t) { return new (t || VaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_action_service__WEBPACK_IMPORTED_MODULE_4__["ActionService"])); };
VaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VaultComponent, selectors: [["vault-component"]], decls: 50, vars: 6, consts: [[1, "sub-header"], [1, "h1"], [1, "row"], [1, "col-sm-12", "mb-2", "mt-2"], ["novalidate", "", 1, "container", 3, "formGroup", "ngSubmit"], [1, "form-group", "d-inline-flex"], ["for", "pair"], ["formControlName", "vault_pair", "id", "pair", 1, "ml-3", "form-control", "inputStr", 3, "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "ml-2", "mr-2", 2, "font-size", "30px"], ["formControlName", "vault_ex", 1, "form-control", "inputStr", 3, "ngModelChange"], ["value", "BTC"], ["value", "USDT"], ["for", "tf", 1, "ml-2", "mr-2"], ["id", "tf", "formControlName", "vault_timeframe", 1, "form-control", "inputStr", 3, "ngModelChange"], ["value", "60"], ["value", "240"], ["value", "D"], ["class", "ml-5 form-group d-inline-flex", 4, "ngIf"], [1, "col-sm-12"], [1, "container", "tradingview-widget-container"], ["id", "mappa", 2, "height", "500px"], [1, "col-sm-12", "mt-5"], [1, "table", 2, "color", "white"], [1, "ml-5", "form-group", "d-inline-flex"], ["for", "qty"], ["formControlName", "vault_quantity", "type", "number", "id", "qty", 1, "form-control", "inputStr", "ml-5"], [1, "btn", "start-btn", "float-right"], [1, "btn", "btn-danger", 3, "click"]], template: function VaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Vault ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function VaultComponent_Template_form_ngSubmit_5_listener() { return ctx.setData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Moneta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VaultComponent_Template_select_ngModelChange_9_listener() { return ctx.checkedPair(ctx.formValue.vault_pair.value, ctx.formValue.vault_ex.value, ctx.formValue.vault_timeframe.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VaultComponent_option_10_Template, 2, 1, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VaultComponent_Template_select_ngModelChange_13_listener() { return ctx.checkedPair(ctx.formValue.vault_pair.value, ctx.formValue.vault_ex.value, ctx.formValue.vault_timeframe.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "BTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "USDT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " TimeFrame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VaultComponent_Template_select_ngModelChange_20_listener() { return ctx.checkedPair(ctx.formValue.vault_pair.value, ctx.formValue.vault_ex.value, ctx.formValue.vault_timeframe.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "1h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "4h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, VaultComponent_div_27_Template, 4, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, VaultComponent_div_28_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, VaultComponent_div_29_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Moneta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Initial qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Updated qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Money tmp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Increment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, VaultComponent_tr_49_Template, 16, 6, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.vaultForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allPairs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAccepted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAccepted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAccepted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.savedData);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: [".invested[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  line-height: 200px;\n  background: none;\n  margin: 0 auto;\n  box-shadow: none;\n  position: relative;\n}\n.invested[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 12px solid #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.invested[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n}\n.invested[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%] {\n  left: 0;\n}\n.invested[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: none;\n  border-width: 12px;\n  border-style: solid;\n  position: absolute;\n  top: 0;\n}\n.invested[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  left: 100%;\n  border-top-right-radius: 100px;\n  border-bottom-right-radius: 100px;\n  border-left: 0;\n  transform-origin: center left;\n}\n.invested[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%] {\n  right: 0;\n}\n.invested[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  left: -100%;\n  border-top-left-radius: 100px;\n  border-bottom-left-radius: 100px;\n  border-right: 0;\n  transform-origin: center right;\n  -webkit-animation: loading-1 1.8s linear forwards;\n          animation: loading-1 1.8s linear forwards;\n}\n.invested[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 90%;\n  border-radius: 50%;\n  background: transparent;\n  font-size: 18px;\n  color: #ddd;\n  text-align: center;\n  position: absolute;\n  top: 5%;\n  left: 5%;\n}\n.invested[_ngcontent-%COMP%]   .progress.blue[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  border-color: green;\n}\n.invested[_ngcontent-%COMP%]   .progress.blue[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  -webkit-animation: loading-1 1.5s linear forwards 1.8s;\n          animation: loading-1 1.5s linear forwards 1.8s;\n}\n@-webkit-keyframes loading-1 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n}\n@keyframes loading-1 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n}\n@-webkit-keyframes loading-2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(144deg);\n  }\n}\n@keyframes loading-2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(144deg);\n  }\n}\n@-webkit-keyframes loading-3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(90deg);\n  }\n}\n@keyframes loading-3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(90deg);\n  }\n}\n@-webkit-keyframes loading-4 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(36deg);\n  }\n}\n@keyframes loading-4 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(36deg);\n  }\n}\n@-webkit-keyframes loading-5 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(126deg);\n  }\n}\n@keyframes loading-5 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(126deg);\n  }\n}\n@media only screen and (max-width: 990px) {\n  .invested[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2hvbWUvdmF1bHQvdmF1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS92YXVsdC92YXVsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREo7QURHRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDREo7QURHRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDREo7QURHRTtFQUNFLE9BQUE7QUNESjtBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7QUNESjtBREdFO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBRUEsNkJBQUE7QUNESjtBREdFO0VBQ0UsUUFBQTtBQ0RKO0FER0U7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFFQSw4QkFBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7QUNESjtBREdFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNGSjtBRElFO0VBQ0UsbUJBQUE7QUNGSjtBRElFO0VBQ0Usc0RBQUE7VUFBQSw4Q0FBQTtBQ0ZKO0FEVUU7RUFDRTtJQUVFLHVCQUFBO0VDUko7RURVRTtJQUVFLHlCQUFBO0VDUko7QUFDRjtBREFFO0VBQ0U7SUFFRSx1QkFBQTtFQ1JKO0VEVUU7SUFFRSx5QkFBQTtFQ1JKO0FBQ0Y7QURVRTtFQUNFO0lBRUUsdUJBQUE7RUNSSjtFRFVFO0lBRUUseUJBQUE7RUNSSjtBQUNGO0FEQUU7RUFDRTtJQUVFLHVCQUFBO0VDUko7RURVRTtJQUVFLHlCQUFBO0VDUko7QUFDRjtBRFVFO0VBQ0U7SUFFRSx1QkFBQTtFQ1JKO0VEVUU7SUFFRSx3QkFBQTtFQ1JKO0FBQ0Y7QURBRTtFQUNFO0lBRUUsdUJBQUE7RUNSSjtFRFVFO0lBRUUsd0JBQUE7RUNSSjtBQUNGO0FEVUU7RUFDRTtJQUVFLHVCQUFBO0VDUko7RURVRTtJQUVFLHdCQUFBO0VDUko7QUFDRjtBREFFO0VBQ0U7SUFFRSx1QkFBQTtFQ1JKO0VEVUU7SUFFRSx3QkFBQTtFQ1JKO0FBQ0Y7QURVRTtFQUNFO0lBRUUsdUJBQUE7RUNSSjtFRFVFO0lBRUUseUJBQUE7RUNSSjtBQUNGO0FEQUU7RUFDRTtJQUVFLHVCQUFBO0VDUko7RURVRTtJQUVFLHlCQUFBO0VDUko7QUFDRjtBRFVFO0VBQ0U7SUFBVyxtQkFBQTtFQ1BiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvdmF1bHQvdmF1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbnZlc3RlZHtcbiAgLnByb2dyZXNze1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5wcm9ncmVzczphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxMnB4IHNvbGlkICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIC5wcm9ncmVzcyA+IHNwYW57XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgLnByb2dyZXNzIC5wcm9ncmVzcy1sZWZ0e1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgLnByb2dyZXNzIC5wcm9ncmVzcy1iYXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyLXdpZHRoOiAxMnB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgfVxuICAucHJvZ3Jlc3MgLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhcntcbiAgICBsZWZ0OiAxMDAlO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgbGVmdDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgbGVmdDtcbiAgfVxuICAucHJvZ3Jlc3MgLnByb2dyZXNzLXJpZ2h0e1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIC5wcm9ncmVzcyAucHJvZ3Jlc3MtcmlnaHQgLnByb2dyZXNzLWJhcntcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xuICAgIGFuaW1hdGlvbjogbG9hZGluZy0xIDEuOHMgbGluZWFyIGZvcndhcmRzO1xuICB9XG4gIC5wcm9ncmVzcyAucHJvZ3Jlc3MtdmFsdWV7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZGRkO1xuICAgIC8vbGluZS1oZWlnaHQ6IDEzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1JTtcbiAgICBsZWZ0OiA1JTtcbiAgfVxuICAucHJvZ3Jlc3MuYmx1ZSAucHJvZ3Jlc3MtYmFye1xuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gIH1cbiAgLnByb2dyZXNzLmJsdWUgLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhcntcbiAgICBhbmltYXRpb246IGxvYWRpbmctMSAxLjVzIGxpbmVhciBmb3J3YXJkcyAxLjhzO1xuICB9XG5cblxuXG5cblxuXG4gIEBrZXlmcmFtZXMgbG9hZGluZy0xe1xuICAgIDAle1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBsb2FkaW5nLTJ7XG4gICAgMCV7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE0NGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDRkZWcpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGxvYWRpbmctM3tcbiAgICAwJXtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGxvYWRpbmctNHtcbiAgICAwJXtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGxvYWRpbmctNXtcbiAgICAwJXtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTI2ZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEyNmRlZyk7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpe1xuICAgIC5wcm9ncmVzc3sgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICB9XG5cbn1cbiIsIi5pbnZlc3RlZCAucHJvZ3Jlc3Mge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbnZlc3RlZCAucHJvZ3Jlc3M6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMTJweCBzb2xpZCAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5pbnZlc3RlZCAucHJvZ3Jlc3MgPiBzcGFuIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbi5pbnZlc3RlZCAucHJvZ3Jlc3MgLnByb2dyZXNzLWxlZnQge1xuICBsZWZ0OiAwO1xufVxuLmludmVzdGVkIC5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXdpZHRoOiAxMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cbi5pbnZlc3RlZCAucHJvZ3Jlc3MgLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhciB7XG4gIGxlZnQ6IDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXItbGVmdDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgbGVmdDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XG59XG4uaW52ZXN0ZWQgLnByb2dyZXNzIC5wcm9ncmVzcy1yaWdodCB7XG4gIHJpZ2h0OiAwO1xufVxuLmludmVzdGVkIC5wcm9ncmVzcyAucHJvZ3Jlc3MtcmlnaHQgLnByb2dyZXNzLWJhciB7XG4gIGxlZnQ6IC0xMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwcHg7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLTEgMS44cyBsaW5lYXIgZm9yd2FyZHM7XG59XG4uaW52ZXN0ZWQgLnByb2dyZXNzIC5wcm9ncmVzcy12YWx1ZSB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZGRkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1JTtcbiAgbGVmdDogNSU7XG59XG4uaW52ZXN0ZWQgLnByb2dyZXNzLmJsdWUgLnByb2dyZXNzLWJhciB7XG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XG59XG4uaW52ZXN0ZWQgLnByb2dyZXNzLmJsdWUgLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhciB7XG4gIGFuaW1hdGlvbjogbG9hZGluZy0xIDEuNXMgbGluZWFyIGZvcndhcmRzIDEuOHM7XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmctMSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmctMiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTQ0ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDRkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmctMyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkaW5nLTQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZGluZy01IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjZkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEyNmRlZyk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgLmludmVzdGVkIC5wcm9ncmVzcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vault-component',
                templateUrl: './vault.component.html',
                styleUrls: ['./vault.component.scss'],
            }]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _core_services_action_service__WEBPACK_IMPORTED_MODULE_4__["ActionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/Utils.ts":
/*!*********************************!*\
  !*** ./src/app/shared/Utils.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
class Utils {
    static getList() {
        return [
            { pair: 'BNBBTC' },
            { pair: 'APEBTC' },
            { pair: 'NULSBTC' },
            { pair: 'NEOBTC' },
            { pair: 'LINKBTC' },
            { pair: 'IOTABTC' },
            { pair: 'ETCBTC' },
            { pair: 'KNCBTC' },
            { pair: 'WTCBTC' },
            { pair: 'SNGLSBTC' },
            { pair: 'GASBTC' },
            { pair: 'GALABTC' },
            { pair: 'SNMBTC' },
            { pair: 'BQXBTC' },
            { pair: 'QTUMBTC' },
            { pair: 'LTCBTC' },
            { pair: 'ETHBTC' },
            { pair: 'ZRXBTC' },
            { pair: 'OMGBTC' },
            { pair: '1INCHBTC' },
            { pair: 'AAVEBTC' },
            { pair: 'ACMBTC' },
            { pair: 'ADABTC' },
            { pair: 'ADXBTC' },
            { pair: 'AERGOBTC' },
            { pair: 'AIONBTC' },
            { pair: 'AKROBTC' },
            { pair: 'ALGOBTC' },
            { pair: 'ALICEBTC' },
            { pair: 'ALPHABTC' },
            { pair: 'AMBBTC' },
            { pair: 'AMPBTC' },
            { pair: 'ANKRBTC' },
            { pair: 'APPCBTC' },
            { pair: 'ARBTC' },
            { pair: 'ARDRBTC' },
            { pair: 'ARKBTC' },
            { pair: 'ARPABTC' },
            { pair: 'ASRBTC' },
            { pair: 'ASTBTC' },
            { pair: 'ATABTC' },
            { pair: 'ATMBTC' },
            { pair: 'ATOMBTC' },
            { pair: 'AUCTIONBTC' },
            { pair: 'AUDIOBTC' },
            { pair: 'AUTOBTC' },
            { pair: 'AVABTC' },
            { pair: 'AVAXBTC' },
            { pair: 'AXSBTC' },
            { pair: 'BADGERBTC' },
            { pair: 'BAKEBTC' },
            { pair: 'BANDBTC' },
            { pair: 'BARBTC' },
            { pair: 'BATBTC' },
            { pair: 'BCDBTC' },
            { pair: 'BCHBTC' },
            { pair: 'BEAMBTC' },
            { pair: 'BELBTC' },
            { pair: 'BLZBTC' },
            { pair: 'BNTBTC' },
            { pair: 'BRDBTC' },
            { pair: 'BTCSTBTC' },
            { pair: 'BTGBTC' },
            { pair: 'BTSBTC' },
            { pair: 'BZRXBTC' },
            { pair: 'CAKEBTC' },
            { pair: 'CDTBTC' },
            { pair: 'CELOBTC' },
            { pair: 'CELRBTC' },
            { pair: 'CFXBTC' },
            { pair: 'CHRBTC' },
            { pair: 'CHZBTC' },
            { pair: 'CKBBTC' },
            { pair: 'CNDBTC' },
            { pair: 'COMPBTC' },
            { pair: 'COSBTC' },
            { pair: 'COTIBTC' },
            { pair: 'CRVBTC' },
            { pair: 'CTKBTC' },
            { pair: 'CTSIBTC' },
            { pair: 'CTXCBTC' },
            { pair: 'CVCBTC' },
            { pair: 'DASHBTC' },
            { pair: 'DATABTC' },
            { pair: 'DCRBTC' },
            { pair: 'DEGOBTC' },
            { pair: 'DIABTC' },
            { pair: 'DLTBTC' },
            { pair: 'DNTBTC' },
            { pair: 'DOCKBTC' },
            { pair: 'DODOBTC' },
            { pair: 'DOGEBTC' },
            { pair: 'DOTBTC' },
            { pair: 'DREPBTC' },
            { pair: 'DUSKBTC' },
            { pair: 'EGLDBTC' },
            { pair: 'ELFBTC' },
            { pair: 'ENJBTC' },
            { pair: 'EOSBTC' },
            { pair: 'EPSBTC' },
            { pair: 'EVXBTC' },
            { pair: 'EZBTC' },
            { pair: 'FETBTC' },
            { pair: 'FILBTC' },
            { pair: 'FIOBTC' },
            { pair: 'FIROBTC' },
            { pair: 'FISBTC' },
            { pair: 'FLMBTC' },
            { pair: 'FORBTC' },
            { pair: 'FORTHBTC' },
            { pair: 'FRONTBTC' },
            { pair: 'FTMBTC' },
            { pair: 'FTTBTC' },
            { pair: 'FUNBTC' },
            { pair: 'FXSBTC' },
            { pair: 'GLMBTC' },
            { pair: 'GOBTC' },
            { pair: 'GRSBTC' },
            { pair: 'GRTBTC' },
            { pair: 'GTCBTC' },
            { pair: 'GTOBTC' },
            { pair: 'GVTBTC' },
            { pair: 'GXSBTC' },
            { pair: 'HARDBTC' },
            { pair: 'HBARBTC' },
            { pair: 'HIVEBTC' },
            { pair: 'HNTBTC' },
            { pair: 'ICPBTC' },
            { pair: 'ICXBTC' },
            { pair: 'IDEXBTC' },
            { pair: 'INJBTC' },
            { pair: 'IOSTBTC' },
            { pair: 'IOTXBTC' },
            { pair: 'IRISBTC' },
            { pair: 'JSTBTC' },
            { pair: 'JASMYBTC' },
            { pair: 'JUVBTC' },
            { pair: 'KAVABTC' },
            { pair: 'KEEPBTC' },
            { pair: 'KLAYBTC' },
            { pair: 'KMDBTC' },
            { pair: 'LINABTC' },
            { pair: 'LITBTC' },
            { pair: 'LOOMBTC' },
            { pair: 'LPTBTC' },
            { pair: 'LRCBTC' },
            { pair: 'LSKBTC' },
            { pair: 'LTOBTC' },
            { pair: 'LUNABTC' },
            { pair: 'MANABTC' },
            { pair: 'MATICBTC' },
            { pair: 'MDABTC' },
            { pair: 'MDTBTC' },
            { pair: 'MDXBTC' },
            { pair: 'MIRBTC' },
            { pair: 'MITHBTC' },
            { pair: 'MKRBTC' },
            { pair: 'MTHBTC' },
            { pair: 'MTLBTC' },
            { pair: 'NANOBTC' },
            { pair: 'NASBTC' },
            { pair: 'NAVBTC' },
            { pair: 'NBSBTC' },
            { pair: 'NEARBTC' },
            { pair: 'NEBLBTC' },
            { pair: 'NKNBTC' },
            { pair: 'NMRBTC' },
            { pair: 'NUBTC' },
            { pair: 'NXSBTC' },
            { pair: 'OAXBTC' },
            { pair: 'OCEANBTC' },
            { pair: 'OGBTC' },
            { pair: 'OGNBTC' },
            { pair: 'OMBTC' },
            { pair: 'ONEBTC' },
            { pair: 'ONGBTC' },
            { pair: 'ONTBTC' },
            { pair: 'ORNBTC' },
            { pair: 'OXTBTC' },
            { pair: 'QIBTC' },
            { pair: 'PAXGBTC' },
            { pair: 'PERLBTC' },
            { pair: 'PERPBTC' },
            { pair: 'PHABTC' },
            { pair: 'PHBBTC' },
            { pair: 'PIVXBTC' },
            { pair: 'PNTBTC' },
            { pair: 'POABTC' },
            { pair: 'POLSBTC' },
            { pair: 'POLYBTC' },
            { pair: 'PONDBTC' },
            { pair: 'POWRBTC' },
            { pair: 'PPTBTC' },
            { pair: 'PSGBTC' },
            { pair: 'QKCBTC' },
            { pair: 'QLCBTC' },
            { pair: 'QSPBTC' },
            { pair: 'RAMPBTC' },
            { pair: 'RCNBTC' },
            { pair: 'RDNBTC' },
            { pair: 'REEFBTC' },
            { pair: 'RENBTC' },
            { pair: 'RENBTCBTC' },
            { pair: 'REPBTC' },
            { pair: 'REQBTC' },
            { pair: 'RIFBTC' },
            { pair: 'RLCBTC' },
            { pair: 'ROSEBTC' },
            { pair: 'RSRBTC' },
            { pair: 'RUNEBTC' },
            { pair: 'RVNBTC' },
            { pair: 'SANDBTC' },
            { pair: 'SCBTC' },
            { pair: 'SCRTBTC' },
            { pair: 'SFPBTC' },
            { pair: 'SKLBTC' },
            { pair: 'SKYBTC' },
            { pair: 'SNTBTC' },
            { pair: 'SNXBTC' },
            { pair: 'SOLBTC' },
            { pair: 'SPELLBTC' },
            { pair: 'SRMBTC' },
            { pair: 'STEEMBTC' },
            { pair: 'STMXBTC' },
            { pair: 'STORJBTC' },
            { pair: 'STPTBTC' },
            { pair: 'STRAXBTC' },
            { pair: 'STXBTC' },
            { pair: 'SUPERBTC' },
            { pair: 'SUSDBTC' },
            { pair: 'SUSHIBTC' },
            { pair: 'SXPBTC' },
            { pair: 'SYSBTC' },
            { pair: 'TCTBTC' },
            { pair: 'TFUELBTC' },
            { pair: 'THETABTC' },
            { pair: 'TKOBTC' },
            { pair: 'TLMBTC' },
            { pair: 'TOMOBTC' },
            { pair: 'TORNBTC' },
            { pair: 'TRBBTC' },
            { pair: 'TROYBTC' },
            { pair: 'TRUBTC' },
            { pair: 'TRXBTC' },
            { pair: 'TVKBTC' },
            { pair: 'TWTBTC' },
            { pair: 'UMABTC' },
            { pair: 'UNFIBTC' },
            { pair: 'UNIBTC' },
            { pair: 'UTKBTC' },
            { pair: 'VETBTC' },
            { pair: 'VIABTC' },
            { pair: 'VIBBTC' },
            { pair: 'VIDTBTC' },
            { pair: 'VITEBTC' },
            { pair: 'WABIBTC' },
            { pair: 'WANBTC' },
            { pair: 'WAVESBTC' },
            { pair: 'WBTCBTC' },
            { pair: 'WINGBTC' },
            { pair: 'WNXMBTC' },
            { pair: 'WPRBTC' },
            { pair: 'WRXBTC' },
            { pair: 'XEMBTC' },
            { pair: 'XLMBTC' },
            { pair: 'XMRBTC' },
            { pair: 'XRPBTC' },
            { pair: 'XTZBTC' },
            { pair: 'XVGBTC' },
            { pair: 'XVSBTC' },
            { pair: 'YFIBTC' },
            { pair: 'YFIIBTC' },
            { pair: 'YOYOBTC' },
            { pair: 'ZECBTC' },
            { pair: 'ZENBTC' },
            { pair: 'ZILBTC' },
            { pair: 'DGBBTC' },
            { pair: 'BALBTC' },
            { pair: 'ANTBTC' },
            { pair: 'KSMBTC' },
            { pair: 'AGIXBTC' }
        ];
    }
}


/***/ }),

/***/ "./src/app/shared/alert/alert.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/shared/alert/alert.service.ts");



const _c0 = ["alertContainer"];
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.close = (currentAlert) => {
            $(currentAlert).alert('close');
        };
    }
    ngOnInit() {
        this.alertService.getMessage().subscribe(alert => {
            const currentAlert = $(`<div class="alert alert-${alert.type} alert-dismissible fade" role="alert">${alert.message}<button type="button" class="close" data-dismiss="alert" ><span aria-hidden="true">&times;</span></button></div>`);
            $(this.el.nativeElement).append(currentAlert);
            setTimeout(() => {
                currentAlert.addClass('show');
            });
            setTimeout(() => {
                $(currentAlert).alert('close');
            }, 15000);
        });
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], viewQuery: function AlertComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, decls: 2, vars: 0, consts: [["id", "alert_container", 1, "container"], ["alertContainer", ""]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alert',
                templateUrl: 'alert.component.html'
            }]
    }], function () { return [{ type: _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['alertContainer']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/alert/alert.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/alert/alert.service.ts ***!
  \***********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    addMessage(type, message) {
        this.subject.next({ type, message });
    }
    getMessage() {
        return this.subject.asObservable();
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/http-resources/api.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/http-resources/api.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: APIInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIInterceptor", function() { return APIInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





class APIInterceptor {
    constructor(_sanitazer) {
        this._sanitazer = _sanitazer;
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
    }
    intercept(req, next) {
        const escapeHtml = (unsafe) => {
            return unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
        };
        let apiReq = req.clone({ url: this.api + req.url });
        if (lodash__WEBPACK_IMPORTED_MODULE_2__["isString"](apiReq)) {
            // @ts-ignore
            apiReq = this._sanitazer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, escapeHtml(apiReq));
        }
        return next.handle(apiReq);
    }
}
APIInterceptor.ɵfac = function APIInterceptor_Factory(t) { return new (t || APIInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
APIInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: APIInterceptor, factory: APIInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](APIInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/http-resources/error.interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/http-resources/error.interceptor.ts ***!
  \************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alert/alert.service */ "./src/app/shared/alert/alert.service.ts");






class ErrorInterceptor {
    constructor(authService, alert) {
        this.authService = authService;
        this.alert = alert;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authService.logout();
            }
            const error = err.error;
            this.alert.addMessage('danger', error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/http-resources/token.interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/http-resources/token.interceptor.ts ***!
  \************************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TokenInterceptor {
    constructor() {
    }
    intercept(req, next) {
        const token = localStorage.getItem('token');
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(req);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/modal/modal.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modal/modal.component.ts ***!
  \*************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["myModal"];
const _c1 = [[["", 8, "app-modal-header"]], [["", 8, "app-modal-body"]], [["", 8, "app-modal-footer"]]];
const _c2 = [".app-modal-header", ".app-modal-body", ".app-modal-footer"];
// const $ = require('jquery');
class ModalComponent {
    constructor() {
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openedElement = null;
    }
    show(optClass, openItem = null) {
        // open modal using jQuery
        $(this.myModal.nativeElement).children().addClass(optClass ? optClass : 'modal-lg').end().modal({
            backdrop: 'static',
            keyboard: false
        });
    }
    isVisible() {
        return $(this.myModal.nativeElement).hasClass('show');
    }
    dismiss() {
        $(this.myModal.nativeElement).modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        this.closed.emit();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myModal = _t.first);
    } }, outputs: { closed: "closed" }, ngContentSelectors: _c2, decls: 13, vars: 0, consts: [["id", "myModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", 1, "modal", "fade", "ioboia"], ["myModal", ""], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", 1, "close", 3, "click"], ["data-dismiss", "modal", "aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_6_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](12, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'modal',
                templateUrl: 'modal.component.html',
            }]
    }], function () { return []; }, { myModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myModal']
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    local: true,
    // api: 'http://127.0.0.1:3000/'
    api: 'http://ec2-15-161-147-70.eu-south-1.compute.amazonaws.com:3000/'
    // api: 'http://ec2-15-160-2-192.eu-south-1.compute.amazonaws.com:3000/' andrea
    // api: 'http://ec2-35-152-51-18.eu-south-1.compute.amazonaws.com:3000/'multi
    // OLD ACCOUNT
    // api: 'http://ec2-15-160-2-188.eu-south-1.compute.amazonaws.com:3000/' --AndreaP
    // api: 'http://ec2-35-152-50-80.eu-south-1.compute.amazonaws.com:3000/' -- Mattia
    // api: 'http://ec2-35-152-99-6.eu-south-1.compute.amazonaws.com:3000/' -- LeoNardo Ancellotti
    // api: 'http://ec2-15-160-23-179.eu-south-1.compute.amazonaws.com:3000/' -- MarcoP
    // api: 'http://ec2-15-161-58-222.eu-south-1.compute.amazonaws.com:3000/' -- AnnalisaP
    // api: 'http://ec2-15-161-134-114.eu-south-1.compute.amazonaws.com:3000/' -- CapocciaMarco
    // api: 'http://ec2-15-161-146-7.eu-south-1.compute.amazonaws.com:3000/' -- AlessiaRoberti
    // api: 'http://ec2-35-152-51-132.eu-south-1.compute.amazonaws.com:3000/' -- DanieleRotella -50-127
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/isi/Documenti/project/cryptoDashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map