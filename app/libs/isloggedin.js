// route middleware to make sure
module.exports = function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

    // if they aren't redirect them to the home page
    req.flash('signupMessage', 'You need to log in to access to this page.');
    res.redirect("/");
    return null;
}