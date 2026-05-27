import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Save, History, DollarSign, Edit2, AlertCircle } from 'lucide-react';

export default function RateDashboard() {
    const [activeTab, setActiveTab] = useState('Instant Ride');
    
    // Mock Rate Data structured as Matrix
    const [instantRates, setInstantRates] = useState({
        'Premium': { 'Sedan': 80, 'SUV': 120, 'Van/Minivan': 150 },
        'Business': { 'Sedan': 60, 'SUV': 90, 'Van/Minivan': 110 },
        'Economy': { 'Sedan': 40, 'SUV': 60, 'Van/Minivan': 80 },
        'Basic': { 'Sedan': 25, 'SUV': 45, 'Van/Minivan': 65 },
    });

    const [unsavedChanges, setUnsavedChanges] = useState<string[]>([]);
    
    const handleRateChange = (level: string, vehicle: string, value: string) => {
        const val = parseFloat(value);
        if(!isNaN(val)) {
            setInstantRates({
                ...instantRates,
                [level]: { ...instantRates[level as keyof typeof instantRates], [vehicle]: val }
            });
            const changeKey = `${level}-${vehicle}`;
            if(!unsavedChanges.includes(changeKey)) {
                setUnsavedChanges([...unsavedChanges, changeKey]);
            }
        }
    };

    const handleSave = () => {
        setUnsavedChanges([]);
        alert('Rates saved successfully and applied to new bookings.');
    };

    const serviceLevels = ['Premium', 'Business', 'Economy', 'Basic'];
    const vehicleTypes = ['Sedan', 'SUV', 'Van/Minivan'];

    return (
        <AdminLayout>
            <div className="p-8 max-w-6xl mx-auto">
                <div className="mb-8 flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <DollarSign className="w-8 h-8 mr-3 text-red-600" />
                            Rate Management
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Manage global pricing rules across all services dynamically.</p>
                    </div>
                    <Link to="/admin/rates/add" className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm px-6 py-3 transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
                        Add Custom Rate
                    </Link>
                </div>

                {/* Tabs */}
                <div className="flex border-b-4 border-gray-900 mb-8 overflow-x-auto">
                    {['Instant Ride', 'Scheduled Pickup', 'Car Rental'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-4 text-xs font-black uppercase tracking-widest whitespace-nowrap transition-colors ${
                                activeTab === tab 
                                ? 'bg-gray-900 text-white' 
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900'
                            }`}
                        >
                            {tab} Rates
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                    {/* Main Matrix Editor */}
                    <div className="xl:col-span-3 space-y-6">
                        
                        <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                            <div className="p-4 border-b-2 border-gray-200 flex justify-between items-center bg-gray-50">
                                <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">
                                    Base Rates (GH₵ / Trip)
                                </h2>
                                {unsavedChanges.length > 0 && (
                                    <div className="flex items-center text-yellow-600 text-xs font-bold uppercase tracking-widest bg-yellow-100 px-3 py-1">
                                        <AlertCircle className="w-3 h-3 mr-2" /> Unsaved Changes
                                    </div>
                                )}
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100 border-b-2 border-gray-900">
                                            <th className="p-4 text-xs font-black text-gray-500 uppercase tracking-widest w-48 border-r-2 border-gray-200">Service Level</th>
                                            {vehicleTypes.map(type => (
                                                <th key={type} className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center">{type}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y-2 divide-gray-100">
                                        {serviceLevels.map(level => (
                                            <tr key={level} className="hover:bg-gray-50 transition-colors">
                                                <td className="p-4 border-r-2 border-gray-200 bg-gray-50">
                                                    <span className="font-black text-gray-900 block">{level}</span>
                                                </td>
                                                {vehicleTypes.map(type => {
                                                    const changeKey = `${level}-${type}`;
                                                    const isChanged = unsavedChanges.includes(changeKey);
                                                    return (
                                                        <td key={type} className="p-3">
                                                            <div className="relative">
                                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-sm">₵</span>
                                                                <input 
                                                                    type="number" 
                                                                    defaultValue={instantRates[level as keyof typeof instantRates][type]}
                                                                    onChange={(e) => handleRateChange(level, type, e.target.value)}
                                                                    className={`w-full bg-white border-2 text-right text-gray-900 text-sm font-black py-2 pr-3 pl-8 focus:ring-0 focus:border-red-600 transition-colors ${isChanged ? 'border-yellow-400 bg-yellow-50 focus:bg-white' : 'border-gray-200'}`}
                                                                />
                                                                {isChanged && <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"></span>}
                                                            </div>
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button 
                                onClick={handleSave}
                                disabled={unsavedChanges.length === 0}
                                className={`font-black uppercase tracking-widest text-sm px-8 py-4 flex items-center transition-all ${
                                    unsavedChanges.length > 0 
                                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none' 
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed border-2 border-gray-400'
                                }`}
                            >
                                <Save className="w-5 h-5 mr-2" /> Save Global Rates
                            </button>
                        </div>
                    </div>

                    {/* Rate History Log */}
                    <div className="xl:col-span-1">
                        <div className="border-4 border-gray-900 p-6 bg-gray-50">
                            <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest flex items-center mb-6 pb-2 border-b-2 border-gray-200">
                                <History className="w-4 h-4 mr-2" /> Rate History
                            </h2>
                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:ml-2.5 md:before:-translate-x-px before:w-0.5 before:bg-gray-300">
                                {[
                                    { date: 'Oct 26, 2023 - 10:30', admin: 'Super Admin', change: 'Econ Sedan: 35 → 40' },
                                    { date: 'Sep 10, 2023 - 14:15', admin: 'Manager Osei', change: 'Premium SUV: 110 → 120' },
                                    { date: 'Aug 05, 2023 - 09:00', admin: 'Super Admin', change: 'Basic Van: 60 → 65' },
                                ].map((log, idx) => (
                                    <div key={idx} className="relative pl-8">
                                        <div className="absolute left-0 w-5 h-5 bg-white border-4 border-gray-900 rounded-full flex items-center justify-center -translate-x-1/2"></div>
                                        <div className="bg-white border-2 border-gray-200 p-3">
                                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{log.date}</p>
                                            <p className="text-xs font-black text-gray-900 mb-1">{log.change}</p>
                                            <p className="text-[10px] font-bold text-gray-400">By {log.admin}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
