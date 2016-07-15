
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          id: 1,
          firstname: 'Gérald',
          lastname:'babin',
          birthdate:'1972-12-25',
          created_at:'2016-07-13 00:00:00',
          created_at:'2016-07-13 00:00:00',
          active:false
        }),
        knex('users').insert({
          id: 2,
          firstname: 'Marie',
          lastname:'Hannequart',
          birthdate:'1981-12-13',
          created_at:'2016-07-13 00:00:00',
          created_at:'2016-07-13 00:00:00',
          active:false
        })
      ]);
    });
};
