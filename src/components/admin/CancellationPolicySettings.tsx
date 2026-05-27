import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { ShieldAlert, Save } from 'lucide-react';

export default function CancellationPolicySettings() {
    const [activeTab, setActiveTab] = useState('Instant Ride');
    const tabs = ['Instant Ride', 'Scheduled Pickup', 'Car Rental'];

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Cancellation policy updated. Applied to new requests.');
    };

    return (
        <AdminLayout>
             <div className="p-8 max-w-5xl mx-auto">
                <div className="mb-8 border-b-4 border-gray-900 pb-4">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <ShieldAlert className="w-8 h-8 mr-3 text-red-600" />
                        Cancellation Policy Settings
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Configure cancellation fee rules per booking type.</p>
                </div>

                <div className="flex border-b-4 border-gray-900 mb-8 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-4 text-xs font-black uppercase tracking-widest whitespace-nowrap transition-colors ${
                                activeTab === tab 
                                ? 'bg-gray-900 text-white' 
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <form onSubmit={handleSave} className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                    <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-200 pb-2">{activeTab} Policy Rules</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Free Cancellation Window</label>
                            <div className="flex items-center">
                                <input type="number" min="0" defaultValue={activeTab === 'Instant Ride' ? "1" : "24"} className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                <span className="ml-3 font-bold text-gray-600 uppercase tracking-widest text-xs">Hours before pickup</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Partial Fee Window</label>
                            <div className="flex items-center">
                                <input type="number" min="0" defaultValue={activeTab === 'Instant Ride' ? "0" : "2"} className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                <span className="ml-3 font-bold text-gray-600 uppercase tracking-widest text-xs">Hours before pickup</span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 p-6 bg-gray-50 border-2 border-gray-200">
                         <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Fee Structure (During Partial Window)</h3>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                              <div>
                                   <label className="relative inline-flex items-center cursor-pointer mb-2">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-6 after:transition-all peer-checked:bg-gray-900"></div>
                                        <span className="ml-3 text-xs font-bold text-gray-600 uppercase tracking-widest">Use Flat GH₵ Fee</span>
                                    </label>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Default is Percentage of total.</p>
                              </div>
                              <div>
                                   <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Fee Value</label>
                                    <div className="flex items-center relative">
                                        <input type="number" min="0" defaultValue="50" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 pr-10 focus:ring-0 focus:border-red-600 transition-colors" />
                                        <span className="absolute right-3 font-bold text-gray-600 text-sm">%</span>
                                    </div>
                              </div>
                         </div>
                    </div>

                    <div className="mb-8 border-2 border-dashed border-gray-300 p-6 bg-white">
                        <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Customer-Facing Policy Preview</h3>
                        <p className="font-medium text-sm text-gray-800 leading-relaxed">
                            For <strong>{activeTab}</strong> bookings, you may cancel free of charge up to <strong>{activeTab === 'Instant Ride' ? '1 hour' : '24 hours'}</strong> before your scheduled pickup time. Cancellations made within <strong>{activeTab === 'Instant Ride' ? '0 hours' : '2 hours'}</strong> of pickup will be subject to a <strong>50%</strong> cancellation fee.
                        </p>
                    </div>

                    <div className="flex justify-end pt-4 border-t-2 border-gray-200">
                         <button type="submit" className="bg-brand-maroon hover:bg-red-800 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
                            <Save className="w-5 h-5 mr-2" /> Save Policy
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
