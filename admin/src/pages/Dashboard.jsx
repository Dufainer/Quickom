import { useOrders } from '../hooks/useOrders';
import OrderTable   from '../components/OrderTable';

export default function Dashboard() {
  const { orders, loading } = useOrders();

  // TODO: summary cards (total orders, revenue, pending)
  // TODO: sales chart with recharts

  return (
    <div>
      <h1>Dashboard</h1>
      {loading ? <p>Loading...</p> : <OrderTable orders={orders} />}
    </div>
  );
}
