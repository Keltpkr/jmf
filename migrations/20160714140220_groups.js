exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('groups', function(table){
      table.increments('id').primary();
      table.string('groupname');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('groups')
  ]);
};