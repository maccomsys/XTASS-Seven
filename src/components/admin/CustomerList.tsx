import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Users, Search, Filter, Eye, Ban, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const MOCK_CUSTOMERS = [
  { id: 'CUST-001', name: 'Kwame Mensah', email: 'kwame@example.com', phone: '+233 24 123 4567', regDate: '2023-01-15', totalBookings: 12, status: 'Active' },
  { id: 'CUST-002', name: 'Grace Addo', email: 'grace.a@example.com', phone: '+233 50 987 6543', regDate: '2023-03-22', totalBookings: 5, status: 'Active' },
  { id: 'CUST-003', name: 'David Frimpong', email: 'david.f@example.com', phone: '+233 55 456 7890', regDate: '2023-06-10', totalBookings: 24, status: 'Active' },
  { id: 'CUST-004', name: 'Anita Yeboah', email: 'anita.y@example.com', phone: '+233 20 111 2222', regDate: '2023-08-05', totalBookings: 1, status: 'Suspended' },
  { id: 'CUST-005', name: 'John Appiah', email: 'john.ap@example.com', phone: '+233 24 333 4444', regDate: '2023-09-12', totalBookings: 8, status: 'Active' },
  { id: 'CUST-006', name: 'Mercy Baidoo', email: 'mercy.b@example.com', phone: '+233 27 555 6666', regDate: '2023-10-01', totalBookings: 3, status: 'Active' },
];

export default function CustomerList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredCustomers = MOCK_CUSTOMERS.filter(cust => {
    const matchesSearch = cust.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          cust.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          cust.phone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || cust.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
              <Users className="w-8 h-8 mr-3 text-red-600" />
              Customers
            </h1>
            <p className="text-gray-500 font-medium mt-1">Manage all registered users on the platform.</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white border-2 border-gray-900 p-4 mb-6 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search by name, email, or phone..."
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
                    <option value="Active">Active</option>
                    <option value="Suspended">Suspended</option>
                </select>
            </div>
        </div>

        {/* Data Table */}
        <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b-2 border-gray-900">
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden md:table-cell">Customer ID</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Full Name</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden lg:table-cell">Contact</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden xl:table-cell">Reg Date</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center">Bookings</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Status</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-gray-100">
                        {filteredCustomers.map((cust) => (
                            <tr key={cust.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 hidden md:table-cell">
                                    <span className="font-bold text-gray-900 bg-gray-100 px-2 py-1">{cust.id}</span>
                                </td>
                                <td className="p-4">
                                    <Link to={`/admin/customers/${cust.id}`} className="font-black text-red-600 hover:text-red-800 transition-colors">{cust.name}</Link>
                                    <p className="text-xs text-gray-500 font-bold md:hidden">{cust.id}</p>
                                </td>
                                <td className="p-4 hidden lg:table-cell">
                                    <p className="text-sm font-bold text-gray-900">{cust.email}</p>
                                    <p className="text-xs text-gray-500 font-bold">{cust.phone}</p>
                                </td>
                                <td className="p-4 hidden xl:table-cell text-sm font-bold text-gray-700">
                                    {cust.regDate}
                                </td>
                                <td className="p-4 text-center">
                                    <span className="font-black text-gray-900">{cust.totalBookings}</span>
                                </td>
                                <td className="p-4">
                                    <span className={`inline-flex px-2 py-1 text-xs font-bold uppercase tracking-wider border-2 ${cust.status === 'Active' ? 'bg-green-100 text-green-800 border-green-800' : 'bg-red-100 text-red-800 border-red-800'}`}>
                                        {cust.status}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center justify-end space-x-2">
                                        <Link to={`/admin/customers/${cust.id}`} className="p-2 text-gray-500 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 transition-colors" title="View Profile">
                                            <Eye className="w-4 h-4" />
                                        </Link>
                                        {cust.status === 'Active' ? (
                                            <button className="p-2 text-gray-500 hover:text-red-600 bg-gray-100 hover:bg-red-50 transition-colors" title="Suspend Account">
                                                <Ban className="w-4 h-4" />
                                            </button>
                                        ) : (
                                            <button className="p-2 text-gray-500 hover:text-green-600 bg-gray-100 hover:bg-green-50 transition-colors" title="Reactivate Account">
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
                <span className="text-sm font-bold text-gray-500">Showing 1-{filteredCustomers.length} of {filteredCustomers.length} customers</span>
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
