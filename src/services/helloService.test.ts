import { HelloService } from './helloService';

describe('HelloService', () => {
  it('should return the correct hello message', () => {
    const helloService = new HelloService();
    const result = helloService.getHelloMessage();
    expect(result).toBe('Hello World!');
  });
});
