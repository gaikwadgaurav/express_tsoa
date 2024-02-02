"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helloService_1 = require("./helloService");
describe('HelloService', () => {
    it('should return the correct hello message', () => {
        const helloService = new helloService_1.HelloService();
        const result = helloService.getHelloMessage();
        expect(result).toBe('Hello World!');
    });
});
