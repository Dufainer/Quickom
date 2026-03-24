import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/tickets',   label: 'Tickets' },
  { to: '/catalog',   label: 'Catalog' },
  { to: '/reports',   label: 'Reports' },
  { to: '/payments',  label: 'Payments' },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '0.75rem 1rem', background: '#1a1a2e' }}>
      <strong style={{ color: '#fff', marginRight: 'auto' }}>Quickom</strong>
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          style={{ color: pathname.startsWith(to) ? '#f0a500' : '#ccc', textDecoration: 'none' }}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
