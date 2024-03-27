const express201Server = require('express');
const appServer201 = express201Server();

//Express : 2 things,
// 1. Router
// 2. Middleware that comprises a webframework.
// Req ------MIDDLEWARE-----> Res
// A middleware function is any function that has access to req, res, next object. 

// e.g : 1. Request comes in.
//       2. we need to validate user.
//       3. we need to store some things in DB.
//       4. if there is data from the user we need to parse it and store it.
//       5. send a response to the client.

function validateUser(req : any, res : any, next : any){
    // get info out of req obj.
    // do some db operations.
    res.locals.validated = true;
    console.log('Validated');
    next();
}

// this will run validate user to all paths and all methods.
//appServer201.use(validateUser);

// this will run validate user on '/admin' and all methods.
appServer201.use('admin', validateUser);

// this will run validate user on '/' ony and only on get methods.
appServer201.get('/', validateUser);

appServer201.get('/', (req : any, res : any, next : any) =>{
    // get info out of req obj.
    // do some db operations.
    res.locals.validated = true;
    console.log('Validated');
    next();
});

appServer201.get('/', (req : any, res : any, next : any) =>{
    res.send('<h1>Express Home page</h1>');
});

appServer201.get('/admin', (req : any, res : any, next : any) =>{
    res.send('<h1>Admin page</h1>');
});

// everything in express is middleware, 'get' is also a middleware like 'use'.


appServer201.listen(3000);
console.log('Express server started at port : 3000');