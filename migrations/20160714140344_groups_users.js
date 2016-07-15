exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('groups_users', function(table){
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('groups_users')
  ]);
};