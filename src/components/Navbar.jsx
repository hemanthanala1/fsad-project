import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="card flex items-center justify-between" style={{ borderRadius: 0, padding: '1rem 0' }}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Sprout size={32} color="var(--primary)" />
          <span className="h3">AgriConnect</span>
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/learn" className="btn-outline" style={{ border: 'none' }}>Learn</Link>
          <Link to="/discussions" className="btn-outline" style={{ border: 'none' }}>Discussions</Link>
          <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border)' }}></div>
          <Link to="/farmer/dashboard" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Farmer Portal</Link>
          <Link to="/expert/dashboard" className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Expert Portal</Link>
          <Link to="/admin/dashboard" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Admin</Link>
        </div>
      </div>
    </nav>
  );
}
