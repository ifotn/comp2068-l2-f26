"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// use node's built-in http library to create / run web server
const http_1 = __importDefault(require("http"));
// run server, listening for http requests / sending http responses
http_1.default.createServer((req, res) => {
    // send basic http response to each request
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello COMP2068');
    res.end();
}).listen(4000);
console.log('Web server running on port 4000');
