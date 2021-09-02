
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, name: 'Louis', comments:'I like my sunshine apples lolipopps and rainbow unicorns'},
        {id: 2, name: 'Dylan', comments: 'Don\'t lock me in during lockdown'},
        {id: 3, name: 'Alan', comments: 'what do you mean it\'s raining?'},
        {id: 4, name: 'Cris', comments: 'reliable and accurate. can\'t ask for more'}
      ]);
    });
};
