import { Link } from 'react-router-dom';
import { CloudRain, TrendingUp, Link as LinkIcon, BookOpen, AlertCircle, Sun, MapPin } from 'lucide-react';

export default function FarmerDashboard() {
    return (
        <div className="w-full px-6 sm:px-8 lg:px-12 py-16 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                <div>
                    <h1 className="h1">Farmer Dashboard</h1>
                    <p className="p-large mt-2 text-muted">Manage your farm operations and access resources.</p>
                </div>
                <div className="flex items-center gap-3 bg-[var(--bg-card)] px-4 py-2 rounded-full border border-[var(--border)] shadow-sm">
                    <MapPin size={18} color="var(--primary)" />
                    <span className="text-sm font-medium">Northern District</span>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 flex flex-col gap-8">

                    {/* Welcome Banner */}
                    <div className="card relative overflow-hidden flex flex-col justify-center" style={{ backgroundColor: 'var(--primary)', color: 'white', border: 'none', minHeight: '160px' }}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mt-20 -mr-20 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-20 w-32 h-32 bg-[var(--secondary)] opacity-10 rounded-full -mb-10 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div>
                                <h2 className="h2 mb-2 text-white text-3xl">Welcome back, John!</h2>
                                <p className="text-white text-opacity-90 max-w-md" style={{ opacity: 0.9 }}>
                                    Your crops are looking healthy. The weather is expected to remain clear for the next 4 days—perfect for harvesting.
                                </p>
                            </div>
                            <div className="hidden md:flex flex-col items-center bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm shrink-0">
                                <Sun size={32} className="text-[var(--secondary)] mb-1" />
                                <span className="text-2xl font-bold">24°C</span>
                                <span className="text-sm font-medium text-white text-opacity-80">Clear Sky</span>
                            </div>
                        </div>
                    </div>

                    {/* Core Actions */}
                    <div className="grid md:grid-cols-2 gap-6 animate-slide-up delay-100">
                        <Link to="/farmer/resources" className="card flex flex-col items-start gap-4 hover:border-[var(--primary)] transition-all hover:shadow-md group">
                            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
                                <TrendingUp size={28} className="group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <h3 className="h3 mb-1">Market & Resources</h3>
                                <p className="text-muted text-sm leading-relaxed">Check latest crop prices, real-time weather forecasts, and modern farming guides.</p>
                            </div>
                        </Link>

                        <Link to="/farmer/connect" className="card flex flex-col items-start gap-4 hover:border-[var(--secondary-hover)] transition-all hover:shadow-md group">
                            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(233, 196, 106, 0.2)', color: 'var(--secondary-hover)' }}>
                                <LinkIcon size={28} className="group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <h3 className="h3 mb-1">Sector Connect</h3>
                                <p className="text-muted text-sm leading-relaxed">Directly connect with local buyers, equipment suppliers, and transport logistics.</p>
                            </div>
                        </Link>
                    </div>

                    {/* Recent Updates */}
                    <div className="card animate-slide-up delay-200 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="h3">Recent Agronomy Updates</h3>
                            <Link to="/learn" className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.875rem' }}>View All</Link>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center py-4 border-b border-[var(--border)] gap-3 hover:bg-[var(--bg-main)] -mx-8 px-8 transition-colors">
                                <div className="flex gap-4 items-start sm:items-center">
                                    <div className="mt-1 sm:mt-0 p-2 rounded-lg bg-[var(--primary-light)] text-[var(--primary)] shrink-0">
                                        <CloudRain size={20} />
                                    </div>
                                    <span className="font-medium text-[var(--text-main)]">Heavy rain expected in Northern districts next week</span>
                                </div>
                                <span className="text-sm text-muted font-medium whitespace-nowrap shrink-0">2 hours ago</span>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between sm:items-center py-4 gap-3 hover:bg-[var(--bg-main)] -mx-8 px-8 transition-colors">
                                <div className="flex gap-4 items-start sm:items-center">
                                    <div className="mt-1 sm:mt-0 p-2 rounded-lg bg-[rgba(233,196,106,0.2)] text-[var(--secondary-hover)] shrink-0">
                                        <BookOpen size={20} />
                                    </div>
                                    <span className="font-medium text-[var(--text-main)]">New Guide: Transitioning to Organic Fertilizers safely</span>
                                </div>
                                <span className="text-sm text-muted font-medium whitespace-nowrap shrink-0">1 day ago</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="flex flex-col gap-6 animate-slide-up delay-300 w-full">
                    <div className="card flex flex-col h-full">
                        <h3 className="h3 mb-6">Expert Advice Requests</h3>

                        <div className="flex flex-col gap-4 flex-1">
                            <div className="p-5 border border-[var(--border)] rounded-xl flex flex-col gap-3 bg-[var(--bg-main)] hover:border-[var(--primary)] transition-colors cursor-pointer">
                                <div className="flex justify-between items-start gap-2">
                                    <span className="font-semibold text-[var(--text-main)] leading-tight">Soil PH imbalance in Sector A</span>
                                    <span className="badge shrink-0" style={{ backgroundColor: 'rgba(244, 162, 97, 0.1)', color: 'var(--secondary-hover)' }}>Pending</span>
                                </div>
                                <p className="text-sm text-muted leading-relaxed">Waiting for Dr.Agronomy's response regarding the recent soil tests.</p>
                                <div className="mt-2 text-xs font-semibold text-[var(--primary)]">Updated 3 days ago</div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-[var(--border)]">
                            <button className="btn btn-primary w-full flex justify-center items-center gap-2 py-3">
                                <AlertCircle size={18} /> Request Expert Help
                            </button>
                        </div>
                    </div>

                    <div className="card bg-[var(--bg-main)] border-none shrink-0 text-center py-8">
                        <div className="w-16 h-16 bg-[var(--primary-light)] rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--primary)]">
                            <span className="font-bold text-xl">8</span>
                        </div>
                        <h4 className="font-semibold text-[var(--text-main)] mb-1">Days until Harvest</h4>
                        <p className="text-sm text-muted">Based on your crop calendar</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
