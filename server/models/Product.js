const pool = require('../db/connection');

const Product = {
  async findAll() {
    try {
      const { rows } = await pool.query('SELECT * FROM products ORDER BY category, name');
      return rows;
    } catch { return []; }
  },

  async findById(id) {
    try {
      const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
      return rows[0] || null;
    } catch { return null; }
  },

  async create({ name, description, price, category, available = true, image_url }) {
    const { rows } = await pool.query(
      `INSERT INTO products (name, description, price, category, available, image_url)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, description, price, category, available, image_url]
    );
    return rows[0];
  },

  async update(id, fields) {
    // TODO: dynamic SET clause builder
    const { rows } = await pool.query(
      `UPDATE products
       SET name = $1, description = $2, price = $3, category = $4,
           available = $5, image_url = $6
       WHERE id = $7 RETURNING *`,
      [fields.name, fields.description, fields.price, fields.category,
       fields.available, fields.image_url, id]
    );
    return rows[0];
  },

  async delete(id) {
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
  },
};

module.exports = Product;
