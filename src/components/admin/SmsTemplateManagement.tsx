import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { MessageSquare, Edit2, Save, X } from 'lucide-react';

const MOCK_SMS = [
  { id: '1', name: 'Booking Confirmed', charCount: 120, content: 'XTASS: Your booking {{booking_id}} is confirmed for {{pickup_date}}. Thank you!' },
  { id: '2', name: 'OTP Code', charCount: 45, content: '{{otp_code}} is your XTASS verification code.' },
  { id: '3', name: 'Driver Arrived', charCount: 85, content: 'XTASS: Your driver {{driver_name}} has arrived at the pickup location.' },
  { id: '4', name: 'Driver Assigned', charCount: 110, content: 'XTASS: Driver {{driver_name}} (+{{driver_phone}}) has been assigned to booking {{booking_id}}.' },
];

export default function SmsTemplateManagement() {
    const [editingTemplate, setEditingTemplate] = useState<any>(null);
    const [content, setContent] = useState('');
    const [isPreviewMode, setIsPreviewMode] = useState(false);

    const openEditor = (template: any) => {
        setEditingTemplate(template);
        setContent(template.content);
        setIsPreviewMode(false);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('SMS template saved successfully.');
        setEditingTemplate(null);
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-6xl mx-auto">
                <div className="mb-8 border-b-4 border-gray-900 pb-4">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <MessageSquare className="w-8 h-8 mr-3 text-red-600" />
                        SMS Template Management
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Manage all automated SMS templates for system-triggered notifications.</p>
                </div>

                {editingTemplate ? (
                    <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col xl:flex-row">
                        {/* Editor Section */}
                        <div className="w-full xl:w-2/3 p-8 border-b-4 xl:border-b-0 xl:border-r-4 border-gray-900">
                             <div className="flex justify-between items-center mb-6 border-b-2 border-gray-200 pb-4">
                                <div>
                                    <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest">{editingTemplate.name}</h2>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">SMS Editor</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                     <button 
                                        onClick={() => setIsPreviewMode(!isPreviewMode)}
                                        className={`px-4 py-2 text-xs font-black uppercase tracking-widest transition-colors ${isPreviewMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                     >
                                        Preview Mode
                                     </button>
                                     <button onClick={() => setEditingTemplate(null)} className="text-gray-500 hover:text-gray-900">
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {isPreviewMode ? (
                                <div className="bg-gray-50 border-2 border-gray-200 p-8 min-h-[300px] flex items-center justify-center">
                                    <div className="bg-white max-w-xs w-full shadow-lg border-2 border-gray-900 rounded-3xl overflow-hidden relative pb-12 pt-6 px-4">
                                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full"></div>
                                        <div className="bg-blue-500 text-white text-sm p-4 rounded-2xl rounded-bl-none ml-6 mb-4 mt-6 leading-relaxed">
                                            {content.replace('{{customer_name}}', 'Kwame').replace('{{booking_id}}', 'B-98765').replace('{{pickup_date}}', 'Oct 30, 2:00 PM').replace('{{driver_name}}', 'Kofi').replace('{{otp_code}}', '482910')}
                                        </div>
                                    </div>
                                </div>
                             ) : (
                                <form onSubmit={handleSave} className="space-y-6">
                                    <div>
                                        <div className="flex justify-between items-end mb-2">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Message Body</label>
                                            <span className={`text-xs font-black ${content.length > 160 ? 'text-red-600' : 'text-gray-500'}`}>
                                                {content.length} / 160 chars
                                            </span>
                                        </div>
                                        <textarea 
                                            required 
                                            rows={6} 
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-4 focus:ring-0 focus:border-red-600 transition-colors resize-none"
                                        ></textarea>
                                        {content.length > 160 && (
                                            <p className="text-xs text-red-600 font-bold mt-2">Messages over 160 characters may be split into multiple SMS segments.</p>
                                        )}
                                    </div>
                                    <div className="flex justify-end pt-6 border-t-2 border-gray-200">
                                        <button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(220,38,38,1)]">
                                            <Save className="w-5 h-5 mr-2" /> Save SMS Template
                                        </button>
                                    </div>
                                </form>
                             )}
                        </div>

                        {/* Variables Panel */}
                        <div className="w-full xl:w-1/3 bg-gray-50 p-8">
                             <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-200 pb-2">Available Variables</h3>
                             
                             <div className="space-y-4">
                                {['{{customer_name}}', '{{booking_id}}', '{{pickup_date}}', '{{driver_name}}', '{{driver_phone}}', '{{otp_code}}', '{{total_price}}'].map((v, i) => (
                                    <div key={i} className="bg-white p-3 border-2 border-gray-200 cursor-copy hover:border-gray-900 transition-colors">
                                        <p className="font-mono text-sm font-bold text-gray-700">{v}</p>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-900">
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Template Name</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden sm:table-cell">Message Preview</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center">Chars</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-100">
                                {MOCK_SMS.map((t) => (
                                    <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-black text-gray-900 text-sm whitespace-nowrap">{t.name}</td>
                                        <td className="p-4 text-sm text-gray-600 hidden sm:table-cell truncate max-w-sm font-mono text-xs">{t.content}</td>
                                        <td className="p-4 text-center">
                                            <span className={`text-xs font-black ${t.charCount > 160 ? 'text-red-600' : 'text-gray-500'}`}>{t.charCount}</span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <button 
                                                onClick={() => openEditor(t)}
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
