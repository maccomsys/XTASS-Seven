import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { DollarSign, Save, RotateCcw, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function VehiclePricing() {
    const [activeTab, setActiveTab] = useState('Instant Ride');
    const [success, setSuccess] = useState(false);

    // Mock initial data
    const initialRates = {
        'Instant Ride': {
            'Sedan': { Basic: 50, Economy: 60, Business: 80, Premium: 120 },
            'SUV': { Basic: 80, Economy: 90, Business: 120, Premium: 180 },
            'Van/Minivan': { Basic: 100, Economy: 120, Business: 150, Premium: 200 }
        },
        'Scheduled Pickup': {
            'Sedan': { Basic: 55, Economy: 65, Business: 85, Premium: 125 },
            'SUV': { Basic: 85, Economy: 95, Business: 125, Premium: 185 },
            'Van/Minivan': { Basic: 105, Economy: 125, Business: 155, Premium: 205 }
        },
        'Car Rental (Daily)': {
            'Sedan': { Basic: 300, Economy: 350, Business: 500, Premium: 750 },
            'SUV': { Basic: 450, Economy: 500, Business: 750, Premium: 1200 },
            'Van/Minivan': { Basic: 550, Economy: 650, Business: 900, Premium: 1500 }
        }
    };

    const tabs = ['Instant Ride', 'Scheduled Pickup', 'Car Rental (Daily)'];
    const vehicleClasses = ['Sedan', 'SUV', 'Van/Minivan'];
    const serviceLevels = ['Basic', 'Economy', 'Business', 'Premium'];

    const handleSave = () => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    const handleReset = () => {
        if(confirm('Are you sure you want to reset all rates to defaults? This cannot be undone.')){
            // reset logic
            alert('Rates reset to defaults.');
        }
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <DollarSign className="w-8 h-8 mr-3 text-red-600" />
                            Classes & Pricing
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Manage rate matrices across all vehicle classes and service levels.</p>
                    </div>
                    <div className="flex space-x-3">
                        <button onClick={handleReset} className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold uppercase tracking-widest text-xs px-4 py-2 transition-colors flex items-center border-2 border-gray-300">
                            <RotateCcw className="w-4 h-4 mr-2" /> Reset
                        </button>
                        <button onClick={handleSave} className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-xs px-6 py-2 transition-colors flex items-center shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
                            <Save className="w-4 h-4 mr-2" /> Save Changes
                        </button>
                    </div>
                </div>

                {success && (
                    <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-4 flex items-center">
                        <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 inline-block" />
                        <span className="text-sm font-bold text-green-900">Rate matrix updated. New rates will apply to all future bookings.</span>
                    </div>
                )}

                <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                    {/* Tabs */}
                    <div className="flex border-b-4 border-gray-900 bg-gray-50 overflow-x-auto">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-4 text-sm font-black uppercase tracking-widest whitespace-nowrap border-r-4 border-gray-900 transition-colors ${activeTab === tab ? 'bg-white text-red-600' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Matrix Editor */}
                    <div className="p-8">
                        <div className="flex items-center bg-blue-50 p-4 border-l-4 border-blue-600 mb-8">
                            <AlertCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                            <p className="text-xs font-bold text-blue-900">
                                Click any cell to jump in and edit the rate (in GH₵). Use the <kbd className="bg-white px-1 border border-blue-200 rounded">Tab</kbd> key to move quickly between cells.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse border-2 border-gray-200">
                                <thead>
                                    <tr>
                                        <th className="bg-gray-100 border-2 border-gray-200 p-4 text-sm font-black text-gray-900 uppercase tracking-widest w-1/4">
                                            Service Level
                                        </th>
                                        {vehicleClasses.map(vc => (
                                            <th key={vc} className="bg-gray-100 border-2 border-gray-200 p-4 text-sm font-black text-gray-900 uppercase tracking-widest text-center">
                                                {vc}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {serviceLevels.map(level => (
                                        <tr key={level} className="hover:bg-gray-50 transition-colors">
                                            <td className="border-2 border-gray-200 p-4 font-bold text-gray-900">
                                                {level}
                                            </td>
                                            {vehicleClasses.map(vc => {
                                                // Accessing the mocked data: initialRates[activeTab][vc][level]
                                                // In a real app we'd bind this to local state. For now just displaying.
                                                const rateValue = (initialRates as any)[activeTab][vc][level];
                                                
                                                return (
                                                    <td key={`${vc}-${level}`} className="border-2 border-gray-200 p-0 text-center relative group">
                                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold pointer-events-none">₵</div>
                                                        <input 
                                                            type="number" 
                                                            defaultValue={rateValue}
                                                            className="w-full h-full p-4 pl-8 text-center text-lg font-black text-gray-900 bg-transparent hover:bg-yellow-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600 transition-colors"
                                                        />
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}
