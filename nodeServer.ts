 const http = require('http'); //already present on nodeJs
 const fs = require('fs');

 //http has create server method which takes a callback function as an argument, the call back fn takes two arguments request(req) and response(res)
 const server = http.createServer((req : any, res : any) => {
     if(req.url === '/')
     {
        // http msg
            // 1. Start Line --> taken care by node.
            // 2. header --> we need to take care.
            res.writeHead(200, {'content-type': 'text/html'}); // takes 2 arg (status code, contentType(mime-type))
            var htmlData = fs.readFileSync('node.html');
            //console.log(htmlData);
            // 3. body --> we neeed to do.
            res.write(htmlData);
            res.end(); // for closing the connection
     }
     else if(req.url === '/testimg.jpg'){
        res.writeHead(200, {'content-type': 'image/jpg'});
        var image = fs.readFileSync('testimg.jpg');
        res.write(image);
        res.end();
     }
     else if(req.url === '/style.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        var css = fs.readFileSync('style.css');
        res.write(css);
        res.end();
     }
     else
     {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h4>Not the Page you are looking for</h4>');
        res.end();
     }
 });

 server.listen(3000);