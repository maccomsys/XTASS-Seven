import { useState } from 'react';
import DriverLayout from './DriverLayout';
import { History, Search, Calendar, Filter, Star, ChevronDown } from 'lucide-react';

const MOCK_HISTORY = [
    { id: 'XTA-1090', date: 'Oct 24, 2023', time: '14:30', pickup: 'Kotoka Int. Airport', dropoff: 'Kempinski Hotel', service: 'Premium', rating: 5, earnings: 120 },
    { id: 'XTA-1088', date: 'Oct 24, 2023', time: '09:15', pickup: 'East Legon', dropoff: 'Osu Oxford Street', service: 'Business', rating: 4, earnings: 85 },
    { id: 'XTA-1070', date: 'Oct 23, 2023', time: '18:45', pickup: 'Labadi Beach Hotel', dropoff: 'Cantonments', service: 'Economy', rating: null, earnings: 45 },
    { id: 'XTA-1065', date: 'Oct 22, 2023', time: '11:00', pickup: 'Achimota Mall', dropoff: 'Accra Mall', service: 'Business', rating: 5, earnings: 60 },
    { id: 'XTA-1050', date: 'Oct 21, 2023', time: '07:30', pickup: 'Tema Port', dropoff: 'Ridge', service: 'Premium', rating: 5, earnings: 150 },
];

export default function DriverTripHistory() {
    const [searchTerm, setSearchTerm] = useState('');
    
    // Simple filter simulation
    const filteredTrips = MOCK_HISTORY.filter(trip => 
        trip.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
        trip.pickup.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trip.dropoff.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <DriverLayout>
             <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-12">
                 <div className="mb-8 border-b-4 border-gray-900 pb-4">
                    <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <History className="w-8 h-8 mr-4 text-brand-maroon" />
                        Trip History
                    </h1>
                    <p className="text-gray-500 font-medium mt-2">Complete record of your completed XTASS trips.</p>
                </div>

                {/* Filters */}
                <div className="bg-white border-4 border-gray-900 p-4 sm:p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] mb-8 flex flex-col md:flex-row gap-4">
                     <div className="flex-1 relative">
                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                             <Search className="h-5 w-5 text-gray-400" />
                         </div>
                         <input 
                            type="text" 
                            placeholder="Search by ID or address..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-600 transition-colors text-sm font-bold text-gray-900"
                        />
                     </div>
                     <div className="flex flex-col sm:flex-row gap-4">
                         <div className="relative">
                             <select className="appearance-none w-full sm:w-48 pl-10 pr-10 py-3 border-2 border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-600 transition-colors text-xs font-black uppercase tracking-widest text-gray-900 cursor-pointer">
                                 <option>This Month</option>
                                 <option>This Week</option>
                                 <option>Today</option>
                                 <option>All Time</option>
                             </select>
                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-4 w-4 text-gray-400" />
                             </div>
                             <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                 <ChevronDown className="h-4 w-4 text-gray-400" />
                             </div>
                         </div>
                         <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 border-2 border-gray-200 text-gray-900 px-4 py-3 transition-colors text-xs font-black uppercase tracking-widest">
                             <Filter className="w-4 h-4 mr-2" /> Filters
                         </button>
                     </div>
                </div>

                {/* Table */}
                <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden mb-8">
                    {filteredTrips.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse whitespace-nowrap">
                                <thead>
                                    <tr className="bg-gray-100 border-b-2 border-gray-900">
                                        <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest">Date & Time</th>
                                        <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest">Booking ID</th>
                                        <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest w-1/3">Route</th>
                                        <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest">Service</th>
                                        <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest text-center">Rating</th>
                                        <th className="p-4 text-[10px] font-black text-gray-900 uppercase tracking-widest text-right">Earnings</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2 divide-gray-100">
                                    {filteredTrips.map((trip) => (
                                        <tr key={trip.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4">
                                                <p className="font-bold text-gray-900 text-sm">{trip.date}</p>
                                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{trip.time}</p>
                                            </td>
                                            <td className="p-4 font-mono font-black text-brand-maroon text-sm">{trip.id}</td>
                                            <td className="p-4">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-xs font-bold text-green-700 block truncate max-w-[200px]" title={trip.pickup}>↗ {trip.pickup}</span>
                                                    <span className="text-xs font-bold text-red-700 block truncate max-w-[200px]" title={trip.dropoff}>↘ {trip.dropoff}</span>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className="bg-gray-100 border border-gray-200 text-gray-800 text-[10px] font-black uppercase tracking-widest px-2 py-1">
                                                    {trip.service}
                                                </span>
                                            </td>
                                            <td className="p-4 text-center align-middle">
                                                {trip.rating ? (
                                                    <div className="flex items-center justify-center">
                                                        <span className="font-black text-sm mr-1">{trip.rating}</span>
                                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                    </div>
                                                ) : (
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Unrated</span>
                                                )}
                                            </td>
                                            <td className="p-4 text-right font-black text-gray-900 text-lg">GH₵ {trip.earnings}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="p-12 text-center flex flex-col items-center">
                             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                 <History className="w-8 h-8 text-gray-400" />
                             </div>
                             <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest mb-2">No trips found</h3>
                             <p className="text-gray-500 font-bold text-sm">Your trip history is empty or matches no search results.</p>
                        </div>
                    )}
                </div>

                {/* Summary Totals Footer */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t-4 border-gray-900 pt-8 mt-8">
                     <div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Total Trips</p>
                         <p className="text-3xl font-black text-gray-900">{MOCK_HISTORY.length}</p>
                     </div>
                     <div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Total Earnings</p>
                         <p className="text-3xl font-black text-brand-maroon">GH₵ 460</p>
                     </div>
                     <div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Avg Rating</p>
                         <p className="text-3xl font-black text-gray-900 flex items-center">
                             4.8 <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 ml-2" />
                         </p>
                     </div>
                </div>

            </div>
        </DriverLayout>
    );
}
