import { Controller, Get, Route } from '@tsoa/runtime';

@Route('hello')
export class HelloController extends Controller {
  @Get()
  public async sayHello(): Promise<string> {
    return 'Hello, TSOA!';
  }
}
