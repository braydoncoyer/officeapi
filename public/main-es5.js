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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"fullscreen_container\">\r\n  <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\r\n    <div class=\"welcome\">\r\n      <div class=\"welcome__logo\">\r\n        <img fxFlexFill src=\"../assets/officeApiLogo.png\" alt=\"office api logo\">\r\n      </div>\r\n      <div class=\"welcome__explanation\">\r\n        <p><b>officeapi.dev</b> is a free JSON API for quotes, facts and information on NBC’s beloved mockumentary series The Office.</p>\r\n      </div>\r\n\r\n      <h1 fxLayoutAlign=\"center\">Try An Example</h1>\r\n      <div class=\"welcome__example\" fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n        <div fxFlex=\"40%\" fxFlex.xs=\"35%\" class=\"welcome__example-http-container\">\r\n            <span >https://officeapi.dev/api/</span>\r\n        </div>\r\n        <input fxFlex=\"50%\" fxFlex.xs=\"50%\" type=\"text\" name=\"apiRequest\" placeholder=\"quotes/random\" [(ngModel)]=\"inputValue\">\r\n        <button fxFlex=\"10%\" fxFlex.xs=\"15%\" (click)=\"fetchData()\">Request</button>\r\n      </div>\r\n      <div class=\"welcome__example-suggestions\">\r\n        <p class=\"welcome__example-suggestions-item\">try <span (click)=\"suggestionClicked('episodes/')\" class=\"welcome__example-suggestions-item-italic\">episodes/</span></p>\r\n        <p class=\"welcome__example-suggestions-item\">try <span (click)=\"suggestionClicked('characters/')\" class=\"welcome__example-suggestions-item-italic\">characters/</span></p>\r\n      </div>\r\n      <div *ngIf=\"response\" class=\"welcome__example-result\">\r\n        <prism-block *ngIf=\"response\" [code]=\"response | json\"></prism-block>\r\n      </div>\r\n      <p class=\"welcome__example-disclaimer\">* Max of 5 results shown. Actual data length may vary.</p>\r\n    </div>\r\n\r\n    <div class=\"media\">\r\n        <img fxFlexFill fxLayoutAlign=\"center\" src=\"../assets/2.-meeting-room,-prison-mike.png\" alt=\"Prison Mike\">\r\n        <h1 fxLayoutAlign=\"center\">Documentation</h1>\r\n    </div>\r\n\r\n    <div class=\"documentation\">\r\n      <section class=\"introduction\">\r\n          <h2>Introduction</h2>\r\n          <p>Welcome to the officeapi.dev! This documentation should help familiarise yourself with the resources available and how to consume them with HTTP requests.</p>\r\n\r\n          <h3>What is a REST API?</h3>\r\n          <p>An API is an application programming interface - in short, it’s a set of rules and instructions that lets programs talk to each other, exposing data and functionality across the internet in a consistent format.</p>\r\n          <p>REST stands for Representational State Transfer. This is an architectural pattern that describes how distributed systems can expose a consistent interface. When people use the term ‘REST API,’ they are generally referring to an API accessed via HTTP protocol at a predefined set of URLs.</p>\r\n          <p>These URLs represent various resources - any information or content accessed at that location, which can be returned as JSON, HTML, audio files, or images. Often, resources have one or more methods that can be performed on them over HTTP, like GET, POST, PUT and DELETE.</p>\r\n          <p><b>The officeapi.dev only allows you to GET data; all other operations are prohibited.</b></p>\r\n      </section>\r\n\r\n      <section class=\"usage\">\r\n        <h2>Usage</h2>\r\n        <p>Let's make our first API request to the officeapi.dev!</p>\r\n        <p>Open a terminal and use curl or <a href=\"https://httpie.org\" target=\"_blank\">httpie</a> to make the following request to get a character from the API: </p>\r\n        <prism-block [code]=\"'https://officeapi.dev/api/characters/5e93b4a43af44260882e33b0'\"></prism-block>\r\n        <p>After making that request, you will get a response much like the following:</p>\r\n        <prism-block [code]=\"firstAPIResponse\"></prism-block>\r\n        <p>If your response looks slightly different, that's okay - we've most likely updated the response with new data.</p>\r\n      </section>\r\n\r\n      <img fxFlexFill fxLayoutAlign=\"center\" src=\"../assets/1.-mike-office.png\" alt=\"Michael's office\">\r\n\r\n      <section class=\"resources\">\r\n        <h2>Resources</h2>\r\n        <p>The following resources are available through the officeapi:</p>\r\n        <ul>\r\n          <li><span class=\"tag\">quotes</span> string -- the URL root for quote resources</li>\r\n          <li><span class=\"tag\">characters</span> string -- the URL root for character resources</li>\r\n          <li><span class=\"tag\">episodes</span> string -- the URL root for episode resources</li>\r\n          <li><span class=\"tag\">crew</span> string -- the URL root for crew resources</li>\r\n        </ul>\r\n        <br>\r\n        <hr>\r\n        <br>\r\n        <div class=\"resource resources__quotes\">\r\n            <h3>Quotes</h3>\r\n            <p>A quote resource is a phrase said by a character.</p>\r\n            <h4>Endpoints</h4>\r\n            <ul>\r\n              <li><span class=\"tag\">/quotes/</span> -- get a list of all quotes in our database.</li>\r\n              <li><span class=\"tag\">/quotes/:id/</span> -- get a specific quote by id.</li>\r\n<!--              <li><span class=\"tag\">/quotes/character/:id</span> &#45;&#45; get a list of all quotes from a specific character.</li>-->\r\n              <li><span class=\"tag\">/quotes/random</span> -- get a random quote from any character.</li>\r\n            </ul>\r\n\r\n            <p>As an example, if I make a request for a random quote, the response will be similar to the following:</p>\r\n            <br>\r\n            <p>Example request:</p>\r\n            <prism-block [code]=\"'https://officeapi.dev/api/quotes/random'\"></prism-block>\r\n\r\n            <prism-block [code]=\"randomQuoteCode\"></prism-block>\r\n        </div>\r\n\r\n        <div class=\"resource resources__characters\">\r\n            <h3>Characters</h3>\r\n            <p>A character resource is an entity representing a personality portrayed on the tv show.</p>\r\n            <h4>Endpoints</h4>\r\n            <ul>\r\n              <li><span class=\"tag\">/characters/</span> -- get a list of all characters in our database.</li>\r\n              <li><span class=\"tag\">/characters/:id/</span> -- get a specific character by id.</li>\r\n              <li><span class=\"tag\">/characters/random</span> -- get a random character in our database.</li>\r\n            </ul>\r\n\r\n            <p>As an example, if I wanted to get Jim Halpert back from the database, the request would look like the following:</p>\r\n            <br>\r\n            <p>Example request:</p>\r\n            <prism-block [code]=\"'https://officeapi.dev/api/characters/5e93b4f03af44260882e33b1'\"></prism-block>\r\n\r\n            <prism-block [code]=\"characterResourceResponse\"></prism-block>\r\n        </div>\r\n\r\n        <div class=\"resource resources__episodes\">\r\n            <h3>Episodes</h3>\r\n            <p>An episode resource is an entity representing a specific installment from the tv show.</p>\r\n            <p>Our database contains information for each episode from the series.</p>\r\n            <h4>Endpoints</h4>\r\n            <ul>\r\n              <li><span class=\"tag\">/episodes/</span> -- get a list of all episodes in our database.</li>\r\n              <li><span class=\"tag\">/episodes/:id/</span> -- get a specific episode by id.</li>\r\n              <li><span class=\"tag\">/episodes/random</span> -- get a random episode from our database.</li>\r\n            </ul>\r\n\r\n            <p>As an example, if I wanted to get the data related to the pilot episode in season one, the request would look like the following:</p>\r\n            <br>\r\n            <p>Example request:</p>\r\n            <prism-block [code]=\"'https://officeapi.dev/api/episodes/5e94d646f733a1332868e1dc'\"></prism-block>\r\n\r\n            <prism-block [code]=\"episodeResourceResponse\"></prism-block>\r\n        </div>\r\n\r\n        <div class=\"resource resources__crew\">\r\n          <h3>Crew</h3>\r\n          <p>A crew resource is an entity representing a crew member from the tv show. A crew member can be an actor, writer or director, as indicated by the 'role' property on the resource returned.</p>\r\n          <h4>Endpoints</h4>\r\n          <ul>\r\n            <li><span class=\"tag\">/crew/</span> -- get a list of all crew members in our database.</li>\r\n            <li><span class=\"tag\">/crew/:id/</span> -- get a specific crew resource by id.</li>\r\n            <li><span class=\"tag\">/crew/random</span> -- get a random crew member from our database.</li>\r\n          </ul>\r\n\r\n          <p>As an example, if I wanted to get the data related to writer and actor Michael Schur, the request would look like the following:</p>\r\n          <br>\r\n          <p>Example request:</p>\r\n          <prism-block [code]=\"'https://officeapi.dev/api/crew/5e9524139511994a07f9a317'\"></prism-block>\r\n\r\n          <prism-block [code]=\"crewResourceResponse\"></prism-block>\r\n        </div>\r\n\r\n      </section>\r\n    </div>\r\n\r\n      <!-- <img fxFlexFill fxLayoutAlign=\"center\" src=\"../assets/2.-jim-and-pam.png\" alt=\"\"> -->\r\n\r\n    <section fxLayout=\"column\">\r\n        <img fxFlexFill src=\"../assets/4.-office-building.png\" alt=\"The Office Building\">\r\n        <div class=\"footer\">\r\n          <p>The officeapi.dev is free and will always be free! However, maintaining this service costs $$$ and we are but poor programmers. If you feel so inclined, you can make us more productvie and even eternally grateful by buying us a coffee HERE.</p>\r\n\r\n          <p><b>DISCLAIMER:</b> This website and its creators are not affiliated with the NBC, The Office, or any other motion picture or television corporation, parent, or affiliate corporation. All motion pictures, products, and brands mentioned on this website are the respective trademarks and copyrights of their owners. All material on this website is intended for humorous entertainment (satire) purposes only. The content on this website is not necessarily true and should not be regarded as truth.</p>\r\n        </div>\r\n    </section>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/homepage/homepage.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/homepage/homepage.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>homepage works!</p>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrismComponent = /** @class */ (function () {
    function PrismComponent(_renderer, _el) {
        this._renderer = _renderer;
        this._el = _el;
        this.nativeElement = _el.nativeElement;
    }
    PrismComponent.prototype.ngAfterViewInit = function () {
        this.preNode = this._renderer.createElement('pre');
        this.codeNode = this._renderer.createElement('code');
        this._renderer.addClass(this.codeNode, 'language-' + this.language);
        this._renderer.appendChild(this.nativeElement, this.preNode);
        this._renderer.appendChild(this.preNode, this.codeNode);
        this.codeNode.textContent = this.code;
        Prism.highlightElement(this.codeNode);
    };
    PrismComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
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
            template: "",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], PrismComponent);
    return PrismComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
// {path: '/home', component: HomepageComponent},
// {path: '', component: HomepageComponent}
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"American Typewriter\";\n  src: url('AmericanTypewriterRegular.ttf') format(\"truetype\");\n}\n* {\n  color: #2d2d2d;\n}\n.fullscreen_container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: auto;\n  background: #BFC3C6;\n}\n.welcome {\n  margin-top: 25px;\n}\n.welcome__explanation {\n  margin: 50px 0;\n}\n.welcome__example > span {\n  line-height: 40px;\n  height: 40px;\n  background-color: #041528;\n  color: #FCFBFD;\n  text-align: center;\n  border-bottom: solid 3px black;\n}\n.welcome__example > input {\n  height: 40px;\n  border: none;\n  padding: 7px;\n  border-bottom: solid 3px #E2E2E2;\n}\n.welcome__example > button {\n  cursor: pointer;\n  border: none;\n  background-color: #6D8A8D;\n  border-bottom: solid 3px #293B49;\n  color: white;\n}\n.welcome__example-result {\n  margin-top: 15px;\n  background-color: #FCFBFD;\n  color: #2d2d2d;\n}\n.welcome__example-http-container {\n  line-height: 40px;\n  height: 40px;\n  background-color: #293B49;\n  text-align: center;\n  border-bottom: solid 3px #041528;\n}\n.welcome__example-http-container > span {\n  color: #FCFBFD;\n}\n.welcome__example-suggestions {\n  display: flex;\n  font-size: 12px;\n}\n.welcome__example-suggestions-item {\n  cursor: pointer;\n  margin: 5px 0;\n  margin-right: 20px;\n}\n.welcome__example-suggestions-item-italic {\n  font-size: 14px;\n  font-weight: 1000;\n}\n.welcome__example-disclaimer {\n  font-size: 12px;\n}\nsection {\n  margin: 3rem 0;\n}\n.media {\n  margin: 45px 0;\n}\n.footer {\n  font-size: 10px;\n}\n.tag {\n  color: white;\n  padding: 4px;\n  background-color: #041528;\n  border-radius: 5px;\n}\nul > li {\n  margin: 10px 0;\n}\n.resource {\n  margin-bottom: 6rem;\n}\n/* --------------------- MEDIA QUERIES --------------------- */\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 600px) {\n  .content {\n    width: 95%;\n    margin: 0 auto;\n  }\n\n  .welcome {\n    margin-top: 10px;\n  }\n  .welcome__example-http-container {\n    font-size: 10px;\n  }\n}\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (min-width: 600px) {\n  .content {\n    width: 85%;\n    margin: 0 auto;\n  }\n}\n/* Medium devices (landscape tablets, 768px and up) */\n@media only screen and (min-width: 768px) {\n  .content {\n    width: 75%;\n    margin: 0 auto;\n  }\n}\n/* iPad Pro Portrait */\n@media only screen and (min-width: 1024px) {\n  .content {\n    width: 60%;\n    margin: 0 auto;\n  }\n}\n/* Extra Large devices (laptops/desktops, 992px and up) */\n@media only screen and (min-width: 1026px) {\n  .content {\n    width: 40%;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxkZXZ5blxcRG9jdW1lbnRzXFxEZXZlbG9wbWVudFxcb2ZmaWNlYXBpXFxvZmZpY2VhcGkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXGRldnluXFxEb2N1bWVudHNcXERldmVsb3BtZW50XFxvZmZpY2VhcGlcXG9mZmljZWFwaS9zcmNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0NBQUE7RUFDQSw0REFBQTtBQ0RGO0FES0E7RUFDRSxjQUFBO0FDSEY7QURNQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSEY7QURNQTtFQUNFLGdCQUFBO0FDSEY7QURLRTtFQUNFLGNBQUE7QUNISjtBRE1FO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJFN0JlO0VGOEJmLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDSko7QURPRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDTEo7QURRRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUNOSjtBRFNFO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNQSjtBRFVFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJFMURHO0VGMkRILGtCQUFBO0VBQ0EsZ0NBQUE7QUNSSjtBRFNJO0VBQ0UsY0FBQTtBQ1BOO0FEV0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ1RKO0FEV0k7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDVE47QURXTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ1RSO0FEZUU7RUFDRSxlQUFBO0FDYko7QURpQkE7RUFDRSxjQUFBO0FDZEY7QURpQkE7RUFDRSxjQUFBO0FDZEY7QURpQkE7RUFDRSxlQUFBO0FDZEY7QURpQkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRXhHaUI7RUZ5R2pCLGtCQUFBO0FDZEY7QURrQkE7RUFDRSxjQUFBO0FDZkY7QURrQkE7RUFDRSxtQkFBQTtBQ2ZGO0FEdUJBLDhEQUFBO0FBRUEsaURBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGNBQUE7RUNyQkY7O0VEd0JBO0lBQ0UsZ0JBQUE7RUNyQkY7RUR1QkU7SUFDRSxlQUFBO0VDckJKO0FBQ0Y7QUR5QkEsb0VBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGNBQUE7RUN2QkY7QUFDRjtBRDBCQSxxREFBQTtBQUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQ3hCRjtBQUNGO0FEbUNBLHNCQUFBO0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxjQUFBO0VDakNGO0FBQ0Y7QURvQ0EseURBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGNBQUE7RUNsQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OlwiQW1lcmljYW4gVHlwZXdyaXRlclwiO1xyXG4gIHNyYzogdXJsKFwiLi4vZm9udHMvQW1lcmljYW5UeXBld3JpdGVyUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcblxyXG4qIHtcclxuICBjb2xvcjogIzJkMmQyZDtcclxufVxyXG5cclxuLmZ1bGxzY3JlZW5fY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNCRkMzQzY7XHJcbn1cclxuXHJcbi53ZWxjb21lIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxuICAmX19leHBsYW5hdGlvbiB7XHJcbiAgICBtYXJnaW46IDUwcHggMDtcclxuICB9XHJcblxyXG4gICZfX2V4YW1wbGUgPiBzcGFuIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstb2ZmaWNlLWJsdWU7XHJcbiAgICBjb2xvcjogI0ZDRkJGRDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCBibGFjaztcclxuICB9XHJcblxyXG4gICZfX2V4YW1wbGUgPiBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggJGxpZ2h0LWdyZXk7XHJcbiAgfVxyXG5cclxuICAmX19leGFtcGxlID4gYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2RDhBOEQ7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggIzI5M0I0OTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICZfX2V4YW1wbGUtcmVzdWx0IHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGQkZEO1xyXG4gICAgY29sb3I6ICMyZDJkMmQ7XHJcbiAgfVxyXG5cclxuICAmX19leGFtcGxlLWh0dHAtY29udGFpbmVyIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggJGRhcmstZ3JleTtcclxuICAgICYgPiBzcGFuIHtcclxuICAgICAgY29sb3I6ICNGQ0ZCRkQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19leGFtcGxlLXN1Z2dlc3Rpb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICAmLWl0ZW0ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuXHJcbiAgICAgICYtaXRhbGljIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAmX19leGFtcGxlLWRpc2NsYWltZXIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgbWFyZ2luOiAzcmVtIDA7XHJcbn1cclxuXHJcbi5tZWRpYSB7XHJcbiAgbWFyZ2luOiA0NXB4IDA7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLnRhZyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1vZmZpY2UtYmx1ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcblxyXG51bCA+IGxpIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLnJlc291cmNlIHtcclxuICBtYXJnaW4tYm90dG9tOiA2cmVtO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBNRURJQSBRVUVSSUVTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jb250ZW50IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC53ZWxjb21lIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgJl9fZXhhbXBsZS1odHRwLWNvbnRhaW5lciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGVudCB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4vLy8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuLy9AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbi8vICAuY29udGVudCB7XHJcbi8vICAgIHdpZHRoOiA1MCU7XHJcbi8vICAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyAgfVxyXG4vL31cclxuXHJcbi8qIGlQYWQgUHJvIFBvcnRyYWl0ICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjZweCkge1xyXG4gIC5jb250ZW50IHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQW1lcmljYW4gVHlwZXdyaXRlclwiO1xuICBzcmM6IHVybChcIi4uL2ZvbnRzL0FtZXJpY2FuVHlwZXdyaXRlclJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuKiB7XG4gIGNvbG9yOiAjMmQyZDJkO1xufVxuXG4uZnVsbHNjcmVlbl9jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNCRkMzQzY7XG59XG5cbi53ZWxjb21lIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi53ZWxjb21lX19leHBsYW5hdGlvbiB7XG4gIG1hcmdpbjogNTBweCAwO1xufVxuLndlbGNvbWVfX2V4YW1wbGUgPiBzcGFuIHtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MTUyODtcbiAgY29sb3I6ICNGQ0ZCRkQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IGJsYWNrO1xufVxuLndlbGNvbWVfX2V4YW1wbGUgPiBpbnB1dCB7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjRTJFMkUyO1xufVxuLndlbGNvbWVfX2V4YW1wbGUgPiBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZEOEE4RDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICMyOTNCNDk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi53ZWxjb21lX19leGFtcGxlLXJlc3VsdCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0ZCRkQ7XG4gIGNvbG9yOiAjMmQyZDJkO1xufVxuLndlbGNvbWVfX2V4YW1wbGUtaHR0cC1jb250YWluZXIge1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkzQjQ5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjMDQxNTI4O1xufVxuLndlbGNvbWVfX2V4YW1wbGUtaHR0cC1jb250YWluZXIgPiBzcGFuIHtcbiAgY29sb3I6ICNGQ0ZCRkQ7XG59XG4ud2VsY29tZV9fZXhhbXBsZS1zdWdnZXN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi53ZWxjb21lX19leGFtcGxlLXN1Z2dlc3Rpb25zLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4IDA7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi53ZWxjb21lX19leGFtcGxlLXN1Z2dlc3Rpb25zLWl0ZW0taXRhbGljIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwMDtcbn1cbi53ZWxjb21lX19leGFtcGxlLWRpc2NsYWltZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbnNlY3Rpb24ge1xuICBtYXJnaW46IDNyZW0gMDtcbn1cblxuLm1lZGlhIHtcbiAgbWFyZ2luOiA0NXB4IDA7XG59XG5cbi5mb290ZXIge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi50YWcge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MTUyODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG51bCA+IGxpIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5yZXNvdXJjZSB7XG4gIG1hcmdpbi1ib3R0b206IDZyZW07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBNRURJQSBRVUVSSUVTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAud2VsY29tZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAud2VsY29tZV9fZXhhbXBsZS1odHRwLWNvbnRhaW5lciB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuLyogaVBhZCBQcm8gUG9ydHJhaXQgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG4vKiBFeHRyYSBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjZweCkge1xuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufSIsIiR3aGl0ZS10ZXh0LWNvbG9yOiAjRkNGQkZEO1xyXG4kbGlnaHQtZ3JleTogI0UyRTJFMjtcclxuJG9mZmljZS1ibHVlOiAjMDMzRTVFO1xyXG4kZGFyay1vZmZpY2UtYmx1ZTogIzA0MTUyODtcclxuJGdyZXk6ICMyOTNCNDk7XHJcbiRkYXJrLWdyZXk6ICMwNDE1Mjg7XHJcbiR0cmVlLWdyZWVuOiAjNDU4MjM5O1xyXG4kbGlnaHQtZ3JlZW46ICM3N0Q2QzE7XHJcbiR0ZWFsOiAjMUM5MkE3O1xyXG4kZGFyay10cmVlLWdyZWVuOiAjMjczQjJEO1xyXG4kb2ZmaWNlLWJ1aWxkaW5nOiAjNkQ4QThEOyJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(apiService, ref) {
        this.apiService = apiService;
        this.ref = ref;
        this.inputValue = 'quotes/random';
        this.firstAPIResponse = "\n    {\n      \"_id\": \"5e93b4a43af44260882e33b0\",\n      \"firstname\": \"Michael\",\n      \"lastname\": \"Scott\",\n      \"__v\": 0\n    },\n  ";
        this.randomQuoteCode = "\n  {\n    \"data\": {\n      \"_id\": \"5e9668186a66e65486e244a5\",\n      \"content\": \"Bears, Beets, Battlestar Galactica.\",\n      \"character\": {\n        \"_id\": \"5e93b4f03af44260882e33b1\",\n        \"firstname\": \"Jim\",\n        \"lastname\": \"Halpert\",\n        \"__v\": 0\n      },\n      \"__v\": 0\n    }\n }\n  ";
        this.characterResourceResponse = "\n    \"data\": {\n      \"_id\": \"5e93b4f03af44260882e33b1\",\n      \"firstname\": \"Jim\",\n      \"lastname\": \"Halpert\",\n      \"__v\": 0\n    }\n  ";
        this.episodeResourceResponse = "\n  \"data\": {\n    \"_id\": \"5e94d646f733a1332868e1dc\",\n    \"title\": \"Pilot\",\n    \"description\": \"A documentary crew gives a firsthand introduction to the staff of the Scranton branch of the Dunder Mifflin Paper Company, managed by Michael Scott.\",\n    \"airDate\": \"2005-03-24T06:00:00.000Z\",\n    \"__v\": 0\n  }\n  ";
        this.crewResourceResponse = "\n  \"data\": {\n    \"_id\": \"5e9524139511994a07f9a317\",\n    \"name\": \"Michael Schur\",\n    \"role\": \"Writer/Actor\",\n    \"__v\": 0\n  }\n  ";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.get(this.inputValue).subscribe(function (result) {
            _this.response = result;
        });
    };
    AppComponent.prototype.fetchData = function () {
        var _this = this;
        this.apiService.get(this.inputValue).subscribe(function (result) {
            _this.response = null;
            _this.ref.detectChanges();
            if (result.data.length > 5) {
                _this.response = result.data.slice(0, 5);
            }
            else {
                _this.response = result;
            }
        });
    };
    AppComponent.prototype.suggestionClicked = function (value) {
        this.response = null;
        this.inputValue = value;
        this.ref.detectChanges();
        this.fetchData();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var prismjs_prism__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/prism */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs_prism__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_prism__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_prism_angular_prism__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./angular-prism/angular-prism */ "./src/app/angular-prism/angular-prism.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/components/homepage/homepage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.get = function (endpoint) {
        console.log(endpoint);
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + endpoint);
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    url: 'http://localhost:3000/api/'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\devyn\Documents\Development\officeapi\officeapi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map