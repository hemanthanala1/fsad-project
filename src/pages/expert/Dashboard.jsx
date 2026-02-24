import { Link } from 'react-router-dom';
import { HelpCircle, FileText, Users, Eye, ArrowUpRight } from 'lucide-react';

export default function ExpertDashboard() {
    return (
        <div className="container py-16 animate-fade-in">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="h1">Expert Portal</h1>
                    <p className="p-large mt-2">Manage farmer requests and monitor your content reach.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="card text-center py-6 delay-100">
                    <span className="h2" style={{ color: 'var(--primary)' }}>24</span>
                    <p className="text-muted font-medium mt-1">Pending Requests</p>
                </div>
                <div className="card text-center py-6 delay-100">
                    <span className="h2" style={{ color: 'var(--secondary)' }}>156</span>
                    <p className="text-muted font-medium mt-1">Farmers Helped</p>
                </div>
                <div className="card text-center py-6 delay-100">
                    <span className="h2">12</span>
                    <p className="text-muted font-medium mt-1">Published Articles</p>
                </div>
                <div className="card text-center py-6 delay-100">
                    <span className="h2">8.4k</span>
                    <p className="text-muted font-medium mt-1">Content Views</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 animate-slide-up delay-200">
                <Link to="/expert/guidance" className="card flex flex-col items-center justify-center text-center gap-4 hover:border-[var(--primary)] transition-colors py-12">
                    <div className="p-4 rounded-full" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
                        <HelpCircle size={48} />
                    </div>
                    <h2 className="h2" style={{ fontSize: '1.75rem' }}>Provide Guidance</h2>
                    <p className="text-muted max-w-sm">Answer direct queries from farmers regarding crop health, soil, and yield.</p>
                    <span className="btn btn-outline mt-2">View 24 Pending Requests</span>
                </Link>

                <Link to="/expert/create" className="card flex flex-col items-center justify-center text-center gap-4 hover:border-[var(--secondary-hover)] transition-colors py-12">
                    <div className="p-4 rounded-full" style={{ backgroundColor: 'rgba(233, 196, 106, 0.2)', color: 'var(--secondary-hover)' }}>
                        <FileText size={48} />
                    </div>
                    <h2 className="h2" style={{ fontSize: '1.75rem' }}>Create Content</h2>
                    <p className="text-muted max-w-sm">Write articles, guides, or upload videos to educate the farming community.</p>
                    <span className="btn btn-outline mt-2">Draft New Post</span>
                </Link>
            </div>

            <div className="card mt-8 animate-slide-up delay-300">
                <h3 className="h3 mb-4">Top Performing Content</h3>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center py-3 border-b border-[var(--border)]">
                        <div className="flex gap-4 items-center">
                            <span className="font-medium">Organic Pest Control in Tomato Crops</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted">
                            <span className="flex items-center gap-1"><Eye size={16} /> 3.2k</span>
                            <span className="flex items-center gap-1 text-[var(--primary)]"><ArrowUpRight size={16} /> +15%</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-3">
                        <div className="flex gap-4 items-center">
                            <span className="font-medium">Maximizing Yield with Drip Irrigation</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted">
                            <span className="flex items-center gap-1"><Eye size={16} /> 2.1k</span>
                            <span className="flex items-center gap-1 text-[var(--primary)]"><ArrowUpRight size={16} /> +8%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
