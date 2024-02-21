import { HelloController } from "src/controllers/hello.controller";
describe('HelloService', () => {
  it('should return the correct hello message', () => {
    const helloService = new HelloController();
    const result = helloService.sayHello();
    expect(result).toBe('Hello, TSOA!');
  });
});


