import { BookOpen, Video, FileText, ArrowRight } from 'lucide-react';

export default function Learn() {
    const topics = [
        { title: "Sustainable Agriculture Basics", type: "Video Course", icon: Video },
        { title: "Water Conservation Techniques", type: "Article", icon: FileText },
        { title: "Organic Farming Certifications", type: "Guide", icon: BookOpen },
        { title: "Understanding Soil Health", type: "Video Course", icon: Video },
        { title: "Pest Management Alternatives", type: "Article", icon: FileText },
        { title: "Modern AgTech Innovations", type: "Interactive module", icon: BookOpen }
    ];

    return (
        <div className="container py-16 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h1 className="h1">Learning Hub</h1>
                    <p className="p-large mt-4 max-w-2xl">
                        Access hundreds of free resources designed to educate society and modern farmers about sustainable practices.
                    </p>
                </div>
                <div className="flex gap-2">
                    <input type="text" placeholder="Search topics..." className="input" style={{ width: '300px' }} />
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
                {topics.map((topic, i) => {
                    const Icon = topic.icon;
                    return (
                        <div key={i} className={`card flex flex-col justify-between delay-${(i % 3) * 100}`}>
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 rounded-md" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--primary)' }}>
                                        <Icon size={24} />
                                    </div>
                                    <span className="badge">{topic.type}</span>
                                </div>
                                <h3 className="h3 mb-2">{topic.title}</h3>
                                <p className="text-muted text-sm">Learn the fundamentals and advanced techniques to improve yield sustainability.</p>
                            </div>
                            <button className="flex items-center gap-2 mt-6" style={{ color: 'var(--secondary-hover)', fontWeight: 600 }}>
                                Start Learning <ArrowRight size={16} />
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
