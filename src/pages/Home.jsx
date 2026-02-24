import { ArrowRight, Leaf, Users, ExternalLink, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="animate-fade-in w-full">
            {/* Hero Section */}
            <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--primary-light)' }}>
                <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 50%)',
                    backgroundSize: '100px 100px'
                }}></div>
                <div className="container relative flex flex-col items-center text-center gap-6 animate-slide-up">
                    <div className="badge">🌱 The Future of Agriculture</div>
                    <h1 className="h1" style={{ maxWidth: '800px' }}>
                        Inspiring Society, <br />
                        <span className="text-gradient">Empowering Farmers</span>
                    </h1>
                    <p className="p-large" style={{ maxWidth: '600px' }}>
                        A unified platform bridging the gap between agriculture and various sectors.
                        Discover opportunities, access resources, and build a sustainable future together.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4 justify-center">
                        <Link to="/farmer/dashboard" className="btn btn-primary">
                            I am a Farmer <ArrowRight size={20} />
                        </Link>
                        <Link to="/learn" className="btn btn-outline">
                            Learn about Farming
                        </Link>
                    </div>
                </div>
            </section>

            {/* Impact/Features Section */}
            <section className="py-24 container">
                <div className="text-center mb-16 animate-slide-up delay-100">
                    <h2 className="h2">Cultivating Growth Across Sectors</h2>
                    <p className="p-large mt-4 mx-auto" style={{ maxWidth: '600px' }}>
                        We provide the tools and connections necessary for modern agriculture to thrive in a connected world.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up delay-200">
                    <div className="card flex flex-col gap-4">
                        <div className="p-4 rounded-full w-fit" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
                            <Leaf size={32} />
                        </div>
                        <h3 className="h3">Resource Hub</h3>
                        <p className="text-muted">Access modern farming techniques, market prices, and sustainability practices tailored for your region.</p>
                    </div>

                    <div className="card flex flex-col gap-4" style={{ borderColor: 'var(--primary)' }}>
                        <div className="p-4 rounded-full w-fit" style={{ backgroundColor: 'rgba(233, 196, 106, 0.2)', color: 'var(--secondary-hover)' }}>
                            <ExternalLink size={32} />
                        </div>
                        <h3 className="h3">Sector Connectivity</h3>
                        <p className="text-muted">Directly interact with equipment suppliers, direct buyers, and logistics companies without middlemen.</p>
                    </div>

                    <div className="card flex flex-col gap-4">
                        <div className="p-4 rounded-full w-fit" style={{ backgroundColor: 'rgba(108, 117, 125, 0.1)', color: 'var(--text-main)' }}>
                            <Activity size={32} />
                        </div>
                        <h3 className="h3">Expert Guidance</h3>
                        <p className="text-muted">Connect with verified agricultural experts for 1-on-1 support and specialized crop advice.</p>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-24 w-full" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
                <div className="container flex flex-col md:flex-row items-center gap-12 justify-between">
                    <div className="flex-1 flex flex-col gap-6 animate-slide-up delay-200">
                        <h2 className="h2">Join the Movement</h2>
                        <p className="p-large">
                            Whether you are an expert looking to share knowledge, a citizen wanting to understand where your food comes from, or a visionary building ag-tech. There's a place for you here.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/expert/dashboard" className="btn btn-secondary">
                                <Users size={20} /> Join as Expert
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="card flex flex-col items-center justify-center text-center gap-2 py-8" style={{ border: 'none', backgroundColor: 'var(--bg-main)' }}>
                            <span className="h1 text-gradient">10k+</span>
                            <span className="font-semibold text-muted">Farmers</span>
                        </div>
                        <div className="card flex flex-col items-center justify-center text-center gap-2 py-8 mt-8" style={{ border: 'none', backgroundColor: 'var(--bg-main)' }}>
                            <span className="h1 text-gradient">500+</span>
                            <span className="font-semibold text-muted">Experts</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
