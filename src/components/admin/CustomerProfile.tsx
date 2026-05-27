import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { User, ArrowLeft, Mail, Phone, Calendar, CreditCard, AlertTriangle, MessageSquare, Edit3, ShieldAlert, CheckCircle2, History } from 'lucide-react';

export default function CustomerProfile() {
    const { id } = useParams();
    const custId = id || 'CUST-001';

    return (
        <AdminLayout>
            <div className="p-8 max-w-6xl mx-auto">
                <div className="mb-6 flex justify-between items-center">
                    <Link to="/admin/customers" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Customers
                    </Link>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    
                    {/* Left Column: Details & Actions */}
                    <div className="xl:col-span-1 space-y-8">
                        {/* Profile Header */}
                        <div className="bg-white border-4 border-gray-900 p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative">
                            <span className="absolute -top-4 right-4 bg-green-100 text-green-800 border-2 border-green-800 text-xs font-black uppercase tracking-widest px-3 py-1">
                                Active
                            </span>
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-16 h-16 bg-red-100 border-4 border-red-600 flex items-center justify-center rounded-full flex-shrink-0">
                                    <span className="text-2xl font-black text-red-600 uppercase">KM</span>
                                </div>
                                <div className="break-all">
                                    <h1 className="text-2xl font-black text-gray-900 leading-tight">Kwame Mensah</h1>
                                    <p className="text-xs font-bold text-gray-500 mt-1">{custId}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center text-sm font-bold text-gray-700">
                                    <Mail className="w-4 h-4 mr-3 text-gray-400" />
                                    kwame@example.com
                                </div>
                                <div className="flex items-center text-sm font-bold text-gray-700">
                                    <Phone className="w-4 h-4 mr-3 text-gray-400" />
                                    +233 24 123 4567
                                </div>
                                <div className="flex items-center text-sm font-bold text-gray-700">
                                    <Calendar className="w-4 h-4 mr-3 text-gray-400" />
                                    Registered: Jan 15, 2023
                                </div>
                            </div>
                        </div>

                        {/* Saved Data Summary */}
                        <div className="bg-white border-2 border-gray-200 p-6">
                            <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4 border-b-2 border-gray-100 pb-2">Saved Data</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm font-bold text-gray-700">
                                    <span>Saved Passengers</span>
                                    <span className="bg-gray-100 px-2 py-0.5 text-gray-900 border border-gray-300">2</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-bold text-gray-700">
                                    <span>Saved Locations</span>
                                    <span className="bg-gray-100 px-2 py-0.5 text-gray-900 border border-gray-300">4</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-bold text-gray-700">
                                    <span>Payment Methods</span>
                                    <span className="bg-gray-100 px-2 py-0.5 text-gray-900 border border-gray-300">1</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-bold text-gray-700">
                                    <span>Emergency Contacts</span>
                                    <span className="bg-gray-100 px-2 py-0.5 text-gray-900 border border-gray-300">1</span>
                                </div>
                            </div>
                        </div>

                        {/* Admin Actions */}
                        <div className="bg-red-50 border-4 border-red-600 p-6 relative">
                            <h2 className="absolute -top-3 left-4 bg-red-600 text-white px-2 py-0.5 text-xs font-black uppercase tracking-widest">Admin Actions</h2>
                            <div className="space-y-3 mt-4">
                                <button className="w-full bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-900 text-xs font-black uppercase tracking-widest py-3 flex justify-center items-center transition-colors">
                                    <Edit3 className="w-4 h-4 mr-2" /> Reset Password
                                </button>
                                <button className="w-full bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-900 text-xs font-black uppercase tracking-widest py-3 flex justify-center items-center transition-colors">
                                    <MessageSquare className="w-4 h-4 mr-2" /> Send Notification
                                </button>
                                <button className="w-full bg-white hover:bg-red-100 border-2 border-red-300 text-red-700 text-xs font-black uppercase tracking-widest py-3 flex justify-center items-center transition-colors mt-6">
                                    <ShieldAlert className="w-4 h-4 mr-2" /> Suspend Account
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Bookings & Notes */}
                    <div className="xl:col-span-2 space-y-8">
                        
                        {/* Bookings Overview */}
                        <div className="bg-white border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex flex-col h-full">
                            <div className="p-6 border-b-2 border-gray-200 flex justify-between items-center">
                                <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                                    <History className="w-6 h-6 mr-2 text-red-600" /> Recent Bookings
                                </h2>
                                <Link to={`/admin/customers/${custId}/bookings`} className="text-xs font-bold text-brand-maroon hover:underline uppercase tracking-widest">
                                    View All (12)
                                </Link>
                            </div>
                            
                            <div className="flex-1 overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50 border-b-2 border-gray-200">
                                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Booking ID</th>
                                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Date/Time</th>
                                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Type</th>
                                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Status</th>
                                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y border-gray-100">
                                        {[
                                            { id: 'XTA-5012', date: 'Oct 24, 2023 - 14:30', type: 'Airport Transfer', status: 'Completed', total: 550 },
                                            { id: 'XTA-4980', date: 'Oct 15, 2023 - 09:00', type: 'Car Rental', status: 'Completed', total: 1200 },
                                            { id: 'XTA-4855', date: 'Sep 28, 2023 - 18:45', type: 'Instant Ride', status: 'Completed', total: 180 },
                                            { id: 'XTA-4710', date: 'Sep 10, 2023 - 08:30', type: 'Scheduled Pickup', status: 'Cancelled', total: 0 },
                                        ].map((booking) => (
                                            <tr key={booking.id} className="hover:bg-gray-50">
                                                <td className="p-4">
                                                    <Link to={`/admin/reservations/${booking.id}`} className="font-bold text-red-600 hover:text-red-800 transition-colors uppercase tracking-widest text-sm">
                                                        {booking.id}
                                                    </Link>
                                                </td>
                                                <td className="p-4 text-sm font-bold text-gray-700">{booking.date}</td>
                                                <td className="p-4 text-sm font-bold text-gray-700">{booking.type}</td>
                                                <td className="p-4">
                                                     <span className={`inline-flex px-2 py-0.5 text-[10px] font-black uppercase tracking-wider border-2 ${
                                                        booking.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-700' : 
                                                        'bg-gray-100 text-gray-600 border-gray-400'
                                                    }`}>
                                                        {booking.status}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-right text-sm font-black text-gray-900">GH₵ {booking.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Internal Notes */}
                        <div className="bg-yellow-50 border-4 border-yellow-400 p-6 relative">
                             <h2 className="absolute -top-3 left-4 bg-yellow-400 text-yellow-900 px-2 py-0.5 text-xs font-black uppercase tracking-widest flex items-center">
                                <AlertTriangle className="w-3 h-3 mr-1" /> Internal Notes
                            </h2>
                            <div className="mt-4">
                                <textarea 
                                    className="w-full bg-white border-2 border-yellow-300 p-4 text-sm font-medium text-gray-900 focus:outline-none focus:border-yellow-500" 
                                    rows={4} 
                                    placeholder="Add an internal note about this customer... (Not visible to customer)"
                                    defaultValue={"VIP Customer, frequently uses Airport Transfer for international guests. Prefers driver Kofi Annan."}
                                ></textarea>
                                <div className="flex justify-end mt-2">
                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold uppercase tracking-widest text-xs px-4 py-2 transition-colors border-b-2 border-yellow-600">
                                        Save Note
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </AdminLayout>
    );
}
