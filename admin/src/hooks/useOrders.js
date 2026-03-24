import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Fetches orders from the REST API and listens for real-time updates.
 */
export function useOrders() {
  const [orders,  setOrders]  = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    // TODO: subscribe to socket order:new and order:updated events
    axios
      .get('/api/orders')
      .then(({ data }) => setOrders(data))
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { orders, loading, error };
}
