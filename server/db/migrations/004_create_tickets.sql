CREATE TABLE IF NOT EXISTS tickets (
  id         SERIAL PRIMARY KEY,
  order_id   INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  status     VARCHAR(20) NOT NULL DEFAULT 'pending'
               CHECK (status IN ('pending', 'preparing', 'ready', 'delivered')),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
