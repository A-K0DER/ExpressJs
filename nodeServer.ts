 const http = require('http'); //already present on nodeJs


 //http has create server method which takes a callback function as an argument, the call back fn takes two arguments request(req) and response(res)
 const server = http.createServer((req : any, res : any) => {
     
    // http msg
    // 1. Start Line --> taken care by node.
    // 2. header --> we need to take care.
        res.writeHead(200, {'content-type': 'text/html'}); // takes 2 arg (status code, contentType(mime-type))

    // 3. body --> we neeed to do.
        res.write('<h1> Hello World</h1>');
        res.end(); // for closing the connection
 });

 server.listen(3000);