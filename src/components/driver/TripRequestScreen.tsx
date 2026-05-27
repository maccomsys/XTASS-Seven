import { Link, useNavigate } from 'react-router-dom';
import DriverLayout from './DriverLayout';
import { Info, MapPin, Navigation, Car, Users, CreditCard, ArrowLeft, Clock } from 'lucide-react';

export default function TripRequestScreen() {
    const navigate = useNavigate();

    return (
        <DriverLayout>
            <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-12">
                
                <button 
                    onClick={() => navigate('/driver/dashboard')}
                    className="flex items-center text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-brand-maroon transition-colors mb-6"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                </button>

                {/* Notification Banner */}
                <div className="bg-white border-4 border-brand-maroon shadow-[8px_8px_0_0_rgba(220,38,38,1)] p-6 mb-8 flex items-start sm:items-center">
                    <div className="bg-red-50 p-3 mr-4 flex-shrink-0 animate-pulse border border-red-200">
                        <Info className="w-6 h-6 text-brand-maroon" />
                    </div>
                    <div>
                        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">New Booking Request Nearby</h2>
                        <p className="text-xs font-bold text-gray-600 leading-relaxed">
                            The XTASS operations team is reviewing available drivers. You will be notified if this trip is assigned to you.
                        </p>
                    </div>
                </div>

                {/* Request Details */}
                <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                    <div className="bg-gray-900 p-4 border-b-4 border-gray-900">
                        <h3 className="text-white text-sm font-black uppercase tracking-widest flex items-center">
                            <MapPin className="w-5 h-5 mr-3 text-red-500" /> Trip Details
                        </h3>
                    </div>

                    <div className="p-6 sm:p-8 space-y-6">
                        {/* Locations */}
                        <div className="relative pl-8 space-y-6 before:absolute before:left-3 before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-300">
                            <div className="relative">
                                <div className="absolute left-[-1.9rem] top-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-sm z-10"></div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Pickup Location</h4>
                                <p className="text-sm font-bold text-gray-900">Kotoka International Airport (Terminal 3)</p>
                            </div>
                            <div className="relative">
                                <div className="absolute left-[-1.9rem] top-1 w-4 h-4 rounded-full bg-brand-maroon border-2 border-white shadow-sm z-10"></div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Drop-off Location</h4>
                                <p className="text-sm font-bold text-gray-900">Kempinski Hotel Gold Coast City, Accra</p>
                            </div>
                        </div>

                        <hr className="border-gray-200 border-2" />

                        {/* Specs */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                             <div>
                                 <div className="flex items-center text-gray-400 mb-1">
                                     <Navigation className="w-4 h-4 mr-2" />
                                     <span className="text-[10px] uppercase font-bold tracking-widest">Est. Distance</span>
                                 </div>
                                 <p className="font-black text-gray-900">8.5 km</p>
                             </div>
                             <div>
                                 <div className="flex items-center text-gray-400 mb-1">
                                     <Car className="w-4 h-4 mr-2" />
                                     <span className="text-[10px] uppercase font-bold tracking-widest">Service Level</span>
                                 </div>
                                 <p className="font-black text-gray-900">Premium</p>
                             </div>
                             <div>
                                 <div className="flex items-center text-gray-400 mb-1">
                                     <Users className="w-4 h-4 mr-2" />
                                     <span className="text-[10px] uppercase font-bold tracking-widest">Passengers</span>
                                 </div>
                                 <p className="font-black text-gray-900">2</p>
                             </div>
                             <div>
                                 <div className="flex items-center text-gray-400 mb-1">
                                     <CreditCard className="w-4 h-4 mr-2" />
                                     <span className="text-[10px] uppercase font-bold tracking-widest">Est. Fare</span>
                                 </div>
                                 <p className="font-black text-brand-maroon">GH₵ 120</p>
                             </div>
                        </div>

                        {/* Status Message */}
                        <div className="bg-gray-50 border-2 border-gray-200 p-4 mt-6 flex flex-col items-center justify-center text-center">
                            <Clock className="w-6 h-6 text-gray-400 mb-2 animate-bounce" />
                            <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">Awaiting Admin Allocation</p>
                        </div>

                    </div>
                </div>

            </div>
        </DriverLayout>
    );
}
