
const express = require('express');

// An 'app' is the express function (createApplication) inside the express module invoked and is an express application.
const app = express();

// all is an express method which takes two args, route and a callback function.
app.all('*', (req : any, res : any)=>{

    //express handles basic headers : no need to write them.
    
    res.send('<h1>Express Home page </h1>');

    //express handles the closing of connection.
});

app.listen(3000);
console.log('Express server started at port : 3000');