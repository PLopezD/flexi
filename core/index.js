require("babel/register");
require('./server');

var config = require('./config/config');
var app = require('./server');
var logger = require('./util/logger');  

app.listen(config.port);
logger.log('Listening on http://localhost:' + config.port);


