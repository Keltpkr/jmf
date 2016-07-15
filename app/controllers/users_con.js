var Countries = require('../collections/countries_col').Collection;
var Country = require('../models/contry_mod').Model;


module.exports = {
	// GET /league/:id
	getUser: function (req, res, next) {
        User.forge({ id: req.params.id })
		.fetch({withRelated: ['groups','phones','adresses','emails'], require: true})
		.then(function (model) {
		    res.json(model);
		})
		.catch(function (error) {
			res.status(500).json({errormsg: error.message});
		});
	},
    getUsers: function (req, res, next) {
        Users.forge()
		.fetch({withRelated: ['groups','phones','adresses','emails'], require: true})
		.then(function (model) {
            res.json(model);
		})
		.catch(function (error) {
			res.status(500).json({errormsg: error.message});
		});
	},
    AddUser: function (req, res, next) {
        /*
        var user = req.user;
        var userJSON = user.toJSON()
        myCollectionUsers.forge()
		.fetch({withRelated: ['country'], require: true})
		.then(function (model) {
            res.render('leagues.ejs', { leagues: model.toJSON(),user:userJSON});
		})
		.otherwise(function (error) {
			res.status(500).json({msg: error.message});
		});
		*/
	}
}