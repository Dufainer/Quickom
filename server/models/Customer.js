const pool = require('../db/connection');

const Customer = {
  async findAll() {
    const { rows } = await pool.query('SELECT * FROM customers ORDER BY created_at DESC');
    return rows;
  },

  async findById(id) {
    const { rows } = await pool.query('SELECT * FROM customers WHERE id = $1', [id]);
    return rows[0] || null;
  },

  async findByPhone(phone) {
    const { rows } = await pool.query('SELECT * FROM customers WHERE phone = $1', [phone]);
    return rows[0] || null;
  },

  async upsert({ phone, name }) {
    // TODO: update name if changed
    const { rows } = await pool.query(
      `INSERT INTO customers (phone, name)
       VALUES ($1, $2)
       ON CONFLICT (phone) DO UPDATE SET name = EXCLUDED.name
       RETURNING *`,
      [phone, name]
    );
    return rows[0];
  },
};

module.exports = Customer;
