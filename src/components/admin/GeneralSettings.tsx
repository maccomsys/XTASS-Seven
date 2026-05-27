import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Settings, Image as ImageIcon, Save } from 'lucide-react';

export default function GeneralSettings() {
    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Settings updated successfully.');
    };

    return (
        <AdminLayout>
             <div className="p-8 max-w-5xl mx-auto">
                <div className="mb-8 border-b-4 border-gray-900 pb-4">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <Settings className="w-8 h-8 mr-3 text-red-600" />
                        General Settings
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Platform-wide configuration and identity settings.</p>
                </div>

                <form onSubmit={handleSave} className="space-y-8">
                    {/* Platform Identity Section */}
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-200 pb-2">Platform Identity</h2>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Platform Name</label>
                                <input type="text" defaultValue="XTASS" className="w-full md:w-1/2 bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Platform Logo</label>
                                    <div className="border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer hover:border-gray-900 transition-colors bg-gray-50 flex flex-col items-center">
                                        <ImageIcon className="w-6 h-6 text-gray-400 mb-2" />
                                        <span className="text-xs font-bold text-gray-600">Upload Logo</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Favicon</label>
                                    <div className="border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer hover:border-gray-900 transition-colors bg-gray-50 flex flex-col items-center">
                                        <ImageIcon className="w-6 h-6 text-gray-400 mb-2" />
                                        <span className="text-xs font-bold text-gray-600">Upload Favicon</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Details Section */}
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-200 pb-2">Contact Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Support Phone Number</label>
                                <input type="text" defaultValue="+233 123 456 789" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">WhatsApp Support Number</label>
                                <input type="text" defaultValue="+233 123 456 789" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Support Email Address</label>
                                <input type="email" defaultValue="support@xtass.com" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                            </div>
                        </div>
                    </div>

                    {/* Regional Settings */}
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-200 pb-2">Regional Settings</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Default Language</label>
                                <select className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                                    <option value="en">English</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Default Currency</label>
                                <input type="text" value="Ghana Cedi (GH₵)" readOnly className="w-full bg-gray-100 border-2 border-gray-200 text-gray-500 text-sm font-bold p-3 cursor-not-allowed" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Timezone</label>
                                <select className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                                    <option value="Africa/Accra">Africa/Accra</option>
                                    <option value="UTC">UTC</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-200 pb-2">Operating Hours</h2>
                        
                        <div className="mb-6 flex items-center justify-between bg-gray-50 p-4 border-2 border-gray-200">
                             <div>
                                 <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Always Open (24/7)</p>
                                 <p className="text-xs text-gray-500 font-bold mt-1">Accept bookings at any hour.</p>
                             </div>
                             <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-6 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                        </div>

                        <div className="space-y-4 opacity-50 pointer-events-none">
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                                <div key={day} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-2 border-b-2 border-gray-100 last:border-0">
                                    <span className="w-32 text-sm font-black text-gray-900 uppercase tracking-widest">{day}</span>
                                    <div className="flex items-center gap-4">
                                         <input type="time" defaultValue="00:00" className="bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-2" />
                                         <span className="text-gray-400 font-black">TO</span>
                                         <input type="time" defaultValue="23:59" className="bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                         <button type="submit" className="bg-brand-maroon hover:bg-red-800 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
                            <Save className="w-5 h-5 mr-2" /> Save Settings
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
