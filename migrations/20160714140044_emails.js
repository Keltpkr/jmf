exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('emails', function(table){
      table.increments('id').primary();
      table.string('label');
      table.string('email').notNullable();
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('emails')
  ]);
};