(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _error_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/not-found/not-found.component */ "./src/app/error/not-found/not-found.component.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var APP_ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: "" + _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["MAIN_PAGE_URL"]
    },
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["NOT_FOUND_PAGE_URL"],
        component: _error_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-content {\r\n  width: 90%;\r\n  height: 100vh;\r\n  margin: 0px auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb250ZW50IHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div appTheme appMetricsProcessor>\r\n  <app-header></app-header>\r\n  <app-loading-spinner></app-loading-spinner>\r\n  <app-error-panel></app-error-panel>\r\n  <div class=\"app-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(sessionStorageService) {
        this.sessionStorageService = sessionStorageService;
    }
    AppComponent.prototype.handleDeleteKeyboardEvent = function (evt) {
        if (this.sessionStorageService.isUser()) {
            if (evt.key === 'PrintScreen') {
                this.copyToClipboard();
                event.preventDefault();
            }
        }
    };
    AppComponent.prototype.onRightMouseClick = function (evt) {
        if (this.sessionStorageService.isUser()) {
            if (evt.which === 3) {
                event.preventDefault();
            }
        }
    };
    AppComponent.prototype.copyToClipboard = function () {
        var aux = document.createElement('input');
        aux.setAttribute('value', 'DO NOT EVENT TRY IT!');
        document.body.appendChild(aux);
        aux.select();
        document.execCommand('copy');
        document.body.removeChild(aux);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "handleDeleteKeyboardEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onRightMouseClick", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_1__["SessionStorageService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_page_main_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.module */ "./src/app/main-page/main-page.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _user_edit_user_edit_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-edit/user-edit.module */ "./src/app/user-edit/user-edit.module.ts");
/* harmony import */ var _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialogs/dialogs.module */ "./src/app/dialogs/dialogs.module.ts");
/* harmony import */ var _error_error_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error/error.module */ "./src/app/error/error.module.ts");
/* harmony import */ var _interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interceptor */ "./src/app/interceptor.ts");
/* harmony import */ var _redactor_redactor_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./redactor/redactor.module */ "./src/app/redactor/redactor.module.ts");
/* harmony import */ var _tests_tests_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tests/tests.module */ "./src/app/tests/tests.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _moderator_moderator_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./moderator/moderator.module */ "./src/app/moderator/moderator.module.ts");
/* harmony import */ var _metrics_processor_metrics_processor_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./metrics-processor/metrics-processor.module */ "./src/app/metrics-processor/metrics-processor.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _main_page_main_page_module__WEBPACK_IMPORTED_MODULE_3__["MainPageModule"],
                _user_edit_user_edit_module__WEBPACK_IMPORTED_MODULE_10__["UserEditModule"],
                _tests_tests_module__WEBPACK_IMPORTED_MODULE_15__["TestsModule"],
                _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_8__["AuthenticationModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_11__["DialogsModule"],
                _error_error_module__WEBPACK_IMPORTED_MODULE_12__["ErrorModule"],
                _redactor_redactor_module__WEBPACK_IMPORTED_MODULE_14__["RedactorModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_16__["UserModule"],
                _moderator_moderator_module__WEBPACK_IMPORTED_MODULE_17__["ModeratorModule"],
                _metrics_processor_metrics_processor_module__WEBPACK_IMPORTED_MODULE_18__["MetricsProcessorModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor__WEBPACK_IMPORTED_MODULE_13__["Interceptor"],
                    multi: true
                },
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _login_page_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page/reset-password/reset-password.component */ "./src/app/authentication/login-page/reset-password/reset-password.component.ts");
/* harmony import */ var _guards_not_logged_user_quard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/not-logged-user-quard */ "./src/app/guards/not-logged-user-quard.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/authentication/login-page/login-page.component.ts");
/* harmony import */ var _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration-page/registration-page.component */ "./src/app/authentication/registration-page/registration-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AUTHENTICATION_PAGE_ROUTES = [
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["REGISTER_PAGE_URL"],
        component: _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationPageComponent"],
        canActivate: [_guards_not_logged_user_quard__WEBPACK_IMPORTED_MODULE_4__["NotLoggedUserGuard"]],
        runGuardsAndResolvers: 'always'
    },
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["LOGIN_PAGE_URL"],
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"],
        canActivate: [_guards_not_logged_user_quard__WEBPACK_IMPORTED_MODULE_4__["NotLoggedUserGuard"]],
        runGuardsAndResolvers: 'always'
    },
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["RESET_PASSWORD_PAGE_URL"],
        component: _login_page_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"],
        canActivate: [_guards_not_logged_user_quard__WEBPACK_IMPORTED_MODULE_4__["NotLoggedUserGuard"]],
    },
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(AUTHENTICATION_PAGE_ROUTES),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.css":
/*!***************************************************!*\
  !*** ./src/app/authentication/authentication.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication-form-wrapper {\r\n  width: 300px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.authentication-form-button {\r\n  margin-top: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aGVudGljYXRpb24tZm9ybS13cmFwcGVyIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYXV0aGVudGljYXRpb24tZm9ybS1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/authentication/login-page/login-page.component.ts");
/* harmony import */ var _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-page/registration-page.component */ "./src/app/authentication/registration-page/registration-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_page_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-page/reset-password/reset-password.component */ "./src/app/authentication/login-page/reset-password/reset-password.component.ts");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/authentication/authentication-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _authentication_routing_module__WEBPACK_IMPORTED_MODULE_8__["AuthenticationRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            declarations: [
                _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"],
                _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationPageComponent"],
                _login_page_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/login-page/login-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/authentication/login-page/login-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgotten-password {\r\n  margin-top: 20px;\r\n  cursor: pointer;\r\n  float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmdvdHRlbi1wYXNzd29yZCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/authentication/login-page/login-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/authentication/login-page/login-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication-form-wrapper \" >\r\n    <form [formGroup]=\"loginForm\" class=\"material-form authentication-form\">\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput formControlName=\"username\" placeholder=\"Nazwa użytkownika\">\r\n          <mat-error *ngIf=\"loginForm.get('username').hasError('required')\">\r\n            Nazwa użytkownika jest wymagana.\r\n          </mat-error>\r\n          <mat-error *ngIf=\"loginForm.get('username').hasError('minlength')\">\r\n            Nazwa użytkownika musi zawierać co najmniej{{minUsernameLength}} znaków.\r\n          </mat-error>\r\n          <mat-error *ngIf=\"loginForm.get('username').hasError('maxlength')\">\r\n            Nazwa użytkownika może zawierać maksymalnie {{maxUsernameLength}} znaków.\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput formControlName=\"password\" type=\"password\" placeholder=\"Hasło\">\r\n\r\n          <mat-error *ngIf=\"loginForm.get('password').hasError('required')\">\r\n            Hasło jest wymagane\r\n          </mat-error>\r\n          <mat-error *ngIf=\"loginForm.get('password').hasError('minlength')\">\r\n            Hasło musi zawierać co najmniej {{minPasswordLength}} znaków.\r\n          </mat-error>\r\n          <mat-error *ngIf=\"loginForm.get('password').hasError('maxlength')\">\r\n            Hasło może zawierać maksymalnie {{maxPasswordLength}} znaków.\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"authentication-form-button\">\r\n        <button mat-button [disabled]=\"loginForm.invalid || getProcessingLogin()\" type=\"submit\" (click)=\"login()\">Zaloguj się</button>\r\n      </div>\r\n\r\n    </form>\r\n  <div>\r\n    <div class=\"forgotten-password\"\r\n         [routerLink]=\"['/', resetPasswordPage]\">\r\n        Zapomniałeś hasła?\r\n    </div>\r\n    <div style=\"clear:both\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authentication/login-page/login-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/authentication/login-page/login-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/authentication/services/authentication.service.ts");
/* harmony import */ var _core_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/loading-spinner/loading-spinner.component */ "./src/app/core/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/global-variables */ "./src/app/shared/utils/global-variables.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(formBuilder, authenticationService) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.minUsernameLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_4__["MIN_USERNAME_LENGTH"];
        this.maxUsernameLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_4__["MAX_USERNAME_LENGTH"];
        this.minPasswordLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_4__["MIN_PASSWORD_LENGTH"];
        this.maxPasswordLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_4__["MAX_PASSWORD_LENGTH"];
        this.resetPasswordPage = _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_5__["RESET_PASSWORD_PAGE_URL"];
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginPageComponent.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minUsernameLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxUsernameLength)
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minPasswordLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxPasswordLength)
                ]],
        });
    };
    LoginPageComponent.prototype.login = function () {
        this.authenticationService.login(this.loginForm.value);
    };
    LoginPageComponent.prototype.getProcessingLogin = function () {
        return _core_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"].showLoadingIndicator;
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/authentication/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/authentication/login-page/login-page.component.css"), __webpack_require__(/*! ../authentication.css */ "./src/app/authentication/authentication.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/authentication/login-page/reset-password/reset-password.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/authentication/login-page/reset-password/reset-password.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luLXBhZ2UvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/authentication/login-page/reset-password/reset-password.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/authentication/login-page/reset-password/reset-password.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication-form-wrapper \">\r\n  <div *ngIf=\"!wasSent; else resetRequestSended\">\r\n    <form [formGroup]=\"passwordResetForm\" class=\"material-form authentication-form\">\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput email formControlName=\"email\" placeholder=\"Email\">\r\n          <mat-error *ngIf=\"passwordResetForm.get('email').hasError('required')\">\r\n            Email jest wymagany\r\n          </mat-error>\r\n          <mat-error *ngIf=\"passwordResetForm.get('email').hasError('email')\">\r\n            Podaj prawidłowy adres email\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"authentication-form-button\">\r\n        <button mat-button\r\n                [disabled]=\"passwordResetForm.invalid || getProcessingReset()\"\r\n                type=\"submit\" (click)=\"resetPassword()\">Resetuj hasło</button>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n  <div>\r\n    <ng-template #resetRequestSended>\r\n      <span >\r\n        Jeśli email jest poprawny hasło zostało wysłane.\r\n      </span>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authentication/login-page/reset-password/reset-password.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/authentication/login-page/reset-password/reset-password.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/password.service */ "./src/app/authentication/services/password.service.ts");
/* harmony import */ var _core_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/loading-spinner/loading-spinner.component */ "./src/app/core/loading-spinner/loading-spinner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(formBuilder, passwordService) {
        this.formBuilder = formBuilder;
        this.passwordService = passwordService;
        this.wasSent = false;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ResetPasswordComponent.prototype.buildForm = function () {
        this.passwordResetForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        this.passwordService.resetPassword(this.passwordResetForm.value).subscribe(function () {
            _this.wasSent = true;
        });
    };
    ResetPasswordComponent.prototype.getProcessingReset = function () {
        return _core_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"].showLoadingIndicator;
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/authentication/login-page/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ../../authentication.css */ "./src/app/authentication/authentication.css"), __webpack_require__(/*! ./reset-password.component.css */ "./src/app/authentication/login-page/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_password_service__WEBPACK_IMPORTED_MODULE_2__["PasswordService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/authentication/registration-page/registration-confirm-password.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/authentication/registration-page/registration-confirm-password.ts ***!
  \***********************************************************************************/
/*! exports provided: RegistrationConfirmPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationConfirmPassword", function() { return RegistrationConfirmPassword; });
/* harmony import */ var _shared_utils_shared_confirm_password__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils/shared-confirm-password */ "./src/app/shared/utils/shared-confirm-password.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RegistrationConfirmPassword = /** @class */ (function (_super) {
    __extends(RegistrationConfirmPassword, _super);
    function RegistrationConfirmPassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegistrationConfirmPassword.prototype.matchPassword = function (abstractControl) {
        return _super.prototype.matchPasswordHelper.call(this, abstractControl, 'password', 'confirmPassword');
    };
    return RegistrationConfirmPassword;
}(_shared_utils_shared_confirm_password__WEBPACK_IMPORTED_MODULE_0__["SharedConfirmPassword"]));



/***/ }),

/***/ "./src/app/authentication/registration-page/registration-page.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/authentication/registration-page/registration-page.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdHJhdGlvbi1wYWdlL3JlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/authentication/registration-page/registration-page.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/authentication/registration-page/registration-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication-form-wrapper \">\r\n    <form [formGroup]=\"registerForm\" class=\"material-form authentication-form\">\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput formControlName=\"username\" placeholder=\"Nazwa użytkownika\">\r\n          <mat-error *ngIf=\"registerForm.get('username').hasError('required')\">\r\n            Nazwa użytkownika jest wymagana\r\n          </mat-error>\r\n          <mat-error *ngIf=\"registerForm.get('username').hasError('minlength')\">\r\n            Nazwa użytkownika musi zawierać co najmniej {{minUsernameLength}} znaków.\r\n          </mat-error>\r\n          <mat-error *ngIf=\"registerForm.get('username').hasError('maxlength')\">\r\n            Nazwa użytkownika może zawierać maksymalnie {{maxUsernameLength}} znaków.\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput formControlName=\"nameSurname\" placeholder=\"Imię i nazwisko\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"language\" placeholder=\"Język\">\r\n            <mat-option [value]=\"'pl'\">Polski</mat-option>\r\n            <mat-option [value]=\"'en'\">Angielski</mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"registerForm.get('language').hasError('required')\">\r\n            Język jest wymagany.\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput email formControlName=\"email\" placeholder=\"Email\">\r\n          <mat-error *ngIf=\"registerForm.get('email').hasError('required')\">\r\n            Email jest wymagany.\r\n          </mat-error>\r\n          <mat-error *ngIf=\"registerForm.get('email').hasError('email')\">\r\n            Podaj prawidłowy adres email.\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput formControlName=\"password\" type=\"password\" placeholder=\"Hasło\" >\r\n\r\n          <mat-error *ngIf=\"registerForm.get('password').hasError('required')\">\r\n            Hasło jest wymagane\r\n          </mat-error>\r\n          <mat-error *ngIf=\"registerForm.get('password').hasError('minlength')\">\r\n            Hasło musi zawierać co najmniej {{minPasswordLength}} znaków.\r\n          </mat-error>\r\n          <mat-error *ngIf=\"registerForm.get('password').hasError('maxlength')\">\r\n            Hasło może zawierać maksymalnie {{maxPasswordLength}} znaków.\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput formControlName=\"confirmPassword\" type=\"password\"\r\n                 placeholder=\"Potwierdź hasło\" [errorStateMatcher]=\"errorMatcher\">\r\n\r\n          <mat-error *ngIf=\"registerForm.get('confirmPassword').hasError('required')\">\r\n            Musisz potwierdzić hasło\r\n          </mat-error>\r\n          <mat-error\r\n                     *ngIf=\"registerForm.hasError('matchPassword')\">\r\n            Hasła są różne\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"authentication-form-button\">\r\n        <button mat-button\r\n                [disabled]=\"registerForm.invalid || registerForm.errors || getProcessingRegistration()\"\r\n                type=\"submit\" (click)=\"register()\"\r\n                >Zarejestruj</button>\r\n      </div>\r\n\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authentication/registration-page/registration-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/authentication/registration-page/registration-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RegistrationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageComponent", function() { return RegistrationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/authentication/services/authentication.service.ts");
/* harmony import */ var _shared_utils_confirm_password_error_state_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/confirm-password-error-state-matcher */ "./src/app/shared/utils/confirm-password-error-state-matcher.ts");
/* harmony import */ var _core_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/loading-spinner/loading-spinner.component */ "./src/app/core/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _registration_confirm_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-confirm-password */ "./src/app/authentication/registration-page/registration-confirm-password.ts");
/* harmony import */ var _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/utils/global-variables */ "./src/app/shared/utils/global-variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegistrationPageComponent = /** @class */ (function () {
    function RegistrationPageComponent(formBuilder, authenticationService) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.confirmPassword = new _registration_confirm_password__WEBPACK_IMPORTED_MODULE_5__["RegistrationConfirmPassword"]();
        this.errorMatcher = new _shared_utils_confirm_password_error_state_matcher__WEBPACK_IMPORTED_MODULE_3__["ConfirmPasswordErrorMatcher"]();
        this.minUsernameLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_6__["MIN_USERNAME_LENGTH"];
        this.maxUsernameLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_6__["MAX_USERNAME_LENGTH"];
        this.minPasswordLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_6__["MIN_PASSWORD_LENGTH"];
        this.maxPasswordLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_6__["MAX_PASSWORD_LENGTH"];
    }
    RegistrationPageComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    RegistrationPageComponent.prototype.buildForm = function () {
        this.registerForm = this.formBuilder.group({
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minUsernameLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxUsernameLength)
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minPasswordLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxPasswordLength)
                ]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            nameSurname: [''],
            language: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: this.confirmPassword.matchPassword
        });
    };
    RegistrationPageComponent.prototype.register = function () {
        this.authenticationService.register(this.registerForm.value);
    };
    RegistrationPageComponent.prototype.getProcessingRegistration = function () {
        return _core_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadingSpinnerComponent"].showLoadingIndicator;
    };
    RegistrationPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-page',
            template: __webpack_require__(/*! ./registration-page.component.html */ "./src/app/authentication/registration-page/registration-page.component.html"),
            styles: [__webpack_require__(/*! ./registration-page.component.css */ "./src/app/authentication/registration-page/registration-page.component.css"), __webpack_require__(/*! ../authentication.css */ "./src/app/authentication/authentication.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], RegistrationPageComponent);
    return RegistrationPageComponent;
}());



/***/ }),

/***/ "./src/app/authentication/services/authentication.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/authentication/services/authentication.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utils/backend-urls */ "./src/app/shared/utils/backend-urls.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/utils/global-variables */ "./src/app/shared/utils/global-variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient, sessionStorage, errorHandlingService, router) {
        this.httpClient = httpClient;
        this.sessionStorage = sessionStorage;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
    }
    AuthenticationService.prototype.handleValidUser = function (response) {
        this.sessionStorage.storeSession(response.body, response.headers.get('Authorization'));
        switch (this.sessionStorage.getUser().roles[0].name) {
            case _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_7__["ROLE_USER"]:
                this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_6__["USER_PAGE_URL"]]);
                break;
            case _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_7__["ROLE_MODERATOR"]:
                this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_6__["MODERATOR_PAGE_URL"]]);
                break;
            case _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_7__["ROLE_REDACTOR"]:
                this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_6__["REDACTOR_PAGE_URL"]]);
                break;
        }
    };
    AuthenticationService.prototype.login = function (loginDetails) {
        var _this = this;
        this.httpClient.post(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_5__["LOGIN_URL"], loginDetails, { observe: 'response' })
            .subscribe(function (response) {
            _this.handleValidUser(response);
        });
    };
    AuthenticationService.prototype.register = function (registerDetails) {
        var _this = this;
        this.httpClient.post(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_5__["REGISTER_URL"], registerDetails, { observe: 'response' })
            .subscribe(function (response) {
            _this.handleValidUser(response);
        });
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"],
            _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/authentication/services/password.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/services/password.service.ts ***!
  \*************************************************************/
/*! exports provided: PasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordService", function() { return PasswordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/backend-urls */ "./src/app/shared/utils/backend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordService = /** @class */ (function () {
    function PasswordService(httpClient) {
        this.httpClient = httpClient;
    }
    PasswordService.prototype.resetPassword = function (data) {
        return this.httpClient.post(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["PASSWORD_RESET_URL"], data);
    };
    PasswordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PasswordService);
    return PasswordService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "./src/app/core/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_panel_error_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-panel/error-panel.component */ "./src/app/core/error-panel/error-panel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"],
                _error_panel_error_panel_component__WEBPACK_IMPORTED_MODULE_5__["ErrorPanelComponent"]
            ],
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"],
                _error_panel_error_panel_component__WEBPACK_IMPORTED_MODULE_5__["ErrorPanelComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/error-panel/error-panel.component.css":
/*!************************************************************!*\
  !*** ./src/app/core/error-panel/error-panel.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-wrapper {\r\n  width: 50%;\r\n  margin: 50px auto;\r\n  background-color: var(--error);\r\n  color: var(--primary-text-color);\r\n  font-size: 20px;\r\n  padding: 20px;\r\n  text-align: center;\r\n  min-height: 150px;\r\n  border: 1px var(--primary-text-color) solid;\r\n}\r\na, a:hover, a:visited {\r\n  color: var(--primary-text-color);\r\n  cursor: default;\r\n  text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9lcnJvci1wYW5lbC9lcnJvci1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9lcnJvci1wYW5lbC9lcnJvci1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLXdyYXBwZXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpIHNvbGlkO1xyXG59XHJcbmEsIGE6aG92ZXIsIGE6dmlzaXRlZCB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/core/error-panel/error-panel.component.html":
/*!*************************************************************!*\
  !*** ./src/app/core/error-panel/error-panel.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hasError() === true\" class=\"error-wrapper\">\r\n  <a *ngIf=\"errorCode() != 0\" href=\"https://http.cat/{{errorCode()}}\">\r\n    <h1>Błąd</h1>\r\n  </a>\r\n  <ng-container *ngIf=\"errorCode() && errorMessage(); then standardError; else fatalError\">\r\n\r\n  </ng-container>\r\n  <ng-template #standardError>\r\n    <h3>\r\n      {{errorMessage()}}\r\n    </h3>\r\n  </ng-template>\r\n  <ng-template #fatalError>\r\n    <ng-container *ngIf=\"!errorMessage() && !errorCode(); then serviceUnavilable; else unknownError\"></ng-container>\r\n  </ng-template>\r\n  <ng-template #unknownError>\r\n    <h3>\r\n      Nieznany błąd\r\n    </h3>\r\n  </ng-template>\r\n  <ng-template #serviceUnavilable>\r\n    <h3>\r\n      Usługa niedostępna\r\n    </h3>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/error-panel/error-panel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/error-panel/error-panel.component.ts ***!
  \***********************************************************/
/*! exports provided: ErrorPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPanelComponent", function() { return ErrorPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorPanelComponent = /** @class */ (function () {
    function ErrorPanelComponent(errorHandlingService) {
        this.errorHandlingService = errorHandlingService;
    }
    ErrorPanelComponent.prototype.ngOnInit = function () {
    };
    ErrorPanelComponent.prototype.hasError = function () {
        return this.errorHandlingService.hasError();
    };
    ErrorPanelComponent.prototype.errorCode = function () {
        return this.errorHandlingService.getErrorCode();
    };
    ErrorPanelComponent.prototype.errorMessage = function () {
        return this.errorHandlingService.getErrorMessage();
    };
    ErrorPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-panel',
            template: __webpack_require__(/*! ./error-panel.component.html */ "./src/app/core/error-panel/error-panel.component.html"),
            styles: [__webpack_require__(/*! ./error-panel.component.css */ "./src/app/core/error-panel/error-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingService"]])
    ], ErrorPanelComponent);
    return ErrorPanelComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  background-color: var(--header-background-color);\r\n  color: var(--secondary-text-color);\r\n  margin-bottom: 50px;\r\n  position: -webkit-sticky; /* Safari */\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 101;\r\n}\r\n.logo {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  margin-right: 20px;\r\n  color: var(--logo-color);\r\n}\r\n.item {\r\n  margin: 0px 5px 0px 5px;\r\n}\r\nli, span {\r\n  cursor: pointer;\r\n  padding: 5px 15px;\r\n}\r\nli:hover, span:hover {\r\n  background-color: var(--header-background-color-hover);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnREFBZ0Q7RUFDaEQsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQix3QkFBd0IsRUFBRSxXQUFXO0VBQ3JDLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usc0RBQXNEO0FBQ3hEIiwiZmlsZSI6InNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogU2FmYXJpICovXHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTAxO1xyXG59XHJcbi5sb2dvIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1sb2dvLWNvbG9yKTtcclxufVxyXG4uaXRlbSB7XHJcbiAgbWFyZ2luOiAwcHggNXB4IDBweCA1cHg7XHJcbn1cclxubGksIHNwYW4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5saTpob3Zlciwgc3Bhbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark header\">\r\n  <div class=\"logo\">\r\n    <div>\r\n      <span (click)=\"navigateToMainPage()\">\r\n      Magenta\r\n      </span>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".dual-collapse2\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n    </div>\r\n  </div >\r\n  <div class=\"navbar-collapse collapse dual-collapse2\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li *ngIf=\"!isUserLoggedIn()\" class=\"nav-item item\"\r\n          (click)=\"navigate([registerPage])\">Zarejestruj się</li>\r\n      <li *ngIf=\"!isUserLoggedIn()\" class=\"nav-item item\"\r\n          (click)=\"navigate([loginPage])\" >Zaloguj się</li>\r\n\r\n\r\n      <li *ngIf=\"isUserLoggedIn()\" class=\"nav-item item\" (click)=\"navigate([loggedUserPage])\">Moje konto</li>\r\n      <li *ngIf=\"isUserLoggedIn()\" class=\"nav-item item\"\r\n          (click)=\"logout()\">Wyloguj się</li>\r\n    </ul>\r\n  </div>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utils/global-variables */ "./src/app/shared/utils/global-variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sessionStorage, errorHandlingService, router) {
        this.sessionStorage = sessionStorage;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.mainPage = _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_4__["MAIN_PAGE_URL"];
        this.loginPage = _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_4__["LOGIN_PAGE_URL"];
        this.registerPage = _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_4__["REGISTER_PAGE_URL"];
        this.loggedUserPage = _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_4__["USER_EDIT_PAGE_URL"];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.isUserLoggedIn = function () {
        return this.sessionStorage.isUserLoggedIn();
    };
    HeaderComponent.prototype.logout = function () {
        this.sessionStorage.logout();
        this.router.navigate([this.mainPage]);
    };
    HeaderComponent.prototype.navigate = function (commands) {
        this.errorHandlingService.clear();
        this.router.navigated = false;
        this.router.navigate(commands);
    };
    HeaderComponent.prototype.navigateToMainPage = function () {
        var role = this.sessionStorage.getUser().roles[0].name;
        switch (role) {
            case _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_5__["ROLE_REDACTOR"]:
                this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_4__["REDACTOR_PAGE_URL"]]);
                break;
            case _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_5__["ROLE_MODERATOR"]:
                this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_4__["MODERATOR_PAGE_URL"]]);
                break;
            case _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_5__["ROLE_USER"]:
                this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_4__["USER_PAGE_URL"]]);
                break;
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_1__["SessionStorageService"],
            _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/loading-spinner/loading-spinner.component.css":
/*!********************************************************************!*\
  !*** ./src/app/core/loading-spinner/loading-spinner.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\r\n  border: 16px solid var(--background-secondary-color);\r\n  border-top: 16px solid var(--main-color);\r\n  border-radius: 50%;\r\n  width: 80px;\r\n  height: 80px;\r\n  margin-top: -40px;\r\n  margin-left: -40px;\r\n\r\n  -webkit-animation: spin 700ms linear infinite;\r\n\r\n          animation: spin 700ms linear infinite;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 1;\r\n}\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg) }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg) }\r\n}\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg) }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg) }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvREFBb0Q7RUFDcEQsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCLDZDQUFxQzs7VUFBckMscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsS0FBSywrQkFBc0IsRUFBdEIsd0JBQXdCO0VBQzdCLE9BQU8saUNBQXdCLEVBQXhCLDBCQUEwQjtBQUNuQztBQUhBO0VBQ0UsS0FBSywrQkFBc0IsRUFBdEIsd0JBQXdCO0VBQzdCLE9BQU8saUNBQXdCLEVBQXhCLDBCQUEwQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXIge1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuXHJcbiAgYW5pbWF0aW9uOiBzcGluIDcwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/core/loading-spinner/loading-spinner.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/core/loading-spinner/loading-spinner.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"getShowLoadingIndicator()\" class=\"spinner\"></div>\r\n"

/***/ }),

/***/ "./src/app/core/loading-spinner/loading-spinner.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/loading-spinner/loading-spinner.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent(router) {
        this.router = router;
        this.router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                LoadingSpinnerComponent_1.showLoadingIndicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"] ||
                routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
                LoadingSpinnerComponent_1.showLoadingIndicator = false;
            }
        });
    }
    LoadingSpinnerComponent_1 = LoadingSpinnerComponent;
    LoadingSpinnerComponent.setShowLoadingIndicator = function (showLoadingIndicator) {
        LoadingSpinnerComponent_1.showLoadingIndicator = showLoadingIndicator;
    };
    LoadingSpinnerComponent.prototype.getShowLoadingIndicator = function () {
        return LoadingSpinnerComponent_1.showLoadingIndicator;
    };
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    var LoadingSpinnerComponent_1;
    LoadingSpinnerComponent.showLoadingIndicator = true;
    LoadingSpinnerComponent = LoadingSpinnerComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading-spinner',
            template: __webpack_require__(/*! ./loading-spinner.component.html */ "./src/app/core/loading-spinner/loading-spinner.component.html"),
            styles: [__webpack_require__(/*! ./loading-spinner.component.css */ "./src/app/core/loading-spinner/loading-spinner.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/dialogs-style.css":
/*!*******************************************!*\
  !*** ./src/app/dialogs/dialogs-style.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-wrapper {\r\n  text-align: center;\r\n}\r\n.dialog-title {\r\n  font-weight: bold;\r\n}\r\n.dialog-button {\r\n  margin-left: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9kaWFsb2dzLXN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2dzL2RpYWxvZ3Mtc3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy13cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmRpYWxvZy10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmRpYWxvZy1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dialogs/dialogs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/dialogs/dialogs.module.ts ***!
  \*******************************************/
/*! exports provided: DialogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsModule", function() { return DialogsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warning-dialog/warning-dialog.component */ "./src/app/dialogs/warning-dialog/warning-dialog.component.ts");
/* harmony import */ var _yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./yes-no-dialog/yes-no-dialog.component */ "./src/app/dialogs/yes-no-dialog/yes-no-dialog.component.ts");
/* harmony import */ var _yes_no_dialog_delete_user_account_dialog_delete_user_account_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component */ "./src/app/dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component.ts");
/* harmony import */ var _warning_dialog_assign_redactor_to_test_assign_redactor_to_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component */ "./src/app/dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component.ts");
/* harmony import */ var _warning_dialog_import_dialog_import_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./warning-dialog/import-dialog/import-dialog.component */ "./src/app/dialogs/warning-dialog/import-dialog/import-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DialogsModule = /** @class */ (function () {
    function DialogsModule() {
    }
    DialogsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            declarations: [
                _warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_4__["WarningDialogComponent"],
                _yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_5__["YesNoDialogComponent"],
                _yes_no_dialog_delete_user_account_dialog_delete_user_account_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteUserAccountDialogComponent"],
                _warning_dialog_import_dialog_import_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ImportDialogComponent"],
                _warning_dialog_assign_redactor_to_test_assign_redactor_to_test_component__WEBPACK_IMPORTED_MODULE_7__["AssignRedactorToTestComponent"]
            ]
        })
    ], DialogsModule);
    return DialogsModule;
}());



/***/ }),

/***/ "./src/app/dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3Mvd2FybmluZy1kaWFsb2cvYXNzaWduLXJlZGFjdG9yLXRvLXRlc3QvYXNzaWduLXJlZGFjdG9yLXRvLXRlc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-warning-dialog>\r\n  <div title>\r\n    Sukces\r\n  </div>\r\n  <div content>\r\n       Poprawnie przekazano uprawnienia.\r\n  </div>\r\n</app-warning-dialog>\r\n"

/***/ }),

/***/ "./src/app/dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AssignRedactorToTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignRedactorToTestComponent", function() { return AssignRedactorToTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssignRedactorToTestComponent = /** @class */ (function () {
    function AssignRedactorToTestComponent() {
    }
    AssignRedactorToTestComponent.prototype.ngOnInit = function () {
    };
    AssignRedactorToTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-redactor-to-test',
            template: __webpack_require__(/*! ./assign-redactor-to-test.component.html */ "./src/app/dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component.html"),
            styles: [__webpack_require__(/*! ./assign-redactor-to-test.component.css */ "./src/app/dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AssignRedactorToTestComponent);
    return AssignRedactorToTestComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/warning-dialog/import-dialog/import-dialog.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/dialogs/warning-dialog/import-dialog/import-dialog.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3Mvd2FybmluZy1kaWFsb2cvaW1wb3J0LWRpYWxvZy9pbXBvcnQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dialogs/warning-dialog/import-dialog/import-dialog.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/dialogs/warning-dialog/import-dialog/import-dialog.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-warning-dialog>\r\n  <div title>\r\n    Import testu\r\n    <pre></pre>\r\n  </div>\r\n  <div content>\r\n    <div *ngIf=\"importReportWrapper.importReport.status === 'OK'\">\r\n      Import zakończony sukcesem\r\n    </div>\r\n    <div *ngIf=\"importReportWrapper.importReport.status === 'ERROR'\">\r\n      Import zakończony z błędami: <br>\r\n      <span *ngFor=\"let error of importReportWrapper.importReport.errors\">\r\n        {{error}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n</app-warning-dialog>\r\n\r\n"

/***/ }),

/***/ "./src/app/dialogs/warning-dialog/import-dialog/import-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/dialogs/warning-dialog/import-dialog/import-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ImportDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportDialogComponent", function() { return ImportDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/test */ "./src/app/models/test.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ImportDialogComponent = /** @class */ (function () {
    function ImportDialogComponent(importReportWrapper) {
        this.importReportWrapper = importReportWrapper;
    }
    ImportDialogComponent.prototype.ngOnInit = function () {
    };
    ImportDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-dialog',
            template: __webpack_require__(/*! ./import-dialog.component.html */ "./src/app/dialogs/warning-dialog/import-dialog/import-dialog.component.html"),
            styles: [__webpack_require__(/*! ./import-dialog.component.css */ "./src/app/dialogs/warning-dialog/import-dialog/import-dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_models_test__WEBPACK_IMPORTED_MODULE_2__["ImportTestReportWrapper"]])
    ], ImportDialogComponent);
    return ImportDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/warning-dialog/warning-dialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dialogs/warning-dialog/warning-dialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3Mvd2FybmluZy1kaWFsb2cvd2FybmluZy1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dialogs/warning-dialog/warning-dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/warning-dialog/warning-dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"material-form dialog-wrapper\">\r\n  <h3 class=\"dialog-title\" mat-dialog-title>\r\n    <ng-content select=\"[title]\"></ng-content>\r\n  </h3>\r\n  <mat-dialog-content>\r\n   <ng-content select=\"[content]\"></ng-content>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n      <div>\r\n        <button class=\"dialog-button\"  mat-button [mat-dialog-close]=\"true\">Ok</button>\r\n      </div>\r\n  </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/warning-dialog/warning-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/warning-dialog/warning-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: WarningDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningDialogComponent", function() { return WarningDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WarningDialogComponent = /** @class */ (function () {
    function WarningDialogComponent() {
    }
    WarningDialogComponent.prototype.ngOnInit = function () {
    };
    WarningDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warning-dialog',
            template: __webpack_require__(/*! ./warning-dialog.component.html */ "./src/app/dialogs/warning-dialog/warning-dialog.component.html"),
            styles: [__webpack_require__(/*! ../dialogs-style.css */ "./src/app/dialogs/dialogs-style.css"), __webpack_require__(/*! ./warning-dialog.component.css */ "./src/app/dialogs/warning-dialog/warning-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WarningDialogComponent);
    return WarningDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MveWVzLW5vLWRpYWxvZy9kZWxldGUtdXNlci1hY2NvdW50LWRpYWxvZy9kZWxldGUtdXNlci1hY2NvdW50LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-yes-no-dialog>\r\n  <div title>\r\n    Skasuj konto\r\n  </div>\r\n  <div content>\r\n    <span >\r\n      Jesteś pewien?\r\n    </span>\r\n    <br/>\r\n    <span>\r\n      Tej operacji nie da się cofnąć\r\n    </span>\r\n    <br/>\r\n  </div>\r\n</app-yes-no-dialog>\r\n"

/***/ }),

/***/ "./src/app/dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DeleteUserAccountDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserAccountDialogComponent", function() { return DeleteUserAccountDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeleteUserAccountDialogComponent = /** @class */ (function () {
    function DeleteUserAccountDialogComponent() {
    }
    DeleteUserAccountDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteUserAccountDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-user-account-dialog',
            template: __webpack_require__(/*! ./delete-user-account-dialog.component.html */ "./src/app/dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-user-account-dialog.component.css */ "./src/app/dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeleteUserAccountDialogComponent);
    return DeleteUserAccountDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/yes-no-dialog/yes-no-dialog.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dialogs/yes-no-dialog/yes-no-dialog.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MveWVzLW5vLWRpYWxvZy95ZXMtbm8tZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dialogs/yes-no-dialog/yes-no-dialog.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/yes-no-dialog/yes-no-dialog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"material-form dialog-wrapper\">\r\n  <h2 class=\"dialog-title\" mat-dialog-title>\r\n    <ng-content select=\"[title]\"></ng-content>\r\n  </h2>\r\n  <mat-dialog-content>\r\n    <ng-content select=\"[content]\"></ng-content>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n    <div class=\"danger-button\">\r\n      <button class=\"dialog-button\" mat-button [mat-dialog-close]=\"true\">Tak</button>\r\n    </div>\r\n    <div>\r\n      <button class=\"dialog-button\" mat-button mat-dialog-close>Nie</button>\r\n    </div>\r\n  </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/yes-no-dialog/yes-no-dialog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/yes-no-dialog/yes-no-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: YesNoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YesNoDialogComponent", function() { return YesNoDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YesNoDialogComponent = /** @class */ (function () {
    function YesNoDialogComponent() {
    }
    YesNoDialogComponent.prototype.ngOnInit = function () {
    };
    YesNoDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-yes-no-dialog',
            template: __webpack_require__(/*! ./yes-no-dialog.component.html */ "./src/app/dialogs/yes-no-dialog/yes-no-dialog.component.html"),
            styles: [__webpack_require__(/*! ../dialogs-style.css */ "./src/app/dialogs/dialogs-style.css"), __webpack_require__(/*! ./yes-no-dialog.component.css */ "./src/app/dialogs/yes-no-dialog/yes-no-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], YesNoDialogComponent);
    return YesNoDialogComponent;
}());



/***/ }),

/***/ "./src/app/error/error.module.ts":
/*!***************************************!*\
  !*** ./src/app/error/error.module.ts ***!
  \***************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/error/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]]
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ }),

/***/ "./src/app/error/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/error/not-found/not-found.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-found-wrapper {\r\n  width: 100%;\r\n}\r\n.image {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.text {\r\n  text-align: center;\r\n  font-size: 30px;\r\n  margin-top: 20px;\r\n  color: rgb(255, 100, 20);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3Ivbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvZXJyb3Ivbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZC13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4udGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAxMDAsIDIwKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/error/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/error/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"not-found-wrapper\">\r\n  <img class=\"image\" src=\"assets/not-found.png\">\r\n  <p class=\"text\" >Ta strona nie istnieje</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/error/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/error/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(errorHandlingService) {
        this.errorHandlingService = errorHandlingService;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        this.errorHandlingService.clear();
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/error/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/error/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingService"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/guards/logged-user-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/guards/logged-user-guard.ts ***!
  \*********************************************/
/*! exports provided: LoggedUserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedUserGuard", function() { return LoggedUserGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoggedUserGuard = /** @class */ (function () {
    function LoggedUserGuard(sessionStorageService, router) {
        this.sessionStorageService = sessionStorageService;
        this.router = router;
    }
    LoggedUserGuard.prototype.canActivate = function () {
        if (this.sessionStorageService.isUserLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["MAIN_PAGE_URL"]]);
            return false;
        }
    };
    LoggedUserGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], LoggedUserGuard);
    return LoggedUserGuard;
}());



/***/ }),

/***/ "./src/app/guards/not-logged-user-quard.ts":
/*!*************************************************!*\
  !*** ./src/app/guards/not-logged-user-quard.ts ***!
  \*************************************************/
/*! exports provided: NotLoggedUserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotLoggedUserGuard", function() { return NotLoggedUserGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotLoggedUserGuard = /** @class */ (function () {
    function NotLoggedUserGuard(sessionStorageService, router) {
        this.sessionStorageService = sessionStorageService;
        this.router = router;
    }
    NotLoggedUserGuard.prototype.canActivate = function () {
        if (!this.sessionStorageService.isUserLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["MAIN_PAGE_URL"]]);
            return false;
        }
    };
    NotLoggedUserGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], NotLoggedUserGuard);
    return NotLoggedUserGuard;
}());



/***/ }),

/***/ "./src/app/guards/redactor-or-moderator-guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/guards/redactor-or-moderator-guard.ts ***!
  \*******************************************************/
/*! exports provided: RedactorOrModeratorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorOrModeratorGuard", function() { return RedactorOrModeratorGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RedactorOrModeratorGuard = /** @class */ (function () {
    function RedactorOrModeratorGuard(sessionStorageService, router) {
        this.sessionStorageService = sessionStorageService;
        this.router = router;
    }
    RedactorOrModeratorGuard.prototype.canActivate = function () {
        if (this.sessionStorageService.isRedactor() || this.sessionStorageService.isModerator()) {
            return true;
        }
        else {
            this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["MAIN_PAGE_URL"]]);
            return false;
        }
    };
    RedactorOrModeratorGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], RedactorOrModeratorGuard);
    return RedactorOrModeratorGuard;
}());



/***/ }),

/***/ "./src/app/guards/redactor-quard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/redactor-quard.ts ***!
  \******************************************/
/*! exports provided: RedactorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorGuard", function() { return RedactorGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RedactorGuard = /** @class */ (function () {
    function RedactorGuard(sessionStorageService, router) {
        this.sessionStorageService = sessionStorageService;
        this.router = router;
    }
    RedactorGuard.prototype.canActivate = function () {
        if (this.sessionStorageService.isRedactor()) {
            return true;
        }
        else {
            this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["MAIN_PAGE_URL"]]);
            return false;
        }
    };
    RedactorGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], RedactorGuard);
    return RedactorGuard;
}());



/***/ }),

/***/ "./src/app/guards/user-guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/user-guard.ts ***!
  \**************************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserGuard = /** @class */ (function () {
    function UserGuard(sessionStorageService, router) {
        this.sessionStorageService = sessionStorageService;
        this.router = router;
    }
    UserGuard.prototype.canActivate = function () {
        if (this.sessionStorageService.isUser()) {
            return true;
        }
        else {
            this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["MAIN_PAGE_URL"]]);
            return false;
        }
    };
    UserGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], UserGuard);
    return UserGuard;
}());



/***/ }),

/***/ "./src/app/interceptor.ts":
/*!********************************!*\
  !*** ./src/app/interceptor.ts ***!
  \********************************/
/*! exports provided: Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
/* harmony import */ var _core_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/loading-spinner/loading-spinner.component */ "./src/app/core/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _metrics_processor_metrics_processor_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metrics-processor/metrics-processor.directive */ "./src/app/metrics-processor/metrics-processor.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Interceptor = /** @class */ (function () {
    function Interceptor(sessionStorageService, errorHandlingService) {
        this.sessionStorageService = sessionStorageService;
        this.errorHandlingService = errorHandlingService;
    }
    Interceptor.prototype.intercept = function (request, next) {
        var _this = this;
        this.errorHandlingService.clear();
        _core_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadingSpinnerComponent"].setShowLoadingIndicator(true);
        if (this.sessionStorageService.isUserLoggedIn()) {
            request = request.clone({
                setHeaders: {
                    Authorization: this.sessionStorageService.getToken()
                }
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.handleValidResponse(result);
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__["of"])(_this.handleErrorResponse(error));
        }));
    };
    Interceptor.prototype.handleValidResponse = function (result) {
        if (result instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
            _core_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadingSpinnerComponent"].setShowLoadingIndicator(false);
            var response = result;
            if (response.headers.get('Authorization') !== null) {
                this.sessionStorageService.updateSession(response.headers.get('Authorization'));
            }
        }
    };
    Interceptor.prototype.handleErrorResponse = function (error) {
        _core_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadingSpinnerComponent"].setShowLoadingIndicator(false);
        _metrics_processor_metrics_processor_directive__WEBPACK_IMPORTED_MODULE_7__["MetricsProcessorDirective"].assignErrorTypeNumber(error.status);
        this.errorHandlingService.handle(error);
        return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__["of"])(error);
    };
    Interceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"],
            _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlingService"]])
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "./src/app/main-page/main-page-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/main-page/main-page-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page/main-page.component.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MAIN_PAGE_ROUTES = [
    {
        path: "" + _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["MAIN_PAGE_URL"],
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"],
        runGuardsAndResolvers: 'always'
    }
];
var MainPageRoutingModule = /** @class */ (function () {
    function MainPageRoutingModule() {
    }
    MainPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(MAIN_PAGE_ROUTES),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], MainPageRoutingModule);
    return MainPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.module.ts":
/*!***********************************************!*\
  !*** ./src/app/main-page/main-page.module.ts ***!
  \***********************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page/main-page.component.ts");
/* harmony import */ var _main_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page-routing.module */ "./src/app/main-page/main-page-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _main_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainPageRoutingModule"]
            ],
            declarations: [_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]]
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/app/main-page/main-page/main-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/main-page/main-page/main-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main-page/main-page/main-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main-page/main-page/main-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Magenta - Strona główna</h1>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-page/main-page/main-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main-page/main-page/main-page.component.ts ***!
  \************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/global-variables */ "./src/app/shared/utils/global-variables.ts");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(router, sessionStorage) {
        this.router = router;
        this.sessionStorage = sessionStorage;
        this.url = _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__["MAIN_PAGE_URL"];
    }
    MainPageComponent.prototype.ngOnInit = function () {
        if (this.sessionStorage.getUser() !== undefined && this.sessionStorage.getUser() !== null) {
            switch (this.sessionStorage.getUser().roles[0].name) {
                case _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_3__["ROLE_USER"]:
                    this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__["USER_PAGE_URL"]]);
                    break;
                case _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_3__["ROLE_MODERATOR"]:
                    this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__["MODERATOR_PAGE_URL"]]);
                    break;
                case _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_3__["ROLE_REDACTOR"]:
                    this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__["REDACTOR_PAGE_URL"]]);
                    break;
            }
        }
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/metrics-processor/metrics-processor.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/metrics-processor/metrics-processor.directive.ts ***!
  \******************************************************************/
/*! exports provided: MetricsProcessorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsProcessorDirective", function() { return MetricsProcessorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_metrics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/metrics */ "./src/app/models/metrics.ts");
/* harmony import */ var _services_metrics_processor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/metrics-processor.service */ "./src/app/metrics-processor/services/metrics-processor.service.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_distance_calculator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/distance-calculator.service */ "./src/app/metrics-processor/services/distance-calculator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MetricsProcessorDirective = /** @class */ (function () {
    function MetricsProcessorDirective(deviceDetector, metricsProcessorService, distanceCalculator) {
        this.deviceDetector = deviceDetector;
        this.metricsProcessorService = metricsProcessorService;
        this.distanceCalculator = distanceCalculator;
        this.metricsModel = new _models_metrics__WEBPACK_IMPORTED_MODULE_1__["MetricsModel"]();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }
    MetricsProcessorDirective_1 = MetricsProcessorDirective;
    MetricsProcessorDirective.prototype.dKeyEvent = function (event) {
        this.storeScreenShot();
        this.distanceCalculator.switchProcessing();
        if (this.isProcessing) {
            this.endTime = event.timeStamp;
            this.stopProcessing();
        }
        else {
            this.startTime = event.timeStamp;
            this.startProcessing();
        }
        this.isProcessing = !this.isProcessing;
    };
    MetricsProcessorDirective.prototype.wKeyEvent = function (event) {
        this.distanceCalculator.switchProcessing();
        this.isProcessing = !this.isProcessing;
        console.log("Metrics unsaved");
    };
    MetricsProcessorDirective.prototype.rKeyEvent = function (event) {
        this.distanceCalculator.switchProcessing();
        if (this.isProcessing) {
            this.endTime = event.timeStamp;
            this.stopProcessing(true);
            this.isProcessing = false;
        }
    };
    MetricsProcessorDirective.prototype.clickEvent = function (event) {
        this.handleClick();
    };
    MetricsProcessorDirective.prototype.rightClickEvent = function (event) {
        this.handleClick();
    };
    MetricsProcessorDirective.prototype.mouseWheelClickEvent = function (event) {
        this.handleClick();
    };
    MetricsProcessorDirective.prototype.mouseWheelMoveEvent = function (event) {
        if (this.isProcessing) {
            this.distanceCalculator.addScrollDistance(50);
        }
    };
    MetricsProcessorDirective.prototype.onBlur = function (event) {
        if (this.isProcessing) {
            this.blurTimeStamp = event.timeStamp;
        }
    };
    MetricsProcessorDirective.prototype.onFocus = function (event) {
        if (this.isProcessing) {
            this.blurTime += event.timeStamp - this.blurTimeStamp;
        }
    };
    MetricsProcessorDirective.assignErrorTypeNumber = function (errorCode) {
        if (!MetricsProcessorDirective_1.errorCode) {
            MetricsProcessorDirective_1.errorCode = errorCode;
        }
    };
    MetricsProcessorDirective.prototype.handleClick = function () {
        if (this.isProcessing) {
            this.metricsModel.incrementClickCount();
        }
    };
    MetricsProcessorDirective.prototype.startProcessing = function () {
        this.metricsModel = new _models_metrics__WEBPACK_IMPORTED_MODULE_1__["MetricsModel"]();
        this.blurTime = 0;
        MetricsProcessorDirective_1.errorCode = null;
    };
    MetricsProcessorDirective.prototype.stopProcessing = function (failed) {
        if (failed === void 0) { failed = false; }
        this.prepareModelToPersist(failed);
        this.metricsProcessorService.persist(this.metricsModel).subscribe(function () {
            console.log("Metrics saved successfully");
        }, function () {
            console.log("Metrics save failed");
        });
    };
    MetricsProcessorDirective.prototype.prepareModelToPersist = function (failed) {
        if (failed === void 0) { failed = false; }
        this.metricsModel.browser = this.deviceDetector.browser;
        this.metricsModel.width = this.width;
        this.metricsModel.height = this.height;
        this.metricsModel.time = this.endTime - this.startTime - this.blurTime;
        this.metricsModel.failed = failed;
        this.metricsModel.distance = this.distanceCalculator.getDistance();
        if (MetricsProcessorDirective_1.errorCode) {
            this.metricsModel.errorTypeNumber = MetricsProcessorDirective_1.errorCode;
        }
    };
    MetricsProcessorDirective.prototype.storeScreenShot = function () {
        var _this = this;
        html2canvas__WEBPACK_IMPORTED_MODULE_4__(document.body).then(function (canvas) {
            var imgData = canvas.toDataURL("image/png");
            _this.metricsProcessorService.saveScreen(imgData).subscribe();
        });
    };
    var MetricsProcessorDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup.shift.d', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MetricsProcessorDirective.prototype, "dKeyEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup.shift.w', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MetricsProcessorDirective.prototype, "wKeyEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup.shift.r', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MetricsProcessorDirective.prototype, "rKeyEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MetricsProcessorDirective.prototype, "clickEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MetricsProcessorDirective.prototype, "rightClickEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:auxclick', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MetricsProcessorDirective.prototype, "mouseWheelClickEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MetricsProcessorDirective.prototype, "mouseWheelMoveEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], MetricsProcessorDirective.prototype, "onBlur", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:focus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], MetricsProcessorDirective.prototype, "onFocus", null);
    MetricsProcessorDirective = MetricsProcessorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMetricsProcessor]'
        }),
        __metadata("design:paramtypes", [ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__["DeviceDetectorService"],
            _services_metrics_processor_service__WEBPACK_IMPORTED_MODULE_2__["MetricsProcessorService"],
            _services_distance_calculator_service__WEBPACK_IMPORTED_MODULE_5__["DistanceCalculatorService"]])
    ], MetricsProcessorDirective);
    return MetricsProcessorDirective;
}());



/***/ }),

/***/ "./src/app/metrics-processor/metrics-processor.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/metrics-processor/metrics-processor.module.ts ***!
  \***************************************************************/
/*! exports provided: MetricsProcessorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsProcessorModule", function() { return MetricsProcessorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _metrics_processor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metrics-processor.directive */ "./src/app/metrics-processor/metrics-processor.directive.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MetricsProcessorModule = /** @class */ (function () {
    function MetricsProcessorModule() {
    }
    MetricsProcessorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _metrics_processor_directive__WEBPACK_IMPORTED_MODULE_2__["MetricsProcessorDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__["DeviceDetectorModule"].forRoot(),
            ],
            exports: [
                _metrics_processor_directive__WEBPACK_IMPORTED_MODULE_2__["MetricsProcessorDirective"]
            ]
        })
    ], MetricsProcessorModule);
    return MetricsProcessorModule;
}());



/***/ }),

/***/ "./src/app/metrics-processor/services/distance-calculator.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/metrics-processor/services/distance-calculator.service.ts ***!
  \***************************************************************************/
/*! exports provided: DistanceCalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceCalculatorService", function() { return DistanceCalculatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_mouse_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/mouse-position */ "./src/app/models/mouse-position.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DistanceCalculatorService = /** @class */ (function () {
    function DistanceCalculatorService() {
        this.isProcessing = false;
        this.scrollDistance = 0;
    }
    DistanceCalculatorService.prototype.switchProcessing = function (interrupted) {
        if (interrupted) {
            this.isProcessing = false;
        }
        else {
            this.isProcessing = !this.isProcessing;
        }
        if (this.isProcessing) {
            this.resetValues();
        }
    };
    DistanceCalculatorService.prototype.addPosition = function (event) {
        if (this.isProcessing) {
            this.positions.push(new _models_mouse_position__WEBPACK_IMPORTED_MODULE_1__["MousePosition"](event.clientX, event.clientY));
        }
    };
    DistanceCalculatorService.prototype.getDistance = function () {
        return this.calculateDistance();
    };
    DistanceCalculatorService.prototype.addScrollDistance = function (dst) {
        this.scrollDistance += dst;
    };
    DistanceCalculatorService.prototype.calculateDistance = function () {
        if (this.positions.length) {
            var distance = this.calcPointsDistance(new _models_mouse_position__WEBPACK_IMPORTED_MODULE_1__["MousePosition"](0, 0), this.positions.shift());
            for (var i = 1; i < this.positions.length - 1; i++) {
                distance += this.calcPointsDistance(this.positions[i], this.positions[i + 1]);
            }
            return distance;
        }
    };
    DistanceCalculatorService.prototype.resetValues = function () {
        this.positions = [];
        this.scrollDistance = 0;
    };
    DistanceCalculatorService.prototype.calcPointsDistance = function (p1, p2) {
        return Math.sqrt(Math.pow(p2.getX - p1.getX, 2) + Math.pow(p2.getY - p1.getY, 2)) + this.scrollDistance;
    };
    DistanceCalculatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DistanceCalculatorService);
    return DistanceCalculatorService;
}());



/***/ }),

/***/ "./src/app/metrics-processor/services/metrics-processor.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/metrics-processor/services/metrics-processor.service.ts ***!
  \*************************************************************************/
/*! exports provided: MetricsProcessorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsProcessorService", function() { return MetricsProcessorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/backend-urls */ "./src/app/shared/utils/backend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MetricsProcessorService = /** @class */ (function () {
    function MetricsProcessorService(http) {
        this.http = http;
    }
    MetricsProcessorService.prototype.persist = function (model) {
        return this.http.post(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["METRICS_URL"], model);
    };
    MetricsProcessorService.prototype.saveScreen = function (body) {
        return this.http.post(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["SCREEN_URL"], body);
    };
    MetricsProcessorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MetricsProcessorService);
    return MetricsProcessorService;
}());



/***/ }),

/***/ "./src/app/models/metrics.ts":
/*!***********************************!*\
  !*** ./src/app/models/metrics.ts ***!
  \***********************************/
/*! exports provided: MetricsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsModel", function() { return MetricsModel; });
var MetricsModel = /** @class */ (function () {
    function MetricsModel() {
        this.clickCount = 0;
    }
    MetricsModel.prototype.incrementClickCount = function () {
        this.clickCount++;
    };
    return MetricsModel;
}());



/***/ }),

/***/ "./src/app/models/mouse-position.ts":
/*!******************************************!*\
  !*** ./src/app/models/mouse-position.ts ***!
  \******************************************/
/*! exports provided: MousePosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MousePosition", function() { return MousePosition; });
var MousePosition = /** @class */ (function () {
    function MousePosition(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(MousePosition.prototype, "getX", {
        get: function () {
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MousePosition.prototype, "getY", {
        get: function () {
            return this.y;
        },
        enumerable: true,
        configurable: true
    });
    return MousePosition;
}());



/***/ }),

/***/ "./src/app/models/positions.ts":
/*!*************************************!*\
  !*** ./src/app/models/positions.ts ***!
  \*************************************/
/*! exports provided: Positions, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positions", function() { return Positions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var Positions = /** @class */ (function () {
    function Positions() {
    }
    return Positions;
}());

var Position = /** @class */ (function () {
    function Position() {
    }
    return Position;
}());



/***/ }),

/***/ "./src/app/models/question.ts":
/*!************************************!*\
  !*** ./src/app/models/question.ts ***!
  \************************************/
/*! exports provided: Questions, Question, Variant, Solutions, TestSolution, TestSolutionWithId, TestSolutionTest, TestSolutionUser, TestAnswer, Score */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questions", function() { return Questions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variant", function() { return Variant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Solutions", function() { return Solutions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSolution", function() { return TestSolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSolutionWithId", function() { return TestSolutionWithId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSolutionTest", function() { return TestSolutionTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSolutionUser", function() { return TestSolutionUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestAnswer", function() { return TestAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
var Questions = /** @class */ (function () {
    function Questions() {
    }
    return Questions;
}());

var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());

var Variant = /** @class */ (function () {
    function Variant() {
    }
    return Variant;
}());

var Solutions = /** @class */ (function () {
    function Solutions() {
    }
    return Solutions;
}());

var TestSolution = /** @class */ (function () {
    function TestSolution() {
    }
    return TestSolution;
}());

var TestSolutionWithId = /** @class */ (function () {
    function TestSolutionWithId() {
    }
    return TestSolutionWithId;
}());

var TestSolutionTest = /** @class */ (function () {
    function TestSolutionTest() {
    }
    return TestSolutionTest;
}());

var TestSolutionUser = /** @class */ (function () {
    function TestSolutionUser() {
    }
    return TestSolutionUser;
}());

var TestAnswer = /** @class */ (function () {
    function TestAnswer() {
    }
    return TestAnswer;
}());

var Score = /** @class */ (function () {
    function Score() {
    }
    return Score;
}());



/***/ }),

/***/ "./src/app/models/test.ts":
/*!********************************!*\
  !*** ./src/app/models/test.ts ***!
  \********************************/
/*! exports provided: ImportTestReportWrapper, ImportTestReport, Test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportTestReportWrapper", function() { return ImportTestReportWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportTestReport", function() { return ImportTestReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test", function() { return Test; });
var ImportTestReportWrapper = /** @class */ (function () {
    function ImportTestReportWrapper() {
    }
    return ImportTestReportWrapper;
}());

var ImportTestReport = /** @class */ (function () {
    function ImportTestReport() {
    }
    return ImportTestReport;
}());

var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());



/***/ }),

/***/ "./src/app/moderator/add-redactor/add-redactor.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/moderator/add-redactor/add-redactor.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-redactor-form-wrapper {\r\n  width: 300px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.add-redactor-form-button {\r\n  margin-top: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZXJhdG9yL2FkZC1yZWRhY3Rvci9hZGQtcmVkYWN0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW9kZXJhdG9yL2FkZC1yZWRhY3Rvci9hZGQtcmVkYWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtcmVkYWN0b3ItZm9ybS13cmFwcGVyIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYWRkLXJlZGFjdG9yLWZvcm0tYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/moderator/add-redactor/add-redactor.component.html":
/*!********************************************************************!*\
  !*** ./src/app/moderator/add-redactor/add-redactor.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-redactor-form-wrapper\">\r\n  <form [formGroup]=\"registerForm\" class=\"material-form authentication-form\">\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput formControlName=\"username\" placeholder=\"Nazwa użytkownika\">\r\n        <mat-error *ngIf=\"registerForm.get('username').hasError('required')\">\r\n          Nazwa użytkownika jest wymagana\r\n        </mat-error>\r\n        <mat-error *ngIf=\"registerForm.get('username').hasError('minlength')\">\r\n          Nazwa użytkownika musi zawierać co najmniej {{minUsernameLength}} znaków.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"registerForm.get('username').hasError('maxlength')\">\r\n          Nazwa użytkownika może zawierać maksymalnie {{maxUsernameLength}} znaków.\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput formControlName=\"nameSurname\" placeholder=\"Imię i nazwisko\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput email formControlName=\"email\" placeholder=\"Email\">\r\n        <mat-error *ngIf=\"registerForm.get('email').hasError('required')\">\r\n          Email jest wymagany.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"registerForm.get('email').hasError('email')\">\r\n          Podaj prawidłowy adres email.\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput formControlName=\"password\" type=\"password\" placeholder=\"Hasło\" >\r\n\r\n        <mat-error *ngIf=\"registerForm.get('password').hasError('required')\">\r\n          Hasło jest wymagane\r\n        </mat-error>\r\n        <mat-error *ngIf=\"registerForm.get('password').hasError('minlength')\">\r\n          Hasło musi zawierać co najmniej {{minPasswordLength}} znaków.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"registerForm.get('password').hasError('maxlength')\">\r\n          Hasło może zawierać maksymalnie {{maxPasswordLength}} znaków.\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput formControlName=\"confirmPassword\" type=\"password\"\r\n               placeholder=\"Potwierdź hasło\" [errorStateMatcher]=\"errorMatcher\">\r\n\r\n        <mat-error *ngIf=\"registerForm.get('confirmPassword').hasError('required')\">\r\n          Musisz potwierdzić hasło\r\n        </mat-error>\r\n        <mat-error\r\n          *ngIf=\"registerForm.hasError('matchPassword')\">\r\n          Hasła są różne\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"add-redactor-form-button\">\r\n      <button mat-button\r\n              [disabled]=\"registerForm.invalid || registerForm.errors || getProcessingRegistration()\"\r\n              type=\"submit\" (click)=\"add()\"\r\n      >Zarejestruj redaktora</button>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/moderator/add-redactor/add-redactor.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/moderator/add-redactor/add-redactor.component.ts ***!
  \******************************************************************/
/*! exports provided: AddRedactorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRedactorComponent", function() { return AddRedactorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_redactor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/redactor.service */ "./src/app/moderator/services/redactor.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_registration_page_registration_confirm_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication/registration-page/registration-confirm-password */ "./src/app/authentication/registration-page/registration-confirm-password.ts");
/* harmony import */ var _shared_utils_confirm_password_error_state_matcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/confirm-password-error-state-matcher */ "./src/app/shared/utils/confirm-password-error-state-matcher.ts");
/* harmony import */ var _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utils/global-variables */ "./src/app/shared/utils/global-variables.ts");
/* harmony import */ var _core_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/loading-spinner/loading-spinner.component */ "./src/app/core/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddRedactorComponent = /** @class */ (function () {
    function AddRedactorComponent(redactorService, formBuilder, router) {
        this.redactorService = redactorService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.confirmPassword = new _authentication_registration_page_registration_confirm_password__WEBPACK_IMPORTED_MODULE_3__["RegistrationConfirmPassword"]();
        this.errorMatcher = new _shared_utils_confirm_password_error_state_matcher__WEBPACK_IMPORTED_MODULE_4__["ConfirmPasswordErrorMatcher"]();
        this.minPasswordLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_5__["MIN_PASSWORD_LENGTH"];
        this.maxPasswordLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_5__["MAX_PASSWORD_LENGTH"];
        this.minUsernameLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_5__["MIN_USERNAME_LENGTH"];
        this.maxUsernameLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_5__["MAX_USERNAME_LENGTH"];
    }
    AddRedactorComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    AddRedactorComponent.prototype.buildForm = function () {
        this.registerForm = this.formBuilder.group({
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minPasswordLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(this.maxPasswordLength)
                ]],
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minUsernameLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(this.maxUsernameLength)
                ]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nameSurname: [''],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        }, {
            validator: this.confirmPassword.matchPassword
        });
    };
    AddRedactorComponent.prototype.add = function () {
        var _this = this;
        this.redactorService.add(this.registerForm.value).subscribe(function () {
            _this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_8__["MODERATOR_REDACTORS_PAGE_URL"]]);
        });
    };
    AddRedactorComponent.prototype.getProcessingRegistration = function () {
        return _core_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__["LoadingSpinnerComponent"].showLoadingIndicator;
    };
    AddRedactorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-redactor',
            template: __webpack_require__(/*! ./add-redactor.component.html */ "./src/app/moderator/add-redactor/add-redactor.component.html"),
            styles: [__webpack_require__(/*! ./add-redactor.component.css */ "./src/app/moderator/add-redactor/add-redactor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_redactor_service__WEBPACK_IMPORTED_MODULE_1__["RedactorService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AddRedactorComponent);
    return AddRedactorComponent;
}());



/***/ }),

/***/ "./src/app/moderator/moderator-page/moderator-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/moderator/moderator-page/moderator-page.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n  border: 1px solid var(--secondary-text-color);\r\n}\r\n\r\ntd {\r\n  text-align: center;\r\n  padding: 5px 20px;\r\n  border: 1px solid var(--secondary-text-color);\r\n}\r\n\r\nthead td {\r\n  background-color: var(--background-secondary-color);\r\n  font-weight: bold;\r\n}\r\n\r\n.moderator-page-container {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.positions-container {\r\n  margin-top: 50px;\r\n}\r\n\r\nh1 {\r\n  margin-bottom: 20px;\r\n  text-align: left;\r\n}\r\n\r\n.buttons {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZXJhdG9yL21vZGVyYXRvci1wYWdlL21vZGVyYXRvci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxtREFBbUQ7RUFDbkQsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZGVyYXRvci9tb2RlcmF0b3ItcGFnZS9tb2RlcmF0b3ItcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxudGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbnRoZWFkIHRkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1vZGVyYXRvci1wYWdlLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ucG9zaXRpb25zLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5oMSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5idXR0b25zIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/moderator/moderator-page/moderator-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/moderator/moderator-page/moderator-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center moderator-page-container\">\r\n  <div class=\"row material-form full-width-button buttons\">\r\n    <div class=\"col-md-6 full-width-button\">\r\n      <button mat-button [routerLink]=\"['/', moderatorTest]\">Testy</button>\r\n    </div>\r\n    <div class=\"col-md-6 full-width-button\">\r\n      <button mat-button [routerLink]=\"['/', moderatorRedactors]\">Redaktorzy</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"positions-container\">\r\n    <app-positions-edit></app-positions-edit>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/moderator/moderator-page/moderator-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/moderator/moderator-page/moderator-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: ModeratorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorPageComponent", function() { return ModeratorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _metrics_processor_services_distance_calculator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../metrics-processor/services/distance-calculator.service */ "./src/app/metrics-processor/services/distance-calculator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModeratorPageComponent = /** @class */ (function () {
    function ModeratorPageComponent(distanceCalculator) {
        this.distanceCalculator = distanceCalculator;
        this.moderatorTest = _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__["MODERATOR_TESTS_PAGE_URL"];
        this.moderatorRedactors = _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__["MODERATOR_REDACTORS_PAGE_URL"];
    }
    ModeratorPageComponent.prototype.ngOnInit = function () {
    };
    ModeratorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moderator-page',
            template: __webpack_require__(/*! ./moderator-page.component.html */ "./src/app/moderator/moderator-page/moderator-page.component.html"),
            styles: [__webpack_require__(/*! ./moderator-page.component.css */ "./src/app/moderator/moderator-page/moderator-page.component.css")]
        }),
        __metadata("design:paramtypes", [_metrics_processor_services_distance_calculator_service__WEBPACK_IMPORTED_MODULE_2__["DistanceCalculatorService"]])
    ], ModeratorPageComponent);
    return ModeratorPageComponent;
}());



/***/ }),

/***/ "./src/app/moderator/moderator-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/moderator/moderator-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ModeratorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorRoutingModule", function() { return ModeratorRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _tests_services_tests_resolve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tests/services/tests-resolve.service */ "./src/app/tests/services/tests-resolve.service.ts");
/* harmony import */ var _moderator_page_moderator_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moderator-page/moderator-page.component */ "./src/app/moderator/moderator-page/moderator-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_positions_resolve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/positions-resolve.service */ "./src/app/moderator/services/positions-resolve.service.ts");
/* harmony import */ var _moderator_tests_moderator_tests_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moderator-tests/moderator-tests.component */ "./src/app/moderator/moderator-tests/moderator-tests.component.ts");
/* harmony import */ var _redactors_list_redactors_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./redactors-list/redactors-list.component */ "./src/app/moderator/redactors-list/redactors-list.component.ts");
/* harmony import */ var _services_redactors_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/redactors-resolve.service */ "./src/app/moderator/services/redactors-resolve.service.ts");
/* harmony import */ var _add_redactor_add_redactor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-redactor/add-redactor.component */ "./src/app/moderator/add-redactor/add-redactor.component.ts");
/* harmony import */ var _modify_redactor_modify_redactor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modify-redactor/modify-redactor.component */ "./src/app/moderator/modify-redactor/modify-redactor.component.ts");
/* harmony import */ var _services_redactor_resolve_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/redactor-resolve.service */ "./src/app/moderator/services/redactor-resolve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MODERATOR_PAGE_ROUTES = [
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__["MODERATOR_PAGE_URL"],
        component: _moderator_page_moderator_page_component__WEBPACK_IMPORTED_MODULE_3__["ModeratorPageComponent"],
        runGuardsAndResolvers: 'always',
        resolve: {
            positions: _services_positions_resolve_service__WEBPACK_IMPORTED_MODULE_5__["PositionsResolveService"],
            tests: _tests_services_tests_resolve_service__WEBPACK_IMPORTED_MODULE_2__["TestsResolveService"]
        }
    },
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__["MODERATOR_TESTS_PAGE_URL"],
        component: _moderator_tests_moderator_tests_component__WEBPACK_IMPORTED_MODULE_6__["ModeratorTestsComponent"],
        runGuardsAndResolvers: 'always',
        resolve: {
            tests: _tests_services_tests_resolve_service__WEBPACK_IMPORTED_MODULE_2__["TestsResolveService"]
        }
    },
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__["MODERATOR_REDACTORS_PAGE_URL"],
        component: _redactors_list_redactors_list_component__WEBPACK_IMPORTED_MODULE_7__["RedactorsListComponent"],
        runGuardsAndResolvers: 'always',
        resolve: {
            redactors: _services_redactors_resolve_service__WEBPACK_IMPORTED_MODULE_8__["RedactorsResolveService"]
        }
    },
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__["ADD_REDACTOR_PAGE_URL"],
        component: _add_redactor_add_redactor_component__WEBPACK_IMPORTED_MODULE_9__["AddRedactorComponent"],
        runGuardsAndResolvers: 'always'
    },
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__["MODIFY_REDACTOR_PAGE_URL"] + "/:username",
        component: _modify_redactor_modify_redactor_component__WEBPACK_IMPORTED_MODULE_10__["ModifyRedactorComponent"],
        runGuardsAndResolvers: 'always',
        resolve: {
            redactor: _services_redactor_resolve_service__WEBPACK_IMPORTED_MODULE_11__["RedactorResolveService"]
        }
    }
];
var ModeratorRoutingModule = /** @class */ (function () {
    function ModeratorRoutingModule() {
    }
    ModeratorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(MODERATOR_PAGE_ROUTES),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], ModeratorRoutingModule);
    return ModeratorRoutingModule;
}());



/***/ }),

/***/ "./src/app/moderator/moderator-tests/moderator-tests.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/moderator/moderator-tests/moderator-tests.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVyYXRvci9tb2RlcmF0b3ItdGVzdHMvbW9kZXJhdG9yLXRlc3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/moderator/moderator-tests/moderator-tests.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/moderator/moderator-tests/moderator-tests.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-all-tests></app-all-tests>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/moderator/moderator-tests/moderator-tests.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/moderator/moderator-tests/moderator-tests.component.ts ***!
  \************************************************************************/
/*! exports provided: ModeratorTestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorTestsComponent", function() { return ModeratorTestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModeratorTestsComponent = /** @class */ (function () {
    function ModeratorTestsComponent() {
    }
    ModeratorTestsComponent.prototype.ngOnInit = function () {
    };
    ModeratorTestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moderator-tests',
            template: __webpack_require__(/*! ./moderator-tests.component.html */ "./src/app/moderator/moderator-tests/moderator-tests.component.html"),
            styles: [__webpack_require__(/*! ./moderator-tests.component.css */ "./src/app/moderator/moderator-tests/moderator-tests.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModeratorTestsComponent);
    return ModeratorTestsComponent;
}());



/***/ }),

/***/ "./src/app/moderator/moderator.module.ts":
/*!***********************************************!*\
  !*** ./src/app/moderator/moderator.module.ts ***!
  \***********************************************/
/*! exports provided: ModeratorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorModule", function() { return ModeratorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _moderator_page_moderator_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moderator-page/moderator-page.component */ "./src/app/moderator/moderator-page/moderator-page.component.ts");
/* harmony import */ var _moderator_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moderator-routing.module */ "./src/app/moderator/moderator-routing.module.ts");
/* harmony import */ var _tests_tests_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tests/tests.module */ "./src/app/tests/tests.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _positions_edit_positions_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./positions-edit/positions-edit.component */ "./src/app/moderator/positions-edit/positions-edit.component.ts");
/* harmony import */ var _moderator_tests_moderator_tests_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./moderator-tests/moderator-tests.component */ "./src/app/moderator/moderator-tests/moderator-tests.component.ts");
/* harmony import */ var _redactors_list_redactors_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redactors-list/redactors-list.component */ "./src/app/moderator/redactors-list/redactors-list.component.ts");
/* harmony import */ var _add_redactor_add_redactor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-redactor/add-redactor.component */ "./src/app/moderator/add-redactor/add-redactor.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modify_redactor_modify_redactor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modify-redactor/modify-redactor.component */ "./src/app/moderator/modify-redactor/modify-redactor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ModeratorModule = /** @class */ (function () {
    function ModeratorModule() {
    }
    ModeratorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _moderator_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModeratorRoutingModule"],
                _tests_tests_module__WEBPACK_IMPORTED_MODULE_4__["TestsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_moderator_page_moderator_page_component__WEBPACK_IMPORTED_MODULE_2__["ModeratorPageComponent"], _positions_edit_positions_edit_component__WEBPACK_IMPORTED_MODULE_7__["PositionsEditComponent"], _moderator_tests_moderator_tests_component__WEBPACK_IMPORTED_MODULE_8__["ModeratorTestsComponent"], _redactors_list_redactors_list_component__WEBPACK_IMPORTED_MODULE_9__["RedactorsListComponent"], _add_redactor_add_redactor_component__WEBPACK_IMPORTED_MODULE_10__["AddRedactorComponent"], _modify_redactor_modify_redactor_component__WEBPACK_IMPORTED_MODULE_12__["ModifyRedactorComponent"]]
        })
    ], ModeratorModule);
    return ModeratorModule;
}());



/***/ }),

/***/ "./src/app/moderator/modify-redactor/modify-redactor.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/moderator/modify-redactor/modify-redactor.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVyYXRvci9tb2RpZnktcmVkYWN0b3IvbW9kaWZ5LXJlZGFjdG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/moderator/modify-redactor/modify-redactor.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/moderator/modify-redactor/modify-redactor.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-details-edit-wrapper full-width-form\">\r\n  <form [formGroup]=\"redactorDetailsForm\" class=\"material-form\">\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput formControlName=\"username\" placeholder=\"Nazwa użytkownika\">\r\n        <mat-error *ngIf=\"redactorDetailsForm.get('username').hasError('required')\">\r\n          Nazwa użytkownika jest wymagana.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"redactorDetailsForm.get('username').hasError('minlength')\">\r\n          Nazwa użytkownika musi zawierać co najmniej{{minUsernameLength}} znaków.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"redactorDetailsForm.get('username').hasError('maxlength')\">\r\n          Nazwa użytkownika może zawierać maksymalnie {{maxUsernameLength}} znaków.\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput formControlName=\"nameSurname\" placeholder=\"Imię i nazwisko\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput email formControlName=\"email\" placeholder=\"Email\">\r\n        <mat-error *ngIf=\"redactorDetailsForm.get('email').hasError('required')\">\r\n          Email jest wymagany.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"redactorDetailsForm.get('email').hasError('email')\">\r\n          Podaj prawidłowy adres email.\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"full-width-button\">\r\n      <button mat-button\r\n              [disabled]=\"redactorDetailsForm.invalid || redactorDetailsForm.errors\"\r\n              type=\"submit\" (click)=\"update()\">Zaktualizuj dane konta</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/moderator/modify-redactor/modify-redactor.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/moderator/modify-redactor/modify-redactor.component.ts ***!
  \************************************************************************/
/*! exports provided: ModifyRedactorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyRedactorComponent", function() { return ModifyRedactorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/global-variables */ "./src/app/shared/utils/global-variables.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _services_redactor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/redactor.service */ "./src/app/moderator/services/redactor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModifyRedactorComponent = /** @class */ (function () {
    function ModifyRedactorComponent(redactorService, formBuilder, router, route) {
        this.redactorService = redactorService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.minUsernameLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_2__["MIN_USERNAME_LENGTH"];
        this.maxUsernameLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_2__["MAX_USERNAME_LENGTH"];
    }
    ModifyRedactorComponent.prototype.ngOnInit = function () {
        this.redactor = this.route.snapshot.data['redactor'];
        this.buildForm();
    };
    ModifyRedactorComponent.prototype.buildForm = function () {
        this.redactorDetailsForm = this.formBuilder.group({
            username: [this.redactor.username, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minUsernameLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxUsernameLength)
                ]],
            email: [this.redactor.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nameSurname: [this.redactor.nameSurname],
        });
    };
    ModifyRedactorComponent.prototype.update = function () {
        var _this = this;
        this.redactorService.modify(this.redactor.username, this.redactorDetailsForm.value).subscribe(function (result) {
            _this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_4__["MODERATOR_REDACTORS_PAGE_URL"]]);
        });
    };
    ModifyRedactorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify-redactor',
            template: __webpack_require__(/*! ./modify-redactor.component.html */ "./src/app/moderator/modify-redactor/modify-redactor.component.html"),
            styles: [__webpack_require__(/*! ./modify-redactor.component.css */ "./src/app/moderator/modify-redactor/modify-redactor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_redactor_service__WEBPACK_IMPORTED_MODULE_5__["RedactorService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ModifyRedactorComponent);
    return ModifyRedactorComponent;
}());



/***/ }),

/***/ "./src/app/moderator/positions-edit/positions-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/moderator/positions-edit/positions-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test-column {\r\n  width: 35%;\r\n}\r\n.new-position {\r\n  margin-bottom: 30px;\r\n}\r\n.name-input {\r\n  width: 100%;\r\n}\r\n.name-input-wrapper {\r\n  margin-top: 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZXJhdG9yL3Bvc2l0aW9ucy1lZGl0L3Bvc2l0aW9ucy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbW9kZXJhdG9yL3Bvc2l0aW9ucy1lZGl0L3Bvc2l0aW9ucy1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdC1jb2x1bW4ge1xyXG4gIHdpZHRoOiAzNSU7XHJcbn1cclxuLm5ldy1wb3NpdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4ubmFtZS1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5hbWUtaW5wdXQtd3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/moderator/positions-edit/positions-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/moderator/positions-edit/positions-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"new-position row material-form\">\r\n    <div class=\"col-md-8 name-input-wrapper\">\r\n      <input mat-input placeholder=\"Nazwa\" class=\"name-input\"\r\n             [value]=\"name\" (input)=\"name = $event.target.value\">\r\n    </div>\r\n    <div class=\"col-md-4 full-width-button\">\r\n      <button mat-button (click)=\"add()\" [disabled]=\"name.length === 0\">\r\n        Dodaj\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"positions-table\">\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <td>Id</td>\r\n          <td>Nazwa</td>\r\n          <td>Aktywny</td>\r\n          <td>Test</td>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let position of positions.positions\">\r\n          <td>{{position.id}}</td>\r\n          <td>{{position.name}}</td>\r\n          <td class=\"material-form\">\r\n            <mat-checkbox [checked]=\"position.active\" (change)=\"setActive(position.id, $event.checked)\"></mat-checkbox>\r\n          </td>\r\n          <td class=\"test-column\">\r\n            <mat-select placeholder=\"Test\" [value]=\"getSelectValue(position)\" (selectionChange)=\"assign(position.id, $event.value)\">\r\n              <mat-option *ngFor=\"let test of tests.tests\" [value]=\"test.id\">\r\n                {{test.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/moderator/positions-edit/positions-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/moderator/positions-edit/positions-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: PositionsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsEditComponent", function() { return PositionsEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_positions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/positions */ "./src/app/models/positions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_positions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/positions.service */ "./src/app/moderator/services/positions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PositionsEditComponent = /** @class */ (function () {
    function PositionsEditComponent(route, positionService) {
        this.route = route;
        this.positionService = positionService;
        this.name = '';
    }
    PositionsEditComponent.prototype.ngOnInit = function () {
        this.positions = this.route.snapshot.data['positions'];
        this.tests = this.route.snapshot.data['tests'];
    };
    PositionsEditComponent.prototype.add = function () {
        var _this = this;
        var position = new _models_positions__WEBPACK_IMPORTED_MODULE_1__["Position"]();
        position.name = this.name;
        position.active = false;
        this.positionService.add(position).subscribe(function (result) {
            _this.positions.positions.push(result);
        });
    };
    PositionsEditComponent.prototype.assign = function (positionId, testId) {
        this.positionService.assign(testId, positionId).subscribe();
    };
    PositionsEditComponent.prototype.setActive = function (positionId, active) {
        this.positionService.setActive(positionId, active).subscribe();
    };
    PositionsEditComponent.prototype.getSelectValue = function (position) {
        if (position.test === null) {
            return null;
        }
        return position.test.id;
    };
    PositionsEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-positions-edit',
            template: __webpack_require__(/*! ./positions-edit.component.html */ "./src/app/moderator/positions-edit/positions-edit.component.html"),
            styles: [__webpack_require__(/*! ./positions-edit.component.css */ "./src/app/moderator/positions-edit/positions-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_positions_service__WEBPACK_IMPORTED_MODULE_3__["PositionsService"]])
    ], PositionsEditComponent);
    return PositionsEditComponent;
}());



/***/ }),

/***/ "./src/app/moderator/redactors-list/redactors-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/moderator/redactors-list/redactors-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-button {\r\n  margin-top: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZXJhdG9yL3JlZGFjdG9ycy1saXN0L3JlZGFjdG9ycy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tb2RlcmF0b3IvcmVkYWN0b3JzLWxpc3QvcmVkYWN0b3JzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/moderator/redactors-list/redactors-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/moderator/redactors-list/redactors-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div>\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <td>Nazwa użytkownika</td>\r\n          <td>Imię i nazwisko</td>\r\n          <td>Modyfikuj</td>\r\n          <td>Usuń</td>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let redactor of redactors.users; let i = index\">\r\n            <td>{{redactor.username}}</td>\r\n            <td>{{redactor.nameSurname}}</td>\r\n            <td class=\"material-form\">\r\n              <button mat-button [routerLink]=\"['/', modifyRedactor, redactor.username]\">Modyfikuj</button>\r\n            </td>\r\n            <td class=\"danger-button\">\r\n              <button mat-button (click)=\"delete(redactor.username, i)\">Usuń</button>\r\n            </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"row add-button material-form full-width-button\">\r\n    <div class=\"col-md-6\"></div>\r\n    <div class=\"col-md-6\">\r\n      <button mat-button [routerLink]=\"['/', addRedactor]\">Dodaj</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/moderator/redactors-list/redactors-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/moderator/redactors-list/redactors-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: RedactorsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorsListComponent", function() { return RedactorsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_redactor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/redactor.service */ "./src/app/moderator/services/redactor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RedactorsListComponent = /** @class */ (function () {
    function RedactorsListComponent(redactorService, route) {
        this.redactorService = redactorService;
        this.route = route;
        this.addRedactor = _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["ADD_REDACTOR_PAGE_URL"];
        this.modifyRedactor = _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["MODIFY_REDACTOR_PAGE_URL"];
    }
    RedactorsListComponent.prototype.ngOnInit = function () {
        this.redactors = this.route.snapshot.data['redactors'];
    };
    RedactorsListComponent.prototype.delete = function (username, index) {
        var _this = this;
        this.redactorService.delete(username)
            .subscribe(function () {
            _this.redactors.users.splice(index, 1);
        });
    };
    RedactorsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-redactors-list',
            template: __webpack_require__(/*! ./redactors-list.component.html */ "./src/app/moderator/redactors-list/redactors-list.component.html"),
            styles: [__webpack_require__(/*! ./redactors-list.component.css */ "./src/app/moderator/redactors-list/redactors-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_redactor_service__WEBPACK_IMPORTED_MODULE_1__["RedactorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RedactorsListComponent);
    return RedactorsListComponent;
}());



/***/ }),

/***/ "./src/app/moderator/services/positions-resolve.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/moderator/services/positions-resolve.service.ts ***!
  \*****************************************************************/
/*! exports provided: PositionsResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsResolveService", function() { return PositionsResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _positions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./positions.service */ "./src/app/moderator/services/positions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PositionsResolveService = /** @class */ (function () {
    function PositionsResolveService(errorHandlingService, positionsService, router) {
        this.errorHandlingService = errorHandlingService;
        this.positionsService = positionsService;
        this.router = router;
    }
    PositionsResolveService.prototype.resolve = function (route) {
        this.errorHandlingService.clear();
        return this.positionsService
            .getPositions()
            .toPromise()
            .then(function (result) {
            return result;
        }).catch(function () {
            return null;
        });
    };
    PositionsResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingService"],
            _positions_service__WEBPACK_IMPORTED_MODULE_3__["PositionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PositionsResolveService);
    return PositionsResolveService;
}());



/***/ }),

/***/ "./src/app/moderator/services/positions.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/moderator/services/positions.service.ts ***!
  \*********************************************************/
/*! exports provided: PositionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsService", function() { return PositionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/backend-urls */ "./src/app/shared/utils/backend-urls.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionsService = /** @class */ (function () {
    function PositionsService(http) {
        this.http = http;
    }
    PositionsService.prototype.getPositions = function () {
        return this.http.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["POSITIONS_URL"]);
    };
    PositionsService.prototype.assign = function (testId, positionId) {
        return this.http.put(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["POSITIONS_URL"] + "/" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["ASSIGN_POSTFIX"] + "/" + positionId + "?testId=" + testId, null);
    };
    PositionsService.prototype.add = function (position) {
        return this.http.post("" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["POSITIONS_URL"], position);
    };
    PositionsService.prototype.setActive = function (positionId, active) {
        return this.http.put(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["POSITIONS_URL"] + "/" + positionId + "?active=" + active, null);
    };
    PositionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PositionsService);
    return PositionsService;
}());



/***/ }),

/***/ "./src/app/moderator/services/redactor-resolve.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/moderator/services/redactor-resolve.service.ts ***!
  \****************************************************************/
/*! exports provided: RedactorResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorResolveService", function() { return RedactorResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _redactor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redactor.service */ "./src/app/moderator/services/redactor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RedactorResolveService = /** @class */ (function () {
    function RedactorResolveService(redactorService, router) {
        this.redactorService = redactorService;
        this.router = router;
    }
    RedactorResolveService.prototype.resolve = function (route) {
        var username = route.params['username'];
        if (username === undefined || username === null) {
            this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["NOT_FOUND_PAGE_URL"]]);
            return null;
        }
        return this.redactorService.get(username)
            .toPromise()
            .then(function (result) {
            return result;
        });
    };
    RedactorResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_redactor_service__WEBPACK_IMPORTED_MODULE_3__["RedactorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RedactorResolveService);
    return RedactorResolveService;
}());



/***/ }),

/***/ "./src/app/moderator/services/redactor.service.ts":
/*!********************************************************!*\
  !*** ./src/app/moderator/services/redactor.service.ts ***!
  \********************************************************/
/*! exports provided: RedactorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorService", function() { return RedactorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/backend-urls */ "./src/app/shared/utils/backend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RedactorService = /** @class */ (function () {
    function RedactorService(http) {
        this.http = http;
    }
    RedactorService.prototype.getAll = function () {
        return this.http.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["REDACTOR_URL"]);
    };
    RedactorService.prototype.get = function (username) {
        return this.http.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["REDACTOR_URL"] + "/" + username);
    };
    RedactorService.prototype.delete = function (username) {
        return this.http.delete(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["REDACTOR_URL"] + "/" + username);
    };
    RedactorService.prototype.add = function (registerDetails) {
        return this.http.post(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["REDACTOR_URL"], registerDetails);
    };
    RedactorService.prototype.modify = function (username, updateData) {
        return this.http.put(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["REDACTOR_URL"] + "/" + username, updateData);
    };
    RedactorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RedactorService);
    return RedactorService;
}());



/***/ }),

/***/ "./src/app/moderator/services/redactors-resolve.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/moderator/services/redactors-resolve.service.ts ***!
  \*****************************************************************/
/*! exports provided: RedactorsResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorsResolveService", function() { return RedactorsResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _redactor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redactor.service */ "./src/app/moderator/services/redactor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RedactorsResolveService = /** @class */ (function () {
    function RedactorsResolveService(errorHandlingService, redactorService, router) {
        this.errorHandlingService = errorHandlingService;
        this.redactorService = redactorService;
        this.router = router;
    }
    RedactorsResolveService.prototype.resolve = function (route) {
        this.errorHandlingService.clear();
        return this.redactorService
            .getAll()
            .toPromise()
            .then(function (result) {
            return result;
        }).catch(function () {
            return null;
        });
    };
    RedactorsResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingService"],
            _redactor_service__WEBPACK_IMPORTED_MODULE_3__["RedactorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RedactorsResolveService);
    return RedactorsResolveService;
}());



/***/ }),

/***/ "./src/app/redactor/redactor-main-page/redactor-main-page.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/redactor/redactor-main-page/redactor-main-page.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n  border: 1px solid var(--secondary-text-color);\r\n}\r\n\r\ntd {\r\n  text-align: center;\r\n  padding: 5px 20px;\r\n  border: 1px solid var(--secondary-text-color);\r\n}\r\n\r\nthead td {\r\n  background-color: var(--background-secondary-color);\r\n  font-weight: bold;\r\n}\r\n\r\n.redactor-main-page-container {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.file-input {\r\n  display: none;\r\n}\r\n\r\n.buttons {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkYWN0b3IvcmVkYWN0b3ItbWFpbi1wYWdlL3JlZGFjdG9yLW1haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsbURBQW1EO0VBQ25ELGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3JlZGFjdG9yL3JlZGFjdG9yLW1haW4tcGFnZS9yZWRhY3Rvci1tYWluLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbnRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xyXG59XHJcblxyXG50aGVhZCB0ZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5yZWRhY3Rvci1tYWluLXBhZ2UtY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5maWxlLWlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5idXR0b25zIHtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/redactor/redactor-main-page/redactor-main-page.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/redactor/redactor-main-page/redactor-main-page.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"redactor-main-page-container\">\r\n\r\n  <div class=\"row material-form full-width-button buttons\">\r\n    <div class=\"col-md-4\">\r\n      <button mat-button (click)=onCheckTestButtonClick()\r\n              type=\"button\">\r\n        Sprawdź testy\r\n      </button>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <input #fileInput\r\n             data-max-size=\"2048\"\r\n             class=\"file-input\"\r\n             type=\"file\" accept=\".csv\"\r\n             (change)=\"onImportTestButtonClick($event)\">\r\n      <button mat-button type=\"button\" (click)=\"showFileDialog()\" (mouseenter)=\"distanceCalculator.addPosition($event)\">\r\n        Importuj test\r\n      </button>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <button mat-button (click)=onCreateTestButtonClick() (mouseenter)=\"distanceCalculator.addPosition($event)\"\r\n              type=\"button\">\r\n        Stwórz test\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"margin-top\">\r\n    <app-all-tests></app-all-tests>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/redactor/redactor-main-page/redactor-main-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/redactor/redactor-main-page/redactor-main-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RedactorMainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorMainPageComponent", function() { return RedactorMainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/redactor/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/test.service */ "./src/app/redactor/services/test.service.ts");
/* harmony import */ var _dialogs_warning_dialog_import_dialog_import_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/warning-dialog/import-dialog/import-dialog.component */ "./src/app/dialogs/warning-dialog/import-dialog/import-dialog.component.ts");
/* harmony import */ var _metrics_processor_services_distance_calculator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../metrics-processor/services/distance-calculator.service */ "./src/app/metrics-processor/services/distance-calculator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RedactorMainPageComponent = /** @class */ (function () {
    function RedactorMainPageComponent(userService, router, dialog, testService, distanceCalculator) {
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.testService = testService;
        this.distanceCalculator = distanceCalculator;
    }
    RedactorMainPageComponent.prototype.ngOnInit = function () {
    };
    RedactorMainPageComponent.prototype.onCheckTestButtonClick = function () {
        this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["SOLUTIONS_PAGE_URL"]]);
    };
    RedactorMainPageComponent.prototype.onCreateTestButtonClick = function () {
        this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["TEST_PAGE_URL"], _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["ADD_QUESTIONS"]]);
    };
    RedactorMainPageComponent.prototype.onImportTestButtonClick = function (event) {
        var _this = this;
        if (event.target.files.length === 1) {
            this.testService.import(event.target.files[0]).subscribe(function (importReport) {
                _this.dialog.open(_dialogs_warning_dialog_import_dialog_import_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ImportDialogComponent"], {
                    height: '400px',
                    width: '600px',
                    data: {
                        importReport: importReport
                    }
                }).afterClosed().subscribe(function () {
                    _this.router.navigated = false;
                    _this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["REDACTOR_PAGE_URL"]]);
                });
            });
            event.target.value = '';
        }
    };
    RedactorMainPageComponent.prototype.showFileDialog = function () {
        this.fileInput.nativeElement.click();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], RedactorMainPageComponent.prototype, "fileInput", void 0);
    RedactorMainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor-main-page',
            template: __webpack_require__(/*! ./redactor-main-page.component.html */ "./src/app/redactor/redactor-main-page/redactor-main-page.component.html"),
            styles: [__webpack_require__(/*! ./redactor-main-page.component.css */ "./src/app/redactor/redactor-main-page/redactor-main-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _services_test_service__WEBPACK_IMPORTED_MODULE_5__["TestService"],
            _metrics_processor_services_distance_calculator_service__WEBPACK_IMPORTED_MODULE_7__["DistanceCalculatorService"]])
    ], RedactorMainPageComponent);
    return RedactorMainPageComponent;
}());



/***/ }),

/***/ "./src/app/redactor/redactor-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/redactor/redactor-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RedactorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorRoutingModule", function() { return RedactorRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _redactor_main_page_redactor_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redactor-main-page/redactor-main-page.component */ "./src/app/redactor/redactor-main-page/redactor-main-page.component.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _tests_services_tests_resolve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tests/services/tests-resolve.service */ "./src/app/tests/services/tests-resolve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var REDACTOR_PAGE_ROUTES = [
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["REDACTOR_PAGE_URL"],
        component: _redactor_main_page_redactor_main_page_component__WEBPACK_IMPORTED_MODULE_2__["RedactorMainPageComponent"],
        runGuardsAndResolvers: 'always',
        resolve: {
            tests: _tests_services_tests_resolve_service__WEBPACK_IMPORTED_MODULE_4__["TestsResolveService"],
        }
    }
];
var RedactorRoutingModule = /** @class */ (function () {
    function RedactorRoutingModule() {
    }
    RedactorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(REDACTOR_PAGE_ROUTES),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], RedactorRoutingModule);
    return RedactorRoutingModule;
}());



/***/ }),

/***/ "./src/app/redactor/redactor.module.ts":
/*!*********************************************!*\
  !*** ./src/app/redactor/redactor.module.ts ***!
  \*********************************************/
/*! exports provided: RedactorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorModule", function() { return RedactorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _redactor_main_page_redactor_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redactor-main-page/redactor-main-page.component */ "./src/app/redactor/redactor-main-page/redactor-main-page.component.ts");
/* harmony import */ var _redactor_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redactor-routing.module */ "./src/app/redactor/redactor-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tests_tests_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tests/tests.module */ "./src/app/tests/tests.module.ts");
/* harmony import */ var _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialogs/dialogs.module */ "./src/app/dialogs/dialogs.module.ts");
/* harmony import */ var _dialogs_warning_dialog_assign_redactor_to_test_assign_redactor_to_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component */ "./src/app/dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component.ts");
/* harmony import */ var _dialogs_warning_dialog_import_dialog_import_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialogs/warning-dialog/import-dialog/import-dialog.component */ "./src/app/dialogs/warning-dialog/import-dialog/import-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var RedactorModule = /** @class */ (function () {
    function RedactorModule() {
    }
    RedactorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _redactor_routing_module__WEBPACK_IMPORTED_MODULE_3__["RedactorRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _tests_tests_module__WEBPACK_IMPORTED_MODULE_6__["TestsModule"],
                _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__["DialogsModule"]
            ],
            declarations: [_redactor_main_page_redactor_main_page_component__WEBPACK_IMPORTED_MODULE_2__["RedactorMainPageComponent"]],
            exports: [_redactor_main_page_redactor_main_page_component__WEBPACK_IMPORTED_MODULE_2__["RedactorMainPageComponent"]],
            entryComponents: [
                _dialogs_warning_dialog_import_dialog_import_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ImportDialogComponent"],
                _dialogs_warning_dialog_assign_redactor_to_test_assign_redactor_to_test_component__WEBPACK_IMPORTED_MODULE_8__["AssignRedactorToTestComponent"]
            ]
        })
    ], RedactorModule);
    return RedactorModule;
}());



/***/ }),

/***/ "./src/app/redactor/services/test.service.ts":
/*!***************************************************!*\
  !*** ./src/app/redactor/services/test.service.ts ***!
  \***************************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/backend-urls */ "./src/app/shared/utils/backend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestService = /** @class */ (function () {
    function TestService(httpClient) {
        this.httpClient = httpClient;
    }
    TestService.prototype.import = function (file) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        return this.httpClient.post(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["TESTS_URL"] + "/" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["IMPORT_POSTFIX"], formData);
    };
    TestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/redactor/services/user.service.ts":
/*!***************************************************!*\
  !*** ./src/app/redactor/services/user.service.ts ***!
  \***************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/backend-urls */ "./src/app/shared/utils/backend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
    }
    UserService.prototype.getUsers = function () {
        return this.httpClient.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["USERS_URL"]);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/services/error-handling.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/error-handling.service.ts ***!
  \***********************************************************/
/*! exports provided: ErrorHandlingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingService", function() { return ErrorHandlingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _session_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorHandlingService = /** @class */ (function () {
    function ErrorHandlingService(router, sessionStorageService) {
        this.router = router;
        this.sessionStorageService = sessionStorageService;
    }
    ErrorHandlingService.prototype.clear = function () {
        this.errorCode = 0;
        this.errorMessage = null;
        this.error = false;
    };
    ErrorHandlingService.prototype.handle = function (error) {
        if (error.error !== undefined && error.error !== null) {
            this.errorCode = error.error.code;
            this.errorMessage = error.error.message;
        }
        this.error = true;
        if (this.errorCode === 404 || this.errorCode === 504) {
            this.handle404and504();
        }
        else if (this.errorCode === 401) {
            this.handle401();
        }
        else {
            window.scrollTo(0, 0);
        }
    };
    ErrorHandlingService.prototype.handle401 = function () {
        this.sessionStorageService.clearSession();
        this.router.navigate([_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["LOGIN_PAGE_URL"]]);
    };
    ErrorHandlingService.prototype.handle404and504 = function () {
        this.router.navigate([_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["NOT_FOUND_PAGE_URL"]]);
    };
    ErrorHandlingService.prototype.hasError = function () {
        return this.error;
    };
    ErrorHandlingService.prototype.getErrorMessage = function () {
        return this.errorMessage;
    };
    ErrorHandlingService.prototype.getErrorCode = function () {
        return this.errorCode;
    };
    ErrorHandlingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _session_storage_service__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]])
    ], ErrorHandlingService);
    return ErrorHandlingService;
}());



/***/ }),

/***/ "./src/app/shared/services/session-storage.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/session-storage.service.ts ***!
  \************************************************************/
/*! exports provided: SessionStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorageService", function() { return SessionStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/global-variables */ "./src/app/shared/utils/global-variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionStorageService = /** @class */ (function () {
    function SessionStorageService() {
    }
    SessionStorageService.prototype.storeSession = function (user, token) {
        localStorage.setItem('token', token);
        localStorage.setItem('userData', JSON.stringify(user));
    };
    SessionStorageService.prototype.updateSession = function (token) {
        localStorage.setItem('token', token);
    };
    SessionStorageService.prototype.clearSession = function () {
        localStorage.clear();
    };
    SessionStorageService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
    };
    SessionStorageService.prototype.getUser = function () {
        return JSON.parse(localStorage.getItem('userData'));
    };
    SessionStorageService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    SessionStorageService.prototype.isUserLoggedIn = function () {
        return this.getUser() !== null;
    };
    SessionStorageService.prototype.hasRole = function (role) {
        if (!this.isUserLoggedIn()) {
            return false;
        }
        for (var i = 0; i < this.getUser().roles.length; i++) {
            if (this.getUser().roles[i].name === role) {
                return true;
            }
        }
        return false;
    };
    SessionStorageService.prototype.isAdmin = function () {
        return this.hasRole(_utils_global_variables__WEBPACK_IMPORTED_MODULE_1__["ROLE_ADMIN"]);
    };
    SessionStorageService.prototype.isRedactor = function () {
        return this.hasRole(_utils_global_variables__WEBPACK_IMPORTED_MODULE_1__["ROLE_REDACTOR"]);
    };
    SessionStorageService.prototype.isModerator = function () {
        return this.hasRole(_utils_global_variables__WEBPACK_IMPORTED_MODULE_1__["ROLE_MODERATOR"]);
    };
    SessionStorageService.prototype.isUser = function () {
        return this.hasRole(_utils_global_variables__WEBPACK_IMPORTED_MODULE_1__["ROLE_USER"]);
    };
    SessionStorageService.prototype.checkUsername = function (username) {
        return this.getUser().username === username;
    };
    SessionStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SessionStorageService);
    return SessionStorageService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_2__["SlideshowModule"]
            ],
            exports: [],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/utils/backend-urls.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/utils/backend-urls.ts ***!
  \**********************************************/
/*! exports provided: LOGIN_URL, REGISTER_URL, ROLES_POSTFIX, USERS_URL, PASSWORD_RESET_URL, PASSWORD_POSTFIX, TESTS_URL, QUESTIONS_POSTFIX, SOLUTIONS_POSTFIX, SOLUTIONS_URL, POSITIONS_URL, TESTS_POSTFIX, ASSIGN_POSTFIX, WIKIPEDIA_UTILS_URL, SYNONYMS_UTILS_URL, TRANSLATE_UTILS_URL, REDACTOR_URL, REDACTOR_POSTFIX, IMPORT_POSTFIX, EXPORT_POSTFIX, METRICS_URL, EMAIL_POSTFIX, PDF_POSTFIX, CSV_POSTFIX, SCREEN_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_URL", function() { return LOGIN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_URL", function() { return REGISTER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLES_POSTFIX", function() { return ROLES_POSTFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_URL", function() { return USERS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_RESET_URL", function() { return PASSWORD_RESET_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_POSTFIX", function() { return PASSWORD_POSTFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTS_URL", function() { return TESTS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTIONS_POSTFIX", function() { return QUESTIONS_POSTFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOLUTIONS_POSTFIX", function() { return SOLUTIONS_POSTFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOLUTIONS_URL", function() { return SOLUTIONS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSITIONS_URL", function() { return POSITIONS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTS_POSTFIX", function() { return TESTS_POSTFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSIGN_POSTFIX", function() { return ASSIGN_POSTFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIKIPEDIA_UTILS_URL", function() { return WIKIPEDIA_UTILS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNONYMS_UTILS_URL", function() { return SYNONYMS_UTILS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSLATE_UTILS_URL", function() { return TRANSLATE_UTILS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDACTOR_URL", function() { return REDACTOR_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDACTOR_POSTFIX", function() { return REDACTOR_POSTFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPORT_POSTFIX", function() { return IMPORT_POSTFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPORT_POSTFIX", function() { return EXPORT_POSTFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METRICS_URL", function() { return METRICS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_POSTFIX", function() { return EMAIL_POSTFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDF_POSTFIX", function() { return PDF_POSTFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSV_POSTFIX", function() { return CSV_POSTFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_URL", function() { return SCREEN_URL; });
var LOGIN_URL = '/api/users/login';
var REGISTER_URL = '/api/users';
var ROLES_POSTFIX = 'roles';
var USERS_URL = '/api/users';
var PASSWORD_RESET_URL = '/api/password/reset';
var PASSWORD_POSTFIX = 'password';
var TESTS_URL = '/api/tests';
var QUESTIONS_POSTFIX = 'questions';
var SOLUTIONS_POSTFIX = 'solutions';
var SOLUTIONS_URL = '/api/solutions';
var POSITIONS_URL = '/api/positions';
var TESTS_POSTFIX = 'tests';
var ASSIGN_POSTFIX = 'assign';
var WIKIPEDIA_UTILS_URL = '/api/utils/wikipedia';
var SYNONYMS_UTILS_URL = '/api/utils/synonyms';
var TRANSLATE_UTILS_URL = '/api/utils/translate';
var REDACTOR_URL = '/api/redactors';
var REDACTOR_POSTFIX = 'redactors';
var IMPORT_POSTFIX = 'import';
var EXPORT_POSTFIX = 'export';
var METRICS_URL = '/api/metrics';
var EMAIL_POSTFIX = 'email';
var PDF_POSTFIX = 'pdf';
var CSV_POSTFIX = 'csv';
var SCREEN_URL = METRICS_URL + "/screen";


/***/ }),

/***/ "./src/app/shared/utils/confirm-password-error-state-matcher.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/utils/confirm-password-error-state-matcher.ts ***!
  \**********************************************************************/
/*! exports provided: ConfirmPasswordErrorMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordErrorMatcher", function() { return ConfirmPasswordErrorMatcher; });
var ConfirmPasswordErrorMatcher = /** @class */ (function () {
    function ConfirmPasswordErrorMatcher() {
    }
    ConfirmPasswordErrorMatcher.prototype.isErrorState = function (control, form) {
        return control.touched && (control.parent.hasError('matchPassword') || control.invalid);
    };
    return ConfirmPasswordErrorMatcher;
}());



/***/ }),

/***/ "./src/app/shared/utils/frontend-urls.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/utils/frontend-urls.ts ***!
  \***********************************************/
/*! exports provided: MAIN_PAGE_URL, LOGIN_PAGE_URL, REGISTER_PAGE_URL, NOT_FOUND_PAGE_URL, RESET_PASSWORD_PAGE_URL, USER_EDIT_PAGE_URL, TEST_PAGE_URL, TRANSLATE_TEST_PAGE_URL, ADD_QUESTIONS, REDACTOR_PAGE_URL, USER_PAGE_URL, MODERATOR_PAGE_URL, RESOLVE_TEST_PAGE, SOLUTIONS_PAGE_URL, CHECK_TEST, MY_SOLUTIONS, MODERATOR_TESTS_PAGE_URL, MODERATOR_REDACTORS_PAGE_URL, ADD_REDACTOR_PAGE_URL, MODIFY_REDACTOR_PAGE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_PAGE_URL", function() { return MAIN_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_PAGE_URL", function() { return LOGIN_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_PAGE_URL", function() { return REGISTER_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_FOUND_PAGE_URL", function() { return NOT_FOUND_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_PASSWORD_PAGE_URL", function() { return RESET_PASSWORD_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_EDIT_PAGE_URL", function() { return USER_EDIT_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_PAGE_URL", function() { return TEST_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSLATE_TEST_PAGE_URL", function() { return TRANSLATE_TEST_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUESTIONS", function() { return ADD_QUESTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDACTOR_PAGE_URL", function() { return REDACTOR_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PAGE_URL", function() { return USER_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODERATOR_PAGE_URL", function() { return MODERATOR_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_TEST_PAGE", function() { return RESOLVE_TEST_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOLUTIONS_PAGE_URL", function() { return SOLUTIONS_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_TEST", function() { return CHECK_TEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_SOLUTIONS", function() { return MY_SOLUTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODERATOR_TESTS_PAGE_URL", function() { return MODERATOR_TESTS_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODERATOR_REDACTORS_PAGE_URL", function() { return MODERATOR_REDACTORS_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REDACTOR_PAGE_URL", function() { return ADD_REDACTOR_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_REDACTOR_PAGE_URL", function() { return MODIFY_REDACTOR_PAGE_URL; });
var MAIN_PAGE_URL = 'main';
var LOGIN_PAGE_URL = 'login';
var REGISTER_PAGE_URL = 'register';
var NOT_FOUND_PAGE_URL = 'not-found';
var RESET_PASSWORD_PAGE_URL = 'reset-password';
var USER_EDIT_PAGE_URL = 'account';
var TEST_PAGE_URL = 'test';
var TRANSLATE_TEST_PAGE_URL = 'translate';
var ADD_QUESTIONS = 'questions';
var REDACTOR_PAGE_URL = 'redactor';
var USER_PAGE_URL = 'user';
var MODERATOR_PAGE_URL = 'moderator';
var RESOLVE_TEST_PAGE = 'resolve';
var SOLUTIONS_PAGE_URL = 'redactor-tests';
var CHECK_TEST = 'check-test';
var MY_SOLUTIONS = 'my-tests';
var MODERATOR_TESTS_PAGE_URL = 'moderator-tests';
var MODERATOR_REDACTORS_PAGE_URL = 'moderator-redactors';
var ADD_REDACTOR_PAGE_URL = 'add-redactor';
var MODIFY_REDACTOR_PAGE_URL = 'modify-redactor';


/***/ }),

/***/ "./src/app/shared/utils/global-variables.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/utils/global-variables.ts ***!
  \**************************************************/
/*! exports provided: MAX_USERNAME_LENGTH, MAX_PASSWORD_LENGTH, MIN_USERNAME_LENGTH, MIN_PASSWORD_LENGTH, ROLE_ADMIN, ROLE_REDACTOR, ROLE_MODERATOR, ROLE_USER, LANGUAGE_PL, LANGUAGE_EN, VARIANT_QUESTION, SCALA_QUESTION, NUMERIC_QUESTION, OPEN_QUESTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_USERNAME_LENGTH", function() { return MAX_USERNAME_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_PASSWORD_LENGTH", function() { return MAX_PASSWORD_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_USERNAME_LENGTH", function() { return MIN_USERNAME_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_PASSWORD_LENGTH", function() { return MIN_PASSWORD_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLE_ADMIN", function() { return ROLE_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLE_REDACTOR", function() { return ROLE_REDACTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLE_MODERATOR", function() { return ROLE_MODERATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLE_USER", function() { return ROLE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_PL", function() { return LANGUAGE_PL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_EN", function() { return LANGUAGE_EN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VARIANT_QUESTION", function() { return VARIANT_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCALA_QUESTION", function() { return SCALA_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_QUESTION", function() { return NUMERIC_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_QUESTION", function() { return OPEN_QUESTION; });
var MAX_USERNAME_LENGTH = 20;
var MAX_PASSWORD_LENGTH = 20;
var MIN_USERNAME_LENGTH = 3;
var MIN_PASSWORD_LENGTH = 3;
var ROLE_ADMIN = 'ADMIN';
var ROLE_REDACTOR = 'REDACTOR';
var ROLE_MODERATOR = 'MODERATOR';
var ROLE_USER = 'USER';
var LANGUAGE_PL = 'pl';
var LANGUAGE_EN = 'en';
var VARIANT_QUESTION = 'variant';
var SCALA_QUESTION = 'scala';
var NUMERIC_QUESTION = 'numeric';
var OPEN_QUESTION = 'open';


/***/ }),

/***/ "./src/app/shared/utils/shared-confirm-password.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/utils/shared-confirm-password.ts ***!
  \*********************************************************/
/*! exports provided: SharedConfirmPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedConfirmPassword", function() { return SharedConfirmPassword; });
var SharedConfirmPassword = /** @class */ (function () {
    function SharedConfirmPassword() {
    }
    SharedConfirmPassword.prototype.matchPasswordHelper = function (abstractControl, firstPassword, secondPassword) {
        var password = abstractControl.get(firstPassword).value;
        var confirmPassword = abstractControl.get(secondPassword).value;
        if (password !== confirmPassword) {
            return { matchPassword: true };
        }
        else {
            return null;
        }
    };
    return SharedConfirmPassword;
}());



/***/ }),

/***/ "./src/app/tests/all-tests/all-tests.component.css":
/*!*********************************************************!*\
  !*** ./src/app/tests/all-tests/all-tests.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n  border: 1px solid var(--secondary-text-color);\r\n}\r\n\r\ntd {\r\n  text-align: center;\r\n  padding: 5px 20px;\r\n  border: 1px solid var(--secondary-text-color);\r\n}\r\n\r\nthead td {\r\n  background-color: var(--background-secondary-color);\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvYWxsLXRlc3RzL2FsbC10ZXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsbURBQW1EO0VBQ25ELGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RzL2FsbC10ZXN0cy9hbGwtdGVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbnRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xyXG59XHJcblxyXG50aGVhZCB0ZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tests/all-tests/all-tests.component.html":
/*!**********************************************************!*\
  !*** ./src/app/tests/all-tests/all-tests.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all-test-container material-form\">\r\n  <table>\r\n    <thead>\r\n    <tr>\r\n      <td>Id</td>\r\n      <td>Nazwa</td>\r\n      <td>Język</td>\r\n      <td>Edytuj</td>\r\n      <td>Skasuj</td>\r\n      <td *ngIf=\"isRedactor()\">Przetłumacz ręcznie</td>\r\n      <td *ngIf=\"isRedactor()\">Przetłumacz</td>\r\n      <td *ngIf=\"isRedactor() && redactors\">Przekaż prawo do testu</td>\r\n      <td *ngIf=\"isRedactor()\">Eksportuj (CSV)</td>\r\n      <td *ngIf=\"isRedactor()\">Eksportuj (PDF)</td>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let test of tests.tests; let i = index\">\r\n      <td>{{test.id}}</td>\r\n      <td>{{test.name}}</td>\r\n      <td>{{test.language}}</td>\r\n      <td>\r\n        <button mat-button (click)=\"edit(test.id)\" (mouseenter)=\"distanceCalculator.addPosition($event)\">Edytuj</button>\r\n      </td>\r\n      <td class=\"danger-button\">\r\n        <button mat-button (click)=\"delete(test.id, i)\">Skasuj</button>\r\n      </td>\r\n      <td *ngIf=\"isRedactor()\">\r\n        <button mat-button (click)=\"translate(test.id)\" (mouseenter)=\"distanceCalculator.addPosition($event)\">Tłumacz</button>\r\n      </td>\r\n      <td *ngIf=\"isRedactor()\">\r\n        <button mat-button (click)=\"translateWholeTest(test.id)\">Tłumacz</button>\r\n      </td>\r\n      <td *ngIf=\"isRedactor() && redactors\">\r\n        <mat-select placeholder=\"Użytkownik\" (selectionChange)=\"assign(test.id, $event.value)\">\r\n          <div *ngFor=\"let redactor of redactors.users\">\r\n            <mat-option *ngIf=\"redactor.username !== getUsername()\" [value]=\"redactor.username\">\r\n              {{redactor.username}}\r\n            </mat-option>\r\n          </div>\r\n\r\n        </mat-select>\r\n      </td>\r\n      <td *ngIf=\"isRedactor()\">\r\n        <button mat-button (click)=\"exportCSV(test.id, test.name)\">Eksportuj CSV</button>\r\n      </td>\r\n      <td *ngIf=\"isRedactor()\">\r\n        <button mat-button (click)=\"exportPDF(test.id, test.name)\">Eksportuj PDF</button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tests/all-tests/all-tests.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tests/all-tests/all-tests.component.ts ***!
  \********************************************************/
/*! exports provided: AllTestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTestsComponent", function() { return AllTestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/test.service */ "./src/app/tests/services/test.service.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dialogs_warning_dialog_assign_redactor_to_test_assign_redactor_to_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component */ "./src/app/dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _metrics_processor_services_distance_calculator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../metrics-processor/services/distance-calculator.service */ "./src/app/metrics-processor/services/distance-calculator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AllTestsComponent = /** @class */ (function () {
    function AllTestsComponent(route, router, testService, sessionStorageService, dialog, distanceCalculator) {
        this.route = route;
        this.router = router;
        this.testService = testService;
        this.sessionStorageService = sessionStorageService;
        this.dialog = dialog;
        this.distanceCalculator = distanceCalculator;
    }
    AllTestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.tests = data['tests'];
        });
        this.redactors = this.route.snapshot.data['redactors'];
    };
    AllTestsComponent.prototype.edit = function (id) {
        this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["TEST_PAGE_URL"], id, _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["ADD_QUESTIONS"]]);
    };
    AllTestsComponent.prototype.exportCSV = function (id, name) {
        this.testService.exportCSV(id).subscribe(function (file) {
            file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"](file, name + ".csv");
        });
    };
    AllTestsComponent.prototype.exportPDF = function (id, name) {
        this.testService.exportPDF(id).subscribe(function (file) {
            file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"](file, name + ".pdf");
        });
    };
    AllTestsComponent.prototype.delete = function (id, index) {
        var _this = this;
        this.testService.delete(id).subscribe(function () {
            _this.tests.tests.splice(index, 1);
        });
    };
    AllTestsComponent.prototype.translate = function (id) {
        this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["TRANSLATE_TEST_PAGE_URL"], id, _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["ADD_QUESTIONS"]]);
    };
    AllTestsComponent.prototype.translateWholeTest = function (id) {
        var _this = this;
        var test = this.tests.tests.find(function (it) { return it.id === id; });
        var translateToPolish = test.language === 'en';
        this.testService.translateTest(id, translateToPolish).subscribe(function (result) {
            return _this.tests.tests.push(result);
        });
    };
    AllTestsComponent.prototype.isRedactor = function () {
        return this.sessionStorageService.isRedactor();
    };
    AllTestsComponent.prototype.assign = function (testId, username) {
        var _this = this;
        this.testService.assign(testId, username).subscribe(function () {
            _this.dialog.open(_dialogs_warning_dialog_assign_redactor_to_test_assign_redactor_to_test_component__WEBPACK_IMPORTED_MODULE_6__["AssignRedactorToTestComponent"], {
                height: '200px',
                width: '300px',
            });
        });
    };
    AllTestsComponent.prototype.getUsername = function () {
        return this.sessionStorageService.getUser().username;
    };
    AllTestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-tests',
            template: __webpack_require__(/*! ./all-tests.component.html */ "./src/app/tests/all-tests/all-tests.component.html"),
            styles: [__webpack_require__(/*! ./all-tests.component.css */ "./src/app/tests/all-tests/all-tests.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_test_service__WEBPACK_IMPORTED_MODULE_2__["TestService"],
            _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _metrics_processor_services_distance_calculator_service__WEBPACK_IMPORTED_MODULE_8__["DistanceCalculatorService"]])
    ], AllTestsComponent);
    return AllTestsComponent;
}());



/***/ }),

/***/ "./src/app/tests/check-solved-test/check-solved-test.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/tests/check-solved-test/check-solved-test.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".score {\r\n  margin-top: 25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvY2hlY2stc29sdmVkLXRlc3QvY2hlY2stc29sdmVkLXRlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RzL2NoZWNrLXNvbHZlZC10ZXN0L2NoZWNrLXNvbHZlZC10ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NvcmUge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/tests/check-solved-test/check-solved-test.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/tests/check-solved-test/check-solved-test.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"check-solved-test-container\">\r\n  <div>\r\n    <app-solved-test [solution]=\"solution\"></app-solved-test>\r\n  </div>\r\n  <div class=\"score row material-form\">\r\n    <div class=\"col-md-4\">\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <input matInput placeholder=\"Wynik\"\r\n             (input)=\"score = +$event.target.value\"\r\n             type=\"number\">\r\n    </div>\r\n    <div class=\"col-md-4 full-width-button\">\r\n      <button mat-button (click)=\"send()\">Oceń</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tests/check-solved-test/check-solved-test.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/tests/check-solved-test/check-solved-test.component.ts ***!
  \************************************************************************/
/*! exports provided: CheckSolvedTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckSolvedTestComponent", function() { return CheckSolvedTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/question */ "./src/app/models/question.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _services_solutions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/solutions.service */ "./src/app/tests/services/solutions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckSolvedTestComponent = /** @class */ (function () {
    function CheckSolvedTestComponent(route, solutionsService, router) {
        this.route = route;
        this.solutionsService = solutionsService;
        this.router = router;
        this.score = 0;
    }
    CheckSolvedTestComponent.prototype.ngOnInit = function () {
        this.solution = this.route.snapshot.data['solution'];
    };
    CheckSolvedTestComponent.prototype.send = function () {
        var _this = this;
        var scoreModel = new _models_question__WEBPACK_IMPORTED_MODULE_1__["Score"]();
        scoreModel.score = this.score;
        this.solutionsService.sendScore(this.solution.id, scoreModel).subscribe(function (result) {
            _this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["SOLUTIONS_PAGE_URL"]]);
        });
    };
    CheckSolvedTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-check-solved-test',
            template: __webpack_require__(/*! ./check-solved-test.component.html */ "./src/app/tests/check-solved-test/check-solved-test.component.html"),
            styles: [__webpack_require__(/*! ./check-solved-test.component.css */ "./src/app/tests/check-solved-test/check-solved-test.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_solutions_service__WEBPACK_IMPORTED_MODULE_4__["SolutionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CheckSolvedTestComponent);
    return CheckSolvedTestComponent;
}());



/***/ }),

/***/ "./src/app/tests/redactor-tests/redactor-tests.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/tests/redactor-tests/redactor-tests.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RzL3JlZGFjdG9yLXRlc3RzL3JlZGFjdG9yLXRlc3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/tests/redactor-tests/redactor-tests.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tests/redactor-tests/redactor-tests.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"solved-test-container material-form\">\r\n  <table>\r\n    <thead>\r\n    <tr>\r\n      <td>Id</td>\r\n      <td>Nazwa</td>\r\n      <td>Język</td>\r\n      <td>Użytkownik</td>\r\n      <td>Sprawdzony</td>\r\n      <td>Wynik</td>\r\n      <td>Sprawdź</td>\r\n      <td>Wyślij email</td>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let solution of solutions.solutions\">\r\n        <td>{{solution.id}}</td>\r\n        <td>{{solution.test.name}}</td>\r\n        <td>{{solution.test.language}}</td>\r\n        <td>{{solution.user.username}}</td>\r\n        <td><span *ngIf=\"solution.checked\">Tak</span><span *ngIf=\"!solution.checked\">Nie</span></td>\r\n        <td>{{solution.score}}</td>\r\n        <td>\r\n          <button mat-button [routerLink]=\"['..', checkPage, solution.id]\">Sprawdź</button>\r\n        </td>\r\n        <td>\r\n          <button mat-button [disabled]=\"!solution.checked\" (click)=\"sendEmail(solution.id)\">Wyślij</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tests/redactor-tests/redactor-tests.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tests/redactor-tests/redactor-tests.component.ts ***!
  \******************************************************************/
/*! exports provided: RedactorTestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorTestsComponent", function() { return RedactorTestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _services_solutions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/solutions.service */ "./src/app/tests/services/solutions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RedactorTestsComponent = /** @class */ (function () {
    function RedactorTestsComponent(route, solutionsService) {
        this.route = route;
        this.solutionsService = solutionsService;
        this.checkPage = _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["CHECK_TEST"];
    }
    RedactorTestsComponent.prototype.ngOnInit = function () {
        this.solutions = this.route.snapshot.data['solutions'];
    };
    RedactorTestsComponent.prototype.sendEmail = function (id) {
        this.solutionsService.sendEmail(id).subscribe();
    };
    RedactorTestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-redactor-tests',
            template: __webpack_require__(/*! ./redactor-tests.component.html */ "./src/app/tests/redactor-tests/redactor-tests.component.html"),
            styles: [__webpack_require__(/*! ./redactor-tests.component.css */ "./src/app/tests/redactor-tests/redactor-tests.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_solutions_service__WEBPACK_IMPORTED_MODULE_3__["SolutionsService"]])
    ], RedactorTestsComponent);
    return RedactorTestsComponent;
}());



/***/ }),

/***/ "./src/app/tests/resolve-test/resolve-test.component.css":
/*!***************************************************************!*\
  !*** ./src/app/tests/resolve-test/resolve-test.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resolve-test-container {\r\n  margin-bottom: 20px;\r\n}\r\n.question {\r\n  margin-bottom: 10px;\r\n}\r\n.answer  {\r\n  padding: 10px;\r\n}\r\n.open-input {\r\n  width: 70%;\r\n}\r\n.send-button {\r\n  margin-top: 20px;\r\n}\r\n.question-answer-container {\r\n  background-color: var(--background-secondary-color);\r\n  margin-bottom: 15px;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvcmVzb2x2ZS10ZXN0L3Jlc29sdmUtdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1EQUFtRDtFQUNuRCxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvdGVzdHMvcmVzb2x2ZS10ZXN0L3Jlc29sdmUtdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc29sdmUtdGVzdC1jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnF1ZXN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5hbnN3ZXIgIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5vcGVuLWlucHV0IHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcbi5zZW5kLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ucXVlc3Rpb24tYW5zd2VyLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3IpO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/tests/resolve-test/resolve-test.component.html":
/*!****************************************************************!*\
  !*** ./src/app/tests/resolve-test/resolve-test.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"resolve-test-container material-form\">\r\n  <div class=\"question-answer-container\" *ngFor=\"let question of test.questions; let i = index;\">\r\n    <div class=\"question\">\r\n      {{question.question}}\r\n    </div>\r\n    <hr>\r\n    <div class=\"answer\">\r\n      <div *ngIf=\"question.type === variant\">\r\n          <mat-radio-group>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\" *ngFor=\"let variant of question.variants; let j = index\">\r\n                <mat-radio-button value=\"{{j}}\" (click)=\"setAnswer(i, variant.text)\">\r\n                  {{variant.text}}\r\n                </mat-radio-button>\r\n              </div>\r\n            </div>\r\n          </mat-radio-group>\r\n      </div>\r\n      <div *ngIf=\"question.type === scala\">\r\n        <mat-radio-group>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2\" *ngFor=\"let variant of getScalaVariants(question.min, question.max);\">\r\n              <mat-radio-button value=\"{{variant}}\" (click)=\"setAnswer(i, variant.toString())\">\r\n                {{variant}}\r\n              </mat-radio-button>\r\n            </div>\r\n          </div>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div *ngIf=\"question.type === numeric\">\r\n        <input matInput placeholder=\"Odpowiedź\"\r\n               (input)=\"setAnswer(i, $event.target.value)\"\r\n               type=\"number\">\r\n      </div>\r\n      <div *ngIf=\"question.type === open\">\r\n        <input class=\"open-input\"\r\n               matInput placeholder=\"Odpowiedź\"\r\n               (input)=\"setAnswer(i, $event.target.value)\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"full-width-button send-button\">\r\n    <button mat-button (click)=\"send()\">Zakończ test</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tests/resolve-test/resolve-test.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/tests/resolve-test/resolve-test.component.ts ***!
  \**************************************************************/
/*! exports provided: ResolveTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveTestComponent", function() { return ResolveTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/question */ "./src/app/models/question.ts");
/* harmony import */ var _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/global-variables */ "./src/app/shared/utils/global-variables.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _services_solutions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/solutions.service */ "./src/app/tests/services/solutions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResolveTestComponent = /** @class */ (function () {
    function ResolveTestComponent(route, router, solutionsService) {
        this.route = route;
        this.router = router;
        this.solutionsService = solutionsService;
        this.variant = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_3__["VARIANT_QUESTION"];
        this.scala = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_3__["SCALA_QUESTION"];
        this.numeric = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_3__["NUMERIC_QUESTION"];
        this.open = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_3__["OPEN_QUESTION"];
    }
    ResolveTestComponent.prototype.ngOnInit = function () {
        this.test = this.route.snapshot.data['test'];
        this.createEmptySolution();
    };
    ResolveTestComponent.prototype.createEmptySolution = function () {
        this.solution = new _models_question__WEBPACK_IMPORTED_MODULE_2__["TestSolution"]();
        this.solution.testId = +this.route.snapshot.paramMap.get('test');
        this.solution.answers = [];
        for (var i = 0; i < this.test.questions.length; i++) {
            var answer = new _models_question__WEBPACK_IMPORTED_MODULE_2__["TestAnswer"]();
            answer.answer = '';
            answer.question = this.test.questions[i].question;
            this.solution.answers.push(answer);
        }
    };
    ResolveTestComponent.prototype.setAnswer = function (id, answer) {
        this.solution.answers[id].answer = answer;
    };
    ResolveTestComponent.prototype.getScalaVariants = function (min, max) {
        var result = [];
        for (var i = min; i <= max; i++) {
            result.push(i);
        }
        return result;
    };
    ResolveTestComponent.prototype.send = function () {
        var _this = this;
        this.solutionsService.sendSolution(this.solution).subscribe(function (result) {
            _this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_4__["USER_PAGE_URL"]]);
        });
    };
    ResolveTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resolve-test',
            template: __webpack_require__(/*! ./resolve-test.component.html */ "./src/app/tests/resolve-test/resolve-test.component.html"),
            styles: [__webpack_require__(/*! ./resolve-test.component.css */ "./src/app/tests/resolve-test/resolve-test.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_solutions_service__WEBPACK_IMPORTED_MODULE_5__["SolutionsService"]])
    ], ResolveTestComponent);
    return ResolveTestComponent;
}());



/***/ }),

/***/ "./src/app/tests/services/question-resolve.service.ts":
/*!************************************************************!*\
  !*** ./src/app/tests/services/question-resolve.service.ts ***!
  \************************************************************/
/*! exports provided: QuestionResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionResolveService", function() { return QuestionResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question.service */ "./src/app/tests/services/question.service.ts");
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionResolveService = /** @class */ (function () {
    function QuestionResolveService(errorHandlingService, questionService, router) {
        this.errorHandlingService = errorHandlingService;
        this.questionService = questionService;
        this.router = router;
    }
    QuestionResolveService.prototype.resolve = function (route) {
        this.errorHandlingService.clear();
        var strId;
        strId = route.params['test'];
        var testId;
        if (strId === undefined) {
            testId = 1;
        }
        else {
            testId = +strId;
        }
        if (isNaN(testId) || testId < 1) {
            this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_4__["NOT_FOUND_PAGE_URL"]]);
            return {};
        }
        else {
            return this.questionService
                .get(testId)
                .toPromise()
                .then(function (result) {
                return result;
            }).catch(function () {
                return null;
            });
        }
    };
    QuestionResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlingService"],
            _question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], QuestionResolveService);
    return QuestionResolveService;
}());



/***/ }),

/***/ "./src/app/tests/services/question.service.ts":
/*!****************************************************!*\
  !*** ./src/app/tests/services/question.service.ts ***!
  \****************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/backend-urls */ "./src/app/shared/utils/backend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
    }
    QuestionService.prototype.get = function (testId) {
        return this.http.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["TESTS_URL"] + "/" + testId + "/" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["QUESTIONS_POSTFIX"]);
    };
    QuestionService.prototype.save = function (testId, questions) {
        return this.http.post(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["TESTS_URL"] + "/" + testId + "/" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["QUESTIONS_POSTFIX"], questions);
    };
    QuestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/tests/services/solution-resolve.service.ts":
/*!************************************************************!*\
  !*** ./src/app/tests/services/solution-resolve.service.ts ***!
  \************************************************************/
/*! exports provided: SolutionResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionResolveService", function() { return SolutionResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _solutions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solutions.service */ "./src/app/tests/services/solutions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SolutionResolveService = /** @class */ (function () {
    function SolutionResolveService(errorHandlingService, solutionsService, router) {
        this.errorHandlingService = errorHandlingService;
        this.solutionsService = solutionsService;
        this.router = router;
    }
    SolutionResolveService.prototype.resolve = function (route) {
        this.errorHandlingService.clear();
        var strId;
        strId = route.params['test'];
        var testId;
        if (strId === undefined) {
            testId = 1;
        }
        else {
            testId = +strId;
        }
        if (isNaN(testId) || testId < 1) {
            this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["NOT_FOUND_PAGE_URL"]]);
            return {};
        }
        else {
            return this.solutionsService
                .getSolution(testId)
                .toPromise()
                .then(function (result) {
                return result;
            }).catch(function () {
                return null;
            });
        }
    };
    SolutionResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingService"],
            _solutions_service__WEBPACK_IMPORTED_MODULE_4__["SolutionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SolutionResolveService);
    return SolutionResolveService;
}());



/***/ }),

/***/ "./src/app/tests/services/solutions-for-redactor-resolve.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/tests/services/solutions-for-redactor-resolve.service.ts ***!
  \**************************************************************************/
/*! exports provided: SolutionsForRedactorResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionsForRedactorResolveService", function() { return SolutionsForRedactorResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solutions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solutions.service */ "./src/app/tests/services/solutions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SolutionsForRedactorResolveService = /** @class */ (function () {
    function SolutionsForRedactorResolveService(errorHandlingService, solutionService, router) {
        this.errorHandlingService = errorHandlingService;
        this.solutionService = solutionService;
        this.router = router;
    }
    SolutionsForRedactorResolveService.prototype.resolve = function (route) {
        this.errorHandlingService.clear();
        return this.solutionService
            .getAllForRedactor()
            .toPromise()
            .then(function (result) {
            return result;
        }).catch(function () {
            return null;
        });
    };
    SolutionsForRedactorResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingService"],
            _solutions_service__WEBPACK_IMPORTED_MODULE_3__["SolutionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SolutionsForRedactorResolveService);
    return SolutionsForRedactorResolveService;
}());



/***/ }),

/***/ "./src/app/tests/services/solutions.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/tests/services/solutions.service.ts ***!
  \*****************************************************/
/*! exports provided: SolutionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionsService", function() { return SolutionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/backend-urls */ "./src/app/shared/utils/backend-urls.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SolutionsService = /** @class */ (function () {
    function SolutionsService(http, sessionStorageService) {
        this.http = http;
        this.sessionStorageService = sessionStorageService;
    }
    SolutionsService.prototype.sendSolution = function (solution) {
        return this.http.post(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["USERS_URL"] + "/" + this.sessionStorageService.getUser().username + "/" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["SOLUTIONS_POSTFIX"], solution);
    };
    SolutionsService.prototype.getAllForRedactor = function () {
        return this.http.get("" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["SOLUTIONS_URL"]);
    };
    SolutionsService.prototype.getAllForUser = function () {
        return this.http.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["USERS_URL"] + "/" + this.sessionStorageService.getUser().username + "/" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["SOLUTIONS_POSTFIX"]);
    };
    SolutionsService.prototype.getSolution = function (id) {
        return this.http.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["SOLUTIONS_URL"] + "/" + id);
    };
    SolutionsService.prototype.sendScore = function (id, score) {
        return this.http.put(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["SOLUTIONS_URL"] + "/" + id, score);
    };
    SolutionsService.prototype.sendEmail = function (id) {
        return this.http.post(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["SOLUTIONS_URL"] + "/" + id + "/" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["EMAIL_POSTFIX"], null);
    };
    SolutionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]])
    ], SolutionsService);
    return SolutionsService;
}());



/***/ }),

/***/ "./src/app/tests/services/test-resolve.service.ts":
/*!********************************************************!*\
  !*** ./src/app/tests/services/test-resolve.service.ts ***!
  \********************************************************/
/*! exports provided: TestResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestResolveService", function() { return TestResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.service */ "./src/app/tests/services/test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestResolveService = /** @class */ (function () {
    function TestResolveService(errorHandlingService, testService, router) {
        this.errorHandlingService = errorHandlingService;
        this.testService = testService;
        this.router = router;
    }
    TestResolveService.prototype.resolve = function (route) {
        this.errorHandlingService.clear();
        var strId;
        strId = route.params['test'];
        var testId;
        if (strId === undefined) {
            testId = 1;
        }
        else {
            testId = +strId;
        }
        if (isNaN(testId) || testId < 1) {
            this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["NOT_FOUND_PAGE_URL"]]);
            return {};
        }
        else {
            return this.testService
                .get(testId)
                .toPromise()
                .then(function (result) {
                return result;
            }).catch(function () {
                return null;
            });
        }
    };
    TestResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingService"],
            _test_service__WEBPACK_IMPORTED_MODULE_4__["TestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TestResolveService);
    return TestResolveService;
}());



/***/ }),

/***/ "./src/app/tests/services/test.service.ts":
/*!************************************************!*\
  !*** ./src/app/tests/services/test.service.ts ***!
  \************************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/backend-urls */ "./src/app/shared/utils/backend-urls.ts");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = /** @class */ (function () {
    function TestService(http, sessionStorageService) {
        this.http = http;
        this.sessionStorageService = sessionStorageService;
    }
    TestService.prototype.getAll = function () {
        return this.http.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["TESTS_URL"]);
    };
    TestService.prototype.get = function (id) {
        return this.http.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["TESTS_URL"] + "/" + id);
    };
    TestService.prototype.create = function (test) {
        return this.http.post(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["TESTS_URL"] + "?username=" + this.sessionStorageService.getUser().username, test);
    };
    TestService.prototype.update = function (id, test) {
        return this.http.put(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["TESTS_URL"] + "/" + id, test);
    };
    TestService.prototype.delete = function (id) {
        return this.http.delete(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["TESTS_URL"] + "/" + id);
    };
    TestService.prototype.getWikipediaDefinition = function (baseText, language) {
        return this.http.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["WIKIPEDIA_UTILS_URL"] + "?wantedText=" + baseText + "&language=" + language, { responseType: 'text' });
    };
    TestService.prototype.getTranslation = function (textToTranslate, translateToPolish) {
        return this.http.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["TRANSLATE_UTILS_URL"] + "?textToTranslate=" + textToTranslate + "&translateToPolish=" + translateToPolish, { responseType: 'text' });
    };
    TestService.prototype.getSynonyms = function (baseWord, language) {
        return this.http.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["SYNONYMS_UTILS_URL"] + "?baseWord=" + baseWord + "&language=" + language);
    };
    TestService.prototype.assign = function (testId, username) {
        return this.http.put(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["TESTS_URL"] + "/" + testId + "/" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["REDACTOR_POSTFIX"] + "?username=" + username, null);
    };
    TestService.prototype.exportCSV = function (id) {
        return this.http.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["TESTS_URL"] + "/" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["EXPORT_POSTFIX"] + "/" + id + "/" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["CSV_POSTFIX"], { responseType: 'blob' });
    };
    TestService.prototype.exportPDF = function (id) {
        return this.http.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["TESTS_URL"] + "/" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["EXPORT_POSTFIX"] + "/" + id + "/" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["PDF_POSTFIX"], { responseType: 'blob' });
    };
    TestService.prototype.translateTest = function (id, translateToPolish) {
        return this.http.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["TESTS_URL"] + "/translate/" + id + "?username=" + this.sessionStorageService.getUser().username + "&translateToPolish=" + translateToPolish);
    };
    TestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/tests/services/tests-resolve.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/tests/services/tests-resolve.service.ts ***!
  \*********************************************************/
/*! exports provided: TestsResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsResolveService", function() { return TestsResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.service */ "./src/app/tests/services/test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestsResolveService = /** @class */ (function () {
    function TestsResolveService(errorHandlingService, testService, router) {
        this.errorHandlingService = errorHandlingService;
        this.testService = testService;
        this.router = router;
    }
    TestsResolveService.prototype.resolve = function (route) {
        this.errorHandlingService.clear();
        return this.testService
            .getAll()
            .toPromise()
            .then(function (result) {
            return result;
        }).catch(function () {
            return null;
        });
    };
    TestsResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingService"],
            _test_service__WEBPACK_IMPORTED_MODULE_3__["TestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TestsResolveService);
    return TestsResolveService;
}());



/***/ }),

/***/ "./src/app/tests/services/user-solutions-resolve.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/tests/services/user-solutions-resolve.service.ts ***!
  \******************************************************************/
/*! exports provided: UserSolutionsResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSolutionsResolveService", function() { return UserSolutionsResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
/* harmony import */ var _solutions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solutions.service */ "./src/app/tests/services/solutions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserSolutionsResolveService = /** @class */ (function () {
    function UserSolutionsResolveService(errorHandlingService, solutionService, router) {
        this.errorHandlingService = errorHandlingService;
        this.solutionService = solutionService;
        this.router = router;
    }
    UserSolutionsResolveService.prototype.resolve = function (route) {
        this.errorHandlingService.clear();
        return this.solutionService
            .getAllForUser()
            .toPromise()
            .then(function (result) {
            return result;
        }).catch(function () {
            return null;
        });
    };
    UserSolutionsResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingService"],
            _solutions_service__WEBPACK_IMPORTED_MODULE_2__["SolutionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserSolutionsResolveService);
    return UserSolutionsResolveService;
}());



/***/ }),

/***/ "./src/app/tests/solved-test/solved-test.component.css":
/*!*************************************************************!*\
  !*** ./src/app/tests/solved-test/solved-test.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test-question-answer-container {\r\n  background-color: var(--background-secondary-color);\r\n  margin-bottom: 15px;\r\n  padding: 10px;\r\n}\r\n\r\n.question {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.answer {\r\n  padding-bottom: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvc29sdmVkLXRlc3Qvc29sdmVkLXRlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1EQUFtRDtFQUNuRCxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdGVzdHMvc29sdmVkLXRlc3Qvc29sdmVkLXRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0LXF1ZXN0aW9uLWFuc3dlci1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5xdWVzdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uYW5zd2VyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tests/solved-test/solved-test.component.html":
/*!**************************************************************!*\
  !*** ./src/app/tests/solved-test/solved-test.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"solved-test-container material-form\">\r\n  <div class=\"test-question-answer-container\" *ngFor=\"let question of solution.answers;\">\r\n    <div class=\"question\">\r\n      Pytanie: <b>{{question.question}}</b>\r\n    </div>\r\n    <div class=\"answer\">\r\n      Odpowiedź: {{question.answer}}\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tests/solved-test/solved-test.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tests/solved-test/solved-test.component.ts ***!
  \************************************************************/
/*! exports provided: SolvedTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolvedTestComponent", function() { return SolvedTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/question */ "./src/app/models/question.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolvedTestComponent = /** @class */ (function () {
    function SolvedTestComponent() {
    }
    SolvedTestComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_question__WEBPACK_IMPORTED_MODULE_1__["TestSolutionWithId"])
    ], SolvedTestComponent.prototype, "solution", void 0);
    SolvedTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solved-test',
            template: __webpack_require__(/*! ./solved-test.component.html */ "./src/app/tests/solved-test/solved-test.component.html"),
            styles: [__webpack_require__(/*! ./solved-test.component.css */ "./src/app/tests/solved-test/solved-test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SolvedTestComponent);
    return SolvedTestComponent;
}());



/***/ }),

/***/ "./src/app/tests/test-editor/single-question/scala-answer/scala-answer.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/tests/test-editor/single-question/scala-answer/scala-answer.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".number-input {\r\n  width: 100%;\r\n  margin-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvdGVzdC1lZGl0b3Ivc2luZ2xlLXF1ZXN0aW9uL3NjYWxhLWFuc3dlci9zY2FsYS1hbnN3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdGVzdHMvdGVzdC1lZGl0b3Ivc2luZ2xlLXF1ZXN0aW9uL3NjYWxhLWFuc3dlci9zY2FsYS1hbnN3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5udW1iZXItaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/tests/test-editor/single-question/scala-answer/scala-answer.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/tests/test-editor/single-question/scala-answer/scala-answer.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scala-wrapper\">\r\n  <input class=\"number-input\"\r\n    matInput placeholder=\"Wartość minimalna\"\r\n    [value]=\"question.min\" (input)=\"handleInputMin($event)\"\r\n    type=\"number\" [max]=\"question.max - 1\" [min]=\"0\">\r\n  <input class=\"number-input\"\r\n    matInput placeholder=\"Wartość maksmalna\"\r\n    [value]=\"question.max\" (input)=\"handleInputMax($event)\"\r\n    type=\"number\" [min]=\"question.min + 1\" [max]=\"100\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tests/test-editor/single-question/scala-answer/scala-answer.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/tests/test-editor/single-question/scala-answer/scala-answer.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ScalaAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScalaAnswerComponent", function() { return ScalaAnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/question */ "./src/app/models/question.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScalaAnswerComponent = /** @class */ (function () {
    function ScalaAnswerComponent() {
    }
    ScalaAnswerComponent.prototype.ngOnInit = function () {
        if (this.question.min === this.question.max && this.question.min === 0) {
            this.question.min = 1;
            this.question.max = 5;
        }
    };
    ScalaAnswerComponent.prototype.handleInputMin = function (event) {
        this.question.min = +event.target.value;
        if (this.question.min > this.question.max) {
            this.question.min = this.question.max - 1;
            event.target.value = this.question.max - 1;
        }
    };
    ScalaAnswerComponent.prototype.handleInputMax = function (event) {
        this.question.max = +event.target.value;
        if (this.question.max < this.question.min) {
            this.question.max = this.question.min + 1;
            event.target.value = this.question.min + 1;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_question__WEBPACK_IMPORTED_MODULE_1__["Question"])
    ], ScalaAnswerComponent.prototype, "question", void 0);
    ScalaAnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scala-answer',
            template: __webpack_require__(/*! ./scala-answer.component.html */ "./src/app/tests/test-editor/single-question/scala-answer/scala-answer.component.html"),
            styles: [__webpack_require__(/*! ./scala-answer.component.css */ "./src/app/tests/test-editor/single-question/scala-answer/scala-answer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScalaAnswerComponent);
    return ScalaAnswerComponent;
}());



/***/ }),

/***/ "./src/app/tests/test-editor/single-question/single-question.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/tests/test-editor/single-question/single-question.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".single-question-container {\r\n  padding: 20px 40px 20px 40px;\r\n}\r\n.question-input {\r\n  width: 100%;\r\n  margin-bottom: 10px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvdGVzdC1lZGl0b3Ivc2luZ2xlLXF1ZXN0aW9uL3NpbmdsZS1xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxXQUFXO0VBQ1g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RzL3Rlc3QtZWRpdG9yL3NpbmdsZS1xdWVzdGlvbi9zaW5nbGUtcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW5nbGUtcXVlc3Rpb24tY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyMHB4IDQwcHggMjBweCA0MHB4O1xyXG59XHJcbi5xdWVzdGlvbi1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tests/test-editor/single-question/single-question.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/tests/test-editor/single-question/single-question.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"single-question-container full-width-form\">\r\n  <mat-form-field>\r\n    <mat-label>Typ pytania</mat-label>\r\n    <mat-select [(value)]=\"question.type\">\r\n      <mat-option *ngFor=\"let type of types\" [value]=\"type.value\">\r\n        {{type.viewValue}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <input class=\"question-input\" matInput placeholder=\"Pytanie\"\r\n         [value]=\"question.question\" (input)=\"question.question = $event.target.value\">\r\n  <mat-error *ngIf=\"question.question.length === 0\">\r\n    Musisz podać treść pytania\r\n  </mat-error>\r\n\r\n  <div #scala *ngIf=\"isScala()\">\r\n    <app-scala-answer [question]=\"question\" ></app-scala-answer>\r\n  </div>\r\n  <div #variant *ngIf=\"isVariant()\">\r\n    <app-variant-answer [variants]=\"question.variants\"></app-variant-answer>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tests/test-editor/single-question/single-question.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tests/test-editor/single-question/single-question.component.ts ***!
  \********************************************************************************/
/*! exports provided: SingleQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleQuestionComponent", function() { return SingleQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/question */ "./src/app/models/question.ts");
/* harmony import */ var _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/global-variables */ "./src/app/shared/utils/global-variables.ts");
/* harmony import */ var _scala_answer_scala_answer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scala-answer/scala-answer.component */ "./src/app/tests/test-editor/single-question/scala-answer/scala-answer.component.ts");
/* harmony import */ var _variant_answer_variant_answer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variant-answer/variant-answer.component */ "./src/app/tests/test-editor/single-question/variant-answer/variant-answer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SingleQuestionComponent = /** @class */ (function () {
    function SingleQuestionComponent() {
        this.types = [
            { value: _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_2__["VARIANT_QUESTION"], viewValue: 'Wyboru' },
            { value: _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_2__["SCALA_QUESTION"], viewValue: 'Skali' },
            { value: _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_2__["NUMERIC_QUESTION"], viewValue: 'Numeryczne' },
            { value: _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_2__["OPEN_QUESTION"], viewValue: 'Otwarte' },
        ];
    }
    SingleQuestionComponent.prototype.ngOnInit = function () {
    };
    SingleQuestionComponent.prototype.isScala = function () {
        return this.question.type === _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_2__["SCALA_QUESTION"];
    };
    SingleQuestionComponent.prototype.isVariant = function () {
        return this.question.type === _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_2__["VARIANT_QUESTION"];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_question__WEBPACK_IMPORTED_MODULE_1__["Question"])
    ], SingleQuestionComponent.prototype, "question", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scala'),
        __metadata("design:type", _scala_answer_scala_answer_component__WEBPACK_IMPORTED_MODULE_3__["ScalaAnswerComponent"])
    ], SingleQuestionComponent.prototype, "scala", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('variant'),
        __metadata("design:type", _variant_answer_variant_answer_component__WEBPACK_IMPORTED_MODULE_4__["VariantAnswerComponent"])
    ], SingleQuestionComponent.prototype, "variant", void 0);
    SingleQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-question',
            template: __webpack_require__(/*! ./single-question.component.html */ "./src/app/tests/test-editor/single-question/single-question.component.html"),
            styles: [__webpack_require__(/*! ./single-question.component.css */ "./src/app/tests/test-editor/single-question/single-question.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleQuestionComponent);
    return SingleQuestionComponent;
}());



/***/ }),

/***/ "./src/app/tests/test-editor/single-question/variant-answer/variant-answer.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/tests/test-editor/single-question/variant-answer/variant-answer.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".variant-input {\r\n  width: 100%;\r\n}\r\n.variant-button {\r\n  margin-left: 10px;\r\n  padding: 0px 30px;\r\n}\r\n.input-wrapper {\r\n  width: 80%;\r\n  float: left;\r\n}\r\n.button-wrapper {\r\n  float: left;\r\n}\r\n.variant-wrapper {\r\n  margin-top: 5px;\r\n}\r\n.add-button {\r\n  margin-top: 5px;\r\n}\r\n.add-answer-button {\r\n  margin-top: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvdGVzdC1lZGl0b3Ivc2luZ2xlLXF1ZXN0aW9uL3ZhcmlhbnQtYW5zd2VyL3ZhcmlhbnQtYW5zd2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdGVzdHMvdGVzdC1lZGl0b3Ivc2luZ2xlLXF1ZXN0aW9uL3ZhcmlhbnQtYW5zd2VyL3ZhcmlhbnQtYW5zd2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFyaWFudC1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnZhcmlhbnQtYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBwYWRkaW5nOiAwcHggMzBweDtcclxufVxyXG4uaW5wdXQtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uYnV0dG9uLXdyYXBwZXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi52YXJpYW50LXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uYWRkLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5hZGQtYW5zd2VyLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/tests/test-editor/single-question/variant-answer/variant-answer.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/tests/test-editor/single-question/variant-answer/variant-answer.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"variant-container\">\r\n  <mat-error *ngIf=\"variants.length < 2\">\r\n    Musisz podać co najmniej 2 warianty odpowiedzi.\r\n  </mat-error>\r\n  <div class=\"variant-wrapper danger-button\" *ngFor=\"let variant of variants; let i = index;\" >\r\n    <div class=\"input-wrapper\">\r\n      <input class=\"variant-input\" [value]=\"variant.text\" (input)=\"variant.text = $event.target.value\">\r\n      <mat-error *ngIf=\"variant.text.length === 0\">\r\n        Musisz podać odpowiedź\r\n      </mat-error>\r\n    </div>\r\n    <div class=\"button-wrapper\">\r\n      <button class=\"variant-button\" mat-button (click)=\"delete(i)\">Usuń</button>\r\n    </div>\r\n    <div style=\"clear:both\"></div>\r\n  </div>\r\n  <div class=\"full-width-button add-answer-button row\">\r\n    <div class=\"col-md-8\"></div>\r\n    <button mat-button class=\"col-md-4\"(click)=\"add()\">Dodaj odpowiedź</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tests/test-editor/single-question/variant-answer/variant-answer.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/tests/test-editor/single-question/variant-answer/variant-answer.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: VariantAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantAnswerComponent", function() { return VariantAnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/question */ "./src/app/models/question.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VariantAnswerComponent = /** @class */ (function () {
    function VariantAnswerComponent() {
    }
    VariantAnswerComponent.prototype.ngOnInit = function () {
    };
    VariantAnswerComponent.prototype.add = function () {
        var variant = new _models_question__WEBPACK_IMPORTED_MODULE_1__["Variant"]();
        variant.text = '';
        this.variants.push(variant);
    };
    VariantAnswerComponent.prototype.delete = function (id) {
        this.variants.splice(id, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VariantAnswerComponent.prototype, "variants", void 0);
    VariantAnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-variant-answer',
            template: __webpack_require__(/*! ./variant-answer.component.html */ "./src/app/tests/test-editor/single-question/variant-answer/variant-answer.component.html"),
            styles: [__webpack_require__(/*! ./variant-answer.component.css */ "./src/app/tests/test-editor/single-question/variant-answer/variant-answer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VariantAnswerComponent);
    return VariantAnswerComponent;
}());



/***/ }),

/***/ "./src/app/tests/test-editor/test-editor.component.css":
/*!*************************************************************!*\
  !*** ./src/app/tests/test-editor/test-editor.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test-editor-container {\r\n  width: 60%;\r\n  margin: 5px auto;\r\n}\r\n\r\n.add-button,\r\n.send-button {\r\n  margin-top: 10px;\r\n}\r\n\r\n.single-question-container {\r\n  padding-bottom: 20px;\r\n  margin: 0 auto 20px auto;\r\n  background-color: var(--background-secondary-color);\r\n}\r\n\r\n.delete-button {\r\n  padding: 20px 40px 20px 40px;\r\n}\r\n\r\n.name-input {\r\n  width: 100%;\r\n}\r\n\r\n.test-container {\r\n  margin: 0 auto 40px auto;\r\n  background-color: var(--background-secondary-color);\r\n  padding: 20px;\r\n}\r\n\r\n.wiki_right {\r\n  position: fixed;\r\n  top: 220px;\r\n  right: 0;\r\n  width: 125px;\r\n  height: 389px;\r\n}\r\n\r\n.synonyms_right {\r\n  position: fixed;\r\n  top: 270px;\r\n  right: 0;\r\n  width: 125px;\r\n  height: 389px;\r\n}\r\n\r\n.translate_right {\r\n  position: fixed;\r\n  top: 320px;\r\n  right: 0;\r\n  width: 125px;\r\n  height: 389px;\r\n}\r\n\r\n.textarea_right {\r\n  position: fixed;\r\n  top: 380px;\r\n  right: 0;\r\n  width: 275px;\r\n  height: 389px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvdGVzdC1lZGl0b3IvdGVzdC1lZGl0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbURBQW1EO0VBQ25ELGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC90ZXN0cy90ZXN0LWVkaXRvci90ZXN0LWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3QtZWRpdG9yLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbixcclxuLnNlbmQtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc2luZ2xlLXF1ZXN0aW9uLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMjBweCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLmRlbGV0ZS1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDIwcHggNDBweCAyMHB4IDQwcHg7XHJcbn1cclxuXHJcbi5uYW1lLWlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRlc3QtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0byA0MHB4IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3IpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi53aWtpX3JpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAyMjBweDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTI1cHg7XHJcbiAgaGVpZ2h0OiAzODlweDtcclxufVxyXG5cclxuLnN5bm9ueW1zX3JpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAyNzBweDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTI1cHg7XHJcbiAgaGVpZ2h0OiAzODlweDtcclxufVxyXG5cclxuLnRyYW5zbGF0ZV9yaWdodCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMzIwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEyNXB4O1xyXG4gIGhlaWdodDogMzg5cHg7XHJcbn1cclxuXHJcbi50ZXh0YXJlYV9yaWdodCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMzgwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDI3NXB4O1xyXG4gIGhlaWdodDogMzg5cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/tests/test-editor/test-editor.component.html":
/*!**************************************************************!*\
  !*** ./src/app/tests/test-editor/test-editor.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"test-editor-container material-form\" (mouseup)=\"getSelectedText()\">\r\n  <div class=\"row test-container\">\r\n    <div class=\"col-md-8\">\r\n      <input matInput class=\"name-input\" placeholder=\"Nazwa\" [value]=\"test.name\"\r\n             (input)=\"test.name = $event.target.value\">\r\n      <mat-error *ngIf=\"test.name.length === 0\">\r\n        Nazwa jest wymagana.\r\n      </mat-error>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <mat-select placeholder=\"Język\" [(value)]=\"test.language\">\r\n        <mat-option [value]=\"'pl'\">Polski</mat-option>\r\n        <mat-option [value]=\"'en'\">Angielski</mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"test.language.length === 0\">\r\n        Język jest wymagany.\r\n      </mat-error>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"isRedactor()\">\r\n    <div *ngFor=\"let question of questions.questions; let i = index;\">\r\n      <div class=\"single-question-container\">\r\n        <app-single-question [question]=\"question\"></app-single-question>\r\n        <div>\r\n          <div class=\"danger-button full-width-button delete-button row\">\r\n            <div class=\"col-md-8\"></div>\r\n            <button class=\"col-md-4\" mat-button (click)=\"delete(i)\">Skasuj pytnie</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"full-width-button col-md-6 add-button\">\r\n      <button *ngIf=\"isRedactor()\" mat-button (click)=\"add()\">Dodaj pytnie</button>\r\n    </div>\r\n    <div class=\"full-width-button col-md-6 send-button\">\r\n      <button mat-button (click)=\"send()\" [disabled]=\"!isTestValid() || !areQuestionsValid()\">Zapisz</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wiki_right\">\r\n    <button mat-button (click)=\"onWikipediaButtonClick()\" [disabled]=\"disableUtilsButton()\">Wikipedia</button>\r\n  </div>\r\n  <div class=\"synonyms_right\">\r\n    <button mat-button (click)=\"onSynonymsButtonClick()\" [disabled]=\"disableUtilsButton()\">Synonimy</button>\r\n  </div>\r\n  <div class=\"translate_right\">\r\n    <button mat-button (click)=\"onTranslateButtonClick()\" [disabled]=\"disableUtilsButton()\">Tłumacz</button>\r\n  </div>\r\n\r\n  <div class=\"textarea_right\">\r\n    <textarea rows=\"6\" cols=\"30\" [(ngModel)]=\"textValue\">\r\n    </textarea>\r\n  </div>\r\n\r\n  <pre>\r\n</pre>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tests/test-editor/test-editor.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tests/test-editor/test-editor.component.ts ***!
  \************************************************************/
/*! exports provided: TestEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestEditorComponent", function() { return TestEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/question */ "./src/app/models/question.ts");
/* harmony import */ var _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/global-variables */ "./src/app/shared/utils/global-variables.ts");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/question.service */ "./src/app/tests/services/question.service.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _models_test__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/test */ "./src/app/models/test.ts");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/test.service */ "./src/app/tests/services/test.service.ts");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TestEditorComponent = /** @class */ (function () {
    function TestEditorComponent(route, router, questionService, testService, sessionStorageService) {
        this.route = route;
        this.router = router;
        this.questionService = questionService;
        this.testService = testService;
        this.sessionStorageService = sessionStorageService;
        this.selectedText = '';
        this.textValue = '';
    }
    TestEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questions = this.route.snapshot.data['questions'];
        this.test = this.route.snapshot.data['test'];
        if (this.questions === null || this.questions === undefined) {
            this.questions = new _models_question__WEBPACK_IMPORTED_MODULE_2__["Questions"]();
            this.questions.questions = [];
        }
        if (this.test === null || this.test === undefined) {
            this.test = new _models_test__WEBPACK_IMPORTED_MODULE_6__["Test"]();
            this.test.id = 0;
            this.test.language = '';
            this.test.name = '';
        }
        this.route.url.subscribe(function (url) {
            _this.url = url;
        });
    };
    TestEditorComponent.prototype.checkUrl = function (path) {
        for (var i = 0; i < this.url.length; i++) {
            var item = this.url[i];
            if (item.path === path) {
                return true;
            }
        }
        return false;
    };
    TestEditorComponent.prototype.add = function () {
        var question = new _models_question__WEBPACK_IMPORTED_MODULE_2__["Question"]();
        question.min = 1;
        question.max = 5;
        question.variants = [];
        question.question = '';
        question.type = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_3__["OPEN_QUESTION"];
        this.questions.questions.push(question);
    };
    TestEditorComponent.prototype.delete = function (id) {
        this.questions.questions.splice(id, 1);
    };
    TestEditorComponent.prototype.sendTest = function () {
        console.log(this.test.id);
        if (this.test.id === 0 || this.checkUrl(_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_5__["TRANSLATE_TEST_PAGE_URL"])) {
            console.log('create');
            return this.testService.create(this.test);
        }
        else {
            console.log('update');
            return this.testService.update(this.test.id, this.test);
        }
    };
    TestEditorComponent.prototype.send = function () {
        var _this = this;
        this.sendTest().subscribe(function (testResult) {
            if (_this.isRedactor()) {
                _this.questionService.save(testResult.id, _this.questions).subscribe(function (questionResult) {
                    _this.navigate();
                });
            }
            else {
                _this.navigate();
            }
        });
    };
    TestEditorComponent.prototype.navigate = function () {
        if (this.sessionStorageService.isRedactor()) {
            this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_5__["REDACTOR_PAGE_URL"]]);
        }
        else if (this.sessionStorageService.isModerator()) {
            this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_5__["MODERATOR_PAGE_URL"]]);
        }
        else {
            this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_5__["MAIN_PAGE_URL"]]);
        }
    };
    TestEditorComponent.prototype.isTestValid = function () {
        if (this.test.name.length === 0) {
            return false;
        }
        if (this.test.language.length === 0) {
            return false;
        }
        return true;
    };
    TestEditorComponent.prototype.areQuestionsValid = function () {
        if (!this.isRedactor()) {
            return true;
        }
        for (var i = 0; i < this.questions.questions.length; i++) {
            var element = this.questions.questions[i];
            if (element.question.length === 0) {
                return false;
            }
            if (element.type === _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_3__["VARIANT_QUESTION"] && element.variants.length < 2) {
                return false;
            }
            for (var j = 0; j < element.variants.length; j++) {
                var variantElement = element.variants[j];
                if (variantElement.text.length === 0) {
                    return false;
                }
            }
        }
        return true;
    };
    TestEditorComponent.prototype.isRedactor = function () {
        return this.sessionStorageService.isRedactor();
    };
    TestEditorComponent.prototype.getSelectedText = function () {
        this.selectedText = window.getSelection().toString();
    };
    TestEditorComponent.prototype.disableUtilsButton = function () {
        return this.selectedText === '';
    };
    TestEditorComponent.prototype.onWikipediaButtonClick = function () {
        var _this = this;
        this.clearText();
        this.testService.getWikipediaDefinition(this.selectedText, this.test.language).subscribe(function (result) {
            return _this.textValue = result.valueOf();
        });
    };
    TestEditorComponent.prototype.onTranslateButtonClick = function () {
        var _this = this;
        this.clearText();
        var translateToPolish = this.test.language === 'en';
        this.testService.getTranslation(this.selectedText, translateToPolish).subscribe(function (result) {
            return _this.textValue = result.valueOf();
        });
    };
    TestEditorComponent.prototype.onSynonymsButtonClick = function () {
        var _this = this;
        this.clearText();
        this.testService.getSynonyms(this.selectedText, this.test.language).subscribe(function (result) {
            return result.forEach(function (synonym) {
                _this.textValue = _this.textValue.concat(synonym.valueOf() + ", ");
            });
        });
    };
    TestEditorComponent.prototype.clearText = function () {
        this.textValue = '';
    };
    TestEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-editor',
            template: __webpack_require__(/*! ./test-editor.component.html */ "./src/app/tests/test-editor/test-editor.component.html"),
            styles: [__webpack_require__(/*! ./test-editor.component.css */ "./src/app/tests/test-editor/test-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"],
            _services_test_service__WEBPACK_IMPORTED_MODULE_7__["TestService"],
            _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_8__["SessionStorageService"]])
    ], TestEditorComponent);
    return TestEditorComponent;
}());



/***/ }),

/***/ "./src/app/tests/tests-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tests/tests-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TestsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsRoutingModule", function() { return TestsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _guards_redactor_quard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guards/redactor-quard */ "./src/app/guards/redactor-quard.ts");
/* harmony import */ var _test_editor_test_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-editor/test-editor.component */ "./src/app/tests/test-editor/test-editor.component.ts");
/* harmony import */ var _services_question_resolve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/question-resolve.service */ "./src/app/tests/services/question-resolve.service.ts");
/* harmony import */ var _resolve_test_resolve_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolve-test/resolve-test.component */ "./src/app/tests/resolve-test/resolve-test.component.ts");
/* harmony import */ var _guards_user_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guards/user-guard */ "./src/app/guards/user-guard.ts");
/* harmony import */ var _services_solutions_for_redactor_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/solutions-for-redactor-resolve.service */ "./src/app/tests/services/solutions-for-redactor-resolve.service.ts");
/* harmony import */ var _redactor_tests_redactor_tests_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redactor-tests/redactor-tests.component */ "./src/app/tests/redactor-tests/redactor-tests.component.ts");
/* harmony import */ var _check_solved_test_check_solved_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./check-solved-test/check-solved-test.component */ "./src/app/tests/check-solved-test/check-solved-test.component.ts");
/* harmony import */ var _services_solution_resolve_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/solution-resolve.service */ "./src/app/tests/services/solution-resolve.service.ts");
/* harmony import */ var _user_solution_user_solution_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-solution/user-solution.component */ "./src/app/tests/user-solution/user-solution.component.ts");
/* harmony import */ var _guards_redactor_or_moderator_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../guards/redactor-or-moderator-guard */ "./src/app/guards/redactor-or-moderator-guard.ts");
/* harmony import */ var _services_test_resolve_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/test-resolve.service */ "./src/app/tests/services/test-resolve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var MAIN_PAGE_ROUTES = [
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["TEST_PAGE_URL"] + "/:test/" + _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["ADD_QUESTIONS"],
        component: _test_editor_test_editor_component__WEBPACK_IMPORTED_MODULE_4__["TestEditorComponent"],
        resolve: {
            questions: _services_question_resolve_service__WEBPACK_IMPORTED_MODULE_5__["QuestionResolveService"],
            test: _services_test_resolve_service__WEBPACK_IMPORTED_MODULE_14__["TestResolveService"]
        },
        canActivate: [
            _guards_redactor_or_moderator_guard__WEBPACK_IMPORTED_MODULE_13__["RedactorOrModeratorGuard"]
        ],
        runGuardsAndResolvers: 'always'
    },
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["TRANSLATE_TEST_PAGE_URL"] + "/:test/" + _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["ADD_QUESTIONS"],
        component: _test_editor_test_editor_component__WEBPACK_IMPORTED_MODULE_4__["TestEditorComponent"],
        resolve: {
            questions: _services_question_resolve_service__WEBPACK_IMPORTED_MODULE_5__["QuestionResolveService"],
            test: _services_test_resolve_service__WEBPACK_IMPORTED_MODULE_14__["TestResolveService"]
        },
        canActivate: [
            _guards_redactor_or_moderator_guard__WEBPACK_IMPORTED_MODULE_13__["RedactorOrModeratorGuard"]
        ],
        runGuardsAndResolvers: 'always'
    },
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["TEST_PAGE_URL"] + "/" + _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["ADD_QUESTIONS"],
        component: _test_editor_test_editor_component__WEBPACK_IMPORTED_MODULE_4__["TestEditorComponent"],
        canActivate: [
            _guards_redactor_or_moderator_guard__WEBPACK_IMPORTED_MODULE_13__["RedactorOrModeratorGuard"]
        ],
        runGuardsAndResolvers: 'always'
    },
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["RESOLVE_TEST_PAGE"] + "/:test",
        component: _resolve_test_resolve_test_component__WEBPACK_IMPORTED_MODULE_6__["ResolveTestComponent"],
        resolve: {
            test: _services_question_resolve_service__WEBPACK_IMPORTED_MODULE_5__["QuestionResolveService"]
        },
        canActivate: [
            _guards_user_guard__WEBPACK_IMPORTED_MODULE_7__["UserGuard"]
        ],
        runGuardsAndResolvers: 'always'
    },
    {
        path: "" + _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["SOLUTIONS_PAGE_URL"],
        component: _redactor_tests_redactor_tests_component__WEBPACK_IMPORTED_MODULE_9__["RedactorTestsComponent"],
        resolve: {
            solutions: _services_solutions_for_redactor_resolve_service__WEBPACK_IMPORTED_MODULE_8__["SolutionsForRedactorResolveService"]
        },
        canActivate: [
            _guards_redactor_quard__WEBPACK_IMPORTED_MODULE_3__["RedactorGuard"]
        ],
        runGuardsAndResolvers: 'always'
    },
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["CHECK_TEST"] + "/:test",
        component: _check_solved_test_check_solved_test_component__WEBPACK_IMPORTED_MODULE_10__["CheckSolvedTestComponent"],
        resolve: {
            solution: _services_solution_resolve_service__WEBPACK_IMPORTED_MODULE_11__["SolutionResolveService"]
        },
        canActivate: [
            _guards_redactor_quard__WEBPACK_IMPORTED_MODULE_3__["RedactorGuard"]
        ],
        runGuardsAndResolvers: 'always'
    },
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["MY_SOLUTIONS"] + "/:test",
        component: _user_solution_user_solution_component__WEBPACK_IMPORTED_MODULE_12__["UserSolutionComponent"],
        resolve: {
            solution: _services_solution_resolve_service__WEBPACK_IMPORTED_MODULE_11__["SolutionResolveService"]
        },
        canActivate: [
            _guards_user_guard__WEBPACK_IMPORTED_MODULE_7__["UserGuard"]
        ],
        runGuardsAndResolvers: 'always'
    },
];
var TestsRoutingModule = /** @class */ (function () {
    function TestsRoutingModule() {
    }
    TestsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(MAIN_PAGE_ROUTES),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], TestsRoutingModule);
    return TestsRoutingModule;
}());



/***/ }),

/***/ "./src/app/tests/tests.module.ts":
/*!***************************************!*\
  !*** ./src/app/tests/tests.module.ts ***!
  \***************************************/
/*! exports provided: TestsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsModule", function() { return TestsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _test_editor_test_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-editor/test-editor.component */ "./src/app/tests/test-editor/test-editor.component.ts");
/* harmony import */ var _test_editor_single_question_single_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-editor/single-question/single-question.component */ "./src/app/tests/test-editor/single-question/single-question.component.ts");
/* harmony import */ var _test_editor_single_question_scala_answer_scala_answer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-editor/single-question/scala-answer/scala-answer.component */ "./src/app/tests/test-editor/single-question/scala-answer/scala-answer.component.ts");
/* harmony import */ var _test_editor_single_question_variant_answer_variant_answer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-editor/single-question/variant-answer/variant-answer.component */ "./src/app/tests/test-editor/single-question/variant-answer/variant-answer.component.ts");
/* harmony import */ var _tests_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tests-routing.module */ "./src/app/tests/tests-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _resolve_test_resolve_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolve-test/resolve-test.component */ "./src/app/tests/resolve-test/resolve-test.component.ts");
/* harmony import */ var _redactor_tests_redactor_tests_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./redactor-tests/redactor-tests.component */ "./src/app/tests/redactor-tests/redactor-tests.component.ts");
/* harmony import */ var _solved_test_solved_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./solved-test/solved-test.component */ "./src/app/tests/solved-test/solved-test.component.ts");
/* harmony import */ var _check_solved_test_check_solved_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./check-solved-test/check-solved-test.component */ "./src/app/tests/check-solved-test/check-solved-test.component.ts");
/* harmony import */ var _user_tests_user_tests_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-tests/user-tests.component */ "./src/app/tests/user-tests/user-tests.component.ts");
/* harmony import */ var _user_solution_user_solution_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-solution/user-solution.component */ "./src/app/tests/user-solution/user-solution.component.ts");
/* harmony import */ var _all_tests_all_tests_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./all-tests/all-tests.component */ "./src/app/tests/all-tests/all-tests.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var TestsModule = /** @class */ (function () {
    function TestsModule() {
    }
    TestsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _tests_routing_module__WEBPACK_IMPORTED_MODULE_6__["TestsRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            ],
            declarations: [_test_editor_test_editor_component__WEBPACK_IMPORTED_MODULE_2__["TestEditorComponent"],
                _test_editor_single_question_single_question_component__WEBPACK_IMPORTED_MODULE_3__["SingleQuestionComponent"],
                _test_editor_single_question_scala_answer_scala_answer_component__WEBPACK_IMPORTED_MODULE_4__["ScalaAnswerComponent"],
                _test_editor_single_question_variant_answer_variant_answer_component__WEBPACK_IMPORTED_MODULE_5__["VariantAnswerComponent"],
                _resolve_test_resolve_test_component__WEBPACK_IMPORTED_MODULE_9__["ResolveTestComponent"],
                _redactor_tests_redactor_tests_component__WEBPACK_IMPORTED_MODULE_10__["RedactorTestsComponent"],
                _solved_test_solved_test_component__WEBPACK_IMPORTED_MODULE_11__["SolvedTestComponent"],
                _check_solved_test_check_solved_test_component__WEBPACK_IMPORTED_MODULE_12__["CheckSolvedTestComponent"],
                _user_tests_user_tests_component__WEBPACK_IMPORTED_MODULE_13__["UserTestsComponent"],
                _user_solution_user_solution_component__WEBPACK_IMPORTED_MODULE_14__["UserSolutionComponent"],
                _all_tests_all_tests_component__WEBPACK_IMPORTED_MODULE_15__["AllTestsComponent"]],
            exports: [
                _user_tests_user_tests_component__WEBPACK_IMPORTED_MODULE_13__["UserTestsComponent"],
                _user_solution_user_solution_component__WEBPACK_IMPORTED_MODULE_14__["UserSolutionComponent"],
                _all_tests_all_tests_component__WEBPACK_IMPORTED_MODULE_15__["AllTestsComponent"]
            ],
        })
    ], TestsModule);
    return TestsModule;
}());



/***/ }),

/***/ "./src/app/tests/user-solution/user-solution.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/tests/user-solution/user-solution.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".score-container {\r\n  margin-top: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvdXNlci1zb2x1dGlvbi91c2VyLXNvbHV0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC90ZXN0cy91c2VyLXNvbHV0aW9uL3VzZXItc29sdXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY29yZS1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/tests/user-solution/user-solution.component.html":
/*!******************************************************************!*\
  !*** ./src/app/tests/user-solution/user-solution.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"check-solved-test-container\">\r\n  <div>\r\n    <app-solved-test [solution]=\"solution\"></app-solved-test>\r\n  </div>\r\n  <div class=\"score row material-form\">\r\n    <div class=\"col-md-4\">\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n    </div>\r\n    <div *ngIf=\"solution.checked\" class=\"col-md-4 full-width-button score-container\">\r\n      <b>Wynik: {{solution.score}}</b>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tests/user-solution/user-solution.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tests/user-solution/user-solution.component.ts ***!
  \****************************************************************/
/*! exports provided: UserSolutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSolutionComponent", function() { return UserSolutionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserSolutionComponent = /** @class */ (function () {
    function UserSolutionComponent(route) {
        this.route = route;
    }
    UserSolutionComponent.prototype.ngOnInit = function () {
        this.solution = this.route.snapshot.data['solution'];
    };
    UserSolutionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-solution',
            template: __webpack_require__(/*! ./user-solution.component.html */ "./src/app/tests/user-solution/user-solution.component.html"),
            styles: [__webpack_require__(/*! ./user-solution.component.css */ "./src/app/tests/user-solution/user-solution.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserSolutionComponent);
    return UserSolutionComponent;
}());



/***/ }),

/***/ "./src/app/tests/user-tests/user-tests.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tests/user-tests/user-tests.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n  border: 1px solid var(--secondary-text-color);\r\n}\r\ntd {\r\n  text-align: center;\r\n  padding: 5px 20px;\r\n  border: 1px solid var(--secondary-text-color);\r\n}\r\nthead td {\r\n  background-color: var(--background-secondary-color);\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvdXNlci10ZXN0cy91c2VyLXRlc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZDQUE2QztBQUMvQztBQUNBO0VBQ0UsbURBQW1EO0VBQ25ELGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RzL3VzZXItdGVzdHMvdXNlci10ZXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcclxufVxyXG50ZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcclxufVxyXG50aGVhZCB0ZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tests/user-tests/user-tests.component.html":
/*!************************************************************!*\
  !*** ./src/app/tests/user-tests/user-tests.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"solved-test-container material-form\">\r\n  <table>\r\n    <thead>\r\n    <tr>\r\n      <td>Id</td>\r\n      <td>Nazwa</td>\r\n      <td>Język</td>\r\n      <td>Sprawdzony</td>\r\n      <td>Wynik</td>\r\n      <td>Szczegóły</td>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let solution of solutions.solutions\">\r\n      <td>{{solution.id}}</td>\r\n      <td>{{solution.test.name}}</td>\r\n      <td>{{solution.test.language}}</td>\r\n      <td><span *ngIf=\"solution.checked\">Tak</span><span *ngIf=\"!solution.checked\">Nie</span></td>\r\n      <td>{{solution.score}}</td>\r\n      <td>\r\n        <button mat-button [routerLink]=\"['..', mySolutions, solution.id]\">Szczegóły</button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tests/user-tests/user-tests.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tests/user-tests/user-tests.component.ts ***!
  \**********************************************************/
/*! exports provided: UserTestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTestsComponent", function() { return UserTestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserTestsComponent = /** @class */ (function () {
    function UserTestsComponent(route) {
        this.route = route;
        this.mySolutions = _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__["MY_SOLUTIONS"];
    }
    UserTestsComponent.prototype.ngOnInit = function () {
        this.solutions = this.route.snapshot.data['solutions'];
    };
    UserTestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-tests',
            template: __webpack_require__(/*! ./user-tests.component.html */ "./src/app/tests/user-tests/user-tests.component.html"),
            styles: [__webpack_require__(/*! ./user-tests.component.css */ "./src/app/tests/user-tests/user-tests.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserTestsComponent);
    return UserTestsComponent;
}());



/***/ }),

/***/ "./src/app/user-edit/services/change-password.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/user-edit/services/change-password.service.ts ***!
  \***************************************************************/
/*! exports provided: ChangePasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordService", function() { return ChangePasswordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/backend-urls */ "./src/app/shared/utils/backend-urls.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordService = /** @class */ (function () {
    function ChangePasswordService(httpClient) {
        this.httpClient = httpClient;
    }
    ChangePasswordService.prototype.changePassword = function (username, passwordChange) {
        return this.httpClient.post(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["USERS_URL"] + "/" + username + "/" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["PASSWORD_POSTFIX"], passwordChange);
    };
    ChangePasswordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChangePasswordService);
    return ChangePasswordService;
}());



/***/ }),

/***/ "./src/app/user-edit/services/logged-user-resolve.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user-edit/services/logged-user-resolve.service.ts ***!
  \*******************************************************************/
/*! exports provided: LoggedUserResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedUserResolveService", function() { return LoggedUserResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_resolve_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-resolve.service */ "./src/app/user-edit/services/user-resolve.service.ts");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedUserResolveService = /** @class */ (function () {
    function LoggedUserResolveService(usersResolveService, sessionStorageService) {
        this.usersResolveService = usersResolveService;
        this.sessionStorageService = sessionStorageService;
    }
    LoggedUserResolveService.prototype.resolve = function (route, state) {
        var username = this.sessionStorageService.getUser().username;
        return this.usersResolveService.resolve(route, username);
    };
    LoggedUserResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_resolve_service__WEBPACK_IMPORTED_MODULE_1__["UserResolveService"],
            _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"]])
    ], LoggedUserResolveService);
    return LoggedUserResolveService;
}());



/***/ }),

/***/ "./src/app/user-edit/services/user-account.service.ts":
/*!************************************************************!*\
  !*** ./src/app/user-edit/services/user-account.service.ts ***!
  \************************************************************/
/*! exports provided: UserAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountService", function() { return UserAccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/backend-urls */ "./src/app/shared/utils/backend-urls.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserAccountService = /** @class */ (function () {
    function UserAccountService(httpClient) {
        this.httpClient = httpClient;
    }
    UserAccountService.prototype.deleteAccount = function (username) {
        return this.httpClient.delete(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["USERS_URL"] + "/" + username);
    };
    UserAccountService.prototype.updateAccount = function (username, updateData) {
        return this.httpClient.put(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_1__["USERS_URL"] + "/" + username, updateData, { observe: 'response' });
    };
    UserAccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserAccountService);
    return UserAccountService;
}());



/***/ }),

/***/ "./src/app/user-edit/services/user-resolve.service.ts":
/*!************************************************************!*\
  !*** ./src/app/user-edit/services/user-resolve.service.ts ***!
  \************************************************************/
/*! exports provided: UserResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolveService", function() { return UserResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user-edit/services/user.service.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserResolveService = /** @class */ (function () {
    function UserResolveService(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserResolveService.prototype.resolve = function (route, username) {
        if (username === undefined || username === null) {
            this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_3__["NOT_FOUND_PAGE_URL"]]);
            return null;
        }
        return this.userService.getUser(username)
            .toPromise()
            .then(function (result) {
            return result;
        });
    };
    UserResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserResolveService);
    return UserResolveService;
}());



/***/ }),

/***/ "./src/app/user-edit/services/user.service.ts":
/*!****************************************************!*\
  !*** ./src/app/user-edit/services/user.service.ts ***!
  \****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/backend-urls */ "./src/app/shared/utils/backend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
    }
    UserService.prototype.getUser = function (username) {
        return this.httpClient.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["USERS_URL"] + ("/" + username));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user-edit/user-edit-page/delete-account/delete-account.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/user-edit/user-edit-page/delete-account/delete-account.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZWRpdC91c2VyLWVkaXQtcGFnZS9kZWxldGUtYWNjb3VudC9kZWxldGUtYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-edit/user-edit-page/delete-account/delete-account.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/user-edit/user-edit-page/delete-account/delete-account.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"material-form\">\r\n  <div class=\"full-width-button danger-button\">\r\n    <button mat-button (click)=\"delete()\" type=\"button\">Skasuj konto</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/user-edit/user-edit-page/delete-account/delete-account.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/user-edit/user-edit-page/delete-account/delete-account.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DeleteAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAccountComponent", function() { return DeleteAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user-account.service */ "./src/app/user-edit/services/user-account.service.ts");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _dialogs_yes_no_dialog_delete_user_account_dialog_delete_user_account_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component */ "./src/app/dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DeleteAccountComponent = /** @class */ (function () {
    function DeleteAccountComponent(userAccountService, sessionStorageService, router, dialog) {
        this.userAccountService = userAccountService;
        this.sessionStorageService = sessionStorageService;
        this.router = router;
        this.dialog = dialog;
    }
    DeleteAccountComponent.prototype.ngOnInit = function () {
    };
    DeleteAccountComponent.prototype.delete = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_yes_no_dialog_delete_user_account_dialog_delete_user_account_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteUserAccountDialogComponent"], {
            height: '250px',
            width: '350px',
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === true) {
                _this.userAccountService.deleteAccount(_this.sessionStorageService.getUser().username).subscribe(function (result) {
                    _this.sessionStorageService.logout();
                    _this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_5__["MAIN_PAGE_URL"]]);
                });
            }
        });
    };
    DeleteAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-account',
            template: __webpack_require__(/*! ./delete-account.component.html */ "./src/app/user-edit/user-edit-page/delete-account/delete-account.component.html"),
            styles: [__webpack_require__(/*! ./delete-account.component.css */ "./src/app/user-edit/user-edit-page/delete-account/delete-account.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_account_service__WEBPACK_IMPORTED_MODULE_1__["UserAccountService"],
            _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], DeleteAccountComponent);
    return DeleteAccountComponent;
}());



/***/ }),

/***/ "./src/app/user-edit/user-edit-page/user-details-edit/user-details-edit.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/user-edit/user-edit-page/user-details-edit/user-details-edit.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZWRpdC91c2VyLWVkaXQtcGFnZS91c2VyLWRldGFpbHMtZWRpdC91c2VyLWRldGFpbHMtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-edit/user-edit-page/user-details-edit/user-details-edit.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/user-edit/user-edit-page/user-details-edit/user-details-edit.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-details-edit-wrapper full-width-form\">\r\n  <form [formGroup]=\"userDetailsForm\" class=\"material-form\">\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput formControlName=\"username\" placeholder=\"Nazwa użytkownika\">\r\n        <mat-error *ngIf=\"userDetailsForm.get('username').hasError('required')\">\r\n          Nazwa użytkownika jest wymagana.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"userDetailsForm.get('username').hasError('minlength')\">\r\n          Nazwa użytkownika musi zawierać co najmniej{{minUsernameLength}} znaków.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"userDetailsForm.get('username').hasError('maxlength')\">\r\n          Nazwa użytkownika może zawierać maksymalnie {{maxUsernameLength}} znaków.\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput formControlName=\"nameSurname\" placeholder=\"Imię i nazwisko\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <mat-select formControlName=\"language\" placeholder=\"Język\">\r\n          <mat-option [value]=\"'pl'\">Polski</mat-option>\r\n          <mat-option [value]=\"'en'\">Angielski</mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"userDetailsForm.get('language').hasError('required')\">\r\n          Język jest wymagany.\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput email formControlName=\"email\" placeholder=\"Email\">\r\n        <mat-error *ngIf=\"userDetailsForm.get('email').hasError('required')\">\r\n          Email jest wymagany.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"userDetailsForm.get('email').hasError('email')\">\r\n          Podaj prawidłowy adres email.\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"full-width-button\">\r\n      <button mat-button\r\n              [disabled]=\"userDetailsForm.invalid || userDetailsForm.errors\"\r\n              type=\"submit\" (click)=\"update()\">Zaktualizuj dane konta</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-edit/user-edit-page/user-details-edit/user-details-edit.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/user-edit/user-edit-page/user-details-edit/user-details-edit.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: UserDetailsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsEditComponent", function() { return UserDetailsEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-account.service */ "./src/app/user-edit/services/user-account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
/* harmony import */ var _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/utils/global-variables */ "./src/app/shared/utils/global-variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserDetailsEditComponent = /** @class */ (function () {
    function UserDetailsEditComponent(formBuilder, userAccountService, router, route, errorHandlingService, sessionStorageService) {
        this.formBuilder = formBuilder;
        this.userAccountService = userAccountService;
        this.router = router;
        this.route = route;
        this.errorHandlingService = errorHandlingService;
        this.sessionStorageService = sessionStorageService;
        this.minUsernameLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_7__["MIN_USERNAME_LENGTH"];
        this.maxUsernameLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_7__["MAX_USERNAME_LENGTH"];
    }
    UserDetailsEditComponent.prototype.ngOnInit = function () {
        this.user = this.route.snapshot.data['user'];
        this.buildForm();
    };
    UserDetailsEditComponent.prototype.buildForm = function () {
        this.userDetailsForm = this.formBuilder.group({
            username: [this.user.username, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minUsernameLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxUsernameLength)
                ]],
            email: [this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nameSurname: [this.user.nameSurname],
            language: [this.user.language, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    UserDetailsEditComponent.prototype.update = function () {
        var _this = this;
        this.userAccountService.updateAccount(this.user.username, this.userDetailsForm.value).subscribe(function (result) {
            _this.sessionStorageService.storeSession(result.body, result.headers.get('Authorization'));
            _this.router.navigated = false;
            _this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_5__["USER_EDIT_PAGE_URL"]]);
        });
    };
    UserDetailsEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details-edit',
            template: __webpack_require__(/*! ./user-details-edit.component.html */ "./src/app/user-edit/user-edit-page/user-details-edit/user-details-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-details-edit.component.css */ "./src/app/user-edit/user-edit-page/user-details-edit/user-details-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_user_account_service__WEBPACK_IMPORTED_MODULE_2__["UserAccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"],
            _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_6__["SessionStorageService"]])
    ], UserDetailsEditComponent);
    return UserDetailsEditComponent;
}());



/***/ }),

/***/ "./src/app/user-edit/user-edit-page/user-edit-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/user-edit/user-edit-page/user-edit-page.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-page-wrapper {\r\n  width: 80%;\r\n  margin: 0px auto;\r\n  padding-bottom: 20px;\r\n}\r\n.user-page-separator {\r\n  margin: 50px 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1lZGl0L3VzZXItZWRpdC1wYWdlL3VzZXItZWRpdC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1lZGl0L3VzZXItZWRpdC1wYWdlL3VzZXItZWRpdC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1wYWdlLXdyYXBwZXIge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4udXNlci1wYWdlLXNlcGFyYXRvciB7XHJcbiAgbWFyZ2luOiA1MHB4IDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user-edit/user-edit-page/user-edit-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/user-edit/user-edit-page/user-edit-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"user-page-wrapper\">\r\n  <div>\r\n    <app-user-details-edit></app-user-details-edit>\r\n  </div>\r\n  <hr class=\"user-page-separator\">\r\n  <div>\r\n    <app-user-password-change></app-user-password-change>\r\n  </div>\r\n  <hr class=\"user-page-separator\">\r\n  <div>\r\n    <app-delete-account></app-delete-account>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-edit/user-edit-page/user-edit-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user-edit/user-edit-page/user-edit-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserEditPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditPageComponent", function() { return UserEditPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserEditPageComponent = /** @class */ (function () {
    function UserEditPageComponent(route) {
        this.route = route;
    }
    UserEditPageComponent.prototype.ngOnInit = function () {
        this.user = this.route.snapshot.data['user'];
    };
    UserEditPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-edit-page',
            template: __webpack_require__(/*! ./user-edit-page.component.html */ "./src/app/user-edit/user-edit-page/user-edit-page.component.html"),
            styles: [__webpack_require__(/*! ./user-edit-page.component.css */ "./src/app/user-edit/user-edit-page/user-edit-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserEditPageComponent);
    return UserEditPageComponent;
}());



/***/ }),

/***/ "./src/app/user-edit/user-edit-page/user-password-change/user-edit-confirm-password.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/user-edit/user-edit-page/user-password-change/user-edit-confirm-password.ts ***!
  \*********************************************************************************************/
/*! exports provided: UserEditConfirmPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditConfirmPassword", function() { return UserEditConfirmPassword; });
/* harmony import */ var _shared_utils_shared_confirm_password__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils/shared-confirm-password */ "./src/app/shared/utils/shared-confirm-password.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UserEditConfirmPassword = /** @class */ (function (_super) {
    __extends(UserEditConfirmPassword, _super);
    function UserEditConfirmPassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserEditConfirmPassword.prototype.matchPassword = function (abstractControl) {
        return _super.prototype.matchPasswordHelper.call(this, abstractControl, 'newPassword', 'confirmNewPassword');
    };
    return UserEditConfirmPassword;
}(_shared_utils_shared_confirm_password__WEBPACK_IMPORTED_MODULE_0__["SharedConfirmPassword"]));



/***/ }),

/***/ "./src/app/user-edit/user-edit-page/user-password-change/user-password-change.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/user-edit/user-edit-page/user-password-change/user-password-change.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZWRpdC91c2VyLWVkaXQtcGFnZS91c2VyLXBhc3N3b3JkLWNoYW5nZS91c2VyLXBhc3N3b3JkLWNoYW5nZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-edit/user-edit-page/user-password-change/user-password-change.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/user-edit/user-edit-page/user-password-change/user-password-change.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-password-change-wrapper\">\r\n  <form [formGroup]=\"passwordChangeForm\" class=\"material-form full-width-form\">\r\n    <div>\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"oldPassword\" type=\"password\" placeholder=\"Stare hasło\">\r\n\r\n      <mat-error *ngIf=\"passwordChangeForm.get('oldPassword').hasError('required')\">\r\n        Stare hasło jest wymagane\r\n      </mat-error>\r\n      <mat-error  *ngIf=\"passwordChangeForm.get('oldPassword').hasError('minlength')\">\r\n        Stare hasło musi zawierać co najmniej {{minPasswordLength}} znaków.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"passwordChangeForm.get('oldPassword').hasError('maxlength')\">\r\n        Stare hasło może zawierać maksymalnie {{maxPasswordLength}} znaków.\r\n      </mat-error>\r\n    </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput formControlName=\"newPassword\" type=\"password\" placeholder=\"Nowe hasło\">\r\n\r\n        <mat-error *ngIf=\"passwordChangeForm.get('newPassword').hasError('required')\">\r\n          Hasło jest wymagane.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"passwordChangeForm.get('newPassword').hasError('minlength')\">\r\n          Hasło musi zawierać co najmniej {{minPasswordLength}} znaków.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"passwordChangeForm.get('newPassword').hasError('maxlength')\">\r\n          Hasło może zawierać maksymalnie {{maxPasswordLength}} znaków.\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput formControlName=\"confirmNewPassword\" type=\"password\"\r\n               placeholder=\"Potwierdź nowe hasło\" [errorStateMatcher]=\"errorMatcher\">\r\n\r\n        <mat-error *ngIf=\"passwordChangeForm.get('confirmNewPassword').hasError('required')\">\r\n          Musisz potwierdzić hasło.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"passwordChangeForm.hasError('matchPassword')\">\r\n          Hasła są różne\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"full-width-button\">\r\n      <button mat-button\r\n              [disabled]=\"passwordChangeForm.invalid || passwordChangeForm.errors || getProcessingChange()\"\r\n              type=\"submit\" (click)=\"changePassword()\">\r\n              Zmień hasło</button>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-edit/user-edit-page/user-password-change/user-password-change.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/user-edit/user-edit-page/user-password-change/user-password-change.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: UserPasswordChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPasswordChangeComponent", function() { return UserPasswordChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_change_password_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/change-password.service */ "./src/app/user-edit/services/change-password.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_utils_confirm_password_error_state_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utils/confirm-password-error-state-matcher */ "./src/app/shared/utils/confirm-password-error-state-matcher.ts");
/* harmony import */ var _user_edit_confirm_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-edit-confirm-password */ "./src/app/user-edit/user-edit-page/user-password-change/user-edit-confirm-password.ts");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
/* harmony import */ var _core_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/loading-spinner/loading-spinner.component */ "./src/app/core/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/utils/global-variables */ "./src/app/shared/utils/global-variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserPasswordChangeComponent = /** @class */ (function () {
    function UserPasswordChangeComponent(formBuilder, passwordChangeService, sessionStorageService) {
        this.formBuilder = formBuilder;
        this.passwordChangeService = passwordChangeService;
        this.sessionStorageService = sessionStorageService;
        this.confirmPassword = new _user_edit_confirm_password__WEBPACK_IMPORTED_MODULE_4__["UserEditConfirmPassword"]();
        this.errorMatcher = new _shared_utils_confirm_password_error_state_matcher__WEBPACK_IMPORTED_MODULE_3__["ConfirmPasswordErrorMatcher"]();
        this.minPasswordLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_7__["MIN_PASSWORD_LENGTH"];
        this.maxPasswordLength = _shared_utils_global_variables__WEBPACK_IMPORTED_MODULE_7__["MAX_PASSWORD_LENGTH"];
    }
    UserPasswordChangeComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UserPasswordChangeComponent.prototype.buildForm = function () {
        this.passwordChangeForm = this.formBuilder.group({
            oldPassword: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minPasswordLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(this.maxPasswordLength)
                ]],
            newPassword: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minPasswordLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(this.maxPasswordLength)
                ]],
            confirmNewPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        }, {
            validator: this.confirmPassword.matchPassword
        });
    };
    UserPasswordChangeComponent.prototype.changePassword = function () {
        this.passwordChangeService.changePassword(this.sessionStorageService.getUser().username, this.passwordChangeForm.value).subscribe();
    };
    UserPasswordChangeComponent.prototype.getProcessingChange = function () {
        return _core_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__["LoadingSpinnerComponent"].showLoadingIndicator;
    };
    UserPasswordChangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-password-change',
            template: __webpack_require__(/*! ./user-password-change.component.html */ "./src/app/user-edit/user-edit-page/user-password-change/user-password-change.component.html"),
            styles: [__webpack_require__(/*! ./user-password-change.component.css */ "./src/app/user-edit/user-edit-page/user-password-change/user-password-change.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_change_password_service__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordService"],
            _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"]])
    ], UserPasswordChangeComponent);
    return UserPasswordChangeComponent;
}());



/***/ }),

/***/ "./src/app/user-edit/user-edit-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/user-edit/user-edit-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: UserEditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditRoutingModule", function() { return UserEditRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _user_edit_page_user_edit_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-edit-page/user-edit-page.component */ "./src/app/user-edit/user-edit-page/user-edit-page.component.ts");
/* harmony import */ var _guards_logged_user_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/logged-user-guard */ "./src/app/guards/logged-user-guard.ts");
/* harmony import */ var _services_logged_user_resolve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/logged-user-resolve.service */ "./src/app/user-edit/services/logged-user-resolve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var USER_EDIT_PAGE_ROUTES = [
    {
        path: "" + _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["USER_EDIT_PAGE_URL"],
        component: _user_edit_page_user_edit_page_component__WEBPACK_IMPORTED_MODULE_3__["UserEditPageComponent"],
        resolve: {
            user: _services_logged_user_resolve_service__WEBPACK_IMPORTED_MODULE_5__["LoggedUserResolveService"]
        },
        canActivate: [_guards_logged_user_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedUserGuard"]],
        runGuardsAndResolvers: 'always'
    },
];
var UserEditRoutingModule = /** @class */ (function () {
    function UserEditRoutingModule() {
    }
    UserEditRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(USER_EDIT_PAGE_ROUTES),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], UserEditRoutingModule);
    return UserEditRoutingModule;
}());



/***/ }),

/***/ "./src/app/user-edit/user-edit.module.ts":
/*!***********************************************!*\
  !*** ./src/app/user-edit/user-edit.module.ts ***!
  \***********************************************/
/*! exports provided: UserEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditModule", function() { return UserEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_edit_page_user_edit_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-edit-page/user-edit-page.component */ "./src/app/user-edit/user-edit-page/user-edit-page.component.ts");
/* harmony import */ var _user_edit_page_user_details_edit_user_details_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-edit-page/user-details-edit/user-details-edit.component */ "./src/app/user-edit/user-edit-page/user-details-edit/user-details-edit.component.ts");
/* harmony import */ var _user_edit_page_user_password_change_user_password_change_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-edit-page/user-password-change/user-password-change.component */ "./src/app/user-edit/user-edit-page/user-password-change/user-password-change.component.ts");
/* harmony import */ var _user_edit_page_delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-edit-page/delete-account/delete-account.component */ "./src/app/user-edit/user-edit-page/delete-account/delete-account.component.ts");
/* harmony import */ var _dialogs_yes_no_dialog_delete_user_account_dialog_delete_user_account_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component */ "./src/app/dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_edit_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-edit-routing.module */ "./src/app/user-edit/user-edit-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UserEditModule = /** @class */ (function () {
    function UserEditModule() {
    }
    UserEditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_edit_routing_module__WEBPACK_IMPORTED_MODULE_10__["UserEditRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"]
            ],
            declarations: [
                _user_edit_page_user_edit_page_component__WEBPACK_IMPORTED_MODULE_2__["UserEditPageComponent"],
                _user_edit_page_user_details_edit_user_details_edit_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsEditComponent"],
                _user_edit_page_user_password_change_user_password_change_component__WEBPACK_IMPORTED_MODULE_4__["UserPasswordChangeComponent"],
                _user_edit_page_delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_5__["DeleteAccountComponent"]
            ],
            entryComponents: [
                _dialogs_yes_no_dialog_delete_user_account_dialog_delete_user_account_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteUserAccountDialogComponent"]
            ]
        })
    ], UserEditModule);
    return UserEditModule;
}());



/***/ }),

/***/ "./src/app/user/positions/positions.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/positions/positions.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcG9zaXRpb25zL3Bvc2l0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/positions/positions.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/positions/positions.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"positions-container\">\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <td>ID</td>\r\n        <td>Nazwa stanowiska</td>\r\n        <td>Język</td>\r\n        <td>Nazwa testu</td>\r\n        <td>Rozwiąż</td>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let position of positions.positions\">\r\n        <td>{{position.id}}</td>\r\n        <td>{{position.name}}</td>\r\n        <td>{{position.test.language}}</td>\r\n        <td>{{position.test.name}}</td>\r\n        <td class=\"material-form\">\r\n          <button mat-button (click)=\"resolveTest(position.test.id)\">Rozwiąż</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/positions/positions.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/positions/positions.component.ts ***!
  \*******************************************************/
/*! exports provided: PositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsComponent", function() { return PositionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionsComponent = /** @class */ (function () {
    function PositionsComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    PositionsComponent.prototype.ngOnInit = function () {
        this.positions = this.route.snapshot.data['positions'];
    };
    PositionsComponent.prototype.resolveTest = function (id) {
        this.router.navigate([_shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_2__["RESOLVE_TEST_PAGE"], id]);
    };
    PositionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-positions',
            template: __webpack_require__(/*! ./positions.component.html */ "./src/app/user/positions/positions.component.html"),
            styles: [__webpack_require__(/*! ./positions.component.css */ "./src/app/user/positions/positions.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PositionsComponent);
    return PositionsComponent;
}());



/***/ }),

/***/ "./src/app/user/services/position.service.ts":
/*!***************************************************!*\
  !*** ./src/app/user/services/position.service.ts ***!
  \***************************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/backend-urls */ "./src/app/shared/utils/backend-urls.ts");
/* harmony import */ var _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/session-storage.service */ "./src/app/shared/services/session-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PositionService = /** @class */ (function () {
    function PositionService(http, sessionStorageService) {
        this.http = http;
        this.sessionStorageService = sessionStorageService;
    }
    PositionService.prototype.getAll = function () {
        return this.http.get(_shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["POSITIONS_URL"] + "/" + _shared_utils_backend_urls__WEBPACK_IMPORTED_MODULE_2__["TESTS_POSTFIX"] + "?language=" + this.sessionStorageService.getUser().language);
    };
    PositionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_services_session_storage_service__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "./src/app/user/services/positions-resolve.service.ts":
/*!************************************************************!*\
  !*** ./src/app/user/services/positions-resolve.service.ts ***!
  \************************************************************/
/*! exports provided: PositionsResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsResolveService", function() { return PositionsResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/error-handling.service */ "./src/app/shared/services/error-handling.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./position.service */ "./src/app/user/services/position.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PositionsResolveService = /** @class */ (function () {
    function PositionsResolveService(errorHandlingService, positionService, router) {
        this.errorHandlingService = errorHandlingService;
        this.positionService = positionService;
        this.router = router;
    }
    PositionsResolveService.prototype.resolve = function (route) {
        this.errorHandlingService.clear();
        return this.positionService
            .getAll()
            .toPromise()
            .then(function (result) {
            return result;
        }).catch(function () {
            return null;
        });
    };
    PositionsResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_error_handling_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingService"],
            _position_service__WEBPACK_IMPORTED_MODULE_3__["PositionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PositionsResolveService);
    return PositionsResolveService;
}());



/***/ }),

/***/ "./src/app/user/user-page/user-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".positions-container {\r\n  margin-bottom: 50px;\r\n}\r\nh1 {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXBhZ2UvdXNlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1wYWdlL3VzZXItcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc2l0aW9ucy1jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuaDEge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/user-page/user-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-page-container\">\r\n  <div class=\"positions-container\">\r\n    <h1>Dostępne stanowiska i testy</h1>\r\n    <app-positions></app-positions>\r\n  </div>\r\n  <div>\r\n    <h1>Moje rozwiązane testy</h1>\r\n    <app-user-tests></app-user-tests>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-page/user-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.ts ***!
  \*******************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserPageComponent = /** @class */ (function () {
    function UserPageComponent() {
    }
    UserPageComponent.prototype.ngOnInit = function () {
    };
    UserPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/user/user-page/user-page.component.html"),
            styles: [__webpack_require__(/*! ./user-page.component.css */ "./src/app/user/user-page/user-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils/frontend-urls */ "./src/app/shared/utils/frontend-urls.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_positions_resolve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/positions-resolve.service */ "./src/app/user/services/positions-resolve.service.ts");
/* harmony import */ var _guards_user_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/user-guard */ "./src/app/guards/user-guard.ts");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-page/user-page.component */ "./src/app/user/user-page/user-page.component.ts");
/* harmony import */ var _tests_services_user_solutions_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tests/services/user-solutions-resolve.service */ "./src/app/tests/services/user-solutions-resolve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var USER_PAGE_ROUTES = [
    {
        path: _shared_utils_frontend_urls__WEBPACK_IMPORTED_MODULE_1__["USER_PAGE_URL"],
        component: _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_5__["UserPageComponent"],
        runGuardsAndResolvers: 'always',
        resolve: {
            positions: _services_positions_resolve_service__WEBPACK_IMPORTED_MODULE_3__["PositionsResolveService"],
            solutions: _tests_services_user_solutions_resolve_service__WEBPACK_IMPORTED_MODULE_6__["UserSolutionsResolveService"]
        },
        canActivate: [
            _guards_user_guard__WEBPACK_IMPORTED_MODULE_4__["UserGuard"]
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(USER_PAGE_ROUTES),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-page/user-page.component */ "./src/app/user/user-page/user-page.component.ts");
/* harmony import */ var _positions_positions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./positions/positions.component */ "./src/app/user/positions/positions.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tests_tests_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tests/tests.module */ "./src/app/tests/tests.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _tests_tests_module__WEBPACK_IMPORTED_MODULE_7__["TestsModule"]
            ],
            declarations: [
                _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_2__["UserPageComponent"],
                _positions_positions_component__WEBPACK_IMPORTED_MODULE_3__["PositionsComponent"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Marcin\Desktop\Modelowanie i Analiza Systemów Informatycznych\Magenta\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map