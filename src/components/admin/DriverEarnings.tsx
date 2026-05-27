import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Search, Filter, DollarSign, CheckCircle2, ChevronLeft, ChevronRight, Eye, RefreshCw, Send } from 'lucide-react';

const MOCK_EARNINGS = [
    { id: 'ERN-001', driverId: 'D-001', driverName: 'Kofi Annan', trips: 45, gross: 4500, fee: 450, net: 4050, status: 'Pending', period: 'Oct 01 - Oct 15, 2023' },
    { id: 'ERN-002', driverId: 'D-002', driverName: 'Yaw Mensah', trips: 32, gross: 2800, fee: 280, net: 2520, status: 'Processing', period: 'Oct 01 - Oct 15, 2023' },
    { id: 'ERN-003', driverId: 'D-003', driverName: 'Esi Owusu', trips: 55, gross: 6100, fee: 610, net: 5490, status: 'Completed', period: 'Sep 15 - Sep 30, 2023' },
    { id: 'ERN-004', driverId: 'D-005', driverName: 'Linda Ofori', trips: 28, gross: 3200, fee: 320, net: 2880, status: 'Pending', period: 'Oct 01 - Oct 15, 2023' },
    { id: 'ERN-005', driverId: 'D-001', driverName: 'Kofi Annan', trips: 40, gross: 4000, fee: 400, net: 3600, status: 'Completed', period: 'Sep 15 - Sep 30, 2023' },
];

export default function DriverEarnings() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [earnings, setEarnings] = useState(MOCK_EARNINGS);

    const filteredEarnings = earnings.filter(e => {
        const matchesSearch = e.driverName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'All' || e.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const updateStatus = (id: string, newStatus: string) => {
        setEarnings(earnings.map(e => e.id === id ? { ...e, status: newStatus } : e));
    };

    const getStatusStyle = (status: string) => {
        if (status === 'Pending') return 'bg-yellow-100 text-yellow-800 border-yellow-800';
        if (status === 'Processing') return 'bg-blue-100 text-blue-800 border-blue-800';
        if (status === 'Completed') return 'bg-green-100 text-green-800 border-green-800';
        return 'bg-gray-100 text-gray-800 border-gray-800';
    };

    return (
        <AdminLayout>
            <div className="p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <DollarSign className="w-8 h-8 mr-3 text-red-600" />
                        Driver Earnings Overview
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Manage driver payouts, track earnings, and process withdrawal requests.</p>
                </div>

                {/* Filters */}
                <div className="bg-white border-2 border-gray-900 p-4 mb-6 flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search by driver name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold py-3 pl-10 pr-4 focus:ring-0 focus:border-red-600 transition-colors"
                        />
                    </div>
                    <div className="md:w-64">
                         <input type="date" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold py-3 px-4 focus:ring-0 focus:border-red-600 transition-colors" placeholder="Date Range" />
                    </div>
                    <div className="md:w-48 relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <select 
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold py-3 pl-10 pr-8 focus:ring-0 focus:border-red-600 transition-colors appearance-none"
                        >
                            <option value="All">All Statuses</option>
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>

                {/* Data Table */}
                <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-900">
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden md:table-cell">Period</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Driver Name</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center">Trips</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right hidden lg:table-cell">Gross (GH₵)</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right hidden lg:table-cell">Fee (GH₵)</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right text-brand-maroon">Net Payout</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Status</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-100">
                                {filteredEarnings.map((e) => (
                                    <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 hidden md:table-cell">
                                            <span className="font-bold text-gray-700 text-xs">{e.period}</span>
                                        </td>
                                        <td className="p-4">
                                            <Link to={`/admin/drivers/${e.driverId}`} className="font-black text-brand-maroon hover:underline transition-colors block leading-tight">{e.driverName}</Link>
                                            <span className="text-xs text-gray-500 font-bold md:hidden">{e.period}</span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className="font-bold text-gray-900">{e.trips}</span>
                                        </td>
                                        <td className="p-4 text-right hidden lg:table-cell">
                                            <span className="font-bold text-gray-700">{e.gross.toFixed(2)}</span>
                                        </td>
                                        <td className="p-4 text-right hidden lg:table-cell">
                                            <span className="font-bold text-red-600">-{e.fee.toFixed(2)}</span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <span className="font-black text-gray-900 text-lg">
                                                {e.net.toFixed(2)}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <span className={`inline-flex px-2 py-1 text-[10px] font-black uppercase tracking-wider border-2 ${getStatusStyle(e.status)}`}>
                                                {e.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-end space-x-2">
                                                <button className="p-2 text-gray-500 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 transition-colors" title="View Details">
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                {e.status === 'Pending' && (
                                                    <button onClick={() => updateStatus(e.id, 'Processing')} className="p-2 text-gray-500 hover:text-yellow-600 bg-gray-100 hover:bg-yellow-50 transition-colors" title="Mark as Processing">
                                                        <RefreshCw className="w-4 h-4" />
                                                    </button>
                                                )}
                                                {e.status === 'Processing' && (
                                                    <button onClick={() => updateStatus(e.id, 'Completed')} className="p-2 text-gray-500 hover:text-green-600 bg-gray-100 hover:bg-green-50 transition-colors" title="Mark as Completed & Notify">
                                                        <CheckCircle2 className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className="bg-gray-50 border-t-2 border-gray-900 p-4 flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-500">Showing 1-{filteredEarnings.length} of {MOCK_EARNINGS.length} records</span>
                        <div className="flex space-x-2">
                            <button className="p-2 bg-white border-2 border-gray-300 text-gray-400 cursor-not-allowed">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button className="p-2 bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-100 transition-colors">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
