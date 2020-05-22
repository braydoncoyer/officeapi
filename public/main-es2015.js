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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"fullscreen_container\">\n  <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n    <div class=\"welcome\">\n      <div class=\"welcome__logo\">\n        <img fxFlexFill src=\"../assets/officeApiLogo.png\" alt=\"office api logo\">\n      </div>\n      <div class=\"welcome__explanation\">\n        <p><b>officeapi.dev</b> is a free JSON API for quotes, facts and information on NBC’s beloved mockumentary series The Office.</p>\n      </div>\n\n      <h1 fxLayoutAlign=\"center\">Try An Example</h1>\n      <div class=\"welcome__example\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n        <div fxFlex=\"40%\" fxFlex.xs=\"35%\" class=\"welcome__example-http-container\">\n            <span >https://officeapi.dev/api/</span>\n        </div>\n        <input fxFlex=\"50%\" fxFlex.xs=\"50%\" type=\"text\" name=\"apiRequest\" placeholder=\"quotes/random\" [(ngModel)]=\"inputValue\">\n        <button fxFlex=\"10%\" fxFlex.xs=\"15%\" (click)=\"fetchData()\">Request</button>\n      </div>\n      <div class=\"welcome__example-suggestions\">\n        <p class=\"welcome__example-suggestions-item\">try <span (click)=\"suggestionClicked('episodes/')\" class=\"welcome__example-suggestions-item-italic\">episodes/</span></p>\n        <p class=\"welcome__example-suggestions-item\">try <span (click)=\"suggestionClicked('characters/')\" class=\"welcome__example-suggestions-item-italic\">characters/</span></p>\n      </div>\n      <div *ngIf=\"response\" class=\"welcome__example-result\">\n        <prism-block *ngIf=\"response\" [code]=\"response | json\"></prism-block>\n      </div>\n      <p class=\"welcome__example-disclaimer\">* Max of 5 results shown. Actual data length may vary.</p>\n    </div>\n\n    <div class=\"media\">\n        <img fxFlexFill fxLayoutAlign=\"center\" src=\"../assets/2.-meeting-room,-prison-mike.png\" alt=\"Prison Mike\">\n        <h1 fxLayoutAlign=\"center\">Documentation</h1>\n    </div>\n\n    <div class=\"documentation\">\n      <section class=\"introduction\">\n          <h2>Introduction</h2>\n          <p>Welcome to the officeapi.dev! This documentation should help familiarise yourself with the resources available and how to consume them with HTTP requests.</p>\n\n          <h3>What is a REST API?</h3>\n          <p>An API is an application programming interface - in short, it’s a set of rules and instructions that lets programs talk to each other, exposing data and functionality across the internet in a consistent format.</p>\n          <p>REST stands for Representational State Transfer. This is an architectural pattern that describes how distributed systems can expose a consistent interface. When people use the term ‘REST API,’ they are generally referring to an API accessed via HTTP protocol at a predefined set of URLs.</p>\n          <p>These URLs represent various resources - any information or content accessed at that location, which can be returned as JSON, HTML, audio files, or images. Often, resources have one or more methods that can be performed on them over HTTP, like GET, POST, PUT and DELETE.</p>\n          <p><b>The officeapi.dev only allows you to GET data; all other operations are prohibited.</b></p>\n      </section>\n\n      <section class=\"usage\">\n        <h2>Usage</h2>\n        <p>Let's make our first API request to the officeapi.dev!</p>\n        <p>Open a terminal and use curl or <a href=\"https://httpie.org\" target=\"_blank\">httpie</a> to make the following request to get a character from the API: </p>\n        <prism-block [code]=\"'https://officeapi.dev/api/characters/5e93b4a43af44260882e33b0'\"></prism-block>\n        <p>After making that request, you will get a response much like the following:</p>\n        <prism-block [code]=\"firstAPIResponse\"></prism-block>\n        <p>If your response looks slightly different, that's okay - we've most likely updated the response with new data.</p>\n      </section>\n\n      <img fxFlexFill fxLayoutAlign=\"center\" src=\"../assets/1.-mike-office.png\" alt=\"Michael's office\">\n\n      <section class=\"resources\">\n        <h2>Resources</h2>\n        <p>The following resources are available through the officeapi:</p>\n        <ul>\n          <li><span class=\"tag\">quotes</span> string -- the URL root for quote resources</li>\n          <li><span class=\"tag\">characters</span> string -- the URL root for character resources</li>\n          <li><span class=\"tag\">episodes</span> string -- the URL root for episode resources</li>\n          <li><span class=\"tag\">crew</span> string -- the URL root for crew resources</li>\n        </ul>\n        <br>\n        <hr>\n        <br>\n        <div class=\"resource resources__quotes\">\n            <h3>Quotes</h3>\n            <p>A quote resource is a phrase said by a character.</p>\n            <h4>Endpoints</h4>\n            <ul>\n              <li><span class=\"tag\">/quotes/</span> -- get a list of all quotes in our database.</li>\n              <li><span class=\"tag\">/quotes/:id/</span> -- get a specific quote by id.</li>\n<!--              <li><span class=\"tag\">/quotes/character/:id</span> &#45;&#45; get a list of all quotes from a specific character.</li>-->\n              <li><span class=\"tag\">/quotes/random</span> -- get a random quote from any character.</li>\n            </ul>\n\n            <p>As an example, if I make a request for a random quote, the response will be similar to the following:</p>\n            <br>\n            <p>Example request:</p>\n            <prism-block [code]=\"'https://officeapi.dev/api/quotes/random'\"></prism-block>\n\n            <prism-block [code]=\"randomQuoteCode\"></prism-block>\n        </div>\n\n        <div class=\"resource resources__characters\">\n            <h3>Characters</h3>\n            <p>A character resource is an entity representing a personality portrayed on the tv show.</p>\n            <h4>Endpoints</h4>\n            <ul>\n              <li><span class=\"tag\">/characters/</span> -- get a list of all characters in our database.</li>\n              <li><span class=\"tag\">/characters/:id/</span> -- get a specific character by id.</li>\n              <li><span class=\"tag\">/characters/random</span> -- get a random character in our database.</li>\n            </ul>\n\n            <p>As an example, if I wanted to get Jim Halpert back from the database, the request would look like the following:</p>\n            <br>\n            <p>Example request:</p>\n            <prism-block [code]=\"'https://officeapi.dev/api/characters/5e93b4f03af44260882e33b1'\"></prism-block>\n\n            <prism-block [code]=\"characterResourceResponse\"></prism-block>\n        </div>\n\n        <div class=\"resource resources__episodes\">\n            <h3>Episodes</h3>\n            <p>An episode resource is an entity representing a specific installment from the tv show.</p>\n            <p>Our database contains information for each episode from the series.</p>\n            <h4>Endpoints</h4>\n            <ul>\n              <li><span class=\"tag\">/episodes/</span> -- get a list of all episodes in our database.</li>\n              <li><span class=\"tag\">/episodes/:id/</span> -- get a specific episode by id.</li>\n              <li><span class=\"tag\">/episodes/random</span> -- get a random episode from our database.</li>\n            </ul>\n\n            <p>As an example, if I wanted to get the data related to the pilot episode in season one, the request would look like the following:</p>\n            <br>\n            <p>Example request:</p>\n            <prism-block [code]=\"'https://officeapi.dev/api/episodes/5e94d646f733a1332868e1dc'\"></prism-block>\n\n            <prism-block [code]=\"episodeResourceResponse\"></prism-block>\n        </div>\n\n        <div class=\"resource resources__crew\">\n          <h3>Crew</h3>\n          <p>A crew resource is an entity representing a crew member from the tv show. A crew member can be an actor, writer or director, as indicated by the 'role' property on the resource returned.</p>\n          <h4>Endpoints</h4>\n          <ul>\n            <li><span class=\"tag\">/crew/</span> -- get a list of all crew members in our database.</li>\n            <li><span class=\"tag\">/crew/:id/</span> -- get a specific crew resource by id.</li>\n            <li><span class=\"tag\">/crew/random</span> -- get a random crew member from our database.</li>\n          </ul>\n\n          <p>As an example, if I wanted to get the data related to writer and actor Michael Schur, the request would look like the following:</p>\n          <br>\n          <p>Example request:</p>\n          <prism-block [code]=\"'https://officeapi.dev/api/crew/5e9524139511994a07f9a317'\"></prism-block>\n\n          <prism-block [code]=\"crewResourceResponse\"></prism-block>\n        </div>\n\n      </section>\n    </div>\n\n      <!-- <img fxFlexFill fxLayoutAlign=\"center\" src=\"../assets/2.-jim-and-pam.png\" alt=\"\"> -->\n\n    <section fxLayout=\"column\">\n        <img fxFlexFill src=\"../assets/4.-office-building.png\" alt=\"The Office Building\">\n        <div class=\"footer\">\n          <p>The officeapi.dev is free and will always be free! However, maintaining this service costs $$$ and we are but poor programmers. If you feel so inclined, you can make us more productvie and even eternally grateful by buying us a coffee HERE.</p>\n\n          <p><b>DISCLAIMER:</b> This website and its creators are not affiliated with the NBC, The Office, or any other motion picture or television corporation, parent, or affiliate corporation. All motion pictures, products, and brands mentioned on this website are the respective trademarks and copyrights of their owners. All material on this website is intended for humorous entertainment (satire) purposes only. The content on this website is not necessarily true and should not be regarded as truth.</p>\n        </div>\n    </section>\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/homepage/homepage.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/homepage/homepage.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>homepage works!</p>\n"

/***/ }),

/***/ "./src/app/angular-prism/angular-prism.ts":
/*!************************************************!*\
  !*** ./src/app/angular-prism/angular-prism.ts ***!
  \************************************************/
/*! exports provided: PrismComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_prism_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/prism.component */ "./src/app/angular-prism/src/prism.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrismComponent", function() { return _src_prism_component__WEBPACK_IMPORTED_MODULE_0__["PrismComponent"]; });




/***/ }),

/***/ "./src/app/angular-prism/src/prism.component.ts":
/*!******************************************************!*\
  !*** ./src/app/angular-prism/src/prism.component.ts ***!
  \******************************************************/
/*! exports provided: PrismComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrismComponent", function() { return PrismComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrismComponent = class PrismComponent {
    constructor(_renderer, _el) {
        this._renderer = _renderer;
        this._el = _el;
        this.nativeElement = _el.nativeElement;
    }
    ngAfterViewInit() {
        this.preNode = this._renderer.createElement('pre');
        this.codeNode = this._renderer.createElement('code');
        this._renderer.addClass(this.codeNode, 'language-' + this.language);
        this._renderer.appendChild(this.nativeElement, this.preNode);
        this._renderer.appendChild(this.preNode, this.codeNode);
        this.codeNode.textContent = this.code;
        Prism.highlightElement(this.codeNode);
    }
};
PrismComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PrismComponent.prototype, "code", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PrismComponent.prototype, "language", void 0);
PrismComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'prism-block',
        template: ``,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], PrismComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
// {path: '/home', component: HomepageComponent},
// {path: '', component: HomepageComponent}
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"American Typewriter\";\n  src: url('AmericanTypewriterRegular.ttf') format(\"truetype\");\n}\n* {\n  color: #2d2d2d;\n}\n.fullscreen_container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: auto;\n  background: #BFC3C6;\n}\n.welcome {\n  margin-top: 25px;\n}\n.welcome__explanation {\n  margin: 50px 0;\n}\n.welcome__example > span {\n  line-height: 40px;\n  height: 40px;\n  background-color: #041528;\n  color: #FCFBFD;\n  text-align: center;\n  border-bottom: solid 3px black;\n}\n.welcome__example > input {\n  height: 40px;\n  border: none;\n  padding: 7px;\n  border-bottom: solid 3px #E2E2E2;\n}\n.welcome__example > button {\n  cursor: pointer;\n  border: none;\n  background-color: #6D8A8D;\n  border-bottom: solid 3px #293B49;\n  color: white;\n}\n.welcome__example-result {\n  margin-top: 15px;\n  background-color: #FCFBFD;\n  color: #2d2d2d;\n}\n.welcome__example-http-container {\n  line-height: 40px;\n  height: 40px;\n  background-color: #293B49;\n  text-align: center;\n  border-bottom: solid 3px #041528;\n}\n.welcome__example-http-container > span {\n  color: #FCFBFD;\n}\n.welcome__example-suggestions {\n  display: flex;\n  font-size: 12px;\n}\n.welcome__example-suggestions-item {\n  cursor: pointer;\n  margin: 5px 0;\n  margin-right: 20px;\n}\n.welcome__example-suggestions-item-italic {\n  font-size: 14px;\n  font-weight: 1000;\n}\n.welcome__example-disclaimer {\n  font-size: 12px;\n}\nsection {\n  margin: 3rem 0;\n}\n.media {\n  margin: 45px 0;\n}\n.footer {\n  font-size: 10px;\n}\n.tag {\n  color: white;\n  padding: 4px;\n  background-color: #041528;\n  border-radius: 5px;\n}\nul > li {\n  margin: 10px 0;\n}\n.resource {\n  margin-bottom: 6rem;\n}\n/* --------------------- MEDIA QUERIES --------------------- */\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 600px) {\n  .content {\n    width: 95%;\n    margin: 0 auto;\n  }\n\n  .welcome {\n    margin-top: 10px;\n  }\n  .welcome__example-http-container {\n    font-size: 10px;\n  }\n}\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (min-width: 600px) {\n  .content {\n    width: 85%;\n    margin: 0 auto;\n  }\n}\n/* Medium devices (landscape tablets, 768px and up) */\n@media only screen and (min-width: 768px) {\n  .content {\n    width: 75%;\n    margin: 0 auto;\n  }\n}\n/* iPad Pro Portrait */\n@media only screen and (min-width: 1024px) {\n  .content {\n    width: 60%;\n    margin: 0 auto;\n  }\n}\n/* Extra Large devices (laptops/desktops, 992px and up) */\n@media only screen and (min-width: 1026px) {\n  .content {\n    width: 40%;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmF5ZG9uY295ZXIvRG9jdW1lbnRzL0FuZ3VsYXIvb2ZmaWNlYXBpL29mZmljZWFwaS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2JyYXlkb25jb3llci9Eb2N1bWVudHMvQW5ndWxhci9vZmZpY2VhcGkvb2ZmaWNlYXBpL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtDQUFBO0VBQ0EsNERBQUE7QUNERjtBREtBO0VBQ0UsY0FBQTtBQ0hGO0FETUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0hGO0FETUE7RUFDRSxnQkFBQTtBQ0hGO0FES0U7RUFDRSxjQUFBO0FDSEo7QURNRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRTdCZTtFRjhCZixjQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0pKO0FET0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQ0xKO0FEUUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDTko7QURTRTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDUEo7QURVRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRTFERztFRjJESCxrQkFBQTtFQUNBLGdDQUFBO0FDUko7QURTSTtFQUNFLGNBQUE7QUNQTjtBRFdFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNUSjtBRFdJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ1ROO0FEV007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNUUjtBRGVFO0VBQ0UsZUFBQTtBQ2JKO0FEaUJBO0VBQ0UsY0FBQTtBQ2RGO0FEaUJBO0VBQ0UsY0FBQTtBQ2RGO0FEaUJBO0VBQ0UsZUFBQTtBQ2RGO0FEaUJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkV4R2lCO0VGeUdqQixrQkFBQTtBQ2RGO0FEa0JBO0VBQ0UsY0FBQTtBQ2ZGO0FEa0JBO0VBQ0UsbUJBQUE7QUNmRjtBRHVCQSw4REFBQTtBQUVBLGlEQUFBO0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxjQUFBO0VDckJGOztFRHdCQTtJQUNFLGdCQUFBO0VDckJGO0VEdUJFO0lBQ0UsZUFBQTtFQ3JCSjtBQUNGO0FEeUJBLG9FQUFBO0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxjQUFBO0VDdkJGO0FBQ0Y7QUQwQkEscURBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGNBQUE7RUN4QkY7QUFDRjtBRG1DQSxzQkFBQTtBQUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQ2pDRjtBQUNGO0FEb0NBLHlEQUFBO0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxjQUFBO0VDbENGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi92YXJpYWJsZXMuc2Nzcyc7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTpcIkFtZXJpY2FuIFR5cGV3cml0ZXJcIjtcbiAgc3JjOiB1cmwoXCIuLi9mb250cy9BbWVyaWNhblR5cGV3cml0ZXJSZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuXG4qIHtcbiAgY29sb3I6ICMyZDJkMmQ7XG59XG5cbi5mdWxsc2NyZWVuX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogI0JGQzNDNjtcbn1cblxuLndlbGNvbWUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuXG4gICZfX2V4cGxhbmF0aW9uIHtcbiAgICBtYXJnaW46IDUwcHggMDtcbiAgfVxuXG4gICZfX2V4YW1wbGUgPiBzcGFuIHtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstb2ZmaWNlLWJsdWU7XG4gICAgY29sb3I6ICNGQ0ZCRkQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCBibGFjaztcbiAgfVxuXG4gICZfX2V4YW1wbGUgPiBpbnB1dCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICRsaWdodC1ncmV5O1xuICB9XG5cbiAgJl9fZXhhbXBsZSA+IGJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkQ4QThEO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjMjkzQjQ5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gICZfX2V4YW1wbGUtcmVzdWx0IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0ZCRkQ7XG4gICAgY29sb3I6ICMyZDJkMmQ7XG4gIH1cblxuICAmX19leGFtcGxlLWh0dHAtY29udGFpbmVyIHtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAkZGFyay1ncmV5O1xuICAgICYgPiBzcGFuIHtcbiAgICAgIGNvbG9yOiAjRkNGQkZEO1xuICAgIH1cbiAgfVxuXG4gICZfX2V4YW1wbGUtc3VnZ2VzdGlvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAmLWl0ZW0ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcblxuICAgICAgJi1pdGFsaWMge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgJl9fZXhhbXBsZS1kaXNjbGFpbWVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cblxuc2VjdGlvbiB7XG4gIG1hcmdpbjogM3JlbSAwO1xufVxuXG4ubWVkaWEge1xuICBtYXJnaW46IDQ1cHggMDtcbn1cblxuLmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnRhZyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1vZmZpY2UtYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5cbnVsID4gbGkge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLnJlc291cmNlIHtcbiAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbn1cblxuXG5cblxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBNRURJQSBRVUVSSUVTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDYwMHB4IGFuZCBkb3duKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC53ZWxjb21lIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgJl9fZXhhbXBsZS1odHRwLWNvbnRhaW5lciB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxuLy8vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXG4vL0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbi8vICAuY29udGVudCB7XG4vLyAgICB3aWR0aDogNTAlO1xuLy8gICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgfVxuLy99XG5cbi8qIGlQYWQgUHJvIFBvcnRyYWl0ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuXG4vKiBFeHRyYSBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjZweCkge1xuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuXG5cbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBbWVyaWNhbiBUeXBld3JpdGVyXCI7XG4gIHNyYzogdXJsKFwiLi4vZm9udHMvQW1lcmljYW5UeXBld3JpdGVyUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG4qIHtcbiAgY29sb3I6ICMyZDJkMmQ7XG59XG5cbi5mdWxsc2NyZWVuX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogI0JGQzNDNjtcbn1cblxuLndlbGNvbWUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLndlbGNvbWVfX2V4cGxhbmF0aW9uIHtcbiAgbWFyZ2luOiA1MHB4IDA7XG59XG4ud2VsY29tZV9fZXhhbXBsZSA+IHNwYW4ge1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQxNTI4O1xuICBjb2xvcjogI0ZDRkJGRDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XG59XG4ud2VsY29tZV9fZXhhbXBsZSA+IGlucHV0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICNFMkUyRTI7XG59XG4ud2VsY29tZV9fZXhhbXBsZSA+IGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkQ4QThEO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggIzI5M0I0OTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLndlbGNvbWVfX2V4YW1wbGUtcmVzdWx0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkJGRDtcbiAgY29sb3I6ICMyZDJkMmQ7XG59XG4ud2VsY29tZV9fZXhhbXBsZS1odHRwLWNvbnRhaW5lciB7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTNCNDk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICMwNDE1Mjg7XG59XG4ud2VsY29tZV9fZXhhbXBsZS1odHRwLWNvbnRhaW5lciA+IHNwYW4ge1xuICBjb2xvcjogI0ZDRkJGRDtcbn1cbi53ZWxjb21lX19leGFtcGxlLXN1Z2dlc3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLndlbGNvbWVfX2V4YW1wbGUtc3VnZ2VzdGlvbnMtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiA1cHggMDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLndlbGNvbWVfX2V4YW1wbGUtc3VnZ2VzdGlvbnMtaXRlbS1pdGFsaWMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xufVxuLndlbGNvbWVfX2V4YW1wbGUtZGlzY2xhaW1lciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuc2VjdGlvbiB7XG4gIG1hcmdpbjogM3JlbSAwO1xufVxuXG4ubWVkaWEge1xuICBtYXJnaW46IDQ1cHggMDtcbn1cblxuLmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnRhZyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQxNTI4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbnVsID4gbGkge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLnJlc291cmNlIHtcbiAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE1FRElBIFFVRVJJRVMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDYwMHB4IGFuZCBkb3duKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC53ZWxjb21lIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC53ZWxjb21lX19leGFtcGxlLWh0dHAtY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG4vKiBpUGFkIFBybyBQb3J0cmFpdCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbi8qIEV4dHJhIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNnB4KSB7XG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59IiwiJHdoaXRlLXRleHQtY29sb3I6ICNGQ0ZCRkQ7XG4kbGlnaHQtZ3JleTogI0UyRTJFMjtcbiRvZmZpY2UtYmx1ZTogIzAzM0U1RTtcbiRkYXJrLW9mZmljZS1ibHVlOiAjMDQxNTI4O1xuJGdyZXk6ICMyOTNCNDk7XG4kZGFyay1ncmV5OiAjMDQxNTI4O1xuJHRyZWUtZ3JlZW46ICM0NTgyMzk7XG4kbGlnaHQtZ3JlZW46ICM3N0Q2QzE7XG4kdGVhbDogIzFDOTJBNztcbiRkYXJrLXRyZWUtZ3JlZW46ICMyNzNCMkQ7XG4kb2ZmaWNlLWJ1aWxkaW5nOiAjNkQ4QThEOyJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");



let AppComponent = class AppComponent {
    constructor(apiService, ref) {
        this.apiService = apiService;
        this.ref = ref;
        this.inputValue = 'quotes/random';
        this.firstAPIResponse = `
    {
      "_id": "5e93b4a43af44260882e33b0",
      "firstname": "Michael",
      "lastname": "Scott",
      "__v": 0
    },
  `;
        this.randomQuoteCode = `
  {
    "data": {
      "_id": "5e9668186a66e65486e244a5",
      "content": "Bears, Beets, Battlestar Galactica.",
      "character": {
        "_id": "5e93b4f03af44260882e33b1",
        "firstname": "Jim",
        "lastname": "Halpert",
        "__v": 0
      },
      "__v": 0
    }
 }
  `;
        this.characterResourceResponse = `
    "data": {
      "_id": "5e93b4f03af44260882e33b1",
      "firstname": "Jim",
      "lastname": "Halpert",
      "__v": 0
    }
  `;
        this.episodeResourceResponse = `
  "data": {
    "_id": "5e94d646f733a1332868e1dc",
    "title": "Pilot",
    "description": "A documentary crew gives a firsthand introduction to the staff of the Scranton branch of the Dunder Mifflin Paper Company, managed by Michael Scott.",
    "airDate": "2005-03-24T06:00:00.000Z",
    "__v": 0
  }
  `;
        this.crewResourceResponse = `
  "data": {
    "_id": "5e9524139511994a07f9a317",
    "name": "Michael Schur",
    "role": "Writer/Actor",
    "__v": 0
  }
  `;
    }
    ngOnInit() {
        this.apiService.get(this.inputValue).subscribe(result => {
            this.response = result;
        });
    }
    fetchData() {
        this.apiService.get(this.inputValue).subscribe((result) => {
            this.response = null;
            this.ref.detectChanges();
            if (result.data.length > 5) {
                this.response = result.data.slice(0, 5);
            }
            else {
                this.response = result;
            }
        });
    }
    suggestionClicked(value) {
        this.response = null;
        this.inputValue = value;
        this.ref.detectChanges();
        this.fetchData();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var prismjs_prism__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/prism */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs_prism__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_prism__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_prism_angular_prism__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./angular-prism/angular-prism */ "./src/app/angular-prism/angular-prism.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
            _angular_prism_angular_prism__WEBPACK_IMPORTED_MODULE_11__["PrismComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomepageComponent = class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/homepage/homepage.component.html"),
        styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/components/homepage/homepage.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomepageComponent);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    // get(endpoint: string): Observable<any> {
    //   console.log(endpoint);
    //   return this.http.get(`${environment.url}${endpoint}`);
    // }
    get(endpoint) {
        console.log('new endpoint');
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}`);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApiService);



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
    url: 'https://swapi.dev/api/people/1/'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/braydoncoyer/Documents/Angular/officeapi/officeapi/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map