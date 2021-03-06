
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          "id": 1,
          "user_id": 4,
          "title": "Appetizer - Spring Roll, Veg",
          "source": "Jennilee",
          "notes": "Reverse-engineered secondary capacity"
        }, {
          "id": 2,
          "user_id": 1,
          "title": "Pomello",
          "source": "Lester",
          "notes": "Re-engineered empowering workforce"
        }, {
          "id": 3,
          "user_id": 5,
          "title": "Nantuket Peach Orange",
          "source": "Gasparo",
          "notes": "Digitized demand-driven flexibility"
        }, {
          "id": 4,
          "user_id": 5,
          "title": "Dikon",
          "source": "Theresita",
          "notes": "Universal multimedia process improvement"
        }, {
          "id": 5,
          "user_id": 5,
          "title": "Bar Mix - Pina Colada, 355 Ml",
          "source": "Opaline",
          "notes": "Self-enabling asymmetric artificial intelligence"
        }, {
          "id": 6,
          "user_id": 2,
          "title": "Halibut - Steaks",
          "source": "Gram",
          "notes": "Enterprise-wide object-oriented adapter"
        }, {
          "id": 7,
          "user_id": 1,
          "title": "Wine - Ej Gallo Sierra Valley",
          "source": "Winnie",
          "notes": "Function-based global attitude"
        }, {
          "id": 8,
          "user_id": 5,
          "title": "Pasta - Elbows, Macaroni, Dry",
          "source": "Malinde",
          "notes": "Inverse logistical algorithm"
        }, {
          "id": 9,
          "user_id": 1,
          "title": "Bread - Kimel Stick Poly",
          "source": "Kelcie",
          "notes": "Triple-buffered bottom-line monitoring"
        }, {
          "id": 10,
          "user_id": 1,
          "title": "Vinegar - Tarragon",
          "source": "Roana",
          "notes": "Public-key optimal help-desk"
        }, {
          "id": 11,
          "user_id": 2,
          "title": "Cheese - Comte",
          "source": "Jackie",
          "notes": "Seamless foreground algorithm"
        }, {
          "id": 12,
          "user_id": 1,
          "title": "Muffin Carrot - Individual",
          "source": "Marybeth",
          "notes": "User-centric radical system engine"
        }, {
          "id": 13,
          "user_id": 1,
          "title": "Aromat Spice / Seasoning",
          "source": "Berri",
          "notes": "Multi-lateral intermediate flexibility"
        }, {
          "id": 14,
          "user_id": 2,
          "title": "Cake - Mini Potato Pancake",
          "source": "Jacob",
          "notes": "Triple-buffered cohesive database"
        }, {
          "id": 15,
          "user_id": 4,
          "title": "Flower - Dish Garden",
          "source": "Meir",
          "notes": "Public-key mission-critical frame"
        }, {
          "id": 16,
          "user_id": 2,
          "title": "Muffin Batt - Ban Dream Zero",
          "source": "Alyda",
          "notes": "Inverse transitional support"
        }, {
          "id": 17,
          "user_id": 4,
          "title": "Beer - Rickards Red",
          "source": "Jodie",
          "notes": "Robust scalable parallelism"
        }, {
          "id": 18,
          "user_id": 3,
          "title": "Cheese - Parmesan Cubes",
          "source": "Euell",
          "notes": "Up-sized mission-critical interface"
        }, {
          "id": 19,
          "user_id": 1,
          "title": "Beef - Sushi Flat Iron Steak",
          "source": "Julita",
          "notes": "Universal responsive project"
        }, {
          "id": 20,
          "user_id": 1,
          "title": "Crab Brie In Phyllo",
          "source": "Viv",
          "notes": "Face to face analyzing implementation"
        }, {
          "id": 21,
          "user_id": 3,
          "title": "Wine - Winzer Krems Gruner",
          "source": "Nigel",
          "notes": "Optimized scalable protocol"
        }, {
          "id": 22,
          "user_id": 1,
          "title": "Cheese - Fontina",
          "source": "Jane",
          "notes": "Digitized discrete parallelism"
        }, {
          "id": 23,
          "user_id": 1,
          "title": "Table Cloth 54x72 Colour",
          "source": "Cazzie",
          "notes": "Inverse 3rd generation attitude"
        }, {
          "id": 24,
          "user_id": 4,
          "title": "Monkfish - Fresh",
          "source": "Dorthy",
          "notes": "Optional 4th generation service-desk"
        }, {
          "id": 25,
          "user_id": 1,
          "title": "Pepper - Cayenne",
          "source": "Drusie",
          "notes": "Face to face contextually-based hierarchy"
        }, {
          "id": 26,
          "user_id": 1,
          "title": "Appetizer - Chicken Satay",
          "source": "Peder",
          "notes": "Adaptive asynchronous installation"
        }, {
          "id": 27,
          "user_id": 4,
          "title": "Evaporated Milk - Skim",
          "source": "Ricki",
          "notes": "Expanded national monitoring"
        }, {
          "id": 28,
          "user_id": 2,
          "title": "Soup - Clam Chowder, Dry Mix",
          "source": "Kassia",
          "notes": "Configurable intermediate local area network"
        }, {
          "id": 29,
          "user_id": 2,
          "title": "Tortillas - Flour, 12",
          "source": "Charlean",
          "notes": "Total actuating focus group"
        }, {
          "id": 30,
          "user_id": 2,
          "title": "Pie Shells 10",
          "source": "Alexa",
          "notes": "Implemented radical conglomeration"
        }, {
          "id": 31,
          "user_id": 3,
          "title": "Muffin - Bran Ind Wrpd",
          "source": "Jorrie",
          "notes": "Grass-roots holistic productivity"
        }, {
          "id": 32,
          "user_id": 3,
          "title": "Fish - Soup Base, Bouillon",
          "source": "Verile",
          "notes": "Seamless dynamic support"
        }, {
          "id": 33,
          "user_id": 5,
          "title": "Cheese - Ricotta",
          "source": "Elene",
          "notes": "Mandatory mission-critical migration"
        }, {
          "id": 34,
          "user_id": 4,
          "title": "Teriyaki Sauce",
          "source": "Stephani",
          "notes": "Monitored eco-centric success"
        }, {
          "id": 35,
          "user_id": 1,
          "title": "Wine - Saint - Bris 2002, Sauv",
          "source": "Valentina",
          "notes": "Advanced 4th generation flexibility"
        }, {
          "id": 36,
          "user_id": 4,
          "title": "Pears - Fiorelle",
          "source": "Nathalia",
          "notes": "Phased asynchronous info-mediaries"
        }, {
          "id": 37,
          "user_id": 5,
          "title": "Shrimp, Dried, Small / Lb",
          "source": "Ole",
          "notes": "User-centric contextually-based success"
        }, {
          "id": 38,
          "user_id": 2,
          "title": "Irish Cream - Baileys",
          "source": "Osbert",
          "notes": "Proactive 24 hour analyzer"
        }, {
          "id": 39,
          "user_id": 1,
          "title": "Tumeric",
          "source": "Lemmy",
          "notes": "Future-proofed clear-thinking system engine"
        }, {
          "id": 40,
          "user_id": 1,
          "title": "Gatorade - Xfactor Berry",
          "source": "Aldo",
          "notes": "User-friendly foreground extranet"
        }, {
          "id": 41,
          "user_id": 3,
          "title": "Bread Crumbs - Panko",
          "source": "Cameron",
          "notes": "Diverse executive toolset"
        }, {
          "id": 42,
          "user_id": 1,
          "title": "Gingerale - Schweppes, 355 Ml",
          "source": "Elsi",
          "notes": "Stand-alone secondary encryption"
        }, {
          "id": 43,
          "user_id": 3,
          "title": "Longos - Grilled Chicken With",
          "source": "Sharron",
          "notes": "Sharable eco-centric contingency"
        }, {
          "id": 44,
          "user_id": 2,
          "title": "Quail - Whole, Boneless",
          "source": "Ab",
          "notes": "Profound fault-tolerant definition"
        }, {
          "id": 45,
          "user_id": 3,
          "title": "Beef - Flank Steak",
          "source": "Bondy",
          "notes": "Distributed uniform help-desk"
        }, {
          "id": 46,
          "user_id": 5,
          "title": "Plasticforkblack",
          "source": "Jessika",
          "notes": "Phased transitional policy"
        }, {
          "id": 47,
          "user_id": 2,
          "title": "Octopus",
          "source": "Moore",
          "notes": "De-engineered responsive installation"
        }, {
          "id": 48,
          "user_id": 2,
          "title": "Pineapple - Golden",
          "source": "Westbrooke",
          "notes": "Devolved disintermediate productivity"
        }, {
          "id": 49,
          "user_id": 2,
          "title": "Wine - Ej Gallo Sonoma",
          "source": "Dru",
          "notes": "Configurable analyzing interface"
        }, {
          "id": 50,
          "user_id": 3,
          "title": "Club Soda - Schweppes, 355 Ml",
          "source": "Teodor",
          "notes": "Synergized dynamic local area network"
        }, 
      ]);
    });
};
