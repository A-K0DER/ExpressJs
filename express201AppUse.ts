const express201Server = require('express');
const appServer201 = express201Server();

//Express : 2 things,
// 1. Router
// 2. Middleware that comprises a webframework.

appServer201.listen(3000);
console.log('Express server started at port : 3000');