import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { CalendarDays, Download, Calendar } from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// Mock Data
const bookingsOverTime = [
  { p: 'Mon', num: 45 }, { p: 'Tue', num: 52 }, { p: 'Wed', num: 38 },
  { p: 'Thu', num: 65 }, { p: 'Fri', num: 85 }, { p: 'Sat', num: 110 }, { p: 'Sun', num: 95 },
];
const statusDistribution = [
  { name: 'Completed', value: 350 }, { name: 'Upcoming', value: 85 }, { name: 'Active', value: 25 }, { name: 'Cancelled', value: 30 }
];
const bookingsByType = [
  { name: 'Instant', amt: 240 }, { name: 'Scheduled', amt: 150 }, { name: 'Rental', amt: 100 },
];
const bookingsByLevel = [
  { name: 'Premium', amt: 80 }, { name: 'Business', amt: 120 }, { name: 'Economy', amt: 200 }, { name: 'Basic', amt: 90 },
];

const COLORS = ['#16a34a', '#3b82f6', '#f59e0b', '#dc2626']; // Green, Blue, Amber, Red

// Generate heatmap data
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const hours = Array.from({length: 24}, (_, i) => i);
const peakHoursData = days.map(d => hours.map(h => Math.floor(Math.random() * 20)));

export default function BookingReport() {
    const [period, setPeriod] = useState('Last 7 Days');

    return (
        <AdminLayout>
            <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <CalendarDays className="w-8 h-8 mr-3 text-red-600" />
                            Booking & Reservation Report
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Analytics showing booking volume, trends, and distribution.</p>
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

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
                    {/* Line Chart */}
                    <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Total Bookings</h2>
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={bookingsOverTime} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                    <XAxis dataKey="p" tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
                                    <YAxis tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
                                    <Tooltip contentStyle={{ backgroundColor: '#111827', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase' }} itemStyle={{ color: '#fff' }} />
                                    <Line type="monotone" dataKey="num" stroke="#dc2626" strokeWidth={4} dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Donut Chart */}
                    <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Status Distribution</h2>
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={statusDistribution} innerRadius={80} outerRadius={110} paddingAngle={2} dataKey="value" stroke="none">
                                        {statusDistribution.map((entry, index) => (
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
                    {/* Bar Chart - Type */}
                    <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Bookings by Type</h2>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={bookingsByType} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                    <XAxis dataKey="name" tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
                                    <YAxis hide />
                                    <Tooltip contentStyle={{ backgroundColor: '#111827', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '12px' }} itemStyle={{ color: '#fff' }} cursor={{fill: '#f3f4f6'}} />
                                    <Bar dataKey="amt" fill="#111827" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#111827', fontSize: 12, fontWeight: 'bold' }} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Bar Chart - Service Level */}
                    <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Bookings by Service Level</h2>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={bookingsByLevel} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                    <XAxis dataKey="name" tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
                                    <YAxis hide />
                                    <Tooltip contentStyle={{ backgroundColor: '#111827', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '12px' }} itemStyle={{ color: '#fff' }} cursor={{fill: '#f3f4f6'}} />
                                    <Bar dataKey="amt" fill="#dc2626" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#dc2626', fontSize: 12, fontWeight: 'bold' }} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Peak Hours Heatmap Placeholder */}
                <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] overflow-hidden">
                    <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-100 pb-2">Peak Hours Heatmap (Bookings)</h2>
                    <div className="overflow-x-auto pb-4">
                        <div className="min-w-[800px]">
                            <div className="flex mb-2">
                                <div className="w-12"></div> {/* Empty space for day labels */}
                                {hours.map(h => (
                                    <div key={h} className="flex-1 text-center text-[10px] font-bold text-gray-400">{h}:00</div>
                                ))}
                            </div>
                            {days.map((day, dIdx) => (
                                <div key={day} className="flex mb-1">
                                    <div className="w-12 text-xs font-black text-gray-600 flex items-center">{day}</div>
                                    {peakHoursData[dIdx].map((val, hIdx) => {
                                        // Calculate opacity based on value (0-20)
                                        const opacity = val === 0 ? 0.05 : val / 20;
                                        return (
                                            <div 
                                                key={hIdx} 
                                                className="flex-1 h-8 m-[1px] group relative" 
                                                style={{ backgroundColor: `rgba(220, 38, 38, ${opacity})` }}
                                            >
                                                <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded z-10 whitespace-nowrap">
                                                    {val} bookings<br/>{day} at {hIdx}:00
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
}
