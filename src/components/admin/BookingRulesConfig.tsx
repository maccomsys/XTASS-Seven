import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Sliders, Save, Users, Clock, AlertCircle } from 'lucide-react';

export default function BookingRulesConfig() {
    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Booking rules updated successfully.');
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-5xl mx-auto">
                <div className="mb-8 border-b-4 border-gray-900 pb-4">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <Sliders className="w-8 h-8 mr-3 text-red-600" />
                        Booking Rules Configuration
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Configure operational rules for the booking platform.</p>
                </div>

                <form onSubmit={handleSave} className="space-y-8">
                    {/* Timing Rules */}
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center">
                            <Clock className="w-5 h-5 mr-2" /> Timing Rules
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Min. Advance Booking Time</label>
                                <div className="flex items-center">
                                    <input type="number" min="0" defaultValue="2" className="w-24 bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors text-center" />
                                    <span className="ml-3 font-bold text-gray-600 uppercase tracking-widest text-xs">Hours ahead</span>
                                </div>
                                <p className="text-[10px] uppercase font-bold text-gray-400 mt-2">For Scheduled Pickup bookings.</p>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Max. Advance Booking Period</label>
                                <div className="flex items-center">
                                    <input type="number" min="1" defaultValue="90" className="w-24 bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors text-center" />
                                    <span className="ml-3 font-bold text-gray-600 uppercase tracking-widest text-xs">Days completely in advance</span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Min. Car Rental Duration</label>
                                <div className="flex items-center">
                                    <input type="number" min="1" defaultValue="1" className="w-24 bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors text-center" />
                                    <span className="ml-3 font-bold text-gray-600 uppercase tracking-widest text-xs">Hours</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Capacity Rules */}
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center">
                            <Users className="w-5 h-5 mr-2" /> Capacity Rules
                        </h2>
                        
                        <div className="mb-8">
                            <h3 className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Max Passengers Per Vehicle Class</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="bg-gray-50 p-4 border-2 border-gray-200 flex items-center justify-between">
                                    <span className="font-bold text-gray-900">Sedan</span>
                                    <input type="number" min="1" max="4" defaultValue="3" className="w-16 bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-2 text-center focus:border-red-600" />
                                </div>
                                <div className="bg-gray-50 p-4 border-2 border-gray-200 flex items-center justify-between">
                                    <span className="font-bold text-gray-900">SUV</span>
                                    <input type="number" min="1" max="7" defaultValue="4" className="w-16 bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-2 text-center focus:border-red-600" />
                                </div>
                                <div className="bg-gray-50 p-4 border-2 border-gray-200 flex items-center justify-between">
                                    <span className="font-bold text-gray-900">Van/Minivan</span>
                                    <input type="number" min="1" max="15" defaultValue="8" className="w-16 bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-2 text-center focus:border-red-600" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-200">
                             <div>
                                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-2" /> Age Requirement
                                </h3>
                                <p className="text-xs text-gray-500 font-bold mt-1">Requires user to confirm they are 18+ in checkout step 5.</p>
                             </div>
                             <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-6 after:transition-all peer-checked:bg-gray-900"></div>
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                         <button type="submit" className="bg-brand-maroon hover:bg-red-800 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
                            <Save className="w-5 h-5 mr-2" /> Save Rules
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
