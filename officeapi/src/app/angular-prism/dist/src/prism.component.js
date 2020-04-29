"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
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
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PrismComponent.prototype, "code", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PrismComponent.prototype, "language", void 0);
PrismComponent = __decorate([
    core_1.Component({
        selector: 'prism-block',
        template: ``,
    }),
    __metadata("design:paramtypes", [core_1.Renderer2, core_1.ElementRef])
], PrismComponent);
exports.PrismComponent = PrismComponent;
//# sourceMappingURL=prism.component.js.map