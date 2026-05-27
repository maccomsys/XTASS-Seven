import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { BarChart2, Download, Calendar } from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// Mock Data
const revenueOverTime = [
  { p: 'Mon', num: 4000 }, { p: 'Tue', num: 3000 }, { p: 'Wed', num: 2000 },
  { p: 'Thu', num: 2780 }, { p: 'Fri', num: 1890 }, { p: 'Sat', num: 2390 }, { p: 'Sun', num: 3490 },
];
const revenueByType = [
  { name: 'Instant Ride', value: 40000 }, { name: 'Scheduled Pickup', value: 30000 }, { name: 'Car Rental', value: 30000 },
];
const revenueByLevel = [
  { name: 'Premium', amt: 2400 }, { name: 'Business', amt: 1398 }, { name: 'Economy', amt: 9800 }, { name: 'Basic', amt: 3908 },
];
const revenueByLocation = [
  { name: 'Accra', total: 65000 }, { name: 'Kumasi', total: 25000 }, { name: 'Tamale', total: 10000 }, { name: 'Takoradi', total: 15000 }
];

const COLORS = ['#111827', '#dc2626', '#d1d5db']; // Gray-900, brand-maroon, gray-300

export default function RevenueReport() {
    const [period, setPeriod] = useState('Last 7 Days');

    return (
        <AdminLayout>
            <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <BarChart2 className="w-8 h-8 mr-3 text-red-600" />
                            Revenue Report
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Financial analytics across all bookings and service types.</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <select 
                                value={period}
                                onChange={(e) => setPeriod(e.target.value)}
                                className="bg-white border-4 border-gray-900 text-gray-900 text-sm font-black py-3 pl-10 pr-8 focus:ring-0 appearance-none shadow-[4px_4px_0_0_rgba(0,0,0,1)] w-full sm:w-auto cursor-pointer"
                            >
                                <option value="Today">Today</option>
                                <option value="This Week">This Week</option>
                                <option value="Last 7 Days">Last 7 Days</option>
                                <option value="This Month">This Month</option>
                                <option value="Last 30 Days">Last 30 Days</option>
                            </select>
                        </div>
                        <button className="bg-gray-900 hover:bg-gray-800 text-white font-black uppercase tracking-widest text-xs px-6 py-3 transition-colors flex items-center justify-center">
                            <Download className="w-4 h-4 mr-2" /> Export CSV
                        </button>
                    </div>
                </div>

                {/* Summary Metrics Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                        { title: 'Total Revenue', v: 'GH₵ 124,500' },
                        { title: 'Avg Per Booking', v: 'GH₵ 185' },
                        { title: 'Highest Day', v: 'GH₵ 8,240 (Oct 21)' },
                        { title: 'Avg Daily', v: 'GH₵ 4,150' },
                    ].map((m, i) => (
                        <div key={i} className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{m.title}</h3>
                            <p className="text-2xl font-black text-gray-900 tracking-tight">{m.v}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
                    {/* Line Chart */}
                    <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Revenue by Period</h2>
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={revenueOverTime} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                    <XAxis dataKey="p" tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
                                    <YAxis tickFormatter={(val) => `₵${val}`} tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
                                    <Tooltip contentStyle={{ backgroundColor: '#111827', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase' }} itemStyle={{ color: '#fff' }} />
                                    <Line type="monotone" dataKey="num" stroke="#dc2626" strokeWidth={4} dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Donut Chart */}
                    <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Revenue by Booking Type</h2>
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={revenueByType} innerRadius={80} outerRadius={110} paddingAngle={2} dataKey="value" stroke="none">
                                        {revenueByType.map((entry, index) => (
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

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {/* Bar Chart - Service Level */}
                    <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Revenue by Service Level</h2>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={revenueByLevel} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                    <XAxis dataKey="name" tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
                                    <YAxis hide />
                                    <Tooltip contentStyle={{ backgroundColor: '#111827', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '12px' }} itemStyle={{ color: '#fff' }} cursor={{fill: '#f3f4f6'}} />
                                    <Bar dataKey="amt" fill="#111827" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#111827', fontSize: 12, fontWeight: 'bold', formatter: (val: any) => `₵${val}` }} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Bar Chart - Location */}
                    <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Revenue by Location</h2>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={revenueByLocation} layout="vertical" margin={{ top: 0, right: 40, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} axisLine={false} tickLine={false} width={80} />
                                    <Tooltip contentStyle={{ backgroundColor: '#111827', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '12px' }} itemStyle={{ color: '#fff' }} cursor={{fill: '#f3f4f6'}} />
                                    <Bar dataKey="total" fill="#dc2626" radius={[0, 4, 4, 0]} label={{ position: 'right', fill: '#dc2626', fontSize: 12, fontWeight: 'bold', formatter: (val: any) => `₵${val}` }} barSize={30} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
}
