import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { PackagePlus, Save, LayoutTemplate } from 'lucide-react';

export default function ExtrasConfig() {
    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Extras configuration updated.');
    };

    return (
        <AdminLayout>
             <div className="p-8 max-w-5xl mx-auto">
                <div className="mb-8 border-b-4 border-gray-900 pb-4">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <PackagePlus className="w-8 h-8 mr-3 text-red-600" />
                        Extras & Add-Ons Configuration
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Control visibility and behavior of the Extras step in the booking flow.</p>
                </div>

                <form onSubmit={handleSave} className="space-y-8">
                    {/* Global Toggle */}
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                         <div className="flex items-center justify-between">
                             <div>
                                 <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest">Global Extras Step</h2>
                                 <p className="text-xs text-gray-500 font-bold mt-2 leading-relaxed max-w-xl">When enabled, the Extras step (Step 4) will be presented to users during checkout. When disabled, customers jump immediately from Step 3 (Details) to Step 5 (Review).</p>
                             </div>
                             <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-16 h-8 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-400 after:border after:rounded-full after:h-6 after:w-7 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                         </div>
                    </div>

                    {/* Per-Ride-Type Toggles */}
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center border-b-2 border-gray-200 pb-2">
                            Enable Per Booking Type
                        </h2>
                        
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-200">
                                <span className="font-bold text-gray-900">Instant Ride</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[2px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-4 after:w-5 after:transition-all peer-checked:bg-brand-maroon"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-200">
                                <span className="font-bold text-gray-900">Scheduled Pickup</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[2px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-4 after:w-5 after:transition-all peer-checked:bg-brand-maroon"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-200">
                                <span className="font-bold text-gray-900">Car Rental</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[2px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-4 after:w-5 after:transition-all peer-checked:bg-brand-maroon"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Section Defaults */}
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                         <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center border-b-2 border-gray-200 pb-2">
                             <LayoutTemplate className="w-5 h-5 mr-2" /> Default Section Display State
                        </h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Protection Packages</label>
                                <select className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                                    <option value="expanded">Expanded (Visible)</option>
                                    <option value="collapsed">Collapsed (Hidden)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Special Equipment</label>
                                <select className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                                    <option value="expanded">Expanded (Visible)</option>
                                    <option value="collapsed" selected>Collapsed (Hidden)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                         <button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(220,38,38,1)] hover:translate-y-1 hover:shadow-none">
                            <Save className="w-5 h-5 mr-2" /> Save Configuration
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
