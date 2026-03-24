import { useState, useEffect } from 'react';
import axios      from 'axios';
import TicketCard from '../components/TicketCard';

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // TODO: subscribe to ticket:updated socket events
    axios.get('/api/tickets').then(({ data }) => setTickets(data));
  }, []);

  function handleStatusChange(id, status) {
    // TODO: PATCH /api/tickets/:id
  }

  return (
    <div>
      <h1>Kitchen Tickets</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {tickets.length === 0 && <p>No active tickets.</p>}
        {tickets.map((t) => (
          <TicketCard key={t.id} ticket={t} onStatusChange={handleStatusChange} />
        ))}
      </div>
    </div>
  );
}
