import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Server, Download, Filter, ShieldAlert, CheckCircle2 } from 'lucide-react';

const MOCK_EVENTS = [
    { id: '1', timestamp: '2023-10-24 15:45:12', type: 'Payment Processing', user: 'Customer C-409', details: 'Stripe charge successful GH₵ 450.00', status: 'Success' },
    { id: '2', timestamp: '2023-10-24 15:30:00', type: 'Session Timeout', user: 'Driver D-012', details: 'Auth token expired due to inactivity', status: 'Warning' },
    { id: '3', timestamp: '2023-10-24 14:12:05', type: 'Login Attempt', user: 'System', details: 'Brute force blocked from IP 192.168.0.100', status: 'Failed' },
    { id: '4', timestamp: '2023-10-24 12:00:22', type: 'Notification Sent', user: 'Customer C-211', details: 'SMS OTP Code sent', status: 'Success' },
    { id: '5', timestamp: '2023-10-23 23:59:59', type: 'Auto-Cancellation', user: 'System', details: 'Booking B-1022 cancelled (No show)', status: 'Warning' },
];

export default function SystemEventsLog() {
    const handleExport = () => {
        alert('Downloading XTASS_System_Events_YYYY-MM-DD.csv');
    };

    const getStatusColor = (status: string) => {
        if (status === 'Success') return 'text-green-600 bg-green-50 border-green-200';
        if (status === 'Failed') return 'text-red-700 bg-red-50 border-red-200';
        return 'text-yellow-700 bg-yellow-50 border-yellow-200';
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-7xl mx-auto">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <Server className="w-8 h-8 mr-3 text-red-600" />
                            System Events Log
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Automated system events tracking and automated actions.</p>
                    </div>
                    
                    <button 
                        onClick={handleExport}
                        className="bg-white border-2 border-gray-900 hover:bg-gray-50 text-gray-900 font-black uppercase tracking-widest text-xs px-6 py-3 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none"
                    >
                        <Download className="w-4 h-4 mr-2" /> Export CSV
                    </button>
                </div>

                {/* Filters */}
                <div className="bg-white border-4 border-gray-900 p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] mb-8">
                     <div className="flex items-center mb-4 text-sm font-black text-gray-900 uppercase tracking-widest">
                         <Filter className="w-5 h-5 mr-2" /> Filter Events
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         <div>
                             <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Event Type</label>
                             <select className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                                <option>All Events</option>
                                <option>Session Timeout</option>
                                <option>Login Attempts</option>
                                <option>Payment Events</option>
                                <option>Notification Sends</option>
                             </select>
                         </div>
                         <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Date From</label>
                              <input type="date" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                         </div>
                         <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Date To</label>
                              <input type="date" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                         </div>
                     </div>
                </div>

                {/* Events Table */}
                <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                     <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse whitespace-nowrap">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-900">
                                    <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest">Timestamp</th>
                                    <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest">Event Type</th>
                                    <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest">User / Actor</th>
                                    <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest">Details</th>
                                    <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-100">
                                {MOCK_EVENTS.map((event) => (
                                    <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 text-xs font-bold text-gray-600 font-mono">{event.timestamp}</td>
                                        <td className="p-4">
                                            <span className="font-black text-gray-900 text-sm">
                                                {event.type}
                                            </span>
                                        </td>
                                        <td className="p-4 text-xs font-bold text-gray-700">{event.user}</td>
                                        <td className="p-4 text-xs font-medium text-gray-600 truncate max-w-sm" title={event.details}>{event.details}</td>
                                        <td className="p-4 text-center">
                                            <span className={`inline-flex px-3 py-1 text-[10px] font-black uppercase tracking-wider border-2 ${getStatusColor(event.status)}`}>
                                                {event.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                     </div>
                     
                     {/* Pagination Placeholder */}
                     <div className="p-4 border-t-2 border-gray-200 flex items-center justify-between bg-gray-50">
                         <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Showing 1-5 of 8,421 events</span>
                         <div className="flex space-x-2">
                             <button className="px-3 py-1 border-2 border-gray-300 text-xs font-bold text-gray-400 cursor-not-allowed">PREV</button>
                             <button className="px-3 py-1 border-2 border-gray-900 bg-gray-900 text-white text-xs font-bold">1</button>
                             <button className="px-3 py-1 border-2 border-gray-300 hover:border-gray-900 hover:text-gray-900 text-xs font-bold transition-colors">2</button>
                             <button className="px-3 py-1 border-2 border-gray-300 hover:border-gray-900 hover:text-gray-900 text-xs font-bold transition-colors">3</button>
                             <button className="px-3 py-1 border-2 border-gray-300 hover:border-gray-900 hover:text-gray-900 text-xs font-bold transition-colors">NEXT</button>
                         </div>
                     </div>
                </div>

            </div>
        </AdminLayout>
    );
}
