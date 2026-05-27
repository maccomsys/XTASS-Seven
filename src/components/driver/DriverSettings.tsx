import { useState } from 'react';
import DriverLayout from './DriverLayout';
import { Settings, Bell, Lock, Globe, Save } from 'lucide-react';

export default function DriverSettings() {
    const [saved, setSaved] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <DriverLayout>
            <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-12 relative">
                 {/* Success Toast */}
                 {saved && (
                     <div className="fixed top-20 right-4 sm:right-8 bg-green-600 text-white px-6 py-4 border-2 border-green-800 shadow-[4px_4px_0_0_rgba(0,0,0,1)] z-50 animate-fade-in flex items-center">
                         <Save className="w-5 h-5 mr-3" />
                         <span className="font-black uppercase tracking-widest text-sm">Settings Saved</span>
                     </div>
                 )}

                 <div className="mb-8 border-b-4 border-gray-900 pb-4">
                    <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <Settings className="w-8 h-8 mr-4 text-brand-maroon" />
                        Driver Settings
                    </h1>
                    <p className="text-gray-500 font-medium mt-2">Configure your notification and app preferences.</p>
                </div>

                <form onSubmit={handleSave} className="space-y-8">
                    {/* Notification Preferences */}
                    <div className="bg-white border-4 border-gray-900 p-6 sm:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 pb-2 border-b-2 border-gray-100 flex items-center">
                            <Bell className="w-5 h-5 mr-3 text-red-500" /> Notifications
                        </h2>

                        <div className="space-y-6">
                            {[
                                { title: 'New Booking Requests', desc: 'Receive alerts when new trips are nearby', defaultChecked: true },
                                { title: 'Trip Assignments', desc: 'Notify when admin assigns a trip to you', defaultChecked: true },
                                { title: 'Booking Modifications', desc: 'Alerts for changes to active trips', defaultChecked: true },
                                { title: 'Booking Cancellations', desc: 'Alerts when a trip is cancelled', defaultChecked: true },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start sm:items-center justify-between">
                                    <div className="pr-4">
                                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                                        <p className="text-xs text-gray-500 font-medium mt-0.5">{item.desc}</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                                        <input type="checkbox" className="sr-only peer" defaultChecked={item.defaultChecked} />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500 border-2 border-transparent"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Change Password */}
                    <div className="bg-white border-4 border-gray-900 p-6 sm:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                         <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 pb-2 border-b-2 border-gray-100 flex items-center">
                            <Lock className="w-5 h-5 mr-3 text-red-500" /> Change Password
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Current Password</label>
                                <input type="password" placeholder="••••••••" className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-600 transition-colors text-sm font-bold text-gray-900" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">New Password</label>
                                <input type="password" placeholder="Enter new password" className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-600 transition-colors text-sm font-bold text-gray-900" />
                                <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Must be 8+ characters, with uppercase, number, and special character.</p>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Confirm New Password</label>
                                <input type="password" placeholder="Confirm new password" className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-600 transition-colors text-sm font-bold text-gray-900" />
                            </div>
                        </div>
                    </div>

                    {/* Language Preference */}
                    <div className="bg-white border-4 border-gray-900 p-6 sm:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                         <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-4 pb-2 border-b-2 border-gray-100 flex items-center">
                            <Globe className="w-5 h-5 mr-3 text-red-500" /> Language Preferences
                        </h2>
                        <div>
                             <select className="w-full md:w-1/2 px-4 py-3 border-2 border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-600 transition-colors text-sm font-bold text-gray-900 appearance-none cursor-pointer">
                                 <option value="en">English (Default)</option>
                                 <option value="fr">Français</option>
                             </select>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white font-black uppercase tracking-widest px-8 py-4 border-2 border-transparent shadow-[4px_4px_0_0_rgba(220,38,38,1)] hover:shadow-none hover:translate-y-1 transition-all flex items-center">
                            <Save className="w-5 h-5 mr-3" /> Save All Settings
                        </button>
                    </div>
                </form>
            </div>
        </DriverLayout>
    );
}
