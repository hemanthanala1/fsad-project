import { Link } from 'react-router-dom';
import { Users, AlertTriangle, ShieldCheck, Activity } from 'lucide-react';

export default function AdminDashboard() {
    const moderationQueue = [
        { title: "Review Expert Profile: Dr.Agronomy", type: "Profile Verification", time: "2 hours ago", status: "Requires Approval" },
        { title: "Reported Post #8912", type: "Community Flag", time: "5 hours ago", status: "Needs Review" },
        { title: "Update Crop Price Sources", type: "System Integration", time: "1 day ago", status: "Pending" },
    ];

    return (
        <div className="container py-16 animate-fade-in">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="h1">Admin Dashboard</h1>
                    <p className="p-large mt-2">Platform metrics, user management, and moderation queue.</p>
                </div>
            </div>

            {/* Metrics */}
            <div className="grid md:grid-cols-4 gap-4 mb-8 delay-100">
                <div className="card flex flex-col items-center text-center gap-2 py-6 border-l-4" style={{ borderLeftColor: 'var(--primary)' }}>
                    <Users size={24} color="var(--primary)" />
                    <span className="h3">12,450</span>
                    <span className="text-muted text-sm font-semibold uppercase tracking-wider">Total Users</span>
                </div>
                <div className="card flex flex-col items-center text-center gap-2 py-6 border-l-4" style={{ borderLeftColor: 'var(--secondary)' }}>
                    <ShieldCheck size={24} color="var(--secondary)" />
                    <span className="h3">534</span>
                    <span className="text-muted text-sm font-semibold uppercase tracking-wider">Verified Experts</span>
                </div>
                <div className="card flex flex-col items-center text-center gap-2 py-6 border-l-4" style={{ borderLeftColor: '#fca311' }}>
                    <Activity size={24} color="#fca311" />
                    <span className="h3">85%</span>
                    <span className="text-muted text-sm font-semibold uppercase tracking-wider">Query Resolution</span>
                </div>
                <div className="card flex flex-col items-center text-center gap-2 py-6 border-l-4 border-red-500">
                    <AlertTriangle size={24} color="#ef233c" />
                    <span className="h3">12</span>
                    <span className="text-muted text-sm font-semibold uppercase tracking-wider">Open Flags</span>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 delay-200">
                <div className="lg:col-span-2 card">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="h3">Moderation Queue</h2>
                        <button className="text-sm font-semibold" style={{ color: 'var(--primary)' }}>View All</button>
                    </div>

                    <div className="flex flex-col gap-4">
                        {moderationQueue.map((item, i) => (
                            <div key={i} className="flex justify-between items-center p-4 rounded-md border border-[var(--border)] hover:bg-[var(--bg-main)] transition-colors">
                                <div className="flex gap-4 items-center">
                                    <div className={`w-2 h-2 rounded-full ${item.type.includes('Flag') ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
                                    <div>
                                        <h4 className="font-semibold">{item.title}</h4>
                                        <span className="text-sm text-muted">{item.type} • {item.time}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.875rem' }}>Review</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <Link to="/admin/users" className="card flex flex-col items-center justify-center text-center gap-4 hover:border-[var(--primary)] transition-colors py-12">
                        <div className="p-4 rounded-full" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
                            <Users size={32} />
                        </div>
                        <h2 className="h3">Manage Users</h2>
                        <p className="text-sm text-muted">Verify experts, manage roles, and review suspensions.</p>
                    </Link>

                    <div className="card" style={{ backgroundColor: 'var(--bg-main)', borderColor: 'transparent' }}>
                        <h3 className="h3 mb-2 font-medium">Quick Actions</h3>
                        <ul className="flex flex-col gap-2 mt-4 text-sm font-medium">
                            <li className="cursor-pointer hover:text-[var(--primary)] transition-colors">• Update Platform Guidelines</li>
                            <li className="cursor-pointer hover:text-[var(--primary)] transition-colors">• Export Monthly Reports</li>
                            <li className="cursor-pointer hover:text-[var(--primary)] transition-colors">• Manage Content Tags</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
