
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('emails').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('emails').insert({
          id: 1,
          label: 'Office',
          email: 'gerald@office.fr',
          created_at:'2016-07-13 00:00:00',
          updated_at:'2016-07-13 00:00:00',
          user_id:1
        }),
        knex('emails').insert({
          id: 2,
          label: 'Home',
          email: 'gerald@home.fr',
          created_at:'2016-07-13 00:00:00',
          updated_at:'2016-07-13 00:00:00',
          user_id:1
        })
      ]);
    });
};
