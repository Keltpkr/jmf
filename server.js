// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var flash    = require('connect-flash');
var passport = require('passport');

// configuration ===============================================================
app.configure(function() {

	// set up our express application
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.cookieParser()); // read cookies (needed for auth)
	app.use(express.bodyParser()); // get information from html forms

	// required for passport
	app.use(express.session({ secret: 'deadcandance' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
  app.use(flash()); // use connect-flash for flash messages stored in session
});

// routes ======================================================================
// require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
var fs = require("fs");
var routePath = "./app/routes/"; //add one folder then put your route files there my router folder name is routers
fs.readdirSync(routePath).forEach(function(file) {
  if(file.split('.').pop() == 'js'){
    var route = routePath + file;
    require(route)(app);
  }
});

//var config = require('./config')();
// TODO: Terminer le projet
// launch ======================================================================
app.listen(process.env.PORT);
console.log('app listen on port ' + process.env.PORT);
//console.log(process.env.NODE_ENV);

module.exports = app;
