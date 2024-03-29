const express = require('express');
const apps = express();
const helmet = require('helmet');

// apps.use(helmet());
apps.use(express.static('public'));
apps.use(express.json());
apps.use(express.urlencoded({extended : false}));


apps.post('/ajax', (req, res) => {
    console.log(req.body);
    res.json('test');
});

apps.listen(3000);
console.log('Express server started at port : 3000');