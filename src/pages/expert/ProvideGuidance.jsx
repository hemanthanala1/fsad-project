import { MessageSquare, CheckCircle } from 'lucide-react';

export default function ProvideGuidance() {
    const requests = [
        { id: '1029', farmer: 'John Doe', topic: 'Soil PH issue', status: 'Pending', time: '2 hours ago', desc: 'My soil testing shows a pH of 5.2. What is the fastest natural way to neutralize it for corn planting next month?' },
        { id: '1030', farmer: 'GreenAcres Farm', topic: 'Leaf discoloration', status: 'Pending', time: '5 hours ago', desc: 'Noticing yellowing on the edges of my soybean leaves. Added nitrogen last week. Images attached.' },
        { id: '1025', farmer: 'Pete', topic: 'Water logging', status: 'Answered', time: '1 day ago', desc: 'Heavy rains flooded the lower field. Best drainage techniques without heavy machinery?' }
    ];

    return (
        <div className="container py-16 animate-fade-in">
            <h1 className="h1 mb-2">Provide Guidance</h1>
            <p className="p-large mb-8 text-muted">Review and respond to farmer requests.</p>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 flex flex-col gap-4 animate-slide-up delay-100">
                    {requests.map(req => (
                        <div key={req.id} className="card flex flex-col gap-3 cursor-pointer hover:border-[var(--primary)] transition-colors">
                            <div className="flex justify-between items-start">
                                <div className="flex gap-2 items-center">
                                    <span className="font-bold">Request #{req.id}</span>
                                    <span className="badge" style={{
                                        backgroundColor: req.status === 'Pending' ? 'rgba(233, 196, 106, 0.2)' : 'var(--primary-light)',
                                        color: req.status === 'Pending' ? 'var(--secondary-hover)' : 'var(--primary)'
                                    }}>
                                        {req.status}
                                    </span>
                                </div>
                                <span className="text-sm text-muted">{req.time}</span>
                            </div>
                            <h3 className="text-lg font-semibold">{req.topic}</h3>
                            <p className="text-sm text-muted line-clamp-2">{req.desc}</p>
                            <div className="flex justify-between items-center mt-2 pt-3 border-t border-[var(--border)]">
                                <span className="text-sm font-medium">From: {req.farmer}</span>
                                {req.status === 'Pending' ? (
                                    <button className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.875rem' }}>Reply</button>
                                ) : (
                                    <span className="flex items-center gap-1 text-sm text-[var(--primary)]"><CheckCircle size={16} /> Responded</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full lg:w-96 animate-slide-up delay-200">
                    <div className="card sticky top-24">
                        <div className="flex flex-col gap-4 text-center items-center py-4">
                            <MessageSquare size={48} color="var(--border)" />
                            <h3 className="h3">Select a request</h3>
                            <p className="text-sm text-muted">Click on a pending request on the left to view details, attachments, and draft your expert response.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
