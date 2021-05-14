const db = require("../db/connection");

async function productExists(request, response, next) {
  const error = { status: 404, message: `Product cannot be found.` };
  const { productId } = request.params;
  if (!productId) return next(error);

  const product = await db("products").where({ product_id: productId }).first();
  if (!product) return next(error);

  response.locals.product = product;
  next();
}

async function read(_request, response, _next) {
  const { product } = response.locals;
  response.json({ data: product });
}

async function list(_request, response, _next) {
  const products = await db("products");
  response.json({ data: products });
}

module.exports = {
  read: [productExists, read],
  list: [list],
};
