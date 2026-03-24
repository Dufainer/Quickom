const pool = require('../db/connection');

async function sales(req, res, next) {
  try {
    // TODO: aggregate sales by day/week/month
    res.json([]);
  } catch (err) {
    next(err);
  }
}

async function products(req, res, next) {
  try {
    // TODO: top sold products report
    res.json([]);
  } catch (err) {
    next(err);
  }
}

async function summary(req, res, next) {
  try {
    // TODO: totals — orders, revenue, customers
    res.json({
      totalOrders:    0,
      totalRevenue:   0,
      totalCustomers: 0,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { sales, products, summary };
