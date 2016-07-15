exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('adresses', function(table){
            table.increments('id').primary();
            table.string('number').notNullable();
            table.string('streetname').notNullable();
            table.string('code').notNullable();
            table.string('townname').notNullable();
            table.timestamps();
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('adresses')
    ]);
};
