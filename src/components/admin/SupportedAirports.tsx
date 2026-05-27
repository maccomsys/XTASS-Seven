import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Plane, Plus, Edit2, Archive, Save, X } from 'lucide-react';

const INITIAL_AIRPORTS = [
  { id: '1', iata: 'ACC', name: 'Kotoka International Airport', city: 'Accra', region: 'Greater Accra', status: 'Active' },
  { id: '2', iata: 'KMS', name: 'Kumasi International Airport', city: 'Kumasi', region: 'Ashanti', status: 'Active' },
  { id: '3', iata: 'TML', name: 'Tamale International Airport', city: 'Tamale', region: 'Northern', status: 'Active' },
  { id: '4', iata: 'TKD', name: 'Takoradi Airport', city: 'Takoradi', region: 'Western', status: 'Active' },
  { id: '5', iata: 'NYI', name: 'Sunyani Airport', city: 'Sunyani', region: 'Bono', status: 'Inactive' },
  { id: '6', iata: 'WZA', name: 'Wa Airport', city: 'Wa', region: 'Upper West', status: 'Active' },
];

export default function SupportedAirports() {
    const [airports, setAirports] = useState(INITIAL_AIRPORTS);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Airport saved successfully.');
        setIsFormOpen(false);
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-6xl mx-auto">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <Plane className="w-8 h-8 mr-3 text-red-600" />
                            Supported Airports
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Manage Ghana airport locations served by XTASS.</p>
                    </div>
                    
                    <button 
                        onClick={() => setIsFormOpen(true)}
                        className="bg-brand-maroon hover:bg-red-800 text-white font-black uppercase tracking-widest text-sm px-6 py-3 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none"
                    >
                        <Plus className="w-4 h-4 mr-2" /> Add Airport
                    </button>
                </div>

                {isFormOpen && (
                    <div className="mb-8 border-4 border-gray-900 bg-white p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative">
                        <div className="flex justify-between items-center mb-6 border-b-2 border-gray-100 pb-2">
                             <h2 className="text-lg font-black text-gray-900 uppercase tracking-widest flex items-center">
                                <Plane className="w-5 h-5 mr-2 text-brand-maroon" /> Add New Airport
                            </h2>
                            <button onClick={() => setIsFormOpen(false)} className="text-gray-500 hover:text-gray-900">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        
                        <form onSubmit={handleSave} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">IATA Code</label>
                                    <input type="text" required placeholder="e.g. ACC" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors uppercase" maxLength={3} />
                                </div>
                                <div>
                                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Airport Name</label>
                                     <input type="text" required placeholder="Kotoka International Airport" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                </div>
                                <div>
                                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">City</label>
                                     <input type="text" required placeholder="Accra" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                </div>
                                <div>
                                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Region</label>
                                     <input type="text" required placeholder="Greater Accra" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                </div>
                                <div>
                                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Latitude (Optional)</label>
                                     <input type="text" placeholder="5.6051" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                </div>
                                <div>
                                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Longitude (Optional)</label>
                                     <input type="text" placeholder="-0.1668" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                </div>
                            </div>
                            
                            <div className="flex justify-end space-x-4 pt-4 border-t-2 border-gray-200">
                                <button type="submit" className="bg-gray-900 text-white font-black uppercase tracking-widest text-sm px-8 py-3 transition-colors shadow-[4px_4px_0_0_rgba(220,38,38,1)] flex items-center">
                                    <Save className="w-4 h-4 mr-2" /> Save Airport
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Data Table */}
                <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                     <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-900">
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">IATA</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Airport Name</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden sm:table-cell">City / Region</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center">Status</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-100">
                                {airports.map((a) => (
                                    <tr key={a.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-black text-brand-maroon text-sm">{a.iata}</td>
                                        <td className="p-4 font-bold text-gray-900 text-sm">{a.name}</td>
                                        <td className="p-4 hidden sm:table-cell">
                                            <span className="text-sm font-bold text-gray-700 block">{a.city}</span>
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{a.region}</span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={`inline-flex px-2 py-1 text-[10px] font-black uppercase tracking-wider border-2 ${
                                                a.status === 'Active' ? 'bg-green-100 text-green-800 border-green-800' : 'bg-gray-100 text-gray-600 border-gray-400'
                                            }`}>
                                                {a.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <button 
                                                className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-brand-maroon bg-gray-100 hover:bg-red-50 transition-colors mr-2"
                                                title="Edit Airport"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button 
                                                className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors"
                                                title={a.status === 'Active' ? 'Deactivate Airport' : 'Activate Airport'}
                                            >
                                                <Archive className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                     </div>
                </div>

            </div>
        </AdminLayout>
    );
}
