import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then(({ data }) => setProducts(data));
  }, []);

  // TODO: add / edit / delete product modal
  // TODO: toggle availability inline

  return (
    <div>
      <h1>Product Catalog</h1>
      <button>+ Add product</button>
      <ul>
        {products.length === 0 && <li>No products found.</li>}
        {products.map((p) => (
          <li key={p.id}>
            {p.name} — ${p.price} — {p.available ? 'Available' : 'Unavailable'}
          </li>
        ))}
      </ul>
    </div>
  );
}
