import { Search, ShoppingCart, Truck, Wrench } from 'lucide-react';

export default function SectorConnect() {
    const connections = [
        { title: "Direct Buyers", icon: ShoppingCart, count: 120, desc: "Connect with local supermarkets and restaurants." },
        { title: "Equipment Suppliers", icon: Wrench, count: 45, desc: "Rent or buy modern farming equipment." },
        { title: "Logistics & Transport", icon: Truck, count: 32, desc: "Find reliable transport for your produce." }
    ];

    return (
        <div className="w-full px-6 sm:px-8 lg:px-12 py-16 animate-fade-in">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="h1">Sector Connect</h1>
                    <p className="p-large mt-2">Bypass middlemen by directly connecting with industry sectors.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up">
                {connections.map((conn, i) => {
                    const Icon = conn.icon;
                    return (
                        <div key={i} className="card flex flex-col gap-4 hover:border-[var(--primary)] transition-colors cursor-pointer delay-100">
                            <div className="flex justify-between items-start">
                                <div className="p-3 rounded-md" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}>
                                    <Icon size={24} />
                                </div>
                                <span className="badge">{conn.count} Active</span>
                            </div>
                            <h3 className="h3">{conn.title}</h3>
                            <p className="text-sm text-muted">{conn.desc}</p>
                        </div>
                    )
                })}
            </div>

            <div className="card animate-slide-up delay-200">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="h2" style={{ fontSize: '1.5rem' }}>Open Market Listings</h2>
                    <div className="flex gap-2">
                        <input type="text" placeholder="Search buyers/suppliers..." className="input hidden md:block" style={{ width: '250px' }} />
                        <button className="btn btn-primary"><Search size={20} /></button>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="p-4 border border-[var(--border)] rounded-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-[var(--bg-main)] transition-colors">
                        <div>
                            <div className="flex gap-2 items-center mb-1">
                                <span className="font-semibold">FreshFoods Supermarket</span>
                                <span className="badge" style={{ fontSize: '0.7rem' }}>Buyer</span>
                            </div>
                            <p className="text-sm text-muted">Looking for 500kg of certified organic tomatoes. Weekly contract available.</p>
                        </div>
                        <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Contact Buyer</button>
                    </div>

                    <div className="p-4 border border-[var(--border)] rounded-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-[var(--bg-main)] transition-colors">
                        <div>
                            <div className="flex gap-2 items-center mb-1">
                                <span className="font-semibold">AgriTech Tractors</span>
                                <span className="badge" style={{ backgroundColor: 'rgba(233, 196, 106, 0.2)', color: 'var(--secondary-hover)', fontSize: '0.7rem' }}>Supplier</span>
                            </div>
                            <p className="text-sm text-muted">New autonomous harvesters available for daily rent. 15% discount for first-time renters.</p>
                        </div>
                        <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>View Offer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
