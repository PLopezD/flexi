let express  = require('express');
let app      = express();
let mongoose = require('mongoose');
let passport = require('passport');
let flash    = require('connect-flash');
let path    = require('path');

let morgan       = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser   = require('body-parser');
let session      = require('express-session');

let config = require('./config/config.js');

// configuration ===============================================================
mongoose.connect(config.db.url); // connect to our database

// require('./config/passport')(passport); // pass passport for configuration

app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(bodyParser()); 


app.use("/public", express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');


app.use(session({ secret: 'worblo' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

// routes ======================================================================
require('./app/routes.js')(app, passport); 

module.exports = app;