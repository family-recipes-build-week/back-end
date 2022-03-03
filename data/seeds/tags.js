
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {
          "tags_id": 1,
          "tag": "seafood"        
        },
        {
          "tags_id": 2,
          "tag": "desserts"
        },
        {
          "tags_id": 3,
          "tag": "stew"
        },
        {
          "tags_id": 4,
          "tag": "desserts"
        },
        {
          "tags_id": 5,
          "tag": "sandwich"
        },
        {
          "tags_id": 6,
          "tag": "seafood"
        },
        {
          "tags_id": 7,
          "tag": "sandwich"
        },
        {
          "tags_id": 8,
          "tag": "sandwich"
        },
        {
          "tags_id": 9,
          "tag": "salad"
        },
        {
          "tags_id": 10,
          "tag": "soup"
        },
        {
          "tags_id": 11,
          "tag": "pie"
        },
        {
          "tags_id": 12,
          "tag": "pasta"
        },
        {
          "tags_id": 13,
          "tag": "soup"
        },
        {
          "tags_id": 14,
          "tag": "soup"
        },
        {
          "tags_id": 15,
          "tag": "pie"
        },
        {
          "tags_id": 16,
          "tag": "seafood"
        },
        {
          "tags_id": 17,
          "tag": "stew"        
        },
        {
          "tags_id": 18,
          "tag": "sandwich"
        },
        {
          "tags_id": 19,
          "tag": "stew"
        },
        {
          "tags_id": 20,
          "tag": "stew"        
        },
        {
          "tags_id": 21,
          "tag": "sandwich"
        },
        {
          "tags_id": 22,
          "tag": "desserts"
        },
        {
          "tags_id": 23,
          "tag": "stew"
        },
        {
          "tags_id": 24,
          "tag": "pie"
        },
        {
          "tags_id": 25,
          "tag": "seafood"
        },
        {
          "tags_id": 26,
          "tag": "sandwich"
        },
        {
          "tags_id": 27,
          "tag": "desserts"
        },
        {
          "tags_id": 28,
          "tag": "desserts"
        },
        {
          "tags_id": 29,
          "tag": "sandwich"
        },
        {
          "tags_id": 30,
          "tag": "soup"
        },
        {
          "tags_id": 31,
          "tag": "desserts"
        },
        {
          "tags_id": 32,
          "tag": "pie"
        },
        {
          "tags_id": 33,
          "tag": "pasta"
        },
        {
          "tags_id": 34,
          "tag": "stew"
        },
        {
          "tags_id": 35,
          "tag": "seafood"
        },
        {
          "tags_id": 36,
          "tag": "desserts"
        },
        {
          "tags_id": 37,
          "tag": "stew"
        },
        {
          "tags_id": 38,
          "tag": "pie"
        },
        {
          "tags_id": 39,
          "tag": "pie"        
        },
        {
          "tags_id": 40,
          "tag": "pie"
        },
        {
          "tags_id": 41,
          "tag": "soup"
        },
        {
          "tags_id": 42,
          "tag": "desserts"
        },
        {
          "tags_id": 43,
          "tag": "pasta"
        },
        {
          "tags_id": 44,
          "tag": "soup"
        },
        {
          "tags_id": 45,
          "tag": "stew"
        },
        {
          "tags_id": 46,
          "tag": "pasta"
        },
        {
          "tags_id": 47,
          "tag": "sandwich"
        },
        {
          "tags_id": 48,
          "tag": "soup"
        },
        {
          "tags_id": 49,
          "tag": "soup"
        },
        {
          "tags_id": 50,
          "tag": "salad"
        },
      ]);
    });
};
