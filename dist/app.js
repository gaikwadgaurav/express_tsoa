"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helpers_1 = require("./helpers/helpers");
const helloService_1 = require("./services/helloService");
const app = (0, express_1.default)();
const port = 3000;
const helloService = new helloService_1.HelloService();
app.get('/', (req, res) => {
    const helloMessage = helloService.getHelloMessage();
    const capitalizedMessage = (0, helpers_1.capitalizeString)(helloMessage);
    res.send(capitalizedMessage);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
