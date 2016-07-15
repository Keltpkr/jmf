var knexfile =require('../../knexfile.js');
var knex = require('knex')(knexfile[process.env.NODE_ENV]);

module.exports.knex = knex;