var isLoggedIn = require('../../app/libs/isloggedin.js');
var usersController = require('../controllers/users_con.js');

module.exports = function(app, passport) {
	// =====================================
	// Users =============================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
    app.get('/users', usersController.getUsers);
    app.get('/user/:id', usersController.getUser);
    app.post('/user_add', usersController.addUser);
    app.get('/user_del/:id', usersController.delUser);
    app.post('/user_update/:id', usersController.updateUser);
}
