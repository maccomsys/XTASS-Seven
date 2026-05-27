import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Activity, Gauge, Download, AlertTriangle } from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const utisationOverTime = [
  { p: 'Mon', num: 65 }, { p: 'Tue', num: 68 }, { p: 'Wed', num: 75 },
  { p: 'Thu', num: 72 }, { p: 'Fri', num: 85 }, { p: 'Sat', num: 92 }, { p: 'Sun', num: 88 },
];
const utilisationByType = [
  { name: 'Sedan', amt: 85 }, { name: 'SUV', amt: 70 }, { name: 'Van', amt: 60 },
];

export default function VehicleUtilisationReport() {
    return (
        <AdminLayout>
            <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <Gauge className="w-8 h-8 mr-3 text-red-600" />
                            Vehicle Utilisation
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Analytics showing how efficiently the company-owned fleet is being used.</p>
                    </div>
                    <button className="bg-gray-900 hover:bg-gray-800 text-white font-black uppercase tracking-widest text-xs px-6 py-3 transition-colors flex items-center justify-center">
                        <Download className="w-4 h-4 mr-2" /> Export Report
                    </button>
                </div>

                {/* Overall KPI */}
                <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] mb-8 flex items-center justify-between">
                    <div>
                        <h3 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-2 flex items-center">
                            <Activity className="w-4 h-4 mr-2 text-red-600" /> Fleet-Wide Utilisation Rate
                        </h3>
                        <p className="text-5xl font-black text-gray-900 tracking-tight">76.4%<span className="text-lg text-green-500 ml-3 uppercase tracking-wider text-sm font-bold">↑ 2.1% this week</span></p>
                    </div>
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-bold text-gray-500">Based on Total Trip Hours ÷</p>
                        <p className="text-sm font-bold text-gray-500">Total Available Vehicle Hours</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
                    {/* Line Chart */}
                    <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Utilisation Over Time (%)</h2>
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={utisationOverTime} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                    <XAxis dataKey="p" tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
                                    <YAxis domain={[0, 100]} tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} axisLine={false} tickLine={false} tickFormatter={(val) => `${val}%`} />
                                    <Tooltip contentStyle={{ backgroundColor: '#111827', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase' }} itemStyle={{ color: '#fff' }} formatter={(val) => `${val}%`} />
                                    <Line type="monotone" dataKey="num" stroke="#dc2626" strokeWidth={4} dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Bar Chart - Type */}
                    <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Utilisation by Vehicle Type (%)</h2>
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={utilisationByType} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                    <XAxis dataKey="name" tick={{fill: '#6b7280', fontSize: 12, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
                                    <YAxis domain={[0, 100]} hide />
                                    <Tooltip contentStyle={{ backgroundColor: '#111827', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '12px' }} itemStyle={{ color: '#fff' }} cursor={{fill: '#f3f4f6'}} formatter={(val) => `${val}%`} />
                                    <Bar dataKey="amt" fill="#111827" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#111827', fontSize: 12, fontWeight: 'bold', formatter: (val: any) => `${val}%` }} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    <div className="xl:col-span-2 bg-white border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <div className="p-4 border-b-2 border-gray-200">
                             <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Revenue Per Vehicle</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 border-b-2 border-gray-900">
                                        <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Vehicle</th>
                                        <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center">Trips Completed</th>
                                        <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Total Revenue (GH₵)</th>
                                        <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Utilisation</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2 divide-gray-100">
                                    {[
                                        { id: 'V-101', model: 'Toyota Camry (2022)', trips: 45, rev: 4500, util: 88 },
                                        { id: 'V-102', model: 'Honda CR-V (2021)', trips: 38, rev: 5200, util: 75 },
                                        { id: 'V-205', model: 'Mercedes Sprinter (2020)', trips: 15, rev: 8500, util: 62 },
                                        { id: 'V-108', model: 'Toyota Corolla (2023)', trips: 52, rev: 3800, util: 91 },
                                    ].map((v) => (
                                        <tr key={v.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4">
                                                <p className="font-black text-gray-900 text-sm leading-tight">{v.model}</p>
                                                <p className="text-xs text-gray-500 font-bold">{v.id}</p>
                                            </td>
                                            <td className="p-4 text-center">
                                                <span className="font-bold text-gray-900">{v.trips}</span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <span className="font-black text-brand-maroon">{v.rev.toLocaleString()}</span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <span className="font-bold text-gray-900">{v.util}%</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="xl:col-span-1 bg-red-50 border-4 border-red-600 shadow-[4px_4px_0_0_rgba(220,38,38,1)] p-6">
                        <h2 className="text-sm font-black text-red-800 uppercase tracking-widest mb-6 flex items-center border-b-2 border-red-200 pb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Underutilised Vehicles
                        </h2>
                        <p className="text-xs font-bold text-red-600 mb-4">Vehicles used less than 40% of available hours this week.</p>
                        <div className="space-y-4">
                            {[
                                { id: 'V-304', model: 'Ford Transit (2019)', util: 25, last: '3 days ago' },
                                { id: 'V-112', model: 'Nissan Altima (2018)', util: 32, last: '2 days ago' },
                            ].map((v) => (
                                <div key={v.id} className="bg-white p-4 border-2 border-red-300 relative overflow-hidden">
                                     <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black px-2 py-1 uppercase tracking-widest">
                                        {v.util}% Util
                                    </div>
                                    <p className="font-black text-gray-900 text-sm">{v.model}</p>
                                    <p className="text-xs text-gray-500 font-bold mb-2">ID: {v.id}</p>
                                    <p className="text-xs text-red-600 font-bold">Last Trip: {v.last}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
}
