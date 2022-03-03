
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
        "id": 1,
        "username": "keisha", 
        "password": "$2a$31$vj2aWeooz7lHOusaG2C7ye",
      }, 
      {
        "id": 2,
        "username": "kei",
        "password": "$2a$31$nQr/EJNqFNopgptOKXroeu",
      }, 
    ]);
  });
};
