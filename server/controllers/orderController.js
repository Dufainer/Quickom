const Order = require('../models/Order');

async function getAll(req, res, next) {
  try {
    // TODO: query with filters (status, date range, customer)
    const orders = await Order.findAll();
    res.json(orders);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    // TODO: include order_items
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    // TODO: validate body, create ticket automatically
    const order = await Order.create(req.body);
    req.app.get('io').emit('order:new', order);
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
}

async function updateStatus(req, res, next) {
  try {
    // TODO: validate allowed status transitions
    const order = await Order.updateStatus(req.params.id, req.body.status);
    req.app.get('io').emit('order:updated', order);
    res.json(order);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    // TODO: soft delete
    await Order.delete(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create, updateStatus, remove };
