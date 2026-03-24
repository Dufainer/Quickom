const pool = require('../db/connection');

const Ticket = {
  async findAll() {
    // TODO: join with orders and customers
    try {
      const { rows } = await pool.query('SELECT * FROM tickets ORDER BY updated_at DESC');
      return rows;
    } catch { return []; }
  },

  async findById(id) {
    try {
      const { rows } = await pool.query('SELECT * FROM tickets WHERE id = $1', [id]);
      return rows[0] || null;
    } catch { return null; }
  },

  async findByOrderId(orderId) {
    const { rows } = await pool.query('SELECT * FROM tickets WHERE order_id = $1', [orderId]);
    return rows[0] || null;
  },

  async create(orderId) {
    const { rows } = await pool.query(
      `INSERT INTO tickets (order_id, status) VALUES ($1, 'pending') RETURNING *`,
      [orderId]
    );
    return rows[0];
  },

  async updateStatus(id, status) {
    const { rows } = await pool.query(
      `UPDATE tickets SET status = $1, updated_at = NOW() WHERE id = $2 RETURNING *`,
      [status, id]
    );
    return rows[0];
  },
};

module.exports = Ticket;
