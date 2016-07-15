
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('phones').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('phones').insert({
          id: 1,
          phone: '0123456789',
          label: 'Home',
          created_at:'2016-07-13 00:00:00',
          updated_at:'2016-07-13 00:00:00',
           user_id:1
        }),
        knex('phones').insert({
          id: 2,
          phone: '9876543210',
          label: 'Office',
          created_at:'2016-07-13 00:00:00',
          updated_at:'2016-07-13 00:00:00',
          user_id:1
        }),
        knex('phones').insert({
          id: 3,
          phone: '0011223344',
          label: 'Office',
          created_at:'2016-07-13 00:00:00',
          updated_at:'2016-07-13 00:00:00',
          user_id:2
        }),
        knex('phones').insert({
          id: 4,
          phone: '4433221100',
          label: 'Office',
          created_at:'2016-07-13 00:00:00',
          updated_at:'2016-07-13 00:00:00',
          user_id:2
        })
      ]);
    });
};
