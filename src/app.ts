

import express, { Request, Response } from 'express';
import { capitalizeString } from './helpers/helpers';
import { HelloService } from './services/helloService';

const app = express();
const port = 3000;
const helloService = new HelloService();

app.get('/', (req: Request, res: Response) => {
    const helloMessage = helloService.getHelloMessage();
    const capitalizedMessage = capitalizeString(helloMessage);
    res.send(capitalizedMessage);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
