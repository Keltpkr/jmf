process.env.NODE_ENV = 'test';
var knexfile = require('./knexfile.js');
var knex = require('knex')(knexfile[process.env.NODE_ENV]);
knex.migrate.rollback()
    .then(function() {
        knex.migrate.latest()
        console.log('done');
    });
