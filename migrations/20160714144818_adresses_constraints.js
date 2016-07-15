exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('adresses', function(table){
            table.integer('country_id')
                .unsigned()
                .references('id')
                .inTable('countries');
             table.integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users');           
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('adresses', function(table){
            table.dropForeign('country_id')
                .dropColumn('country_id')
            table.dropForeign('user_id')
                .dropColumn('user_id');
        })
    ])
};