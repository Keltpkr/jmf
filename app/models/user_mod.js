var knex = require('../config/database_mysql').knex;
var Bookshelf = require('bookshelf')(knex);

//var cascadeDelete = require('bookshelf-cascade-delete');
//Bookshelf.plugin(cascadeDelete.default);

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
	},
    emails: function () {
        var Emails = require('../../app/models/email_mod').Model;
		return this.hasMany(Emails,'user_id');
	}
});

module.exports.Model = Model;