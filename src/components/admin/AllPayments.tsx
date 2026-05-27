import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Download, Search, Filter } from 'lucide-react';

export default function AllPayments() {
  const transactions = [
    { id: 'PAY-1120', date: '2024-03-15 14:30', cust: 'Kwame Osei', amount: 450, status: 'Success', meth: 'Card (**** 4242)' },
    { id: 'PAY-1119', date: '2024-03-15 11:20', cust: 'Jane Doe', amount: 1200, status: 'Success', meth: 'Mobile Money' },
    { id: 'PAY-1118', date: '2024-03-14 09:15', cust: 'Peter Mensah', amount: 350, status: 'Failed', meth: 'Card (**** 1111)' },
    { id: 'PAY-1117', date: '2024-03-14 08:00', cust: 'Sarah Connor', amount: 800, status: 'Success', meth: 'Corporate Invoice' },
  ];

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b-4 border-gray-900 pb-4 gap-4">
          <div>
             <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">All Transactions</h1>
             <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Payment History</p>
          </div>
          <button className="flex items-center bg-gray-900 hover:bg-black text-white font-black uppercase tracking-widest text-xs px-6 py-3 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </button>
        </div>

        <div className="bg-white p-4 border border-gray-200 mb-6 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
                <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input type="text" placeholder="Search by Transaction ID or Customer..." className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 font-bold text-sm focus:border-gray-900 outline-none transition-colors" />
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
                <th className="p-4 font-black">Tx ID</th>
                <th className="p-4 font-black">Date</th>
                <th className="p-4 font-black">Customer</th>
                <th className="p-4 font-black">Method</th>
                <th className="p-4 font-black text-right">Amount (GH₵)</th>
                <th className="p-4 font-black text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold text-sm">{tx.id}</td>
                  <td className="p-4 font-bold text-sm text-gray-500">{tx.date}</td>
                  <td className="p-4 font-bold text-sm">{tx.cust}</td>
                  <td className="p-4 font-bold text-sm text-gray-500">{tx.meth}</td>
                  <td className="p-4 font-black text-sm text-right">{tx.amount.toFixed(2)}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-block px-2 py-1 text-[10px] font-black uppercase tracking-widest ${
                      tx.status === 'Success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {tx.status}
                    </span>
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
