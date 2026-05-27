import AdminLayout from './AdminLayout';
import { Users, MapPin } from 'lucide-react';
import {
  LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const newVsReturning = [
  { p: 'Mon', new: 15, returning: 30 }, { p: 'Tue', new: 22, returning: 30 }, { p: 'Wed', new: 18, returning: 20 },
  { p: 'Thu', new: 25, returning: 40 }, { p: 'Fri', new: 35, returning: 50 }, { p: 'Sat', new: 45, returning: 65 }, { p: 'Sun', new: 40, returning: 55 },
];
const tierDistribution = [
  { name: 'Standard (All)', value: 100 }
];

const COLORS = ['#111827']; // Gray 900 for standard

export default function CustomerAnalytics() {
    return (
        <AdminLayout>
            <div className="p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <Users className="w-8 h-8 mr-3 text-red-600" />
                        Customer Analytics
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Analytics focused on customer behaviour, loyalty, and demographics.</p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
                    {/* Line Chart */}
                    <div className="xl:col-span-2 bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">New vs Returning Customers (Bookings)</h2>
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={newVsReturning} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                    <XAxis dataKey="p" tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
                                    <YAxis tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
                                    <Tooltip contentStyle={{ backgroundColor: '#111827', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase' }} itemStyle={{ color: '#fff' }} />
                                    <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 'bold', paddingTop: '20px' }} />
                                    <Line name="New Customers" type="monotone" dataKey="new" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                    <Line name="Returning Customers" type="monotone" dataKey="returning" stroke="#16a34a" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Donut Chart */}
                    <div className="xl:col-span-1 bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Loyalty Tier Distribution</h2>
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={tierDistribution} innerRadius={80} outerRadius={110} paddingAngle={2} dataKey="value" stroke="none">
                                        {tierDistribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{ backgroundColor: '#111827', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '12px' }} itemStyle={{ color: '#fff' }} />
                                    <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 'bold', paddingTop: '20px' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
                     <div className="bg-white border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <div className="p-4 border-b-2 border-gray-200">
                             <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Top Customers By Bookings</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 border-b-2 border-gray-900">
                                        <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest w-12 text-center">#</th>
                                        <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Customer Name</th>
                                        <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center">Bookings</th>
                                        <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Last Booking</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2 divide-gray-100">
                                    {[
                                        { rank: 1, name: 'Kwame Mensah', count: 42, date: 'Today' },
                                        { rank: 2, name: 'Abena Osei', count: 38, date: '2 days ago' },
                                        { rank: 3, name: 'John Doe', count: 35, date: '1 week ago' },
                                        { rank: 4, name: 'Sarah Connor', count: 31, date: 'Yesterday' },
                                        { rank: 5, name: 'Michael Addo', count: 28, date: '3 days ago' },
                                    ].map((c) => (
                                        <tr key={c.rank} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-center font-bold text-gray-500">{c.rank}</td>
                                            <td className="p-4 font-black text-gray-900">{c.name}</td>
                                            <td className="p-4 text-center font-bold text-brand-maroon">{c.count}</td>
                                            <td className="p-4 text-right text-xs text-gray-500 font-bold uppercase tracking-wider">{c.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <div className="p-4 border-b-2 border-gray-200">
                             <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Top Customers By Spend</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 border-b-2 border-gray-900">
                                        <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest w-12 text-center">#</th>
                                        <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Customer Name</th>
                                        <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Total Spend (GH₵)</th>
                                        <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Last Booking</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2 divide-gray-100">
                                    {[
                                        { rank: 1, name: 'XYZ Corp (Corporate)', spend: 45000, date: 'Today' },
                                        { rank: 2, name: 'Abena Osei', spend: 12500, date: '2 days ago' },
                                        { rank: 3, name: 'Kwame Mensah', spend: 9800, date: 'Today' },
                                        { rank: 4, name: 'Globe Travels Ltd', spend: 8500, date: '1 week ago' },
                                        { rank: 5, name: 'Michael Addo', spend: 7200, date: '3 days ago' },
                                    ].map((c) => (
                                        <tr key={c.rank} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-center font-bold text-gray-500">{c.rank}</td>
                                            <td className="p-4 font-black text-gray-900">{c.name}</td>
                                            <td className="p-4 text-right font-bold text-brand-maroon">{c.spend.toLocaleString()}</td>
                                            <td className="p-4 text-right text-xs text-gray-500 font-bold uppercase tracking-wider">{c.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-100 border-4 border-dashed border-gray-300 p-12 text-center flex flex-col items-center justify-center">
                    <MapPin className="w-12 h-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-black text-gray-600 uppercase tracking-widest mb-2">Geographic Distribution</h3>
                    <p className="text-sm font-bold text-gray-500">Geographic distribution analytics coming soon.</p>
                </div>

            </div>
        </AdminLayout>
    );
}
