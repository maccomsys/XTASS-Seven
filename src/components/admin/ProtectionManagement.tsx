import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Shield, Plus, Edit } from 'lucide-react';

const MOCK_PROTECTIONS = [
    { id: 'PR-1', name: 'Standard Damage Waiver', desc: 'Limits liability to GH₵ 2,000 for standard vehicles.', price: 50, types: 'Car Rental', status: true },
    { id: 'PR-2', name: 'Premium Damage Waiver', desc: 'Zero excess liability for collision damage.', price: 120, types: 'Car Rental', status: true },
    { id: 'PR-3', name: 'Roadside Assistance Plus', desc: '24/7 towing and flat tire support.', price: 25, types: 'Car Rental, Scheduled Pickup', status: true },
    { id: 'PR-4', name: 'Personal Accident Cover', desc: 'Medical coverage for driver and passengers.', price: 40, types: 'All Rides', status: false },
];

export default function ProtectionManagement() {
    const [protections, setProtections] = useState(MOCK_PROTECTIONS);

    const toggleStatus = (id: string) => {
        setProtections(protections.map(p => 
            p.id === id ? { ...p, status: !p.status } : p
        ));
    };

    return (
        <AdminLayout>
            <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <Shield className="w-8 h-8 mr-3 text-red-600" />
                            Protection Products
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Manage insurance and liability coverages available during booking.</p>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm px-6 py-3 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
                        <Plus className="w-4 h-4 mr-2" /> Add Protection
                    </button>
                </div>

                <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-900">
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Product Name & Desc</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Price (GH₵)</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden md:table-cell">Applicable Rides</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center">Status</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-100">
                                {protections.map((p) => (
                                    <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 w-1/3">
                                            <p className="font-black text-gray-900 text-sm mb-1">{p.name}</p>
                                            <p className="text-xs text-gray-500 font-bold leading-snug">{p.desc}</p>
                                        </td>
                                        <td className="p-4">
                                            <span className="font-bold text-gray-900">{p.price}/day</span>
                                        </td>
                                        <td className="p-4 hidden md:table-cell">
                                            <span className="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-1 border border-gray-300">
                                                {p.types}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <button 
                                                onClick={() => toggleStatus(p.id)}
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${p.status ? 'bg-green-500' : 'bg-gray-300'}`}
                                            >
                                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${p.status ? 'translate-x-6' : 'translate-x-1'}`} />
                                            </button>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex justify-end">
                                               <button className="p-2 text-gray-500 hover:text-brand-maroon bg-gray-100 hover:bg-red-50 transition-colors">
                                                   <Edit className="w-4 h-4" />
                                               </button>
                                            </div>
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
