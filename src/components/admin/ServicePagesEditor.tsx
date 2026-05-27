import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Save, Navigation, Plus, Image as ImageIcon } from 'lucide-react';

export default function ServicePagesEditor() {
    const [activeService, setActiveService] = useState('Instant Pickup');
    const services = ['Instant Pickup', 'Scheduled Pickup', 'Airport Transfers', 'Group Transportation', 'Special Needs Transport'];

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Service page updated.');
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-5xl mx-auto">
                <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <Navigation className="w-8 h-8 mr-3 text-brand-maroon" />
                            Service Pages Editor
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Manage content for all XTASS platform services.</p>
                    </div>
                    <div className="w-full md:w-64">
                         <select 
                            value={activeService}
                            onChange={(e) => setActiveService(e.target.value)}
                            className="w-full bg-white border-4 border-gray-900 text-gray-900 text-sm font-black p-3 focus:ring-0 transition-colors appearance-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
                        >
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                </div>

                <form onSubmit={handleSave} className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                    <div className="mb-6 pb-4 border-b-2 border-gray-200">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest">{activeService} Page</h2>
                    </div>

                    <div className="space-y-8">
                        {/* Hero Section */}
                        <div className="bg-gray-50 p-6 border-2 border-gray-200">
                             <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Hero Section Defaults</h3>
                             <div className="space-y-4">
                                 <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Headline</label>
                                    <input type="text" defaultValue={activeService} className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Hero Image</label>
                                    <div className="border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer hover:border-gray-900 hover:bg-white transition-colors">
                                        <ImageIcon className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                                        <span className="text-xs font-bold text-gray-600 block">Upload Hero Image for Service</span>
                                    </div>
                                </div>
                             </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Description</label>
                            <textarea 
                                rows={5} 
                                defaultValue={`Experience the best ${activeService} in Ghana...`} 
                                className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-medium p-4 focus:ring-0 focus:border-red-600 transition-colors"
                            ></textarea>
                        </div>

                        <div className="bg-gray-50 p-6 border-2 border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Benefits List</h3>
                                <button type="button" className="text-brand-maroon hover:text-red-800 text-sm font-bold flex items-center">
                                    <Plus className="w-4 h-4 mr-1"/> Add Benefit
                                </button>
                            </div>
                            <div className="space-y-3">
                                <input type="text" defaultValue="Reliable and timely service" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-2 focus:ring-0 focus:border-red-600 transition-colors" />
                                <input type="text" defaultValue="Professional trained drivers" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-2 focus:ring-0 focus:border-red-600 transition-colors" />
                                <input type="text" defaultValue="Secure payments" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-2 focus:ring-0 focus:border-red-600 transition-colors" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">CTA Button Text</label>
                            <input type="text" defaultValue="Book Now" className="w-full md:w-1/2 bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
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
