import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar    from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Tickets   from './pages/Tickets';
import Catalog   from './pages/Catalog';
import Reports   from './pages/Reports';
import Payments  from './pages/Payments';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/"          element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tickets"   element={<Tickets />} />
          <Route path="/catalog"   element={<Catalog />} />
          <Route path="/reports"   element={<Reports />} />
          <Route path="/payments"  element={<Payments />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
