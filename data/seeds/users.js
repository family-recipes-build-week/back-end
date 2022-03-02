
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
        "id": 1,
        "username": "keisha", 
        "password": "1234",
      }, 
      {
        "id": 2,
        "username": "wallace",
        "password": "1234",
      }, 
    ]);
  });
};
