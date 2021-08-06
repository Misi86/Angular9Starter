function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modules_home_404_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modules/home/404/404.component */
    "./src/app/modules/home/404/404.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'auth',
      pathMatch: 'full'
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-authentication-authentication-module */
        "modules-authentication-authentication-module").then(__webpack_require__.bind(null,
        /*! ./modules/authentication/authentication.module */
        "./src/app/modules/authentication/authentication.module.ts")).then(function (m) {
          return m.AuthenticationModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./modules/home/home.module */
        "./src/app/modules/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      }
    }, {
      path: '**',
      component: _modules_home_404_404_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/alert/alert.component */
    "./src/app/shared/alert/alert.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'BTCBot';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "alert-wrapper", "alert-z-container"], [1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "alert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/services/auth.service */
    "./src/app/core/services/auth.service.ts");
    /* harmony import */


    var _shared_http_resources_api_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/http-resources/api.interceptor */
    "./src/app/shared/http-resources/api.interceptor.ts");
    /* harmony import */


    var _shared_http_resources_error_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/http-resources/error.interceptor */
    "./src/app/shared/http-resources/error.interceptor.ts");
    /* harmony import */


    var _shared_http_resources_token_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/http-resources/token.interceptor */
    "./src/app/shared/http-resources/token.interceptor.ts");
    /* harmony import */


    var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/alert/alert.service */
    "./src/app/shared/alert/alert.service.ts");
    /* harmony import */


    var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./modules/home/home.module */
    "./src/app/modules/home/home.module.ts");
    /* harmony import */


    var _core_services_action_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./core/services/action.service */
    "./src/app/core/services/action.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular-slider/ngx-slider */
    "./node_modules/@angular-slider/ngx-slider/__ivy_ngcc__/fesm2015/angular-slider-ngx-slider.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _shared_http_resources_api_interceptor__WEBPACK_IMPORTED_MODULE_6__["APIInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _shared_http_resources_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _shared_http_resources_token_interceptor__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptor"],
        multi: true
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"]
      }, _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"], _core_services_action_service__WEBPACK_IMPORTED_MODULE_11__["ActionService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_14__["NgxSliderModule"]], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_14__["NgxSliderModule"]],
        exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_14__["NgxSliderModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _shared_http_resources_api_interceptor__WEBPACK_IMPORTED_MODULE_6__["APIInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _shared_http_resources_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _shared_http_resources_token_interceptor__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptor"],
            multi: true
          }, {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"]
          }, _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"], _core_services_action_service__WEBPACK_IMPORTED_MODULE_11__["ActionService"]],
          exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/action.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/services/action.service.ts ***!
    \*************************************************/

  /*! exports provided: ActionService */

  /***/
  function srcAppCoreServicesActionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionService", function () {
      return ActionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/alert/alert.service */
    "./src/app/shared/alert/alert.service.ts");

    var ActionService = /*#__PURE__*/function () {
      function ActionService(http, alertService) {
        _classCallCheck(this, ActionService);

        this.http = http;
        this.alertService = alertService;
      }

      _createClass(ActionService, [{
        key: "getAllPairs",
        value: function getAllPairs() {
          return this.http.get('api/btcprice/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
          }));
        }
      }, {
        key: "getSpecificPairs",
        value: function getSpecificPairs(pair) {
          return this.http.get('api/btcprice/' + pair).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
          }));
        }
      }, {
        key: "setStrategy",
        value: function setStrategy(payload) {
          return this.http.post('api/strategy/' + payload.name, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "setStrategies",
        value: function setStrategies(payload) {
          return this.http.post('api/strategies', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "getActiveStrategy",
        value: function getActiveStrategy() {
          return this.http.get('api/strategy/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "stopStrategy",
        value: function stopStrategy(orderId, pair) {
          return this.http.get('api/binance/cancelorder/single/' + orderId + '/' + pair).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "deleteFromDb",
        value: function deleteFromDb(name) {
          return this.http["delete"]('api/strategy/' + name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "multipleCancel",
        value: function multipleCancel(payload) {
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            }),
            body: payload
          };
          return this.http["delete"]('api/strategy/deletestrategies', options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "multipleUpdate",
        value: function multipleUpdate(payload) {
          return this.http.put('api/strategy/updatestrategies', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "updateStrategy",
        value: function updateStrategy(name, payload) {
          return this.http.post('api/strategy/' + name, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "getBtcBalance",
        value: function getBtcBalance() {
          var _this = this;

          return this.http.get('api/binance/balance').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.balanceBtc = data.btc_balance;
            return _this.balanceBtc;
          }));
        }
      }, {
        key: "getCurrentStatus",
        value: function getCurrentStatus(orderId, pair) {
          return this.http.get('api/binance/orderstatus/' + orderId + '/' + pair).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return JSON.parse(data.success);
          }));
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(name, pw) {
          var _this2 = this;

          var payload = {
            username: name,
            password: pw,
            role: 'admin'
          };
          return this.http.post('api/users/' + name, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this2.alertService.addMessage('success', 'Password cambiata correttamente');

            return data;
          }));
        }
      }, {
        key: "checkStrategy",
        value: function checkStrategy(name) {
          return this.http.get('api/strategy/' + name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "balanceBtc",
        set: function set(value) {
          this._btcBalance = value;
        },
        get: function get() {
          return this._btcBalance;
        }
      }]);

      return ActionService;
    }();

    ActionService.ɵfac = function ActionService_Factory(t) {
      return new (t || ActionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]));
    };

    ActionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ActionService,
      factory: ActionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/services/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppCoreServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(router, http) {
        _classCallCheck(this, AuthService);

        this.router = router;
        this.http = http;
        this._user = '';
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(username, password) {
          var _this3 = this;

          return this.http.get('api/login/' + username + '/' + password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            _this3.token = resp.token;
            _this3.user = resp.user;
            _this3.role = resp.role;
            _this3.isLogged = '1';
            return resp;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          this.token = '';
          this.user = '';
          this.role = '';
          this.isLogged = '0';
          localStorage.clear();
          this.router.navigate(['auth/login']).then();
        }
      }, {
        key: "token",
        get: function get() {
          return this._token || localStorage.getItem('token');
        },
        set: function set(value) {
          localStorage.setItem('token', value);
          this._token = value;
        }
      }, {
        key: "user",
        set: function set(value) {
          localStorage.setItem('user', value);
          this._user = value;
        },
        get: function get() {
          return localStorage.getItem('user');
        }
      }, {
        key: "isLogged",
        set: function set(value) {
          localStorage.setItem('isLogged', value);
          this._isLogged = value;
        },
        get: function get() {
          return localStorage.getItem('isLogged');
        }
      }, {
        key: "role",
        set: function set(value) {
          localStorage.setItem('role', value);
          this._user = value;
        },
        get: function get() {
          return this._user || localStorage.getItem('role');
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/404/404.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/home/404/404.component.ts ***!
    \***************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppModulesHome404404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = function NotFoundComponent() {
      _classCallCheck(this, NotFoundComponent);
    };

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["dashboard-component"]],
      decls: 2,
      vars: 0,
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS80MDQvNDA0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'dashboard-component',
          templateUrl: './404.component.html',
          styleUrls: ['./404.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/dashboard/dashboard.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/home/dashboard/dashboard.component.ts ***!
    \***************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppModulesHomeDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _core_services_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/services/action.service */
    "./src/app/core/services/action.service.ts");
    /* harmony import */


    var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/alert/alert.service */
    "./src/app/shared/alert/alert.service.ts");
    /* harmony import */


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/services/auth.service */
    "./src/app/core/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/modal/modal.component */
    "./src/app/shared/modal/modal.component.ts");

    var _c0 = ["detailsModal"];
    var _c1 = ["stopModal"];
    var _c2 = ["cancelModal"];
    var _c3 = ["transactionsModal"];
    var _c4 = ["multipleAction"];

    function DashboardComponent_div_5_tr_89_img_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 76);
      }
    }

    function DashboardComponent_div_5_tr_89_img_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 77);
      }
    }

    function DashboardComponent_div_5_tr_89_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 78);
      }
    }

    function DashboardComponent_div_5_tr_89_img_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 79);
      }
    }

    function DashboardComponent_div_5_tr_89_span_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_5_tr_89_span_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_5_tr_89_span_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c5 = function _c5(a0, a1) {
      return {
        "btn-dark": a0,
        "btn-success": a1
      };
    };

    function DashboardComponent_div_5_tr_89_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_tr_89_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var $index_r13 = ctx.index;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.openDetails($index_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DashboardComponent_div_5_tr_89_Template_input_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var str_r12 = ctx.$implicit;
          var $index_r13 = ctx.index;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r24.updateSelectStatus($event, str_r12.order_id, str_r12.name, str_r12.status, str_r12.coin_pair, $index_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_5_tr_89_img_5_Template, 1, 0, "img", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_5_tr_89_img_6_Template, 1, 0, "img", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_5_tr_89_img_7_Template, 1, 0, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_div_5_tr_89_img_8_Template, 1, 0, "img", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_tr_89_Template_button_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.openStopModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DashboardComponent_div_5_tr_89_span_32_Template, 2, 0, "span", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DashboardComponent_div_5_tr_89_span_33_Template, 2, 0, "span", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_tr_89_Template_button_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.openCancelModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DashboardComponent_div_5_tr_89_span_39_Template, 2, 0, "span", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var str_r12 = ctx.$implicit;
        var $index_r13 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "select" + $index_r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.isChecked[$index_r13])("name", str_r12.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r12.current_status == "BUY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r12.current_status != "BUY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r12.status == "ACTIVE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r12.status != "ACTIVE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r12.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r12.coin_pair);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r12.transactions[0] && str_r12.transactions[0].cumulative_quantity ? str_r12.transactions[0].cumulative_quantity : str_r12.capital);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.calculateSelledCapital(str_r12.capital, str_r12.sell_price, str_r12.current_capital, str_r12.buy_price, str_r12.current_status));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.calculateDelta(str_r12.transactions[0] && str_r12.transactions[0].cumulative_quantity ? str_r12.transactions[0].cumulative_quantity : str_r12.capital, ctx_r1.calculateSelledCapital(str_r12.capital, str_r12.sell_price, str_r12.current_capital, str_r12.buy_price, str_r12.current_status), false), "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.calculateCurrentCapital(str_r12.current_capital, str_r12.coin_pair, str_r12));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.calculateDelta(str_r12.transactions[0] && str_r12.transactions[0].cumulative_quantity ? str_r12.transactions[0].cumulative_quantity : str_r12.capital, ctx_r1.calculateCurrentCapital(str_r12.current_capital, str_r12.coin_pair, str_r12), str_r12.current_status, str_r12), "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r12.buy_price.toFixed(8));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r12.sell_price.toFixed(8));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](29, 22, str_r12.date, "dd/MM/yyyy"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c5, str_r12.status == "ACTIVE", str_r12.status != "ACTIVE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r12.status == "ACTIVE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r12.status != "ACTIVE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.calculateTransactions(str_r12.status, str_r12.transactions, str_r12.transactions.length), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r12.current_status === "SELL" && str_r12.status === "STOP");
      }
    }

    function DashboardComponent_div_5_div_95_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

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
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.checkMobileData.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.checkMobileData.coin_pair);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.checkMobileData.capital);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.checkMobileData.capital);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.checkMobileData.buy_price.toFixed(8));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.checkMobileData.sell_price.toFixed(8));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.checkMobileData.date);
      }
    }

    function DashboardComponent_div_5_h2_103_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stai fermando");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_5_h2_103_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stai riavviando");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_5_h2_103_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_5_h2_103_span_1_Template, 2, 0, "span", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_5_h2_103_span_2_Template, 2, 0, "span", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.stopData.status === "ACTIVE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.stopData.status !== "ACTIVE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.stopData.name, "");
      }
    }

    function DashboardComponent_div_5_h2_117_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Stai cancellando la strategia");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.stopData.name, "");
      }
    }

    function DashboardComponent_div_5_div_130_tr_21_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_div_130_tr_21_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var tr_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r36.getSpecificStatus(tr_r31.order_id, ctx_r36.stopData.coin_pair);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "STATO ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_5_div_130_tr_21_button_12_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_5_div_130_tr_21_button_12_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_5_div_130_tr_21_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_div_130_tr_21_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r41.openStopModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_5_div_130_tr_21_button_12_span_1_Template, 2, 0, "span", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_5_div_130_tr_21_button_12_span_2_Template, 2, 0, "span", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c5, ctx_r34.stopData.status == "ACTIVE", ctx_r34.stopData.status != "ACTIVE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.stopData.status == "ACTIVE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.stopData.status != "ACTIVE");
      }
    }

    function DashboardComponent_div_5_div_130_tr_21_button_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_div_130_tr_21_button_14_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r43.openCancelModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_5_div_130_tr_21_Template(rf, ctx) {
      if (rf & 1) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_5_div_130_tr_21_button_10_Template, 2, 0, "button", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_div_5_div_130_tr_21_button_12_Template, 3, 6, "button", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardComponent_div_5_div_130_tr_21_button_14_Template, 2, 0, "button", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tr_r31 = ctx.$implicit;
        var lst_r32 = ctx.last;

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tr_r31.order_id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tr_r31.type_transaction);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.parseDate(tr_r31.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tr_r31.quantity ? tr_r31.quantity : "fake");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lst_r32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lst_r32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lst_r32);
      }
    }

    function DashboardComponent_div_5_div_130_tr_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_div_130_tr_22_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r45.deleteFromDb(ctx_r45.stopData.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CANCELLA STRATEGIA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_5_div_130_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Strategia: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 83);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Quantit\xE0");

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DashboardComponent_div_5_div_130_tr_21_Template, 15, 7, "tr", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DashboardComponent_div_5_div_130_tr_22_Template, 8, 0, "tr", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_div_130_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r47.closeTransaction();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CHIUDI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.stopData.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.stopData.transactions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.stopData.transactions.length === 0);
      }
    }

    function DashboardComponent_div_5_div_136_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var s_r50 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r50.nm);
      }
    }

    function DashboardComponent_div_5_div_136_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_5_div_136_li_4_Template, 2, 1, "li", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Conferma !!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_div_136_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r51.closeMultiple();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CHIUDI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_div_136_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r53.manageMultipleAction(ctx_r53.multipleType);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CONTINUA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Stai eseguendo una ", ctx_r11.multipleType === "pp" ? "PLAY/PAUSE" : "CANCELLAZIONE", " multipla per le seguenti startegie:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.selectedStrategy);
      }
    }

    var _c6 = function _c6(a0) {
      return {
        "opacity": a0
      };
    };

    function DashboardComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " AZIONI MULTIPLE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.openMultiple("pp");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PAUSE/PLAY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.openMultiple("cancel");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CANCELLA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Stato");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Nome");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Scambio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "BTC iniziali");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "BTC alla vendita");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u25B2 % vendita");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "BTC correnti");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u25B2 % correnti");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Prezzo di compera");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Prezzo di vendita");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Data");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "PAUSA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "CHIUDI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cicli eseguiti");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_49_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r57.selectAll = $event;
        })("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_49_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.manageAll($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_52_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.searchState = $event;
        })("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_52_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r60.filterResult(ctx_r60.searchState, "state");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "svg", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_56_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r61.searchState = $event;
        })("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_56_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r62.filterResult(ctx_r62.searchState, "state");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "svg", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_60_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r63.searchState = $event;
        })("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_60_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r64.filterResult(ctx_r64.searchState, "state");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "svg", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_64_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r65.searchName = $event;
        })("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_64_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r66.filterResult(ctx_r66.searchName, "name");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_66_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r67.searchFilter = $event;
        })("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_66_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.filterResult(ctx_r68.searchFilter, "pairs");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_82_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r69.searchDate = $event;
        })("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_82_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r70.filterResult(ctx_r70.searchDate, "date");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_88_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r71.executedTransaction = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, DashboardComponent_div_5_tr_89_Template, 40, 28, "tr", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "modal", 42, 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Dettagli: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, DashboardComponent_div_5_div_95_Template, 15, 7, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "modal", 46, 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "STOP ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, DashboardComponent_div_5_h2_103_Template, 4, 3, "h2", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Conferma !!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_Template_button_click_106_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.closeStop();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "CHIUDI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_Template_button_click_108_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r73.updateStrategy(ctx_r73.stopData.name, ctx_r73.stopData.status);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " CONTINUA ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "modal", 52, 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "CANCEL ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, DashboardComponent_div_5_h2_117_Template, 4, 1, "h2", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Conferma !!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_Template_button_click_120_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.closeCancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "CHIUDI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_Template_button_click_122_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.cancelStrategy(ctx_r75.stopData.order_id, ctx_r75.stopData.coin_pair, ctx_r75.stopData.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " CONTINUA ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "modal", 54, 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "TRANSAZIONI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, DashboardComponent_div_5_div_130_Template, 25, 3, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "modal", 57, 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Azione multipla : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, DashboardComponent_div_5_div_136_Template, 11, 2, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Strategie selezionate: ", ctx_r0.selectedStrategy.length, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectAll);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c6, ctx_r0.searchState == "all" ? "1" : "0.5"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c6, ctx_r0.searchState == "buy" ? "1" : "0.5"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c6, ctx_r0.searchState == "sell" ? "1" : "0.5"));

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.activeStrategies);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.checkMobileData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stopData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stopData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stopData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedStrategy);
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(actionService, alertService, cdFref, authService) {
        _classCallCheck(this, DashboardComponent);

        this.actionService = actionService;
        this.alertService = alertService;
        this.cdFref = cdFref;
        this.authService = authService;
        this.searchState = 'all';
        this.details = false;
        this.selectAll = false;
        this.executedTransaction = 0;
        this.selectedBox = [{
          order: 0,
          nm: '0',
          st: '0'
        }];
        this.loaded = false;
        this.selecteFilter = [];
        this.selectedCoin = [];
        this.minSlide = 0;
        this.maxSlide = 3;
        this.currentPrices = [];
        this.selectedStrategy = [];
        this.isChecked = [];
        this.multipleType = '';
        this.loadActiveStrategy(); // this.specificPair(this.selectedCoin);

        this.user = this.authService.user; // console.log(this.user)
        // this.selectedCoin = [
        //   {name: 'CKBBTC', price: 0.00000038, volume: 12},
        //   {name: 'ARPABTC', price: 0.00000088, volume: 18},
        //   {name: 'POABTC', price: 0.00000070, volume: 19},
        //   {name: 'COSBTC', price: 0.00000035, volume: 25},
        //   {name: 'XVGBTC', price: 0.00000070, volume: 50},
        // ];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.reloadStuff = setInterval(function () {
            _this4.reload();
          }, 20000);
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this.calculateTotalTransactions();
          this.cdFref.detectChanges();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.reloadStuff);
        }
      }, {
        key: "reload",
        value: function reload() {
          this.resetFilter();
          this.loadActiveStrategy();
          this.executedTransaction = 0;
          this.calculateTotalTransactions();
          this.reloadCheckBox();
        }
      }, {
        key: "reloadCheckBox",
        value: function reloadCheckBox() {
          var _this5 = this;

          if (this.selectAll) {
            this.isChecked = lodash__WEBPACK_IMPORTED_MODULE_1__["fill"](this.isChecked, true);
          } else if (!this.selectAll && !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.selectedStrategy)) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.selectedStrategy, function (s, i) {
              _this5.isChecked[s.id] = true;
            });
          } else if (!this.selectAll && lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.selectedStrategy)) {
            this.uncheckAll();
          }
        }
      }, {
        key: "manageAll",
        value: function manageAll(event) {
          var _this6 = this;

          if (event === true) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, function (o, i) {
              _this6.selectedStrategy.push({
                order: o.order_id,
                nm: o.name,
                st: o.status,
                pair: o.coin_pair
              });

              _this6.isChecked[i] = true;
            }); // $('.check-dash').prop('checked', true);
          } else {
            this.selectedStrategy = [];
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, function (o, i) {
              _this6.isChecked[i] = false;
            }); // $('.check-dash').prop('checked', false);
          }

          this.selectedStrategy = lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"](this.selectedStrategy, function (o) {
            return o.order;
          });
        }
      }, {
        key: "manageSlider",
        value: function manageSlider(action) {
          if (action) {
            if (this.maxSlide < this.selectedCoin.length - 1) {
              this.minSlide++;
              this.maxSlide++;
            }
          } else {
            if (this.minSlide > 0) {
              this.minSlide--;
              this.maxSlide--;
            }
          }
        }
      }, {
        key: "updateSelectStatus",
        value: function updateSelectStatus(event, orderId, name, status, pair, index) {
          this.selectAll = false;

          if (event.target.checked === true) {
            this.selectedStrategy.push({
              order: orderId,
              nm: name,
              st: status,
              pair_c: pair,
              id: index
            });
            this.isChecked[index] = true;
          } else {
            this.selectedStrategy = lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.selectedStrategy, function (n) {
              return n.order !== orderId;
            });
            this.isChecked[index] = false;
          }
        }
      }, {
        key: "getFloor",
        value: function getFloor(value) {
          return Math.floor(value);
        }
      }, {
        key: "specificPair",
        value: function specificPair(pairs) {
          var _this7 = this;

          lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](pairs, function (p) {
            _this7.actionService.getSpecificPairs(p.coin_pair).subscribe(function (resp) {
              resp.name = p.coin_pair;

              _this7.currentPrices.push(resp);

              _this7.currentPrices = lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"](_this7.currentPrices, function (e) {
                return e.name;
              });
            }, function (error) {});
          });
        }
      }, {
        key: "calculateCurrentCapital",
        value: function calculateCurrentCapital(currentCapital, pair, str) {
          if (str.current_status === 'BUY') {
            return this.calculateSelledCapital(str.capital, str.sell_price, str.current_capital, str.buy_price, str.current_status);
          }

          var selectedPairPrice;
          lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.currentPrices, function (cp) {
            if (cp.name === pair) {
              selectedPairPrice = cp.price;
            }
          });
          var result = (currentCapital * selectedPairPrice).toFixed(8);

          if (parseFloat(result) <= 0.00000010) {
            return currentCapital;
          }

          return parseFloat(result);
        }
      }, {
        key: "calculateDelta",
        value: function calculateDelta(p1, p2, status, str) {
          if (parseFloat(p2) === 0) {
            return 0;
          }

          if (status === 'BUY') {
            // tslint:disable-next-line:max-line-length
            return this.calculateDelta(p1, this.calculateSelledCapital(str.capital, str.sell_price, str.current_capital, str.buy_price, str.current_status));
          }

          var partial = (parseFloat(p2) - p1) / p1;
          return (partial * 100).toFixed(2);
        }
      }, {
        key: "calculateSelledCapital",
        value: function calculateSelledCapital(capital, sellPrice, currentCapital, buyPrice, status) {
          var parseSellPrice = sellPrice.toFixed(8);
          var parseBuyPrice = buyPrice.toFixed(8);
          var ccS = parseFloat((currentCapital * parseSellPrice).toFixed(8));
          var ccB = parseFloat((currentCapital * parseBuyPrice).toFixed(8));

          switch (status) {
            case 'BUY':
              if (ccB <= 0.00000010) {
                return capital;
              }

              return ccB;
              break;

            case 'SELL':
              return ccS;
              break;

            default:
              return capital;
          }
        }
      }, {
        key: "calculateTransactions",
        value: function calculateTransactions(status, transactions, length) {
          var lastTransaction = transactions[length - 1];
          var type = lastTransaction && lastTransaction.type_transaction ? lastTransaction.type_transaction : 'BUY';
          var result = length % 2 === 0 ? length / 2 : this.getFloor(length / 2);

          if (length >= 3) {
            if (type === 'SELL' && status === 'ACTIVE') {
              result = result - 1;
            }
          } else {
            if (type === 'SELL' && status === 'ACTIVE') {
              result = result - 1;
            }
          }

          return result;
        }
      }, {
        key: "calculateTotalTransactions",
        value: function calculateTotalTransactions() {
          var _this8 = this;

          var partial = 0;
          lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, function (str) {
            var lastTransaction = str.transactions[str.transactions.length - 1];
            var type = lastTransaction && lastTransaction.type_transaction ? lastTransaction.type_transaction : 'BUY';
            var result = str.transactions.length % 2 === 0 ? str.transactions.length / 2 : _this8.getFloor(str.transactions.length / 2);

            if (str.transactions.length >= 3) {
              if (type === 'SELL' && str.status === 'ACTIVE') {
                result = result - 1;
              }
            } else {
              if (type === 'SELL' && str.status === 'ACTIVE') {
                result = result - 1;
              }
            }

            partial += result;
          });
          this.executedTransaction = partial;
          this.loaded = true;
        }
      }, {
        key: "getCeil",
        value: function getCeil(value) {
          return Math.ceil(value);
        }
      }, {
        key: "closeStop",
        value: function closeStop() {
          this.stopModal.dismiss();
        }
      }, {
        key: "closeCancel",
        value: function closeCancel() {
          this.cancelModal.dismiss();
        }
      }, {
        key: "closeTransaction",
        value: function closeTransaction() {
          this.transactionsModal.dismiss();
        }
      }, {
        key: "openConfirmModal",
        value: function openConfirmModal(id) {
          this.checkMobileData = this.activeStrategies[id];
          this.detailsModal.show('modal-lg');
        }
      }, {
        key: "openMultiple",
        value: function openMultiple(type) {
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
          } else {
            this.alertService.addMessage('danger', 'Devi selezionare almeno 2 strategie');
          }
        }
      }, {
        key: "manageMultipleAction",
        value: function manageMultipleAction(type) {
          var _this9 = this;

          var payload = [];

          if (type === 'pp') {
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.selectedStrategy, function (ss, i) {
              var stat = ss.st === 'STOP' ? 'ACTIVE' : 'STOP';
              payload.push({
                name: ss.nm,
                status: stat
              });
            });
            this.actionService.multipleUpdate(payload).subscribe(function (resp) {
              if (resp) {
                _this9.closeMultiple();

                _this9.loadActiveStrategy();

                _this9.actionService.getBtcBalance().subscribe();

                _this9.calculateTotalTransactions();

                _this9.uncheckAll();

                _this9.selectedStrategy = [];

                _this9.alertService.addMessage('success', resp.success);

                _this9.clearFilter();
              }
            });
          } else {
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.selectedStrategy, function (ss, i) {
              payload.push({
                name: ss.nm,
                orderId: ss.order,
                pair: ss.pair
              });
            });
            this.actionService.multipleCancel(payload).subscribe(function (resp) {
              if (resp) {
                _this9.closeMultiple();

                _this9.loadActiveStrategy();

                _this9.actionService.getBtcBalance().subscribe();

                _this9.calculateTotalTransactions();

                _this9.uncheckAll();

                _this9.selectedStrategy = [];

                _this9.alertService.addMessage('success', resp.success);

                _this9.clearFilter();
              }
            });
          }
        }
      }, {
        key: "uncheckAll",
        value: function uncheckAll() {
          lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.selectedStrategy, function (as, i) {});
          this.selectAll = false;
          this.isChecked = lodash__WEBPACK_IMPORTED_MODULE_1__["fill"](this.isChecked, false); // console.log('endtro', _.isArray(this.isChecked), this.isChecked);
        }
      }, {
        key: "closeMultiple",
        value: function closeMultiple() {
          this.multipleType = '';
          this.multipleAction.dismiss();
        }
      }, {
        key: "openStopModal",
        value: function openStopModal() {
          this.closeTransaction();
          this.stopModal.show('modal-lg');
        }
      }, {
        key: "openCancelModal",
        value: function openCancelModal() {
          this.closeTransaction();
          this.cancelModal.show('modal-lg');
        }
      }, {
        key: "fromCoinToBTC",
        value: function fromCoinToBTC(amount, value) {
          return amount * value;
        }
      }, {
        key: "loadActiveStrategy",
        value: function loadActiveStrategy() {
          var _this10 = this;

          this.actionService.getActiveStrategy().subscribe(function (resp) {
            _this10.clonedStrategy = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](resp);
            _this10.activeStrategies = lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](_this10.clonedStrategy, 'name', 'asc');

            if (_this10.stopData === undefined) {
              _this10.stopData = resp[0];
            }

            _this10.selectedCoin = [];
            _this10.selectedCoin = lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"](_this10.activeStrategies, function (e) {
              return e.coin_pair;
            });

            _this10.specificPair(_this10.selectedCoin); // console.log(this.selectedCoin)


            _this10.checkMobileData = resp[0];
            _this10.strNumber = _this10.clonedStrategy.length;
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](_this10.selecteFilter, function (sf) {
              if (sf.name !== 'all' && sf.name !== '') {
                _this10.filterResult(sf.name, sf.type);
              }
            }); // const ll = this.activeStrategies.length;
            // this.isChecked = Array(ll);
            // this.isChecked = _.fill
          });
        }
      }, {
        key: "getSpecificStatus",
        value: function getSpecificStatus(orderId, pair) {
          var _this11 = this;

          this.actionService.getCurrentStatus(orderId, pair).subscribe(function (resp) {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](resp)) {
              _this11.alertService.addMessage('info', 'Stato dell ordine chiuso bilancio insufficente');
            } else {
              var state = resp.status === 'NEW' ? 'APERTO' : 'CHIUSO';

              _this11.alertService.addMessage('info', 'Stato dell ordine: ' + state);
            }

            return resp;
          });
        }
      }, {
        key: "deleteFromDb",
        value: function deleteFromDb(name) {
          var _this12 = this;

          this.actionService.deleteFromDb(name).subscribe(function () {
            _this12.closeCancel();

            _this12.loadActiveStrategy();

            _this12.actionService.getBtcBalance().subscribe();

            _this12.calculateTotalTransactions();

            _this12.alertService.addMessage('success', 'Ordine cancellato con successo');
          });
        }
      }, {
        key: "cancelStrategy",
        value: function cancelStrategy(orderId, pair, name) {
          var _this13 = this;

          if (orderId !== undefined) {
            this.actionService.stopStrategy(orderId, pair).subscribe(function (resp) {
              _this13.actionService.deleteFromDb(name).subscribe(function () {
                _this13.closeCancel();

                _this13.loadActiveStrategy();

                _this13.actionService.getBtcBalance().subscribe();

                _this13.calculateTotalTransactions();

                _this13.alertService.addMessage('success', 'Ordine cancellato con successo');
              });
            });
          } else {
            this.closeCancel();
            this.alertService.addMessage('danger', 'Ordine nn ancora aperto riprova fra poco');
          }
        }
      }, {
        key: "updateStrategy",
        value: function updateStrategy(name, status) {
          var _this14 = this;

          var payload = {
            status: status === 'ACTIVE' ? 'STOP' : 'ACTIVE'
          };
          this.actionService.updateStrategy(name, payload).subscribe(function (resp) {
            _this14.closeStop();

            _this14.loadActiveStrategy();

            _this14.calculateTotalTransactions();
          });
        }
      }, {
        key: "filterResult",
        value: function filterResult(name, type) {
          this.loaded = false;
          var data;

          if (type === 'pairs') {
            this.searchName = '';
            this.searchDate = '';
            this.searchState = 'all';

            if (this.searchFilter !== undefined) {
              data = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.clonedStrategy, function (o) {
                return o.coin_pair.includes(name.toUpperCase());
              });
            } else {
              data = this.clonedStrategy;
            }
          } else if (type === 'name') {
            this.searchFilter = '';
            this.searchDate = '';
            this.searchState = 'all';

            if (this.searchName !== undefined) {
              data = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.clonedStrategy, function (o) {
                return o.name.includes(name.toUpperCase());
              });
            } else {
              data = this.clonedStrategy;
            }
          } else if (type === 'date') {
            this.searchFilter = '';
            this.searchName = '';
            this.searchState = 'all';

            if (this.searchDate !== undefined) {
              data = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.clonedStrategy, function (o) {
                return o.date.includes(name);
              });
            } else {
              data = this.clonedStrategy;
            }
          } else if (type === 'state') {
            this.searchFilter = '';
            this.searchName = '';
            this.searchDate = '';
            var nameUp = name.toUpperCase();

            if (this.searchState !== undefined && name !== 'all') {
              data = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.clonedStrategy, function (o) {
                return o.current_status === nameUp;
              });
            } else {
              data = this.clonedStrategy;
            }
          }

          this.activeStrategies = lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](data, 'name', 'asc');
          this.loaded = true;
        }
      }, {
        key: "openDetails",
        value: function openDetails(data) {
          var _this15 = this;

          this.stopData = this.activeStrategies[data];
          $(document).on('click', '.showD', function () {
            _this15.transactionsModal.show('modal-lg');
          });
        }
      }, {
        key: "calculateCapital",
        value: function calculateCapital(type) {
          var _this16 = this;

          var startCapital = 0;
          var currentCapital = 0;
          var realCurrentCapital = 0;

          switch (type) {
            case 'initial':
              lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, function (str) {
                if (str.transactions[0] && str.transactions[0].cumulative_quantity) {
                  startCapital += str.transactions[0].cumulative_quantity;
                } else {
                  startCapital += str.capital;
                }
              });
              this.btcInitialTotal = startCapital.toFixed(8);
              return startCapital.toFixed(8);

            case 'selled':
              lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, function (str) {
                currentCapital += _this16.calculateSelledCapital(str.capital, str.sell_price, str.current_capital, str.buy_price, str.current_status);
              });
              this.btcSelledTotal = currentCapital.toFixed(8);
              return currentCapital.toFixed(8);

            case 'current':
              lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, function (str) {
                realCurrentCapital += parseFloat(_this16.calculateCurrentCapital(str.current_capital, str.coin_pair, str));
              });
              this.btcCurrentTotal = realCurrentCapital.toFixed(8);
              return realCurrentCapital.toFixed(8);
          }
        }
      }, {
        key: "parseDate",
        value: function parseDate(date) {
          var data = new Date(date); // tslint:disable-next-line:max-line-length

          return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + ' - ' + (data.getHours() < 10 ? '0' + data.getHours() : data.getHours()) + ':' + (data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes());
        }
      }, {
        key: "resetFilter",
        value: function resetFilter() {
          var result = [];
          this.searchFilter = lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.searchFilter) ? '' : this.searchFilter;
          result.push({
            name: this.searchFilter,
            type: 'pairs'
          });
          this.searchState = this.searchState === 'all' ? 'all' : this.searchState;
          result.push({
            name: this.searchState,
            type: 'state'
          });
          this.searchName = lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.searchName) ? '' : this.searchName;
          result.push({
            name: this.searchName,
            type: 'name'
          }); // this.searchDate = _.isEmpty(this.searchDate) ? '' : this.searchDate;

          this.selecteFilter = result; // this.selectedStrategy = [];
        }
      }, {
        key: "clearFilter",
        value: function clearFilter() {
          this.searchFilter = undefined;
          this.searchState = 'all';
          this.searchName = undefined;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["dashboard-component"]],
      viewQuery: function DashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.detailsModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stopModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cancelModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.transactionsModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multipleAction = _t.first);
        }
      },
      decls: 6,
      vars: 2,
      consts: [[1, "sub-header"], [1, "h1"], [1, "float-right", 2, "font-size", "16px"], ["class", "mt-3", 4, "ngIf"], [1, "mt-3"], ["id", "accordion"], ["id", "headingOne"], [1, "mb-3"], ["data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "btn", "start-btn"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordion", 1, "collapse"], [1, "float-left", "multi-container"], [1, "btn", "btn-dark", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "float-right"], ["id", "dash-table", 1, "table-responsive"], [1, "text-center"], [1, "hidden-column"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Totale BTC alla fine di tutte le vendite", 1, "hidden-column"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Differenza % tra BTC iniziali e BTC vendita", 1, "hidden-column"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Totale BTC al valore attuale di mercato", 1, "hidden-column"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Differenza % tra BTC iniziali e BTC correnti", 1, "hidden-column"], [1, "d-none"], ["type", "checkbox", "id", "selectAll", 3, "ngModel", "ngModelChange"], ["for", "all", "data-toggle", "tooltip", "data-placement", "top", "title", "Tutti gli ordini", 1, "mr-1", "label-custom"], ["id", "all", "type", "radio", "value", "all", 1, "radio-dash", "all", 3, "ngModel", "ngModelChange"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "dollar-sign", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 288 512", 1, "svg-inline--fa", "fa-dollar-sign", "fa-w-9", 3, "ngStyle"], ["fill", "blue", "d", "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"], ["for", "buy", "data-toggle", "tooltip", "data-placement", "top", "title", "Ordini in acquisto", 1, "mr-1", "label-custom"], ["id", "buy", "type", "radio", "value", "buy", 1, "radio-dash", "buy", 3, "ngModel", "ngModelChange"], ["fill", "green", "d", "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"], ["for", "sell", "data-toggle", "tooltip", "data-placement", "top", "title", "Ordini in vendita", 1, "label-custom"], ["id", "sell", "type", "radio", "value", "sell", 1, "radio-dash", "sell", 3, "ngModel", "ngModelChange"], ["fill", "red", "d", "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"], ["type", "text", "id", "filter-name", 1, "w-100", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "filter-pair", 1, "filter-dash", 3, "ngModel", "ngModelChange"], ["type", "text", 1, "filter-dash", "tot", 3, "value", "disabled"], ["type", "text", 1, "filter-dash", "tot", "text-center", 3, "value", "disabled"], ["type", "text", 1, "filter-dash", 3, "disabled"], ["type", "text", "id", "filter-date", 1, "filter-dash", 3, "disabled", "ngModel", "ngModelChange"], ["type", "text", 1, "filter-dash", "min", 3, "disabled"], ["type", "text", 1, "filter-dash", "text-center", 3, "ngModel", "disabled", "ngModelChange"], ["style", "cursor: pointer", 3, "click", 4, "ngFor", "ngForOf"], ["id", "edit-modal"], ["detailsModal", ""], [1, "app-modal-header"], ["class", "app-modal-body", 4, "ngIf"], ["id", "stop-modal"], ["stopModal", ""], [1, "app-modal-body"], [4, "ngIf"], [1, "btn", "btn-danger", "float-left", 3, "click"], [1, "btn", "start-btn", "float-right", 3, "click"], ["id", "cancel-modal"], ["cancelModal", ""], ["id", "transaction-modal"], ["transactionsModal", ""], ["class", "text-center", 4, "ngIf"], ["id", "multiple-action"], ["multipleAction", ""], ["class", "app-modal-body ", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], ["type", "checkbox", 1, "check-dash", 3, "checked", "name", "id", "change"], [1, "text-center", "showD"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Visualizza ordini"], ["src", "assets/icons/dollar-sign-solid.svg", "alt", "buy", "width", "18", 4, "ngIf"], ["src", "assets/icons/dollar-sign.svg", "alt", "sell", "width", "18", 4, "ngIf"], ["class", "status-icon play", "src", "assets/icons/play-circle-solid.svg", "alt", "play", "width", "18", 4, "ngIf"], ["class", "status-icon pause", "src", "assets/icons/pause-circle-solid.svg", "alt", "pause", "width", "18", 4, "ngIf"], [1, "showD"], [1, "hidden-column", "showD"], [1, "hidden-column", "showD", "text-center"], [1, "showD", "d-none"], [1, "btn", 3, "ngClass", "click"], ["alt", "stop", "src", "assets/icons/stop-circle-solid.svg", "width", "20"], [1, "nTransactions", "text-center", "showD"], ["data-toggle", "tooltip", "data-placement", "top", "title", "A transazione conclusa", 4, "ngIf"], ["src", "assets/icons/dollar-sign-solid.svg", "alt", "buy", "width", "18"], ["src", "assets/icons/dollar-sign.svg", "alt", "sell", "width", "18"], ["src", "assets/icons/play-circle-solid.svg", "alt", "play", "width", "18", 1, "status-icon", "play"], ["src", "assets/icons/pause-circle-solid.svg", "alt", "pause", "width", "18", 1, "status-icon", "pause"], ["width", "20", "alt", "pause", "src", "assets/icons/pause-circle-solid.svg"], ["width", "20", "alt", "play", "src", "assets/icons/play-circle-solid.svg"], ["data-toggle", "tooltip", "data-placement", "top", "title", "A transazione conclusa"], [1, "table-responsive-lg"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-danger", "mt-3", "w-100", 3, "click"], ["class", "btn btn-dark w-100", 3, "click", 4, "ngIf"], ["class", "btn w-100", 3, "ngClass", "click", 4, "ngIf"], ["class", "btn btn-danger w-100", 3, "click", 4, "ngIf"], [1, "btn", "btn-dark", "w-100", 3, "click"], [1, "btn", "w-100", 3, "ngClass", "click"], [1, "btn", "btn-danger", "w-100", 3, "click"], ["colspan", "3"], ["style", "  list-style-type: none;", 4, "ngFor", "ngForOf"], [2, "list-style-type", "none"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Riepilogo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_5_Template, 137, 40, "div", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Strategie attive: ", ctx.strNumber, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".arrow[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: relative;\n  background-color: orange;\n  border-radius: 16px;\n  padding: 5px;\n  border: 1px solid white;\n  width: 34px;\n  cursor: pointer;\n  text-align: center;\n}\n.arrow.left[_ngcontent-%COMP%] {\n  float: left;\n  top: 50px;\n  margin-right: -25px;\n}\n.arrow.right[_ngcontent-%COMP%] {\n  float: right;\n  top: -92px;\n  right: -2px;\n}\n.coin-card[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  border-radius: 16px;\n  background-color: #183153;\n  opacity: 0.8;\n  color: white;\n  padding: 10px 20px;\n}\n.multi-container[_ngcontent-%COMP%] {\n  border: 1px solid darkgray;\n  background-color: #dddddd;\n  width: 100%;\n  padding: 10px;\n}\ntable[_ngcontent-%COMP%] {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n.dot[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: inherit;\n}\n.dot.run[_ngcontent-%COMP%] {\n  background-color: green;\n}\n.dot.stop[_ngcontent-%COMP%] {\n  background-color: red;\n}\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\ntd[_ngcontent-%COMP%]   .label-custom[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .label-custom[_ngcontent-%COMP%] {\n  width: 10px;\n  padding-top: 6px;\n  margin-top: -25px;\n  height: 10px;\n}\ntd[_ngcontent-%COMP%]   .filter-dash[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .filter-dash[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\ntd[_ngcontent-%COMP%]   .filter-dash.min[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .filter-dash.min[_ngcontent-%COMP%] {\n  max-width: 48px;\n}\ntd[_ngcontent-%COMP%]   .filter-dash.tot[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .filter-dash.tot[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\ntd[_ngcontent-%COMP%]   .radio-dash[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .radio-dash[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\ntd[_ngcontent-%COMP%]   .radio-dash.buy[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .radio-dash.buy[_ngcontent-%COMP%] {\n  color: green;\n}\ntd[_ngcontent-%COMP%]   .radio-dash.sell[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .radio-dash.sell[_ngcontent-%COMP%] {\n  color: red;\n}\ntd[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  border-radius: 16px;\n}\ntd[_ngcontent-%COMP%]   .status-icon.play[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .status-icon.play[_ngcontent-%COMP%] {\n  background-color: green;\n}\ntd[_ngcontent-%COMP%]   .status-icon.pause[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .status-icon.pause[_ngcontent-%COMP%] {\n  background-color: black;\n}\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #dddddd;\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  opacity: 0;\n}\ninput[type=radio][_ngcontent-%COMP%]    + path[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: -24px;\n}\ninput[_ngcontent-%COMP%]    + svg[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ninput[class=all][_ngcontent-%COMP%]:hover    + svg[_ngcontent-%COMP%], input[class=all][_ngcontent-%COMP%]:checked    + svg[_ngcontent-%COMP%], input[class=all][_ngcontent-%COMP%]:focus    + svg[_ngcontent-%COMP%] {\n  fill: #006dd9;\n}\n@media screen and (max-width: 600px) {\n  .hidden-column[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .filter-dash[_ngcontent-%COMP%] {\n    max-width: 60px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2hvbWUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDRUo7QURBRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0VKO0FERUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0VGO0FEQUE7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0dGO0FER0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ0RGO0FERUU7RUFDRSx1QkFBQTtBQ0FKO0FERUU7RUFDRSxxQkFBQTtBQ0FKO0FER0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0FGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENFO0VBQ0UsZUFBQTtBQ0NKO0FEQU07RUFDRSxlQUFBO0FDRVI7QURBSTtFQUNFLGdCQUFBO0FDRU47QURDRTtFQUNFLGlCQUFBO0FDQ0o7QURBSTtFQUNFLFlBQUE7QUNFTjtBREFJO0VBQ0UsVUFBQTtBQ0VOO0FERUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURDSTtFQUNFLHVCQUFBO0FDQ047QURDSTtFQUNFLHVCQUFBO0FDQ047QURLQTtFQUNFLHlCQUFBO0FDRkY7QURJQTtFQUVJLFVBQUE7QUNGSjtBRE1BO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDSEY7QURNQTtFQUNFLGVBQUE7QUNIRjtBRE1BOzs7RUFHRSxhQUFBO0FDSEY7QURLQTtFQUlFO0lBQ0Usd0JBQUE7RUNMRjs7RURPQTtJQUNFLDBCQUFBO0VDSkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFycm93e1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiAzNHB4O1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmLmxlZnR7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTI1cHg7XG4gIH1cbiAgJi5yaWdodHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdG9wOiAtOTJweDtcbiAgICByaWdodDogLTJweDtcbiAgfVxufVxuXG4uY29pbi1jYXJke1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MzE1MztcbiAgb3BhY2l0eTogMC44O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5tdWx0aS1jb250YWluZXJ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbnRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcblxuICAuaGlkZGVuLWNvbHVtbntcbiAgIC8vZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5kb3Qge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XG4gICYucnVue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB9XG4gICYuc3RvcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cbn1cbnRkLCB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgLmxhYmVsLWN1c3RvbXtcbiAgICB3aWR0aDoxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICB9XG4gIC5maWx0ZXItZGFzaHtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgICAmLm1pbntcbiAgICAgICAgbWF4LXdpZHRoOjQ4cHg7XG4gICAgICB9XG4gICAgJi50b3R7XG4gICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgfVxuICAucmFkaW8tZGFzaHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAmLmJ1eXtcbiAgICAgIGNvbG9yOiBncmVlbjtcbiAgICB9XG4gICAgJi5zZWxse1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gIH1cblxuICAuc3RhdHVzLWljb257XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICYucGxheXtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICAmLnBhdXNle1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG5cbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbn1cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgLy9kaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBwYXRoIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xufVxuXG5pbnB1dCArIHN2ZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXRbY2xhc3M9XCJhbGxcIl06aG92ZXIgKyBzdmcsXG5pbnB1dFtjbGFzcz1cImFsbFwiXTpjaGVja2VkICsgc3ZnLFxuaW5wdXRbY2xhc3M9XCJhbGxcIl06Zm9jdXMgKyBzdmcge1xuICBmaWxsOiByZ2IoMCwgMTA5LCAyMTcpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRhYmxlIHtcblxuICB9XG4gIC5oaWRkZW4tY29sdW1ue1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuZmlsdGVyLWRhc2h7XG4gICAgbWF4LXdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIi5hcnJvdyB7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDM0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFycm93LmxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgdG9wOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0yNXB4O1xufVxuLmFycm93LnJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0b3A6IC05MnB4O1xuICByaWdodDogLTJweDtcbn1cblxuLmNvaW4tY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzMTUzO1xuICBvcGFjaXR5OiAwLjg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4ubXVsdGktY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG50YWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZG90IHtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xufVxuLmRvdC5ydW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5kb3Quc3RvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxudGQsIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xufVxudGQgLmxhYmVsLWN1c3RvbSwgdGggLmxhYmVsLWN1c3RvbSB7XG4gIHdpZHRoOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgaGVpZ2h0OiAxMHB4O1xufVxudGQgLmZpbHRlci1kYXNoLCB0aCAuZmlsdGVyLWRhc2gge1xuICBtYXgtd2lkdGg6IDgwcHg7XG59XG50ZCAuZmlsdGVyLWRhc2gubWluLCB0aCAuZmlsdGVyLWRhc2gubWluIHtcbiAgbWF4LXdpZHRoOiA0OHB4O1xufVxudGQgLmZpbHRlci1kYXNoLnRvdCwgdGggLmZpbHRlci1kYXNoLnRvdCB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG50ZCAucmFkaW8tZGFzaCwgdGggLnJhZGlvLWRhc2gge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbnRkIC5yYWRpby1kYXNoLmJ1eSwgdGggLnJhZGlvLWRhc2guYnV5IHtcbiAgY29sb3I6IGdyZWVuO1xufVxudGQgLnJhZGlvLWRhc2guc2VsbCwgdGggLnJhZGlvLWRhc2guc2VsbCB7XG4gIGNvbG9yOiByZWQ7XG59XG50ZCAuc3RhdHVzLWljb24sIHRoIC5zdGF0dXMtaWNvbiB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG50ZCAuc3RhdHVzLWljb24ucGxheSwgdGggLnN0YXR1cy1pY29uLnBsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbnRkIC5zdGF0dXMtaWNvbi5wYXVzZSwgdGggLnN0YXR1cy1pY29uLnBhdXNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10gKyBwYXRoIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xufVxuXG5pbnB1dCArIHN2ZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXRbY2xhc3M9YWxsXTpob3ZlciArIHN2ZyxcbmlucHV0W2NsYXNzPWFsbF06Y2hlY2tlZCArIHN2ZyxcbmlucHV0W2NsYXNzPWFsbF06Zm9jdXMgKyBzdmcge1xuICBmaWxsOiAjMDA2ZGQ5O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGlkZGVuLWNvbHVtbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZpbHRlci1kYXNoIHtcbiAgICBtYXgtd2lkdGg6IDYwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'dashboard-component',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"]
        }, {
          type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, {
        detailsModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['detailsModal']
        }],
        stopModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['stopModal']
        }],
        cancelModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['cancelModal']
        }],
        transactionsModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['transactionsModal']
        }],
        multipleAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['multipleAction']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/home.component.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/home/home.component.ts ***!
    \************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppModulesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../core/services/auth.service */
    "./src/app/core/services/auth.service.ts");
    /* harmony import */


    var _core_services_action_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../core/services/action.service */
    "./src/app/core/services/action.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["settings"];
    };

    function HomeComponent_li_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Opzioni");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return ["dashboard"];
    };

    var _c2 = function _c2() {
      return ["strategies"];
    };

    var _c3 = function _c3(a0) {
      return {
        "padding-left": a0
      };
    }; // import {ActivatedRoute, Route, Router} from "@angular/router";


    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(authService, actionService, router) {
        _classCallCheck(this, HomeComponent);

        this.authService = authService;
        this.actionService = actionService;
        this.router = router;
        this.isOpen = true;
        this.getBalance();
        this.updatedAt = new Date();
        this.user = this.authService.user;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.updateBalance = setInterval(function () {
            _this17.getBalance();

            _this17.updatedAt = new Date();
          }, 20000);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.updateBalance);
        }
      }, {
        key: "getBalance",
        value: function getBalance() {
          this.actionService.getBtcBalance().subscribe();
        }
      }, {
        key: "parseDate",
        value: function parseDate(date) {
          var data = new Date(date); // tslint:disable-next-line:max-line-length

          return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + ' - ' + (data.getHours() < 10 ? '0' + data.getHours() : data.getHours()) + ':' + (data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()) + ':' + (data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds());
        }
      }, {
        key: "balanceWoFees",
        value: function balanceWoFees(bal, tax) {
          return (bal - tax).toFixed(8);
        }
      }, {
        key: "calculateFees",
        value: function calculateFees(value) {
          var tax = value - value / 100 * 0.1;
          return (value - tax).toFixed(8);
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          var _this18 = this;

          jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#sidebar').toggleClass('active');
            _this18.isOpen = !_this18.isOpen;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_action_service__WEBPACK_IMPORTED_MODULE_3__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["travel-component"]],
      decls: 63,
      vars: 20,
      consts: [[1, "site-wrapper"], [1, "navbar-crypto"], [1, "navbar", "navbar-expand-md"], ["href", "#", 1, "navbar-brand"], [1, "text-capitalize"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["alt", "", "width", "24", "src", "assets/icons/bars-solid.svg"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse", "mobile-menu", 2, "justify-content", "flex-end"], [1, "pr-3", "balance", 2, "color", "#f2f2f2"], [1, "d-sm-block", "d-md-none"], [1, "nav", "flex-column"], [1, "nav-item"], ["data-target", ".navbar-collapse.show", "data-toggle", "collapse", 1, "nav-link", "mobile", 3, "routerLink"], ["width", "22", "src", "assets/icons/tachometer-alt-solid.svg"], ["width", "22", "src", "assets/icons/tasks-solid.svg"], ["width", "22", "src", "assets/icons/folder-open-solid.svg"], [1, "btn", "btn-lg", 3, "click"], ["src", "../../../assets/icons/sign-out-alt-solid.svg", "width", "24", "alt", "logout"], ["role", "main", 1, "main-content", "container-fluid"], [1, "d-flex"], ["id", "sidebar", 1, "side-menu"], [1, "profile-img", "pointer", 3, "click"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Apri/Chiudi Menu", "src", "assets/bitcoin-brands.svg", 3, "width"], [1, "nav-link", "text-uppercase", "text-white", 3, "routerLink"], ["alt", "riepilogo", "width", "22", "src", "assets/icons/tachometer-alt-solid.svg"], [1, "ml-1"], ["alt", "strategie", "width", "22", "src", "assets/icons/tasks-solid.svg"], ["class", "nav-item", 4, "ngIf"], [1, "sides", 3, "ngStyle"], ["alt", "opzioni", "width", "22", "src", "assets/icons/folder-open-solid.svg"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ciao ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ULTIMO AGGIORNAMENTO:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "BILANCIO:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "BILANCIO SENZA TASSE:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "TASSE:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Riepilogo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Strategie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Opzioni");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_41_listener() {
            return ctx.authService.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "main", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_47_listener() {
            return ctx.openMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Riepilogo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Strategie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, HomeComponent_li_60_Template, 5, 2, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.user, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.parseDate(ctx.updatedAt), " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.actionService.balanceBtc, " BTC | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.balanceWoFees(ctx.actionService.balanceBtc, ctx.calculateFees(ctx.actionService.balanceBtc)), " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.calculateFees(ctx.actionService.balanceBtc), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.isOpen ? "135" : "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.role == "admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c3, ctx.isOpen ? "170px" : "65px"));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: [".site-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.site-wrapper[_ngcontent-%COMP%]   .alert-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 70px;\n  right: 15px;\n  max-width: 400px;\n  z-index: 1052;\n}\n.site-wrapper[_ngcontent-%COMP%]   .alert-wrapper[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%] {\n  z-index: 1;\n  background-color: #F49419;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   .mobile-menu[_ngcontent-%COMP%] {\n  background: #F49419;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  background-color: #f2f2f2;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #183153;\n  opacity: 0.8;\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding-top: 56px;\n  width: 170px;\n  z-index: 0;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  text-align: center;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  border-radius: 60%;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  border: 3px white solid;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n  vertical-align: text-top;\n}\n.site-wrapper[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  color: white;\n  min-height: 60px;\n}\n.site-wrapper[_ngcontent-%COMP%]   .start-btn[_ngcontent-%COMP%] {\n  background-color: #183153;\n  opacity: 0.8;\n}\n\n#sidebar.active[_ngcontent-%COMP%] {\n  min-width: 70px;\n  max-width: 70px;\n  text-align: center;\n}\n\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: 45px;\n}\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: left;\n}\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  text-align: center;\n  font-size: 0.85em;\n}\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  display: block;\n  font-size: 1.8em;\n  margin-bottom: 5px;\n}\n\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n\n#sidebar.active[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  top: auto;\n  bottom: 10px;\n  right: 50%;\n  transform: translateX(50%);\n}\n@media (max-width: 768px) {\n  \n  .site-wrapper[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .site-wrapper[_ngcontent-%COMP%]   .panel-side[_ngcontent-%COMP%] {\n    margin-left: 0%;\n  }\n  .site-wrapper[_ngcontent-%COMP%]   .sides[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n  }\n\n  .mobile-menu[_ngcontent-%COMP%] {\n    background: #183153 !important;\n    margin-left: -16px;\n    margin-bottom: -8px;\n    margin-right: -16px;\n    opacity: 0.8;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .balance[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 15px;\n  }\n\n  #sidebar.active[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  \n  #sidebar[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  \n  #sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n    font-size: 0.85em;\n  }\n\n  #sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 0;\n    display: block;\n    font-size: 1.8em;\n    margin-bottom: 5px;\n  }\n\n  \n  #sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px !important;\n  }\n\n  \n  .dropdown-toggle[_ngcontent-%COMP%]::after {\n    top: auto;\n    bottom: 10px;\n    right: 50%;\n    transform: translateX(50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFZRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDVkY7QURIRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0tKO0FESkk7RUFDRSxrQkFBQTtBQ01OO0FEQ0U7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUNDSjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FEQ0k7RUFDRSxtQkFBQTtBQ0NOO0FESUU7RUFDRSxPQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDRko7QURHSTtFQUVFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDRk47QURHTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREdRO0VBRUUsdUJBQUE7RUFDQSxrQkFBQTtBQ0ZWO0FER1U7RUFDRSx1QkFBQTtBQ0RaO0FES007RUFDRSxnQkFBQTtBQ0hSO0FES1U7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQ0haO0FEVUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNSSjtBRFdFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDVEo7QURjQSw0RUFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1hGO0FEY0Esd0hBQUE7QUFFQTtFQUNFLGdCQUFBO0FDWkY7QURjQTtFQUNFLGFBQUE7QUNYRjtBRGNBO0VBQ0UsZ0JBQUE7QUNYRjtBRGNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDWEY7QURjQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1hGO0FEY0EsK0JBQUE7QUFDQTtFQUNFLHdCQUFBO0FDWEY7QURjQTs7b0NBQUE7QUFHQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUdBLDBCQUFBO0FDWEY7QURjQTtFQUNFOztHQUFBO0VBSUU7SUFDRSxhQUFBO0VDWko7RURjRTtJQUNFLGVBQUE7RUNaSjtFRGNFO0lBQ0UsNEJBQUE7RUNaSjs7RURnQkE7SUFDRSw4QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUNiRjtFRGNFO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQ1pKOztFRGVBO0lBQ0UsYUFBQTtFQ1pGOztFRGdCQSxtREFBQTtFQUNBO0lBQ0UsY0FBQTtFQ2JGOztFRG1CQSw0Q0FBQTtFQUNBO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQ2hCRjs7RURtQkE7SUFDRSxlQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUNoQkY7O0VEbUJBLHFDQUFBO0VBQ0E7SUFDRSx3QkFBQTtFQ2hCRjs7RURtQkE7O3FDQUFBO0VBR0E7SUFDRSxTQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFHQSwwQkFBQTtFQ2hCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZS13cmFwcGVye1xuICAuYWxlcnQtd3JhcHBlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA3MHB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgei1pbmRleDoxMDUyO1xuICAgIC5hbGVydHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG4gIH1cblxuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5uYXZiYXItY3J5cHRve1xuICAgIHotaW5kZXg6MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ5NDE5O1xuXG4gICAgYXtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLm1vYmlsZS1tZW51e1xuICAgICAgYmFja2dyb3VuZDogI0Y0OTQxOTtcblxuICAgIH1cbiAgfVxuXG4gIG1haW4ubWFpbi1jb250ZW50e1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAuc2lkZS1tZW51e1xuICAgICAgLy9tYXJnaW4tdG9wOjIwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzMTUzO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBhZGRpbmctdG9wOiA1NnB4O1xuICAgICAgd2lkdGg6MTcwcHg7XG4gICAgICB6LWluZGV4OjA7XG4gICAgICAucHJvZmlsZS1pbWd7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBpbWd7XG4gICAgICAgICAgLy9tYXgtd2lkdGg6IDEzNXB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDYwJTtcbiAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggd2hpdGUgc29saWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubmF2e1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAubmF2LWxpbmt7XG4gICAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvb3RlcntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWluLWhlaWdodDogNjBweDtcbiAgfVxuXG4gIC5zdGFydC1idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MzE1MztcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbn1cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqVE9HR0xFIFNJREVCT0FSRCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuI3NpZGViYXIuYWN0aXZlIHtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBtYXgtd2lkdGg6IDcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogVG9nZ2xpbmcgdGhlIHNpZGViYXIgaGVhZGVyIGNvbnRlbnQsIGhpZGUgdGhlIGJpZyBoZWFkaW5nIFtoM10gYW5kIHNob3dpbmcgdGhlIHNtYWxsIGhlYWRpbmcgW3N0cm9uZ10gYW5kIHZpY2UgdmVyc2EqL1xuXG4jc2lkZWJhci5hY3RpdmUgdWx7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG59XG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSBzcGFuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3NpZGViYXIgdWwgbGkgYSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xufVxuXG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAgMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLyogU2FtZSBkcm9wZG93biBsaW5rcyBwYWRkaW5nKi9cbiNzaWRlYmFyLmFjdGl2ZSB1bCB1bCBhIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuXG4vKiBDaGFuZ2luZyB0aGUgYXJyb3cgcG9zaXRpb24gdG8gYm90dG9tIGNlbnRlciBwb3NpdGlvbixcbiAgIHRyYW5zbGF0ZVgoNTAlKSB3b3JrcyB3aXRoIHJpZ2h0OiA1MCVcbiAgIHRvIGFjY3VyYXRlbHkgIGNlbnRlciB0aGUgYXJyb3cgKi9cbiNzaWRlYmFyLmFjdGl2ZSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLyogODBweCBhbmQgaXRzIGNvbnRlbnQgYWxpZ25lZCB0byBjZW50cmUuIFB1c2hpbmcgaXQgb2ZmIHRoZSBzY3JlZW4gd2l0aCB0aGVcbiAgICAgbmVnYXRpdmUgbGVmdCBtYXJnaW5cbiAgKi9cbiAgLnNpdGUtd3JhcHBlcntcbiAgICAuc2lkZS1tZW51e1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnBhbmVsLXNpZGUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xuICAgIH1cbiAgICAuc2lkZXN7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuXG4gICAgfVxuICB9XG4gIC5tb2JpbGUtbWVudXtcbiAgICBiYWNrZ3JvdW5kOiAjMTgzMTUzICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgLmJhbGFuY2V7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICB9XG4gIH1cbiAgI3NpZGViYXIuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cblxuICAvKiBSZWFwcGVhcmluZyB0aGUgc2lkZWJhciBvbiB0b2dnbGUgYnV0dG9uIGNsaWNrICovXG4gICNzaWRlYmFyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG5cblxuXG4gIC8qIERvd25zaXplIHRoZSBuYXZpZ2F0aW9uIGxpbmtzIGZvbnQgc2l6ZSAqL1xuICAjc2lkZWJhci5hY3RpdmUgdWwgbGkgYSB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICB9XG5cbiAgI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAgMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG4gIC8qIEFkanVzdCB0aGUgZHJvcGRvd24gbGlua3MgcGFkZGluZyovXG4gICNzaWRlYmFyLmFjdGl2ZSB1bCB1bCBhIHtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBDaGFuZ2luZyB0aGUgYXJyb3cgcG9zaXRpb24gdG8gYm90dG9tIGNlbnRlciBwb3NpdGlvbixcbiAgICB0cmFuc2xhdGVYKDUwJSkgd29ya3Mgd2l0aCByaWdodDogNTAlXG4gICAgdG8gYWNjdXJhdGVseSAgY2VudGVyIHRoZSBhcnJvdyAqL1xuICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICByaWdodDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICB9XG59XG4iLCIuc2l0ZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNpdGUtd3JhcHBlciAuYWxlcnQtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA3MHB4O1xuICByaWdodDogMTVweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgei1pbmRleDogMTA1Mjtcbn1cbi5zaXRlLXdyYXBwZXIgLmFsZXJ0LXdyYXBwZXIgLmFsZXJ0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLnNpdGUtd3JhcHBlciAubmF2YmFyLWNyeXB0byB7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDk0MTk7XG59XG4uc2l0ZS13cmFwcGVyIC5uYXZiYXItY3J5cHRvIGEge1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2l0ZS13cmFwcGVyIC5uYXZiYXItY3J5cHRvIC5tb2JpbGUtbWVudSB7XG4gIGJhY2tncm91bmQ6ICNGNDk0MTk7XG59XG4uc2l0ZS13cmFwcGVyIG1haW4ubWFpbi1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG4uc2l0ZS13cmFwcGVyIG1haW4ubWFpbi1jb250ZW50IC5zaWRlLW1lbnUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODMxNTM7XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiA1NnB4O1xuICB3aWR0aDogMTcwcHg7XG4gIHotaW5kZXg6IDA7XG59XG4uc2l0ZS13cmFwcGVyIG1haW4ubWFpbi1jb250ZW50IC5zaWRlLW1lbnUgLnByb2ZpbGUtaW1nIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNpdGUtd3JhcHBlciBtYWluLm1haW4tY29udGVudCAuc2lkZS1tZW51IC5wcm9maWxlLWltZyBpbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNjAlO1xufVxuLnNpdGUtd3JhcHBlciBtYWluLm1haW4tY29udGVudCAuc2lkZS1tZW51IC5wcm9maWxlLWltZyBpbWc6aG92ZXIge1xuICBib3JkZXI6IDNweCB3aGl0ZSBzb2xpZDtcbn1cbi5zaXRlLXdyYXBwZXIgbWFpbi5tYWluLWNvbnRlbnQgLnNpZGUtbWVudSAubmF2IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5zaXRlLXdyYXBwZXIgbWFpbi5tYWluLWNvbnRlbnQgLnNpZGUtbWVudSAubmF2IC5uYXYtbGluayBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbn1cbi5zaXRlLXdyYXBwZXIgZm9vdGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuLnNpdGUtd3JhcHBlciAuc3RhcnQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MzE1MztcbiAgb3BhY2l0eTogMC44O1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqVE9HR0xFIFNJREVCT0FSRCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuI3NpZGViYXIuYWN0aXZlIHtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBtYXgtd2lkdGg6IDcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogVG9nZ2xpbmcgdGhlIHNpZGViYXIgaGVhZGVyIGNvbnRlbnQsIGhpZGUgdGhlIGJpZyBoZWFkaW5nIFtoM10gYW5kIHNob3dpbmcgdGhlIHNtYWxsIGhlYWRpbmcgW3N0cm9uZ10gYW5kIHZpY2UgdmVyc2EqL1xuI3NpZGViYXIuYWN0aXZlIHVsIHtcbiAgbWFyZ2luLXRvcDogNDVweDtcbn1cblxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNzaWRlYmFyIHVsIGxpIGEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuODVlbTtcbn1cblxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEgaSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLyogU2FtZSBkcm9wZG93biBsaW5rcyBwYWRkaW5nKi9cbiNzaWRlYmFyLmFjdGl2ZSB1bCB1bCBhIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuXG4vKiBDaGFuZ2luZyB0aGUgYXJyb3cgcG9zaXRpb24gdG8gYm90dG9tIGNlbnRlciBwb3NpdGlvbixcbiAgIHRyYW5zbGF0ZVgoNTAlKSB3b3JrcyB3aXRoIHJpZ2h0OiA1MCVcbiAgIHRvIGFjY3VyYXRlbHkgIGNlbnRlciB0aGUgYXJyb3cgKi9cbiNzaWRlYmFyLmFjdGl2ZSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLyogODBweCBhbmQgaXRzIGNvbnRlbnQgYWxpZ25lZCB0byBjZW50cmUuIFB1c2hpbmcgaXQgb2ZmIHRoZSBzY3JlZW4gd2l0aCB0aGVcbiAgICAgbmVnYXRpdmUgbGVmdCBtYXJnaW5cbiAgKi9cbiAgLnNpdGUtd3JhcHBlciAuc2lkZS1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5zaXRlLXdyYXBwZXIgLnBhbmVsLXNpZGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuICAuc2l0ZS13cmFwcGVyIC5zaWRlcyB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tb2JpbGUtbWVudSB7XG4gICAgYmFja2dyb3VuZDogIzE4MzE1MyAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIC5tb2JpbGUtbWVudSAuYmFsYW5jZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG5cbiAgI3NpZGViYXIuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLyogUmVhcHBlYXJpbmcgdGhlIHNpZGViYXIgb24gdG9nZ2xlIGJ1dHRvbiBjbGljayAqL1xuICAjc2lkZWJhciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAvKiBEb3duc2l6ZSB0aGUgbmF2aWdhdGlvbiBsaW5rcyBmb250IHNpemUgKi9cbiAgI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEge1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBmb250LXNpemU6IDAuODVlbTtcbiAgfVxuXG4gICNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIGkge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG4gIC8qIEFkanVzdCB0aGUgZHJvcGRvd24gbGlua3MgcGFkZGluZyovXG4gICNzaWRlYmFyLmFjdGl2ZSB1bCB1bCBhIHtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBDaGFuZ2luZyB0aGUgYXJyb3cgcG9zaXRpb24gdG8gYm90dG9tIGNlbnRlciBwb3NpdGlvbixcbiAgICB0cmFuc2xhdGVYKDUwJSkgd29ya3Mgd2l0aCByaWdodDogNTAlXG4gICAgdG8gYWNjdXJhdGVseSAgY2VudGVyIHRoZSBhcnJvdyAqL1xuICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICByaWdodDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'travel-component',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _core_services_action_service__WEBPACK_IMPORTED_MODULE_3__["ActionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/home.guard.ts":
  /*!********************************************!*\
    !*** ./src/app/modules/home/home.guard.ts ***!
    \********************************************/

  /*! exports provided: HomeGuard */

  /***/
  function srcAppModulesHomeHomeGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeGuard", function () {
      return HomeGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../core/services/auth.service */
    "./src/app/core/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeGuard = /*#__PURE__*/function () {
      function HomeGuard(authService, router) {
        _classCallCheck(this, HomeGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(HomeGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.token) {
            return true;
          } else {
            return this.router.createUrlTree(['auth']);
          }
        }
      }]);

      return HomeGuard;
    }();

    HomeGuard.ɵfac = function HomeGuard_Factory(t) {
      return new (t || HomeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    HomeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HomeGuard,
      factory: HomeGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/home.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/modules/home/home.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppModulesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _home_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home.routing */
    "./src/app/modules/home/home.routing.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/modules/home/home.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/modules/home/dashboard/dashboard.component.ts");
    /* harmony import */


    var _404_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./404/404.component */
    "./src/app/modules/home/404/404.component.ts");
    /* harmony import */


    var _home_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.guard */
    "./src/app/modules/home/home.guard.ts");
    /* harmony import */


    var _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./indicators/indicators.component */
    "./src/app/modules/home/indicators/indicators.component.ts");
    /* harmony import */


    var _strategies_strategies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./strategies/strategies.component */
    "./src/app/modules/home/strategies/strategies.component.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/modules/home/settings/settings.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/modal/modal.component */
    "./src/app/shared/modal/modal.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/alert/alert.component */
    "./src/app/shared/alert/alert.component.ts");
    /* harmony import */


    var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular-slider/ngx-slider */
    "./node_modules/@angular-slider/ngx-slider/__ivy_ngcc__/fesm2015/angular-slider-ngx-slider.js"); // import {Ng5SliderModule} from 'ng5-slider';
    // import {BrowserModule} from "@angular/platform-browser";
    // import {HttpClientModule} from "@angular/common/http";


    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      providers: [_home_guard__WEBPACK_IMPORTED_MODULE_5__["HomeGuard"]],
      imports: [[_home_routing__WEBPACK_IMPORTED_MODULE_1__["AuthenticationRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_13__["NgxSliderModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_6__["IndicatorsComponent"], _strategies_strategies_component__WEBPACK_IMPORTED_MODULE_7__["StrategiesComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _404_404_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"]],
        imports: [_home_routing__WEBPACK_IMPORTED_MODULE_1__["AuthenticationRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_13__["NgxSliderModule"]],
        exports: [_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_home_routing__WEBPACK_IMPORTED_MODULE_1__["AuthenticationRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_13__["NgxSliderModule"]],
          providers: [_home_guard__WEBPACK_IMPORTED_MODULE_5__["HomeGuard"]],
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_6__["IndicatorsComponent"], _strategies_strategies_component__WEBPACK_IMPORTED_MODULE_7__["StrategiesComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _404_404_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"]],
          exports: [_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/home.routing.ts":
  /*!**********************************************!*\
    !*** ./src/app/modules/home/home.routing.ts ***!
    \**********************************************/

  /*! exports provided: AuthenticationRoutingModule */

  /***/
  function srcAppModulesHomeHomeRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function () {
      return AuthenticationRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/modules/home/home.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/modules/home/dashboard/dashboard.component.ts");
    /* harmony import */


    var _home_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home.guard */
    "./src/app/modules/home/home.guard.ts");
    /* harmony import */


    var _strategies_strategies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./strategies/strategies.component */
    "./src/app/modules/home/strategies/strategies.component.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/modules/home/settings/settings.component.ts");

    var routes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
      canActivate: [_home_guard__WEBPACK_IMPORTED_MODULE_4__["HomeGuard"]],
      children: [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
      } // ,
      // {
      //   path: 'indicators',
      //   component: IndicatorsComponent
      // }
      , {
        path: 'strategies',
        component: _strategies_strategies_component__WEBPACK_IMPORTED_MODULE_5__["StrategiesComponent"]
      }, {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"]
      }]
    }];

    var AuthenticationRoutingModule = function AuthenticationRoutingModule() {
      _classCallCheck(this, AuthenticationRoutingModule);
    };

    AuthenticationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AuthenticationRoutingModule
    });
    AuthenticationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AuthenticationRoutingModule_Factory(t) {
        return new (t || AuthenticationRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthenticationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/indicators/indicators.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/home/indicators/indicators.component.ts ***!
    \*****************************************************************/

  /*! exports provided: IndicatorsComponent */

  /***/
  function srcAppModulesHomeIndicatorsIndicatorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndicatorsComponent", function () {
      return IndicatorsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IndicatorsComponent = function IndicatorsComponent() {
      _classCallCheck(this, IndicatorsComponent);
    };

    IndicatorsComponent.ɵfac = function IndicatorsComponent_Factory(t) {
      return new (t || IndicatorsComponent)();
    };

    IndicatorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IndicatorsComponent,
      selectors: [["indicators-component"]],
      decls: 2,
      vars: 0,
      consts: [[1, "sub-header"]],
      template: function IndicatorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Indicators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9pbmRpY2F0b3JzL2luZGljYXRvcnMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndicatorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'indicators-component',
          templateUrl: './indicators.component.html',
          styleUrls: ['./indicators.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/settings/settings.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/home/settings/settings.component.ts ***!
    \*************************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppModulesHomeSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../core/services/auth.service */
    "./src/app/core/services/auth.service.ts");
    /* harmony import */


    var _core_services_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/services/action.service */
    "./src/app/core/services/action.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SettingsComponent = /*#__PURE__*/function () {
      function SettingsComponent(authService, actionService) {
        _classCallCheck(this, SettingsComponent);

        this.authService = authService;
        this.actionService = actionService;
        this.newPw = '';
        this.confirmPw = '';
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "update",
        value: function update(name, pw) {
          this.actionService.updatePassword(name, pw).subscribe();
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"]));
    };

    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["settings-component"]],
      decls: 28,
      vars: 6,
      consts: [[1, "sub-header"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "home-tab", "data-toggle", "tab", "href", "#user", "role", "tab", "aria-controls", "user", "aria-selected", "true", 1, "nav-link", "active"], ["id", "myTabContent", 1, "tab-content"], ["id", "user", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-9", "mb-4"], ["type", "text", 3, "disabled", "readOnly", "ngModel"], ["type", "password", 3, "ngModel", "ngModelChange"], [1, "col-sm-9"], [1, "btn", "start-btn", 3, "disabled", "click"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Profilo utente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nome utente:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nuova password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.newPw = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Conferma nuova password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.confirmPw = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_26_listener() {
            return ctx.update(ctx.authService.user, ctx.newPw);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "PROCEDI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("readOnly", true)("ngModel", ctx.authService.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPw);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPw);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.newPw !== ctx.confirmPw || ctx.newPw === "");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: [".tab-pane[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2hvbWUvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItcGFuZSB7XG4gIHBhZGRpbmc6MnJlbSAwO1xufVxuXG4ubmF2LWxpbmsge1xuICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMywzLDM3LDAuMSkgMTAwJSk7XG59XG4ubmF2LWxpbmsuYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6I2ZmZjtcbn1cblxuXG4iLCIudGFiLXBhbmUge1xuICBwYWRkaW5nOiAycmVtIDA7XG59XG5cbi5uYXYtbGluay5hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'settings-component',
          templateUrl: './settings.component.html',
          styleUrls: ['./settings.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _core_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/strategies/strategies.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/home/strategies/strategies.component.ts ***!
    \*****************************************************************/

  /*! exports provided: StrategiesComponent */

  /***/
  function srcAppModulesHomeStrategiesStrategiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StrategiesComponent", function () {
      return StrategiesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/alert/alert.service */
    "./src/app/shared/alert/alert.service.ts");
    /* harmony import */


    var _core_services_action_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/services/action.service */
    "./src/app/core/services/action.service.ts");
    /* harmony import */


    var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular-slider/ngx-slider */
    "./node_modules/@angular-slider/ngx-slider/__ivy_ngcc__/fesm2015/angular-slider-ngx-slider.js");
    /* harmony import */


    var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/modal/modal.component */
    "./src/app/shared/modal/modal.component.ts");

    var _c0 = ["confirmModal"];

    function StrategiesComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nome:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StrategiesComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function StrategiesComponent_div_16_Template_input_blur_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.checkIfExist(ctx_r15.formValue.strategy_name.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StrategiesComponent_option_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r17.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r17.name);
      }
    }

    function StrategiesComponent_span_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " compera");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StrategiesComponent_div_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prezzo vendita:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StrategiesComponent_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StrategiesComponent_div_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Direzione:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StrategiesComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Crescente");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Decrescente");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StrategiesComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Numero ordini:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StrategiesComponent_div_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-slider", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r9.options);
      }
    }

    function StrategiesComponent_p_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Prezzo di vendita: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r11.formValue.strategy_sell_price.value, "1.1-8"), " BTC ");
      }
    }

    function StrategiesComponent_span_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "per strategia");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StrategiesComponent_p_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ordine: ", ctx_r13.formValue.strategy_direction.value === "up" ? "Crescente" : "Decrescente", "");
      }
    }

    function StrategiesComponent_p_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("N\xB0 Ordini: ", ctx_r14.formValue.strategy_size.value, "");
      }
    }

    var StrategiesComponent = /*#__PURE__*/function () {
      function StrategiesComponent(fb, alert, actionService, alertService, datePipe) {
        _classCallCheck(this, StrategiesComponent);

        this.fb = fb;
        this.alert = alert;
        this.actionService = actionService;
        this.alertService = alertService;
        this.datePipe = datePipe;
        this.pairs = [];
        this.strategyType = 'single';
        this.strLength = 0;
        this.activeList = [{
          pair: 'BNBBTC'
        }, {
          pair: 'NULSBTC'
        }, {
          pair: 'NEOBTC'
        }, {
          pair: 'LINKBTC'
        }, {
          pair: 'IOTABTC'
        }, {
          pair: 'ETCBTC'
        }, {
          pair: 'KNCBTC'
        }, {
          pair: 'WTCBTC'
        }, {
          pair: 'SNGLSBTC'
        }, {
          pair: 'GASBTC'
        }, {
          pair: 'SNMBTC'
        }, {
          pair: 'BQXBTC'
        }, {
          pair: 'QTUMBTC'
        }, {
          pair: 'LTCBTC'
        }, {
          pair: 'ETHBTC'
        }, {
          pair: 'ZRXBTC'
        }, {
          pair: 'OMGBTC'
        }, {
          pair: '1INCHBTC'
        }, {
          pair: 'AAVEBTC'
        }, {
          pair: 'ACMBTC'
        }, {
          pair: 'ADABTC'
        }, {
          pair: 'ADXBTC'
        }, {
          pair: 'AERGOBTC'
        }, {
          pair: 'AIONBTC'
        }, {
          pair: 'AKROBTC'
        }, {
          pair: 'ALGOBTC'
        }, {
          pair: 'ALICEBTC'
        }, {
          pair: 'ALPHABTC'
        }, {
          pair: 'AMBBTC'
        }, {
          pair: 'ANKRBTC'
        }, {
          pair: 'APPCBTC'
        }, {
          pair: 'ARBTC'
        }, {
          pair: 'ARDRBTC'
        }, {
          pair: 'ARKBTC'
        }, {
          pair: 'ARPABTC'
        }, {
          pair: 'ASRBTC'
        }, {
          pair: 'ASTBTC'
        }, {
          pair: 'ATABTC'
        }, {
          pair: 'ATMBTC'
        }, {
          pair: 'ATOMBTC'
        }, {
          pair: 'AUCTIONBTC'
        }, {
          pair: 'AUDIOBTC'
        }, {
          pair: 'AUTOBTC'
        }, {
          pair: 'AVABTC'
        }, {
          pair: 'AVAXBTC'
        }, {
          pair: 'AXSBTC'
        }, {
          pair: 'BADGERBTC'
        }, {
          pair: 'BAKEBTC'
        }, {
          pair: 'BANDBTC'
        }, {
          pair: 'BARBTC'
        }, {
          pair: 'BATBTC'
        }, {
          pair: 'BCDBTC'
        }, {
          pair: 'BCHBTC'
        }, {
          pair: 'BEAMBTC'
        }, {
          pair: 'BELBTC'
        }, {
          pair: 'BLZBTC'
        }, {
          pair: 'BNTBTC'
        }, {
          pair: 'BRDBTC'
        }, {
          pair: 'BTCSTBTC'
        }, {
          pair: 'BTGBTC'
        }, {
          pair: 'BTSBTC'
        }, {
          pair: 'BZRXBTC'
        }, {
          pair: 'CAKEBTC'
        }, {
          pair: 'CDTBTC'
        }, {
          pair: 'CELOBTC'
        }, {
          pair: 'CELRBTC'
        }, {
          pair: 'CFXBTC'
        }, {
          pair: 'CHRBTC'
        }, {
          pair: 'CHZBTC'
        }, {
          pair: 'CKBBTC'
        }, {
          pair: 'CNDBTC'
        }, {
          pair: 'COMPBTC'
        }, {
          pair: 'COSBTC'
        }, {
          pair: 'COTIBTC'
        }, {
          pair: 'CRVBTC'
        }, {
          pair: 'CTKBTC'
        }, {
          pair: 'CTSIBTC'
        }, {
          pair: 'CTXCBTC'
        }, {
          pair: 'CVCBTC'
        }, {
          pair: 'DASHBTC'
        }, {
          pair: 'DATABTC'
        }, {
          pair: 'DCRBTC'
        }, {
          pair: 'DEGOBTC'
        }, {
          pair: 'DIABTC'
        }, {
          pair: 'DLTBTC'
        }, {
          pair: 'DNTBTC'
        }, {
          pair: 'DOCKBTC'
        }, {
          pair: 'DODOBTC'
        }, {
          pair: 'DOGEBTC'
        }, {
          pair: 'DOTBTC'
        }, {
          pair: 'DREPBTC'
        }, {
          pair: 'DUSKBTC'
        }, {
          pair: 'EGLDBTC'
        }, {
          pair: 'ELFBTC'
        }, {
          pair: 'ENJBTC'
        }, {
          pair: 'EOSBTC'
        }, {
          pair: 'EPSBTC'
        }, {
          pair: 'EVXBTC'
        }, {
          pair: 'EZBTC'
        }, {
          pair: 'FETBTC'
        }, {
          pair: 'FILBTC'
        }, {
          pair: 'FIOBTC'
        }, {
          pair: 'FIROBTC'
        }, {
          pair: 'FISBTC'
        }, {
          pair: 'FLMBTC'
        }, {
          pair: 'FORBTC'
        }, {
          pair: 'FORTHBTC'
        }, {
          pair: 'FRONTBTC'
        }, {
          pair: 'FTMBTC'
        }, {
          pair: 'FTTBTC'
        }, {
          pair: 'FUNBTC'
        }, {
          pair: 'FXSBTC'
        }, {
          pair: 'GLMBTC'
        }, {
          pair: 'GOBTC'
        }, {
          pair: 'GRSBTC'
        }, {
          pair: 'GRTBTC'
        }, {
          pair: 'GTCBTC'
        }, {
          pair: 'GTOBTC'
        }, {
          pair: 'GVTBTC'
        }, {
          pair: 'GXSBTC'
        }, {
          pair: 'HARDBTC'
        }, {
          pair: 'HBARBTC'
        }, {
          pair: 'HIVEBTC'
        }, {
          pair: 'HNTBTC'
        }, {
          pair: 'ICPBTC'
        }, {
          pair: 'ICXBTC'
        }, {
          pair: 'IDEXBTC'
        }, {
          pair: 'INJBTC'
        }, {
          pair: 'IOSTBTC'
        }, {
          pair: 'IOTXBTC'
        }, {
          pair: 'IRISBTC'
        }, {
          pair: 'JSTBTC'
        }, {
          pair: 'JUVBTC'
        }, {
          pair: 'KAVABTC'
        }, {
          pair: 'KEEPBTC'
        }, {
          pair: 'KLAYBTC'
        }, {
          pair: 'KMDBTC'
        }, {
          pair: 'LINABTC'
        }, {
          pair: 'LITBTC'
        }, {
          pair: 'LOOMBTC'
        }, {
          pair: 'LPTBTC'
        }, {
          pair: 'LRCBTC'
        }, {
          pair: 'LSKBTC'
        }, {
          pair: 'LTOBTC'
        }, {
          pair: 'LUNABTC'
        }, {
          pair: 'MANABTC'
        }, {
          pair: 'MATICBTC'
        }, {
          pair: 'MDABTC'
        }, {
          pair: 'MDTBTC'
        }, {
          pair: 'MDXBTC'
        }, {
          pair: 'MIRBTC'
        }, {
          pair: 'MITHBTC'
        }, {
          pair: 'MKRBTC'
        }, {
          pair: 'MTHBTC'
        }, {
          pair: 'MTLBTC'
        }, {
          pair: 'NANOBTC'
        }, {
          pair: 'NASBTC'
        }, {
          pair: 'NAVBTC'
        }, {
          pair: 'NBSBTC'
        }, {
          pair: 'NEARBTC'
        }, {
          pair: 'NEBLBTC'
        }, {
          pair: 'NKNBTC'
        }, {
          pair: 'NMRBTC'
        }, {
          pair: 'NUBTC'
        }, {
          pair: 'NXSBTC'
        }, {
          pair: 'OAXBTC'
        }, {
          pair: 'OCEANBTC'
        }, {
          pair: 'OGBTC'
        }, {
          pair: 'OGNBTC'
        }, {
          pair: 'OMBTC'
        }, {
          pair: 'ONEBTC'
        }, {
          pair: 'ONGBTC'
        }, {
          pair: 'ONTBTC'
        }, {
          pair: 'ORNBTC'
        }, {
          pair: 'OXTBTC'
        }, {
          pair: 'PAXGBTC'
        }, {
          pair: 'PERLBTC'
        }, {
          pair: 'PERPBTC'
        }, {
          pair: 'PHABTC'
        }, {
          pair: 'PHBBTC'
        }, {
          pair: 'PIVXBTC'
        }, {
          pair: 'PNTBTC'
        }, {
          pair: 'POABTC'
        }, {
          pair: 'POLSBTC'
        }, {
          pair: 'POLYBTC'
        }, {
          pair: 'PONDBTC'
        }, {
          pair: 'POWRBTC'
        }, {
          pair: 'PPTBTC'
        }, {
          pair: 'PSGBTC'
        }, {
          pair: 'QKCBTC'
        }, {
          pair: 'QLCBTC'
        }, {
          pair: 'QSPBTC'
        }, {
          pair: 'RAMPBTC'
        }, {
          pair: 'RCNBTC'
        }, {
          pair: 'RDNBTC'
        }, {
          pair: 'REEFBTC'
        }, {
          pair: 'RENBTC'
        }, {
          pair: 'RENBTCBTC'
        }, {
          pair: 'REPBTC'
        }, {
          pair: 'REQBTC'
        }, {
          pair: 'RIFBTC'
        }, {
          pair: 'RLCBTC'
        }, {
          pair: 'ROSEBTC'
        }, {
          pair: 'RSRBTC'
        }, {
          pair: 'RUNEBTC'
        }, {
          pair: 'RVNBTC'
        }, {
          pair: 'SANDBTC'
        }, {
          pair: 'SCBTC'
        }, {
          pair: 'SCRTBTC'
        }, {
          pair: 'SFPBTC'
        }, {
          pair: 'SKLBTC'
        }, {
          pair: 'SKYBTC'
        }, {
          pair: 'SNTBTC'
        }, {
          pair: 'SNXBTC'
        }, {
          pair: 'SOLBTC'
        }, {
          pair: 'SRMBTC'
        }, {
          pair: 'STEEMBTC'
        }, {
          pair: 'STMXBTC'
        }, {
          pair: 'STORJBTC'
        }, {
          pair: 'STPTBTC'
        }, {
          pair: 'STRAXBTC'
        }, {
          pair: 'STXBTC'
        }, {
          pair: 'SUPERBTC'
        }, {
          pair: 'SUSDBTC'
        }, {
          pair: 'SUSHIBTC'
        }, {
          pair: 'SXPBTC'
        }, {
          pair: 'SYSBTC'
        }, {
          pair: 'TCTBTC'
        }, {
          pair: 'TFUELBTC'
        }, {
          pair: 'THETABTC'
        }, {
          pair: 'TKOBTC'
        }, {
          pair: 'TLMBTC'
        }, {
          pair: 'TOMOBTC'
        }, {
          pair: 'TORNBTC'
        }, {
          pair: 'TRBBTC'
        }, {
          pair: 'TROYBTC'
        }, {
          pair: 'TRUBTC'
        }, {
          pair: 'TRXBTC'
        }, {
          pair: 'TVKBTC'
        }, {
          pair: 'TWTBTC'
        }, {
          pair: 'UMABTC'
        }, {
          pair: 'UNFIBTC'
        }, {
          pair: 'UNIBTC'
        }, {
          pair: 'UTKBTC'
        }, {
          pair: 'VETBTC'
        }, {
          pair: 'VIABTC'
        }, {
          pair: 'VIBBTC'
        }, {
          pair: 'VIDTBTC'
        }, {
          pair: 'VITEBTC'
        }, {
          pair: 'WABIBTC'
        }, {
          pair: 'WANBTC'
        }, {
          pair: 'WAVESBTC'
        }, {
          pair: 'WBTCBTC'
        }, {
          pair: 'WINGBTC'
        }, {
          pair: 'WNXMBTC'
        }, {
          pair: 'WPRBTC'
        }, {
          pair: 'WRXBTC'
        }, {
          pair: 'XEMBTC'
        }, {
          pair: 'XLMBTC'
        }, {
          pair: 'XMRBTC'
        }, {
          pair: 'XRPBTC'
        }, {
          pair: 'XTZBTC'
        }, {
          pair: 'XVGBTC'
        }, {
          pair: 'XVSBTC'
        }, {
          pair: 'YFIBTC'
        }, {
          pair: 'YFIIBTC'
        }, {
          pair: 'YOYOBTC'
        }, {
          pair: 'ZECBTC'
        }, {
          pair: 'ZENBTC'
        }, {
          pair: 'ZILBTC'
        }, {
          pair: 'DGBBTC'
        }, {
          pair: 'BALBTC'
        }, {
          pair: 'ANTBTC'
        }, {
          pair: 'KSMBTC'
        }, {
          pair: 'AGIXBTC'
        }];
        this.strategiesForm = this.fb.group({
          strategy_name: [''],
          strategy_pairs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          strategy_capital: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          strategy_buy_price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          strategy_sell_price: [''],
          strategy_pairs_size: [''],
          strategy_direction: [''],
          strategy_size: ['']
        });
        this.options = {
          floor: 2,
          ceil: 50,
          step: 1
        };
        this.optionsStr = {
          floor: 0,
          ceil: 200,
          step: 1
        };
        this.manageValidators(this.strategyType);
      }

      _createClass(StrategiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadPairs();
        }
      }, {
        key: "manageValidators",
        value: function manageValidators(str) {
          if (str === 'single') {
            this.strategiesForm.reset();
            this.formValue.strategy_name.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.formValue.strategy_sell_price.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.formValue.strategy_direction.clearValidators();
            this.formValue.strategy_size.clearValidators();
            this.updateFormStatus();
          } else {
            this.isStrPresent = false;
            this.strategiesForm.reset();
            lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](this.formValue, function (s) {
              if (s.name !== 'strategy_pairs_size') {
                s.setValue('');
              }
            });
            this.formValue.strategy_name.clearValidators();
            this.formValue.strategy_sell_price.clearValidators();
            this.formValue.strategy_direction.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.formValue.strategy_size.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.updateFormStatus();
          }
        }
      }, {
        key: "updateFormStatus",
        value: function updateFormStatus() {
          this.formValue.strategy_name.updateValueAndValidity();
          this.formValue.strategy_sell_price.updateValueAndValidity();
          this.formValue.strategy_direction.updateValueAndValidity();
          this.formValue.strategy_size.updateValueAndValidity();
        }
      }, {
        key: "checkIfExist",
        value: function checkIfExist(name) {
          var _this19 = this;

          if (name !== '' && this.strategyType === 'single') {
            this.actionService.checkStrategy(name).subscribe(function (resp) {
              if (lodash__WEBPACK_IMPORTED_MODULE_3__["isString"](resp.success)) {
                _this19.isStrPresent = false;
              } else {
                _this19.isStrPresent = true;

                _this19.alertService.addMessage('danger', 'Nome strategia presente');
              }

              return _this19.isStrPresent;
            }, function (error) {});
          }
        }
      }, {
        key: "loadPairs",
        value: function loadPairs() {
          var _this20 = this;

          this.actionService.getAllPairs().subscribe(function (resp) {
            if (_this20.formValue.strategy_pairs_size.value === 0) {
              var result;
              result = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](resp, function (o) {
                return o.price <= 0.000002;
              });
              _this20.pairs = [];
              lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](_this20.activeList, function (o) {
                lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](result, function (p) {
                  if (o.pair === p.name) {
                    _this20.pairs.push(p);
                  }
                });
              });

              _this20.formValue.strategy_pairs_size.setValue(200);

              _this20.strLength = _this20.pairs.length;
            } else {
              var value = _this20.formValue.strategy_pairs_size.value < 100 ? _this20.formValue.strategy_pairs_size.value < 10 ? '0.0000000' + _this20.formValue.strategy_pairs_size.value.toString() : '0.000000' + _this20.formValue.strategy_pairs_size.value.toString() : '0.00000' + _this20.formValue.strategy_pairs_size.value.toString();
              var result2;
              result2 = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](resp, function (o) {
                return o.price <= parseFloat(value);
              });
              _this20.pairs = [];
              lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](_this20.activeList, function (o) {
                lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](result2, function (p) {
                  if (o.pair === p.name) {
                    _this20.pairs.push(p);
                  }
                });
              }); // console.log(this.pairs, this.pairs.length)

              _this20.strLength = _this20.pairs.length;
            }
          }, function (error) {});
        }
      }, {
        key: "loadPrices",
        value: function loadPrices() {
          var pairs = this.formValue.strategy_pairs.value;

          if (pairs) {
            var price = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.pairs, {
              name: pairs
            });
            this.currentPrice = price.price;
            var formattedPrice = Math.floor(price.price.toFixed(8));
            this.formValue.strategy_buy_price.setValue(price.price.toFixed(8));
            this.formValue.strategy_sell_price.setValue(price.price.toFixed(8));
          }
        }
      }, {
        key: "initializeStrategy",
        value: function initializeStrategy() {
          var _this21 = this;

          var quantity = this.formValue.strategy_capital.value / parseFloat(this.formValue.strategy_buy_price.value);
          var date = new Date();
          var payload = {
            name: this.formValue.strategy_name.value,
            coin_pair: this.formValue.strategy_pairs.value,
            capital: this.formValue.strategy_capital.value,
            quantity: Math.floor(parseFloat(quantity.toFixed(3))),
            current_capital: this.formValue.strategy_capital.value,
            current_status: 'BUY',
            buy_price: parseFloat(this.formValue.strategy_buy_price.value),
            sell_price: parseFloat(this.formValue.strategy_sell_price.value),
            date: this.datePipe.transform(date, 'yyyy-MM-dd'),
            status: 'ACTIVE'
          }; // console.log(payload);

          this.actionService.setStrategy(payload).subscribe(function (resp) {
            if (resp) {
              _this21.close();

              _this21.actionService.getBtcBalance().subscribe();

              _this21.alertService.addMessage('success', 'Strategia inizializzata con successo');
            }
          }, function (error) {
            _this21.close();
          });
        }
      }, {
        key: "initializeStrategies",
        value: function initializeStrategies() {
          var _this22 = this;

          var quantity = this.formValue.strategy_capital.value / parseFloat(this.formValue.strategy_buy_price.value);
          var payload = {
            coin_pair: this.formValue.strategy_pairs.value,
            capital: this.formValue.strategy_capital.value,
            quantity: Math.round(parseFloat(quantity.toFixed(3))),
            price: parseFloat(this.formValue.strategy_buy_price.value),
            n_strategy: this.formValue.strategy_size.value,
            order: this.formValue.strategy_direction.value
          }; // console.log(payload);

          this.actionService.setStrategies(payload).subscribe(function (resp) {
            if (resp) {
              _this22.close();

              _this22.actionService.getBtcBalance().subscribe();

              _this22.alertService.addMessage('success', resp.success);
            }
          }, function (error) {
            _this22.close();

            _this22.alertService.addMessage('danger', error.error);
          });
        }
      }, {
        key: "editStrategy",
        value: function editStrategy() {
          this.openConfirmModal();
        }
      }, {
        key: "openConfirmModal",
        value: function openConfirmModal() {
          this.confirmModal.show('modal-lg');
        }
      }, {
        key: "close",
        value: function close() {
          this.confirmModal.dismiss();
        }
      }, {
        key: "addFees",
        value: function addFees(value) {
          // console.log(value);
          var taxed = value + value / 100 * 0.1; // console.log('value taxed', taxed);

          this.formValue.strategy_capital_taxed.setValue(taxed);
        }
      }, {
        key: "formValue",
        get: function get() {
          return this.strategiesForm.controls;
        }
      }]);

      return StrategiesComponent;
    }();

    StrategiesComponent.ɵfac = function StrategiesComponent_Factory(t) {
      return new (t || StrategiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_action_service__WEBPACK_IMPORTED_MODULE_5__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]));
    };

    StrategiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StrategiesComponent,
      selectors: [["strategies-component"]],
      viewQuery: function StrategiesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confirmModal = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])],
      decls: 80,
      vars: 27,
      consts: [[1, "sub-header"], [1, "row"], [1, "col-sm-2"], ["for", "single-order"], ["value", "single", "type", "radio", "id", "single-order", 3, "ngModel", "ngModelChange"], [1, "col-sm-3"], ["for", "multiple-order"], ["type", "radio", "value", "multi", "id", "multiple-order", 3, "ngModel", "ngModelChange"], [1, "col-sm-7"], [1, "strategies-container"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["class", "col-sm-3 form-group", 4, "ngIf"], ["class", "col-sm-9 form-group", 4, "ngIf"], [1, "col-sm-3", "form-group"], ["for", "size_pairs"], [1, "col-sm-9", "form-group", "custom-slider"], ["formControlName", "strategy_pairs_size", "id", "size_pairs", 3, "options", "ngModelChange"], ["for", "select-pairs"], [1, "col-sm-9", "form-group"], ["formControlName", "strategy_pairs", "id", "select-pairs", 1, "form-control", 3, "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "buy-price"], ["formControlName", "strategy_capital", "type", "number", "id", "capital", 1, "form-control", "inputStr"], [4, "ngIf"], ["formControlName", "strategy_buy_price", "type", "number", "id", "buy-price", 1, "form-control", "inputStr"], ["class", "col-sm-9 form-group custom-slider", 4, "ngIf"], [1, "btn", "start-btn", "float-right", 3, "disabled"], ["confirmModal", ""], [1, "app-modal-header"], [1, "app-modal-body", "text-center"], [1, "btn", "btn-danger", "float-left", 3, "click"], [1, "btn", "start-btn", "float-right", 3, "click"], ["for", "strategy-name"], ["formControlName", "strategy_name", "type", "text", "id", "strategy-name", 1, "form-control", 3, "blur"], [3, "value"], ["for", "sell-price"], ["formControlName", "strategy_sell_price", "type", "number", "id", "sell-price", 1, "form-control", "inputStr"], ["for", "direction"], ["formControlName", "strategy_direction", "type", "number", "id", "direction", 1, "form-control", "inputStr"], ["value", "up"], ["value", "down"], ["formControlName", "strategy_size", 3, "options"]],
      template: function StrategiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Strategie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StrategiesComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.strategyType = $event;
          })("ngModelChange", function StrategiesComponent_Template_input_ngModelChange_5_listener() {
            return ctx.manageValidators(ctx.strategyType);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Ordine singolo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StrategiesComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.strategyType = $event;
          })("ngModelChange", function StrategiesComponent_Template_input_ngModelChange_9_listener() {
            return ctx.manageValidators(ctx.strategyType);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ordine multiplo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StrategiesComponent_Template_form_ngSubmit_13_listener() {
            return ctx.openConfirmModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StrategiesComponent_div_15_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, StrategiesComponent_div_16_Template, 2, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Satoshi max:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngx-slider", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StrategiesComponent_Template_ngx_slider_ngModelChange_21_listener() {
            return ctx.loadPairs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Seleziona scambio: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StrategiesComponent_Template_select_ngModelChange_28_listener() {
            return ctx.loadPrices();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, StrategiesComponent_option_30_Template, 2, 2, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Capitale BTC:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "(tasse escluse)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Prezzo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, StrategiesComponent_span_41_Template, 2, 0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, StrategiesComponent_div_45_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, StrategiesComponent_div_46_Template, 2, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, StrategiesComponent_div_47_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, StrategiesComponent_div_48_Template, 6, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, StrategiesComponent_div_49_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, StrategiesComponent_div_50_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "AVVIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "modal", null, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Conferma azione");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, StrategiesComponent_p_68_Template, 3, 4, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, StrategiesComponent_span_71_Template, 2, 0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, StrategiesComponent_p_72_Template, 2, 1, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, StrategiesComponent_p_73_Template, 2, 1, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "CONFERMA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StrategiesComponent_Template_button_click_76_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "DECLINA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StrategiesComponent_Template_button_click_78_listener() {
            return ctx.strategyType === "single" ? ctx.initializeStrategy() : ctx.initializeStrategies();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "CONFERMA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.strategyType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.strategyType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.strategiesForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.optionsStr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(N\xB0 ", ctx.strLength, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pairs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.strategiesForm.invalid || ctx.isStrPresent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Stai inizializzando \"", ctx.strategyType === "single" ? ctx.formValue.strategy_name.value : "un ordine Multiplo", "\" con i seguenti settaggi:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Scambio: ", ctx.formValue.strategy_pairs.value, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Prezzo di compera: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](67, 24, ctx.formValue.strategy_buy_price.value, "1.1-8"), " BTC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Capitale: ", ctx.formValue.strategy_capital.value, " BTC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
      styles: [".strategies-container[_ngcontent-%COMP%] {\n  max-width: 60%;\n  margin-top: 35px;\n  \n  \n}\n.strategies-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .strategies-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.strategies-container[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.custom-slider[_ngcontent-%COMP%]   .ngx-slider.ngx-slider-pointer[_ngcontent-%COMP%] {\n  width: 22px !important;\n  height: 22px !important;\n  background-color: #183153 !important;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2hvbWUvc3RyYXRlZ2llcy9zdHJhdGVnaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvc3RyYXRlZ2llcy9zdHJhdGVnaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUUsY0FBQTtFQUNBLGdCQUFBO0VBR0EsZ0NBQUE7RUFRQSxZQUFBO0FDVkY7QURHRTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUNESjtBRE1FO0VBQ0UsMEJBQUE7QUNKSjtBRGFJO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQ1ZOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL3N0cmF0ZWdpZXMvc3RyYXRlZ2llcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnN0cmF0ZWdpZXMtY29udGFpbmVyIHtcblxuICBtYXgtd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXRvcDogMzVweDtcblxuXG4gIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xuICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuXG4gIC8qIEZpcmVmb3ggKi9cbiAgaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgfVxuXG5cblxuXG59XG4uY3VzdG9tLXNsaWRlcntcbiAgLm5neC1zbGlkZXJ7XG4gICAgJi5uZ3gtc2xpZGVyLXBvaW50ZXJ7XG4gICAgICB3aWR0aDogMjJweCAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzMTUzICFpbXBvcnRhbnQ7XG4gICAgICBvcGFjaXR5OjAuODtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG4iLCIuc3RyYXRlZ2llcy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG4gIC8qIEZpcmVmb3ggKi9cbn1cbi5zdHJhdGVnaWVzLWNvbnRhaW5lciBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbi5zdHJhdGVnaWVzLWNvbnRhaW5lciBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuLnN0cmF0ZWdpZXMtY29udGFpbmVyIGlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4uY3VzdG9tLXNsaWRlciAubmd4LXNsaWRlci5uZ3gtc2xpZGVyLXBvaW50ZXIge1xuICB3aWR0aDogMjJweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MzE1MyAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StrategiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'strategies-component',
          templateUrl: './strategies.component.html',
          styleUrls: ['./strategies.component.scss'],
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _core_services_action_service__WEBPACK_IMPORTED_MODULE_5__["ActionService"]
        }, {
          type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
        }];
      }, {
        confirmModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['confirmModal']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/alert/alert.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/alert/alert.component.ts ***!
    \*************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppSharedAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alert.service */
    "./src/app/shared/alert/alert.service.ts");

    var _c0 = ["alertContainer"];

    var AlertComponent = /*#__PURE__*/function () {
      function AlertComponent(alertService) {
        _classCallCheck(this, AlertComponent);

        this.alertService = alertService;

        this.close = function (currentAlert) {
          $(currentAlert).alert('close');
        };
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.alertService.getMessage().subscribe(function (alert) {
            var currentAlert = $("<div class=\"alert alert-".concat(alert.type, " alert-dismissible fade\" role=\"alert\">").concat(alert.message, "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" ><span aria-hidden=\"true\">&times;</span></button></div>"));
            $(_this23.el.nativeElement).append(currentAlert);
            setTimeout(function () {
              currentAlert.addClass('show');
            });
            setTimeout(function () {
              $(currentAlert).alert('close');
            }, 15000);
          });
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ɵfac = function AlertComponent_Factory(t) {
      return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]));
    };

    AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertComponent,
      selectors: [["alert"]],
      viewQuery: function AlertComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
        }
      },
      decls: 2,
      vars: 0,
      consts: [["id", "alert_container", 1, "container"], ["alertContainer", ""]],
      template: function AlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'alert',
          templateUrl: 'alert.component.html'
        }]
      }], function () {
        return [{
          type: _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
        }];
      }, {
        el: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['alertContainer']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/alert/alert.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/alert/alert.service.ts ***!
    \***********************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppSharedAlertAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AlertService = /*#__PURE__*/function () {
      function AlertService() {
        _classCallCheck(this, AlertService);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AlertService, [{
        key: "addMessage",
        value: function addMessage(type, message) {
          this.subject.next({
            type: type,
            message: message
          });
        }
      }, {
        key: "getMessage",
        value: function getMessage() {
          return this.subject.asObservable();
        }
      }]);

      return AlertService;
    }();

    AlertService.ɵfac = function AlertService_Factory(t) {
      return new (t || AlertService)();
    };

    AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlertService,
      factory: AlertService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/http-resources/api.interceptor.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/http-resources/api.interceptor.ts ***!
    \**********************************************************/

  /*! exports provided: APIInterceptor */

  /***/
  function srcAppSharedHttpResourcesApiInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIInterceptor", function () {
      return APIInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var APIInterceptor = /*#__PURE__*/function () {
      function APIInterceptor(_sanitazer) {
        _classCallCheck(this, APIInterceptor);

        this._sanitazer = _sanitazer;
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
      }

      _createClass(APIInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var escapeHtml = function escapeHtml(unsafe) {
            return unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
          };

          var apiReq = req.clone({
            url: this.api + req.url
          });

          if (lodash__WEBPACK_IMPORTED_MODULE_2__["isString"](apiReq)) {
            // @ts-ignore
            apiReq = this._sanitazer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, escapeHtml(apiReq));
          }

          return next.handle(apiReq);
        }
      }]);

      return APIInterceptor;
    }();

    APIInterceptor.ɵfac = function APIInterceptor_Factory(t) {
      return new (t || APIInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]));
    };

    APIInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: APIInterceptor,
      factory: APIInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](APIInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/http-resources/error.interceptor.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/http-resources/error.interceptor.ts ***!
    \************************************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppSharedHttpResourcesErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../core/services/auth.service */
    "./src/app/core/services/auth.service.ts");
    /* harmony import */


    var _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../alert/alert.service */
    "./src/app/shared/alert/alert.service.ts");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(authService, alert) {
        _classCallCheck(this, ErrorInterceptor);

        this.authService = authService;
        this.alert = alert;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this24 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
              // auto logout if 401 response returned from api
              _this24.authService.logout();
            }

            var error = err.error;

            _this24.alert.addMessage('danger', error.error);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]));
    };

    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/http-resources/token.interceptor.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/http-resources/token.interceptor.ts ***!
    \************************************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppSharedHttpResourcesTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor() {
        _classCallCheck(this, TokenInterceptor);
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var token = localStorage.getItem('token');

          if (token) {
            req = req.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(token)
              }
            });
          }

          return next.handle(req);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
      return new (t || TokenInterceptor)();
    };

    TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptor,
      factory: TokenInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modal/modal.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/modal/modal.component.ts ***!
    \*************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppSharedModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["myModal"];
    var _c1 = [[["", 8, "app-modal-header"]], [["", 8, "app-modal-body"]], [["", 8, "app-modal-footer"]]];
    var _c2 = [".app-modal-header", ".app-modal-body", ".app-modal-footer"]; // const $ = require('jquery');

    var ModalComponent = /*#__PURE__*/function () {
      function ModalComponent() {
        _classCallCheck(this, ModalComponent);

        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ModalComponent, [{
        key: "show",
        value: function show(optClass) {
          // open modal using jQuery
          $(this.myModal.nativeElement).children().addClass(optClass ? optClass : '').end().modal({
            backdrop: 'static',
            keyboard: false
          });
        }
      }, {
        key: "isVisible",
        value: function isVisible() {
          return $(this.myModal.nativeElement).hasClass('show');
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          // close modal using jQuery
          $(this.myModal.nativeElement).modal('hide');
          this.closed.emit();
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.ɵfac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)();
    };

    ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalComponent,
      selectors: [["modal"]],
      viewQuery: function ModalComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myModal = _t.first);
        }
      },
      outputs: {
        closed: "closed"
      },
      ngContentSelectors: _c2,
      decls: 13,
      vars: 0,
      consts: [["id", "myModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", 1, "modal", "fade"], ["myModal", ""], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_6_listener() {
            return ctx.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

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
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'modal',
          templateUrl: 'modal.component.html'
        }]
      }], function () {
        return [];
      }, {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['myModal']
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      local: true,
      // api: 'http://127.0.0.1:3000/'
      // api: 'http://ec2-15-160-2-188.eu-south-1.compute.amazonaws.com:3000/' --AndreaP
      // api: 'http://ec2-35-152-50-80.eu-south-1.compute.amazonaws.com:3000/' -- Mattia
      // api: 'http://ec2-35-152-99-6.eu-south-1.compute.amazonaws.com:3000/' -- LeoNardo Ancellotti
      // api: 'http://ec2-15-161-232-210.eu-south-1.compute.amazonaws.com:3000/' -- Misi86
      // api: 'http://ec2-15-160-23-179.eu-south-1.compute.amazonaws.com:3000/' -- MarcoP
      api: 'http://ec2-15-161-58-222.eu-south-1.compute.amazonaws.com:3000/' // api: 'http://ec2-15-161-134-114.eu-south-1.compute.amazonaws.com:3000/' -- CapocciaMarco
      // api: 'http://ec2-15-161-146-7.eu-south-1.compute.amazonaws.com:3000/' -- AlessiaRoberti
      // api: 'http://ec2-35-152-51-132.eu-south-1.compute.amazonaws.com:3000/' -- DanieleRotella

    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/isi/Documenti/project/cryptoDashboard/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map