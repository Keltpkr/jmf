exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('phones', function(table){
            table.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('phones', function(table){
            table.dropForeign('user_id')
            .dropColumn('user_id');
        })
    ])
};