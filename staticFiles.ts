const staticServer = require('express');
const staticApp = staticServer();

//app(staticApp) comes with  use method which takes one arg(for now) i.e : callback function

staticApp.use(staticServer.static('public'));

staticApp.listen(3000);
console.log('Express server started at port : 3000');