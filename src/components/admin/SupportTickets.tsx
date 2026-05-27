import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Search, Filter, MessageSquare } from 'lucide-react';

export default function SupportTickets() {
  const tickets = [
    { id: 'TKT-9921', subject: 'Late Arrival Complaint', customer: 'Jane Doe', status: 'Open', priority: 'High', date: '2024-03-15' },
    { id: 'TKT-9920', subject: 'Lost Item Inquiry', customer: 'Kwame Osei', status: 'In Progress', priority: 'Medium', date: '2024-03-14' },
    { id: 'TKT-9919', subject: 'Billing Discrepancy', customer: 'Peter Mensah', status: 'Closed', priority: 'High', date: '2024-03-12' },
  ];

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b-4 border-gray-900 pb-4 gap-4">
          <div>
             <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Helpdesk Tickets</h1>
             <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Customer Support Center</p>
          </div>
        </div>

        <div className="bg-white p-4 border border-gray-200 mb-6 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
                <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input type="text" placeholder="Search tickets..." className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 font-bold text-sm focus:border-gray-900 outline-none transition-colors" />
            </div>
            <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-black uppercase tracking-widest text-xs px-6 py-3 transition-colors border-2 border-gray-200">
                <Filter className="w-4 h-4 mr-2" />
                Filter
            </button>
        </div>

        <div className="bg-white border-2 border-gray-200 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900 text-white uppercase tracking-widest text-xs">
                <th className="p-4 font-black">Ticket ID</th>
                <th className="p-4 font-black">Subject</th>
                <th className="p-4 font-black">Customer</th>
                <th className="p-4 font-black">Date</th>
                <th className="p-4 font-black text-center">Priority</th>
                <th className="p-4 font-black text-center">Status</th>
                <th className="p-4 font-black text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((t) => (
                <tr key={t.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold text-sm">{t.id}</td>
                  <td className="p-4 font-bold text-sm">{t.subject}</td>
                  <td className="p-4 font-bold text-sm text-gray-500">{t.customer}</td>
                  <td className="p-4 font-bold text-sm text-gray-500">{t.date}</td>
                  <td className="p-4 text-center">
                     <span className={`inline-block px-2 py-1 text-[10px] font-black uppercase tracking-widest ${t.priority === 'High' ? 'text-red-700 bg-red-100' : 'text-yellow-700 bg-yellow-100'}`}>
                        {t.priority}
                     </span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`inline-block px-2 py-1 text-[10px] font-black uppercase tracking-widest ${
                      t.status === 'Open' ? 'bg-red-100 text-red-700' : 
                      t.status === 'Closed' ? 'bg-gray-200 text-gray-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                     <Link to={`/admin/tickets/${t.id}`} className="inline-flex items-center text-xs font-black uppercase tracking-widest text-brand-maroon hover:text-red-900 transition-colors">
                        View <MessageSquare className="w-4 h-4 ml-1" />
                     </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
