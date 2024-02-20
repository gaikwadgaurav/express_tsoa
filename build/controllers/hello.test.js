"use strict";
const parse = require('./hello.controller');
describe('HelloService', () => {
    it('should return the correct hello message', () => {
        const helloService = new parse();
        const result = helloService.sayHello();
        expect(result).toBe('Hello, TSOA!');
    });
});
// import { HelloController } from './hello.controller';
// describe('HelloController', () => {
//   let helloController = HelloController;
//   beforeEach(() => {
//     helloController = new HelloController();
//   });
//   it('should return "Hello, TSOA!" when sayHello is called', async () => {
//     const result = await helloController.sayHello();
//     expect(result).toBe('Hello, TSOA!');
//   });
//   // You can add more test cases here for edge cases or additional scenarios
// });
