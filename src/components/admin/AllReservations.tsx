import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Search, Filter, Download, Trash2, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const MOCK_RESERVATIONS = [
  { id: 'XTA-5012', customer: 'Kwame Mensah', type: 'Instant Ride', level: 'Economy', pickup: 'Kotoka Int Airport', date: 'Nov 15, 2024 14:30', status: 'Active', total: 150 },
  { id: 'XTA-5011', customer: 'Sarah Johnson', type: 'Car Rental', level: 'Premium', pickup: 'Osu Oxford Street', date: 'Nov 16, 2024 09:00', status: 'Pending', total: 2400 },
  { id: 'XTA-5010', customer: 'Michael Osei', type: 'Scheduled Pickup', level: 'Business', pickup: 'Kempinski Hotel', date: 'Nov 18, 2024 18:00', status: 'Upcoming', total: 320 },
  { id: 'XTA-5009', customer: 'Grace Addo', type: 'Airport Transfer', level: 'Premium', pickup: 'East Legon', date: 'Nov 14, 2024 07:15', status: 'Completed', total: 450 },
  { id: 'XTA-5008', customer: 'David Frimpong', type: 'Car Rental', level: 'Business', pickup: 'Airport Residential', date: 'Nov 10, 2024 10:00', status: 'Cancelled', total: 1200 },
  { id: 'XTA-5007', customer: 'Abena Yeboah', type: 'Instant Ride', level: 'Economy', pickup: 'Spintex Road', date: 'Nov 15, 2024 15:45', status: 'Pending', total: 85 },
];

export default function AllReservations() {
  const [selected, setSelected] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelected(MOCK_RESERVATIONS.map(r => r.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelect = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Upcoming': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 md:p-8 max-w-[1600px] mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-1">All Reservations</h1>
            <p className="text-sm font-medium text-gray-500">Manage and monitor all platform bookings.</p>
          </div>
          <div className="flex flex-wrap gap-3">
             <button className="flex items-center bg-white border border-gray-200 text-gray-700 font-bold uppercase tracking-wider text-xs px-4 py-2 hover:bg-gray-50 transition-colors shadow-sm">
                <Download className="w-4 h-4 mr-2" /> Export CSV
             </button>
             {selected.length > 0 && (
                <button className="flex items-center bg-red-50 text-red-700 border border-red-200 font-bold uppercase tracking-wider text-xs px-4 py-2 hover:bg-red-100 transition-colors shadow-sm">
                  <Trash2 className="w-4 h-4 mr-2" /> Cancel Selected ({selected.length})
                </button>
             )}
          </div>
        </div>

        {/* Toolbar (Search & Filter) */}
        <div className="bg-white border border-gray-200 shadow-sm p-4 flex flex-col lg:flex-row gap-4">
           {/* Search */}
           <div className="relative flex-grow max-w-md">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <Search className="h-5 w-5 text-gray-400" />
             </div>
             <input
               type="text"
               placeholder="Search Booking ID, Customer, Phone..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="block w-full pl-10 pr-3 py-2 border border-gray-300 bg-gray-50 font-medium text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon"
             />
           </div>
           
           {/* Filters */}
           <div className="flex flex-wrap gap-4 flex-grow">
              <div className="flex items-center">
                 <Filter className="w-4 h-4 text-gray-400 mr-2" />
                 <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-2">Status:</span>
                 <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="pl-3 pr-8 py-2 border border-gray-300 bg-gray-50 font-medium text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon"
                 >
                    <option value="All">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                 </select>
              </div>
              <div className="flex items-center">
                 <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-2">Type:</span>
                 <select className="pl-3 pr-8 py-2 border border-gray-300 bg-gray-50 font-medium text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon">
                    <option value="All">All Types</option>
                    <option value="Instant Ride">Instant Ride</option>
                    <option value="Scheduled Pickup">Scheduled Pickup</option>
                    <option value="Car Rental">Car Rental</option>
                 </select>
              </div>
              <div className="flex items-center">
                 <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-2">Date:</span>
                 <input type="date" className="pl-3 pr-3 py-2 border border-gray-300 bg-gray-50 font-medium text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon" />
              </div>
           </div>
        </div>

        {/* Data Table */}
        <div className="bg-white border border-gray-200 shadow-sm overflow-hidden flex flex-col">
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                 <thead>
                    <tr className="bg-gray-900 border-b border-gray-700">
                       <th className="py-4 px-4 w-12 text-center">
                          <input 
                            type="checkbox" 
                            className="w-4 h-4 rounded border-gray-300 text-brand-maroon focus:ring-brand-maroon"
                            onChange={handleSelectAll}
                            checked={selected.length === MOCK_RESERVATIONS.length && MOCK_RESERVATIONS.length > 0}
                          />
                       </th>
                       <th className="py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Booking ID</th>
                       <th className="py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Customer</th>
                       <th className="py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Type & Level</th>
                       <th className="py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Pickup Location</th>
                       <th className="py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Date / Time</th>
                       <th className="py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                       <th className="py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Total</th>
                       <th className="py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Actions</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                    {MOCK_RESERVATIONS.map(res => (
                       <tr key={res.id} className={`hover:bg-gray-50/50 transition-colors ${selected.includes(res.id) ? 'bg-brand-maroon/5' : ''}`}>
                          <td className="py-3 px-4 text-center">
                             <input 
                               type="checkbox" 
                               className="w-4 h-4 rounded border-gray-300 text-brand-maroon focus:ring-brand-maroon"
                               checked={selected.includes(res.id)}
                               onChange={() => handleSelect(res.id)}
                             />
                          </td>
                          <td className="py-3 px-4">
                             <Link to={`/admin/reservations/${res.id}`} className="text-sm font-black text-brand-maroon hover:underline">{res.id}</Link>
                          </td>
                          <td className="py-3 px-4">
                             <span className="text-sm font-bold text-gray-900 block">{res.customer}</span>
                          </td>
                          <td className="py-3 px-4">
                             <span className="text-sm text-gray-900 font-bold block">{res.type}</span>
                             <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{res.level}</span>
                          </td>
                          <td className="py-3 px-4">
                             <span className="text-sm text-gray-600 font-medium truncate max-w-[200px] block">{res.pickup}</span>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600 font-medium">
                             {res.date}
                          </td>
                          <td className="py-3 px-4">
                             <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${getStatusColor(res.status)}`}>
                                {res.status}
                             </span>
                          </td>
                          <td className="py-3 px-4 text-sm font-black text-gray-900 text-right">
                             GH₵ {res.total.toFixed(2)}
                          </td>
                          <td className="py-3 px-4 text-center space-x-2">
                             <Link to={`/admin/reservations/${res.id}`} className="text-xs font-bold text-gray-700 hover:text-black uppercase tracking-wider bg-gray-100 hover:bg-gray-200 px-3 py-1.5 transition-colors inline-block">
                                View
                             </Link>
                             <button className="text-xs font-bold text-brand-maroon hover:text-brand-maroon border border-brand-maroon/30 hover:border-brand-maroon px-3 py-1 transition-colors inline-block uppercase bg-white">
                                Edit
                             </button>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>

           {/* Pagination */}
           <div className="bg-gray-50 border-t border-gray-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center text-sm text-gray-600 font-medium">
                 Showing <span className="font-bold text-gray-900 mx-1">1</span> to <span className="font-bold text-gray-900 mx-1">10</span> of <span className="font-bold text-gray-900 mx-1">97</span> results
              </div>
              <div className="flex items-center space-x-2">
                 <select className="pl-2 pr-6 py-1.5 border border-gray-300 bg-white font-medium text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon mr-4">
                    <option value="10">10 per page</option>
                    <option value="25">25 per page</option>
                    <option value="50">50 per page</option>
                 </select>
                 <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                   <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                     <span className="sr-only">Previous</span>
                     <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                   </button>
                   <button className="relative inline-flex items-center px-4 py-2 border border-brand-maroon bg-brand-maroon/10 text-sm font-black text-brand-maroon">
                     1
                   </button>
                   <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                     2
                   </button>
                   <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                     3
                   </button>
                   <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                     <span className="sr-only">Next</span>
                     <ChevronRight className="h-4 w-4" aria-hidden="true" />
                   </button>
                 </nav>
              </div>
           </div>
        </div>

      </div>
    </AdminLayout>
  );
}
