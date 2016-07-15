
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('adresses').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('adresses').insert({
          id: 1,
          number: '7',
          streetname: 'route de Vierzon',
          code:'18110',
          townname:'Allogny',
          created_at:'2016-07-13 00:00:00',
          created_at:'2016-07-13 00:00:00',
          user_id:1
        }),
        knex('adresses').insert({
          id: 2,
          number: '2',
          streetname: 'rue des Feuilles',
          code:'18230',
          townname:'St Doulchard',
          created_at:'2016-07-13 00:00:00',
          created_at:'2016-07-13 00:00:00',
          user_id:2
        }),
        knex('adresses').insert({
          id: 3,
          number: '18',
          streetname: 'rue des Cailloux',
          code:'72320',
          townname:'Concon sur Sarthe',
          created_at:'2016-07-13 00:00:00',
          created_at:'2016-07-13 00:00:00',
          user_id:1
        }),
        knex('adresses').insert({
          id: 4,
          number: '2',
          streetname: 'rue des Muriers',
          code:'44000',
          townname:'Nantes',
          created_at:'2016-07-13 00:00:00',
          created_at:'2016-07-13 00:00:00',
          user_id:2
        }),
      ]);
    });
};
