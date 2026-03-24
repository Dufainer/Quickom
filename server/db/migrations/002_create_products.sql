CREATE TABLE IF NOT EXISTS products (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(150) NOT NULL,
  description TEXT,
  price       NUMERIC(10, 2) NOT NULL,
  category    VARCHAR(80),
  available   BOOLEAN NOT NULL DEFAULT TRUE,
  image_url   TEXT,
  created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);
