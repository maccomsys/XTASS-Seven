import DriverLayout from './DriverLayout';
import { CarFront, Settings2, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function AssignedVehicle() {
    return (
        <DriverLayout>
             <div className="max-w-5xl mx-auto p-6 lg:p-12">
                 <div className="mb-8 border-b-4 border-gray-900 pb-4">
                    <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        Assigned Vehicle
                    </h1>
                    <p className="text-gray-500 font-medium mt-2">Details of the company-owned vehicle assigned to you.</p>
                </div>

                <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                    {/* Top Overview Section */}
                    <div className="flex flex-col lg:flex-row border-b-4 border-gray-900">
                        {/* Vehicle Photo Placeholder */}
                        <div className="lg:w-1/2 bg-gray-100 border-b-4 lg:border-b-0 lg:border-r-4 border-gray-900 p-8 flex items-center justify-center relative min-h-[300px]">
                            <img 
                                src="https://i.ibb.co/ymzQTwCS/Resized-2.jpg" 
                                alt="Assigned Vehicle - Toyota Camry" 
                                className="w-full h-auto object-cover border-4 border-white shadow-xl rotate-1 hover:rotate-0 transition-transform"
                            />
                            <div className="absolute top-4 right-4 bg-gray-900 text-white font-black text-[10px] uppercase tracking-widest px-3 py-1 shadow-sm">
                                XTASS FLEET
                            </div>
                        </div>

                        {/* Vehicle Key Info */}
                        <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                             <div className="mb-2">
                                <span className="inline-block bg-gray-200 text-gray-700 text-[10px] font-black uppercase tracking-widest px-2 py-1 mb-2">Class: Executive Sedan</span>
                             </div>
                             <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase mb-1">Toyota Camry</h2>
                             <p className="text-gray-500 font-bold mb-8">2022 Model Line</p>

                             <div className="bg-gray-100 p-4 border-2 border-gray-200 inline-block self-start mb-8 text-center min-w-[200px]">
                                 <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">Registration Plate</p>
                                 <h3 className="text-2xl font-mono font-black text-brand-maroon tracking-wider">GT 4592 - 22</h3>
                             </div>

                             <div>
                                 <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-3 border-b-2 border-gray-200 pb-2">Assigned Service Levels</h4>
                                 <div className="flex gap-3">
                                     <span className="flex items-center text-xs font-bold text-gray-900 bg-gray-100 px-3 py-2 border border-gray-200">
                                         <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" /> Premium
                                     </span>
                                     <span className="flex items-center text-xs font-bold text-gray-900 bg-gray-100 px-3 py-2 border border-gray-200">
                                         <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" /> Business
                                     </span>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* Specifications & Features */}
                    <div className="p-8">
                        <div className="flex items-center mb-6 border-b-2 border-gray-200 pb-2">
                            <Settings2 className="w-6 h-6 mr-3 text-red-600" />
                            <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest">Full Specifications</h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                            <div className="bg-gray-50 p-4 border border-gray-200">
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Passenger Cap</p>
                                <p className="text-lg font-black text-gray-900">4 People</p>
                            </div>
                            <div className="bg-gray-50 p-4 border border-gray-200">
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Luggage Cap</p>
                                <p className="text-lg font-black text-gray-900">3 Bags</p>
                            </div>
                            <div className="bg-gray-50 p-4 border border-gray-200">
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Transmission</p>
                                <p className="text-lg font-black text-gray-900">Automatic</p>
                            </div>
                            <div className="bg-gray-50 p-4 border border-gray-200">
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Fuel Type</p>
                                <p className="text-lg font-black text-gray-900">Petrol</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-4">Vehicle Features</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Air Conditioning', 'Leather Seats', 'USB Chargers', 'Bluetooth Audio', 'Free WiFi Module', 'Tinted Windows'].map((feature, idx) => (
                                    <span key={idx} className="bg-gray-900 text-white text-xs font-bold px-3 py-2 uppercase tracking-wide">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Admin Note */}
                    <div className="bg-red-50 p-6 border-t-4 border-brand-maroon flex items-start sm:items-center flex-col sm:flex-row gap-4">
                        <div className="bg-white p-3 rounded-full border-2 border-brand-maroon flex-shrink-0">
                            <ShieldAlert className="w-6 h-6 text-brand-maroon" />
                        </div>
                        <div>
                            <h4 className="text-sm font-black text-red-900 uppercase tracking-widest mb-1">Vehicle Administration Notice</h4>
                            <p className="text-xs text-red-800 font-bold leading-relaxed">
                                This vehicle is assigned to you by XTASS. All vehicle details, routine maintenance, repairs, and assignment changes are exclusively managed by the operations team. Do not attempt unauthorised modifications.
                            </p>
                        </div>
                    </div>
                </div>
             </div>
        </DriverLayout>
    );
}
