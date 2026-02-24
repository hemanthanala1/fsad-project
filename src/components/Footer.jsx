export default function Footer() {
    return (
        <footer className="mt-8 py-8" style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
            <div className="container flex flex-col md:grid-cols-3 gap-8 justify-between">
                <div>
                    <span className="h3">AgriConnect</span>
                    <p className="mt-4 p-large" style={{ fontSize: '1rem' }}>
                        Inspiring society about farming and helping farmers benefit from various sectors.
                    </p>
                </div>
                <div className="flex gap-8">
                    <div className="flex flex-col gap-2">
                        <span style={{ fontWeight: 600 }}>Resources</span>
                        <a href="/learn" className="p-large" style={{ fontSize: '1rem' }}>Learning Hub</a>
                        <a href="/discussions" className="p-large" style={{ fontSize: '1rem' }}>Community Forums</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span style={{ fontWeight: 600 }}>Portals</span>
                        <a href="/farmer/dashboard" className="p-large" style={{ fontSize: '1rem' }}>Farmer Dashboard</a>
                        <a href="/expert/dashboard" className="p-large" style={{ fontSize: '1rem' }}>Expert Dashboard</a>
                        <a href="/admin/dashboard" className="p-large" style={{ fontSize: '1rem' }}>Admin Dashboard</a>
                    </div>
                </div>
            </div>
            <div className="container mt-8 text-center" style={{ color: 'var(--text-muted)' }}>
                <p>&copy; {new Date().getFullYear()} AgriConnect Platform. All rights reserved.</p>
            </div>
        </footer>
    );
}
