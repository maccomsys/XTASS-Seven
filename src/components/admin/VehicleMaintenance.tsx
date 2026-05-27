import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Wrench, Plus, ArrowLeft, Info } from 'lucide-react';

export default function VehicleMaintenance() {
    const { id } = useParams();
    const vehicleId = id || 'V-101';
    
    const [showAddForm, setShowAddForm] = useState(false);

    const logEntries = [
        { date: '2023-10-15', type: 'Routine', desc: '10,000 mile scheduled service. Oil change, filter replacement.', cost: 650, nextDue: '2024-01-15' },
        { date: '2023-08-02', type: 'Repair', desc: 'Replaced front brake pads and rotors.', cost: 1200, nextDue: '2025-08-02' },
        { date: '2023-04-10', type: 'Inspection', desc: 'Annual vehicle safety inspection. Passed.', cost: 150, nextDue: '2024-04-10' },
    ];

    return (
        <AdminLayout>
            <div className="p-8 max-w-6xl mx-auto">
                <div className="mb-6 flex justify-between items-center">
                    <Link to={`/admin/fleet/${vehicleId}`} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Vehicle
                    </Link>
                    {!showAddForm && (
                        <button onClick={() => setShowAddForm(true)} className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-xs px-4 py-2 transition-colors flex items-center shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                            <Plus className="w-4 h-4 mr-2" /> Add Entry
                        </button>
                    )}
                </div>

                <div className="mb-8">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <Wrench className="w-8 h-8 mr-3 text-red-600" />
                        Maintenance Log
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Vehicle {vehicleId} - Toyota Camry 2023</p>
                </div>

                {/* Auto Unavailability Note */}
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8 flex items-start">
                    <Info className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="text-sm font-bold text-orange-900 uppercase tracking-wider">Auto-Unavailability</p>
                        <p className="text-xs text-orange-800 mt-1">This vehicle is automatically marked unavailable for booking and assignment during scheduled maintenance periods recorded in the calendar.</p>
                    </div>
                </div>

                {showAddForm && (
                    <div className="bg-white border-2 border-gray-900 p-6 mb-8 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-black text-gray-900 uppercase tracking-wider">New Maintenance Entry</h2>
                            <button onClick={() => setShowAddForm(false)} className="text-gray-500 hover:text-gray-900 text-sm font-bold uppercase">Cancel</button>
                        </div>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Date</label>
                                    <input type="date" required className="w-full bg-white border-2 border-gray-300 p-3 text-sm font-bold focus:border-red-600" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Type</label>
                                    <select required className="w-full bg-white border-2 border-gray-300 p-3 text-sm font-bold focus:border-red-600 appearance-none">
                                        <option value="Routine">Routine</option>
                                        <option value="Repair">Repair</option>
                                        <option value="Inspection">Inspection</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Description</label>
                                <textarea rows={2} required className="w-full bg-white border-2 border-gray-300 p-3 text-sm font-bold focus:border-red-600"></textarea>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Cost (GH₵)</label>
                                    <input type="number" min="0" required className="w-full bg-white border-2 border-gray-300 p-3 text-sm font-bold focus:border-red-600" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Next Due Date</label>
                                    <input type="date" className="w-full bg-white border-2 border-gray-300 p-3 text-sm font-bold focus:border-red-600" />
                                </div>
                            </div>
                            <div className="pt-4 flex justify-end">
                                <button type="button" onClick={() => setShowAddForm(false)} className="bg-gray-900 hover:bg-black text-white font-black uppercase tracking-widest text-sm px-6 py-3 transition-colors">
                                    Save Entry
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Table */}
                <div className="bg-white border-2 border-gray-900 overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-100 border-b-2 border-gray-900">
                                <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Date</th>
                                <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Type</th>
                                <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest w-1/3">Description</th>
                                <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Cost (GH₵)</th>
                                <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Next Due</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-gray-100">
                            {logEntries.map((log, i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                    <td className="p-4 whitespace-nowrap text-sm font-bold text-gray-900">{log.date}</td>
                                    <td className="p-4">
                                        <span className="inline-block bg-gray-200 text-gray-800 text-xs font-bold uppercase tracking-wider px-2 py-1">{log.type}</span>
                                    </td>
                                    <td className="p-4 text-sm font-medium text-gray-700">{log.desc}</td>
                                    <td className="p-4 text-right text-sm font-black text-brand-maroon">{log.cost.toFixed(2)}</td>
                                    <td className="p-4 text-sm font-bold text-gray-500">{log.nextDue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </AdminLayout>
    );
}
