import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { UserCheck, Star, Calendar } from 'lucide-react';
import {
  LineChart, Line, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine
} from 'recharts';

const ratingData = [
  { p: 'Week 1', rating: 4.2 }, { p: 'Week 2', rating: 4.4 }, { p: 'Week 3', rating: 4.6 }, { p: 'Week 4', rating: 4.7 }
];

const radarData = [
  { subject: 'Trips Completed', A: 120, B: 110, fullMark: 150 },
  { subject: 'Avg Rating (x10)', A: 48, B: 46, fullMark: 50 },
  { subject: 'On-Time %', A: 96, B: 90, fullMark: 100 },
  { subject: 'Acceptance %', A: 90, B: 85, fullMark: 100 },
  { subject: 'Positive Feedback %', A: 95, B: 80, fullMark: 100 },
];

export default function DriverPerformanceReport() {
    const [period, setPeriod] = useState('Last 30 Days');

    return (
        <AdminLayout>
            <div className="p-8">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <UserCheck className="w-8 h-8 mr-3 text-red-600" />
                            Driver Performance
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Analytics comparing performance metrics across all employed XTASS drivers.</p>
                    </div>
                    
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <select 
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                            className="bg-white border-4 border-gray-900 text-gray-900 text-sm font-black py-3 pl-10 pr-8 focus:ring-0 appearance-none shadow-[4px_4px_0_0_rgba(0,0,0,1)] w-full sm:w-64 cursor-pointer"
                        >
                            <option value="Last 7 Days">Last 7 Days</option>
                            <option value="Last 30 Days">Last 30 Days</option>
                            <option value="Last 90 Days">Last 90 Days</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
                    {/* Line Chart */}
                    <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-100 pb-2">Average Platform Rating</h2>
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={ratingData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                    <XAxis dataKey="p" tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
                                    <YAxis domain={[3, 5]} tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
                                    <Tooltip contentStyle={{ backgroundColor: '#111827', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase' }} itemStyle={{ color: '#fff' }} />
                                    <ReferenceLine y={4.5} label={{ position: 'top', value: 'TARGET: 4.5', fill: '#059669', fontSize: 10, fontWeight: 'bold' }} stroke="#059669" strokeDasharray="3 3" />
                                    <Line type="monotone" dataKey="rating" stroke="#111827" strokeWidth={4} dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Radar Chart */}
                    <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                         <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-100 pb-2">Driver Comparison (Top 2 vs Average)</h2>
                         <div className="h-72">
                             <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                                    <PolarGrid stroke="#e5e7eb" />
                                    <PolarAngleAxis dataKey="subject" tick={{fill: '#6b7280', fontSize: 10, fontWeight: 'bold'}} />
                                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                                    <Radar name="Top Driver (K. Annan)" dataKey="A" stroke="#dc2626" fill="#dc2626" fillOpacity={0.4} strokeWidth={2} />
                                    <Radar name="Fleet Average" dataKey="B" stroke="#6b7280" fill="#6b7280" fillOpacity={0.2} strokeWidth={2} />
                                    <Legend wrapperStyle={{ fontSize: '12px', fontWeight: 'bold', paddingTop: '10px' }} />
                                     <Tooltip contentStyle={{ backgroundColor: '#111827', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '12px' }} itemStyle={{ color: '#fff' }} />
                                </RadarChart>
                            </ResponsiveContainer>
                         </div>
                    </div>
                </div>

                {/* Data Table */}
                <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                    <div className="p-4 border-b-2 border-gray-200 bg-gray-50 flex justify-between items-center">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Top Drivers by Trips</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-900">
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest w-12 text-center">Rank</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Driver Name</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center">Trips Completed</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center">Avg Rating</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center">On-Time Rate</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center hidden sm:table-cell">Cancel Rate</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-100">
                                {[
                                    { rank: 1, id: 'D-001', name: 'Kofi Annan', trips: 145, rating: 4.9, ontime: '98%', cancel: '1%' },
                                    { rank: 2, id: 'D-003', name: 'Esi Owusu', trips: 132, rating: 4.8, ontime: '95%', cancel: '2%' },
                                    { rank: 3, id: 'D-002', name: 'Yaw Mensah', trips: 110, rating: 4.7, ontime: '94%', cancel: '3%' },
                                    { rank: 4, id: 'D-005', name: 'Linda Ofori', trips: 95, rating: 4.8, ontime: '97%', cancel: '1%' },
                                    { rank: 5, id: 'D-004', name: 'Kwame Osei', trips: 88, rating: 4.6, ontime: '90%', cancel: '5%' },
                                ].map((d) => (
                                    <tr key={d.rank} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 text-center font-black text-gray-400">{d.rank}</td>
                                        <td className="p-4">
                                            <Link to={`/admin/drivers/${d.id}`} className="font-black text-brand-maroon hover:underline">
                                                {d.name}
                                            </Link>
                                        </td>
                                        <td className="p-4 text-center font-bold text-gray-900">{d.trips}</td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center text-yellow-500 font-bold">
                                                <Star className="w-4 h-4 mr-1 fill-current" /> {d.rating}
                                            </div>
                                        </td>
                                        <td className="p-4 text-center font-bold text-green-600">{d.ontime}</td>
                                        <td className="p-4 text-center font-bold text-gray-600 hidden sm:table-cell">{d.cancel}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
}
