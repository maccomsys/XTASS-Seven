import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { CreditCard, Save, Plus, Trash2 } from 'lucide-react';

const INITIAL_PROVIDERS = [
    { id: 1, name: 'MTN Mobile Money' },
    { id: 2, name: 'Vodafone Cash' },
    { id: 3, name: 'AirtelTigo Money' }
];

export default function PaymentDisplaySettings() {
    const [providers, setProviders] = useState(INITIAL_PROVIDERS);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Payment display settings updated.');
    };

    const addProvider = () => {
        const name = prompt('Enter new mobile money provider name:');
        if (name) {
            setProviders([...providers, { id: Date.now(), name }]);
        }
    };

    const removeProvider = (id: number) => {
        setProviders(providers.filter(p => p.id !== id));
    };

    return (
        <AdminLayout>
             <div className="p-8 max-w-5xl mx-auto">
                 <div className="mb-8 border-b-4 border-gray-900 pb-4">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <CreditCard className="w-8 h-8 mr-3 text-red-600" />
                        Payment Display Settings
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Configure which payment methods and currencies are displayed to customers.</p>
                </div>

                <form onSubmit={handleSave} className="space-y-8">
                    {/* Payment Method Toggles */}
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-200 pb-2">Enabled Payment Methods</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-200">
                                <div>
                                    <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Credit Card</p>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">Visa, Mastercard, etc.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-200">
                                <div>
                                    <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Debit Card</p>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">Locally accepted debit</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-200">
                                <div>
                                    <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Mobile Money</p>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">MTN, Vodafone, etc.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-200">
                                <div>
                                    <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Other Secure Online</p>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">Additional gateways</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Money Providers */}
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                         <div className="flex justify-between items-center mb-6 border-b-2 border-gray-200 pb-2">
                             <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest">Mobile Money Providers</h2>
                             <button type="button" onClick={addProvider} className="text-sm font-black uppercase tracking-widest text-brand-maroon hover:text-red-800 flex items-center transition-colors">
                                 <Plus className="w-4 h-4 mr-1" /> Add Provider
                             </button>
                         </div>
                         
                         <div className="space-y-3">
                             {providers.map((p) => (
                                 <div key={p.id} className="flex items-center justify-between p-4 border-2 border-gray-200 bg-white">
                                     <span className="font-bold text-gray-900">{p.name}</span>
                                     <div className="flex items-center space-x-6">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" defaultChecked className="sr-only peer" />
                                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                                        </label>
                                        <button type="button" onClick={() => removeProvider(p.id)} className="text-gray-400 hover:text-red-600 transition-colors">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                     </div>
                                 </div>
                             ))}
                             {providers.length === 0 && (
                                 <p className="text-sm font-bold text-gray-500 text-center py-4">No providers configured.</p>
                             )}
                         </div>
                    </div>

                     {/* Currency Display Settings */}
                     <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-200 pb-2">Currency Display Options</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Currency Symbol</label>
                                <input type="text" value="GH₵" readOnly className="w-full bg-gray-100 border-2 border-gray-200 text-gray-500 text-sm font-black p-3 cursor-not-allowed text-center" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Decimal Places</label>
                                <select className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none text-center">
                                    <option value="0">0 (e.g., GH₵ 100)</option>
                                    <option value="2" selected>2 (e.g., GH₵ 100.00)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                         <button type="submit" className="bg-brand-maroon hover:bg-red-800 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
                            <Save className="w-5 h-5 mr-2" /> Save Settings
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
