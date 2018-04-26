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
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var tutorialComponent = (function () {
    function tutorialComponent() {
        this.ChildEvent = new core_2.EventEmitter();
    }
    tutorialComponent.prototype.onChange = function (value) {
        this.ChildEvent.emit(value);
    };
    tutorialComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "<h2>Child Tutorial</h2>\n            <label>Enter Child Tutorials Component value</label>\n            <input type=\"text\" #childText (keyup.enter)=\"onChange(childText.value)\"/>\n            <p>Value from Parent AppComponent is: <span>{{parentData}}</span></p>\n            <h5>press enter to update parent componenet</h5>",
            inputs: ["parentData"],
            outputs: ["ChildEvent"]
        }), 
        __metadata('design:paramtypes', [])
    ], tutorialComponent);
    return tutorialComponent;
}());
exports.tutorialComponent = tutorialComponent;
//# sourceMappingURL=tutorial.component.js.map