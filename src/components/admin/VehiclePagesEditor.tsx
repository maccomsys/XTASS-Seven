import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Save, Car, Image as ImageIcon, Plus } from 'lucide-react';

export default function VehiclePagesEditor() {
    const [activeTab, setActiveTab] = useState('Sedan');
    const tabs = ['Sedan', 'SUV', 'Van/Minivan'];

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`${activeTab} page updated.`);
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-5xl mx-auto">
                <div className="mb-8 border-b-4 border-gray-900 pb-4">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <Car className="w-8 h-8 mr-3 text-brand-maroon" />
                        Vehicle Type Pages
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Manage content, specs, and features for public vehicle detail pages.</p>
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
                    <div className="space-y-8">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Hero Image</label>
                            <div className="border-2 border-dashed border-gray-300 p-8 text-center cursor-pointer hover:border-gray-900 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center">
                                <ImageIcon className="w-8 h-8 mb-2 text-gray-400" />
                                <span className="text-sm font-bold text-gray-600 block">Click to upload featured image for {activeTab}</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Description</label>
                            <textarea 
                                rows={4} 
                                defaultValue={`The ${activeTab} provides an excellent balance of comfort and utility...`} 
                                className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-medium p-4 focus:ring-0 focus:border-red-600 transition-colors"
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 border-2 border-gray-200">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Feature List</h3>
                                    <button type="button" className="text-brand-maroon hover:text-red-800 text-sm font-bold flex items-center">
                                        <Plus className="w-4 h-4 mr-1"/> Add Item
                                    </button>
                                </div>
                                <div className="space-y-3">
                                    {['Premium Leather Interior', 'Advanced Climate Control', 'GPS Navigation Included'].map((feat, i) => (
                                        <input key={i} type="text" defaultValue={feat} className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-2 focus:ring-0 focus:border-red-600 transition-colors" />
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 border-2 border-gray-200">
                                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Specifications Table</h3>
                                <div className="space-y-3">
                                    <div className="flex space-x-2">
                                        <input type="text" readOnly value="Passengers" className="w-1/2 bg-gray-100 border-2 border-gray-200 text-gray-500 text-sm font-bold p-2" />
                                        <input type="text" defaultValue="4" className="w-1/2 bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-2 focus:ring-0 focus:border-red-600 transition-colors" />
                                    </div>
                                    <div className="flex space-x-2">
                                        <input type="text" readOnly value="Luggage" className="w-1/2 bg-gray-100 border-2 border-gray-200 text-gray-500 text-sm font-bold p-2" />
                                        <input type="text" defaultValue="2 large, 1 small" className="w-1/2 bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-2 focus:ring-0 focus:border-red-600 transition-colors" />
                                    </div>
                                    <div className="flex space-x-2">
                                        <input type="text" readOnly value="Transmission" className="w-1/2 bg-gray-100 border-2 border-gray-200 text-gray-500 text-sm font-bold p-2" />
                                        <input type="text" defaultValue="Automatic" className="w-1/2 bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-2 focus:ring-0 focus:border-red-600 transition-colors" />
                                    </div>
                                    <div className="flex space-x-2">
                                        <input type="text" readOnly value="Fuel" className="w-1/2 bg-gray-100 border-2 border-gray-200 text-gray-500 text-sm font-bold p-2" />
                                        <input type="text" defaultValue="Petrol/Hybrid" className="w-1/2 bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-2 focus:ring-0 focus:border-red-600 transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end pt-6 border-t-2 border-gray-200">
                            <button type="submit" className="bg-brand-maroon hover:bg-red-800 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
                                <Save className="w-5 h-5 mr-2" /> Save Changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
