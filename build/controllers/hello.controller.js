"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloController = void 0;
const runtime_1 = require("@tsoa/runtime");
let HelloController = class HelloController extends runtime_1.Controller {
    async sayHello() {
        return 'Hello, TSOA!';
    }
};
exports.HelloController = HelloController;
__decorate([
    (0, runtime_1.Get)()
], HelloController.prototype, "sayHello", null);
exports.HelloController = HelloController = __decorate([
    (0, runtime_1.Route)('hello')
], HelloController);
