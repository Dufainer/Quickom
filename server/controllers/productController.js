const Product = require('../models/Product');

async function getAll(req, res, next) {
  try {
    // TODO: filter by category, availability
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    // TODO: validate required fields and price
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    // TODO: partial update support
    const product = await Product.update(req.params.id, req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    await Product.delete(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create, update, remove };
