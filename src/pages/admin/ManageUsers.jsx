import { Search, Filter, ShieldCheck, ShieldAlert, Check } from 'lucide-react';

export default function ManageUsers() {
    const users = [
        { id: 'U-821', name: 'Dr.Agronomy', role: 'Expert', status: 'Pending Verification', email: 'agronomy@example.com' },
        { id: 'U-892', name: 'FarmerJohn', role: 'Farmer', status: 'Active', email: 'john@farm.local' },
        { id: 'U-102', name: 'TechGrower', role: 'Farmer', status: 'Active', email: 'tech@hydroponics.org' },
        { id: 'U-454', name: 'AgriCorp Supplies', role: 'Supplier', status: 'Active', email: 'sales@agricorp.com' },
        { id: 'U-777', name: 'TrollUser99', role: 'Public', status: 'Suspended', email: 'troll@anon.com' },
    ];

    return (
        <div className="container py-16 animate-fade-in">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="h1">User Management</h1>
                    <p className="p-large mt-2">View, verify, and manage user accounts across the platform.</p>
                </div>
                <div className="flex gap-4">
                    <button className="btn btn-primary" style={{ height: 'fit-content' }}>Export List</button>
                </div>
            </div>

            <div className="card animate-slide-up delay-100">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <div className="flex gap-2 w-full md:w-auto">
                        <input type="text" placeholder="Search users by name, email, ID..." className="input flex-1 md:w-80" />
                        <button className="btn btn-outline px-3 border-[var(--border)]"><Search size={20} /></button>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        <span className="badge cursor-pointer" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>All Users</span>
                        <span className="badge cursor-pointer" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', border: '1px solid var(--border)' }}>Farmers</span>
                        <span className="badge cursor-pointer" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', border: '1px solid var(--border)' }}>Experts</span>
                        <span className="badge cursor-pointer" style={{ backgroundColor: 'rgba(233, 196, 106, 0.2)', color: 'var(--secondary-hover)' }}>Pending Verification</span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-[var(--border)] text-sm uppercase tracking-wider text-muted">
                                <th className="py-3 px-4 font-semibold">User ID</th>
                                <th className="py-3 px-4 font-semibold">Details</th>
                                <th className="py-3 px-4 font-semibold">Role</th>
                                <th className="py-3 px-4 font-semibold">Status</th>
                                <th className="py-3 px-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => (
                                <tr key={i} className="border-b border-[var(--border)] hover:bg-[var(--bg-main)] transition-colors">
                                    <td className="py-4 px-4 font-mono text-sm">{user.id}</td>
                                    <td className="py-4 px-4">
                                        <div className="font-semibold">{user.name}</div>
                                        <div className="text-sm text-muted">{user.email}</div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="badge" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', border: '1px solid var(--border)' }}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-2 text-sm font-medium">
                                            {user.status === 'Active' && <><Check size={16} color="var(--primary)" /> {user.status}</>}
                                            {user.status === 'Pending Verification' && <><ShieldCheck size={16} color="var(--secondary-hover)" /> {user.status}</>}
                                            {user.status === 'Suspended' && <><ShieldAlert size={16} color="#ef233c" /> {user.status}</>}
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-right">
                                        {user.status === 'Pending Verification' ? (
                                            <button className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.875rem' }}>Verify Profile</button>
                                        ) : (
                                            <button className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.875rem' }}>Edit User</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
