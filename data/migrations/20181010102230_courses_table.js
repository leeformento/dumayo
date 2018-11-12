exports.up = function(knex, Promise) {
  return knex.schema.createTable('courses', function(tbl) { // name and callback function
    // primary key called id
    tbl.increments(); // by default creates and id field that autoincrements ---------.primary (PK)------, COULD ALSO CHANGE NAME,,,

    tbl.string('name', 255).notNullable(); // name, size, make sure it isnt null
    tbl
      .integer('track_id')
      .unsigned()
      .references('id')
      .inTable('tracks');
  });
};

exports.down = function(knex, Promise) {
  // rollback
  return knex.schema.dropTableIfExists('courses');
};
