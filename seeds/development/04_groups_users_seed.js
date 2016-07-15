exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups_users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('groups_users').insert({
          group_id: 1,
          user_id: 1,
          created_at:'2016-07-13 00:00:00',
          updated_at:'2016-07-13 00:00:00'
        }),
        knex('groups_users').insert({
          group_id: 2,
          user_id: 2,
          created_at:'2016-07-13 00:00:00',
          updated_at:'2016-07-13 00:00:00'
        })
      ]);
    });
};