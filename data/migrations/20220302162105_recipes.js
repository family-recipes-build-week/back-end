
exports.up = async function(knex, Promise) {
    await knex.schema.createTable('users', tbl => {
        tbl.increments();
    
        tbl
          .string('username', 255)
          .notNullable()
          .unique();
    
        tbl
          .string('password', 128)
          .notNullable();
      });
    
      await knex.schema.createTable('recipes', tbl => {
        tbl.increments();
    
        tbl
          .integer('user_id')
          .notNullable()
    
        tbl
          .string('title')
          .notNullable()
          .unique();
        
        tbl.string('source');
    
        tbl.string('notes');
      });
    
      await knex.schema.createTable('ingredients', tbl => {
        tbl.increments('ingredients_id');
        
        tbl
          .integer('ingredient_name')
          .notNullable()
      });
    
      await knex.schema.createTable('instructions', tbl => {
        tbl.increments('instructions_id');
    
        tbl
          .string('instruction_steps')
          .notNullable();
      });
    
      await knex.schema.createTable('tags', tbl => {
        tbl.increments('tags_id');
  
        tbl
          .string('tag')
          .notNullable();
      });
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('tags');
};
