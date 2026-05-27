import { useState } from 'react';
import { Link } from 'react-router-dom';
import DriverLayout from './DriverLayout';
import { Wallet, CheckCircle, Star, Car, Bell, ChevronRight, Activity, Map as MapIcon, History, UserCircle } from 'lucide-react';

export default function DriverDashboard() {
    const [isOnline, setIsOnline] = useState(false);
    const [hasActiveTrip, setHasActiveTrip] = useState(false); // Toggle to test active trip
    const [hasIncomingRequest, setHasIncomingRequest] = useState(true); // Toggle to test incoming request

    return (
        <DriverLayout>
            {/* Top Operational Bar */}
            <div className={`transition-colors duration-300 ${isOnline ? 'bg-green-600' : 'bg-gray-300'}`}>
                <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <Activity className={`w-5 h-5 mr-2 ${isOnline ? 'text-white' : 'text-gray-500'}`} />
                        <span className={`font-black uppercase tracking-widest text-sm ${isOnline ? 'text-white' : 'text-gray-600'}`}>
                            {isOnline ? 'Available' : 'Offline'}
                        </span>
                    </div>
                    
                    <button 
                        onClick={() => setIsOnline(!isOnline)}
                        className={`relative inline-flex h-8 w-16 items-center border-2 border-transparent transition-colors focus:outline-none ${isOnline ? 'bg-green-900' : 'bg-gray-400'}`}
                    >
                        <span className={`inline-block h-6 w-6 transform bg-white transition-transform ${isOnline ? 'translate-x-8' : 'translate-x-1'}`} />
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
                
                {/* State Message */}
                <div className="mb-8 text-center sm:text-left">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">
                        {isOnline ? 'On Duty' : 'Off Duty'}
                    </h1>
                    <p className="text-gray-500 font-bold mt-1 text-sm flex items-center justify-center sm:justify-start">
                        {isOnline ? (
                            <><span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span> Waiting for assignments</>
                        ) : (
                            'You are currently offline. Toggle status to start receiving trips.'
                        )}
                    </p>
                </div>

                {/* Notifications & Banners */}
                <div className="space-y-4 mb-8">
                    {hasActiveTrip && (
                        <Link to="/driver/trip-management" className="block bg-orange-500 p-4 border-l-8 border-orange-700 shadow-md transform transition hover:-translate-y-1">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center justify-start">
                                    <Car className="w-6 h-6 text-white mr-4 animate-bounce" />
                                    <div>
                                        <h3 className="text-white font-black uppercase tracking-widest text-sm">Active Trip: XTA-1090</h3>
                                        <p className="text-orange-100 text-xs font-bold mt-1">Tap to manage trip progress</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-6 h-6 text-white opacity-70" />
                            </div>
                        </Link>
                    )}

                    {hasIncomingRequest && isOnline && (
                        <Link to="/driver/trip-request" className="block bg-white p-4 border-2 border-brand-maroon shadow-[4px_4px_0_0_rgba(220,38,38,1)] transform transition hover:-translate-y-1">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center justify-start">
                                    <div className="w-10 h-10 bg-red-100 flex items-center justify-center mr-4">
                                        <Bell className="w-5 h-5 text-brand-maroon animate-pulse" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-black uppercase tracking-widest text-sm">New Booking Request</h3>
                                        <p className="text-gray-500 text-xs font-bold mt-1">Tap to view details while admin reviews</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                            </div>
                        </Link>
                    )}
                </div>

                {/* Earnings Summary Widget */}
                <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-6 mb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Wallet className="w-24 h-24" />
                    </div>
                    <h2 className="text-sm font-black text-gray-500 uppercase tracking-widest border-b-2 border-gray-100 pb-3 mb-6">Earnings Summary</h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Today</p>
                            <p className="text-2xl font-black text-brand-maroon tracking-wider">GH₵ 345</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">This Week</p>
                            <p className="text-2xl font-black text-gray-900 tracking-wider">GH₵ 1,280</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Trips Today</p>
                            <p className="text-2xl font-black text-gray-900 flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> 4
                            </p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Rating</p>
                            <p className="text-2xl font-black text-gray-900 flex items-center">
                                <Star className="w-5 h-5 text-yellow-500 mr-1" /> 4.9
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Access Links */}
                <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4 flex items-center">
                    <MapIcon className="w-4 h-4 mr-2" /> Quick Access
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                     <Link to="/driver/earnings" className="bg-white border-2 border-gray-200 p-4 hover:border-gray-900 transition-colors flex items-center">
                         <div className="w-10 h-10 bg-gray-100 flex items-center justify-center mr-4 border border-gray-200">
                             <Wallet className="w-5 h-5 text-gray-600" />
                         </div>
                         <div>
                             <span className="block font-black text-sm uppercase tracking-widest text-gray-900">Earnings</span>
                         </div>
                     </Link>
                     <Link to="/driver/history" className="bg-white border-2 border-gray-200 p-4 hover:border-gray-900 transition-colors flex items-center">
                         <div className="w-10 h-10 bg-gray-100 flex items-center justify-center mr-4 border border-gray-200">
                             <History className="w-5 h-5 text-gray-600" />
                         </div>
                         <div>
                             <span className="block font-black text-sm uppercase tracking-widest text-gray-900">History</span>
                         </div>
                     </Link>
                     <Link to="/driver/profile" className="bg-white border-2 border-gray-200 p-4 hover:border-gray-900 transition-colors flex items-center">
                         <div className="w-10 h-10 bg-gray-100 flex items-center justify-center mr-4 border border-gray-200">
                             <UserCircle className="w-5 h-5 text-gray-600" />
                         </div>
                         <div>
                             <span className="block font-black text-sm uppercase tracking-widest text-gray-900">Profile</span>
                         </div>
                     </Link>
                </div>

            </div>
        </DriverLayout>
    );
}
