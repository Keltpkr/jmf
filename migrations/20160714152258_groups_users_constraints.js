exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('groups_users', function(table){
            table.integer('group_id')
                .unsigned()
                .references('id')
                .inTable('groups')
                .onDelete('CASCADE');
            table.integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('groups_users', function(table){
            table.dropForeign('group_id')
                .dropColumn('group_id');
            table.dropForeign('user_id')
                .dropColumn('user_id');
        })
    ])
};
