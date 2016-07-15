exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('users', function(table){
            table.integer('country_id')
                .unsigned()
                .references('id')
                .inTable('countries');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('users', function(table){
            table.dropForeign('country_id')
                .dropColumn('country_id')
        })
    ])
};
