import { useState } from 'react';
import DriverLayout from './DriverLayout';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';
import { Wallet, CheckCircle2, TrendingUp, DollarSign, X } from 'lucide-react';

const DAILY_DATA = [
    { name: 'Mon', earnings: 150 },
    { name: 'Tue', earnings: 230 },
    { name: 'Wed', earnings: 180 },
    { name: 'Thu', earnings: 300 },
    { name: 'Fri', earnings: 450 },
    { name: 'Sat', earnings: 510 },
    { name: 'Sun', earnings: 200 },
];

const WEEKLY_DATA = [
    { name: 'Oct 08', total: 1100 },
    { name: 'Oct 15', total: 1350 },
    { name: 'Oct 22', total: 1580 },
    { name: 'Oct 29', total: 2020 },
];

export default function DriverEarnings() {
    const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const handleWithdraw = () => {
        setIsPending(true);
        setIsWithdrawalModalOpen(false);
    };

    return (
        <DriverLayout>
            <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-12">
                <div className="mb-8 border-b-4 border-gray-900 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            Earnings Dashboard
                        </h1>
                        <p className="text-gray-500 font-medium mt-2">Track your daily and weekly earnings history.</p>
                    </div>
                    <div>
                        {isPending ? (
                             <button disabled className="bg-gray-200 border-2 border-gray-300 text-gray-500 font-black uppercase tracking-widest px-6 py-3 cursor-not-allowed flex items-center shadow-sm">
                                Withdrawal Pending
                            </button>
                        ) : (
                            <button 
                                onClick={() => setIsWithdrawalModalOpen(true)}
                                className="bg-brand-maroon hover:bg-red-800 text-white font-black uppercase tracking-widest px-6 py-3 border-2 border-red-900 shadow-[4px_4px_0_0_rgba(127,29,29,1)] hover:shadow-none hover:translate-y-1 transition-all flex items-center"
                            >
                                <Wallet className="w-5 h-5 mr-2" /> Request Withdrawal
                            </button>
                        )}
                    </div>
                </div>

                {/* Summary Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white border-4 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                             <DollarSign className="w-24 h-24" />
                         </div>
                         <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1 relative z-10">Total Earnings This Week</h3>
                         <p className="text-4xl font-black text-brand-maroon tracking-wider relative z-10">GH₵ 2,020</p>
                    </div>
                    <div className="bg-white border-4 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                             <TrendingUp className="w-24 h-24" />
                         </div>
                         <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1 relative z-10">Avg. Earnings Per Trip</h3>
                         <p className="text-4xl font-black text-gray-900 tracking-wider relative z-10">GH₵ 85</p>
                    </div>
                    <div className="bg-white border-4 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                             <CheckCircle2 className="w-24 h-24" />
                         </div>
                         <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1 relative z-10">Total Trips This Month</h3>
                         <p className="text-4xl font-black text-gray-900 tracking-wider relative z-10">74</p>
                    </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Daily Chart */}
                    <div className="bg-white border-4 border-gray-900 p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-100 pb-2">Daily Earnings (Last 7 Days)</h3>
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={DAILY_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                    <XAxis 
                                        dataKey="name" 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{ fontSize: 10, fontWeight: 700, fill: '#6b7280' }} 
                                        dy={10}
                                    />
                                    <YAxis 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{ fontSize: 10, fontWeight: 700, fill: '#6b7280' }}
                                        tickFormatter={(val) => `GH₵${val}`}
                                    />
                                    <Tooltip 
                                        cursor={{ fill: '#f3f4f6' }}
                                        contentStyle={{ backgroundColor: '#111827', border: 'none', borderRadius: '0px', color: '#fff' }}
                                        itemStyle={{ color: '#fff', fontWeight: 900 }}
                                        formatter={(value: number) => [`GH₵ ${value}`, 'Earnings']}
                                    />
                                    <Bar dataKey="earnings" fill="#111827" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Weekly Chart */}
                    <div className="bg-white border-4 border-gray-900 p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-100 pb-2">Weekly Earnings (Last 4 Weeks)</h3>
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={WEEKLY_DATA} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                    <XAxis 
                                        dataKey="name" 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{ fontSize: 10, fontWeight: 700, fill: '#6b7280' }} 
                                        dy={10}
                                    />
                                    <YAxis 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{ fontSize: 10, fontWeight: 700, fill: '#6b7280' }}
                                        tickFormatter={(val) => `GH₵${val}`}
                                    />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#111827', border: 'none', borderRadius: '0px', color: '#fff' }}
                                        itemStyle={{ color: '#dc2626', fontWeight: 900 }}
                                        formatter={(value: number) => [`GH₵ ${value}`, 'Total']}
                                    />
                                    <Line type="monotone" dataKey="total" stroke="#dc2626" strokeWidth={4} activeDot={{ r: 8, fill: '#111827', stroke: '#fff', strokeWidth: 2 }} dot={{ r: 4, fill: '#dc2626' }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            {/* Withdrawal Modal */}
            {isWithdrawalModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" onClick={() => setIsWithdrawalModalOpen(false)}></div>
                    <div className="bg-white border-4 border-gray-900 shadow-2xl relative z-10 w-full max-w-md p-6">
                         <div className="flex justify-between items-center mb-6">
                              <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest">Request Withdrawal</h2>
                              <button onClick={() => setIsWithdrawalModalOpen(false)} className="text-gray-400 hover:text-gray-900">
                                  <X className="w-6 h-6" />
                              </button>
                         </div>
                         
                         <div className="bg-gray-50 border-2 border-gray-200 p-4 mb-6 text-center">
                             <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Available Balance</p>
                             <p className="text-3xl font-black text-brand-maroon">GH₵ 2,020.00</p>
                         </div>
                         
                         <div className="mb-6 space-y-4">
                             <div>
                                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Payout Method</label>
                                 <div className="p-3 border-2 border-gray-900 bg-gray-50 font-bold text-sm text-gray-900">
                                     Mobile Money (Ending in 4567)
                                 </div>
                             </div>
                             <div>
                                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Amount to Withdraw (GH₵)</label>
                                 <input 
                                     type="number" 
                                     defaultValue={2020}
                                     max={2020}
                                     className="w-full p-3 border-2 border-gray-200 focus:border-red-600 focus:ring-0 text-gray-900 font-bold outline-none transition-colors"
                                 />
                             </div>
                         </div>
                         
                         <button 
                             onClick={handleWithdraw}
                             className="w-full bg-gray-900 text-white font-black uppercase tracking-widest py-4 hover:bg-gray-800 transition-colors shadow-[4px_4px_0_0_rgba(220,38,38,1)] hover:shadow-none hover:translate-y-1"
                         >
                             Confirm Withdrawal
                         </button>
                    </div>
                </div>
            )}
        </DriverLayout>
    );
}
