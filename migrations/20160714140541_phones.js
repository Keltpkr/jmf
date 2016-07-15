exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('phones', function(table) {
            table.increments('id').primary();
            table.string('label');
            table.string('phone');
            table.timestamps();
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('phones')
    ]);
};