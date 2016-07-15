var MySQL = {
    connectionLimit : 100, //important
    host: process.env.ip,
    user: 'keltpkr',
    password: '',
    database: 'jmf_test',
    charset: 'utf8',
    debug    : false
}
var knex = require('knex')({
    client: 'mysql',
    connection: MySQL,
    debug: false
});

module.exports.knex = knex;