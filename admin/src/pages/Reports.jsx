import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Reports() {
  const [summary,  setSummary]  = useState(null);
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // TODO: date range picker for filtering
    axios.get('/api/reports/summary').then(({ data }) => setSummary(data));
    axios.get('/api/reports/sales').then(({ data }) => setSalesData(data));
  }, []);

  // TODO: recharts LineChart for salesData
  // TODO: recharts BarChart for top products

  return (
    <div>
      <h1>Reports</h1>
      {summary && (
        <ul>
          <li>Total orders: {summary.totalOrders}</li>
          <li>Revenue: ${summary.totalRevenue}</li>
          <li>Customers: {summary.totalCustomers}</li>
        </ul>
      )}
    </div>
  );
}
