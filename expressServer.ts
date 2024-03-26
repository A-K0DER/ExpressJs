const path = require('path');
const express = require('express');

// An 'app' is the express function (createApplication) inside the express module invoked and is an express application.
const app = express();
//serve static files.
app.use(express.static('public'));

// all is an express method which takes two args, route and a callback function.
app.all('/', (req : any, res : any)=>{

    //express handles basic headers : no need to write them.
    
    //res.send('<h1>Express Home page </h1>');
    console.log(path.join(__dirname + '/node.html'));
    res.sendFile(path.join(__dirname + '/node.html')); //relative path won't work only absolute path is required.
    //express handles the closing of connection.
});

app.all('*', (req : any, res : any)=>{
    res.send('<h1>404 Page Not Found</h1>');
});


app.listen(3000);
console.log('Express server started at port : 3000');