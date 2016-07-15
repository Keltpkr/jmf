var knex = require('../config/database_mysql').knex;
var Bookshelf = require('bookshelf')(knex);

var Model = Bookshelf.Model.extend({
	tableName: 'users',
	hasTimestamps: true,
	idAttribute: 'id',
    adresses: function () {
        var Adresses = require('../../app/models/adress_mod').Model;
		return this.hasMany(Adresses,'user_id');
	},
    groups: function () {
        var Groups = require('../../app/models/group_mod').Model;
		return this.belongsToMany(Groups);
	},
    phones: function () {
        var Phones = require('../../app/models/phone_mod').Model;
		return this.hasMany(Phones,'user_id');
	}
});

module.exports.Model = Model;