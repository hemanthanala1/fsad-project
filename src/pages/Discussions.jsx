import { MessageSquare, ThumbsUp, Eye, Search, Filter } from 'lucide-react';

export default function Discussions() {
    const threads = [
        {
            title: "Best natural fertilizers for tomatoes?",
            author: "FarmerJohn",
            replies: 24,
            views: 340,
            tags: ["Crops", "Fertilizers"],
            time: "2 hours ago"
        },
        {
            title: "How to connect with local restaurants for direct supply?",
            author: "GreenAcres",
            replies: 15,
            views: 210,
            tags: ["Business", "Supply Chain"],
            time: "5 hours ago"
        },
        {
            title: "[Expert Answer] Dealing with unseasonal frost",
            author: "Dr.Agronomy",
            replies: 56,
            views: 1200,
            tags: ["Weather", "Expert"],
            time: "1 day ago"
        },
        {
            title: "Introducing hydroponics to a traditional farm layout",
            author: "TechGrower",
            replies: 42,
            views: 890,
            tags: ["Modern Farming", "Tech"],
            time: "2 days ago"
        }
    ];

    return (
        <div className="container py-16 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 border-b pb-8" style={{ borderBottom: '1px solid var(--border)' }}>
                <div>
                    <h1 className="h1">Community Forums</h1>
                    <p className="p-large mt-4 max-w-2xl">
                        Ask questions, share experiences, and engage with farmers, experts, and agriculture enthusiasts.
                    </p>
                </div>
                <button className="btn btn-primary" style={{ height: 'fit-content' }}>
                    + New Discussion
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 animate-slide-up">
                {/* Main Feed */}
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="h3">Recent Threads</h2>
                        <div className="flex gap-2">
                            <button className="p-2 rounded-md hover:bg-[var(--bg-main)] transition-colors"><Filter size={20} color="var(--text-muted)" /></button>
                            <button className="p-2 rounded-md hover:bg-[var(--bg-main)] transition-colors"><Search size={20} color="var(--text-muted)" /></button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {threads.map((thread, i) => (
                            <div key={i} className="card py-4 flex flex-col md:flex-row justify-between gap-4 delay-100" style={{ padding: '1.5rem' }}>
                                <div className="flex-1">
                                    <div className="flex gap-2 mb-2">
                                        {thread.tags.map(tag => (
                                            <span key={tag} className="badge" style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem', backgroundColor: 'var(--bg-main)', color: 'var(--text-muted)' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', cursor: 'pointer' }}>{thread.title}</h3>
                                    <div className="flex items-center gap-2 text-sm text-muted" style={{ color: 'var(--text-muted)' }}>
                                        <span className="font-medium" style={{ color: 'var(--primary)' }}>{thread.author}</span>
                                        <span>•</span>
                                        <span>{thread.time}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 mt-4 md:mt-0" style={{ color: 'var(--text-muted)' }}>
                                    <div className="flex items-center gap-1.5">
                                        <MessageSquare size={18} /> <span>{thread.replies}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Eye size={18} /> <span>{thread.views}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="btn btn-outline self-center mt-8">Load More</button>
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-80 flex flex-col gap-6 delay-200">
                    <div className="card">
                        <h3 className="h3 mb-4" style={{ fontSize: '1.25rem' }}>Top Contributors</h3>
                        <div className="flex flex-col gap-4 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-[var(--primary)]"></div> Dr.Agronomy</span>
                                <span className="badge">1.2k pts</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-[var(--secondary)]"></div> FarmerJohn</span>
                                <span className="badge">850 pts</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2"><div className="w-6 h-6 rounded-full" style={{ backgroundColor: 'var(--border)' }}></div> GreenAcres</span>
                                <span className="badge">430 pts</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
