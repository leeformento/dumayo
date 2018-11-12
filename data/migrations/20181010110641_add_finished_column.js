exports.up = function(knex, Promise) {
  return knex.schema.table('courses', function(tbl) {
    tbl.boolean('finished').defaultTo(0); // sqlite3 == null
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('courses', function(tbl) {
    tbl.dropColumn('finished');
  });
};
