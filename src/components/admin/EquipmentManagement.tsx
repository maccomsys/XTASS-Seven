import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Box, Plus, Edit } from 'lucide-react';

const MOCK_EQUIPMENT = [
    { id: 'EQ-1', name: 'GPS Navigation System', desc: 'Standalone Garmin or TomTom device.', price: 15, types: 'Car Rental', qty: 20, status: true },
    { id: 'EQ-2', name: 'Child Safety Seat (Toddler)', desc: 'Rear or forward facing up to 18kg.', price: 20, types: 'All Rides', qty: 15, status: true },
    { id: 'EQ-3', name: '4G WiFi Hotspot', desc: 'Portable router with 5GB daily limit.', price: 30, types: 'Car Rental, Scheduled Pickup', qty: 10, status: true },
    { id: 'EQ-4', name: 'Roof Rack Cargo Carrier', desc: 'Extra storage for luggage on SUV mounts.', price: 40, types: 'Car Rental (SUV only)', qty: 5, status: false },
];

export default function EquipmentManagement() {
    const [equipment, setEquipment] = useState(MOCK_EQUIPMENT);

    const toggleStatus = (id: string) => {
        setEquipment(equipment.map(e => 
            e.id === id ? { ...e, status: !e.status } : e
        ));
    };

    return (
        <AdminLayout>
            <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <Box className="w-8 h-8 mr-3 text-red-600" />
                            Equipment & Accessories
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Manage physical add-ons available for rent.</p>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm px-6 py-3 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
                        <Plus className="w-4 h-4 mr-2" /> Add Equipment
                    </button>
                </div>

                <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-900">
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Item Name & Desc</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Price (GH₵)</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden lg:table-cell">Applicable Rides</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center">Qty</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center">Status</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-100">
                                {equipment.map((e) => (
                                    <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 w-1/3">
                                            <p className="font-black text-gray-900 text-sm mb-1">{e.name}</p>
                                            <p className="text-xs text-gray-500 font-bold leading-snug">{e.desc}</p>
                                        </td>
                                        <td className="p-4">
                                            <span className="font-bold text-gray-900">{e.price}/day</span>
                                        </td>
                                        <td className="p-4 hidden lg:table-cell">
                                            <span className="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-1 border border-gray-300">
                                                {e.types}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={`font-black text-xs px-2 py-1 border-2 ${e.qty < 10 ? 'border-red-500 text-red-600 bg-red-50' : 'border-gray-300 text-gray-700 bg-white'}`}>
                                                {e.qty} In Stock
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <button 
                                                onClick={() => toggleStatus(e.id)}
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${e.status ? 'bg-green-500' : 'bg-gray-300'}`}
                                            >
                                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${e.status ? 'translate-x-6' : 'translate-x-1'}`} />
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
