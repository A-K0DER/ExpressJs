const path = require('path');


const express = require('express');
const app = express();

const helmet = require('helmet');

app.use(express.static('public'));// serve static file.
app.use(express.json()); //parse json
app.use(express.urlencoded({extended : false})); //url encoded data in req.body.
app.use(helmet());
//app.set() // takes two args: (key, value). : see docs.

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//-- FLOW of Server Rendering
// 1. Express as we know it happens. This file.
// 2. We define a view engine.
//     -EJS.
//     -Mustache.
//     -Handlebars.
//     -Jade/Pug.
// 3. inside one of our routes, we have a res.render.
// 2. we pass res.render 2 things:
//    - the file we want to use.
//    - data we want to send to that file.
// 5.Express uses node module for our specified view engine and parses the file.
//    - combines everything and generates html, css, js for browser to understand.



app.get('/', (req, res, next) => {
    res.render('index');
});


app.listen(3000);