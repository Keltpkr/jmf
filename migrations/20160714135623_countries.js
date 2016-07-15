exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('countries', function(table){
      table.increments('id').primary();
      table.string('countryname').notNullable();
      table.string('countrycode',2).notNullable();
      table.string('countryisocode',3).notNullable();
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('countries')
  ]);
};