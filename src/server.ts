// use node's built-in http library to create / run web server
import http from 'http';

// run server, listening for http requests / sending http responses
http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    // send basic http response to each request
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello COMP2068');
    res.end();
}).listen(4000);

console.log('Web server running on port 4000');