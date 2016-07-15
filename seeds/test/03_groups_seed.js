exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('groups').insert({
          id: 1,
          groupname: 'St Doulchard',
          created_at:'2016-07-13 00:00:00',
          updated_at:'2016-07-13 00:00:00'
        }),
        knex('groups').insert({
          id: 2,
          groupname: 'Orléans',
          created_at:'2016-07-13 00:00:00',
          updated_at:'2016-07-13 00:00:00'
        })
      ]);
    });
};