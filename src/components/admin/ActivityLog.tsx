import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { History, Download, Filter, Search } from 'lucide-react';

const MOCK_LOGS = [
    { id: '1', timestamp: '2023-10-24 14:32:10', admin: 'Super Admin', action: 'Booking Modified', entity: 'Booking B-1090', details: 'Changed pickup time to 15:00', ip: '192.168.1.45' },
    { id: '2', timestamp: '2023-10-24 11:15:00', admin: 'Jane Doe', action: 'Driver Promoted', entity: 'Driver D-004', details: 'Changed status to Active', ip: '192.168.1.88' },
    { id: '3', timestamp: '2023-10-23 09:45:22', admin: 'John Smith', action: 'Rate Updated', entity: 'Premium Service', details: 'Increased per km rate by GH₵ 2', ip: '10.0.0.12' },
    { id: '4', timestamp: '2023-10-23 08:30:00', admin: 'Super Admin', action: 'Refund Issued', entity: 'Booking B-1055', details: 'Full refund processed', ip: '192.168.1.45' },
    { id: '5', timestamp: '2023-10-22 16:20:15', admin: 'Jane Doe', action: 'Vehicle Added', entity: 'Vehicle V-122', details: 'Added new Toyota Camry', ip: '192.168.1.88' },
];

export default function ActivityLog() {
    const handleExport = () => {
        alert('Downloading XTASS_Activity_Log_YYYY-MM-DD.csv');
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-7xl mx-auto">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <History className="w-8 h-8 mr-3 text-red-600" />
                            Activity Log
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Audit trail of all actions taken by administrators.</p>
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
                         <Filter className="w-5 h-5 mr-2" /> Filter Logs
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                         <div>
                             <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Admin User</label>
                             <select className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                                <option>All Admins</option>
                                <option>Super Admin</option>
                                <option>Jane Doe</option>
                                <option>John Smith</option>
                             </select>
                         </div>
                         <div>
                             <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Action Type</label>
                             <select className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                                <option>All Actions</option>
                                <option>Booking Modified</option>
                                <option>Rate Updated</option>
                                <option>Driver Suspended</option>
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

                {/* Log Table */}
                <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                     <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse whitespace-nowrap">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-900">
                                    <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest">Timestamp</th>
                                    <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest">Admin User</th>
                                    <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest">Action Type</th>
                                    <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest">Entity</th>
                                    <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest">Details</th>
                                    <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest">IP Address</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-100">
                                {MOCK_LOGS.map((log) => (
                                    <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 text-xs font-bold text-gray-600 font-mono">{log.timestamp}</td>
                                        <td className="p-4 text-sm font-black text-gray-900">{log.admin}</td>
                                        <td className="p-4">
                                            <span className="bg-gray-100 text-[10px] font-black uppercase tracking-widest px-2 py-1 text-gray-700 border border-gray-300">
                                                {log.action}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm font-bold text-brand-maroon">{log.entity}</td>
                                        <td className="p-4 text-xs font-bold text-gray-600 truncate max-w-[200px]" title={log.details}>{log.details}</td>
                                        <td className="p-4 text-xs font-mono text-gray-500">{log.ip}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                     </div>
                     
                     {/* Pagination Placeholder */}
                     <div className="p-4 border-t-2 border-gray-200 flex items-center justify-between bg-gray-50">
                         <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Showing 1-5 of 142 entries</span>
                         <div className="flex space-x-2">
                             <button className="px-3 py-1 border-2 border-gray-300 text-xs font-bold text-gray-400 cursor-not-allowed">PREV</button>
                             <button className="px-3 py-1 border-2 border-gray-900 bg-gray-900 text-white text-xs font-bold">1</button>
                             <button className="px-3 py-1 border-2 border-gray-300 hover:border-gray-900 hover:text-gray-900 text-xs font-bold transition-colors">2</button>
                             <button className="px-3 py-1 border-2 border-gray-300 hover:border-gray-900 hover:text-gray-900 text-xs font-bold transition-colors">NEXT</button>
                         </div>
                     </div>
                </div>

            </div>
        </AdminLayout>
    );
}
