import { Link, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { CreditCard, ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function CustomerPaymentHistory() {
    const { id } = useParams();
    const custId = id || 'CUST-001';

    const MOCK_PAYMENTS = [
        { id: 'PAY-1005', bookingId: 'XTA-5012', date: 'Oct 24, 2023', amount: 550, method: 'Card (**** 1234)', status: 'Paid' },
        { id: 'PAY-1004', bookingId: 'XTA-4980', date: 'Oct 15, 2023', amount: 1200, method: 'Mobile Money', status: 'Paid' },
        { id: 'PAY-1003', bookingId: 'XTA-4855', date: 'Sep 28, 2023', amount: 180, method: 'Card (**** 1234)', status: 'Paid' },
        { id: 'PAY-1002', bookingId: 'XTA-4710', date: 'Sep 10, 2023', amount: 250, method: 'Card (**** 1234)', status: 'Refunded' },
        { id: 'PAY-1001', bookingId: 'XTA-4600', date: 'Aug 22, 2023', amount: 450, method: 'Mobile Money', status: 'Paid' },
    ];

    const getStatusStyle = (status: string) => {
        if (status === 'Paid') return 'bg-green-50 text-green-700 border-green-700';
        if (status === 'Pending') return 'bg-yellow-50 text-yellow-700 border-yellow-700';
        if (status === 'Refunded') return 'bg-blue-50 text-blue-700 border-blue-700';
        return 'bg-gray-100 text-gray-600 border-gray-400';
    };

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
                        <CreditCard className="w-8 h-8 mr-3 text-brand-maroon" />
                        Payment Records
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Viewing all payments for Kwame Mensah ({custId})</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white border-2 border-gray-200 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Total Lifetime Value</p>
                        <p className="text-3xl font-black text-gray-900">GH₵ 2,830<span className="text-lg">.00</span></p>
                    </div>
                    <div className="bg-white border-2 border-gray-200 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Total Refunds</p>
                        <p className="text-3xl font-black text-gray-900">GH₵ 250<span className="text-lg">.00</span></p>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white border-2 border-gray-900 overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-900">
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Transaction Ref</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Booking ID</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Date</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Method</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Status</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Amount (GH₵)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-100">
                                {MOCK_PAYMENTS.map((p) => (
                                    <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4">
                                            <span className="font-bold text-gray-500 text-xs">{p.id}</span>
                                        </td>
                                        <td className="p-4">
                                            <Link to={`/admin/reservations/${p.bookingId}`} className="font-black text-brand-maroon hover:underline uppercase tracking-widest flex items-center">
                                                {p.bookingId} <ArrowUpRight className="w-3 h-3 ml-1" />
                                            </Link>
                                        </td>
                                        <td className="p-4 text-sm font-bold text-gray-900">{p.date}</td>
                                        <td className="p-4 text-sm font-bold text-gray-700">{p.method}</td>
                                        <td className="p-4">
                                            <span className={`inline-flex px-2 py-1 text-[10px] font-black uppercase tracking-wider border-2 ${getStatusStyle(p.status)}`}>
                                                {p.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <span className={`font-black text-lg ${p.status === 'Refunded' ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                                                {p.amount.toFixed(2)}
                                            </span>
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
