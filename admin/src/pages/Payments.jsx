import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // TODO: paginated payment list
    setPayments([]);
  }, []);

  // TODO: filter by date, status
  // TODO: refund action

  return (
    <div>
      <h1>Payments</h1>
      {payments.length === 0
        ? <p>No payments recorded.</p>
        : <pre>{JSON.stringify(payments, null, 2)}</pre>
      }
    </div>
  );
}
