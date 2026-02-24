import { TrendingUp, TrendingDown, Sun, CloudRain, Droplets } from 'lucide-react';

export default function FarmerResources() {
    const prices = [
        { crop: 'Wheat', price: '$220/ton', trend: 'up', change: '+2.4%' },
        { crop: 'Corn', price: '$185/ton', trend: 'down', change: '-1.2%' },
        { crop: 'Soybeans', price: '$410/ton', trend: 'up', change: '+0.8%' },
        { crop: 'Rice', price: '$350/ton', trend: 'up', change: '+1.5%' },
    ];

    return (
        <div className="w-full px-6 sm:px-8 lg:px-12 py-16 animate-fade-in">
            <h1 className="h1 mb-8">Farmer Resources & Market</h1>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="card lg:col-span-2">
                    <h2 className="h3 mb-4">Real-time Commodity Prices</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-[var(--border)]">
                                    <th className="py-3 font-semibold text-muted">Crop</th>
                                    <th className="py-3 font-semibold text-muted">Current Price</th>
                                    <th className="py-3 font-semibold text-muted">24h Change</th>
                                    <th className="py-3 font-semibold text-muted">Trend</th>
                                </tr>
                            </thead>
                            <tbody>
                                {prices.map((item) => (
                                    <tr key={item.crop} className="border-b border-[var(--border)] hover:bg-[var(--bg-main)] transition-colors">
                                        <td className="py-4 font-medium">{item.crop}</td>
                                        <td className="py-4 font-semibold">{item.price}</td>
                                        <td className="py-4" style={{ color: item.trend === 'up' ? 'var(--primary)' : 'var(--secondary-hover)' }}>
                                            {item.change}
                                        </td>
                                        <td className="py-4">
                                            {item.trend === 'up' ? <TrendingUp size={20} color="var(--primary)" /> : <TrendingDown size={20} color="var(--secondary-hover)" />}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="card" style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--primary-light)' }}>
                        <h2 className="h3 mb-4" style={{ color: 'var(--primary)' }}>Weather Forecast</h2>
                        <div className="flex justify-between items-end mb-4 text-[var(--primary)]">
                            <div>
                                <span className="text-4xl font-bold">24°C</span>
                                <p className="text-sm font-medium">Clear Sky</p>
                            </div>
                            <Sun size={48} />
                        </div>
                        <div className="flex justify-between items-center text-sm font-medium" style={{ color: 'var(--primary-hover)' }}>
                            <span className="flex items-center gap-1"><Droplets size={16} /> 45% Humidity</span>
                            <span className="flex items-center gap-1"><CloudRain size={16} /> 10% Precip</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
