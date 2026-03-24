/**
 * Displays a single ticket with its current status and controls.
 * @param {{ ticket: object, onStatusChange: function }} props
 */
export default function TicketCard({ ticket, onStatusChange }) {
  // TODO: render ticket details
  // TODO: status badge with colour coding
  // TODO: action buttons for status transitions
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: '1rem' }}>
      <p>Ticket #{ticket?.id}</p>
      <p>Status: {ticket?.status}</p>
    </div>
  );
}
