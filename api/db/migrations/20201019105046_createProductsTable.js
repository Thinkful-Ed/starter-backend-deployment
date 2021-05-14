exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("product_id");
    table.string("product_name");
    table.string("aisle");
    table.string("department");
    table.float("price", 10, 2);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
