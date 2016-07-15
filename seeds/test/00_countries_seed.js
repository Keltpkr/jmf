
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('countries').insert({
          id: 1,
          countryname: 'France',
          countrycode: 'FR',
          countryisocode: 'FRA',
          created_at:'2016-07-13 00:00:00',
          updated_at:'2016-07-13 00:00:00'
        }),
        knex('countries').insert({
          id: 2,
          countryname: 'Belgique',
          countrycode: 'BE',
          countryisocode: 'BEL',
          created_at:'2016-07-13 00:00:00',
          countryname:'2016-07-13 00:00:00'
        })
      ]);
    });
};
