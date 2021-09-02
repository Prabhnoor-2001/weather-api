
exports.up = function(knex) {
  return knex.schema.createTable('reviews', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('comments')
  })

};

exports.down = function(knex) {
  return knex.dropTable('reviews')
};
