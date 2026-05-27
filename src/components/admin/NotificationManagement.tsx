import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Bell, FileText, Send, Mail, MessageSquare, Plus, Clock, Search } from 'lucide-react';

const MOCK_NOTIFICATIONS = [
  { id: 'N-1', title: 'Weekend Promo Code', type: 'Email', recipients: 'All Customers', date: 'Oct 25, 2023 - 10:00', status: 'Sent' },
  { id: 'N-2', title: 'New Safety Guidelines', type: 'In-App', recipients: 'All Drivers', date: 'Oct 26, 2023 - 08:00', status: 'Sent' },
  { id: 'N-3', title: 'System Maintenance Notice', type: 'Email', recipients: 'All Customers', date: 'Oct 28, 2023 - 02:00', status: 'Scheduled' },
  { id: 'N-4', title: 'Booking Reminder #B-199', type: 'SMS', recipients: 'Specific Customer', date: 'Oct 25, 2023 - 14:00', status: 'Sent' },
];

export default function NotificationManagement() {
    const [isComposeOpen, setIsComposeOpen] = useState(false);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Notification created successfully.');
        setIsComposeOpen(false);
    };

    const getTypeIcon = (type: string) => {
        if (type === 'Email') return <Mail className="w-4 h-4 mr-1" />;
        if (type === 'In-App') return <Bell className="w-4 h-4 mr-1" />;
        if (type === 'SMS') return <MessageSquare className="w-4 h-4 mr-1" />;
        return <FileText className="w-4 h-4 mr-1" />;
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-6xl mx-auto">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <Bell className="w-8 h-8 mr-3 text-red-600" />
                            Notification Management
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Overview of all sent and scheduled notifications to customers and drivers.</p>
                    </div>
                    
                    <button 
                        onClick={() => setIsComposeOpen(true)}
                        className="bg-brand-maroon hover:bg-red-800 text-white font-black uppercase tracking-widest text-sm px-6 py-3 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none"
                    >
                        <Plus className="w-4 h-4 mr-2" /> Create Notification
                    </button>
                </div>

                {isComposeOpen && (
                    <div className="mb-8 border-4 border-gray-900 bg-white p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative">
                        <h2 className="text-lg font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-100 pb-2 flex items-center">
                            <Send className="w-5 h-5 mr-2 text-brand-maroon" /> Compose Message
                        </h2>
                        
                        <form onSubmit={handleSend} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Notification Type</label>
                                    <select required className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                                        <option value="Email">Email Only</option>
                                        <option value="In-App">In-App Notification</option>
                                        <option value="SMS">SMS Text Message</option>
                                        <option value="All">All Channels</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Recipients</label>
                                    <select required className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                                        <option value="All Customers">All Customers</option>
                                        <option value="All Drivers">All Drivers</option>
                                        <option value="Specific Customer">Specific Customer</option>
                                        <option value="Specific Driver">Specific Driver</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 hidden">
                                    {/* Search input shown only if specific customer/driver is selected in real app */}
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input type="text" placeholder="Search user..." className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold py-3 pl-10 pr-4 focus:ring-0 focus:border-red-600 transition-colors" />
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Title / Subject</label>
                                     <input type="text" required placeholder="Notification Headline" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message Body</label>
                                    <textarea required rows={4} placeholder="Type your message here..." className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors"></textarea>
                                </div>
                                <div className="md:col-span-2 border-t-2 border-gray-100 pt-4">
                                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Schedule (Optional)</label>
                                     <div className="flex items-center space-x-4">
                                         <input type="datetime-local" className="bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                         <span className="text-xs text-gray-500 font-bold">Leave blank to send immediately</span>
                                     </div>
                                </div>
                            </div>
                            
                            <div className="flex justify-end space-x-4 pt-4 border-t-2 border-gray-200">
                                <button type="button" onClick={() => setIsComposeOpen(false)} className="px-6 py-3 text-sm font-bold uppercase tracking-widest text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors">Cancel</button>
                                <button type="submit" className="bg-gray-900 text-white font-black uppercase tracking-widest text-sm px-8 py-3 transition-colors shadow-[4px_4px_0_0_rgba(220,38,38,1)] flex items-center">
                                    <Send className="w-4 h-4 mr-2" /> Send / Schedule
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Data Table */}
                <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                     <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-900">
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Title</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Type</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden sm:table-cell">Recipients</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden md:table-cell">Sent / Scheduled Date</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-100">
                                {MOCK_NOTIFICATIONS.map((n) => (
                                    <tr key={n.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-black text-gray-900 text-sm">
                                            {n.title}
                                            <span className="block sm:hidden text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">{n.recipients}</span>
                                        </td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center text-xs font-bold text-gray-600 bg-gray-100 border border-gray-300 px-2 py-1 uppercase tracking-wider">
                                                {getTypeIcon(n.type)} {n.type}
                                            </span>
                                        </td>
                                        <td className="p-4 hidden sm:table-cell">
                                            <span className="text-sm font-bold text-gray-700">{n.recipients}</span>
                                        </td>
                                        <td className="p-4 hidden md:table-cell">
                                            <span className="text-sm font-bold text-gray-600">{n.date}</span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={`inline-flex px-2 py-1 text-[10px] font-black uppercase tracking-wider border-2 ${
                                                n.status === 'Sent' ? 'bg-green-100 text-green-800 border-green-800' :
                                                n.status === 'Scheduled' ? 'bg-blue-100 text-blue-800 border-blue-800' :
                                                'bg-red-100 text-red-800 border-red-800'
                                            }`}>
                                                {n.status === 'Scheduled' ? <Clock className="w-3 h-3 mr-1" /> : null}
                                                {n.status}
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
