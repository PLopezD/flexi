let express  = require('express');
let app      = express();
let mongoose = require('mongoose');
let path    = require('path');

let morgan       = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser   = require('body-parser');

let config = require('./config/config.js');
let api = require('./api');

// configuration ===============================================================
mongoose.connect(config.db.url); // connect to our database

app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(bodyParser()); 


app.use("/public", express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use('/api', api);



module.exports = app;