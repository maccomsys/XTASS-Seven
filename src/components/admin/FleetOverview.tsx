import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Search, Filter, Plus, CarFront, Edit, Power, PowerOff, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

const MOCK_FLEET = [
  { id: 'V-101', make: 'Toyota', model: 'Camry 2023', class: 'Sedan', level: 'Economy', capacity: { pax: 4, lug: 2 }, status: 'Available', driver: 'Unassigned', lastMaint: '2023-10-15' },
  { id: 'V-102', make: 'Mercedes-Benz', model: 'E-Class 2024', class: 'Sedan', level: 'Premium', capacity: { pax: 4, lug: 3 }, status: 'In Service', driver: 'Kofi Annan', lastMaint: '2023-11-02' },
  { id: 'V-103', make: 'Toyota', model: 'Land Cruiser 2024', class: 'SUV', level: 'Business', capacity: { pax: 6, lug: 5 }, status: 'Available', driver: 'Unassigned', lastMaint: '2023-09-20' },
  { id: 'V-104', make: 'Ford', model: 'Transit 2022', class: 'Van/Minivan', level: 'Basic', capacity: { pax: 12, lug: 6 }, status: 'Maintenance', driver: 'Unassigned', lastMaint: '2023-11-20' },
  { id: 'V-105', make: 'Honda', model: 'Accord 2023', class: 'Sedan', level: 'Economy', capacity: { pax: 4, lug: 2 }, status: 'In Service', driver: 'Esi Owusu', lastMaint: '2023-10-05' },
  { id: 'V-106', make: 'Lexus', model: 'RX 350 2024', class: 'SUV', level: 'Premium', capacity: { pax: 5, lug: 4 }, status: 'Available', driver: 'Unassigned', lastMaint: '2023-11-10' },
];

export default function FleetOverview() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterLevel, setFilterLevel] = useState('All');

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Available': return 'bg-green-100 text-green-800 border-green-800';
      case 'In Service': return 'bg-blue-100 text-blue-800 border-blue-800';
      case 'Maintenance': return 'bg-orange-100 text-orange-800 border-orange-800';
      case 'Retired': return 'bg-gray-200 text-gray-800 border-gray-800';
      default: return 'bg-gray-100 text-gray-800 border-gray-800';
    }
  };

  const filteredFleet = MOCK_FLEET.filter(vehicle => {
    const matchesSearch = vehicle.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || vehicle.status === filterStatus;
    const matchesLevel = filterLevel === 'All' || vehicle.level === filterLevel;
    
    return matchesSearch && matchesStatus && matchesLevel;
  });

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
              <CarFront className="w-8 h-8 mr-3 text-red-600" />
              Fleet Overview
            </h1>
            <p className="text-gray-500 font-medium mt-1">Manage company-owned XTASS vehicles.</p>
          </div>
          <Link 
            to="/admin/fleet/add" 
            className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm px-6 py-3 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none"
          >
            <Plus className="w-4 h-4 mr-2" /> Add Vehicle
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="bg-white border-2 border-gray-900 p-4 mb-6 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search Vehicle ID, Make, or Model..."
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
                    <option value="Available">Available</option>
                    <option value="In Service">In Service</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Retired">Retired</option>
                </select>
            </div>
            <div className="md:w-48 relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select 
                    value={filterLevel}
                    onChange={(e) => setFilterLevel(e.target.value)}
                    className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold py-3 pl-10 pr-8 focus:ring-0 focus:border-red-600 transition-colors appearance-none"
                >
                    <option value="All">All Levels</option>
                    <option value="Premium">Premium</option>
                    <option value="Business">Business</option>
                    <option value="Economy">Economy</option>
                    <option value="Basic">Basic</option>
                </select>
            </div>
        </div>

        {/* Data Table */}
        <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b-2 border-gray-900">
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Vehicle ID</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Make/Model</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden lg:table-cell">Class / Level</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden xl:table-cell">Capacity</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Status</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden lg:table-cell">Assigned Driver</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-gray-100">
                        {filteredFleet.map((vehicle) => (
                            <tr key={vehicle.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4">
                                    <span className="font-bold text-gray-900 bg-gray-100 px-2 py-1">{vehicle.id}</span>
                                </td>
                                <td className="p-4">
                                    <p className="font-black text-gray-900">{vehicle.make}</p>
                                    <p className="text-xs text-gray-500 font-bold">{vehicle.model}</p>
                                </td>
                                <td className="p-4 hidden lg:table-cell">
                                    <p className="text-sm font-bold text-gray-900">{vehicle.class}</p>
                                    <p className="text-xs text-gray-500 font-bold">{vehicle.level}</p>
                                </td>
                                <td className="p-4 hidden xl:table-cell">
                                    <p className="text-xs font-bold text-gray-700">{vehicle.capacity.pax} Pax</p>
                                    <p className="text-xs font-bold text-gray-700">{vehicle.capacity.lug} Bags</p>
                                </td>
                                <td className="p-4">
                                    <span className={`inline-flex px-2 py-1 text-xs font-bold uppercase tracking-wider border-2 ${getStatusColor(vehicle.status)}`}>
                                        {vehicle.status}
                                    </span>
                                </td>
                                <td className="p-4 hidden lg:table-cell">
                                    <span className={`text-sm font-bold ${vehicle.driver === 'Unassigned' ? 'text-gray-400 italic' : 'text-gray-900'}`}>
                                        {vehicle.driver}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center justify-end space-x-2">
                                        <button className="p-2 text-gray-500 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 transition-colors" title="View Details">
                                            <FileText className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-gray-500 hover:text-yellow-600 bg-gray-100 hover:bg-yellow-50 transition-colors" title="Edit Vehicle">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        {vehicle.status !== 'Retired' ? (
                                            <button className="p-2 text-gray-500 hover:text-red-600 bg-gray-100 hover:bg-red-50 transition-colors" title="Deactivate Vehicle">
                                                 <PowerOff className="w-4 h-4" />
                                            </button>
                                        ) : (
                                            <button className="p-2 text-gray-500 hover:text-green-600 bg-gray-100 hover:bg-green-50 transition-colors" title="Activate Vehicle">
                                                 <Power className="w-4 h-4" />
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
                <span className="text-sm font-bold text-gray-500">Showing 1-6 of {filteredFleet.length} vehicles</span>
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
