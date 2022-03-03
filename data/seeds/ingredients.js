exports.seed = function(knex, Promise) {

  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {

      // Inserts seed entries
      return knex('ingredients').insert([
        {

          "ingredients_id":1,"ingredient_name":"Milk - Buttermilk"
        
        },
        {
          "ingredients_id":2,"ingredient_name":"Asparagus - Frozen"
        },
        {
          "ingredients_id":3,"ingredient_name":"Cheese - Comte"
        },
        {
          "ingredients_id":4,"ingredient_name":"The Pop Shoppe - Black Cherry"
        },
        {
          "ingredients_id":5,"ingredient_name":"Tilapia - Fillets"
        },
        {
          "ingredients_id":6,"ingredient_name":"Pastry - Baked Scones - Mini",
        },
        {
          "ingredients_id":7,"ingredient_name":"Wine - Beringer Founders Estate",
        },
        {
          "ingredients_id":8,"ingredient_name":"Broom - Corn"
        },
        {
          "ingredients_id":9,"ingredient_name":"Squash - Pattypan, Yellow"
        },
        {
          "ingredients_id":10,"ingredient_name":"Bread - Rosemary Focaccia"
        },
        {
          "ingredients_id":11,"ingredient_name":"Pickerel - Fillets"
        },
        {
          "ingredients_id":12,"ingredient_name":"Sugar - Indivingredients_idual Portions"
        },
        {
          "ingredients_id":13,"ingredient_name":"Cheese - Havarti, Roasted Garlic"
        },
        {
          "ingredients_id":14,"ingredient_name":"Mountain Dew"
        },
        {
          "ingredients_id":15,"ingredient_name":"Spinach - Frozen"
        },
        {
          "ingredients_id":16,"ingredient_name":"Soy Protein"
        },
        {
          "ingredients_id":17,"ingredient_name":"Cabbage - Nappa"
        },
        {
          "ingredients_id":18,"ingredient_name":"Napkin White - Starched"
        },
        {
          "ingredients_id":19,"ingredient_name":"Pineapple - Golden"
        },
        {
          "ingredients_id":20,"ingredient_name":"Cheese - Brie, Cups 125g"
        },
        {
          "ingredients_id":21,"ingredient_name":"Island Oasis - Raspberry"
        },
        {
          "ingredients_id":22,"ingredient_name":"Rosemary - Primerba, Paste"
        },
        {
          "ingredients_id":23,"ingredient_name":"Mushroom - Shitake, Fresh"
        },
        {
          "ingredients_id":24,"ingredient_name":"Stock - Veal, Brown"
        },
        {
          "ingredients_id":25,"ingredient_name":"Wine - Baron De Rothschild",
        },
        {
          "ingredients_id":26,"ingredient_name":"Spring Roll Veg Mini"
        },
        {
          "ingredients_id":27,"ingredient_name":"Pork - Sausage Casing"
        },
        {
          "ingredients_id":28,"ingredient_name":"Glaze - Apricot"
        },
        {
          "ingredients_id":29,"ingredient_name":"Wine - Wyndham Estate Bin 777"
        },
        {
          "ingredients_id":30,"ingredient_name":"Crush - Orange, 355ml"
        },
        {
          "ingredients_id":31,"ingredient_name":"Sauce - Roasted Red Pepper"
        },
        {
          "ingredients_id":32,"ingredient_name":"Cookie Chocolate Chip With"
        },
        {
          "ingredients_id":33,"ingredient_name":"Venison - Denver Leg Boneless"
        },
        {
          "ingredients_id":34,"ingredient_name":"Salad Dressing"
        },
        {
          "ingredients_id":35,"ingredient_name":"Sloe Gin - Mcguinness"
        },
        {
          "ingredients_id":36,"ingredient_name":"Juice - Orange, 341 Ml"
        },
        {
          "ingredients_id":37,"ingredient_name":"Onions - Red"
        },
        {
          "ingredients_id":38,"ingredient_name":"Wine - Chardonnay South"
        },
        {
          "ingredients_id":39,"ingredient_name":"Cassis",
        },
        {
          "ingredients_id":40,"ingredient_name":"Bread - Sour Sticks With Onion"
        },
        {
          "ingredients_id":41,"ingredient_name":"Onions Granulated"
        },
        {
          "ingredients_id":42,"ingredient_name":"Mushroom - Crimini"
        },
        {
          "ingredients_id":43,"ingredient_name":"Shrimp - 21/25, Peel And Deviened"
        },
        {
          "ingredients_id":44,"ingredient_name":"Island Oasis - Mango Daiquiri"
        },
        {
          "ingredients_id":45,"ingredient_name":"Foam Espresso Cup Plain White"
        },
        {
          "ingredients_id":46,"ingredient_name":"Wine - Carmenere Casillero Del"
        },
        {
          "ingredients_id":47,"ingredient_name":"Quail Eggs - Canned",
        },
        {
          "ingredients_id":48,"ingredient_name":"Tuna - Canned, Flaked, Light"
        },
        {
          "ingredients_id":49,"ingredient_name":"Longos - Greek Salad"
        },
        {
          "ingredients_id":50,"ingredient_name":"Shrimp - Baby, Warm Water"
        }
      ]);
    
    });

  };
