const expressServer = require('express');
const appServer = expressServer();

// appServer has different methods for CRUD operations:
// HTTP/rest verbs
// 1. GET --> Read
// 2. POST --> Create
// 3. PUT --> Update
// 4. DELETE --> Delete
// 5. ALL --> accepts any verb, its an express thing.

// 1st arg :path, 2nd arg callback function to return response if HTTP request mathces THIS verb that is made to the path in arg 1.

// appServer.all('/', (req : any, res : any) => {
//     res.send('<h1>Express Home page All</h1>');
// });

appServer.get('/', (req : any, res : any) => {
    res.send('<h1>Express Home page GET</h1>');
});

appServer.post('/', (req : any, res : any) => {
    res.send('<h1>Express Home page POST</h1>');
});

appServer.delete('/', (req : any, res : any) => {
    res.send('<h1>Express Home page DELETE</h1>');
});

appServer.put('/', (req : any, res : any) => {
    res.send('<h1>Express Home page PUT</h1>');
});


appServer.listen(3000);
console.log('Express server started at port : 3000');