const pool = require('../db/connection');

const Order = {
  async findAll() {
    // TODO: join with customers and order_items
    try {
      const { rows } = await pool.query('SELECT * FROM orders ORDER BY created_at DESC');
      return rows;
    } catch { return []; }
  },

  async findById(id) {
    // TODO: join with order_items and products
    try {
      const { rows } = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);
      return rows[0] || null;
    } catch { return null; }
  },

  async create({ customer_id, total, status = 'pending' }) {
    // TODO: insert order_items inside a transaction
    const { rows } = await pool.query(
      'INSERT INTO orders (customer_id, total, status) VALUES ($1, $2, $3) RETURNING *',
      [customer_id, total, status]
    );
    return rows[0];
  },

  async updateStatus(id, status) {
    const { rows } = await pool.query(
      'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );
    return rows[0];
  },

  async delete(id) {
    // TODO: soft delete
    await pool.query('DELETE FROM orders WHERE id = $1', [id]);
  },
};

module.exports = Order;
