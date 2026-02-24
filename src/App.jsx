import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Discussions from './pages/Discussions';
import FarmerDashboard from './pages/farmer/Dashboard';
import FarmerResources from './pages/farmer/Resources';
import SectorConnect from './pages/farmer/SectorConnect';
import ExpertDashboard from './pages/expert/Dashboard';
import ProvideGuidance from './pages/expert/ProvideGuidance';
import CreateContent from './pages/expert/CreateContent';
import AdminDashboard from './pages/admin/Dashboard';
import ManageUsers from './pages/admin/ManageUsers';

// Placeholder Pages (we will create these next)
const Placeholder = ({ title }) => (
  <div className="container py-24 text-center flex-1">
    <h1 className="h1">{title}</h1>
    <p className="p-large mt-4">Page content coming soon...</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        <main className="flex-1 w-full" style={{ flex: '1 0 auto' }}>
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/discussions" element={<Discussions />} />

            {/* Farmer */}
            <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
            <Route path="/farmer/resources" element={<FarmerResources />} />
            <Route path="/farmer/connect" element={<SectorConnect />} />

            {/* Expert */}
            <Route path="/expert/dashboard" element={<ExpertDashboard />} />
            <Route path="/expert/guidance" element={<ProvideGuidance />} />
            <Route path="/expert/create" element={<CreateContent />} />

            {/* Admin */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<ManageUsers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
