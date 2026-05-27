import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Users, Search, Filter, Eye, Ban, CheckCircle2, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const MOCK_DRIVERS = [
  { id: 'D-001', name: 'Kofi Annan', phone: '+233 24 111 2222', levels: 'Premium, Business', status: 'Online', vehicle: 'GR-1234-24 (Sedan)', docs: 'Verified', rating: 4.9 },
  { id: 'D-002', name: 'Yaw Mensah', phone: '+233 50 333 4444', levels: 'Economy, Basic', status: 'On Trip', vehicle: 'GW-5678-22 (Sedan)', docs: 'Verified', rating: 4.7 },
  { id: 'D-003', name: 'Esi Owusu', phone: '+233 55 555 6666', levels: 'Business, Economy', status: 'Offline', vehicle: 'GT-9012-23 (SUV)', docs: 'Pending Review', rating: 4.8 },
  { id: 'D-004', name: 'Samuel Osei', phone: '+233 20 777 8888', levels: 'Basic', status: 'Suspended', vehicle: 'Unassigned', docs: 'Expired', rating: 4.2 },
  { id: 'D-005', name: 'Linda Ofori', phone: '+233 24 999 0000', levels: 'Premium', status: 'Online', vehicle: 'GE-3456-24 (SUV)', docs: 'Verified', rating: 5.0 },
];

export default function DriverList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterDocs, setFilterDocs] = useState('All');

  const filteredDrivers = MOCK_DRIVERS.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          d.phone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || d.status === filterStatus;
    const matchesDocs = filterDocs === 'All' || d.docs === filterDocs;
    
    return matchesSearch && matchesStatus && matchesDocs;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Online': return 'bg-green-100 text-green-800 border-green-800';
      case 'On Trip': return 'bg-blue-100 text-blue-800 border-blue-800';
      case 'Offline': return 'bg-gray-100 text-gray-800 border-gray-800';
      case 'Suspended': return 'bg-red-100 text-red-800 border-red-800';
      default: return 'bg-gray-100 text-gray-800 border-gray-800';
    }
  };

  const getDocColor = (docs: string) => {
    switch(docs) {
      case 'Verified': return 'text-green-700';
      case 'Pending Review': return 'text-yellow-700';
      case 'Expired': return 'text-red-700';
      default: return 'text-gray-700';
    }
  };

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
              <Users className="w-8 h-8 mr-3 text-red-600" />
              Drivers
            </h1>
            <p className="text-gray-500 font-medium mt-1">Manage all employed XTASS drivers.</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white border-2 border-gray-900 p-4 mb-6 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search by name or phone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold py-3 pl-10 pr-4 focus:ring-0 focus:border-red-600 transition-colors"
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
                    <option value="Online">Online</option>
                    <option value="On Trip">On Trip</option>
                    <option value="Offline">Offline</option>
                    <option value="Suspended">Suspended</option>
                </select>
            </div>
            <div className="md:w-48 relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select 
                    value={filterDocs}
                    onChange={(e) => setFilterDocs(e.target.value)}
                    className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold py-3 pl-10 pr-8 focus:ring-0 focus:border-red-600 transition-colors appearance-none"
                >
                    <option value="All">All Doc Status</option>
                    <option value="Verified">Verified</option>
                    <option value="Pending Review">Pending Review</option>
                    <option value="Expired">Expired</option>
                </select>
            </div>
        </div>

        {/* Data Table */}
        <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b-2 border-gray-900">
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest w-16">Profile</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Driver</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden lg:table-cell">Service Levels</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Status</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden xl:table-cell">Assigned Vehicle</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Docs</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden md:table-cell">Rating</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-gray-100">
                        {filteredDrivers.map((d) => (
                            <tr key={d.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden border-2 border-gray-900">
                                         <img src={`https://i.ibb.co/NnFG4ZN6/Resized-5.jpg' ', '+')}&background=random`} alt={d.name} className="w-full h-full object-cover" />
                                    </div>
                                </td>
                                <td className="p-4">
                                    <Link to={`/admin/drivers/${d.id}`} className="font-black text-red-600 hover:text-red-800 transition-colors block">{d.name}</Link>
                                    <p className="text-xs text-gray-500 font-bold">{d.phone}</p>
                                </td>
                                <td className="p-4 hidden lg:table-cell text-sm font-bold text-gray-700">
                                    {d.levels}
                                </td>
                                <td className="p-4">
                                    <span className={`inline-flex px-2 py-1 text-[10px] font-black uppercase tracking-wider border-2 ${getStatusColor(d.status)}`}>
                                        {d.status}
                                    </span>
                                </td>
                                <td className="p-4 hidden xl:table-cell">
                                    <span className="text-xs font-bold text-gray-900 border border-gray-300 px-2 py-1 bg-gray-100">{d.vehicle}</span>
                                </td>
                                <td className="p-4">
                                     <span className={`text-xs font-bold ${getDocColor(d.docs)}`}>
                                        {d.docs}
                                    </span>
                                </td>
                                <td className="p-4 hidden md:table-cell">
                                    <div className="flex items-center text-sm font-black text-gray-900">
                                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                                        {d.rating.toFixed(1)}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center justify-end space-x-2">
                                        <Link to={`/admin/drivers/${d.id}`} className="p-2 text-gray-500 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 transition-colors" title="View Profile">
                                            <Eye className="w-4 h-4" />
                                        </Link>
                                        {d.status !== 'Suspended' ? (
                                            <button className="p-2 text-gray-500 hover:text-red-600 bg-gray-100 hover:bg-red-50 transition-colors" title="Suspend Driver">
                                                <Ban className="w-4 h-4" />
                                            </button>
                                        ) : (
                                            <button className="p-2 text-gray-500 hover:text-green-600 bg-gray-100 hover:bg-green-50 transition-colors" title="Reactivate Driver">
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
                <span className="text-sm font-bold text-gray-500">Showing 1-{filteredDrivers.length} of {MOCK_DRIVERS.length} drivers</span>
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
