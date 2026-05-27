import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Search, Filter, History, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CustomerBookingHistory() {
    const { id } = useParams();
    const custId = id || 'CUST-001';

    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [filterType, setFilterType] = useState('All');

    // Mock data based on AllReservations structure
    const MOCK_BOOKINGS = [
        { id: 'XTA-5012', date: 'Oct 24, 2023', time: '14:30', type: 'Airport Transfer', status: 'Completed', total: 550 },
        { id: 'XTA-4980', date: 'Oct 15, 2023', time: '09:00', type: 'Car Rental', status: 'Completed', total: 1200 },
        { id: 'XTA-4855', date: 'Sep 28, 2023', time: '18:45', type: 'Instant Ride', status: 'Completed', total: 180 },
        { id: 'XTA-4710', date: 'Sep 10, 2023', time: '08:30', type: 'Scheduled Pickup', status: 'Cancelled', total: 0 },
        { id: 'XTA-4600', date: 'Aug 22, 2023', time: '12:00', type: 'Airport Transfer', status: 'Completed', total: 450 },
    ];

    const filteredBookings = MOCK_BOOKINGS.filter(b => {
        const matchesSearch = b.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'All' || b.status === filterStatus;
        const matchesType = filterType === 'All' || b.type === filterType;
        return matchesSearch && matchesStatus && matchesType;
    });

    return (
        <AdminLayout>
            <div className="p-8 max-w-6xl mx-auto">
                <div className="mb-6 flex justify-between items-center">
                    <Link to={`/admin/customers/${custId}`} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Profile
                    </Link>
                </div>

                <div className="mb-8">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <History className="w-8 h-8 mr-3 text-red-600" />
                        Booking History
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Viewing all bookings for Kwame Mensah ({custId})</p>
                </div>

                {/* Filters and Search */}
                <div className="bg-white border-2 border-gray-900 p-4 mb-6 flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search by Booking ID..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold py-3 pl-10 pr-4 focus:ring-0 focus:border-red-600 transition-colors uppercase"
                        />
                    </div>
                    <div className="md:w-48 relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <select 
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold py-3 pl-10 pr-8 focus:ring-0 focus:border-red-600 transition-colors appearance-none"
                        >
                            <option value="All">All Statuses</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                    <div className="md:w-64 relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <select 
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold py-3 pl-10 pr-8 focus:ring-0 focus:border-red-600 transition-colors appearance-none"
                        >
                            <option value="All">All Types</option>
                            <option value="Airport Transfer">Airport Transfer</option>
                            <option value="Instant Ride">Instant Ride</option>
                            <option value="Scheduled Pickup">Scheduled Pickup</option>
                            <option value="Car Rental">Car Rental</option>
                        </select>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white border-2 border-gray-900 overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-900">
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Booking ID</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Date & Time</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Type</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Status</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Total (GH₵)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-100">
                                {filteredBookings.map((b) => (
                                    <tr key={b.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4">
                                            <Link to={`/admin/reservations/${b.id}`} className="font-black text-red-600 hover:text-red-800 transition-colors uppercase tracking-widest">
                                                {b.id}
                                            </Link>
                                        </td>
                                        <td className="p-4">
                                            <p className="font-bold text-gray-900 text-sm">{b.date}</p>
                                            <p className="text-xs text-gray-500 font-bold">{b.time}</p>
                                        </td>
                                        <td className="p-4 text-sm font-bold text-gray-700">{b.type}</td>
                                        <td className="p-4">
                                            <span className={`inline-flex px-2 py-1 text-[10px] font-black uppercase tracking-wider border-2 ${
                                                b.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-700' : 
                                                'bg-gray-100 text-gray-600 border-gray-400'
                                            }`}>
                                                {b.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <span className="font-black text-gray-900 text-lg">
                                                {b.total > 0 ? b.total.toFixed(2) : '-'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                     <div className="bg-gray-50 border-t-2 border-gray-900 p-4 flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-500">Showing 1-{filteredBookings.length} of 12 bookings</span>
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
