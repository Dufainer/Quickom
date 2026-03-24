/**
 * Tabular view of orders with sortable columns and row actions.
 * @param {{ orders: object[] }} props
 */
export default function OrderTable({ orders = [] }) {
  // TODO: sorting, pagination
  // TODO: row click to open order detail
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Cliente</th>
          <th>Estado</th>
          <th>Total</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {orders.length === 0 && (
          <tr><td colSpan={5} style={{ textAlign: 'center' }}>No orders found</td></tr>
        )}
        {orders.map((o) => (
          <tr key={o.id}>
            <td>{o.id}</td>
            <td>{o.customer_id}</td>
            <td>{o.status}</td>
            <td>{o.total}</td>
            <td>{o.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
