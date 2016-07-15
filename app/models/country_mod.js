var knex = require('../config/database_mysql').knex;
var Bookshelf = require('bookshelf')(knex);

var Model = Bookshelf.Model.extend({
	tableName: 'countries',
	hasTimestamps: true,
	idAttribute: 'id',
});

module.exports.Model = Model;