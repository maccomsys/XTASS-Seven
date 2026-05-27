import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DriverLayout from './DriverLayout';
import { Phone, MapPin, Navigation, Map as MapIcon, Users, CreditCard, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function TripManagementScreen() {
    const navigate = useNavigate();
    // 1: En Route to Pickup, 2: Driver Arrived, 3: In Progress
    const [stage, setStage] = useState<1 | 2 | 3>(1);

    const handleNextStage = () => {
        if (stage === 1) setStage(2);
        else if (stage === 2) setStage(3);
        else if (stage === 3) {
            navigate('/driver/trip-completion');
        }
    };

    return (
        <DriverLayout>
            {/* Persistent Active Trip Banner */}
            <div className="bg-orange-500 border-b-4 border-orange-700 sticky top-16 z-20">
                <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
                     <span className="text-white text-[10px] sm:text-xs font-black uppercase tracking-widest flex items-center">
                         <span className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
                         Active Trip: XTA-1090
                     </span>
                     <span className="text-orange-100 text-[10px] sm:text-xs font-bold uppercase tracking-widest flex items-center">
                         {stage === 1 && 'En Route to Pickup'}
                         {stage === 2 && 'Waiting for Passenger'}
                         {stage === 3 && 'Trip in Progress'}
                     </span>
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
                
                {/* Trip Details Card */}
                <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-6">
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 border-b-2 border-gray-100 pb-4 gap-4">
                        <div>
                             <h1 className="text-2xl font-black text-gray-900 tracking-tight uppercase">Booking Details</h1>
                             <p className="text-brand-maroon font-mono font-bold text-sm mt-1">ID: XTA-1090</p>
                        </div>
                        {/* Passenger Contact Card */}
                        <div className="bg-gray-50 border-2 border-gray-200 p-3 flex items-center justify-between w-full md:w-auto">
                            <div className="mr-6">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Passenger</p>
                                <p className="text-sm font-black text-gray-900">Sandra O.</p>
                            </div>
                            <button className="bg-green-600 hover:bg-green-700 text-white p-2 border-2 border-green-800 transition-colors shadow-sm">
                                <Phone className="w-5 h-5 fill-current" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
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

                        {/* Specs */}
                        <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 border-2 border-gray-100">
                             <div>
                                 <div className="flex items-center text-gray-400 mb-1">
                                     <Users className="w-4 h-4 mr-2" />
                                     <span className="text-[10px] uppercase font-bold tracking-widest">Passengers</span>
                                 </div>
                                 <p className="font-black text-gray-900 text-sm">2</p>
                             </div>
                             <div>
                                 <div className="flex items-center text-gray-400 mb-1">
                                     <CreditCard className="w-4 h-4 mr-2" />
                                     <span className="text-[10px] uppercase font-bold tracking-widest">Est. Fare</span>
                                 </div>
                                 <p className="font-black text-gray-900 text-sm">GH₵ 120</p>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Progress Tracking Bar */}
                <div className="bg-white border-2 border-gray-900 p-4 flex items-center justify-between shadow-sm relative">
                     <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2"></div>
                     {/* Stages */}
                     {[1, 2, 3].map((step) => {
                         const isActive = stage === step;
                         const isPast = stage > step;
                         
                         return (
                             <div key={step} className="flex flex-col items-center bg-white px-2">
                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-black text-xs ${
                                    isPast ? 'bg-gray-900 border-gray-900 text-white' : 
                                    isActive ? 'bg-white border-brand-maroon text-brand-maroon scale-110 shadow-md' : 'bg-gray-50 border-gray-300 text-gray-400'
                                }`}>
                                   {isPast ? <CheckCircle2 className="w-5 h-5 text-white" /> : step}
                                </div>
                                <span className={`text-[10px] uppercase font-bold tracking-widest mt-2 hidden sm:block ${
                                    isActive ? 'text-gray-900' : 'text-gray-400'
                                }`}>
                                    {step === 1 && 'En Route'}
                                    {step === 2 && 'Arrived'}
                                    {step === 3 && 'In Progress'}
                                </span>
                             </div>
                         )
                     })}
                </div>

                {/* Map Placeholder */}
                <div className="relative h-64 bg-[#e5e5e5] border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <MapIcon className="w-16 h-16 text-gray-400 opacity-20" />
                    </div>
                    {/* Fake Route */}
                    {stage < 3 && (
                        <div className="absolute top-1/3 left-1/3 w-32 border-t-4 border-dashed border-gray-500 rotate-45 transform origin-left"></div>
                    )}
                    {stage >= 1 && (
                        <div className="absolute top-1/2 left-1/2 flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
                            <div className="w-5 h-5 rounded-full bg-gray-900 border-2 border-white shadow-lg z-10 flex items-center justify-center">
                                <Car className="w-3 h-3 text-white" />
                            </div>
                        </div>
                    )}
                    {stage < 3 && (
                        <div className="absolute top-1/4 right-1/4 flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-lg"></div>
                            <span className="bg-white text-[10px] font-black px-1 mt-1 shadow-sm uppercase">Pickup</span>
                        </div>
                    )}
                    {stage === 3 && (
                        <div className="absolute bottom-1/4 right-1/4 flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-brand-maroon border-2 border-white shadow-lg"></div>
                            <span className="bg-white text-[10px] font-black px-1 mt-1 shadow-sm uppercase">Drop-off</span>
                        </div>
                    )}
                </div>

                {/* Stage Action Button */}
                <div className="mt-8 pt-4">
                    <button 
                        onClick={handleNextStage}
                        className={`w-full py-5 px-6 border-2 flex items-center justify-center transition-all ${
                            stage === 1 ? 'bg-gray-900 border-gray-900 text-white hover:bg-gray-800 shadow-[4px_4px_0_0_rgba(34,197,94,1)]' :
                            stage === 2 ? 'bg-green-600 border-green-700 text-white hover:bg-green-700 shadow-[4px_4px_0_0_rgba(21,128,61,1)]' :
                            'bg-brand-maroon border-red-800 text-white hover:bg-red-800 shadow-[4px_4px_0_0_rgba(153,27,27,1)]'
                        } font-black uppercase tracking-widest text-lg md:text-xl hover:translate-y-1 hover:shadow-none`}
                    >
                        {stage === 1 && 'I Have Arrived'}
                        {stage === 2 && 'Start Trip'}
                        {stage === 3 && 'Complete Trip'}
                        <ChevronRight className="w-6 h-6 ml-2" />
                    </button>
                    <p className="text-center text-[10px] uppercase font-bold tracking-widest text-gray-500 mt-4">
                        {stage === 1 && 'Tap when you reach the pickup location'}
                        {stage === 2 && 'Tap when passenger is secure and trip begins'}
                        {stage === 3 && 'Tap when you reach destination and drop off passenger'}
                    </p>
                </div>

            </div>
        </DriverLayout>
    );
}
