import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { MapPin, Search, Plus, Edit, FileText, Globe } from 'lucide-react';

const MOCK_LOCATIONS = [
  { id: 'LOC-001', name: 'Kotoka International Airport (ACC)', type: 'Airport', address: 'Terminal 3, KIA, Accra', reg: 'Greater Accra', status: 'Active', hours: '24/7' },
  { id: 'LOC-002', name: 'Accra City Depot (HQ)', type: 'Depot', address: '12 Independence Ave, Ridge, Accra', reg: 'Greater Accra', status: 'Active', hours: '06:00 - 22:00' },
  { id: 'LOC-003', name: 'Kumasi Airport (KMS)', type: 'Airport', address: 'Kumasi Airport Road, Kumasi', reg: 'Ashanti', status: 'Active', hours: '24/7' },
  { id: 'LOC-004', name: 'Takoradi Harbor Point', type: 'City', address: 'Harbor Road, Takoradi', reg: 'Western', status: 'Inactive', hours: '08:00 - 18:00' },
  { id: 'LOC-005', name: 'Tamale City Hub', type: 'City', address: 'Hospital Road, Tamale', reg: 'Northern', status: 'Active', hours: '07:00 - 20:00' },
];

export default function AllLocations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredLocations = MOCK_LOCATIONS.filter(loc => {
    const matchesSearch = loc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          loc.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = activeFilter === 'All' || loc.type === activeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
              <MapPin className="w-8 h-8 mr-3 text-red-600" />
              Service Locations
            </h1>
            <p className="text-gray-500 font-medium mt-1">Manage airports, city depots, and service branches.</p>
          </div>
          <Link 
            to="/admin/locations/add" 
            className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm px-6 py-3 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none"
          >
            <Plus className="w-4 h-4 mr-2" /> Add Location
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="bg-white border-2 border-gray-900 p-4 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex space-x-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                {['All', 'Airport', 'City', 'Depot'].map(filter => (
                    <button 
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap border-2 transition-colors ${
                            activeFilter === filter 
                            ? 'bg-gray-900 text-white border-gray-900' 
                            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <div className="w-full md:w-80 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold py-3 pl-10 pr-4 focus:ring-0 focus:border-red-600 transition-colors"
                />
            </div>
        </div>

        {/* Data Table */}
        <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b-2 border-gray-900">
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Location Name</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Type</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden md:table-cell">Address</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden lg:table-cell">Hours</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Status</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-gray-100">
                        {filteredLocations.map((loc) => (
                            <tr key={loc.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4">
                                    <p className="font-black text-gray-900">{loc.name}</p>
                                    <p className="text-xs text-gray-500 font-bold">{loc.id}</p>
                                </td>
                                <td className="p-4">
                                    <span className="bg-blue-50 text-blue-800 border-2 border-blue-200 uppercase tracking-widest text-[10px] font-black px-2 py-1">
                                        {loc.type}
                                    </span>
                                </td>
                                <td className="p-4 hidden md:table-cell">
                                    <p className="text-sm font-bold text-gray-700">{loc.address}</p>
                                    <p className="text-xs font-medium text-gray-500">{loc.reg} Region</p>
                                </td>
                                <td className="p-4 hidden lg:table-cell text-sm font-bold text-gray-700">
                                    {loc.hours}
                                </td>
                                <td className="p-4">
                                    <span className={`inline-flex px-2 py-1 text-xs font-bold uppercase tracking-wider border-2 ${loc.status === 'Active' ? 'bg-green-100 text-green-800 border-green-800' : 'bg-gray-200 text-gray-800 border-gray-800'}`}>
                                        {loc.status}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center justify-end space-x-2">
                                        <Link to={`/admin/locations/${loc.id}`} className="p-2 text-gray-500 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 transition-colors" title="View Details">
                                            <FileText className="w-4 h-4" />
                                        </Link>
                                        <Link to={`/admin/locations/${loc.id}/edit`} className="p-2 text-gray-500 hover:text-yellow-600 bg-gray-100 hover:bg-yellow-50 transition-colors" title="Edit Location">
                                            <Edit className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </td>
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
