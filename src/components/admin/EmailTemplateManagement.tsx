import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Mail, Edit2, Save, Send, Code, X, CheckCircle2 } from 'lucide-react';

const MOCK_TEMPLATES = [
  { id: '1', name: 'Booking Confirmed', lastUpdated: 'Oct 20, 2023', subject: 'Your XTASS Booking #{{booking_id}} is Confirmed' },
  { id: '2', name: 'Driver Assigned', lastUpdated: 'Oct 21, 2023', subject: 'A Driver has been assigned to your booking' },
  { id: '3', name: 'Ride Completed', lastUpdated: 'Sep 15, 2023', subject: 'Thanks for riding with XTASS. How was your trip?' },
  { id: '4', name: 'Booking Cancelled', lastUpdated: 'Sep 10, 2023', subject: 'Booking #{{booking_id}} Cancellation Confirmation' },
  { id: '5', name: 'Welcome Account Creation', lastUpdated: 'Aug 05, 2023', subject: 'Welcome to XTASS, {{customer_name}}!' },
];

export default function EmailTemplateManagement() {
    const [editingTemplate, setEditingTemplate] = useState<any>(null);
    const [isPreviewMode, setIsPreviewMode] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Email template saved successfully.');
        setEditingTemplate(null);
        setIsPreviewMode(false);
    };

    const handleTestSend = () => {
        alert('Test email sent to your admin email address.');
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-6xl mx-auto">
                 <div className="mb-8 border-b-4 border-gray-900 pb-4">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <Mail className="w-8 h-8 mr-3 text-red-600" />
                        Email Template Management
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Manage all automated email templates for system-triggered notifications.</p>
                </div>

                {editingTemplate ? (
                    <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col xl:flex-row">
                        {/* Editor Section */}
                        <div className="w-full xl:w-2/3 p-8 border-b-4 xl:border-b-0 xl:border-r-4 border-gray-900">
                             <div className="flex justify-between items-center mb-6 border-b-2 border-gray-200 pb-4">
                                <div>
                                    <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest">{editingTemplate.name}</h2>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Template Editor</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                     <button 
                                        onClick={() => setIsPreviewMode(!isPreviewMode)}
                                        className={`px-4 py-2 text-xs font-black uppercase tracking-widest transition-colors ${isPreviewMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                     >
                                        Preview Mode
                                     </button>
                                     <button onClick={() => {setEditingTemplate(null); setIsPreviewMode(false);}} className="text-gray-500 hover:text-gray-900">
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {isPreviewMode ? (
                                <div className="bg-gray-50 border-2 border-gray-200 p-8 min-h-[400px]">
                                    <div className="bg-white max-w-lg mx-auto shadow-sm border border-gray-100 overflow-hidden">
                                        <div className="bg-gray-900 p-6 text-center">
                                            <h1 className="text-white text-2xl font-black tracking-widest uppercase mb-1">XTASS</h1>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Premium Transportation</p>
                                        </div>
                                        <div className="p-8">
                                            <p className="mb-4"><strong>Subject:</strong> {editingTemplate.subject.replace('{{booking_id}}', 'B-98765').replace('{{customer_name}}', 'Kwame')}</p>
                                            <hr className="my-4 border-gray-100" />
                                            <p className="text-gray-800 leading-relaxed">
                                                Hi Kwame,<br/><br/>
                                                This is a simulated preview of your email template. HTML formatting will render correctly here based on your content.<br/><br/>
                                                Your booking <strong>B-98765</strong> has been confirmed.
                                            </p>
                                            <div className="mt-8 text-center">
                                                <button className="bg-brand-maroon text-white font-bold py-3 px-6 uppercase tracking-wider text-sm">View Booking</button>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 p-6 text-center text-xs text-gray-500">
                                            <p>XTASS Transportation Services, Accra, Ghana.</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSave} className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Subject Line</label>
                                        <input type="text" required defaultValue={editingTemplate.subject} className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">HTML Body Content</label>
                                        <div className="border-2 border-gray-200 bg-white">
                                            <div className="border-b-2 border-gray-100 py-2 px-3 bg-gray-50 flex items-center gap-4 text-gray-500">
                                                <button type="button" className="font-bold hover:text-gray-900">B</button>
                                                <button type="button" className="font-semibold italic hover:text-gray-900">I</button>
                                                <button type="button" className="font-bold underline hover:text-gray-900">U</button>
                                                <button type="button" className="hover:text-gray-900"><Code className="w-4 h-4"/></button>
                                            </div>
                                            <textarea required rows={15} defaultValue={`<p>Hi {{customer_name}},</p>\n<p>Your booking <strong>{{booking_id}}</strong> is requested.</p>`} className="w-full bg-gray-50 text-gray-900 text-sm font-mono p-4 focus:ring-0 focus:outline-none focus:border-red-600 transition-colors border-none resize-y"></textarea>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center pt-6 border-t-2 border-gray-200">
                                        <button type="button" onClick={handleTestSend} className="px-6 py-4 text-sm font-black uppercase tracking-widest text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors flex items-center">
                                            <Send className="w-4 h-4 mr-2" /> Test Send
                                        </button>
                                        <button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(220,38,38,1)]">
                                            <Save className="w-5 h-5 mr-2" /> Save Template
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Variables Panel */}
                        <div className="w-full xl:w-1/3 bg-gray-50 p-8">
                             <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-200 pb-2">Available Variables</h3>
                             <p className="text-xs text-gray-500 font-bold mb-6 leading-relaxed">Click any variable below to copy it. Paste it into your subject line or email body to insert dynamic data.</p>
                             
                             <div className="space-y-4">
                                <div className="bg-white p-4 border-2 border-gray-200 cursor-copy hover:border-gray-900 transition-colors group">
                                    <p className="font-mono text-sm font-bold text-brand-maroon group-hover:text-gray-900 mb-1">{'{{customer_name}}'}</p>
                                    <p className="text-xs text-gray-500 font-medium">Customer's full name</p>
                                </div>
                                <div className="bg-white p-4 border-2 border-gray-200 cursor-copy hover:border-gray-900 transition-colors group">
                                    <p className="font-mono text-sm font-bold text-brand-maroon group-hover:text-gray-900 mb-1">{'{{booking_id}}'}</p>
                                    <p className="text-xs text-gray-500 font-medium">Unique booking reference number</p>
                                </div>
                                <div className="bg-white p-4 border-2 border-gray-200 cursor-copy hover:border-gray-900 transition-colors group">
                                    <p className="font-mono text-sm font-bold text-brand-maroon group-hover:text-gray-900 mb-1">{'{{pickup_date}}'}</p>
                                    <p className="text-xs text-gray-500 font-medium">Formatted pickup date & time</p>
                                </div>
                                <div className="bg-white p-4 border-2 border-gray-200 cursor-copy hover:border-gray-900 transition-colors group">
                                    <p className="font-mono text-sm font-bold text-brand-maroon group-hover:text-gray-900 mb-1">{'{{driver_name}}'}</p>
                                    <p className="text-xs text-gray-500 font-medium">Assigned driver's name</p>
                                </div>
                                <div className="bg-white p-4 border-2 border-gray-200 cursor-copy hover:border-gray-900 transition-colors group">
                                    <p className="font-mono text-sm font-bold text-brand-maroon group-hover:text-gray-900 mb-1">{'{{total_price}}'}</p>
                                    <p className="text-xs text-gray-500 font-medium">Total price of the booking</p>
                                </div>
                             </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-900">
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Template Name</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden sm:table-cell">Subject Line</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden md:table-cell">Last Updated</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-100">
                                {MOCK_TEMPLATES.map((t) => (
                                    <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-black text-gray-900 text-sm">{t.name}</td>
                                        <td className="p-4 text-sm text-gray-600 font-medium hidden sm:table-cell truncate max-w-sm">{t.subject}</td>
                                        <td className="p-4 text-xs font-bold text-gray-500 hidden md:table-cell">{t.lastUpdated}</td>
                                        <td className="p-4 text-right">
                                            <button 
                                                onClick={() => setEditingTemplate(t)}
                                                className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-brand-maroon bg-gray-100 hover:bg-red-50 transition-colors"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
