import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Lock, Save } from 'lucide-react';

export default function SessionSecuritySettings() {
    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Security settings updated.');
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-5xl mx-auto">
                 <div className="mb-8 border-b-4 border-gray-900 pb-4">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <Lock className="w-8 h-8 mr-3 text-red-600" />
                        Session & Security Settings
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Configuration for booking flow timeouts and customer authentication security.</p>
                </div>

                <form onSubmit={handleSave} className="space-y-8">
                    {/* Booking Session Settings */}
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-200 pb-2">Booking Session Settings</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Booking Session Timeout (Minutes)</label>
                                <input type="number" min="1" defaultValue="30" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                <p className="text-[10px] uppercase font-bold text-gray-400 mt-2">Minutes before an inactive booking session expires.</p>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Session Warning Time (Minutes)</label>
                                <input type="number" min="1" defaultValue="25" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                 <p className="text-[10px] uppercase font-bold text-gray-400 mt-2">Minutes passed before displaying warning toast.</p>
                            </div>
                        </div>
                    </div>

                    {/* Auth Session Settings */}
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-200 pb-2">Auth Session Settings</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Auth Session Timeout (Minutes)</label>
                                <input type="number" min="1" defaultValue="60" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                <p className="text-[10px] uppercase font-bold text-gray-400 mt-2">Minutes before an inactive login session expires.</p>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Auth Warning Time (Minutes)</label>
                                <input type="number" min="1" defaultValue="55" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                <p className="text-[10px] uppercase font-bold text-gray-400 mt-2">Minutes passed before warning customer of logout.</p>
                            </div>
                        </div>
                    </div>

                    {/* Login Security Settings */}
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-200 pb-2">Login Security</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Max Failed Attempts</label>
                                <input type="number" min="1" defaultValue="5" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Lockout Duration (Seconds)</label>
                                <input type="number" min="1" defaultValue="60" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Password Minimum Length</label>
                                <input type="number" min="1" defaultValue="8" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                            </div>
                        </div>
                    </div>

                    {/* Feature Toggles */}
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-200 pb-2">Feature Toggles</h2>
                        
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-200">
                                <div>
                                    <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Require OTP on Every Login</p>
                                    <p className="text-xs text-gray-500 font-bold mt-1">Force users to enter an SMS OTP each time they log in.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-6 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-200">
                                <div>
                                    <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Enable Live Photo Login</p>
                                    <p className="text-xs text-gray-500 font-bold mt-1">Show the Live Photo Capture option on the login screen.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-6 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                            </div>
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
